var png = ".png"
var jpg = ".jpg"
var HtmlFormat = ".html"




//  WORK

var db = new loki('workDB.json');
var workCol = db.addCollection('workCol');


var workNames = ["x50", "glmg", "ring", "iwatch", "moto", "edge", "i8", "nike", "shave", "house"];
var workWebglFolder = "assets/webgl/";
var workHtmlFolder = "pages/work/";
var workImgFolder = "img/workImg/";

var workImgkUrls = [];
var workHtmlUrls = [];
var workTitles = [];
var workSummary = [];

$.each(workNames, function(index, title) {


    var workWebglUrl = workWebglFolder + title;
    var workHtmlUrl = workHtmlFolder + title + HtmlFormat;
    var workimgkUrl = workImgFolder + title + png;

    var workOBJ = {};
    workOBJ.id = index;
    workOBJ.useClass = title;
    workOBJ.title = title;
    workOBJ.link3d = workWebglUrl;
    workOBJ.link = workHtmlUrl;
    workOBJ.image = workimgkUrl;

    workCol.insert(workOBJ);

    var useClass = "." + title;
    workHtmlUrls.push(workHtmlUrl);
    workImgkUrls.push(workimgkUrl);



    $.ajax({
        url: workHtmlUrl,
        async: false,
        success: function(data) {
            title = $(data).filter('title').text();
            summary = $(data).filter(useClass).text();

            workOBJ.title = title;
            workOBJ.summary = summary;
        }
    });

})

//  BLOG

var db = new loki('blogDB.json');
var blogCol = db.addCollection('blogCol');


var blogNames = ["waveLoader", "playcanvas-introduce", "lokiJS", ];
var blogHtmlFolder = "pages/blog/";
var blogImgFolder = "img/blogImg/";

var blogImgkUrls = [];
var blogHtmlUrls = [];
var blogTitles = [];
var blogSummary = [];



$.each(blogNames, function(index, title) {


    var blogHtmlUrl = blogHtmlFolder + title + HtmlFormat;
    var blogimgkUrl = blogImgFolder + title + jpg;

    var blogOBJ = {};
    blogOBJ.id = index;
    blogOBJ.useClass = title;
    blogOBJ.title = title;
    blogOBJ.link = blogHtmlUrl;
    blogOBJ.image = blogimgkUrl;

    blogCol.insert(blogOBJ);

    var useClass = "." + title;
    blogHtmlUrls.push(blogHtmlUrl);
    blogImgkUrls.push(blogimgkUrl);


    $.ajax({
        url: blogHtmlUrl,
        async: false,
        success: function(data) {
            title = $(data).filter('title').text();
            summary = $(data).find('.summary').text().substring(0,200) + "...";
            blogOBJ.title = title;
            blogOBJ.summary = summary;
        }
    });

})


// db.saveDatabase(function () {
//     console.log("save db")
// });


var workdv = workCol.addDynamicView('workCol_view');
workdv.applyWhere(function customFilter(obj){
    return obj.id  > -1;
});

workdv.applySimpleSort('id')



var blogdv = blogCol.addDynamicView('blogCol_view');

blogdv.applyWhere(function customFilter(obj){

    return obj.id  > -1;

});

blogdv.applySimpleSort('id')





var lookVue = new Vue({
    el: '.pages',
    data: {

        work: workdv.data(),
        blog: blogdv.data()
    },



    computed: {
    },
    created: function() {
    },
    ready: function() {
    },
    destroyed: function() {
    },
    methods: {

        // ImgOpen: function(event) {
        //     var targetImg = $(event.target).parent();
        //     openDetail(targetImg);
        // },

        // onOffInfo: function () {
        //     // var targetImg = $(event.target).parent().parent();
        //     openInfo();
        // }


    }
});


console.log(lookVue.work[0].title)









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




Vue.config.debug = true;

Vue.use(VueRouter)

var router = new VueRouter({
   history: false,
   hashbang:true,
   root: '/'
})






Vue.component('newtemp', {
    template: '#workVUE',
     route: {
       data: function(transition) {
            transition.next({
                // saving the id which is passed in url to $data
                itemName: transition.to.params.itemName
            });
        }
     },
    data: function() {
        return {
            itemName:itemName,
          }
       },
})





router.map({
   // '*': {
   //    component: notFound
   // },

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
    component: Vue.component('newtemp')
  },


   '/admin': {
      component: contactComponent
   },
});





var App = Vue.extend()

router.start(App, 'body')
