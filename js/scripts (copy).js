$(document).ready(function() {

	var navItem = $(".navItem");
	var page = $(".page");
	var homePage = $(".pages").children().first();

	homePage.addClass("curPage");

	homePage.css({"display": "block"});

	var lastPage = homePage;
	var curPage = homePage;

	var lastTween, curTween;


	var clickNum = 0;

	var pageIndex = 0;


	




	navItem.click(function(event) {

		var pageData = $(this).data("page");
		var curPage = $('.' + pageData);
		var curPageSiblings = curPage.siblings();


		$(this).children().css({"color": "#ccc"});
		$(this).siblings().children().css({"color": "#181818"});



		if (curPage.hasClass("curPage")) {

		} else {




			$(".pages").children().removeClass("lastPage");
			$(".curPage").removeClass("curPage").addClass("lastPage");
			curPage.addClass("curPage");

			lastPage = $(".lastPage");
			curPage = $(".curPage");


			var speed = 0.5;

			if (pageIndex < $(this).index()) {
				
				TweenMax.fromTo(lastPage, speed, {x:"0%"}, {x: "-100%"});
				TweenMax.fromTo(curPage, speed, {x:"100%"}, {x:"0%"});

			} else {

				TweenMax.fromTo(curPage, speed, {x:"-100%"}, {x: "0%"});
				TweenMax.fromTo(lastPage, speed, {x:"0%"}, {x:"100%"});
			}

			pageIndex = $(this).index();

			// $("html, body").animate({ scrollTop: 0 }, 600);


			clickNum++;

		}






















	});

});












/*EXPAND MENU INIT*/
$(document).ready(function() {
  var n = $(".navItem").length; // Div count

  var OW = 38; // Div over width
  TweenMax.set($(".navItem"), {
      width: 100 / n + '%'
  });
  $(".navItem").hover(over, out);

  function over() {
      TweenMax.to($(this), 0.0, {
          width: OW + '%'
      });
      TweenMax.to($(this).siblings(), 0.0, {
          width: (100 - OW) / (n - 1) + '%'
      })
  }

  function out() {
      TweenMax.to($(".navItem"), 0.0, {
          width: 100 / n + '%',
          ease: Back.easeOut
      })
  }
});




















//grids






$( document ).ready(function() {


    

    var container = $('.container');
    var containerH = container.height();
    var item = $('.item');
    var itemL = $('.item').length;



    var itemNum = Math.floor( 1 / (item.width() / window.innerWidth) );

    item.each(function( index ) {
      
    });


    var itemPY = item.offset().top; //get the offset top of the element
    var scrollY = $(window).scrollTop();
    var curentItemPY = itemPY - scrollY;




    var lastScrollTop = 0;

    TweenMax.set(item, { y:curentItemPY,});

    alert(itemPY);




    $(window).scroll(function() {

        curentItemPY = itemPY - $(window).scrollTop();
        
        itemNum = Math.floor( 1 / (item.width() / window.innerWidth) );

        var gridDelay = 0.001;

        var tween;


        console.log(curentItemPY + "curentItemPY");




        st = $(this).scrollTop();

        if(st > lastScrollTop) {

            tween = TweenMax.staggerTo(item, 0.3, {
                y:curentItemPY, 
                cycle:{
                    delay:function(index){
                        return index / 50;
                    }
                }
            }, gridDelay );                 

            
        }



        else {

            tween = TweenMax.staggerTo(item, 0.3, {
                y:curentItemPY, 
                cycle:{
                    delay:function(index){
                        return (itemL - 1 - index)/50;
                    }
                }
            }, gridDelay );

        }

        lastScrollTop = st;

    });
















    var windowH = window.innerHeight;

    console.log(windowH);

    item.click(function(){

        $(this).css( "background-color","#2A5A8A" );
        $(this).siblings().css( "background-color","#9F62C3" );

        var itemPrev = $(this).prevAll();
        var itemNext = $(this).nextAll();

        console.log( itemPrev.length);
        console.log( itemNext.length);



        //TweenMax.to($( this ).siblings(), 0.5, {scale:0, opacity:0,onComplete:hiddenItem} );


        TweenMax.staggerTo(itemPrev, 1.2, {top: -windowH,},0.03 );
        TweenMax.staggerTo(itemNext, 1.2, {top: windowH,},0.03 );

        //TweenMax.to($( this ), 0.5, {top:0, width:"100%","height":"100vh",delay:0.6} );

        function hiddenItem() {
            $( this ).siblings().css( "dispaly","none" );
        }












        //alert(this);
    });








});





