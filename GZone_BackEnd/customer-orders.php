<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');
include('Connecting_DB.php');

$CusID = $_GET['username'];

//Select Data from the orders table in the GZone database for orders with status PENDING of the logged in agent
$query = sprintf("select * from orders where Agent_Id='%s' AND order_for = 'customer' AND (status='pending'OR status= 'dispatched')", $CusID);

$result = $mysqli->query($query) or die($mysqli->error . __LINE__);
$ban = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $ban[] = $row;
    }
}
$json_response = json_encode($ban);
echo $json_response;
?>