

export default function SomaValor(localDados) {

  const somaDados = localDados.map(item => +item.valor).reduce((acc, acu) => {
    return acc + acu
  }, 0)

  return somaDados
}