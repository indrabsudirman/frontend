import { SidebarHeader } from "./header";
import { Notifications } from "./notifications";
import { Search } from "./search";

export default function Sidebar() {
  return (
    <div className="w-[25%] h-full select-none">
      {/* 30% for set width the sidebar */}
      {/* sidebar header */}
      <SidebarHeader />
      {/* notification */}
      <Notifications />
      {/* search */}
      <Search />
    </div>
  );
}
