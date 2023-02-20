const mysql = require('mysql')

export default function handler(req: any, res: any) {
  type Data = {
    name: string
  }

  const connection = mysql.createConnection(process.env.DATABASE_URL)

  connection.connect(function (err: any) {
    if (err) throw err
    const { query, method } = req
    const values = query.id.split(' ')
    const tagsLength = values.length
    const searchTags =
      tagsLength <= 1
        ? values.map((tag: string) => `"%${tag}%"`).join('')
        : values
          .map((item: string, index: number) => {
            if (index === 0) {
              return `"%${item}%" or `
            }
            if (index === values.length - 1) {
              return `tags like "%${item}%"`
            }
            return `tags like "%${item}%" or `
          })
          .join('')

    connection.query(
      `SELECT * FROM links WHERE tags like ${searchTags}`,
      function (err: any, result: any, fields: any) {
        // console.log('search results:', searchTags)
        if (err) throw err
        res.status(200).json(result)
      }
    )
  })

  // connection.end();
}