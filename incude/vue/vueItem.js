var png = ".png"
var jpg = ".jpg"
var HtmlFormat = ".html"


//  WORK
var workNames = ["webgl", "x50", "rose", "ring", "iwatch", "moto", "edge", "i8", "nike", "shave", "house"];
var workHtmlFolder = "pages/work/";
var workImgFolder = "img/workimg/";
var workImgkUrls = [];
var workHtmlUrls = [];
var workTitles = [];


$.each(workNames, function(index, title) {

    var workHtmlUrl = workHtmlFolder + title + HtmlFormat;
    var workimgkUrl = workImgFolder + title + png;

    workHtmlUrls.push(workHtmlUrl);
    workImgkUrls.push(workimgkUrl);


    $.ajax({
        url: workHtmlUrl,
        async: false,
        success: function(data) {
            title = $(data).filter('title').text();
            workTitles.push(title);
        }
    });

})




//  BLOG
var db = new loki('blogDB.json');
var blogCol = db.addCollection('blogCol');






var blogNames = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "16", "17", "18", "blend4web", "playCanvas", "threeJS", "webglFramework", "pbr", "lokiJS", ];
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
            summary = $(data).filter(useClass).text();

            // blogOBJ.title = title;

            blogOBJ.summary = summary;

        }
    });

})


db.saveDatabase(function () {
    console.log("save db")
});










var lookVue = new Vue({
    el: '.pages',
    data: {
        searchString: "",
        selectedCategory: "",
        shoppingCart: [],

        workPageName: ["webgl", "x50", "rose", "ring", "iwatch", "moto", "edge", "i8", "nike", "shave", "house"],

        showNum: 5,

        works: [{
                "id": "0",
                "name": workNames[0],
                "title": workTitles[0],
                "image": workImgFolder + workNames[0] + ".png",
                "tag": "webgl web3d 三维产品展示",
                "info": "webgl web3d 三维产品展示",
                "summary": blogSummary[0],
                "summary": blogSummary[0],
                "url": "assets/webgl/" + workNames[0] + "/index.html",
                "date": Date.now(),
            }, {
                "id": "1",
                "name": workNames[1],
                "title": workTitles[1],
                "image": workImgFolder + workNames[1] + ".png",
                "tag": "webgl web3d 三维产品展示",
                "info": "x51 webgl 3drender",
                "url": "assets/webgl/" + workNames[1] + "/index.html",
                "date": Date.now(),
            }, {
                "id": "2",
                "name": workNames[2],
                "title": workTitles[2],
                "image": workImgFolder + workNames[2] + ".png",
                "tag": "webgl web3d 三维产品展示",
                "info": "webgl web3d 三维产品展示",
                "summary": blogSummary[0],
                "summary": blogSummary[0],
                "url": "assets/webgl/" + workNames[2] + "/index.html",
                "date": Date.now(),
            }, {
                "id": "3",
                "name": workNames[3],
                "title": workTitles[3],
                "image": workImgFolder + workNames[3] + ".png",
                "tag": "webgl web3d 三维产品展示",
                "info": "webgl web3d 三维产品展示",
                "summary": blogSummary[0],
                "summary": blogSummary[0],
                "url": "assets/webgl/" + workNames[3] + "/index.html",
                "date": Date.now(),
            }, {
                "id": "4",
                "name": workNames[4],
                "title": workTitles[4],
                "image": workImgFolder + workNames[4] + ".png",
                "tag": "webgl web3d 三维产品展示",
                "info": "webgl web3d 三维产品展示",
                "summary": blogSummary[0],
                "summary": blogSummary[0],
                "url": "assets/webgl/" + workNames[4] + "/index.html",
                "date": Date.now(),
            }, {
                "id": "5",
                "name": workNames[5],
                "title": workTitles[5],
                "image": workImgFolder + workNames[5] + ".png",
                "tag": "webgl web3d 三维产品展示",
                "info": "webgl web3d 三维产品展示",
                "summary": blogSummary[0],
                "summary": blogSummary[0],
                "url": "assets/webgl/" + workNames[5] + "/index.html",
                "date": Date.now(),
            }, {
                "id": "6",
                "name": workNames[6],
                "title": workTitles[6],
                "image": workImgFolder + workNames[6] + ".png",
                "tag": "webgl web3d 三维产品展示",
                "info": "webgl web3d 三维产品展示",
                "summary": blogSummary[0],
                "summary": blogSummary[0],
                "url": "assets/webgl/" + workNames[6] + "/index.html",
                "date": Date.now(),
            }, {
                "id": "7",
                "name": workNames[7],
                "title": workTitles[7],
                "image": workImgFolder + workNames[7] + ".png",
                "tag": "webgl web3d 三维产品展示",
                "info": "webgl web3d 三维产品展示",
                "summary": blogSummary[0],
                "summary": blogSummary[0],
                "url": "assets/webgl/" + workNames[7] + "/index.html",
                "date": Date.now(),
            }, {
                "id": "8",
                "name": workNames[8],
                "title": workTitles[8],
                "image": workImgFolder + workNames[8] + ".png",
                "tag": "webgl web3d 三维产品展示",
                "info": "webgl web3d 三维产品展示",
                "summary": blogSummary[0],
                "summary": blogSummary[0],
                "url": "assets/webgl/" + workNames[8] + "/index.html",
                "date": Date.now(),
            }, {
                "id": "9",
                "name": workNames[9],
                "title": workTitles[9],
                "image": workImgFolder + workNames[9] + ".png",
                "tag": "webgl web3d 三维产品展示",
                "info": "webgl web3d 三维产品展示",
                "summary": blogSummary[0],
                "summary": blogSummary[0],
                "url": "assets/webgl/" + workNames[9] + "/index.html",
                "date": Date.now(),
            }, {
                "id": "10",
                "name": workNames[10],
                "title": workTitles[10],
                "image": workImgFolder + workNames[10] + ".png",
                "tag": "webgl web3d 三维产品展示",
                "info": "webgl web3d 三维产品展示",
                "summary": blogSummary[0],
                "summary": blogSummary[0],
                "url": "assets/webgl/" + workNames[10] + "/index.html",
                "date": Date.now(),
        }],


        blog: ''
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


    created: function() {

        
    },


    ready: function() {

    },


    destroyed: function() {

    },




    methods: {

        ImgOpen: function(event) {
            var targetImg = $(event.target).parent();
            openDetail(targetImg);
        }




    }
});


updateItem();


// var scrollH = $( document ).height() - $( window ).innerHeight();

// console.log(scrollH);

window.addEventListener('scroll', updateItem, false);


function updateItem() {




    


    var winTop = $(window).scrollTop();

    var limitNum = winTop / 80 ;



    // var itemChain = blogCol.chain();
    // var blogItem = itemChain.offset(limitNum).limit(8);






    var newdv = blogCol.addDynamicView('blogCol_view');

    newdv.applyWhere(function customFilter(obj){

        return obj.id  > -1  &&  obj.id  < 4 + limitNum;

    });

    newdv.applySimpleSort('id')


    lookVue.blog = newdv.data();








    console.log($(".blogItem"));
    
    console.log($(".blogItem").length);










    // console.log(newdv.data());
    // console.log( $(".itemImg").length)
};



