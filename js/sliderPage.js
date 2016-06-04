
$(window).on('hashchange', function(e){
    var hashUrl;
    var origEvent = e.originalEvent;

    var urlSplit = origEvent.newURL.split("/");
    var urlLenght = urlSplit.length;

    hashUrl = urlSplit[urlLenght-1];
    sliderPage(hashUrl);

    var hash = new String(document.location).indexOf("#");
    // console.log(origEvent)
});


$(".navItem").click(function() {
    var pageData = $(this).data("page");

    var index = $(this).index();

    sliderPage(pageData,index);    
    countClick += 1;
});


// function ChangeUrl(page, url) {
//     if (typeof(history.pushState) != "undefined") {
//         var obj = { Page: page, Url: url };
//         history.pushState(obj, obj.Page, obj.Url);
//     } else {
//         window.location.href = "homePage";
//     }
// }

// ChangeUrl(pageData, pageData);





var pageIndex = 0;
var clickNum = 0;

var page = $(".page");
var homePage = $(".pages").children().first();

homePage.addClass("curPage");
homePage.css({ "display": "block" });





function sliderPage(pageName,index) {


    var pageData = pageName;
    // var index = index;

    var curPage = $('.' + pageName);
    var curPageSiblings = curPage.siblings();



    if (curPage.hasClass("curPage")) {



    } else {

        $(".pages").children().removeClass("lastPage");
        $(".curPage").removeClass("curPage").addClass("lastPage");
        curPage.addClass("curPage");

        lastPage = $(".lastPage");
        curPage = $(".curPage");
        var speed = 0.5;

        if (pageIndex < index) {
            goRight();
        } else {
            goLeft();
        }

        pageIndex = index;

        clickNum++;

        function goRight() {
            TweenMax.fromTo(lastPage, speed, { x: "0%" }, { x: "-100%" });
            TweenMax.fromTo(curPage, speed, { x: "100%" }, { x: "0%", onComplete:wtotop });
        }

        function goLeft() {
            TweenMax.fromTo(curPage, speed, { x: "-100%" }, { x: "0%" });
            TweenMax.fromTo(lastPage, speed, { x: "0%" }, { x: "100%", onComplete:wtotop });
        }

        function wtotop() {
            $(window).scrollTop(0);
        }


    }




    if (pageData == "blog") {


        $('.blogMix').mixItUp();

        var inputText;
        var $matching = $();
        var $contText = $();

        // Delay function
        var delay = (function() {
            var timer = 0;
            return function(callback, ms) {
                clearTimeout(timer);
                timer = setTimeout(callback, ms);
            };
        })();

        $("#input").keyup(function() {
            delay(function() {
                inputText = $("#input").val().toLowerCase();

                if ((inputText.length) > 0) {
                    $('.mix').each(function() {
                        $this = $("this");


                        if ($(this).children('.itemTitle').text().toLowerCase().match(inputText)) {
                            $matching = $matching.add(this);
                        } else if ($(this).children('.itemDes').text().toLowerCase().match(inputText)) {
                            $contText = $contText.add(this);
                        } else {
                            // removes any previously matched item
                            $matching = $matching.not(this);
                        }
                    });



                    $(".blogMix").mixItUp('filter', $matching);
                    // $(".blogMix").mixItUp('filter', $contText);



                } else {
                    // resets the filter to show all item if input is empty
                    $(".blogMix").mixItUp('filter', 'all');
                }




            }, 200);
        });

    }





}




