import type { ChatMessage as ChatMessageType } from '../model/chat.types';
import Icons from '../../../../shared/components/Icons';

interface Props {
  message: ChatMessageType;
}

const ChatMessage = ({ message }: Props) => {
  return (
    <div
      className={`group flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
    >
      <div
        className={`max-w-[80%] px-6 py-4 rounded-3xl shadow-lg text-sm sm:text-base leading-relaxed  ${
          message.role === 'user'
            ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-br-md'
            : 'bg-white border border-gray-100 text-gray-800 rounded-bl-md '
        }`}
      >
        <div className="flex items-start space-x-3">
          {message.role === 'model' && (
            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mt-1">
              <Icons.ModelAvatarIcon />
            </div>
          )}
          <div className="flex-1">
            <p className="whitespace-pre-wrap">{message.message}</p>
            <div
              className={`text-xs mt-2 ${message.role === 'user' ? 'text-indigo-100' : 'text-gray-400'}`}
            >
              {new Date(message.createdAt).toLocaleTimeString('tr-TR', {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
