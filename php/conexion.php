<?php
$con = new mysqli("localhost","root","","parcial_2");
if($con->connect_error)
{
    die("Conexion fallida ".$con->connect_error);

}
?>