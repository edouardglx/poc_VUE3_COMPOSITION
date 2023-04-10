import BeerPage from '../src/views/BeerPage.vue'
import BeerDetailsPage from '../src/views/BeerDetailsPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const urlenv = '/poc_VUE3_COMPOSITION/'

const router = createRouter({
  history: createWebHistory(urlenv),
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
