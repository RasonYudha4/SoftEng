<?php
$servername = "localhost";
$username = "root";
$password = "";

$conn = mysqli_connect($servername, $username, $password, 'softeng');
if(!$conn) {
  echo "Database connection failed";
}

if($_SERVER["REQUEST_METHOD"] === "POST") {
  $newuser = $_POST['username'];
  $newPassword = $_POST['userPassword'];
  $newEmail = $_POST['userEmail'];

  $registerQuery = mysqli_prepare($conn, "INSERT INTO users (name, email, password) VALUES (?, ?, ?");
  $registerQuery->bind_param("sss", $newuser, $newEmail, $newPassword);
  $registerQuery->execute();
  mysqli_close($conn);
  header('Location: Home.html');

} elseif ($_SERVER["REQUEST_METHOD"] === "GET") {
  $user = $_GET['username'];
  $password = $_GET['password'];

  if($user and $password !== '') {
    $loginQuery = "SELECT name, password FROM users WHERE name = ? AND password = ?";
    $exist = mysqli_prepare($conn, $loginQuery);
    $exist = bind_param("ss", $user, $password);
    $exist->execute();
    if($exist->num_rows > 0) {
      mysqli_close($conn);
      header('Location: Home.html');
    }
  }
}
?>