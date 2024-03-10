'use strict'; // Declaração para usar o modo estrito do JavaScript

// Seleciona o elemento com a classe 'btn' e o armazena na variável switcher
const switcher = document.querySelector('.btn');

// Seleciona o elemento <body> da página e o armazena na variável body
const body = document.body;

// Adiciona um evento de clique ao elemento com a classe 'btn'
switcher.addEventListener('click', function() {
    // Alternar entre as classes 'dark-theme' e 'light-theme' no elemento body
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');

    // Obtém a classe atual do elemento body após a alternância
    var className = body.className;

    // Verifica se a classe atual é 'light-theme' para atualizar o texto do botão
    if (className === "light-theme") {
        switcher.textContent = "Dark"; // Altera o texto do botão para "Dark"
    } else {
        switcher.textContent = "Light"; // Altera o texto do botão para "Light"
    }

    // Exibe no console a classe atual do elemento body
    console.log("current class name: " + className);
});
