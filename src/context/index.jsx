import { createContext, useState } from "react";

export const SearchValueContext = createContext();

export const SearchValueProvider = ({ children }) => {
  const [valueSearch, setValueSearch] = useState("");
  return (
    <SearchValueContext.Provider value={{ valueSearch, setValueSearch }}>
      {children}
    </SearchValueContext.Provider>
  );
};
