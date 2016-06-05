
var notFound = Vue.extend({
   template: '<h1>Not Found</h1>' +
   '<router-view></router-view>'
})

var workComponent = Vue.extend({
    template: 
            '<h1>Work</h1>' +
            '<router-view></router-view>'
})

var blogComponent = Vue.extend({
   template: 
            '<h1>Blog</h1>' +
            '<router-view></router-view>'
})

var aboutComponent = Vue.extend({
   template: 
            '<h1> aboutComponent </h1>' +
            '<a v-link="{ path: \'/subroute\' }" class="btn btn-lg btn-primary" role="button">View SubRoute</a>' +
            '<router-view></router-view>'
})

var contactComponent = Vue.extend({
   template: 
            '<h1> 联系 </h1>' +
            '<router-view></router-view>'
})



var detail = Vue.extend({
   template: 
               '<h1>Navbar example</h1>' +
               '<p>This example is a quick exercise to illustrate how the default, static and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.</p>' +
               '<p>To see the difference between static and fixed top navbars, just scroll.</p>'
})




Vue.use(VueRouter)

var router = new VueRouter({
   history: false,
   hashbang:true,
   root: '/'
})

router.map({
   '*': {
      component: notFound
   },

   '/': {
      component: workComponent,
      
      subRoutes: {
      '/detail': {
           component: detail
         }
      }
   },

   '/work': {
      component: workComponent,
      
      subRoutes: {
      '/detail': {
           component: detail
         }
      }
   },

   '/blog': {
      component: blogComponent,
      
      subRoutes: {
      '/detail': {
           component: detail
         }
      }
   },

   '/about': {
      component: aboutComponent,
      subRoutes: {
      '/detail': {
           component: detail
         }
      }
   },

   '/contact': {
      component: contactComponent
   },


  '/detail/:itemName': {
    name: 'detail', // 给这条路径加上一个名字
    component: detail
  }






});

var App = Vue.extend()

router.start(App, 'body')