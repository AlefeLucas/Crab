/*import React from 'react'

let botaoLogar = document.querySelector("#botao-login");

botaoLogar.addEventListener("click", fazerLogin);

function fazerLogin(event) {
    event.preventDefault();

    //Ler os dados do form
    let dados = document.querySelectorAll("area-text-login");

    let info = infoUsuario(dados);

    let validacao = validarEmail(info);

    if(!validacao){
        let ul = document.querySelector(".mensagem-erro");
        ul.innerHTML = "";

        let li = montarDado("E-mail inválido!", "mesagem-erro", "li");
        ul.appendChild(li);
    }
}

function infoUsuario(dados) {

    let informacoes = {
        email: dados.email.value,
        senha: dados.senha.value
    };

    return informacoes
};

function validarEmail(info) {
    return !(!info.email.contains("@") || !info.email.contains(".com"));
}

function montarDado(dado, classe, tag) {
    let td = document.createElement(tag)
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}*/