$(document).ready(function() {

    $(window).scroll(function() {
        var winTop = $(window).scrollTop();

        if (winTop >= 100) {

            if (!$("header").hasClass("fixHeader")) {

                TweenMax.to($("header"), 0.3, {
                    height: 60,
                }, 0.1);

                TweenMax.to($(".backCicle"), 0.3, {top:32} );
            }


        } else {

            TweenMax.to($("header"), 0.3, {
                height: 320,
            }, 0.1);

            TweenMax.to($(".backCicle"), 0.3, {top:290} );

        }

    });





    var navItem = $(".navItem");
    var page = $(".page");
    var homePage = $(".pages").children().first();

    homePage.addClass("curPage");
    homePage.css({ "display": "block" });

    var lastPage = homePage;
    var curPage = homePage;
    var lastTween, curTween;


    var clickNum = 0;
    var pageIndex = 0;


    $(".navBlog").click(function () {
      $('.blogMix').mixItUp();
    })



    navItem.click(sliderPage);

    function sliderPage() {




        var pageData = $(this).data("page");
        var curPage = $('.' + pageData);
        var curPageSiblings = curPage.siblings();

        $(this).children().css({ "color": "#ccc" });
        $(this).siblings().children().css({ "color": "#181818" });

        if (curPage.hasClass("curPage")) {

        } else {

            $(".pages").children().removeClass("lastPage");
            $(".curPage").removeClass("curPage").addClass("lastPage");
            curPage.addClass("curPage");

            lastPage = $(".lastPage");
            curPage = $(".curPage");


            var speed = 0.5;

            if (pageIndex < $(this).index()) {

                TweenMax.fromTo(lastPage, speed, { x: "0%" }, { x: "-100%" });
                TweenMax.fromTo(curPage, speed, { x: "100%" }, { x: "0%", onComplete:wtotop });

            } else {

                TweenMax.fromTo(curPage, speed, { x: "-100%" }, { x: "0%" });
                TweenMax.fromTo(lastPage, speed, { x: "0%" }, { x: "100%", onComplete:wtotop });
            }

            pageIndex = $(this).index();

            clickNum++;

        }
    }


    function wtotop() {
        $(window).scrollTop(0);
    }



    var workImg = $(".pageWork").find(".itemImg").children();

    workImg.each(function(index){

        var imgBase = "img/workimg/0";
        var formate = ".png"
        
        var imgPath = imgBase + index + formate;
        $(this).prop('src', imgPath);

    });



    var work3dLink = $(".3dlink");
    var go3dCicleLink = $(".go3dCicleLink");

    work3dLink.each(function (index, link) {
        var linkBase = "assets/webgl/0";
        var excudehtml = "/index.html"        
        var linkPath = linkBase + index + excudehtml;
        $(this).attr("href", linkPath);

    })



});





//grids


