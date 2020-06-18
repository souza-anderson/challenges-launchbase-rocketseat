// Programa que armazena um array de usuário (objetos),
// cada usuário tem um nome e suas tecnologias (novo array)
// percorrer a lista de usuários com uma estrutura de repetição
// imprimindo em tela as informações dos usuários.

const usuarios = [
    { nome: 'Carlos', tecnologias: ['HTML', 'CSS'] },
    { nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS'] },
    { nome: 'Tuane', tecnologias: ['HTML', 'CSS'] }
];

const usuario = {
    nome: 'Anderson',
    tecnologias: ['JavaScript', 'CSS']
}

function imprimeUsuarios(usuarios) {
    for (let usuario of usuarios) {
        console.log(`${usuario.nome} trabalha com ${usuario.tecnologias}`)
    }
}

// imprimeUsuarios(usuarios);

// Dado um usuário, verificar se este usuário trabalha ou não
// com CSS. Caso sim, retorna true, caso não, retornar false.

function checaSeUsuarioUsaCSS(usuario) {

    for (let i = 0; i < usuario.tecnologias.length; i++) {
        if (usuario.tecnologias[i] === 'CSS') {
            return true;
        }
    }
    return false;
}

// console.log(checaSeUsuarioUsaCSS(usuario));

function imprimeInformacoesUsuario(usuarios) {

    for (let i = 0; i < usuarios.length; i++) {
        const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);
    
        if (usuarioTrabalhaComCSS) {
            console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
        }
    }
}

// imprimeInformacoesUsuario(usuarios);

// Soma de despesas e receitas

const usuarios2 = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
];

function somaNumeros(numeros) {
    let soma = 0;

    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma;
}

function calculaSaldo(receitas, despesas) {
    const somaReceita = somaNumeros(receitas);
    const somaDespesa = somaNumeros(despesas);
    return somaReceita - somaDespesa;
}

function saldoUsuarios(usuarios) {
    for (let usuario of usuarios) {
        const saldo = calculaSaldo(usuario.receitas, usuario.despesas);
        if (saldo > 0) {
            console.log(`${usuario.nome} possui saldo POSITIVO de ${saldo}`);
        }

        if (saldo < 0) {
            console.log(`${usuario.nome} possui saldo NEGATIVO de ${saldo}`);
        }
    }
}

saldoUsuarios(usuarios2);
