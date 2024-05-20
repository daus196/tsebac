class Pessoa{
    nome: string;
    renda?: number;

    constructor(nome: string, renda?:number){
        this.nome = nome;
        this.renda = renda
    }

    dizOla(): string{
        return `${this.nome} disse oi`
    }
}

class ContaBancaria {
    private saldo: number = 0;
    numeroConta: number;
    constructor(numeroConta:number){
        this.numeroConta = numeroConta
    }

    getSaldo(){
        return this.saldo;
    }

    depositar(valor:number){
        this.saldo += valor;
    }
}

class ContaBancariaPF extends ContaBancaria{
    depositar(valor: number): void {
        
    }
}