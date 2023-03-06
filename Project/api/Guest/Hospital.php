<?php

include("../Connection.php");

    if($_SERVER['REQUEST_METHOD']=="POST")
    {
        $hospital = $_POST["name"];
        $Place = $_POST["place"];
        $hospital_contact = $_POST["phone"];
        $hospital_address = $_POST["address"];
        $hospital_email = $_POST["email"];
        $hospital_password = $_POST["password"];

        $photo = $_FILES["photo"]["name"];
        $temp = $_FILES["photo"]["tmp_name"];
        move_uploaded_file($temp,"../Assets/hospitalPhoto/".$photo);
        
        $proof= $_FILES["proof"]["name"];
        $temp1 = $_FILES["proof"]["tmp_name"];
        move_uploaded_file($temp1,"../Assets/hospitalProof/".$proof);

        $insQry = "insert into tbl_hospital(hospital_photo,hospital_proof,hospital_name,hospital_contact,hospital_address,place_id,hospital_email,hospital_password,hospital_doj)values('".$photo."','".$proof."','".$hospital."','".$hospital_contact."','".$hospital_address."','".$Place."','".$hospital_email."','".$hospital_password."',curdate())";
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
        $selQry = "select * from tbl_hospital u inner join tbl_place p on p.place_id=u.place_id inner join tbl_district d on p.district_id=d.district_id";
        $result = $Conn->query($selQry);
        $rows = array();
        while($r = $result->fetch_assoc()) {
            $rows[] = $r;
            }
            print json_encode($rows);

    
    
        }
    ?>