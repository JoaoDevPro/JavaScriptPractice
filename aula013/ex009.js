function carregar(){
    var msg = window.document.getElementById('msg')
    var img  = window.document.getElementById('imagem')   
    var data = new Date()
    var hora = data.getHours()
    msg.innerText = `Agora são ${hora} horas`
    if(hora >=0 && hora<=12){
        //Bom dia
        document.body.style.backgroundColor = 'rgb(120, 209, 179)'
        img.src= '../Imagem1.jpg'
    }else if(hora>12 && hora<18){
        //Boa tarde
        img.src= '../imagem2.jpg'
        document.body.style.backgroundColor = 'rgb(216, 80, 39)'
    }else{
        //Boa noite
        document.body.style.backgroundColor = 'rgb(3, 3, 34)'
        img.src= '../imagem3.jpg'
    }
}