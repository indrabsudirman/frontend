export default function Conversation({ convo }) {
  return (
    <li className="list-none h-[72px] w-full dark:bg-dark_bg_1 hover:dark:bg-dark_bg_2 cursor-pointer dark:text-dark_text_2 px-[10px]">
      {/* container */}
      <div className="relative w-full flex items-center justify-between py-[10px]">
        {/* left */}
        <div className="flex items-center gap-x-3">
          {/* conversation user picture */}
          <div className="relative min-w-[40px] max-w-[40px] h-[40px] rounded-full overflow-hidden">
            <img
              src={convo.picture}
              alt={convo.name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* conversation name and message */}
          <div className="w-full flex flex-col">
            {/* conversation name user */}
            <h1 className="font-bold flex items-center gap-x-2">
              {convo.name}
            </h1>
            {/* conversation message */}
            <div className="flex items-center gap-x-1 dark:text-dark_text_2">
              <div className="flex-1 items-center gap-x-1 dark:text-dark_text_2">
                <p>{convo.latestMessage?.message}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* right */}
    </li>
  );
}
