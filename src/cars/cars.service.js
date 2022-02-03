export const CarsService = ({ repository }) => ({
  createCar (car) {
    return repository.create(car)
  },
  findAllCars (query) {
    return repository.find(query)
  }
})
