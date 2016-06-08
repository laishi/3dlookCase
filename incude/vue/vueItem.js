
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


var db = new loki('blogDB.json');
var blogCol = db.addCollection('blogCol');






var blogNames = [ "blend4web", "playCanvas", "threeJS", "webglFramework", "pbr", "lokiJS", "playCanvas", "threeJS", "webglFramework", "pbr", "lokiJS", "playCanvas", "threeJS", "webglFramework", "pbr", "lokiJS", "playCanvas", "threeJS", "webglFramework", "pbr", "lokiJS", "playCanvas", "threeJS", "webglFramework", "pbr", "lokiJS", "playCanvas", "threeJS", "webglFramework", "pbr", "lokiJS", "playCanvas", "threeJS", "webglFramework", "pbr", "lokiJS", "playCanvas", "threeJS", "webglFramework", "pbr", "lokiJS", "playCanvas", "threeJS", "webglFramework", "pbr", "lokiJS" ];
var blogHtmlFolder = "pages/blog/";
var blogImgFolder = "img/blogImg/";

var blogImgkUrls = [];
var blogHtmlUrls = [];
var blogTitles = [];
var blogSummary = [];




$.each(blogNames, function (index,title) {


    var blogHtmlUrl = blogHtmlFolder + title + HtmlFormat;
    var blogimgkUrl = blogImgFolder + title + jpg;



    var blogOBJ = {}; 

    blogOBJ.id = index;
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
          success: function(data){
            title   = $(data).filter('title').text();
            summary = $(data).filter(useClass).text();

            blogOBJ.summary = summary;




            // console.log(summary)

          }
    });     

})







var limitNum = 10;

$(window).scroll(function() {


    winTop = $(window).scrollTop();

    limitNum = Math.round(winTop/50);




    //view the data
    // console.log(blogView.data()[0].image);



});



console.log(window.limitNum);




// console.log(blogCol.data[0]);
// DynamicViews (recommended approach):

var blogView = blogCol.addDynamicView('a_complex_view');
blogView.applyWhere(function aCustomFilter(item) {

    return item.id < limitNum;

});





























// // 创建一个数据库，你需要给他一个文件（supermarket.json）以便通过文件名保存数据。
// var db = new loki('blog.json');

// // 然后你可以开始创建一个集合了，假如你不太方便理解集合的概念的话，你可以把数据库想象成一个超市，
// // 那么， 集合就是商品的分类了。 如果还没懂， 我就要骂人了， 或者继续往下看。

// var blog = db.addCollection('blog');

// // 因为我们搞的是无本生意，水果架上还没有东西，先从果农哪里进点便宜水果，赚大钱。



// blog.insert({ name: 'apple', place: 'xian', num: '520', pice: '38' });
// blog.insert({ name: 'banana', place: 'hainan', num: '200', pice: '25' });
// blog.insert({ name: 'pear', place: 'chongqing', num: '350', pice: '18' });




































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


        blog: blogView.data()
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
        // this.workItemData();
        this.showName();
    },

    methods: {



        showName: function (index, event) {
            var name = this.blog;


            this.works.forEach(function(item) {
            })


            $.each(name,function (index,data) {
                // body...
            })

        },




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


        },

        removeFromCart: function(i, productId) {
            id = productId
            this.products[id].inCart = false
            this.shoppingCart.$remove(i)
        },

        updatData: function(i, productId) {

        }






    }
});