import { Logo } from "../../../svg";

export default function WhatsappHome() {
  return (
    <div className="h-full w-[50%] dark:bg-dark_bg_4 select-none border-1 dark:border-1-dark_border_1 border-b-[6px] border-b-green_2">
      {/* container */}
      <div className="-mt-1.5 w-full h-full flex flex-col gap-y-8 items-center justify-center">
        <Logo />
      </div>
    </div>
  );
}
