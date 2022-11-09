const sql = require('mssql/msnodesqlv8');
// database configuration
var config = {
  user: 'DESKTOP-A82BKRD\Harini',
  database: 'currencies',
  server:'DESKTOP-A82BKRD\SQLEXPRESS',
  driver: 'msnodesqlv8',
  options:{
    trustedConnection: true
  }
};

// Connect to database
sql.ConnectionError(config, function(err){
  if(err){
    console.log(err);
  }

  //create the request object
  var request = new sql.Request();

  //Database query
  // request.query('select * from currencies.dbo.Exchange_Rate_Report_2022', function(err, recordSet){
  //   if(err){
  //     console.log(err)
  //   }else{
  //     console.log(recordSet)
  //   }
  // })

  var queryString1 = 'SELECT * FROM currencies where MONTH(Date) > {$From-month} AND MONTH(Date) <= {$To-month} ';
  var queryString2 = 'SELECT * FROM currencies where YEAR(Date) > {$From-Year} AND MONTH(Date) <= {$To-Year} ';

// Fetching data from database
app.get('/', function(req, res) {
  connection.query(queryString1, function(err, rows, fields) {
    if(err) throw err;
    formatData(rows);
    res.send(jsonArray);
    //console.log(jsonArray);
  });
});

function formatData(dataArray) {
  for(var i = 0; i < dataArray.length; i++) {
    country[i] = dataArray[i].name;
    population[i] = dataArray[i].population;
    gdp[i] = dataArray[i].GDP;
  }
  jsonArray = [country, population, gdp];
  console.log("in FormatData()...\n");
  console.log(jsonArray);
}

app.listen(3000, function() {
  console.log("Server listening on port 3000");
});

  

})