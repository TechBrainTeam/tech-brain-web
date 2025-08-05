import { Button } from '../../../../shared/components/Button/Button';
import Icons from '../../../../shared/components/Icons';

interface Props {
  input: string;
  setInput: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isPending: boolean;
}

const ChatInput = ({ input, setInput, onSubmit, isPending }: Props) => {
  return (
    <div className="p-6 border-t border-gray-100/50 bg-gradient-to-r from-white via-blue-50/20 to-indigo-50/20">
      <form onSubmit={onSubmit} className="flex gap-4 items-end">
        <div className="flex-1 relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Korkularınızı paylaşın, size yardım edelim..."
            disabled={isPending}
            className="w-full border-2 border-gray-200 rounded-2xl px-6 py-4 text-base focus:outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <Icons.SendIcon className="w-5 h-5 text-gray-400" />
          </div>
        </div>
        <Button
          type="submit"
          disabled={!input.trim() || isPending}
          variant="primary"
          size="lg"
          className="px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 flex items-center space-x-2"
        >
          <span>Gönder</span>
          <Icons.SendIcon />
        </Button>
      </form>
    </div>
  );
};

export default ChatInput;
