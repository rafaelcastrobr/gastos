import { useEffect, useState } from "react"
import './Home.css'



export default function Home() {

  const [localDados, setLocalDados] = useState([])
  const [soma, setSoma] = useState(0)
  const [chave, setChave] = useState(false)

  const [dados, setDados] = useState({
    id: Math.floor(Date.now() * Math.random()).toString(36),
    descricao: '',
    valor: ''
  })

  function handleClickAdd(e) {
    setChave(false)
    if (localStorage.getItem('dados') === null) {
      localStorage.setItem('dados', JSON.stringify([dados]))
    } else {
      localStorage.setItem('dados', JSON.stringify([
        ...JSON.parse(localStorage.getItem('dados')),
        dados
      ]))
    }
    setDados({ id: Math.floor(Date.now() * Math.random()).toString(36), descricao: '', valor: '' })
  }

  function handleClickRemove(e) {

    const linha = e.target.parentNode

    const dadosDelet = localDados.filter(item => linha.id !== item.id)

    localStorage.setItem('dados', JSON.stringify(
      dadosDelet
    ))

    setLocalDados(JSON.parse(localStorage.getItem('dados')))
    setChave(false)
  }

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

  }, [dados, chave]);



  return (
    <div className="container">
      <h1>ADICIONE OS GASTOS</h1>
      <div>
        <input placeholder="digite um titulo" type="text" value={dados.descricao} onChange={e => setDados({ ...dados, descricao: (e.target.value).toLocaleUpperCase() })} />
        <input className="input-valor" placeholder="digite um valor" type="number" value={dados.valor} onChange={e => setDados({ ...dados, valor: e.target.value })} />
      </div>
      <button className="btn-adicionar" onClick={handleClickAdd}>+</button>
      <div>
        <hr />
        <ul>
          {localDados && localDados.map(el => {
            return (
              <>
                <li className="list-organizada" key={el.id} id={el.id}>
                  <button className="btn-excluir" onClick={handleClickRemove}>X</button>
                  <p>{el.descricao} * <span style={{ color: 'red' }}>{(+el.valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span></p>
                </li>
              </>
            )
          })}
        </ul>
      </div>
      <div className="box-total">
        <h1>Total</h1>
        <p className="paragrafo-total"> <span style={{ color: 'red' }}> {soma.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </span></p>
      </div>
    </div>
  )
}