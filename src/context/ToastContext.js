
import { createContext, useContext, useState } from "react";

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toastMessage, setToastMessage] = useState("");
  const [toastStyle, setToastStyle] = useState("");
  const [visible, setVisible] = useState(false);

  const orderFail = () => {
    setToastMessage(
      "Cannot submit order. Please add items and provide your name."
    );
    setToastStyle("alert alert-error font-bold");
    setVisible(true);

    setTimeout(() => {
      setVisible(false);
    }, 2000);
    return;
  };

  const orderSuccess = () => {
    setToastMessage("Your order has been submitted successfully.");
    setToastStyle("alert alert-success font-bold");
    setVisible(true);

    setTimeout(() => {
      setVisible(false);
    }, 2000);
  };

  return (
    <ToastContext.Provider
      value={{
        visible,
        setVisible,
        toastMessage,
        toastStyle,
        orderFail,
        orderSuccess,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
