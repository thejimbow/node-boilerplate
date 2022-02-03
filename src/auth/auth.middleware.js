export const authMiddleware = (ctx, next) => {
  console.log('auth.mid')
  next()
}