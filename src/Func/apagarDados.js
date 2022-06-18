
export function apagarDados (id, nomeValor, dadosExcluir) {


  const dadosDelet = dadosExcluir.filter(item => id !== item.id)

      localStorage.setItem(nomeValor, JSON.stringify(
        dadosDelet
      ))

}