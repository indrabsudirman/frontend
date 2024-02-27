import { useSelector } from "react-redux";
import Message from "./Message";

export default function ChatMessages() {
  // const REACT_APP_DARK_BACKGROUND = process.env;
  const { messages } = useSelector((state) => state.chat);
  const { user } = useSelector((state) => state.user);
  return (
    <div
      className={`mb-[60px] bg-[url('https://res.cloudinary.com/dmhcnhtng/image/upload/v1677358270/Untitled-1_copy_rpx8yb.jpg')] bg-no-repeat bg-cover`}
    >
      {/* container */}
      <div className="scrollbar overflow_scrollbar overflow-auto py-2 px-[6%]"></div>
      {/* messages */}
      {messages && messages.map((message) => (
        <Message
          message={message}
          key={message._id}
          me={user._id === message.sender._id} />

      ))}
    </div>
  );
}
