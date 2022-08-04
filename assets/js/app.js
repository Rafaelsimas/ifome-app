let usuarioLogado
function login(){
    const viewLogin = document.querySelector('.bg-app-login')
    const viewApp = document.querySelector('.app')
    const inputNome = document.querySelector('.inputNome').value
    const usuario = document.querySelector('.userName')

    viewLogin.classList.add('escondido')
    viewApp.classList.remove('escondido')
    usuario.innerHTML = inputNome
}

function escolherPrato(prato){

    const selecionado = document.querySelector('.pratos .selecionado')
    if(selecionado !== null){
        selecionado.classList.remove('selecionado')
    }

    const seletor = '.' + prato
    const cardPrato = document.querySelector(seletor)
    cardPrato.classList.add('selecionado')
}

function escolherBebida(bebida){

    const selecionado = document.querySelector('.bebidas .selecionado')
    if(selecionado !== null){
        selecionado.classList.remove('selecionado')
    }

    const seletor = '.' + bebida
    const cardBebida = document.querySelector(seletor)
    cardBebida.classList.add('selecionado')
}

function escolherSobremesa(doce){

    const selecionado = document.querySelector('.sobremesa .selecionado')
    if(selecionado !== null){
        selecionado.classList.remove('selecionado')
    }

    const seletor = '.' + doce
    const cardSobremesa = document.querySelector(seletor)
    cardSobremesa.classList.add('selecionado')
}
