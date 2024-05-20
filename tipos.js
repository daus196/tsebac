"use strict";
const alunos = [
    {
        nome: 'Carlos',
        cursos: ["front-end", "ux/ui"],
        idade: 27,
    },
    {
        nome: 'ana',
        cursos: ['front-end', 'pyton'],
        idade: 25,
    },
];
alunos.push({
    nome: 'julia',
    cursos: ["engenharia"],
    idade: 21
});
const novoAluno = {
    nome: 'licas',
    idade: 32,
};
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
