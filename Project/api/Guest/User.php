<?php

include("../Connection.php");

    if($_SERVER['REQUEST_METHOD']=="POST")
    {
        $User = $_POST["name"];
        $Place = $_POST["place"];
        $User_contact = $_POST["phone"];
        $User_address = $_POST["address"];
        $User_email = $_POST["email"];
        $User_password = $_POST["password"];

        $photo = $_FILES["photo"]["name"];
        $temp = $_FILES["photo"]["tmp_name"];
        move_uploaded_file($temp,"../Assets/UserPhoto/".$photo);
        
        $proof= $_FILES["proof"]["name"];
        $temp1 = $_FILES["proof"]["tmp_name"];
        move_uploaded_file($temp1,"../Assets/UserProof/".$proof);

        $insQry = "insert into tbl_user(user_photo,user_proof,user_name,user_contact,user_address,place_id,user_email,user_password,user_doj)values('".$photo."','".$proof."','".$User."','".$User_contact."','".$User_address."','".$Place."','".$User_email."','".$User_password."',curdate())";
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
        $selQry = "select * from tbl_user u inner join tbl_place p on p.place_id=u.place_id inner join tbl_district d on p.district_id=d.district_id";
        $result = $Conn->query($selQry);
        $rows = array();
        while($r = $result->fetch_assoc()) {
            $rows[] = $r;
            }
            print json_encode($rows);

    
    
        }
    ?>