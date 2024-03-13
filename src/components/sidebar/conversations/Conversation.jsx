import { useDispatch, useSelector } from "react-redux";
import { dateHandler } from "../../../utils/date";
import { openCreateConversation } from "../../../features/chatSlice";
import { getConversationId } from "../../../utils/chat";

export default function Conversation({ convo }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { activeConversation } = useSelector((state) => state.chat);
  const { token } = user;
  // console.log(convo);
  const values = {
    receiver_id: getConversationId(user, convo.users),
    token,
  };
  const openConversation = () => {
    dispatch(openCreateConversation(values));
  };
  return (
    <li
      onClick={() => openConversation()}
      className={`list-none h-[72px] w-full dark:bg-dark_bg_1 hover:${
        convo._id !== activeConversation._id ? "dark:bg-dark_bg_2" : ""
      } cursor-pointer dark:text-dark_text_2 px-[10px] ${
        convo._id === activeConversation._id ? "dark:bg-dark_hover_1" : ""
      }`}
    >
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
                <p className="text-sm">
                  {convo.latestMessage?.message.length > 35
                    ? `${convo.latestMessage?.message.substring(0, 30)}...`
                    : convo.latestMessage?.message}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col gap-y-4 items-end text-xs">
          <span className="dark:text-dark_text_2">
            {convo.latestMessage?.createdAt
              ? dateHandler(convo.latestMessage?.createdAt)
              : ""}
          </span>
          {/* <span>{moment(convo.latestMessage.createdAt).fromNow(true)}</span> */}
        </div>
      </div>
      {/* border */}
      <div className="border-b ml-12 dark:border-b-dark_border_1"></div>
    </li>
  );
}
