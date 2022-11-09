<?php
//Server connection
  $username = "root";
  $password = "";
  $database = "curriencies";

  try {
    $pdo = new PDO("mssql:host=localhost; database = $database", $username, $password);

    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  }catch(PDOException $e){
    die("ERROR: Could not connect...". $e-> getMessage());
  }

  <?php
    try {
      $sql = "select * from curriences.table";
      $result = $pdo->query($sql);

      if($result -> rowCount() > 0){
        while($row = $result->fetch()){
          $dateArray[] = $row["Date"];
          $rateArray[] = $row["country"]
        }
      }
    }


    // $query = mysql_query("select * from curriencies where MONTH(Date) >= '$From-date' and MONTH(Date) <= order by date asc");
    // $i = 0;
    // $Date = array();
    // $rate = array();
    // while($Date = mysql_fetch_array($query)){
    //    //id from result database query
    //    $id[$i] = $data['id'];
    //    //name from result database query
    //    $name[$i] = $data['name'];
    //    $i++;
    // }
?>