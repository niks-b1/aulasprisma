let botao = document.getElementById("cookie")
let contador = document.getElementById("contador")
let numero = 0


botao.addEventListener("click", () => {
    numero++
    contador.innerText = numero
})