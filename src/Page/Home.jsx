import MesAtual from "../Components/MesAtual"
import InserirDados from "../Components/InserirDados"
import ContentProvider from "../Contexts/ContentProvider"
import './Home.css'



export default function Home() {


  return (
    <div className="container">
      <ContentProvider>

        <InserirDados />
        <MesAtual />

      </ContentProvider>

    </div>
  )
}