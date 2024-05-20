class Conta {
    numeroDaConta: number;
    saldo:number = 0;

    constructor(numeroDaConta:number){
        this.numeroDaConta = numeroDaConta
    }
}

class contaSalario extends Conta {
    depositar(valor:number){
        this.saldo +=valor
    }
}

interface Itransacional{
    transferir: (valor:number, destinatario: Conta)=> boolean;
    taxaTransferencia : number;
}

class ContaCorrente extends Conta implements Itransacional {
    transferir(valor: number, destinatario: Conta) {
        destinatario.saldo += (valor - this.taxaTransferencia);
        return true;
    };
    taxaTransferencia: number = 0;

}