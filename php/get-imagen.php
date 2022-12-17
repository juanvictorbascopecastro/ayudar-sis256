<?php
if(!empty($_GET['nombre_img'])) {
    $nombre = $_GET['nombre_img'];
} else {
    $nombre = 'bigdata.jpg'; // imagen por defecto
}
$img = file_get_contents("../images/".$nombre);
$imagen = imagecreatefromstring($img);
header("Content-Type: image/png");
imagepng($imagen);
?>