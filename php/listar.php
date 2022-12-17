<?php
include('conexion.php'); 
$sql = "SELECT * FROM libros";
$consulta = mysqli_query($con, $sql);
$respuesta = array();
while ($fila = mysqli_fetch_array($consulta)) {
    $libro = array(
        'id' => $fila['id'],
        'titulo' => $fila['titulo'],
        'anio' => $fila['anio'],
        'imagen' => $fila['imagen'],
        'autor' => $fila['autor'],
    );
    array_push ($respuesta , $libro);
} 
echo json_encode($respuesta, JSON_UNESCAPED_UNICODE);
mysqli_close($con);
?>