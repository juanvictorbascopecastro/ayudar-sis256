function pagina() {
    fetch('paginas/datos.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById("contenido").innerHTML = data;
    })
    .catch(error => console.log(error));
}
function pagina2() {
    var ajax=new XMLHttpRequest();
    ajax.onreadystatechange=function(){
        if(ajax.readyState==4){
            document.getElementById("contenido").innerHTML=ajax.responseText;
        }
    }
    ajax.open("GET",'paginas/pagina2.html',true);
    ajax.send();
}

    //  parrafos[i].style.display = "block";
    // parrafos[i].style.display = "none";

function enviar() {
    const form = document.getElementById('form-msg');
    console.log(form.nombre.value)
}