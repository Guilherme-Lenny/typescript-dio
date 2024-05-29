// Programação Orientada a Objetos com TypeScript
// 1- O que é POO
/*
const user = {
    name: 'Guilherme',
    age: 27,
    showName() {
        console.log(this.name)
    }
}

const otherUser = {
    name: 'Geovana',
    age: 24,
    showName() {
        console.log(this.name)
    }
}

console.log(user.name) // Acessa o atributo do objeto
user.showName() // Utilizando o objeto e método para mostrar o atributo
otherUser.showName()
*/

class User {
    name: string = 'Guilherme'
    age: number = 27

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
// O this quando passado dentro da classe ou método construtor, ele acessa a propriedade do objeto

    showName = () => {
        console.log(this.name)
    }
}
// Em vez de criar objeto por objeto a classe é utilizada para instanciar a criação de varios objetos

const user: User = new User('Guilherme', 27)
user.showName()

const otherUser = new User('Geovana', 24)
otherUser.showName()

// 2- Classes e tipos
// Abstração : A abstração na POO é a capacidade de ocultar detalhes irrelevantes ou complexos de um problema e focar nos aspectos essenciais.

//Dio Banking

//name, accountNumber
//depositar, sacar

/*
class Account {
    name: string
    accountNumber: number

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    deposit = () => {
        console.log('Você depositou')
    }

    withdraw = () => {
        console.log('Você sacou')
    }
}
*/

/*
const newAccount: Account = new Account('Guilherme', 1)
console.log(newAccount)

const account: Account = new Account('Geovana', 2)
account.deposit()
*/

// 3- Herança
// extends faz que a classe Admin herde atributos e métodos da Account (dessa forma a Admin vira derivada da Account e necessita do super construtor)
/*
class Admin extends Account{
    balance: number

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
        this.balance = 20
    }

    getBalance = () => {
        console.log(this.balance)
    }
}

const adminAccount: Admin = new Admin('Guilherme', 1)
console.log(adminAccount)

const account: Account = new Account('Geovana', 2)
console.log(account)
*/

// Classe Abstrata: Uma classe abstrata é um tipo especial de classe em programação que não pode ser instanciada por si só. Em vez disso, ela serve como uma base para outras classes. Pense nela como um modelo ou uma blueprint que define métodos e propriedades comuns, mas deixa a implementação específica desses métodos para as subclasses que a herdam.
abstract class DioAccount {
    private name: string
    accountNumber: number
    balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    setName = (name: string): void => {
        this.name = name
        console.log('Nome alterado com sucesso!')
    }

    getName = (): string => {
        return this.name
    }

    deposit = () => {
        console.log('Você depositou')
    }

    withdraw = () => {
        console.log('Você sacou')
    }    
    
    getBalance = () => {
        console.log(this.balance)
    }

    private validateStatus = (): boolean => {
        if (this.status) {
            return this.status
        }

        throw Error('Conta inválida')
    }
}

class PeopleAccount extends DioAccount {
    doc_id:number

    constructor(doc_id: number, name: string, accountNumber: number) {
        super(name, accountNumber)
        this.doc_id = doc_id
    }
}

const peopleAccount: PeopleAccount = new PeopleAccount(10, 'Guilherme', 1)
/*
console.log(peopleAccount)
peopleAccount.setName('Lenny')
console.log(peopleAccount)
console.log(peopleAccount.getName())
*/
console.log(peopleAccount)
peopleAccount.deposit()

// 4- Módulos
class CompanyAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    getLoan = () => {
        console.log('Você fez um empréstimo')
    }
}

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount)

//Uma boa prática é separar as classes em arquivos distintos, após isso é deve se realizar o import(no arquivo principal) e export(no arquivo da classe, para transformá-lo em módulo)
//Ex: import { DioAccount } from './class/DioAccount'
// Ex: export abstract class DioAccount {...

//Uma classe mãe pode ter métodos que tenha sua assinatura alterada em uma classe filha (a assinatura do método é o tipo de retorno)
//Ex: getLoan = (): void => {... (retorna vazio)
/*
Além da assinatura pode se ter o fluxo do método alterado
Ex: Na classe CompanyAccount
    deposit = (): void => {
        console.log('A empresa depositou')
    }
*/

// É com base no polimorfismo que podemos alterar o fluxo e assinatura de um método
/*
Classe CompanyAccount:
    deposit = (): number => {
        return 2
    }

app.ts:
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount.deposit())
*/

// 5- Visibilidade de atributos e métodos
/*
Public: Todos podem ver e usar.
Private: Só o próprio objeto pode ver e usar.
Isso ajuda a proteger partes importantes do objeto para que não sejam usadas de forma errada ou acidentalmente.
*/

// No objeto DioAccount, adiocionando o private antes de name torna aquele atributo privado, só podendo ser acessado dentro de sua própria classe de objeto
/*
Ex: export abstract class DioAccount {
    private name: string...
*/

/*    
    Função interna da classe DioAccount (Essa função é pública)
    setName = (name: string): void => {
        this.name = name
        console.log('Nome alterado com sucesso!')
    }

    Modo de uso, ex:
    peopleAccount.setName('Lenny') (Altera o atributo name)

    Função para buscar o atributo privado
    getName = (): string => {
        return this.name
    }

    Modo de uso, ex:
    console.log(peopleAccount.getName())
*/

/*
Adicione o atributo "private status: boolean = true", na classe DioAccount

E uma função de validação para que execute dentro de sua classe
    private validateStatus = (): boolean => {
        if (this.status) {
            return this.status
        }

        throw Error('Conta inválida')
    }
*/