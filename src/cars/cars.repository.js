import { BaseRepository } from '../app/app.repository.js'

export const CarsRepository = ({ database }) => {
  return {
    ...BaseRepository({ database, sourceName: 'cars' })
  }
}
