const cards = [
    {
        titulo: "Darth Vader",
        foto: "img/cards/darth_vader.jpg",
        descricao: "O maior vilão da história."
    },
    {
        titulo: "Yoda",
        foto: "img/cards/yoda.jpg",
        descricao: "O maior Mestre Jedi."
    },
    {
        titulo: "Luke Skywalker",
        foto: "img/cards/luke_skywalker.jpg",
        descricao: "O Jedi mais forte."
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
