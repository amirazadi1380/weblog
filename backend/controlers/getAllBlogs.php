<?php
require_once '../config.php';

global $conn;
$sql = "SELECT * FROM blogs";
$result = mysqli_query($conn, $sql);
$blogs = [];
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        $blogs[] = $row;
    }
}
$reponse = array("status" => 200, "data" => $blogs);
echo json_encode($reponse);
