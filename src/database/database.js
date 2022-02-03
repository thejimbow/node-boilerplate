import { MongoClient } from 'mongodb'

export const Database = async ({ url, dbName }) => {
  const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  return client.db(dbName)
}
