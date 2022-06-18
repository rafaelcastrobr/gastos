

export default function SomaValor(localDados) {


  if (localDados === null || localDados === undefined) {
    const somaDados = 0
    return somaDados
  } else {
    const somaDados = localDados.map(item => +item.valor).reduce((acc, acu) => {
      return acc + acu
    }, 0)

    return somaDados
  }



}