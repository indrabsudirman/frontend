import moment from "moment";

export default function Message({ message, me }) {
  return (
    <div className={`w-full flex mt-2 space-x-3 max-w-xs 
${me ? "ml-auto justify-end" : ""}`}>
      {/*message container*/}
      <div>
        <div className={`relative h-full dark:text-dark_text_1 p-2 rounded-lg
{me ? "bg-green_3" : "dark:bg-dark_bg_2"}`}>
          {/*message*/}
          <p className="float-left h-full text-sm pb-5">{message.message}</p>
          {/*message dare*/}
          <span className="float-right text-xs pt-6 text-dark_text_5">{moment(message.createdAt).format("HH:mm")}</span>
        </div>
      </div>
    </div>
  )
}
