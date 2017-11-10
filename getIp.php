<?php
$data = array(
    'ip' => 'no ip',
    'spoof' => 'no spoof'
);
if(isset($_SERVER['REMOTE_ADDR'])){
    $data['ip'] = $_SERVER['REMOTE_ADDR'];
}
if(isset($_SERVER['HTTP_X_FORWARDED_FOR'])){
    $data['spoof'] =  $_SERVER['HTTP_X_FORWARDED_FOR'];
}

echo json_encode($data);
?>
