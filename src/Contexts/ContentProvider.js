import { createContext, useReducer } from "react";
import SomaValor from "../Func/SomaValor";
import { INITIAL_STATE, reducer } from "./reducer";

export const ContentContext = createContext()



export default function ContentProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  state.soma = SomaValor(state.dados)
  state.somaProxMes = SomaValor(state.dadosProxMes)


  return (
    <ContentContext.Provider value={{ state, dispatch }}>
      {children}
    </ContentContext.Provider>
  )
}