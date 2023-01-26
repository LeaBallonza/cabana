<?php

if (isset($_POST['enviar'])) {
    if(!empty($_POST['name'])  && !empty($_POST['msg']) && !empty($_POST['email'])) {
        $name =  $_POST['name'];
        $lastname =  $_POST['lastname'];
        $empresa = 'Empresa:'. $_POST['empresa'];
        $direccion = 'Dirección:'. $_POST['direccion'];
        $fecha = 'Fecha:'. $_POST['fecha'];
        $cel = 'cel:'. $_POST['cel'];
        $invitados = 'Cantidad de invitados:'. $_POST['invitados'];
        $asunto = 'Cotizar Evento';
        $msg = 'Mensaje:'. $_POST['msg'];
        $email = $_POST['email'];
        $to = 'leaballonza@gmail.com';
        $header = $name ."\n". $lastname. "\r\n";
        $header.=  $email. "\r\n";
        $header.=  $fecha . "\r\n";
        $header.=  $cel . "\r\n";
        $header.=  $empresa . "\r\n";
        $header.=  $direccion . "\r\n";
        $header.=  $invitados;
        $mail = @mail($to,$asunto,$msg,$header);
        if($mail){
            echo "<h4> ¡Mail enviado exitosamente!</h4>";
        }
    }
}