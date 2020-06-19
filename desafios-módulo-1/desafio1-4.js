// Programa para criar operações bancárias na conta de um usuário

const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
};

function createTransaction(transaction) {
    user.transactions.push(transaction);

    if (transaction.type === 'credit') {
        user.balance += transaction.value;
    } else {
        user.balance -= transaction.value;
    }
}

function getHigherTransactionByType(type) {
    let higherValue = 0;

    for (let transaction of user.transactions) {
        if (transaction.type === type && transaction.value > higherValue) {
            higherValue = transaction.value;
        }
    }

    return {type, value: higherValue}    
}

function getAverageTransactionValue() {
    let sumTransactions = 0;
    let media = 0;

    for (let transaction of user.transactions) {
        sumTransactions += transaction.value;
    }

    media = sumTransactions / user.transactions.length;

    return media;
}

function getTransactionCount() {
    let creditCount = 0;
    let debitCount = 0;

    for (transaction of user.transactions) {
        if (transaction.type === 'credit') {
            creditCount++;
        }

        if (transaction.type === 'debit') {
            debitCount++;
        }
    }

    return { credit: creditCount, debit: debitCount }
}


createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log('Saldo das transações de um usuário: ', user.balance);

console.log('Maior valor de transação de um usuário por tipo: ', getHigherTransactionByType('credit'));

console.log('Maior valor de transação de um usuário por tipo: ', getHigherTransactionByType('debit'));

console.log('Valor médio das transações de um usuário: ', getAverageTransactionValue());

console.log('Quantidade de transações por tipo: ', getTransactionCount());