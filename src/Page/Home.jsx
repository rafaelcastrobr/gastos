import MesAtual from "../Components/MesAtual"
import InserirDados from "../Components/InserirDados"
import ContentProvider from "../Contexts/ContentProvider"
import './Home.css'
import ProxMes from "../Components/ProxMes"



export default function Home() {


  return (
    <div className="container">
      <ContentProvider>

        <InserirDados />
        <MesAtual />
        <ProxMes />
      </ContentProvider>
     
    </div>
  )
}