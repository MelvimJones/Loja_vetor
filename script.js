let listaDeCompras = []

function adiciona() {
    let produto = document.getElementById("input1").value
    let position = listaDeCompras.indexOf("produto")

    if (produto == "") {
        alert("Digite um Produto")
    } else {
        if (listaDeCompras.indexOf(produto) < 0) {
            listaDeCompras.push(produto)
            imprimir()
            limpar()
        } else {
            alert("Item ja incluso")
            limpar()
        }
    }
}
function remover() {
    let produto2 = document.getElementById("remover").value
    let position = listaDeCompras.indexOf(produto2)
    if (produto2 == listaDeCompras[position]) {
        listaDeCompras.splice(position, 1)
        imprimir()
        limpar()
    }else{
        alert("Produto não encontrado")
    }
}

function imprimir() {
    document.getElementById("tela").innerText = listaDeCompras.join(" | ")
}

function limpar() {
    document.getElementById("input1").value = ""
    document.getElementById("remover").value = ""
}
