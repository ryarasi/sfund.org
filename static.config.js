const path = require('path')

export default {
  getSiteData: () => ({
    title: 'React Static with Netlify CMS',
  }),
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/containers/Home/Home',
      },
      {
        path: '/about',
        component: 'src/containers/About/About',
      },
      {
        path: '/contact',
        component: 'src/containers/Contact/Contact',
      },
      {
        path: '/privacy',
        component: 'src/containers/Privacy/Privacy',
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
}
