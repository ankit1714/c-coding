<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Methods: GET,POST,PUT,PATCH,DELETE');
header('Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-With');
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
  header('HTTP/1.1 200 OK');
  exit();
}

$data = json_decode(file_get_contents("php://input"));
$first_name = $data->first_name;
$last_name = $data->last_name;
$email = $data->email;
$password = $data->password;
$address = "Allahabad";

$con = mysqli_connect("localhost","root","root");
mysqli_select_db($con,"cake_factory_db");

$result = mysqli_query($con, "SELECT * FROM user_login_db where email='".$email."'");

$nums = mysqli_num_rows($result);

if($nums==0) {
    $sql = "INSERT INTO user_login_db ".
        "(first_name,last_name, email, password,address) ".
        "VALUES ( '$first_name', '$last_name','$email','$password', '$address')";

    $result = mysqli_query($con,$sql);

    if($result) {
        $response['data']=array(
            'status'=>'valid'
        );
        echo json_encode($response);
    } else {
        $response['data']=array(
            'status'=>'invalid'
        );
        echo json_encode($response);
    }
} else {
    $response['data']=array(
        'status'=>202
    );
    echo json_encode($response);
}

?>
