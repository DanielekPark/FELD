// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mysql = require('mysql')

export default function handler(req: any, res: any) {

  type Data = {
    name: string
  }

  const connection = mysql.createConnection(process.env.DATABASE_URL)

  connection.connect(function (err: any) {
    if (err) throw err
        const {query} = req
        const searchTags: string[] = query.id.split(' ')
        const tagsLength = searchTags.length
        const tags = searchTags.map((tag: string, index: number) => {
          if(index === tagsLength -1){
            return tag
          }
          return `"%${tag}%" or tags like `
        })  
          .join('')
    connection.query(
      `SELECT * FROM links WHERE tags like ${tags}`,
      function (err: any, result: any, fields: any) {
        console.log('search results:', searchTags, tagsLength) 
        if (err) throw err
        console.log(tags)
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