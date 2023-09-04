// Define Routing Rules
import {createRouter, createWebHistory} from "vue-router"
import HomeView from "../View/HomeView.vue"
import AboutView from "../View/AboutView.vue"
import CarView from "../View/CarView.vue"
import ContactView from "../View/ContactView.vue" 
import notView from "../View/404View.vue"


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/home",
            redirect: "/"
        },
        {
            path: "/about",
            name: "about",
            component: AboutView
        },
        {
            path: "/cars/:id",
            name: "car",
            component: CarView,
            children: [
                {
                    path: "contact",
                    component: ContactView
                }
            ]
        },
        {
            path: "/:catchall(.*)*", //regexp expression watch documentation
            name: "Not Found",
            component: notView
        }
    ]
})

export default router