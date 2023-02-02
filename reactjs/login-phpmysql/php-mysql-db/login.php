<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Credentials', 'true');
header('Access-Control-Allow-Methods: GET,POST,PUT,PATCH,DELETE,OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-With');
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
  header('HTTP/1.1 200 OK');
  exit();
}

$data = json_decode(file_get_contents("php://input"));
$email = $data->email;
$password = $data->password;

$con = mysqli_connect("localhost","root","root");
mysqli_select_db($con,"cake_factory_db");

$result = mysqli_query($con, "SELECT * FROM user_login_db where email='".$email."' AND password='".$password."'");

$nums = mysqli_num_rows($result);
$rs=mysqli_fetch_array($result);

if($nums>=1) {

  $response['data']=array(
    'status'=>200,
    'email'=>$rs["email"],
    'first_name'=>$rs["first_name"],
    'last_name'=>$rs["last_name"]
  );
  echo json_encode($response);
  http_response_code(200);

} else {
    http_response_code(202);
    $response['data']=array(
      'status'=>202
  );
  echo json_encode($response);
}
?>
