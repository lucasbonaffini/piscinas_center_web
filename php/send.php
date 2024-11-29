<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['name'];
    $email = $_POST['email'];
    $telefono = $_POST['phone'];
    $servicio = $_POST['service'];
    $mensaje = $_POST['message'];
    
    $to = "info@piscinascenter";
    $subject = "Nuevo mensaje del formulario de contacto";
    
    $message = "Nombre: " . $nombre . "\n";
    $message .= "Email: " . $email . "\n";
    $message .= "Teléfono: " . $telefono . "\n";
    $message .= "Servicio: " . $servicio . "\n\n";
    $message .= "Mensaje:\n" . $mensaje;
    
    $headers = "From: " . $email;
    
    mail($to, $subject, $message, $headers);
    
    // Redirigir a una página de confirmación
    header("Location: gracias.html");
}
?>