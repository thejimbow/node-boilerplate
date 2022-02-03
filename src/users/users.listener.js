import { UsersEvents } from './users.events.js'

export const UsersListener = ({ events, usersRepository }) => {
  events.on(UsersEvents.Created, ({ url }) => {
    usersRepository.createUser()
  })
}