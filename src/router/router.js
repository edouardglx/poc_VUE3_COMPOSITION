import BeerPage from '../views/BeerPage.vue'

export const routes = [
  {
    path: '/',
    component: BeerPage
  },
  {
    path: '/beer/:id',
    component: () => import('../views/BeerDetailsPage.vue')
  }
]
