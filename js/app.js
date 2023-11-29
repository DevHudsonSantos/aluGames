function alterarStatus(id){
    
    let gameClidado = document.getElementById (`game-${id}`); //essa variável serve para recuperar o dado do id
    let imagem = gameClidado.querySelector ('.dashboard__item__img'); // essa variável recupera o id imagem
    let botao = gameClidado.querySelector ('.dashboard__item__button'); // essa variavel recupera a id do botao

    if (imagem.classList.contains('dashboard__item__img--rented')){ // se o item imagem contem em sua lista de classes a classe especificada no parametro
        imagem.classList.remove('dashboard__item__img--rented'); // remover a classe
        botao.classList.remove('dashboard__item__button--return'); // remover a classe do botao
        botao.textContent = 'Alugar'; // muda o conteudo do texto
    }else{
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver'
    }
}