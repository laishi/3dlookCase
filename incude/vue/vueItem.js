
var png = ".png"
var jpg = ".jpg"
var HtmlFormat = ".html"


//  WORK
var workNames = [ "webgl", "x50", "rose", "ring", "iwatch", "moto", "edge", "i8", "nike", "shave", "house" ];
var workHtmlFolder = "pages/work/";
var workImgFolder = "img/workimg/";
var workImgkUrls = [];
var workHtmlUrls = [];
var workTitles = [];


$.each(workNames,function (index,title) {

    var workHtmlUrl = workHtmlFolder + title + HtmlFormat;
    var workimgkUrl = workImgFolder + title + png;

    workHtmlUrls.push(workHtmlUrl);
    workImgkUrls.push(workimgkUrl);


    $.ajax({  
          url: workHtmlUrl,  
          async: false,  
          success: function(data){  
            title = $(data).filter('title').text();
            workTitles.push(title);
          }  
    });     

})









//  BLOG
var blogNames = [ "blend4web", "playCanvas", "threeJS", "webglFramework", "pbr" ];
var blogHtmlFolder = "pages/blog/";
var blogImgFolder = "img/blogImg/";

var blogImgkUrls = [];
var blogHtmlUrls = [];
var blogTitles = [];
var blogSummary = [];

$.each(blogNames,function (index,title) {

    var blogHtmlUrl = blogHtmlFolder + title + HtmlFormat;
    var blogimgkUrl = blogImgFolder + title + jpg;

    var useClass = "." + title;

    blogHtmlUrls.push(blogHtmlUrl);
    blogImgkUrls.push(blogimgkUrl);


    $.ajax({  
          url: blogHtmlUrl,  
          async: false,  
          success: function(data){
            title   = $(data).filter('title').text();
            summary = $(data).filter(useClass).text();
            blogTitles.push(title);
            blogSummary.push(summary);

            console.log(summary)
          }
    });     

})









