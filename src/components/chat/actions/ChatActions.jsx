import { SendIcon } from "../../../svg";
import EmojiPicker from "./EmojiPicker";
import Input from "./Input";

export default function ChatActions() {
  return (
    <form className="dark:bg-dark_bg_2 h-[60px] w-full flex items-center absolute bottom-0 py-2 px-4 select-none">
      {/*container*/}
      <div className="w-full flex items-center gap-x-2">
        {/*emoji and attachment*/}
        <ul className="flex gap-x-2">
          <EmojiPicker />
          <Attachments />
        </ul>
        {/*input*/}
        <Input />
        {/*send button*/}
        <button className="btn">
          <SendIcon className="dark:fill-dark_svg_1" />
        </button>
      </div>

    </form>
  )
}
