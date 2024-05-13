import {createContext, useContext, useState} from "react";

const AlertContext = createContext(undefined);

export const AlertProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const onOpen = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
    setAlertType("success");
    setAlertMessage("");
  };

  const alertValue = {
    isOpen,
    alertType,
    alertMessage,
    onOpen,
    onClose,
  };

  return (
    <AlertContext.Provider value={alertValue}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
