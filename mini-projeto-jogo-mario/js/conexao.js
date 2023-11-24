const setBanco = (banco) => {
    localStorage.setItem('bd-mario', banco);
};

const getBanco = () => {
    return JSON.parse(localStorage.getItem('bd-mario')) ?? [];
};

const bancoTemp = (nome, moedas, estrelas, tempo, pontuacao) => {
    
    let banco = getBanco(); //<- Array

    let dados = {
        nomeJogador: nome,
        moedasJogador: moedas,
        estrelasJogador: estrelas,
        tempoJogador: tempo,
        pontuacaoJogador: pontuacao
    };

    //Esse metodo permite acrescentar novs dados sem apagar os que ja existem
    banco.unshift(banco);

    setBanco(JSON.stringify(dados));
};


export {setBanco, getBanco, bancoTemp}