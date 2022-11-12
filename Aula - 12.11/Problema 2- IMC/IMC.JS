let idade=18;
let altura=1.87;
let nome="João";
let peso=78;

imc=(peso/(altura*altura));

console.log(imc);
console.log("Me chamo "+nome, "tenho 18 anos", "meu imc é de "+imc);

if (imc < 18.5){
console.log("abaixo do peso, consulte um médico")}
    else if (imc <= 24.9){
    console.log("Você está no peso ideal!")}
        else if (imc <= 29.9){
        console.log("Você está levemente acima do peso, cuidado.")}
        else if (imc <= 34.9){
        console.log("Você está no grau de obesidade I, consulte um médico")}
        else if (imc <= 39.9){
        console.log("Você está no grau de obesidade II, consulte um médico")}
        else if (imc >= 40)
        console.log("Você está no grau de obesidade III, consulte um médico")