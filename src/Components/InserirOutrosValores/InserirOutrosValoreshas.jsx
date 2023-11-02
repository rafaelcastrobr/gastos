import { useContext } from "react"
import { ContentContext } from "../../Contexts/ContentProvider"



export default function InserirOutrosValores() {
  const { state: { outrosDados, soma }, dispatch } = useContext(ContentContext)

  function handleClickRemove(e) {
    const linha = e.target.parentNode

    dispatch({ type: 'EXCLUI_LINHA', linha: linha })
  }

  function handleClickMesAtual (e) {
    const linha = e.target.parentNode

    dispatch({ type: 'PASSA_PARA_MES_ATUAL', linha: linha})
  }

  return (
    <>
      <div>
        <h3 style={{color: 'green'}}>Outros valores</h3>
        <hr />
        <ul>
          {outrosDados && outrosDados.map(el => {
            return (
              <>
                <li name="outrosDados" className="list-organizada" key={el.id} id={el.id}>
                  <button className="btn-excluir" onClick={handleClickRemove}>X</button>
                  <button className="btn-passar-prox-mes" onClick={handleClickMesAtual} >^</button>
                  <p>{el.descricao} * <span style={{ color: el.valor.includes('-') ? 'red' : 'blue' }}>{(+el.valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span></p>
                </li>
              </>
            )
          })}
        </ul>
      </div>
    </>
  )
}