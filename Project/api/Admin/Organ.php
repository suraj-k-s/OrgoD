<?php
    include("../Connection.php");

    if($_SERVER['REQUEST_METHOD']=="POST")
    {
        
        $organ = $_POST["organ"];
        $type = $_POST["type"];
        $insQry = "insert into tbl_organ(organ_name,type_id)values('".$organ."','".$type."')";
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
        $selQry = "select * from tbl_organ";
        $result = $Conn->query($selQry);
        $rows = array();
        while($r = $result->fetch_assoc()) {
            $rows[] = $r;
            }
            print json_encode($rows);

    
    
        }

        if($_SERVER['REQUEST_METHOD']=="PUT")
    { 
        $upQry = "update tbl_organ set organ_name='".$_GET["organ"]."' where organ_id='".$_GET["id"]."'";
        if($Conn->query($upQry))
            {
                echo "Updated";
            }
            else
            {
                echo "Failed";
            }
    
    }

        if($_SERVER['REQUEST_METHOD']=="DELETE")
        { 
            $delQry = "delete  from tbl_organ where type_id='".$_GET["delid"]."'";
            if($Conn->query($delQry))
            {
                echo "delete";
            }
            else{
                echo "Failed";
            } 
    
        
        }
        
    


    




?>