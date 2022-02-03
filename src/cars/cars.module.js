import { CarsRepository } from './cars.repository.js'
import { CarsRouter } from './cars.router.js'
import { CarsService } from './cars.service.js'

export const CarsModule = ({ events, database }) => {
  const repository = CarsRepository({ database })
  const service = CarsService({ repository })
  return {
    routers: [CarsRouter({ service })],
    services: [service],
    listeners: []
  }
}