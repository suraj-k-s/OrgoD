<?php
include("../Connection.php");


if($_SERVER['REQUEST_METHOD']=="POST")
    { 
        
        $Email=$_POST["email"];
        $Password=$_POST["password"];

        $request_body = file_get_contents('php://input');

        $data = json_decode($request_body);


        $selQryA = "select * from tbl_admin where admin_email='".$Email."' and admin_password='".$Password."'";
        $resultA = $Conn->query($selQryA);
        $rowsA = array();


        $selQryH = "select * from tbl_hospital where hospital_email='".$Email."' and hospital_password='".$Password."'";
        $resultH = $Conn->query($selQryH);
        $rowsH = array();


        $selQryU = "select * from tbl_user where user_email='".$Email."' and user_password='".$Password."'";
        $resultU = $Conn->query($selQryU);
        $rowsU = array();

        
        if($rA = $resultA->fetch_assoc()) 
        {
            $rowsA[] = $rA;
            $rowsA[1] = "Admin"; 
            print json_encode($rowsA); 
        }
        else if($rH = $resultH->fetch_assoc()) 
        {   
            $rowsH[] = $rH;
            $rowsH[1] = "Hospital"; 
            print json_encode($rowsH); 
        }
        else if($rU = $resultU->fetch_assoc()) 
        {
            $rowsU[] = $rU;
            $rowsU[1] = "User"; 
            print json_encode($rowsU); 
        }   
            
    
    }

        ?>