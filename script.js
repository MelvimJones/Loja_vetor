 let vet = []

 function adiciona(){
     let item = document.getElementById("input1").value
     vet.push(item)

     limpar()
     imprimir()
 }

 function limpar(){
     document.getElementById("input1").value = ""
 }

 function imprimir(){
     document.getElementById("tela").innerText = vet.join(" - ")
 }
