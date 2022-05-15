<?php
$username = $_POST['username'];
$password = $_POST['pwd'];
$bildiri = "Lütfen bİlgilerinizi Doğru giriniz";
if (isset($_POST['submit'])) {

  if (!empty($username) && !empty($password)) {

    if ($username == 'g211210374@sakarya.edu.tr' && $password == 'g211210374') {
      $bildiri="Hoşgeldiniz";
    } else {
      $bildiri="Lütfen Boşlukları doldurunuz \n
      (10 saniye içinde giriş sayfasına yönlendiriliceksiniz)";
      header("refresh:10;Giris.html");
      
    }
  } else {
     
    $bildiri="Lütfen Boşlukları doldurunuz\n
    (10 saniye içinde giriş sayfasına yönlendiriliceksiniz)";
    header("refresh:10;Giris.html");
    
}
 }
?>

<html>

<head>
  <link rel="stylesheet" href="style.css">
  <title>Giris</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
  <script src="https://code.jquery.com/jquery-1.11.1.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  <script src="https://code.jquery.com/jquery-1.11.1.js"></script>
  <script>
    $(function() {
      $("#DivContent").load("navbar.html");
    });
  </script>

</head>
<div id="DivContent"></div>

<body class="bg-info text-center" >
  <h1><?=$emoji ?></h1>
  <br>
  <h1></h1>
<hr>
 <h1 class="text-danger"> <?=$bildiri?> </h1> 
 <hr>
 </body>
 <html >