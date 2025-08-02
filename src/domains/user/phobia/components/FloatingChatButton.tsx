import { useNavigate } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

const FloatingChatButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/asistan')}
      className="absolute -top-5 -right-5 w-14 h-14 rounded-full 
                 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 
                 bg-[length:200%_200%] animate-gradient 
                 shadow-lg hover:scale-110 transition-transform duration-300 
                 flex items-center justify-center text-white cursor-pointer"
    >
      <MessageCircle className="w-7 h-7" />
    </button>
  );
};

export default FloatingChatButton;
