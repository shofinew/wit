<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $country = $_POST['country'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];

    // MySQL Database সংযোগ
    $conn = new mysqli("localhost", "root", "", "your_database");

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // পাসওয়ার্ড যাচাই করা
    if ($password !== $confirm_password) {
        die("Passwords do not match!");
    }

    // পাসওয়ার্ড হ্যাশ করা (নিরাপত্তার জন্য)
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // SQL Query
    $sql = "INSERT INTO users (name, country, phone, email, password) VALUES (?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssss", $name, $country, $phone, $email, $hashed_password);

    if ($stmt->execute()) {
        echo "Signup successful!";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
