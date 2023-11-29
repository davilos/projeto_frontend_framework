const cards = [
    {
        titulo: "Darth Vader",
        foto: "img/cards/darth_vader.jpg",
        descricao: "Um Jedi caído que se tornou o Lorde Sith mais temido da Galáxia."
    },
    {
        titulo: "Yoda",
        foto: "img/cards/yoda.jpg",
        descricao: "Um dos mais sábios e poderosos Jedi de todos os tempos."
    },
    {
        titulo: "Luke Skywalker",
        foto: "img/cards/luke_skywalker.jpg",
        descricao: "Um dos Jedi mais lendários do universo de Star Wars."
    },
];

function divCards(card) {
    return `
    <div class="card">
        <img src="${card.foto}" alt="${card.titulo}">
        <div class="content">
            <h2>${card.titulo}</h2>
            <p>${card.descricao}</p>
        </div>
    </div>
    `;
}

function exibirCards() {
    const container = document.getElementById('cards-container');

    cards.forEach(card => {
        const cardHTML = divCards(card);
        container.insertAdjacentHTML('beforeend', cardHTML);
    });
}

document.addEventListener('DOMContentLoaded', exibirCards);
