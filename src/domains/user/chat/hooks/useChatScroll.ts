import { useEffect, useLayoutEffect, useRef, useCallback } from 'react';

const debounce = (func: (...args: any[]) => void, delay: number) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

interface UseChatScrollProps {
  messages: any[];
  data: any;
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
  fetchNextPage: () => void;
}

export const useChatScroll = ({
  messages,
  data,
  isFetchingNextPage,
  hasNextPage,
  fetchNextPage,
}: UseChatScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const shouldAutoScrollRef = useRef(true);
  const prevScroll = useRef({ height: 0, top: 0 });

  const scrollToBottom = useCallback((smooth = true) => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto' });
    } else if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    if (messages.length > 0 && data && !isFetchingNextPage) {
      const isInitialLoad = data.pages.length === 1;
      if (isInitialLoad) {
        setTimeout(() => {
          scrollToBottom(false);
          shouldAutoScrollRef.current = true;
        }, 100);
      }
    }
  }, [data, messages.length, isFetchingNextPage, scrollToBottom]);

  useEffect(() => {
    if (!messages.length || !shouldAutoScrollRef.current) return;

    const lastMsg = messages[messages.length - 1];
    if (lastMsg.role === 'user' || lastMsg.role === 'model') {
      scrollToBottom(true);
    }
  }, [messages, scrollToBottom]);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (prevScroll.current.height > 0) {
      const heightDiff = el.scrollHeight - prevScroll.current.height;
      el.scrollTop = prevScroll.current.top + heightDiff;
      prevScroll.current = { height: 0, top: 0 };
    }
  }, [messages]);

  const handleScroll = useCallback(
    debounce(() => {
      const el = containerRef.current;
      if (!el || isFetchingNextPage || !hasNextPage) return;

      if (el.scrollTop < 100) {
        prevScroll.current = { height: el.scrollHeight, top: el.scrollTop };
        fetchNextPage();
      }
    }, 200),
    [isFetchingNextPage, hasNextPage, fetchNextPage]
  );

  const setShouldAutoScroll = useCallback((value: boolean) => {
    shouldAutoScrollRef.current = value;
  }, []);

  return {
    containerRef,
    bottomRef,
    scrollToBottom,
    handleScroll,
    setShouldAutoScroll,
  };
}; 