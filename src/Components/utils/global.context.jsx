import { createContext, useContext, useReducer, useMemo } from "react";
import { reducerTheme } from "./reducer";

const initialState = {theme: ""};
export const ContextGlobal = createContext();

export const ContextProvider = ({children}) => {

const [stateTheme, dispatchTheme] = useReducer(reducerTheme, initialState);

const providerValue = useMemo(() => ({
    stateTheme,
    dispatchTheme,
}),[stateTheme, dispatchTheme])

return (

    <ContextGlobal.Provider value={{providerValue}}>
        {children}
    </ContextGlobal.Provider>
)
};

export default ContextProvider;

export const useEstadosGlobales = () => {
  return useContext(ContextGlobal)
}