import { useContext } from "react"
import { ContentContext } from "../Contexts/ContentProvider"


export default function MesAtual() {
  const { state: { dados, soma }, dispatch } = useContext(ContentContext)


  function handleClickRemove(e) {
    const linha = e.target.parentNode

    dispatch({ type: 'EXCLUI_LINHA', linha: linha })
  }

  function handleClickMesAtual (e) {
    const linha = e.target.parentNode

    dispatch({ type: 'PASSA_PARA_MES_ATUAL', linha: linha})
  }

  function handleClickCPCola (e) {
    const linha = e.target.parentNode

    dispatch({ type: 'COPIA_NAO_APAGA', linha: linha})
  }


  return (
    <>
      {dados === null || dados.length === 0 ? '' :
        <>
          <div>
            <h3>Mês Atual</h3>

            <hr />
            <ul>
              {dados && dados.map(el => {
                return (
                  <>
                    <li name="dados" className="list-organizada" key={el.id} id={el.id}>
                      <button className="btn-excluir" onClick={handleClickRemove}>X</button>
                      <button className="btn-copiar-ad" onClick={handleClickCPCola}>CP</button>
                      <button className="btn-passar-prox-mes" onClick={handleClickMesAtual} >^</button>
                      <p>{el.descricao} * <span style={{ color:el.valor.includes('-')? 'red' :  'blue' }}>{(+el.valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span></p>
                    </li>
                  </>
                )
              })}
            </ul>
          </div>
          <div className="box-total">
            <h1>Total</h1>
            <p className="paragrafo-total"> <span style={{ color: `${soma}`.includes('-')? 'red' :  'blue' }}> {soma.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </span></p>
          </div>
        </>
      }
    </>

  )
}