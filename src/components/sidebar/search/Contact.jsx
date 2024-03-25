import { useDispatch, useSelector } from "react-redux";
import { openCreateConversation } from "../../../features/chatSlice";
import SocketContext from "../../../context/SocketContext";

function Contact({ contact, setSearchResults, socket }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { token } = user;
  const values = {
    receiver_id: contact._id,
    token,
  };
  const openConversation = async () => {
    // await dispatch(openCreateConversation(values));
    let newConvo = await dispatch(openCreateConversation(values));
    console.log("newConvo", newConvo);
    socket.emit("join conversation", newConvo.payload._id);
    setSearchResults([]);
  };
  return (
    <li
      onClick={() => openConversation()}
      className="list-none h-[72px] w-full dark:bg-dark_bg_1 hover:dark:bg-dark_bg_2 cursor-pointer dark:text-dark_text_2 px-[10px]"
    >
      {/* container */}
      <div className="flex items-center gap-x-3 py-[10px]">
        {/* contact infos */}
        <div className="flex items-center gap-x-3">
          {/* conversation user picture */}
          <div className="relative min-w-[40px] max-w-[40px] h-[40px] rounded-full overflow-hidden">
            <img
              src={contact.picture}
              alt={contact.name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* conversation name and message */}
          <div className="w-full flex flex-col">
            {/* conversation name user */}
            <h1 className="font-bold flex items-center gap-x-2">
              {contact.name}
            </h1>
            {/* conversation status */}
            <div className="flex items-center gap-x-1 dark:text-dark_text_2">
              <div className="flex-1 items-center gap-x-1 dark:text-dark_text_2">
                <p className="text-sm">{contact.status}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* border */}
      <div className="border-b ml-12 dark:border-b-dark_border_1"></div>
    </li>
  );
}

const ContactWithContext = (props) => (
  <SocketContext.Consumer>
    {(socket) => <Contact {...props} socket={socket} />}
  </SocketContext.Consumer>
);

export default ContactWithContext;
