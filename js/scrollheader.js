$(document).ready(function() {

    var winTop = 0;

    $(window).scroll(function() {

        winTop = $(window).scrollTop();

        if (winTop >= 100) {

            TweenMax.to($("header"), 0.3, {height: 60,}, 0.1);

            TweenMax.to($("header").find("img"), 0.3, { scale: 0 } );
            TweenMax.to($("header").find(".tagTitle"), 0.3, { y: -260 } );

        } else {

            TweenMax.to($("header").find("img"), 0.3, { scale: 1 } );

            TweenMax.to($("header"), 0.3, { height: 320, }, 0.1);
            TweenMax.to($("header").find(".tagTitle"), 0.3, { y: 0 } );
        }


        var detailTitleT = $(".detailTitle").offset().top - $(window).scrollTop();

        if (detailTitleT < 0) {

            var title = $.trim($(".detailTitle").html());
            var tag   = $("header").find(".tagTip").html();


            $(".titlePos").html(title);

            TweenMax.to($("header").find(".tagTitle"), 0.3, { y: -320 } );
            // TweenMax.to($(".titlePos"), 0.3, { y: -320 } );

            


            console.log(title)
            
        } else {



        }





        // if ($("header").hasClass("fixHeader")) {

        //     var title = $(".detailTitle").html();
        //     var tag = $(".tagName").html();

        //     if (detailTitleT === 0) {
        //         $("header").find(".tagName").children().remove();
        //         $("header").find(".tagName").append(title);                
        //     }

        //     if (detailTitleT > 0) {
        //         $("header").find(".tagName").children().remove();
        //         $("header").find(".tagName").append(tag);                
        //     }

        // }


    });







});