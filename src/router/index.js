import { createRouter, createWebHistory } from 'vue-router'
import QuizesViewVue from '../views/QuizesView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: 'quizes',
            component: QuizesViewVue
        }
    ]
})

export default router