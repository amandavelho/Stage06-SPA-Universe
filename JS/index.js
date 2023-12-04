import { Router } from "./router.js"

const router = new Router()


router.add("/about", "/pages/about.html")
router.add("/exploration", "/pages/exploration.html")
router.add("/home", "/pages/home.html")


router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()