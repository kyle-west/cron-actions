// Dragon Router import "Test"
const { Router, Context, DerivedSubpath, RouteHandler, TokenizedPath } = require('dragon-router/dist/dragon-router')
console.log('Imported `dragon-router`')
console.log(Router, Context, DerivedSubpath, RouteHandler, TokenizedPath)
let router = new Router()
console.log(router)
