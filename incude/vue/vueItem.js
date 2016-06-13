var png = ".png"
var jpg = ".jpg"
var HtmlFormat = ".html"





//GET FLODER NAME

// var workNames = [];

// var workTitleImg = "img/workImg/titleImg";
// var fileextension = ".png";
// $.ajax({
//     url: workTitleImg,
//     async: false,
//     success: function (data) {
//         $(data).find("a:contains(" + fileextension + ")").each(function (index,item) {            
//             var CurURL = this.href.replace(window.location.host, "").replace("http:///", "");

//             var urlSplit   = CurURL.split("/");
//             var urlLenght  = urlSplit.length;
//             var curUrlName = urlSplit[urlLenght-1].replace(/\.png/, '');
//             workNames.push(curUrlName);
//         });
//     }
// });





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


var blogNames = ["waveLoader", "playcanvas-pbr", "blend4web", "playCanvas", "threeJS", "webglFramework", "pbr", "lokiJS", ];
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
            summary = $(data).find('.summary').text().substring(0,125) + "...";


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
















// window.addEventListener('scroll', updateItem, false);


// function updateItem() {



//     var winTop = $(window).scrollTop();

//     var limitNum = winTop / 50 ;



//     // var itemChain = blogCol.chain();
//     // var blogItem = itemChain.offset(limitNum).limit(8);


// };



