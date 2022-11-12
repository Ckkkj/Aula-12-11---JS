let nota1=Number(prompt("Digite a nota 1"));
let nota2=Number(prompt("Digite a nota 2"));
let nota3=Number(prompt("Digite a nota 3"));
let nota4=Number(prompt("Digite a nota 4"));
let nota5=Number(prompt("Digite a nota 5"));

total=(nota1+nota2+nota3+nota4+nota5);
media=total/4;

console.log(typeof media);
console.log(total);

if (media >= 70)
    console.log("aprovado" )
    else if (media < 70)
    console.log("reprovado");