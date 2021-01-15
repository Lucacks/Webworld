array1 = new Array("../img/bg-1.jpg", "../img/bg-2.jpg", "../img/bg-3.jpg")

function initial(){
    document.getElementById('slideshow').src= array1[0]
    document.form.texto.value = "0"
}

function next(){
    document.form.texto.value = Math.floor (1 + 1 -2 + (document.form.texto.value) * 1 + 1)
    if(document.form.texto.value > 2)
        document.form.texto.value = 0
}

function previous(){
    document.form.texto.value = Math.floor (1 + 1 -2 + (document.form.texto.value) * 1 - 1)
    if(document.form.texto.value < 0)
        document.form.texto.value = 2
}

function regular(){
    document.getElementById('slideshow').src = array1[document.form.texto.value]
    setTimeout("regular()", 1)
}


