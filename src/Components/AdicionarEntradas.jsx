import { useState } from "react"


export default function AdicionarEntrada() {

  const [dados, setDados] = useState({
    id: Math.floor(Date.now() * Math.random()).toString(36),
    descricao: '',
    valor: ''
  })

  function handleClickAdd(e) {

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


  return (
    <>
      <h1>ADICIONE OS GASTOS</h1>
      <div>
        <input className="input-titulo" placeholder="digite um titulo" type="text" value={dados.descricao} onChange={e => setDados({ ...dados, descricao: (e.target.value).toLocaleUpperCase() })} />
        <input className="input-valor" placeholder="digite um valor" type="number" value={dados.valor} onChange={e => setDados({ ...dados, valor: e.target.value })} />
      </div>
      <button className="btn-adicionar" onClick={handleClickAdd}>+</button>
    </>
  )
}