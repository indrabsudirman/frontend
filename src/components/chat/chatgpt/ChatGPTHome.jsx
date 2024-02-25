import { ChatGPT } from "../../../svg";

export default function ChatGPTHome() {
  return (
    <div className="w-[25%] h-full dark:bg-dark_bg_3 border-l dark:border-l-dark_border_2 select-none overflow-hidden">
      {/* container */}
      <div className="w-full h-full flex flex-col gap-y-8 items-center">
        <ChatGPT />
      </div>
    </div>
  );
}
