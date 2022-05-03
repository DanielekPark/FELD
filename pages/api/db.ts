const mysql = require('mysql');

export default function handler(req: any, res: any) {
const connection = mysql.createConnection(process.env.DATABASE_URL);
// console.log('Connected to PlanetScale!');

  connection.connect(function(err: any) {
    if (err) throw err;
    connection.query("SELECT * FROM links WHERE id < 15", function (err: any, result: any, fields: any) {
      if (err) throw err;
      // console.log(result);
      res.status(200).json(result)
    });
  });  
 
  // connection.end();
}