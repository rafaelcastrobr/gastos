import { createContext, useReducer } from "react";
import { geraId } from "../Func/geraId";
import SomaValor from "../Func/SomaValor";

export const ContentContext = createContext()

const INITIAL_STATE = {
  localDados: JSON.parse(localStorage.getItem('dados')),
  id: geraId(),
  descricao: '',
  valor: '',
  soma: 0
}



function reducer(state, action) {
  switch (action.type) {
    case 'GERAID': {
      const newState = { ...state }
      newState.id = action.payload

      return newState
    }
    case 'ADICIONA_DADOS': {
      const newState = { ...state }
      
      newState.localDados = JSON.parse(localStorage.getItem('dados'))
      newState.descricao = ''
      newState.valor = ''

      return newState
    }
    case 'LE_DADOS': {
      const newState = { ...state }

      newState[action.name] = action.payload[action.name]

      return newState
    }
    case 'EXCLUI_LINHA': {
      const newState = { ...state }

      const dadosDelet = newState.localDados.filter(item => action.linha.id !== item.id)

      localStorage.setItem('dados', JSON.stringify(
        dadosDelet
      ))

      newState.localDados = JSON.parse(localStorage.getItem('dados'))

      return newState 
    }
    default:
      return state;
  }

}

export default function ContentProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  state.soma = SomaValor(state.localDados)

  return (
    <ContentContext.Provider value={{ state, dispatch }}>
      {children}
    </ContentContext.Provider>
  )
}