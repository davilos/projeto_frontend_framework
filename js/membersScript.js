const membros = [
    {
        nome: "Dávilos Tavares da Costa",
        foto: "img/members/davilos.jpg",
        competencias: "Python, Django, Django REST Framework, Docker, Java.",
        experiencia: "Nenhuma",
        escolaridade: "Ensino Superior"
    },
    {
        nome: "Kauan Ferreira dos Santos",
        foto: "img/members/kaua.jpg",
        competencias: "Pacote Office, Resolução de problemas e Conhecimentos em software.",
        experiencia: "Atendente da loja Gostosuras da Li",
        escolaridade: "Ensino superior"
    },
    {
        nome: "Natalia Freitas da Luz Gusmão",
        foto: "img/members/natalia.jpg",
        competencias: "Pacote Office, Excel e Conhecimento em sistemas de rede comerciais.",
        experiencia: "Vendedora na loja Fini",
        escolaridade: "Ensino superior"
    },
    {
        nome: "Pedro Lucas de s.c. Barros",
        foto: "img/members/pedro.jpg",
        competencias: "C#, Unity.",
        experiencia: "Nenhuma",
        escolaridade: "Ensino superior"
    },
    {
        nome: "Mattheaus Hoffman Franco",
        foto: "img/members/mattheaus.jpg",
        competencias: "Banco de Dados SQL, Lógica de Programação com Python e Análise de Dados com Python.",
        experiencia: "Nenhuma",
        escolaridade: "Ensino superior"
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
    const container1 = document.getElementById('members-container-1');
    const container2 = document.getElementById('members-container-2');

    membros.forEach((membro, index) => {
        const membroHTML = sectionMembros(membro);

        if (index < 3) {
            container1.insertAdjacentHTML('beforeend', membroHTML);
        } else {
            container2.insertAdjacentHTML('beforeend', membroHTML);
        }
    });
}

document.addEventListener('DOMContentLoaded', exibirMembros);