$(document).ready(function() {


    $(".backCicle").click(closeDetail);

    $(".item").children(".itemImg").click(openDetail);

    $(".barMark").click(openDetail);
    $(".itemTitle").click(openDetail);    

    $(".barInfo").click(openInfo);

    $(".barLove").click(function() {
        $(this).children().toggleClass("barToggle");
    })
    






    var container = $('.container');
    var containerH = container.height();
    var item = $('.scrollItem');
    var itemL = $('.scrollItem').length;



    var itemNum = Math.floor(1 / (item.width() / window.innerWidth));



    function addMark() {
        
    }




    function openInfo() {

        if ($(this).children().hasClass("barToggle")) {

            $(this).parent().siblings(".info").css("display", "none");
            TweenMax.to($(this).parent().siblings(".info").children(), 0.3, { opacity: 1 });
            TweenMax.to($(this).parent().siblings(".itemImg"), 0.5, { ease: Elastic.easeOut.config(1, 0.75), scale: 1, delay: 0.3 });
            $(this).children().toggleClass("barToggle");
            $(this).children().children("i").removeClass("fa-close").addClass("fa-info");


            TweenMax.to($(this).parents(".item").children(".bar").find(".infoTitle"), 0.5, { ease: Elastic.easeOut.config(1, 0.75), opacity: 0, delay: 0.3 });

            


        } else {

            $(this).parent().siblings(".info").css("display", "block");
            TweenMax.to($(this).parent().siblings(".itemImg"), 0.3, { ease: Power1.easeIn, scale: 0, delay: 0.0 });

            TweenMax.staggerFromTo($(this).parent().siblings(".info").children(), 0.3, { y: 320 }, { y: 0 }, 0.2);
            TweenMax.staggerFromTo($(this).parent().siblings(".info").children(), 0.3, { opacity: 0 }, { opacity: 1 }, 0.2);

            $(this).children().toggleClass("barToggle");
            $(this).children().children("i").removeClass("fa-info").addClass("fa-close");

            //SET INFOCONT DIV HEIGHT
            var itemH = $(this).parent().parent().height();
            var titleH = $(this).parent().siblings(".info").children(".infoTitle").height();

            var infoContH = itemH - titleH -100;

            $(this).parent().siblings(".info").children(".infoCont").css("height",infoContH);
        }
    }







    function openDetail() {

        $("header").addClass("fixHeader");

        $(this).parents(".item").children(".bar").children(".barMark").children().addClass("barToggle");


        // alert()


        TweenMax.staggerTo($(".item"), 0.3, {
            scale: 0,
            cycle: {
                delay: function(index) {
                    return Math.random(index)/10;
                }
            }, onComplete:gototop
        }, 0.01);




            TweenMax.fromTo($(".navGrid"), 0.3, {y:0},{y:60} );


        function gototop() {

            TweenMax.to($(this).parent().siblings(), 0.0, {display:"none"} );



            $(".infoMax").css({display:"block",opacity:0});
            $(".backCicle").css({display:"block"});
            $(".go3dCicle").css({display:"block"});

            TweenMax.to($(".infoMax"), 3.2, {opacity:1} );
            TweenMax.fromTo($(".backCicle"), 1.3, {left:$(window).innerWidth()/2-30,scale:0,opacity:0},{left:"20%",scale:1,opacity:1,ease: Elastic.easeOut.config(1, 0.75),} );
            TweenMax.fromTo($(".go3dCicle"), 1.3, {right:$(window).innerWidth()/2-30,scale:0,opacity:0},{right:"20%",scale:1,opacity:1,ease: Elastic.easeOut.config(1, 0.75),} );


            $(window).scrollTop(0);
        }


        //GET ITEM DATA

        var getImg = $(this).parents(".item").children(".itemImg").html();
        var getTag = $(this).parents(".item").children(".itemTag").html();
        var getTitle = $(this).parents(".item").children(".itemTitle").html();
        var getDes = $(this).parents(".item").children(".itemDes").html();
        var getAdditional = $(this).parents(".item").children(".itemAdditional").html();


        //CHANGE 3D LINK

        var getLink = $(this).parents(".item").children(".bar").find(".3dlink").attr("href");       

        $(".go3dCicleLink").attr("href", getLink);



        $(".headereyes").remove();
        $("header").children("a").remove();
        $(".detailTag").children().remove();


        $(".detailTitle").children().remove();
        $(".detailDes").children().remove();
        $(".detail3d").children().remove();
        $(".detailAdditional").children().remove();


        $("header").append( getImg );
        $("header").append( getTag );

        $(".detailTitle").append( getTitle );
        $(".detailDes").append( getDes );
        $(".detailAdditional").append( getAdditional );



        // ADD IMG GO TO 3D LOOK

        $("header").children("img").wrap($('<a>',{
            href: getLink
        }));

        var iframego = "<iframe src= " + getLink  + " " + "frameBorder=0 scrolling=no width='100%' height='100%'></iframe>"


        $(".detail3d").append(iframego);


        TweenMax.fromTo($("header").find("img"), 1.3, {y:320}, {y:0,delay:1,ease: Elastic.easeOut.config(1, 0.75)});
        TweenMax.fromTo($("header").children("ul"), 2.3, {opacity:0},{opacity:1,delay:2.3});

    }





    // closeDetail
    var headereyes = $(".headerCont").html();
    function closeDetail() {

        $("header").removeClass("fixHeader");

        $("header").children("a").remove();
        $("header").children("ul").remove();
        $("header").children(".headereyes").remove();
        $("header").append( headereyes );

        $(".navGrid").css({display:"block"});

        TweenMax.fromTo($(".navGrid"), 1.2, {y:60,opacity:0},{y:0,opacity:1} );


        TweenMax.set($(".backCicle"), {display:"none"} );
        TweenMax.set($(".go3dCicle"), {display:"none"} );

        $(".infoMax").css({display:"none",opacity:1});


        TweenMax.staggerTo($(".item"), 0.5, {
            scale: 1,
            cycle: {
                delay: function(index) {
                    return Math.random(index)/10;
                }
            }
        }, 0.01);

    }



    // SCROLL GRID DOWN UP

    var itemPY = item.offset().top;
    var scrollY = $(window).scrollTop();
    var curentItemPY = itemPY - scrollY;
    var lastScrollTop = 0;




/*
    for (var i = itemGrid.length - 1; i >= 0; i--) {
        itemGrid[i]
    }

*/



    item.each(function (index,element) {

        var thisis = $(this);

        var eachItemTop = thisis.offset().top;

        var winH = $(window).innerHeight()-itemPY;

        


        if (eachItemTop < eachItemTop) {

            thisis.css("widht","20px");

            console.log(this);





        }







    })


    $(window).scroll(function() {

        curentItemPY = itemPY - $(window).scrollTop();

        itemNum = Math.floor(1 / (item.width() / window.innerWidth));

        var gridDelay = 0.001;

        var tween;










        st = $(this).scrollTop();

        if (st > lastScrollTop) {

            tween = TweenMax.staggerTo(item, 0.3, {
                y: -st,
                cycle: {
                    delay: function(index) {
                        return index%2 / 25;
                    }
                }
            }, gridDelay);


        } else {

            tween = TweenMax.staggerTo(item.toArray().reverse(), 0.3, {
                y: curentItemPY - 520,
                cycle: {
                    delay: function(index) {
                        return index%2 / 25;
                    }
                }
            }, gridDelay);

        }

        lastScrollTop = st;

    });



});























































