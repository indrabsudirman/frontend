import React from "react";
import { Sidebar } from "../components/sidebar";

export default function home() {
  return (
    <div className="min-h-screen dark:bg-dark_bg_1 flex items-center justify-center overflow-hidden">
      {/* you can remove py-[19px] to remove padding top */}
      {/* container */}
      <div className="container min-h-screen flex">
        {/* sidebar */}
        <Sidebar />
      </div>
    </div>
  );
}
