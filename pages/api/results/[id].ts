const { Client } = require("pg");

export default async function handler (req: any, res: any) {
  const client = new Client(process.env.DATABASE_URL);
  try {
    const {query} = req
    const values = query.id.split(' ')
    const tagsLength = values.length
    const searchTags =
      tagsLength <= 1
        ? values.map((tag: string) => `'%${tag}%'`).join('')
        : values
          .map((item: string, index: number) => {
            if (index === 0) {
              return `'%${item}%' or `
            }
            if (index === values.length - 1) {
              return `tags like '%${item}%'`
            }
            return `tags like '%${item}%' or `
          })
          .join('')   
    await client.connect();
    const results = await client.query(`SELECT name, link, details, id from links where tags like ${searchTags}`);
    res.status(200).json(results.rows)
  } catch (err) {
    console.log("error executing query:", err);
  } finally{
    await client.end() 
  }
  
}