/*const express = require("express");
const app = express();
app.set("view engine", "hbs");

//var multer = require("multer");
//var upload = multer();

/*const sql = require('mssql')
const sqlConfig = {
  server: 'DESKTOP-3K4K4AR',
  user: 'DESKTOP-3K4K4AR\\a6712',
  database: 'university',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: false // change to true for local dev / self-signed certs
  }
}
sql.on ('error', err => {
  console.log(err.message)
})
async function DBs() {
  try {
   // make sure that any items are correctly URL encoded in the connection string
   let pool = await sql.connect(sqlConfig)
   const result = await pool.request().query`select * from Ведомость`
   console.log(result)
   sql.close();
  } catch (err) {
   // ... error checks
   console.log(err.message)
  }
 }
 DBs()*/
/*var path = require('path')

app.use(express.static(path.join(__dirname, 'public')));


/*app.post("/getdata", upload.fields([]), function (request, response) {
  response.send("ok");
 });*/

/*app.use('/', function (request, response) {
    response.render("login", {
      subs: null
    });
  })*/
  /*app.use('/', function (request, response) {
    response.sendFile(__dirname + '/1.html')
  })
app.listen(3000);*/

const express = require("express");
const app = express();
app.use(express.static("D:\\WТ\\Hakaton\\public\\"));

app.get('/', (req, res) => {
  res.sendFile('D:\\WТ\\Hakaton\\public\\login.html');
})

app.listen(3000, function() {
  console.log("Running on port 3000.");
});