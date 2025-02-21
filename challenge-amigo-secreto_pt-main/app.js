let listaAmigos = [];

function adicionarAmigo() {  
    let nome = document.getElementById('amigo').value.trim(); // Captura o nome e remove espaços extras

    if (nome === '') {
        alert('Digite um nome!');
        return;
    }

    listaAmigos.push(nome); // Adiciona o nome na lista
    document.getElementById('amigo').value = ''; // Limpa o campo de entrada
    atualizarLista(); // Atualiza a lista na tela
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos'); //
    lista.innerHTML = ''; // Limpa a lista antes de atualizar

    listaAmigos.forEach((amigo) => { //
        let item = document.createElement('li');// Cria um elemento da lista
        item.textContent = amigo;// Adiciona o nome do amigo ao elemento da lista

        lista.appendChild(item); // Adiciona o elemento da lista à lista
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {  // Corrige a verificação se a lista está vazia
        alert('Adicione amigos na lista antes de sortear!'); 
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceAleatorio];

    let resultado = document.getElementById('resultado'); // Adiciona o nome do amigo sorteado ao elemento de resultado
    resultado.innerHTML = `<li>Amigo sorteado: <strong>${amigoSorteado}</strong></li>`; 

    limparListaAposSorteio();
    
}

function limparListaAposSorteio() {
    listaAmigos = []; // Limpa o array
    atualizarLista(); // Atualiza a tela removendo os amigos
}

