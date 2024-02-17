import Contact from "./Contact";

export default function SearchResults({ searchResults }) {
  return (
    <div className="w-full convos scrollbar">
      <div>
        {/* heading */}
        <div className="flex flex-col px-3 pt-8">
          <h1 className="font-extralight text-md text-green_2">Contacts</h1>
          <span className="mt-4 ml-12 border-b dark:border-b-dark_border_1"></span>
        </div>
        {/* results */}
        <ul>
          {searchResults &&
            searchResults.map((user) => (
              <Contact contact={user} key={user._id} />
            ))}
        </ul>
      </div>
    </div>
  );
}
