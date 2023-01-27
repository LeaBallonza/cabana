<?php
/**
 * @version 1.0
 */

require("class.phpmailer.php");
require("class.smtp.php");

// Valores enviados desde el formulario
if ( !isset($_POST["nombre"]) || !isset($_POST["email"]) || !isset($_POST["mensaje"]) ) {
    die ("Es necesario completar todos los datos del formulario");
}
$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$email = $_POST["email"];
$mensaje = $_POST["mensaje"];
$cel = $_POST["cel"];
$empresa = $_POST["empresa"];
$direccion = $_POST["direccion"];
$fecha = $_POST["fecha"];
$invitados = $_POST["invitados"];

// Datos de la cuenta de correo utilizada para enviar vía SMTP
$smtpHost = "l0010321.ferozo.com";  // Dominio alternativo brindado en el email de alta 
$smtpUsuario = "contacto@cabanadelosgranados.com.ar";  // Mi cuenta de correo
$smtpClave = "H1HL*a@8uG";  // Mi contraseña

// Email donde se enviaran los datos cargados en el formulario de contacto
$emailDestino = "leaballonza@gmail.com";
$emailDestino1 = "leacabj23@gmail.com";

$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->Port = 465; 
$mail->SMTPSecure = 'ssl';
$mail->IsHTML(true); 
$mail->CharSet = "utf-8";


// VALORES A MODIFICAR //
$mail->Host = $smtpHost; 
$mail->Username = $smtpUsuario; 
$mail->Password = $smtpClave;

$mail->From = $email; // Email desde donde envío el correo.
$mail->FromName =" {$nombre} \n\n {$apellido}";
$mail->AddAddress($emailDestino); // Esta es la dirección a donde enviamos los datos del formulario
$mail->AddAddress($emailDestino1); 

$mail->Subject = "Cabaña de los Granados - Consulta Web"; // Este es el titulo del email.
$mensajeHtml = nl2br($mensaje);
$mail->Body = "Mesaje: {$mensajeHtml} <br /> Cel: {$cel} <br /> Empresa: {$empresa} <br />Dirección: {$direccion}<br /> Fecha: {$fecha} <br /> Cantidad de invitados: {$invitados}<br /><br /> Enviado desde formulario de web Cabaña de los Granados."; // Texto del email en formato HTML
$mail->AltBody = "{$mensaje} \n\n Formulario de ejemplo By LB"; // Texto sin formato HTML
// FIN - VALORES A MODIFICAR //

$estadoEnvio = $mail->Send(); 
if($estadoEnvio){
    echo "El correo fue enviado correctamente.";
} else {
    echo "Ocurrió un error inesperado.";
}
