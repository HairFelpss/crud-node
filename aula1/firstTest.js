console.log("Amigo estou aqui")

const soma = (num1, num2) => { //pure function
    return num1 + num2
}

const mult = (num1, num2) => num1 * num2  //pure function

// high order function 
const operacao = (operacao, num1, num2) => operacao(num1, num2) 

const obj = {
    key: 'value'
}

const array = [1, 2, 3]

console.log('Soma: ', operacao(soma, 10, 20))
console.log('Multi: ', operacao(mult, 10, 20))