console.log("Esta um lindo dia para codar");

//Selecionando o formulário
const formulario = document.querySelector('[data-formulario]');

//selecionando a lista de contas
const listaDeContas = document.querySelector('[data-lista-conta]');

//selecinando o total
const totalContas = document.querySelector('[data-total-valor]');



//ecutador de evento do submit do formulário
formulario.addEventListener("submit", (evento)=>{
    //previnindo o comportamento padrão do formulário
    evento.preventDefault();

    //criando as constantes nome e valor valor da conta
    const contaNome = evento.target.elements['conta'];
    const contaValor = document.querySelector('[data-valor]')
    const valor = contaValor.value;

    //chamando a função que cria o elemento
    criaElemento(contaNome.value, contaValor.value);

    //limpando os campos
    contaNome.value = "";
    contaValor.value = "";
});

function criaElemento(contaNome, contaValor) {
    //criando a li e adicionando a classe
    const novaConta = document.createElement('div');
    novaConta.classList.add("principal__lista-conta");


    //criando o nome e valor da conta
    const novoContaNome = document.createElement('li');
    novoContaNome.innerHTML = contaNome;
    novoContaNome.classList.add("principal__lista-nome");


    const novaContaValor = document.createElement('li');
    novaContaValor.innerHTML = contaValor;
    const valorConvertido = parseInt(contaValor);

    
    novaContaValor.classList.add("principal__lista-valor");   
    
    //colocando o nome e valor dentro da nova conta
    novaConta.appendChild(novoContaNome);
    novaConta.appendChild(novaContaValor);

    //colocando a nova conta dentro da lista de contas
    listaDeContas.appendChild(novaConta);
    listaDeContas.classList.add("principal__list");

    const listaDeValores = [];
    listaDeValores.push(valorConvertido);

    const totalContasValor = document.querySelector('[data-total]');
    totalContasValor = listaDeValores;
    console.log(totalContasValor);


}

