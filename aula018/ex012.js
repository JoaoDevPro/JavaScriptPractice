function contar(){
    let tab = document.getElementById("seltab")
    var n1 = document.getElementById("inicio") 
    txt = Number(n1.value)
    tab.innerHTML = ''
    tab.style.marginTop = '3%'
    for(let c = 1; c <= 10; c++){
        let item = document.createElement('option')
        txtc = Number(c)
        item.text = `${txt} x ${txtc} = ${txt * txtc}`
        item.value = `tab${c}`
        tab.appendChild(item)
    }
}

        