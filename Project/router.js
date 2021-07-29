import { createRouter, createWebHistory } from 'vue-router';
import CoachList from './pages/coaches/CoachList.vue';
import CoachDetails from './pages/coaches/CoachDetails.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsRecieved from './pages/requests/RequestsRecieved.vue';
import ErrorPage from './pages/ErrorPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: CoachList },
        {
            path: '/coaches/:id', component: CoachDetails, props:true,
            children: [{ path: 'contact', component: ContactCoach }] //coaches/c1/contact
        },
        { path: '/register', component: CoachRegistration },
        {path: '/requests', component: RequestsRecieved},
        {path: '/:notFound(.*)', component: ErrorPage}

    ]
})

export default router;