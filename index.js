let herois = [
    {nome: "Gohan", xp: 5000},
    {nome: "Goku", xp: 10000},
    {nome: "Vegeta", xp: 9000},
    {nome: "Goten", xp: 1500},
     {nome: "Trunks", xp: 1500}
];

for (let i = 0; i < herois.length; i++){

    let nome = herois[i].nome;
    let xp = herois[i].xp;
    let nivel = "";

    if (xp <= 1000) {
        nivel = "Ferro";
    } else if (xp <= 2000){ 
        nivel = "Bronze";
    } else if (xp <=5000){
        nivel = "Prata";
    } else if (xp <= 7000){
        nivel = "Ouro";
    } else if (xp <= 8000){
        nivel = "Platina";
    } else if (xp <= 9000){
        nivel = "Ascendente"; 
    } else if (xp <= 10000){
        nivel = "Radiante"; 
    }

    console.log(`O Heroi de nome ${nome} está no nivel de ${nivel}`);
}




