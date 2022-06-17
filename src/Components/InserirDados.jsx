import { useContext } from "react"
import { ContentContext } from "../Contexts/ContentProvider"
import { geraId } from "../Func/geraId"


export default function InserirDados() {
  const { state: { descricao, valor, id }, dispatch } = useContext(ContentContext)


  function pegaDados(e) {
    const { name, value } = e.target
    dispatch({ type: 'LE_DADOS', payload: { [name]: value }, name: name })
  }

  function handleClickAdd(e) {
    dispatch({ type: 'GERAID', payload: geraId() })

    const dados = {
      id,
      descricao,
      valor
    }

    if (localStorage.getItem('dados') === null) {
      localStorage.setItem('dados', JSON.stringify([dados]))
    } else {
      localStorage.setItem('dados', JSON.stringify([
        ...JSON.parse(localStorage.getItem('dados')),
        dados
      ]))
    }

    dispatch({ type: 'ADICIONA_DADOS' })
  }


  return (
    <div className="container">
      <h1>ADICIONE OS GASTOS</h1>
      <div>

      </div>
      <div>
        <input className="input-titulo" name="descricao" placeholder="digite um titulo" type="text" value={descricao} onChange={pegaDados} />
        <input className="input-valor" name="valor" placeholder="digite um valor" type="number" value={valor} onChange={pegaDados} />
      </div>
      <button className="btn-adicionar" onClick={handleClickAdd}>+</button>
    </div>
  )
}



/*
        <span><input type="radio" value="mesAtual" onChange={e => setMes(e.target.value)} checked={mes === 'mesAtual'} />Mês Atual</span>
  <span><input type="radio" value="proxMes" onChange={e => setMes(e.target.value)}  checked={mes === 'proxMes'} />Próximo Mês</span>
*/