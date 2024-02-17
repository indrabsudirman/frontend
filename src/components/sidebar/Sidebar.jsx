import { useState } from "react";
import { SidebarHeader } from "./header";
import Notifications from "./notifications/Notifications";
import { Search, SearchResults } from "./search";
import { Conversations } from "./conversations";

export default function Sidebar() {
  const [searchResults, setSearchResults] = useState([]);
  console.log(searchResults);
  return (
    <div className="w-[25%] h-full select-none">
      {/* 30% for set width the sidebar */}
      {/* sidebar header */}
      <SidebarHeader />
      {/* notification */}
      <Notifications />
      <div className="pl-3">
        {/* search */}
        <Search
          searchLength={searchResults.length}
          setSearchResults={setSearchResults}
        />
      </div>
      {searchResults.length > 0 ? (
        <>
          {/* search results */}
          <SearchResults searchResults={searchResults} />
        </>
      ) : (
        <>
          {/* conversations */}
          <Conversations />
        </>
      )}
    </div>
  );
}
