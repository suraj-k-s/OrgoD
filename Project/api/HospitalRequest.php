<?php

include("Connection.php");

    if($_SERVER['REQUEST_METHOD']=="POST")
    {
        $name = $_POST["name"];
        $details = $_POST["details"];
        $hospital = $_POST["hospital"];
        $contact = $_POST["contact"];
        $blood = $_POST["blood"];
        $organ = $_POST["organ"];

        $report = $_FILES["report"]["name"];
        $temp = $_FILES["report"]["tmp_name"];
        move_uploaded_file($temp,"Assets/Donate/".$report);
        
        $proof= $_FILES["proof"]["name"];
        $temp1 = $_FILES["proof"]["tmp_name"];
        move_uploaded_file($temp1,"Assets/Donate/".$proof);

        $image= $_FILES["image"]["name"];
        $temp2 = $_FILES["image"]["tmp_name"];
        move_uploaded_file($temp2,"Assets/Donate/".$image);

        $insQry = "insert into tbl_receiver(receiver_name,receiver_details,receiver_healthreport,receiver_proof,blood_id,organ_id,receiver_date,receiver_image,receiver_contact,hospital_id)
        values('".$name."','".$details."','".$report."','".$proof."','".$blood."','".$organ."',curdate(),'".$image."','".$contact."','".$hospital."')";
        //echo $insQry;
        if($Conn->query($insQry))
        {
            echo "true";
        }
        else{
            echo "false";
        } 
    }

    if($_SERVER['REQUEST_METHOD']=="GET")
    { 
        $selQry = "select * from tbl_receiver";
        $result = $Conn->query($selQry);
        $rows = array();
        while($r = $result->fetch_assoc()) {
            $rows[] = $r;
            }
            print json_encode($rows);

    
    
        }
    ?>