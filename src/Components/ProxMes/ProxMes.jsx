import { useContext } from "react"
import { ContentContext } from "../../Contexts/ContentProvider"
import './StyleProxMes.css'

export default function ProxMes() {
  const { state: { dadosProxMes, somaProxMes }, dispatch } = useContext(ContentContext)


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
      {dadosProxMes === null || dadosProxMes.length === 0 ? '' :
        <>
          <div>
            <h3>Próximo Mês</h3>
            <hr />
            <ul>
              {dadosProxMes && dadosProxMes.map(el => {
                return (
                  <>
                    <li name="dadosProxMes" className="list-organizada" key={el.id} id={el.id}>
                      <button className="btn-excluir" onClick={handleClickRemove}>X</button>
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
            <p className="paragrafo-total"> <span style={{ color:  `${somaProxMes}`.includes('-')? 'red' :  'blue' }}> {somaProxMes.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </span></p>
          </div>
        </>
      }
    </>
  )
}