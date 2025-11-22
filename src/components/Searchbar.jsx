const SearchBar = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 my-2 lg:my-6 w-full">
      <input type="text" placeholder="Search..." className="w-full sm:w-64 px-4 py-2 rounded bg-white shadow border border-gray-500" />
      <input type="date" className="w-full sm:w-auto px-3 py-2 rounded bg-white shadow border border-gray-500" />
    </div>
  );
}

export default SearchBar;
