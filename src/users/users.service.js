import { UsersEvents } from './users.events.js'

export const UsersService = ({ events, repository }) => ({
  addUsersCall (url) {
    events.emit(UsersEvents.Created, { url })
  }
})
