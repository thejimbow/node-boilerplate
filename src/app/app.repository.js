export const BaseRepository = ({ database, sourceName }) => {
  const collection = database.collection(sourceName)
  return {
    create (data) {
      return collection.insertOne(data)
    },
    find (query) {
      return collection.find(query)
    },
    findOne (query) {
      return collection.findOne(query)
    }
  }
}
