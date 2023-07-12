var n1 = 0
var ope = ""
var n2 = 0

function displaydeletar(){
  var painel = document.getElementById("painel")
  painel.value = painel.value.slice(0, -1)
}

function display(btn){
  var painel = document.getElementById("painel")
  painel.value += btn
}

function Operador(op){
  var painel = document.getElementById("painel")
  if (painel.value === ""){
    return
  }
  n1 = parseFloat(painel.value)
  ope = op
  painel.value = ""
}

function calcular(){
  var painel = document.getElementById("painel")
  if (painel.value === ""){
    return
  }
  n2 = parseFloat(painel.value)
  var resultado
  switch(ope){
    case "+":
      resultado = n1 + n2
      break
    case "-":
      resultado = n1 - n2
      break
    case "X":
      resultado = n1 * n2
      break
    case "/":
      resultado = n1 / n2
      break
    default:
      return
  }
  painel.value = resultado
  n1 = 0
  ope = ""
  n2 = 0
}
