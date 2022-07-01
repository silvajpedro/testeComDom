let botao = document.getElementsByTagName("button")[0]
// botao.innerText = 'ativar'
// botao.style.fontSize = '20px'
let div = document.getElementsByTagName("div")[0]

function clique(){
 div.style.transform = "scale(100%)"
 div.style.transition = "all 1s"
 div.style.marginLeft = "250px"
}

function remova(){
    div.style.transform = "scale(0.1%)"
    div.style.transition = "all 1s"
    div.style.marginLeft = "80px"
}