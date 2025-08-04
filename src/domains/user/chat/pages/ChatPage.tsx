import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useChatHistory } from '../hooks/useChatHistory';
import { useSendMessage } from '../hooks/useSendMessage';
import { useChatScroll } from '../hooks/useChatScroll';
import type { ChatMessage as ChatMessageType } from '../model/chat.types';
import ChatMessage from '../components/ChatMessage';
import TypingIndicator from '../components/TypingIndicator';
import ChatInput from '../components/ChatInput';
import EmptyChatState from '../components/EmptyChatState';

const ChatPage = () => {
  const { userPhobiaId } = useParams<{ userPhobiaId: string }>();
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [input, setInput] = useState('');

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useChatHistory(
    userPhobiaId ?? ''
  );
  const sendMessageMutation = useSendMessage();

  const { containerRef, bottomRef, scrollToBottom, handleScroll, setShouldAutoScroll } =
    useChatScroll({
      messages,
      data,
      isFetchingNextPage,
      hasNextPage,
      fetchNextPage,
    });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    if (!data) return;

    const allMessages = data.pages.flatMap((page) => page.data).reverse();

    setShouldAutoScroll(false);

    setMessages((prev) => {
      const merged = [...allMessages, ...prev];
      const unique = [...new Map(merged.map((m) => [m.id, m])).values()];
      return unique;
    });
  }, [data, setShouldAutoScroll]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (!trimmedInput || !userPhobiaId) return;

    const userMsg: ChatMessageType = {
      id: crypto.randomUUID(),
      role: 'user',
      message: trimmedInput,
      createdAt: new Date().toISOString(),
    };

    setShouldAutoScroll(true);
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    scrollToBottom();

    const res = await sendMessageMutation.mutateAsync({ userPhobiaId, message: trimmedInput });

    const botMsg: ChatMessageType = {
      id: crypto.randomUUID(),
      role: 'model',
      message: res.data.reply,
      createdAt: new Date().toISOString(),
    };

    setShouldAutoScroll(true);
    setMessages((prev) => [...prev, botMsg]);
    setTimeout(() => scrollToBottom(), 100);
  };

  if (!userPhobiaId) {
    return <div className="p-6 text-red-600 text-center">Geçersiz kullanıcı ID</div>;
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 sm:p-6 md:p-12 ">
      <section className="mx-auto max-w-5xl bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl flex flex-col h-[85vh] overflow-hidden">
        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-gray-300/50 hover:scrollbar-thumb-gray-400/70 scrollbar-track-transparent"
        >
          {!isLoading && messages.length === 0 && <EmptyChatState />}

          {messages.map((msg) => (
            <ChatMessage key={msg.id} message={msg} />
          ))}

          {sendMessageMutation.isPending && <TypingIndicator />}
          <div ref={bottomRef} />
        </div>

        <ChatInput
          input={input}
          setInput={setInput}
          onSubmit={handleSubmit}
          isPending={sendMessageMutation.isPending}
        />
      </section>
    </main>
  );
};

export default ChatPage;
