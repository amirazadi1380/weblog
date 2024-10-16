<?php
require_once '../config.php';

function createBlog($title, $content, $image, $category_id, $user_id)
{
    global $conn;
    $sql = "INSERT INTO blogs (title,content,image,category_id,user_id) VALUES ('$title','$content','$image','$category_id',$user_id)";
    $result = mysqli_query($conn, $sql);
    if ($result) {
        $reponse = array("status" => 200, "message" => "blog created succesfully");
        echo json_encode($reponse);
    } else {
        $reponse = array("status" => 400, "message" => "blog not created...");
        echo json_encode($reponse);
    }
}

function verifyBlog($status,$id)
{
    global $conn;
    $sql = "UPDATE blogs SET status = $status WHERE id = $id ";
    $result = mysqli_query($conn, $sql);
    if ($result) {
        $reponse = array("status" => 200, "message" => "blog updated succesfully");
        echo json_encode($reponse);
    } else {
        $reponse = array("status" => 400, "message" => "blog not updated...");
        echo json_encode($reponse);
    }
}
