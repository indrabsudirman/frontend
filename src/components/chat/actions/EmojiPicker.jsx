import EmojiPicker from "emoji-picker-react";
import { CloseIcon, EmojiIcon } from "../../../svg";
import { useEffect, useState } from "react";

export default function EmojiPickerApp({ message, setMessage, textRef }) {
  const [showPicker, setShowPicker] = useState(false);
  const [cursorPosition, setCursorPosition] = useState();
  useEffect(() => {
    textRef.current.selectionEnd = cursorPosition;
  }, [cursorPosition, textRef]);
  const handleEmoji = (emojiData, event) => {
    console.log(emojiData);
    const { emoji } = emojiData;
    const ref = textRef.current;
    console.log("ref", ref);
    ref.focus();
    const start = message.substring(0, ref.selectionStart);
    const end = message.substring(ref.selectionEnd);
    const newText = start + emoji + end;
    console.log("Start", start.length);
    console.log("End", end.length);
    console.log("New Text", newText);
    setMessage(newText);
    setCursorPosition(start.length + emoji.length);
  };
  return (
    <li>
      <button
        className="btn"
        type="button"
        onClick={() => setShowPicker((prev) => !prev)}
      >
        {showPicker ? (
          <CloseIcon className="dark:fill-dark_svg_1" />
        ) : (
          <EmojiIcon className="dark:fill-dark_svg_1" />
        )}
      </button>
      {/*emoji picker*/}
      {showPicker ? (
        <div className="w-full openEmojiAnimation absolute bottom-[60px] left-[-0.5px]">
          <EmojiPicker theme="dark" onEmojiClick={handleEmoji} />
        </div>
      ) : null}
    </li>
  );
}
