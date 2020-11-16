
const routes = [
  {
    path: '',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        component: () => import('pages/pokedexList/components/List.vue'),
        name: 'pokemon-list'
      },
      {
        path: '/:id',
        component: () => import('pages/pokedexList/components/index.vue'),
        name: 'pokemon-details'
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
