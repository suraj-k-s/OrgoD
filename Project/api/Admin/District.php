<?php
    include("../Connection.php");

    if($_SERVER['REQUEST_METHOD']=="POST")
    {
        $District = $_POST["district"];
        
           
        $insQry = "insert into tbl_district(district_name)values('".$District."')";
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
        $selQry = "select * from tbl_district";
        $result = $Conn->query($selQry);
        $rows = array();
        while($r = $result->fetch_assoc()) {
            $rows[] = $r;
            }
            print json_encode($rows);

    
    
        }

        if($_SERVER['REQUEST_METHOD']=="DELETE")
        { 
            $delQry = "delete  from tbl_district where district_id='".$_GET["delid"]."'";
            if($Conn->query($delQry))
            {
                echo "delete";
            }
            else{
                echo "Failed";
            } 
    
        
        }

?>