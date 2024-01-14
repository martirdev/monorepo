import {memo, useState} from 'react';

import {SearchInputPropsType} from './types';

const SearchInput = memo<SearchInputPropsType>(function SearchInput({onSearch}) {
  const [query, setQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="flex items-center border-b-2 border-gray-500 py-2">
        <input
          className="mr-3 w-full appearance-none border-none bg-transparent px-2 py-1 leading-tight text-gray-700 focus:outline-none"
          type="text"
          placeholder="Search"
          value={query}
          onChange={handleInputChange}
        />
        <button
          className="text-sm flex-shrink-0 rounded border-4 border-gray-500 bg-gray-500 px-2 py-1 text-white hover:border-gray-700 hover:bg-gray-700"
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  );
});

export {SearchInput};
