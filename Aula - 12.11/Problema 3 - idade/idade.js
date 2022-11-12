const nome="tonico";
let idade=Number(prompt("Digite uma idade"));

if (idade < 6){
    console.log(nome+" é um bebê")
}
else if (idade < 11){
    console.log(nome+" é uma criança")}
    else if (idade < 16){
        console.log(nome+" é um pré-aborrecente")}
        else if (idade < 19){
            console.log(nome+" é um adolescente")}
            else if (idade < 60){
                console.log(nome+" é um adulto")}
                else if (idade < 90){
                    console.log(nome+" é um idoso")}
                else{
                    console.log(nome+" é um ser divino, um fóssil")}