new Vue({
    el: '.pages',
    data: {
        searchString: "",
        selectedCategory: "",
        shoppingCart: [],

        workPageName: [ "webgl", "x50", "rose", "ring", "iwatch", "moto", "edge", "i8", "nike", "shave", "house" ],



        works: [
            {
                "id"    : "0",
                "name"  : workNames[0],
                "title" : workTitles[0],
                "image" : workImgFolder + workNames[0] + ".png",
                "tag"   : "webgl web3d 三维产品展示",
                "info"  : "webgl web3d 三维产品展示",
                "summary"  : blogSummary[0],
                "summary"  : blogSummary[0],
                "url"   : "assets/webgl/" + workNames[0] + "/index.html",
                "date"  : Date.now(),
            },{
                "id"    : "1",
                "name"  : workNames[1],
                "title" : workTitles[1],
                "image" : workImgFolder + workNames[1] + ".png",
                "tag"   : "webgl web3d 三维产品展示",
                "info"  : "x51 webgl 3drender",
                "url"   : "assets/webgl/" + workNames[1] + "/index.html",
                "date"  : Date.now(),
            },{
                "id"    : "2",
                "name"  : workNames[2],
                "title" : workTitles[2],
                "image" : workImgFolder + workNames[2] + ".png",
                "tag"   : "webgl web3d 三维产品展示",
                "info"  : "webgl web3d 三维产品展示",
                "summary"  : blogSummary[0],
                "summary"  : blogSummary[0],
                "url"   : "assets/webgl/" + workNames[2] + "/index.html",
                "date"  : Date.now(),
            },{
                "id"    : "3",
                "name"  : workNames[3],
                "title" : workTitles[3],
                "image" : workImgFolder + workNames[3] + ".png",
                "tag"   : "webgl web3d 三维产品展示",
                "info"  : "webgl web3d 三维产品展示",
                "summary"  : blogSummary[0],
                "summary"  : blogSummary[0],
                "url"   : "assets/webgl/" + workNames[3] + "/index.html",
                "date"  : Date.now(),
            },{
                "id"    : "4",
                "name"  : workNames[4],
                "title" : workTitles[4],
                "image" : workImgFolder + workNames[4] + ".png",
                "tag"   : "webgl web3d 三维产品展示",
                "info"  : "webgl web3d 三维产品展示",
                "summary"  : blogSummary[0],
                "summary"  : blogSummary[0],
                "url"   : "assets/webgl/" + workNames[4] + "/index.html",
                "date"  : Date.now(),
            },{
                "id"    : "5",
                "name"  : workNames[5],
                "title" : workTitles[5],
                "image" : workImgFolder + workNames[5] + ".png",
                "tag"   : "webgl web3d 三维产品展示",
                "info"  : "webgl web3d 三维产品展示",
                "summary"  : blogSummary[0],
                "summary"  : blogSummary[0],
                "url"   : "assets/webgl/" + workNames[5] + "/index.html",
                "date"  : Date.now(),
            },{
                "id"    : "6",
                "name"  : workNames[6],
                "title" : workTitles[6],
                "image" : workImgFolder + workNames[6] + ".png",
                "tag"   : "webgl web3d 三维产品展示",
                "info"  : "webgl web3d 三维产品展示",
                "summary"  : blogSummary[0],
                "summary"  : blogSummary[0],
                "url"   : "assets/webgl/" + workNames[6] + "/index.html",
                "date"  : Date.now(),
            },{
                "id"    : "7",
                "name"  : workNames[7],
                "title" : workTitles[7],
                "image" : workImgFolder + workNames[7] + ".png",
                "tag"   : "webgl web3d 三维产品展示",
                "info"  : "webgl web3d 三维产品展示",
                "summary"  : blogSummary[0],
                "summary"  : blogSummary[0],
                "url"   : "assets/webgl/" + workNames[7] + "/index.html",
                "date"  : Date.now(),
            },{
                "id"    : "8",
                "name"  : workNames[8],
                "title" : workTitles[8],
                "image" : workImgFolder + workNames[8] + ".png",
                "tag"   : "webgl web3d 三维产品展示",
                "info"  : "webgl web3d 三维产品展示",
                "summary"  : blogSummary[0],
                "summary"  : blogSummary[0],
                "url"   : "assets/webgl/" + workNames[8] + "/index.html",
                "date"  : Date.now(),
            },{
                "id"    : "9",
                "name"  : workNames[9],
                "title" : workTitles[9],
                "image" : workImgFolder + workNames[9] + ".png",
                "tag"   : "webgl web3d 三维产品展示",
                "info"  : "webgl web3d 三维产品展示",
                "summary"  : blogSummary[0],
                "summary"  : blogSummary[0],
                "url"   : "assets/webgl/" + workNames[9] + "/index.html",
                "date"  : Date.now(),
            },{
                "id"    : "10",
                "name"  : workNames[10],
                "title" : workTitles[10],
                "image" : workImgFolder + workNames[10] + ".png",
                "tag"   : "webgl web3d 三维产品展示",
                "info"  : "webgl web3d 三维产品展示",
                "summary"  : blogSummary[0],
                "summary"  : blogSummary[0],
                "url"   : "assets/webgl/" + workNames[10] + "/index.html",
                "date"  : Date.now(),
            }
        ],


        blog: [
            {
                "id"    : "0",
                "name"  : blogNames[0],
                "title" : blogTitles[0],
                "image" : blogImgkUrls[0],
                "tag"   : "webgl web3d 三维产品展示",
                "info"  : "webgl web3d 三维产品展示",
                "summary"  : blogSummary[0],
                "url"   : blogHtmlUrls[0],
                "date"  : Date.now(),
            },{
                "id"    : "1",
                "name"  : blogNames[1],
                "title" : blogTitles[1],
                "image" : blogImgkUrls[1],
                "tag"   : "webgl web3d 三维产品展示",
                "info"  : "x51 webgl 3drender",
                "summary"  : blogSummary[1],
                "url"   : blogHtmlUrls[1],
                "date"  : Date.now(),
            },{
                "id"    : "2",
                "name"  : blogNames[2],
                "title" : blogTitles[2],
                "image" : blogImgkUrls[2],
                "tag"   : "webgl web3d 三维产品展示",
                "info"  : "webgl web3d 三维产品展示",
                "summary"  : blogSummary[2],
                "url"   : blogHtmlUrls[2],
                "date"  : Date.now(),
            },{
                "id"    : "3",
                "name"  : blogNames[3],
                "title" : blogTitles[3],
                "image" : blogImgkUrls[3],
                "tag"   : "webgl web3d 三维产品展示",
                "info"  : "webgl web3d 三维产品展示",
                "summary"  : blogSummary[3],
                "url"   : blogHtmlUrls[3],
                "date"  : Date.now(),
            },{
                "id"    : "4",
                "name"  : blogNames[4],
                "title" : blogTitles[4],
                "image" : blogImgkUrls[4],
                "tag"   : "webgl web3d 三维产品展示",
                "info"  : "webgl web3d 三维产品展示",
                "summary"  : blogSummary[4],
                "url"   : blogHtmlUrls[4],
                "date"  : Date.now(),
            },{
                "id"    : "5",
                "name"  : blogNames[5],
                "title" : blogTitles[5],
                "image" : blogImgkUrls[5],
                "tag"   : "webgl web3d 三维产品展示",
                "info"  : "webgl web3d 三维产品展示",
                "summary"  : blogSummary[5],
                "url"   : blogHtmlUrls[5],
                "date"  : Date.now(),
            },{
                "id"    : "6",
                "name"  : blogNames[6],
                "title" : blogTitles[6],
                "image" : blogImgkUrls[6],
                "tag"   : "webgl web3d 三维产品展示",
                "info"  : "webgl web3d 三维产品展示",
                "summary"  : blogSummary[6],
                "url"   : blogHtmlUrls[6],
                "date"  : Date.now(),
            },{
                "id"    : "7",
                "name"  : blogNames[7],
                "title" : blogTitles[7],
                "image" : blogImgkUrls[7],
                "tag"   : "webgl web3d 三维产品展示",
                "info"  : "webgl web3d 三维产品展示",
                "summary"  : blogSummary[7],
                "url"   : blogHtmlUrls[7],
                "date"  : Date.now(),
            },{
                "id"    : "8",
                "name"  : blogNames[8],
                "title" : blogTitles[8],
                "image" : blogImgkUrls[8],
                "tag"   : "webgl web3d 三维产品展示",
                "info"  : "webgl web3d 三维产品展示",
                "summary"  : blogSummary[8],
                "url"   : blogHtmlUrls[8],
                "date"  : Date.now(),
            },{
                "id"    : "9",
                "name"  : blogNames[9],
                "title" : blogTitles[9],
                "image" : blogImgkUrls[9],
                "tag"   : "webgl web3d 三维产品展示",
                "info"  : "webgl web3d 三维产品展示",
                "summary"  : blogSummary[9],
                "url"   : blogHtmlUrls[9],
                "date"  : Date.now(),
            },{
                "id"    : "10",
                "name"  : blogNames[10],
                "title" : blogTitles[10],
                "image" : blogImgkUrls[10],
                "tag"   : "webgl web3d 三维产品展示",
                "info"  : "webgl web3d 三维产品展示",
                "summary"  : blogSummary[10],
                "url"   : blogHtmlUrls[10],
                "date"  : Date.now(),
            }
        ]
    },

    computed: {
        totalPrice: function() {
            var total = 0
            this.shoppingCart.forEach(function(item) {
                total += item.price * item.quantity
            })

            return total
        }
    },


    ready: function () {
        this.workItemData();
    },

    methods: {
        workItemData: function(id) {
           var id = id
            var index = this.workPageName.length



            workDataAll = [];




            $.each(this.workPageName, function (index, title) {

                workData = {

                    id    : index,
                    name  : workNames[index],
                    title : workNames[index],
                    image : workImgFolder     +     workNames[index] + ".png",
                    tag   : "webgl            web3d 三维产品展示",
                    info  : "webgl            web3d 三维产品展示",
                    url   : "assets/webgl/"   +     workNames[index] + "/index.html",
                    date  : Date.now()

                };



                workDataAll.push(workData);



            })

            return workDataAll;

            console.log(workDataAll);

        },

        removeFromCart: function(i, productId) {
            id = productId
            this.products[id].inCart = false
            this.shoppingCart.$remove(i)
        },

        updatData: function(i, productId) {

            console.log(this.products[id]);
        }






    }
});