/*EXPAND MENU INIT*/
$(document).ready(function() {

    var navItemL = $(".navItem").length; // Div count

    var expandW = 38; // Div over width
    TweenMax.set($(".navItem"), {
        width: 100 / navItemL + '%'
    });
    $(".navItem").hover(over, out);

    function over() {
        TweenMax.to($(this), 0.8, {
            width: expandW + '%'
        });
        TweenMax.to($(this).siblings(), 0.8, {
            width: (100 - expandW) / (navItemL - 1) + '%'
        })
    }

    function out() {
        TweenMax.to($(".navItem"), 0.8, {
            width: 100 / navItemL + '%',
            ease: Back.easeOut
        })
    }

});

/*EXPAND BAR INIT*/
$(document).ready(function() {

    var gridItemsCont = $(".gridItems").children().length - $(".gridItems").children(".gap").length;
    var c = $(".barItem").length / gridItemsCont;
    var KD = 50;
    TweenMax.set($(".barItem"), {
        width: 100 / c + '%'
    });
    $(".barItem").hover(over, out);

    function over() {
        TweenMax.to($(this), 0.3, {
            width: KD + '%'
        });
        TweenMax.to($(this).siblings(), 0.3, {
            width: (100 - KD) / (c - 1) + '%'
        })

        // TweenMax.staggerFromTo($(this), 0.3, { y: 0 }, { y: -50, delay:0.3}, 0.2);
    }

    function out() {
        TweenMax.to($(".barItem"), 0.3, {
            width: 100 / c + '%',
            ease: Back.easeOut
        })

        // TweenMax.staggerFromTo($(this), 0.3, { y: -50 }, { y: 0, delay:0.1}, 0.2);
    }

});





        