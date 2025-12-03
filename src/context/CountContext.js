"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CountContext = createContext();

export function CountProvider({ children }) {
  const [count, setCount] = useState(0);



  const addCount = () => {
    if (count < 5) {
      setCount((num) => num + 1);
      localStorage.setItem("count", JSON.stringify(count + 1));
    }
  };



  const removeItem = () => {
    localStorage.removeItem("meal");
    localStorage.removeItem("count");

    setCount(0);
  };

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("count")) || 0;

    setCount(saved);
  }, []);

  return (
    <CountContext.Provider value={{ count, addCount, removeItem }}>
      {children}
    </CountContext.Provider>
  );
}

export const useCount = () => useContext(CountContext);
