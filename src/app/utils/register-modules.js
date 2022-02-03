const registerRouters = (mainRouter, moduleRouters) => {
  for (const router of moduleRouters) {
    mainRouter.use(router.routes())
  }
}
export const registerModules = (mainRouter, modules) => {
  for (const module of modules) {
    registerRouters(mainRouter, module.routers)
  }
}
