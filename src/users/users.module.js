import { UsersRepository } from './user.repository.js'
import { UsersListener } from './users.listener.js'
import { UsersRouter } from './users.router.js'
import { UsersService } from './users.service.js'

export const UsersModule = ({ events, database }) => {
  const repository = UsersRepository({ database })
  const service = UsersService({ events, repository })
  return {
    routers: [UsersRouter({ service })],
    listeners: [UsersListener({ events, usersRepository: repository })],
    services: [service]
  }
}
