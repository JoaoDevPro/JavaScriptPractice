num = [4, 5, 6, 7, 8, 9]
/*for(let c = 0; c<=num.length; c++){
    console.log(num[c])
}*/
num.sort()
for(let c in num){   //Só funciona pra arreys e object
    console.log(`A posição ${c} tem o valor  ${num[c]}`)
}
 // indexOf procura o valo dentro dos parenteses 
 let n1 = num.indexOf(2)
 if(n1 == -1){
    console.log(`Valor não encontrado`)
 }else{
    console.log(n1)
 }