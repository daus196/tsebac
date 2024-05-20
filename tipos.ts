type aluno = {
    nome:string;
    cursos?:string[];
    idade:number;
}

const alunos: aluno[] = [
    {
        nome:'Carlos',
        cursos:["front-end", "ux/ui"],
        idade:27,
    },
    {
        nome:'ana',
        cursos:['front-end', 'pyton'],
        idade:25,
    },
]

alunos.push({
    nome:'julia',
    cursos:["engenharia"],
    idade:21
})

const novoAluno: aluno ={
    nome:'licas',
    idade:32,
}

function exibeAluno(aluno:aluno){
    console.log(aluno.nome)
}