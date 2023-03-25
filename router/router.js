import BeerPage from '../src/views/BeerPage.vue'
import BeerDetailsPage from '../src/views/BeerDetailsPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'allBeers',
      component: BeerPage
    },
    {
      path: '/beer/:id',
      name: 'beerDetails',
      component: BeerDetailsPage,
      props: true
    }
    // { name: 'notFound', path: '/:catchAll(.*)', redirect: '/' }
  ]
})

export default router
