//criar uma variável para armazenas o nome e a quantidade de experiencia(xp)
let nome="maria"
let xp= 1001
let nível=""
//mensagens abaixo
if(xp<=1000){
    nível="Ferro"
} else if(xp<=2000){
    nível="Bronze"
} else if(xp<=5000){
    nível="Prata"
} else if(xp<=7000){
    nível="Ouro"
} else if(xp<=8000){
    nível="Platina"
} else if(xp<=9000){
    nível="Ascendente"
} else if(xp<=10.000){
    nível="Imortal"
} else if(xp<=10.001){
    nível="Radiante"
}
console.log('O herói de nome ${nome} está no nível de ${nível}')

