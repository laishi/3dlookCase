/**
 * Define your components
 */

// For 404 page
var notFound = Vue.extend({
   // You can use also use template path (Thanks to @jcerdan)
   // path : '/path/to/component.html'
   template: '<h1>Not Found</h1>'
})

// For dashboard. This is our root page
var dashboardComponent = Vue.extend({
    template: 
            '<div class="jumbotron">' + 
            '<h1>Dashboard</h1>' +
            '<p>This is dashboard</p>' +
            '<p>' +
            '<a v-link="{ path: \'/subroute\' }" class="btn btn-lg btn-primary" role="button">View SubRoute</a>' +
            '</p>' +
            '</div>' +
            // To show nested subroute
            '<router-view></router-view>'
})

// About page.
var aboutComponent = Vue.extend({
   template: 
            '<div class="jumbotron">' +
            '<h1>About</h1>' +
            '<p>This is about page</p>' +
            '<p>' +
            '<a v-link="{ path: \'/about/subroute\' }" class="btn btn-lg btn-primary" role="button">View SubRoute</a>' +
            '</p>' +
            '</div>' +
            '<router-view></router-view>'
})

// Our subroute content.
var subRouteContent = Vue.extend({
   template: 
               '<h1>Navbar example</h1>' +
               '<p>This example is a quick exercise to illustrate how the default, static and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.</p>' +
               '<p>To see the difference between static and fixed top navbars, just scroll.</p>'
})

// Contact page content
var contactComponent = Vue.extend({
   template: 
            '<div class="jumbotron">' +
            '<h1>Contact</h1>' +
            '<p>This is contact page</p>' +
            '</div>'
})

// Tell Vue to use view-router
Vue.use(VueRouter)

// Router options
var router = new VueRouter({
   history: false,
   root: '/'
})

// Router map for defining components
router.map({
   // For Not Found template
   '*': {
      component: notFound
   },

   '/': {
      component: dashboardComponent,
      
      // Defining Subroutes
      subRoutes: {
      '/subroute': {
           component: subRouteContent
         }
      }
   },

   '/about': {
      component: aboutComponent,
      subRoutes: {
      '/subroute': {
           component: subRouteContent
         }
      }
   },

   '/contact': {
      component: contactComponent
   }
});

var App = Vue.extend()

router.start(App, '#app')