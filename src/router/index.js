import { createRouter, createWebHistory } from 'vue-router'
import QuizesView from '../views/QuizesView.vue'
import QuizView from '../views/QuizView.vue'
import NotFoundView from "../views/404View.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: 'quizes',
            component: QuizesView
        },
        {
            path: "/quiz/:id",
            name: 'math',
            component: QuizView
        },
        {
            // regex to catch any undefined path
            path: "/:catchall(.*)*",
            name: "Not Found",
            component: NotFoundView
        }
    ]
})

export default router