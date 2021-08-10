import { createContext, useContext, useState } from 'react';

const SearchContext = createContext(null);

const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState('');

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

function useSearch() {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('SearchContext must exist to use search');
  }

  return context;
}

export { SearchProvider, useSearch };
