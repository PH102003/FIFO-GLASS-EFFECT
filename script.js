let fila = [];

let objetoExibicao = {};
const inputNome = document.getElementById("inputNome");
const btAdd = document.getElementById("btAdd");
const btRemover = document.getElementById("btRemover");
const btLimpar = document.getElementById("btLimpar");

//no evento de "click" (mouse) do botão add, botao remover, ou botao limpar, chama as funções respectivas
btAdd.addEventListener("click", adicionarNome);
btRemover.addEventListener("click", removerNome);
btLimpar.addEventListener("click", limparFila);


const adicionarNome = () => {
    //verifica se a entrada não foi vazia  
    if(inputNome !== ''){
        fila.push(inputNome);
    }
    //limpa o campo de entrada
    refreshObjeto();
    document.getElementById('inputNome').value = '';
}
/*quando ele clicar no botao de remover, ele deve automaticamente
remover o primeiro elemento*/
const removerNome = () => {
    //verifica se tem elementos na fila
    if(fila.length > 0){
        fila.shift(inputNome);
        refreshObjeto();

    }
    
    
}
function limparFila() {
    // Limpa toda a fila
    fila.length = 0;
    // Atualiza o objeto de exibição
    atualizarObjetoExibicao();
}
/*limpa o conteúdo anterior e, em seguida, 
itera sobre todas as propriedades do objeto objetoExibicao, 
exibindo elas no elemento html
*/
const refreshObjeto = () => {
    preObjeto.innerHTML = "";
    for (const campo in objetoExibicao) {
      preObjeto.innerHTML += `${campo} = ${objetoExibicao[campo]}\n`;
    }
  };