import Input from '../../Atoms/Input/Input'

const MessageInput = ({ messageText, setMessageText }) => {

  const isRequired = false;

  return (
    <Input value={messageText} placeholder="Type your message..." isRequired={isRequired} onChange={(e) => setMessageText(e.target.value)}/>
  );
};

export default MessageInput;