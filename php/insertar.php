<?php
include('conexion.php'); 
if(
    !empty($_POST['titulo']) 
    && !empty($_POST['autor'])
    && !empty($_POST['anio']) 
    && isset($_FILES["imagen"])
    ) {
    $titulo = $_POST['titulo'];
    $autor = $_POST['autor'];
    $anio = $_POST['anio'];
    $ideditorial = 1;
    $idusuario = 0;
    $idcarrera = 1;
    
    $fotografia = $_FILES["imagen"]["tmp_name"];
    copy($fotografia,'../images/'.$_FILES["imagen"]["name"]);
    $nombre_archivo = $_FILES["imagen"]["name"];
    
    $sql = "INSERT INTO libros (titulo, autor, ideditorial, anio, idusuario, idcarrera, imagen) 
    VALUES ('$titulo','$autor',$ideditorial,'$anio',$idusuario,$idcarrera, '$nombre_archivo')";
    if (mysqli_query($con, $sql)) {
        echo "Datos cargado correctamente";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($con);
    }
    mysqli_close($con);
} else {
    echo '<b class="error">No se enviaron los parametros correcto</b>';
}
?>