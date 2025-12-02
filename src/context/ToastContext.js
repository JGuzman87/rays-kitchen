"use client";

import { createContext, useContext, useState } from "react";

const ToastContext = createContext();

export function ToastProvider({ children }) {
 const [showAlert, setShowAlert] = useState(false);

 const showToast = () => {
     setShowAlert(true);
     setTimeout(() => {
       setShowAlert(false);
     }, 2000);
 }

  return (
    <ToastContext.Provider value={{ showAlert, showToast, }}>
      {children}
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);