import { createContext, useReducer } from "react";
import { geraId } from "../Func/geraId";
import SomaValor from "../Func/SomaValor";
import { apagarDados } from '../Func/apagarDados'

export const ContentContext = createContext()

const INITIAL_STATE = {
  dados: JSON.parse(localStorage.getItem('dados')),
  dadosProxMes: JSON.parse(localStorage.getItem('dadosProxMes')),
  id: geraId(),
  descricao: '',
  valor: '',
  soma: 0,
  somaProxMes: 0,
  mes: '',
  erros: {
    mes: {
      menssagem: 'Escolha o mês',
      toggle: false
    },
    valores: {
      menssagem: 'Complete as infos',
      toggle: false
    }
  }
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

      newState[action.mes] = JSON.parse(localStorage.getItem(action.mes))
      newState.descricao = ''
      newState.valor = ''
      newState.mes = ''

      return newState
    }
    case 'PASSA_PARA_MES_ATUAL': {
      const newState = { ...state }

      const id = action.linha.id
      const nomeValor = action.linha.attributes.name.value
      const dadosAtualizar = newState[nomeValor]

      const dadoAtualizado = dadosAtualizar.filter(item => id === item.id)


      newState.descricao = dadoAtualizado[0].descricao
      newState.valor = dadoAtualizado[0].valor
      newState.mes = 'dados'

      apagarDados(id, nomeValor, dadosAtualizar)

      newState.dadosProxMes = JSON.parse(localStorage.getItem('dadosProxMes'))

      window.scrollTo(0, 0)

      return newState
    }
    case 'ERRO_VALORES': {
      const newState = { ...state }

      newState.erros.valores.toggle = true

      return newState
    }
    case 'LE_DADOS': {
      const newState = { ...state }

      newState[action.name] = action.payload[action.name]

      if (newState.descricao.length > 0 && newState.valor.length > 0) newState.erros.valores.toggle = false
      return newState
    }
    case 'PEGA_MES': {
      const newState = { ...state }

      newState.mes = action.payload
      newState.erros.mes.toggle = false

      return newState
    }
    case 'ERRO_MES': {
      const newState = { ...state }

      newState.erros.mes.toggle = true

      return newState
    }
    case 'EXCLUI_LINHA': {
      const newState = { ...state }

      const id = action.linha.id
      const nomeValor = action.linha.attributes.name.value
      const dadosExcluir = newState[nomeValor]

      apagarDados(id, nomeValor, dadosExcluir)


      newState[nomeValor] = JSON.parse(localStorage.getItem(nomeValor))

      return newState
    }
    default:
      return state;
  }

}

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