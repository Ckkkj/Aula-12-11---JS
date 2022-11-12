const nome="Tinoco"
let idade=Number(prompt("Digite uma idade"))

if (idade < 18){
    console.log(nome+" é menor de idade")
}

else if(idade >= 60){
    console.log(nome+ " é idoso")
}

else {
    console.log(nome+" é maior de idade")
}