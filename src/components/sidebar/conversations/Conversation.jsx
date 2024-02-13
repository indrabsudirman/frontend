export default function Conversation({ convo }) {
  return (
    <div className="list-none h-[72px] w-full dark:bg-dark_bg_1 hover:bg-dark_bg_2">
      {convo.latestMessage?.message}
    </div>
  );
}
