<?php
require_once '../config.php';

global $conn;
$sql = "SELECT * FROM categories";
$result = mysqli_query($conn, $sql);
$categories = [];
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        $categories[] = $row;
    }
}
$reponse = array("status" => 200, "data" => $categories);
echo json_encode($reponse);
