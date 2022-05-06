// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mysql = require('mysql')

export default function handler(req: any, res: any) {

  type Data = {
    name: string
  }

  const connection = mysql.createConnection(process.env.DATABASE_URL)

  connection.connect(function (err: any) {
    if (err) throw err
        const {query, method} = req
        const searchTags = query.id
          .split(' ')
          .map((item: string) => `"%${item}%" or tags like `)
          .join('')
          .slice(0, -13)

    connection.query(
      `SELECT * FROM links WHERE tags like ${searchTags}`,
      function (err: any, result: any, fields: any) {
        console.log('search results:', searchTags) 
        if (err) throw err
        console.log(result)
        res.status(200).json(result)
      }
    )
  })

  // connection.end();
}
/* 
  select * from links where tags like '%svg%' or tags like '%css%';

  Optimize code for routing when going to [id].tsx page
*/