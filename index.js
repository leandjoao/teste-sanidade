const app = document.querySelector("#app")
let vetor = []
let impares = []

for(let i = 1; i<=24; i++) {
  vetor.push(i)
}

const recebeAula = aula => {
  aula.forEach(horas => horas % 2 !== 0 ? impares.push(horas): '')
  return impares
}

app.innerHTML = recebeAula(vetor)