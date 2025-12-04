import { createContext, useContext, useState } from "react";
import { useCount } from "./CountContext";
const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toastMessage, setToastMessage] = useState("");
  const [toastStyle, setToastStyle] = useState("");
  const [visible, setVisible] = useState(false);

  const { count } = useCount();

  const itemAdd = (selectedItem) => {
    if (count >= 5) {
        setToastMessage("5 items added to order. Cannot add more.");
        setToastStyle("alert alert-warning font-bold");
        setVisible(true);
        setTimeout(() => {
          setVisible(false);
        }, 2000);
        return;
    }
    setToastMessage(`${selectedItem} added to order!`);
    setToastStyle("alert alert-success font-bold");
    setVisible(true);

    setTimeout(() => {
      setVisible(false);
    }, 2000);
  }
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

  const orderSuccess = (person) => {
    setToastMessage(`Thank you ${person} your order was placed successfully!`);
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
        itemAdd,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
