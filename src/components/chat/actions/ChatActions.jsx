import { SendIcon } from "../../../svg";
import EmojiPickerApp from "./EmojiPicker";
import Input from "./Input";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../../../features/chatSlice";
import { ClipLoader } from "react-spinners";
import { Attachments } from "./attachments";

export default function ChatActions() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [showAttachments, setShowAttachments] = useState(false);
  const { user } = useSelector((state) => state.user);
  const { token } = user;
  const { activeConversation, status } = useSelector((state) => state.chat);
  const textRef = useRef();
  const values = {
    message,
    convo_id: activeConversation._id,
    files: [],
    token,
  };
  const sendMessageHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    await dispatch(sendMessage(values));
    setLoading(false);
    setMessage("");
  };

  return (
    <form
      onSubmit={(e) => sendMessageHandler(e)}
      className="dark:bg-dark_bg_2 h-[60px] w-full flex items-center absolute bottom-0 py-2 px-4 select-none"
    >
      {/*container*/}
      <div className="w-full flex items-center gap-x-2">
        {/*emoji and attachment*/}
        <ul className="flex gap-x-2">
          <EmojiPickerApp
            message={message}
            setMessage={setMessage}
            textRef={textRef}
            showPicker={showPicker}
            setShowPicker={setShowPicker}
            setShowAttachments={setShowAttachments}
          />
          <Attachments
            showAttachments={showAttachments}
            setShowAttachments={setShowAttachments}
            setShowPicker={setShowPicker}
          />
        </ul>
        {/*input*/}
        <Input message={message} setMessage={setMessage} textRef={textRef} />
        {/*send button*/}
        <button type="submit" className="btn">
          {" "}
          {status === "loading" && loading ? (
            <ClipLoader color="#E9EDEF" size={25} />
          ) : (
            <SendIcon className="dark:fill-dark_svg_1" />
          )}
        </button>
      </div>
    </form>
  );
}
