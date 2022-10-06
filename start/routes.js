'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
Route.get("/products/:page/:limit","ProductController.index")
Route.get("/products/:id","ProductController.show")
Route.post("/best_seller","ProductController.best_seller")
Route.get("/promotions","PromotionController.index")
Route.get("/categories","ProductController.categories")