"use client";

import { createContext, useContext, useState } from "react";

const CountContext = createContext();

export function CountProvider({ children }) {
  const [count, setCount] = useState(0);

  const addCount = () => {
    if (count < 5) {
      setCount((num) => num + 1);
    }
   
     localStorage.setItem("count", count);


  };

  return (
    <CountContext.Provider value={{count, addCount}}>
        {children}
    </CountContext.Provider>
  )
}

export const useCount = () => useContext(CountContext);
