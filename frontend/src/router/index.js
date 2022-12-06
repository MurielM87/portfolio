import { createRouter, createWebHistory } from 'vue-router';
import MyPresentation from '@/views/MyPresentation.vue';
import OCProjets from '@/views/OCProjets.vue';
import PersonalProjets from '@/views/PersonalProjets.vue'


const routes = [
    {
        name: 'Mypresentation',
        path: '/',
        component: MyPresentation,
    },
    {
        name: 'OCProjets',
        path: '/projetsopenclassroom',
        component: OCProjets,
    },
    {
        name: 'PersonalProjets', 
        path: '/projetspersonnels',
        component: PersonalProjets,
    }
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;