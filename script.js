let fila = [];

const inputNome = document.getElementById("inputNome");
const btAdd = document.getElementById("btAdd");
const btRemover = document.getElementById("btRemover");
const listaDaFila = document.getElementById("listaDaFila");

//no evento de "click" (mouse) do botão add ou botao remover, chama as funções respectivas
btAdd.addEventListener("click", handleAdicionarNome);
btRemover.addEventListener("click", handleRemoverNome);


const handleAdicionarNome = () => {
    //verifica se a entrada não foi vazia  
    if (inputNome.value !== '') {
        fila.push(inputNome.value);
        //limpa o campo de entrada
        refreshObjeto();
        document.getElementById('inputNome').value = '';
        inputNome.value = "";
        inputNome.focus();
    }

}
/*quando ele clicar no botao de remover, ele deve automaticamente
remover o primeiro elemento*/
const handleRemoverNome = () => {
    //verifica se tem elementos na fila pra remover
    if (fila.length > 0) {
        fila.shift();
        refreshObjeto();
    }


}


const refreshObjeto = () => {
    listaDaFila.innerHTML = ""; // limpa a listaDaFila
    fila.forEach((nome, index) => { // itera a fila
            /*
          na criação da constante "textNode", 
          ele se utiliza da transformação em strings de acordo com os dados de nome,
           onde o nome deverá ser exibido na instância do "objetoExibicao" para mostrar o nome da pessoa na fila, 
           após  isso o document.createElement("li"), faz literalmente a criação da tag <li>, por fim, 
          o appendChild, faz com que os elementos de textNode sejam exibidos na tag <li>
        */
        const li = document.createElement("li"); //cria a tag <li> 
        li.textContent = nome; // Define o texto do elemento li
        listaDaFila.appendChild(li); // Adiciona o li à lista
    });
}
