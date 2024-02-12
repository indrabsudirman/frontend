import { useState } from "react";
import { SidebarHeader } from "./header";
import Notifications from "./notifications/Notifications";
import { Search } from "./search";

export default function Sidebar() {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <div className="w-[25%] h-full select-none">
      {/* 30% for set width the sidebar */}
      {/* sidebar header */}
      <SidebarHeader />
      {/* notification */}
      <Notifications />
      {/* search */}
      <Search searchLength={searchResults.length} />
    </div>
  );
}
