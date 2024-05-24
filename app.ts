// 1- Conhecendo o Typescript
const soma = (a: number, b: number) => {
    console.log(a + b)
}

soma (2, 2);

// 2- Variáveis e tipos
var a = 'a' // Escopo Global
let b = 'b' // Valor mutável 
const c = 'c' // Valor imutável 

//Tipos primitivos
let s: string = 's'
let n: number = 2
let x: boolean = true

let m: string | number = 2 //Tipo 'any' possibilita a atribuição de qualquer valor
m = 'Guilherme'

// 3- Objetos e interfaces
interface Pessoa {
    nome: string,
    idade:number,
    profissao?: string // ? torna a propriedade opcional (undefined)
}

const pessoa: Pessoa = {
    nome: 'Guilherme',
    idade: 27
}

const outraPessoa: Pessoa = {
    nome: 'Geovana',
    idade: 24,
    profissao: 'Desenvolvedora'
}

// Outra forma de declarar Array<Pessoa>
const arrayPessoa: Pessoa [] = [
    pessoa,
    outraPessoa
]

const arrayNum: number[] = [
    1, 2, 3
]

const arrayString: Array<string> = [
    '1', '2', '3'
]

// 4- Decisões e repetições
const num: number = 16

if(num > 15) {
    console.log('Num maior que 15')
} else if(num === 15) {
    console.log('Num igual a 15')
} else {
    console.log('Num menor que 15')
}
//Obs: == Verifica se o valor é igual / Já o === verifica o valor e o tipo

//Objeto Literal:
const typeUser = {
    admin: 'Seja bem-vindo admin',
    student: 'Você é um estudante',
    viewer: 'Você pode visualizar'
}

function validateUser(user: string) {
    console.log(typeUser[user as keyof typeof typeUser])
}

const usuario = 'admin'

validateUser(usuario)

// 5- Estruturas de Repetição
for(let i = 0; i < 5; i++) {
    console.log(i)
}

n = 2
while(n < 6){
    console.log(n)
    n++
}

// 6- Array
const array: Array<number> = [1, 2, 3, 4]

const stringArray: string [] = ['a', 'b', 'c']

console.log(array[0]) // Será o elemento 1 que se encontra no índice 0

console.log(stringArray.length) // Mostra a quantidade de elementros dentro do Array

console.log('Array original', array)

array.push(5) //Adiciona elemento na última posição

console.log('Array com novo elemento', array)

array.pop() //Retira o último elemento, não precisa de parâmetro 

console.log('Array retirando o último elemento', array)

// 6- Manipulando Arrays

const buscaNum = array.find(num => num === 4)
//Find recebe uma função de callback, que chama cada elemento como num é só retorna caso esse num seja igual a 4 (retorna o primeiro elemento que atende a condição conforme a ordem do array)
console.log(buscaNum) // Quando não encontra o elemento, é passado o valor undefined

array.forEach(num => console.log(num)) 
//ForEach recebe uma função de callback, que percorre o array e a cada intereção ele imprime em tela

array.forEach(num => {
    if(num > 2 && num % 2 === 0) {
        console.log(num * 2)
    }
})
// Esse algoritmo está procurando qual número é maior que 2, e qual o número ao mesmo tempo tenha o resto dividido por 2 que seja 0 (ele pegou o 4 e multiplicou por 2, resultando em 8)

array.map(num => console.log(num))
// É semelhante ao forEach, mas lida melhor com funções assíncronas ao contrário do forEach que acaba passando por cima delas (map tem performance melhor )