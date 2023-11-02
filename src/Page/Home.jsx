import MesAtual from "../Components/MesAtual"
import InserirDados from "../Components/InserirDados/InserirDados"
import ContentProvider from "../Contexts/ContentProvider"
import './Home.css'
import ProxMes from "../Components/ProxMes/ProxMes"
import InserirOutrosValores from "../Components/InserirOutrosValores/InserirOutrosValoreshas"



export default function Home() {


  return (
    <div className="container">
      <ContentProvider>

        <InserirDados />
        <MesAtual />
        <ProxMes />
        <InserirOutrosValores />

      </ContentProvider>
     
    </div>
  )
}