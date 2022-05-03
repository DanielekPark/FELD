// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mysql = require('mysql')

export default function handler(req: any, res: any) {
  //const { pid } = req.query

  type Data = {
    name: string
  }

  const connection = mysql.createConnection(process.env.DATABASE_URL)

  connection.connect(function (err: any) {
    if (err) throw err
        const {query, method} = req
        console.log(query, method, 'request')    
    connection.query(
      `SELECT * FROM links WHERE type = '${query.id}'`,
      function (err: any, result: any, fields: any) {

        if (err) throw err
        console.log(result)
        res.status(200).json(result)
      }
    )
  })

  // connection.end();
}