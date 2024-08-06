function contar(){
    var res = document.getElementById("res")
    var n1 = document.getElementById("inicio") 
    var n2 = document.getElementById("fim")
    var n3 = document.getElementById("passo")
    n1txt = Number(n1.value)
    n2txt = Number(n2.value)
    n3txt = Number(n3.value)
    if(Number(n1.value.length) == 0 || Number(n2.value.length) == 0 || Number(n3.value.length) == 0 ){
        window.alert('Existem campos que não foram preenchidos')
    }else {
            if (n1txt < n2txt){
                for(let c = n1txt; c <= n2txt; c+= n3txt){
                    res.innerHTML = res.innerHTML + c + `\u{1F449}`
                }
                res.innerHTML = res.innerHTML + `\u{1F389}`
            }else{
                for(let c = n1txt; c >= n2txt; c -= n3txt){
                    res.innerHTML = res.innerHTML + c + `\u{1F449}`
                }
                    res.innerHTML = res.innerHTML + `\u{1F389}`
            }
        }       
}

        