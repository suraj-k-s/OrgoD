<?php
    include("../Connection.php");

    if($_SERVER['REQUEST_METHOD']=="POST")
    {
        $blood = $_POST["blood"];
        
           
        $insQry = "insert into tbl_blood(blood_name)values('".$blood."')";
        if($Conn->query($insQry))
        {
            echo "Inserted";
        }
        else{
            echo "Failed";
        } 
    }


    if($_SERVER['REQUEST_METHOD']=="GET")
    { 
        $selQry = "select * from tbl_blood";
        $result = $Conn->query($selQry);
        $rows = array();
        while($r = $result->fetch_assoc()) {
            $rows[] = $r;
            }
            print json_encode($rows);

    
    
        }

        if($_SERVER['REQUEST_METHOD']=="DELETE")
        { 
            $delQry = "delete  from tbl_blood where blood_id='".$_GET["delid"]."'";
            if($Conn->query($delQry))
            {
                echo "delete";
            }
            else{
                echo "Failed";
            } 
    
        
        }

?>