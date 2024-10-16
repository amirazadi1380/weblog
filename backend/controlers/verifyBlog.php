<?php
require '../models/blog.php';
$status = $_POST['status'];
$id = $_POST['id'];

verifyBlog($status, $id);
