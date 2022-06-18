import { useContext } from "react"
import { ContentContext } from "../Contexts/ContentProvider"
import { geraId } from "../Func/geraId"
import { salvaDados } from "../Func/salvaDados"


export default function InserirDados() {
  const { state: { descricao, valor, id, mes, erros }, dispatch } = useContext(ContentContext)


  function pegaDados(e) {
    const { name, value } = e.target
    dispatch({ type: 'LE_DADOS', payload: { [name]: value }, name: name })
  }

  function escolheMes(e) {
    const { value } = e.target

    dispatch({ type: 'PEGA_MES', payload: value })
  }

  function handleClickAdd(e) {

    if (mes === '') return dispatch({ type: 'ERRO_MES' })
    if (descricao === '' || valor === '') return dispatch({ type: 'ERRO_VALORES'})

    

    dispatch({ type: 'GERAID', payload: geraId() })

    const dados = {
      id,
      descricao,
      valor
    }

    salvaDados(dados, mes)

    dispatch({ type: 'ADICIONA_DADOS', mes: mes})
  }


  return (
    <div className="container">
      <h1>ADICIONE OS GASTOS</h1>
      <div className="input-mes">
        <div>
          <span style={{ color: 'red' }}>{erros.mes.toggle && erros.mes.menssagem}</span>
        </div>
        <div style={{display: 'flex', flexDirections: 'row'}}>

        <span style={{display: 'flex', alignItems: 'center'}}><input type="radio" style={{width: '20px', height: '25px'}} value="dados" onChange={escolheMes} checked={mes === 'dados'} />Mês Atual</span>
        <span style={{display: 'flex', alignItems: 'center'}}><input type="radio" style={{width: '20px', height: '25px'}} value="dadosProxMes" onChange={escolheMes} checked={mes === 'dadosProxMes'} />Próximo Mês</span>
        </div>
      </div>
      <span style={{ color: 'red' }}>{erros.valores.toggle && erros.valores.menssagem}</span>

      <div>
        <input className="input-titulo" name="descricao" placeholder="digite um titulo" type="text" value={descricao.toUpperCase()} onChange={pegaDados} />
        <input className="input-valor" name="valor" placeholder="digite um valor" type="number" value={valor} onChange={pegaDados} />
      </div>
      <button className="btn-adicionar" onClick={handleClickAdd}>+</button>
    </div>
  )
}



/*
*/