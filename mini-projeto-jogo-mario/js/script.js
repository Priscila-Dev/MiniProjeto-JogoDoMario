// import { setBanco, getBanco } from "./conexao.js"; // precisa declarar o nome das funcoes

import * as conexoes from "./conexao.js"; // chama todas as funcoes
import * as modulos from "./modulos.js";

//Elementos globais
const inputJogador = document.querySelector("#inputJogador");
const btnStart = document.querySelector("#btnStart");

//Variaveis globais
let nomeJogador;
let moedasJogador = 0;
let estrelasJogador = 0;
let tempoJogador = 0;
let pontuacaoJogador = 0;

//Funcoes

//Essa funcao verifica se o nome do jogador tem mais que 3 caracteres para habilitar o botao de start
const validarJogador = ({target}) => {

    if (target.value.length > 2) {
        
            btnStart.removeAttribute('disabled');

            nomeJogador = target.value.trim().toUpperCase();

           btnStart.addEventListener('click', start);

            document.addEventListener('keypress', ({key}) => {
                if (key === 'Enter') {

                    start();
                }
            });

    }else {
        btnStart.setAttribute('disabled', '');
    }
   
}

inputJogador.addEventListener('input', validarJogador);

const limparTexto = () => {
    inputJogador.value = '';
}

const start = () => {

    limparTexto();
    btnStart.setAttribute('disabled', '');
    console.log('deu certo')
};

//modulos.playSom('somAbertura');