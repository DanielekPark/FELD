const { Client } = require("pg");

const client = new Client(process.env.DATABASE_URL);

export default async function handler (req: any, res: any) {
  await client.connect();
  try {
    const results = await client.query(`SELECT name, link, details from links where tags like '%toggle%'`);
    res.status(200).json(results)
    console.log(results)
  } catch (err) {
    console.error("error executing query:", err);
  } finally{
    await client.end() 
  }
  
}