import { ChatGPT } from "../../../svg";

export default function ChatGPTHome() {
  return (
    <div className="h-[140px] w-[25%] dark:bg-dark_bg_3 flex items-center">
      {/* container */}
      <div className="w-full h-full flex flex-col gap-y-8 items-center border-b-[1px] border-b-white">
        <ChatGPT />
      </div>
    </div>
  );
}
