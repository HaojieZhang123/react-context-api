import { createContext, useContext } from "react";
import { useState } from "react";

const AlertContext = createContext();

// custom rpovider
const AlertProvider = ({ children }) => {

    const initialValue = {
        type: "Tipo prova",
        message: "Messaggio prova"
    }
    const [alert, setAlert] = useState(initialValue);

    return (
        <AlertContext.Provider value={{ alert, setAlert }}>
            {children}
        </AlertContext.Provider>
    );
};

// custom hook for consumer
const useAlert = () => {
    const context = useContext(AlertContext);
    return context;
};

export { AlertProvider, useAlert };