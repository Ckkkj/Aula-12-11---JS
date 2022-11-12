let hora=Number(prompt("Digite a hora"));
const nome="José";

if (hora < 12){
    console.log("Bom dia," +nome)
}
else if (hora < 19){
    console.log("Boa tarde," +nome)
}
else {
    console.log("Boa noite," +nome)
}
