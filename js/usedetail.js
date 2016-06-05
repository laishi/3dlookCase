

// $(window).bind("popstate", function() {


//     var origUrl = window.location.href;

//     var urlSplit = origUrl.split("/");
//     var urlLenght = urlSplit.length;

//     var curUrl = urlSplit[urlLenght-1];
 
//     if (curUrl === detailUrl) {
        
//     } else {
//         closeDetail;
//     }

// });




$(".itemImg").click(function () {

    // titleUrl = $(this).parents(".item").find(".itemTitle").text();
    var item = $(this);
    openDetail(item);

});



$(".backCicle").click(closeDetail);


 // = that.parents(".item").find(".itemTitle").text()

var headereyes = $(".headerCont").html();

function openDetail(item) {

    var that = item;

    $("header").addClass("fixHeader");


    $(".gridItems").css({"display":"none"});
    $(".blogFilter").css({"display":"none"});

    if (that.parents(".page").hasClass("work")) {
        $(".btnCicle").css({"display":"block","opacity":0});
        $(".backBlog").css({"display":"none","opacity":0});
        $(".btnCicleMore").find("h3").text("3D");
    }

    if (that.parents(".page").hasClass("blog")) {
        $(".btnCicle").css({"display":"block","opacity":0});
        $(".backWork").css({"display":"none","opacity":0});        
        $(".btnCicleMore").find("h3").text("GO");
    }




    TweenMax.fromTo($(".item"), 0.3, { scale: 1}, { scale: 0, onComplete: gototop});
    $(".headerCont").children().remove();

   
    //GET ITEM DATA
    var getHeaderCont = $(".headerCont").html();

    var getImg        = that.parents(".item").find(".itemImg").html();
    var getTitle      = that.parents(".item").find(".itemTitle").html();
    var getTag        = that.parents(".item").find(".itemTag").html();
    var getDes        = that.parents(".item").find(".itemDes").html();
    var getAdditional = that.parents(".item").find(".itemAdditional").html();




    //CHANGE MORE LINK

    getLink = that.parents(".item").find(".moreLink").attr("href");


    if (getLink) {
        $(".btnCicleMore").attr("href", getLink);

    }




    

    $(".headerCont").append(getImg);
    $(".headerCont").append(getTag);
    $(".detailTitle").append(getTitle);
    $(".detailAdditional").append(getAdditional);



    // ADD IMG GO TO 3D LOOK
    $("header").find("img").wrap($('<a>', {
        href: getLink
    }));

    var iframego = "<iframe src= " + getLink + " " + "frameBorder=0 scrolling=no width='100%' height='100%'></iframe>"


    //USE PAGES DATA

    if (that.parents(".page").hasClass("work")) {
        var pagePath = "pages/work/";
    }
    if (that.parents(".page").hasClass("blog")) {
        var pagePath = "pages/blog/";
    }

    var pageName = $.trim( that.parents(".item").find(".pageName").text() );
    var pageFormat = ".html";
    var pageURL = pagePath + pageName + pageFormat;
    var pageLoad = pagePath + pageName + pageFormat + " ." + pageName;

    // console.log(pageURL)

    
    $(".detailDes").load(pageLoad);

    //NAV MENU    
    TweenMax.fromTo($(".navGrid"), 0.3, { y: 0, opacity: 1 }, { y: 60, opacity: 0 });
    //HEADER IMG
    TweenMax.fromTo($("header").find("img"), 1.2, { y: 320 }, { y: 0, delay: 1, ease: Elastic.easeOut.config(1, 0.75) });
    //HEADER TAG
    TweenMax.fromTo($("header").find("ul"), 1.2, { opacity: 0 }, { opacity: 1, delay: 1.2 });

        console.log(that)

}

function closeDetail() {

    $(window).scrollTop(0);

    $(".gridItems").css({"display":"block"});
    $(".blogFilter").css({"display":"block"});

    $(".infoMax").css("display","none");
    $(".btnCicle").css("display","none");

    $(".headerCont").children().remove();
    TweenMax.fromTo($(".infoMax"), 0.3, { opacity: 1}, { opacity: 0});

    $(".headerCont").append(headereyes);


    //NAV MENU    
    TweenMax.fromTo($(".navGrid"), 0.3, { y: 60, opacity: 0 }, { y: 0, opacity: 1 });

    $(".itemDetail").children().each(function (index,elem) {
        $(elem).children().remove();
    })

    TweenMax.fromTo($(".item"), 0.3, { scale: 0}, { scale: 1});


    // UPDATE IFRAME

    // $("header").find("iframe").prop('src', getLink);



}





//NOTE GOTOTOP

function gototop() {



    

    TweenMax.to($(".scrollItem"), 0.3, { y: 520});


    TweenMax.fromTo($(".infoMax"), 0.3, { opacity: 0}, { opacity: 1});

    $(".infoMax").css("display","block");        
    TweenMax.fromTo($(".infoMax"), 1.3, { opacity: 0}, { opacity: 1});

    // SET BTN POS
    if ($(window).innerWidth()>1080) {
        var ld = ((1 - 1080/$(window).innerWidth())/2 - 0.02) *100 + "%" 
    } else {
        var ld = 2 + "%"
    }


    TweenMax.fromTo($(".backCicle"), 1.2, { left: $(window).innerWidth() / 2 - 30, scale: 0, opacity: 0 },
                    { left: ld, scale: 1, opacity: 1, ease: Elastic.easeOut.config(1, 0.75), });

    TweenMax.fromTo($(".goPageCicle"), 1.2, { right: $(window).innerWidth() / 2 - 30, scale: 0, opacity: 0 },
                    { right: ld, scale: 1, opacity: 1, ease: Elastic.easeOut.config(1, 0.75), });


    $(window).scrollTop(0);


};

