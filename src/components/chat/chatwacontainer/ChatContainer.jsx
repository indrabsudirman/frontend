import { useEffect } from "react";
import { ChatActions, ChatHeader, ChatMessages } from "../";
import { useDispatch, useSelector } from "react-redux";
import { getConversationMessages } from "../../../features/chatSlice";

export default function ChatContainer() {
  const dispatch = useDispatch();
  const { activeConversation, messages } = useSelector((state) => state.chat);
  const { user } = useSelector((state) => state.user);
  const { token } = user;
  const values = {
    token,
    convo_id: activeConversation?._id,
  };

  useEffect(() => {
    if (activeConversation?._id) {
      dispatch(getConversationMessages(values));
    }
  }, [activeConversation]);
  console.log("messages", messages);
  return (
    <div className="relative w-[50%] h-full border-l dark:border-l-dark_border_2 select-none overflow-hidden">
      {/* container */}
      <div>
        {/* chat header */}
        <ChatHeader />
        {/* chat messages */}
        <ChatMessages />
        {/* chat actions */}
        <ChatActions />
      </div>
    </div>
  );
}
