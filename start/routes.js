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

// Auth
Route.post("/register", "AuthController.register")
Route.post("/login", "AuthController.login")

Route.get("/products/:page/:limit", "ProductController.index")

Route.get("/products/:id", "ProductController.show")

Route.post("/products/:id", "ProductController.update")

Route.post("/get/products/brand", "ProductController.get_product_by_brand")
Route.post("/best_seller", "ProductController.best_seller")
Route.get("/promotions", "PromotionController.index")
Route.get("/categories", "ProductController.categories")
Route.post("/submit_sticker", "StickerDesignController.store")
Route.get("/claim/product/:page/:limit", "ClaimProductController.index")
Route.post("/claim/product", "ClaimProductController.store")
Route.post("/order/product", "ProductOrderController.store")
Route.get("/order/product/:page/:limit", "ProductOrderController.index")