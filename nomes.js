// script.js

let nomes = []; // Array para armazenar os nomes

// Função para adicionar um nome à lista
function adicionarNome() {
    const nomeInput = document.getElementById("nomeInput");
    const nome = nomeInput.value.trim();

    if (nome !== "") {
        nomes.push(nome);
        nomeInput.value = ""; // Limpa o campo de input
        atualizarLista(); // Atualiza a lista na tela
    } else {
        alert("Por favor, insira um nome.");
    }
}

// Função para atualizar a lista na tela
function atualizarLista() {
    const listaNomes = document.getElementById("listaNomes");
    listaNomes.innerHTML = ""; // Limpa a lista antes de atualizar

    nomes.forEach((nome) => {
        const li = document.createElement("li");
        li.textContent = nome;
        listaNomes.appendChild(li);
    });
}

// Função para ordenar os nomes em ordem alfabética
function ordenarNomes() {
    nomes.sort(); // Ordena o array em ordem alfabética
    atualizarLista(); // Atualiza a lista com os nomes ordenados
}

// Referência aos elementos de áudio e botão
var audio = document.getElementById('audio');
var toggleButton = document.getElementById('toggle-button');

// Função para controlar a música (tocar ou pausar)
toggleButton.onclick = function() {
    if (audio.paused) {  // Se a música estiver pausada
        audio.play();  // Começa a tocar
        toggleButton.textContent = "Parar Música";  // Altera o texto do botão
    } else {  // Se a música já estiver tocando
        audio.pause();  // Pausa a música
        audio.currentTime = 0;  // Reseta a música para o início
        toggleButton.textContent = "Iniciar Música";  // Altera o texto do botão
    }
};