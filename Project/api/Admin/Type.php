<?php
    include("../Connection.php");

    if($_SERVER['REQUEST_METHOD']=="POST")
    {
        $type = $_POST["type"];
        
           
        $insQry = "insert into tbl_type(type_name)values('".$type."')";
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
        $selQry = "select * from tbl_type";
        $result = $Conn->query($selQry);
        $rows = array();
        while($r = $result->fetch_assoc()) {
            $rows[] = $r;
            }
            print json_encode($rows);

    
    
        }

        if($_SERVER['REQUEST_METHOD']=="DELETE")
        { 
            $delQry = "delete  from tbl_type where type_id='".$_GET["delid"]."'";
            if($Conn->query($delQry))
            {
                echo "delete";
            }
            else{
                echo "Failed";
            } 
    
        
        }

?>