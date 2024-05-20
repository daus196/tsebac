
function calculaArea(base:number, altura:number):number{
    return base * altura
}

const calculaArea2 = (base:number, altura:number): number => base * altura

function somar(...numeros: number[]): void{
    // numeros.reduce()
}

namespace casting{
    let idade : any =25;
    (idade as number).toFixed();
    (idade as string).length;
    
}