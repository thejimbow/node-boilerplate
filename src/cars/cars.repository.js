import { BaseRepository } from '../app/app.repository.js';

export const CarsRepository = ({ database }) => ({
  ...BaseRepository({ database, sourceName: 'cars' })
})