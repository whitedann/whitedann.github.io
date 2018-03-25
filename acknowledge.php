
<!DOCTYPE html>
<html>

<?php
if (isset($_POST['send'])){
	$to = 'whitedann@gmail.com'
	$subject = 'message from my website'

	$message = 'Name: ' . $_POST['name'] . "\r\n\r\n";
	$message .= 'Email: ' . $_POST['email'] . "\r\n\r\n";
	$message .= 'Message: ' . $_POST['message'];
	
	$success = mail($to, $subject, $message);
}
?>

<body>
<?php if (isset($success) && $success) { ?>
<h1>Thank You</h1>
<p>Your message has been sent</p>
<?php } else { ?>
<h1>Oops!</h1>
<p>Sorry, there was a problem sending your message</p>
<?php } ?>
</body>


</html>