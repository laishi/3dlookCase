$(document).ready(function() {

    $(".itemImg").click(openDetail);
    $(".backCicle").click(closeDetail);

    var headereyes = $(".headerCont").html();

    function openDetail() {

        $("header").addClass("fixHeader");


        TweenMax.fromTo($(".item"), 0.3, { scale: 1}, { scale: 0, onComplete: gototop});
        $(".headerCont").children().remove();

       
        //GET ITEM DATA
        var getHeaderCont = $(".headerCont").html();

        var getImg        = $(this).parents(".item").children(".itemImg").html();
        var getTitle      = $(this).parents(".item").children(".itemTitle").html();
        var getTag        = $(this).parents(".item").children(".itemTag").html();
        var getDes        = $(this).parents(".item").children(".itemDes").html();
        var getAdditional = $(this).parents(".item").children(".itemAdditional").html();

        //CHANGE MORE LINK

        getLink = $(this).parents(".item").children(".bar").find(".moreLink").attr("href");

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

        if ($(this).parents(".page").hasClass("work")) {
            var pagePath = "pages/work/";
        }
        if ($(this).parents(".page").hasClass("blog")) {
            var pagePath = "pages/blog/";
        }

        var pageName = $.trim( $(this).parents(".item").find(".pageName").text() );
        var pageFormat = ".html";
        var pageURL = pagePath + pageName + pageFormat;
        var pageLoad = pagePath + pageName + pageFormat + " ." + pageName;

        
        $(".detailDes").load(pageLoad);

        //NAV MENU    
        TweenMax.fromTo($(".navGrid"), 0.3, { y: 0, opacity: 1 }, { y: 60, opacity: 0 });
        //HEADER IMG
        TweenMax.fromTo($("header").find("img"), 1.2, { y: 320 }, { y: 0, delay: 1, ease: Elastic.easeOut.config(1, 0.75) });
        //HEADER TAG
        TweenMax.fromTo($("header").find("ul"), 1.2, { opacity: 0 }, { opacity: 1, delay: 1.2 });

    }

    function closeDetail() {

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



        $(".btnCicle").css("display","block");
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

        TweenMax.fromTo($(".go3dCicle"), 1.2, { right: $(window).innerWidth() / 2 - 30, scale: 0, opacity: 0 },
                        { right: ld, scale: 1, opacity: 1, ease: Elastic.easeOut.config(1, 0.75), });


        $(window).scrollTop(0);


    };









});