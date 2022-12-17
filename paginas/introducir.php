<div>
    <?php
    if(!empty($_GET['numero'])) {
        $numero = $_GET['numero']; 
    ?>
        <form>
            <h3>Ingresar <?php echo $numero; ?> numeros</h3>
            <?php for ($i = 1; $i <= $numero; $i++) { ?>
            <p>
                N-<?php echo $i; ?>
            : <input type="number" name="numero-<?php echo $i; ?>" id="numero" />
            </p>
            <?php } ?>
        <p>
            <button type="button" onclick="calcularSuma()">Calcular Suma</button>
        </p>
        </form>
     <?php } else {
        echo 'El numero N es requerido!';
        } ?>
</div>