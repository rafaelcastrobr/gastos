import './StyleFooter.css'

export default function Footer() {
  return (
    <>
      <footer className="footer-creditos">
        <div className="btn-detalhe">
          <span>
            <button className="btn-passar-prox-mes btn-detalhe" >^</button>
            Atualiza valor
          </span>
        </div>
        Feito por Rafael Castro
        <a href="https://github.com/rafaelcastrobr"><img src="https://raw.githubusercontent.com/devicons/devicon/7a4ca8aa871d6dca81691e018d31eed89cb70a76/icons/github/github-original-wordmark.svg" alt="" /></a>
      </footer>
    </>
  )
}