let fila = [];
const inputNome = document.getElementById("inputNome");
const btAdd = document.getElementById("btAdd");
const btRemover = document.getElementById("btRemover");
const listaDaFila = document.getElementById("listaDaFila");
//const preObjeto = document.getElementById("preObjeto");

const refreshObjeto = () => {
    listaDaFila.innerHTML = ""; // limpa a lista
    for (const nome of fila) {
        const li = document.createElement("li"); //cria elemento <li>
        li.textContent = nome; // define o texto do elemento <li> como o nome
        listaDaFila.appendChild(li); // adiciona o elemento <li> à lista
    }
};

const handleAdicionarNome = () => {
    let nome = inputNome.value; // remove espaços em branco do início e do fim
    if (nome !== '') {
        //insere na fila  
        fila.push(nome); 
        refreshObjeto();
        //zera o campo de nome  
        inputNome.value = "";
        inputNome.focus();
    }
};

const handleRemoverNome = () => {
    if (fila.length > 0) {
        //remove primeiro item da fila
        fila.shift();
        refreshObjeto();
    }
};

btAdd.onclick = handleAdicionarNome;
btRemover.onclick = handleRemoverNome;
