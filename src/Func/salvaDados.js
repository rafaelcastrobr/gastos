

export function salvaDados(dados, mes) {


  if (localStorage.getItem(mes) === null) {
    localStorage.setItem(mes, JSON.stringify([dados]))
  } else {
    localStorage.setItem(mes, JSON.stringify([
      ...JSON.parse(localStorage.getItem(mes)),
      dados
    ]))
  }
}

