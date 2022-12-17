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
function setTitulo(text) {
    document.getElementById('titulo').innerHTML = text
}
