import React, { useEffect, useState } from 'react';
import { useBlogContext } from '../context/BlogContext';

function Search() {
  const [search, setSearch] = useState('');
  const { searchQuery } = useBlogContext();
  function handleSubmit(e) {
    e.preventDefault();

    searchQuery(search.toLocaleLowerCase());

    setSearch('');
  }
  return (
    <form
      class="flex  justify-center items-center  max-w-sm mx-auto"
      onSubmit={handleSubmit}
    >
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-4">
          <div className="mt-2">
            <div className="flex  rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset  sm:max-w-md">
              <input
                id="search"
                name="search"
                type="text"
                placeholder="Search...."
                className="block  h-12 text-center  flex-1  outline-none border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm/6"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Button */}
      </div>
    </form>
  );
}

export default Search;
