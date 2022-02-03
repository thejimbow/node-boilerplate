export const CarsService = ({ repository }) => ({
  createCar (car) {
    repository.create(car)
  }
})
