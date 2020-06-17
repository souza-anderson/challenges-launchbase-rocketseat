// Criar um programa que armazena dados da empresa Rocketseat
// dentro de um objeto chamado empresa.

const empresa = {
    nome: 'Rocketseat',
    cor: 'Roxo',
    foco: 'Programação',
    endereco: {
        rua: 'Rua Guilherme Gembala',
        numero: 260
    }
}

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`);

// Program que cria um objeto para armazenas dados de programador
// como nome, idade e tecnologias que trabalhar. As tecnologias 
// devem ser aramazenas em um array.

const programador = {
    nome: 'Anderson',
    idade: 28,
    tecnologias: [{
        nome: 'C#',
        especialidade: 'Desktop'
    },
    {
        nome: 'Javascript',
        especialidade: 'Web/Mobile'
    },
    {
        nome: 'Python',
        especialidade: 'Data Science'
    }]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos`);
console.log(`e usa a tecnologia ${programador.tecnologias[0].nome}`);
console.log(`com especialidade em ${programador.tecnologias[0].especialidade}`);