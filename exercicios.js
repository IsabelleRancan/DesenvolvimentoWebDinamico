// 1. Faça um programa que entre com três números, faca a média aritmética e mostre o
// resultado.
const exec1 = () => {
    const media = Array(3)
        .fill(0)
        .reduce((acc, item, _, arr) => {
            item = Number(window.prompt('digite um numero:'))
            return acc = acc + (item / arr.length)
        }, 0)
        .toFixed(2)
    console.log('A media aritmetica é: ' + media)
}
//exec1()


// 2. Faça um programa que entre com o nome e o salário de um funcionário e mostre seu
// novo salário, sabendo que o mesmo teve um aumento de 10%.
const exec2 = () => {
    const name = window.prompt('Informe o nome do funcionario:')
    const salary = Number(window.prompt('informe o salario do funcionario:'))
    const newSalary = salary + (salary * 0.1)

    console.log(`O novo salario de ${name} será de ${newSalary}`)
}
//exec2()

// 3. Faça um algoritmo que leia dois valores inteiros A e B se os valores forem iguais devem
// ser somados os dois, caso contrário multiplique A por B ao final do cálculo ao final do
// cálculo atribuir o valor para uma variável C.
const exec3 = () => {
    const A = Number(window.prompt('Informe o parametro A:'))
    const B = Number(window.prompt('Informe o parametro B:'))

    let C = 0
    let D = ''

    if (A === B) {
        C = A + B
        D = 'foram somados'
    } else {
        C = A * B
        D = 'foram multiplicados'
    }
    console.log(`O parametro A e B ${D} e retornou ${C}`)
}


//exec3()

// 4. A partir do preço à vista de um determinado produto, calcule o preço total a pagar e o
// valor da prestação mensal, referentes ao pagamento parcelado. Se o pagamento for
// parcelado em 3 vezes deve ser dado um acréscimo de 10% no total a ser pago. Se o
// parcelamento for em 5 vezes, o acréscimo será de 20%.
const exec4 = () => {
    const price = Number(window.prompt('digite o valor a vista do produto:'))
    const installment = Number(window.prompt('digite 1 pagamento avista, 3 parcelas, 5 parcelas'))
    let totalValue = 0
    let payment = ''
    let installmentValue = 0

    if (installment === 1) {
        payment = ' avista'
        totalValue = price
        installmentValue = totalValue
    } else if (installment === 3) {
        payment = ' em 3 prestações'
        totalValue = price * 1.1
        installmentValue = totalValue / 3
    } else if (installment === 5) {
        payment = ' em 5 prestações'
        totalValue = price * 1.2
        installmentValue = totalValue / 5
    }
    console.log(`O valor total do produto é ${totalValue}, a ser pago ${payment} em pagameto mensal de ${installmentValue}`)
}
//exec4()


// 5. Faça um algoritmo que leia o nome e as três notas de uma disciplina de um aluno e ao
// final escreva o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média
// para aprovação é igual ou superior a 8.
const exec5 = () => {
    const name = window.prompt('Digite o nome do aluno:')
    const media = Array(3)
        .fill(0)
        .reduce((acc, grades, _, arr) => {
            grades = Number(window.prompt('digite uma nota:'))
            return acc = acc + (grades / arr.length)
        }, 0)
        .toFixed(2)

    let status = (media >= 8) ? 'aprovado' : 'reprovado'

    console.log(`O aluno ${name} obteve média de notas de ${media} e foi ${status}`)
}
//exec5()


// 6. Escreva um algoritmo que receba dois números reais e um código de seleção do usuário.
// Se o código digitado for 1, faça o algoritmo adicionar os dois números previamente
// digitados e mostrar o resultado; se o código de seleção for 2, os números deverão ser
// multiplicados; se o código de seleção for 3, o primeiro número deve ser dividido pelo
// segundo.
const exec6 = () => {
    const n1 = Number(window.prompt('Digite um numero real:'))
    const n2 = Number(window.prompt('Digite outro numero real:'))
    const selectCode = Number(window.prompt('Digite um código de seleção entre 1 e 3:'))
    let result = 0
    let operacao = ''
    switch (selectCode) {
        case 1:
            result = n1 + n2
            operacao = 'adição'
            break
        case 2:
            result = n1 * n2
            operacao = 'multiplicação'
            break
        case 3:
            result = n1 / n2
            operacao = 'divisão'
            break
        default:
            console.log('codigo de seleçao incorreto')
            break
    }
    console.log(`A operação é ${operacao}, e o resultado é ${result} `)
}
//exec6()


// 7. Faça programa que leia uma temperatura em graus Celsius, calcular e escrever o valor
// correspondente em graus Fahrenheit
const exec7 = () => {
    const grausCelsius = Number(window.prompt('Digite a temperatura em Celcius:'))
    const grausFahrenheit = grausCelsius * 1.8 + 32
    console.log(`A temperatura em Fahrenheit é ${grausFahrenheit}ºF`)
}
//exec7()


// 8. Faça um programa que leia um número, verifique se este número é positivo ou negativo.
// Se for negativo mostre a mensagem "Você digitou um numero negativo", Senão
// mostre:" Você digitou um número positivo.
const exec8 = () => {
    let n = Number(window.prompt('Digite um numero:'))
    switch (true) {
        case n > 0:
            console.log('Você digitou um número positivo')
            break
        case n < 0:
            console.log('Você digitou um numero negativo')
            break
    }
}
exec8()

// 9. Faça um programa que leia um número, verifique se este número é positivo, negativo
// ou Zero. Se for negativo mostre a mensagem "Você digitou um numero negativo", Se
// for positivo mostre:" Você digitou um número positivo e se for zero mostre: “Você
// digitou zero”
const exec9 = () => {
    let n = Number(window.prompt('Digite um numero:'))
    switch (true) {
        case n > 0:
            console.log('Você digitou um número positivo')
            break
        case n < 0:
            console.log('Você digitou um numero negativo')
            break
        case n === 0:
            console.log('Você digitou zero')
            break
    }
}
//exec9()


// 10. Faça um programa que leia a idade de um nadador e classifique-o numa das seguintes
// categorias abaixo:
// • Adulto (idade >= 18);
// • Juvenil (idade >= 14);
// • Infantil (idade >=9);
// • Mirim (Idade < 9).

const exec10 = () => {
    let age = Number(window.prompt('Digite a age do nadador:'))
    switch (true) {
        case age >= 18:
            console.log('Adulto')
            break
        case age >= 14:
            console.log('Juvenil')
            break
        case age >= 9:
            console.log('Infantil')
            break
        case age < 9:
            console.log('Mirim')
            break
    }
}
//exec10()