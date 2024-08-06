function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){ //length é o comprimento da string
        window.alert('Verifique os dados e tente novamente')
    } else{
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img') 
       img.setAttribute('id', 'foto')
       img.style.display = 'block'
       img.style.margin = '0 auto'
       if(fsex[0].checked){
            genero = 'Homem'
            if (idade>=0 && idade < 10){
                //criança
                img.setAttribute('src','homem3.jpg')
                img.style.height = '150px';
                img.style.width = '150px';
                img.style.margin = 'auto';
                img.style.marginTop= '3%';
            }else if(idade <= 45){
                //Jovem
                img.setAttribute('src','imagem1.jpg')
                img.style.height = '150px';
                img.style.width = '150px';
                img.style.margin = 'auto';
                img.style.marginTop= '3%';
            }else if(idade > 45){
                //idoso
                img.setAttribute('src','imagem2.jpg')
                img.style.height = '150px';
                img.style.width = '150px';
                img.style.margin = 'auto';
                img.style.marginTop= '3%';
            }

       }else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade>=0 && idade < 10){
                //criança
                img.setAttribute('src','imagem3.jpg')
                img.style.height = '150px';
                img.style.width = '150px';
                img.style.margin = 'auto';
                img.style.marginTop= '3%';
            }else if(idade <= 45){
                //Jovem
                img.setAttribute('src','mulher1.jpg')
                img.style.height = '150px';
                img.style.width = '150px';
                img.style.margin = 'auto';
                img.style.marginTop= '3%';
            }else if(idade > 45){
                //idoso
                img.setAttribute('src','mulher2.jpg')
                img.style.height = '150px';
                img.style.width = '150px';
                img.style.margin = 'auto';
                img.style.marginTop= '3%';
            }
       }
       res.innerHTML = `Sua idade é ${idade} e você é ${genero}`
       // appendChild é usado para elementos do tipo Node
       res.appendChild(img)
    }

}