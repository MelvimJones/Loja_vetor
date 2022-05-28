let n1 = []
let contador =0
function adiciona(){
let item = document.getElementById("input1").value
n1[contador] = item
contador +=1

document.getElementById("input1").value = ""

document.getElementById("tela").innerText = n1

}