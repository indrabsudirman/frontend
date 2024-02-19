import { Logo } from "../../../svg";

export default function WhatsappHome() {
  return (
    <div className="h-full w-[50%] dark:bg-dark_bg_4 select-none border-1 dark:border-1-dark_border_2 border-b-[6px] border-b-green_2">
      {/* container */}
      <div className="-mt-1.5 w-full h-full flex flex-col gap-y-8 items-center justify-center">
        <span>
          <Logo />
        </span>
        {/*infos*/}
        <div className="mt-1 text-center space-y-[12px]">
          <h1 className="text-[32px] dark:text-dark_text_4 font-extralight">
            Whatsapp Web
          </h1>
          <p className="text-sm dark:text-dark_text_3">
            Send and received messages without keep your phone online.
            <br />
            Use Whatsapp on up to 4 linked devices and 1 phone at the some time.
          </p>
        </div>
      </div>
    </div>
  );
}
