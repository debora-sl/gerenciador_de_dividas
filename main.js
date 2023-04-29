console.log("Esta um lindo dia para codar");


const criaContas = ()=>{
    //selecionando a tabela de contas
    const tabelaContas = document.querySelector('[data-tabela-relatorio]');
    console.log(tabelaContas); 

    //selecionando os campos conta e valor
    const inputConta = document.querySelector('[data-input-nome]');
    const contaNome = inputConta.value;

    const inputValor = document.querySelector('[data-input-valor]');
    const contaValor = inputValor.value;

    const novaContaNome = document.createElement('td');
    novaContaNome.classList.add("principal__tabela-linhas");
    tabelaContas.appendChild(novaContaNome);

}

// selecionando o botão, adicionando evento escutador de clique e chamando a função que imprime
const botao = document.querySelector('[data-botao-adiciona-conta]');
botao.addEventListener('click', criaContas);
