import { useContext } from "react"
import { ContentContext } from "../Contexts/ContentProvider"


export default function MesAtual() {
  const { state: { localDados, soma }, dispatch } = useContext(ContentContext)


  function handleClickRemove(e) {
    const linha = e.target.parentNode

    dispatch({ type: 'EXCLUI_LINHA', linha: linha})
  }


  return (
    <>
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

    </>
  )
}