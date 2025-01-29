import { createContext, useContext } from "react";

const AppContext = createContext({
    expanses: null,
    setExpanses: () => {},
});

export const useAppContext = () => {
    return useContext(AppContext);
}

export default AppContext;