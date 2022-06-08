import { useEffect, useState } from "react"





export default function Home() {

  const [localDados, setLocalDados] = useState([])
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

  }


  useEffect(() => {

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
    <div>
      <h1>..</h1>
      <div>
        <input type="text" value={dados.descricao} onChange={e => setDados({ ...dados, descricao: e.target.value })} />
        <input type="number" value={dados.valor} onChange={e => setDados({ ...dados, valor: e.target.value })} />
        <button onClick={handleClickAdd}>Adicionar</button>
      </div>
      <div>
        <ul>
          {localDados && localDados.map(el => {
            return (
              <>
                <li key={el.id} id={el.id}>
                  {el.descricao} R$ {el.valor} id = {el.id}
                  <button onClick={handleClickRemove}>Excluir</button>
                </li>
              </>
            )
          })}
        </ul>
      </div>
    </div>
  )
}