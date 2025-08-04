import Icons from '../../../../shared/components/Icons';

const EmptyChatState = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
      <div className="w-20 h-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center">
        <Icons.ChatBubbleIcon className="w-10 h-10 text-indigo-500" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Sohbete Başlayın</h3>
        <p className="text-gray-500 text-sm">
          Korkularınızı paylaşmaya hazır olduğunuzda mesaj yazın.
        </p>
      </div>
    </div>
  );
};

export default EmptyChatState; 