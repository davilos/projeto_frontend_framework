const membros = [
    {
        nome: "Dávilos",
        foto: "img/members/davilos.jpg",
        competencias: "Python, Django, Django REST Framework, Docker, Java",
        experiencia: "Nenhuma",
        escolaridade: "Ensino Superior"
    },
    {
        nome: "Fulano",
        foto: "img/members/fulano.jpg",
        competencias: "HTML, CSS e JavaScript",
        experiencia: "Nenhuma",
        escolaridade: "Ensino Superior"
    },
];

function sectionMembros(membro) {
    return `
    <section class="member">
        <img src="${membro.foto}" alt="${membro.nome}">
        <div class="info">
            <h2>${membro.nome}</h2>
            <p>Competências: ${membro.competencias}</p>
            <p>Experiências profissionais: ${membro.experiencia}</p>
            <p>Escolaridade: ${membro.escolaridade}</p>
        </div>
    </section>
    `;
}

function exibirMembros() {
    const container = document.getElementById('members-container');

    membros.forEach(membro => {
        const membroHTML = sectionMembros(membro);
        container.insertAdjacentHTML('beforebegin', membroHTML);
    });
}

document.addEventListener('DOMContentLoaded', exibirMembros);
