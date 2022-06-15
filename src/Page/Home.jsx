import { useEffect, useState } from "react"
import AdicionarEntrada from "../Components/AdicionarEntradas"
import './Home.css'



export default function Home() {

  const [localDados, setLocalDados] = useState([])
  const [soma, setSoma] = useState(0)
  const [chave, setChave] = useState(false)


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

  }, [localDados]);



  return (
    <div className="container">
      <AdicionarEntrada />
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