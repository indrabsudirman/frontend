import { ChatHeader } from "../";
export default function ChatContainer() {
  return (
    <div className="relative w-[50%] h-full border-l dark:border-l-dark_border_2 select-none overflow-hidden">
      {/* container */}
      <div>
        {/* chat header */}
        <ChatHeader />
      </div>
    </div>
  );
}
