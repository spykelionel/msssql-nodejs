const sql = require("mssql/msnodesqlv8");

let config = {
  server: "LIONEL-DELL-WIN",
  database: "testdb",
  driver: "msnodesqlv8",
  options: {
    trustedConnection: true, // Use this for Windows Authentication
  },
};

sql.connect(config, function (err) {
  if (err) {
    return console.error("Connection error:", err);
  }

  console.log("Connected to SQL Server...");

  const request = new sql.Request();

  request.query("SELECT * FROM books", function (err, recordset) {
    if (err) {
      console.error("Query error:", err);
      sql.close();
      return;
    }

    console.dir(recordset.recordset);
    sql.close();
  });
});
