// Programa para calcular o IMC e nível de obesidade de uma pessoa.
console.log('1 - Programa que calcula o IMC e o nível de obesidade de uma pessoa');
const nome1 = 'Carlos';
const peso = 84;
const altura = 1.88;

const imc = peso / (altura * altura);

if (imc >= 30) {
    console.log('Carlos, você está acima do peso');
}

if (imc < 29.9) {
    console.log('Carlos, você não está acima do peso');
}


//  Programa para calcular a aposentadoria
console.log('2 - Programa que calcula a aposentadoria de uma pessoa');
 const nome2 = "Silvana";
 const sexo = "F";
 const idade = 48;
 const contribuicao = 23;

 if (sexo === "F") {
     if (contribuicao >= 30) {
        if ((contribuicao + idade) >= 85) {
            console.log(`A soma da sua idade com o tempo de contribução é ${contribuicao + idade}. ${nome2}, você pode se aposentar!`);
        } else {
            console.log(`A soma da sua idade com o tempo de contribução é ${contribuicao + idade}. ${nome2}, você pode se aposentar!`);
        }
     } else {
         console.log(`Sua contribuicão é ${contribuicao}. ${nome2}, você ainda não pode se aposentar!`);       
     }
 } else {
     // condição caso o sexo seja "M"
     if (contribuicao >= 30) {
        if ((contribuicao + idade) >= 95) {
            console.log(`A soma da sua idade com o tempo de contribução é ${contribuicao + idade}. ${nome2}, você pode se aposentar!`);
        } else {
            console.log(`A soma da sua idade com o tempo de contribução é ${contribuicao + idade}. ${nome2}, você pode se aposentar!`);
        }
     } else {
         console.log(`Sua contribuicão é ${contribuicao}. ${nome2}, você ainda não pode se aposentar!`);       
     }
 }