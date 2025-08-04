import { MessageCircle } from 'lucide-react';

type Props = {
  onClick?: () => void;
  disabled?: boolean;
};

const FloatingChatButton = ({ onClick, disabled }: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="absolute -top-5 -right-5 w-14 h-14 rounded-full 
                 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 
                 bg-[length:200%_200%] animate-gradient 
                 shadow-lg hover:scale-110 transition-transform duration-300 
                 flex items-center justify-center text-white cursor-pointer
                 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
    >
      <MessageCircle className="w-7 h-7" />
    </button>
  );
};

export default FloatingChatButton;
