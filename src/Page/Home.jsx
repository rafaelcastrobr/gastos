import { useState } from "react"
import MesAtual from "../Components/MesAtual"
import './Home.css'



export default function Home() {

  const [chave, setChave] = useState('')
  const [mes, setMes] = useState('')
  const [dados, setDados] = useState({
    id: Math.floor(Date.now() * Math.random()).toString(36),
    descricao: '',
    valor: ''
  })


/*
  function somaValor() {
    const somaDados = localDados.map(item => +item.valor).reduce((acc, acu) => {
      return acc + acu
    }, 0)

    return somaDados
  }


  useEffect(() => {
    setSoma(somaValor())
    if (chave) return
    function buscaLocalStorage() {
      if (localStorage.getItem('dados')) {
        setLocalDados(JSON.parse(localStorage.getItem('dados')))
        setChave(true)
      }
    }

    buscaLocalStorage()

  }, [dados]);
*/

  function handleClickAdd(e) {
    setMes('')
    if (localStorage.getItem('dados') === null) {
      localStorage.setItem('dados', JSON.stringify([dados]))
    } else {
      localStorage.setItem('dados', JSON.stringify([
        ...JSON.parse(localStorage.getItem('dados')),
        dados
      ]))
    }
    setDados({ id: Math.floor(Date.now() * Math.random()).toString(36), descricao: '', valor: '' })
    //setChave(false)
  }

  return (
    <div className="container">
      <h1>ADICIONE OS GASTOS</h1>
      <div>
        <span><input type="radio" value="mesAtual" onChange={e => setMes(e.target.value)} checked={mes === 'mesAtual'} />Mês Atual</span>
        <span><input type="radio" value="proxMes" onChange={e => setMes(e.target.value)}  checked={mes === 'proxMes'} />Próximo Mês</span>
      </div>
      <div>
        <input className="input-titulo" placeholder="digite um titulo" type="text" value={dados.descricao} onChange={e => setDados({ ...dados, descricao: (e.target.value).toLocaleUpperCase() })} />
        <input className="input-valor" placeholder="digite um valor" type="number" value={dados.valor} onChange={e => setDados({ ...dados, valor: e.target.value })} />
      </div>
      <button className="btn-adicionar" onClick={handleClickAdd}>+</button>
      <MesAtual chave={dados.id}/>
    </div>
  )
}