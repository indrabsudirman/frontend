import { SidebarHeader } from "./header";

export default function Sidebar() {
  return (
    <div className="w-[25%] h-full select-none">
      {/* 30% for set width the sidebar */}
      {/* sidebar header */}
      <SidebarHeader />
      {/* notification */}
    </div>
  );
}
