let resistividade = 0.0172 // 0,0282 Ω. mm²/m condutor de aluminio

let comprimento = 1555
let areaTransversal = 2.5 // o valor minimo é 1 para não dividir por 0
let resistencia = 0

resistencia = (resistividade * comprimento) / areaTransversal

console.log("O valor da resistencia é = " + resistencia)