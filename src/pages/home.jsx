import React, { useEffect } from "react";
import { Sidebar } from "../components/sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getConversations } from "../features/chatSlice";
import {
  ChatContainer,
  ChatGPTContainer,
  ChatGPTHome,
  WhatsappHome,
} from "../components/chat";
import SocketContext from "../context/SocketContext";

function Home({ socket }) {
  console.log(socket);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { activeConversation } = useSelector((state) => state.chat);
  console.log("active conversation", activeConversation);

  //join user into socket io
  useEffect(() => {
    socket.emit("join", user._id);
  }, [socket, user]);

  //get conversations
  useEffect(() => {
    if (user) {
      dispatch(getConversations(user.token));
    }
  }, [dispatch, user]);

  //listening to recieved messages
  useEffect(() => {
    socket.on("receive message", (message) => {
      console.log("Received Message", message);
    });
  }, []);
  return (
    <div className="h-screen dark:bg-dark_bg_1 flex items-center justify-center overflow-hidden">
      {/* you can remove py-[19px] to remove padding top */}
      {/* container */}
      <div className="container h-screen flex ">
        {/* sidebar */}
        <Sidebar />
        {activeConversation._id ? <ChatContainer /> : <WhatsappHome />}
        {activeConversation._id ? <ChatGPTContainer /> : <ChatGPTHome />}
      </div>
    </div>
  );
}

const HomeWithSocket = (props) => (
  <SocketContext.Consumer>
    {(socket) => <Home {...props} socket={socket} />}
  </SocketContext.Consumer>
);
export default HomeWithSocket;
