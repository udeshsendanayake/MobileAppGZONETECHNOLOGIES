<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');

include('Connecting_DB.php');

//set variable for customer id
$customer_id = $_GET['customer_id'];

//select the orders which are delivered to customer. 
$query = sprintf("select * from orders where customerID='%s' and status='delivered'", $customer_id);

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