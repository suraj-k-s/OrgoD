

<?php
include("Connection.php");



 if($_SERVER['REQUEST_METHOD']=="GET")
 { 

    $uid = $_GET["uid"];
    $hid = $_GET["hid"];
    $aid = $_GET["aid"];

    if($uid!="")
    {
        $selQry2= "select * from tbl_receiver r inner join tbl_donor d1 on d1.blood_id=r.blood_id inner join tbl_donor d2  on d2.organ_id=r.organ_id where r.user_id='".$uid."'";
        $result2 = $Conn->query($selQry2);
        echo $selQry2;
        $rows2 = array();
        while($r2 = $result2->fetch_assoc()) {
            $rows2[] = $r2;
            }
            print json_encode($rows2);
        
    }
    else if($hid!="")
    {
        $selQry3 = "select * from tbl_receiver r inner join tbl_donor d1 on d1.blood_id=r.blood_id inner join tbl_donor d2  on d2.organ_id=r.organ_id where r.hospital_id='".$hid."'";
     $result3 = $Conn->query($selQry3);
     $rows3 = array();
     while($r3 = $result3->fetch_assoc()) {
         $rows3[] = $r3;
         }
         print json_encode($rows3);
     
    }
    else if($aid!="")
    {
        $selQry1 = "select * from tbl_receiver r inner join tbl_donor d1 on d1.blood_id=r.blood_id inner join tbl_donor d2  on d2.organ_id=r.organ_id";
     $result1 = $Conn->query($selQry1);
     $rows1 = array();
     while($r1 = $result1->fetch_assoc()) {
         $rows1[] = $r1;
         }
         print json_encode($rows1);
     
    }


}
     
 ?>