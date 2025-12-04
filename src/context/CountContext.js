

import { createContext, useContext, useEffect, useState } from "react";

const CountContext = createContext();

export function CountProvider({ children }) {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const addCount = () => {
    if (count < 5) {
      setCount((num) => num + 1);
      localStorage.setItem("count", JSON.stringify(count + 1));
    }
  };

  const removeItem = () => {
    if (count === 0) return;
    localStorage.removeItem("meal");
    localStorage.removeItem("count");
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    setCount(0);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("count")) || 0;

    setCount(saved);
  }, []);

  return (
    <CountContext.Provider
      value={{ count, addCount, removeItem, isLoading, setIsLoading }}
    >
      {children}
    </CountContext.Provider>
  );
}

export const useCount = () => useContext(CountContext);
