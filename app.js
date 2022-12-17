function pregunta2(text) {
    document.getElementById('contenido').innerHTML = 'modo blanco y negro'
    document.getElementById('titulo').style.setProperty('background-color', 'var(--gray-contenido)');
    document.getElementById('titulo').style.setProperty('border', '2px solid var(--gray-border)');
    document.getElementById('resultado').style.setProperty('background-color', 'var(--gray-contenido)');
    document.getElementById('resultado').style.setProperty('border', '2px solid var(--gray-border)');
    document.getElementById('menu').style.setProperty('border', '2px solid var(--gray-border)')
    document.getElementById('mensaje').style.setProperty('border', '2px solid var(--gray-border)')
    document.getElementById('mensaje').style.setProperty('background-color', 'var(--gray-contenido)');
    setTitulo(text)
}
// colocamos el titulo
function setTitulo(text) {
    document.getElementById('titulo').innerHTML = text
}
// cambiamos de pagina
function cambiarPagina(pagina, titulo) {
    setTitulo(titulo)
    var ajax=new XMLHttpRequest();
    ajax.onreadystatechange=function(){
        if(ajax.readyState==4){
            document.getElementById("contenido").innerHTML=ajax.responseText;
            // verificamos que pagina se va cargar 
            switch(pagina) {
                case 'lista.html': 
                listar();
                break
            }
        }
    }
    ajax.open("GET",`paginas/${pagina}`,true);
    ajax.send();
}

// insertar un libro 
function insertarLibro() {
    const form = document.getElementById('form-libro')
    if(!form.titulo.value) {
        alert('Titulo del libro es requerido')
        return
    }
    if(!form.autor.value) {
        alert('Autor del libro es requerido!')
        return
    }
    if( document.getElementById("archivo").files.length <= 0) {
        alert('La imagen es requerida!')
        return 
    }
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function(){
        if(ajax.readyState == 4){
            document.getElementById('resultado').innerHTML = ajax.responseText
        }
    }
    ajax.open("POST", "php/insertar.php", false);
    ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
     
    var formDatos = new FormData(form);
    // formDatos.append('titulo', form.titulo.value)
    // formDatos.append('autor', form.autor.value)
    // formDatos.append('anio', form.anio.value)
    // formDatos.append('imagen', document.getElementById("archivo").files[0])
    console.log(formDatos)
    ajax.send(formDatos);
}
// pregunta 4
function listar() {
    fetch('php/listar.php')
    .then(response => response.text())
    .then(data => {
        data = JSON.parse(data);
        if(data.length > 0){
            let html = '';
            for(let i = 0; i < data.length; i++){
                html = html + `<div class="lista-imagenes">
                <img src="php/get-imagen.php?nombre_img=${data[i].imagen}">
                <p>${data[i].titulo}</p>
                </div>`;
            }
            document.getElementById("contenido").innerHTML = html;
        }else{
            document.getElementById("resultados-busqueda").innerHTML = 'No se encontro resultados';
        }
    });   
}
// pregunta 5
function introducirN(){

}

function introducirN() {
    const numero = document.getElementById('numero').value
    fetch('paginas/introducir.php?numero='+numero)
    .then(response => response.text())
    .then(data => document.getElementById("contenido").innerHTML = data)
    .catch(error => console.log(error));
}

function calcularSuma(){
    let suma = 0;
    const inputs = document.getElementsByTagName('input');
    document.getElementById('mensaje').innerHTML = ''
    document.getElementById('resultado').innerHTML = ''
    for (var i = 0; i < inputs.length; i++) { 
        if(!inputs[i].value) {
            document.getElementById('mensaje').innerHTML = '<b class="error">Hay Campos Vacios!<b>';
            return
        }
        suma += parseFloat(inputs[i].value)
    }
    document.getElementById('resultado').innerHTML = '<b>La suma es: ' + suma + '</b>'
}