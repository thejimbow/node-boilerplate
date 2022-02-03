export const BaseRepository = ({ database, sourceName }) => ({
  create (data) {
    console.log(`Inserted ${data} to [${sourceName}]`)
  }
})
