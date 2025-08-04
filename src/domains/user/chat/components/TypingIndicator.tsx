import Icons from '../../../../shared/components/Icons';

const TypingIndicator = () => {
  return (
    <div className="flex justify-start animate-fadeIn">
      <div className="max-w-[80%] px-6 py-4 rounded-3xl bg-white border border-gray-100 shadow-md rounded-bl-md">
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
            <Icons.ModelAvatarIcon />
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
            <div
              className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"
              style={{ animationDelay: '0.1s' }}
            ></div>
            <div
              className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"
              style={{ animationDelay: '0.2s' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator; 