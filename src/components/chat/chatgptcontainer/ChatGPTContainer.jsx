import { ChatGPT } from "../../../svg";

export default function ChatGPTContainer() {
  return (
    <div className="w-[25%] h-full  border-l dark:border-l-dark_border_2 select-none overflow-hidden">
      {/* container */}
      <div>
        {/* header */}
        <div className="w-full h-[140px] flex flex-col items-center dark:bg-dark_bg_3">
          <ChatGPT />
        </div>
      </div>
    </div>
  );
}
