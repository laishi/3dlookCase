var csspath = [
"../../incude/fontAwesome/css/font-awesome.min.css",
"../../incude/slinky/css/slinky.css",
"../../incude/highlight/css/default.css",
"../../incude/stickyHeader/css/header.css",
"../common/css/pages.css"
]


var jspath = [
"../../js/jquery-2.2.3.min.js",
"../../js/rd-smoothscroll.min.js",
"../../incude/greensock/TweenMax.min.js",
"../../incude/highlight/js/highlight.pack.js",
"../../incude/slinky/js/slinky.js",
// "../../js/pages.js"
]


for (var i = 0; i < csspath.length; i++) {   

    loadjscssfile(csspath[i], "css", "head");
};



for (var i = 0; i < jspath.length; i++) {  

    loadjscssfile(jspath[i], "js", "head");
};






function loadjscssfile(filename, filetype, pos) {
    var fileref;

    if (filetype === "js") { //if filename is a external JavaScript file
        fileref = document.createElement("script");
        fileref.setAttribute("type", "text/javascript");
        fileref.setAttribute("src", filename);
    }
    else if (filetype === "css") { //if filename is an external CSS file
        fileref = document.createElement("link");
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", filename);
    }

    if (fileref) {
        document.getElementsByTagName(pos)[0].appendChild(fileref);
    }
}



window.onload = function() {

    $('pre code')
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });

    var winTop = 0;

    $(window).scroll(function() {

        winTop = $(window).scrollTop();

        if (winTop >= 100) {

            TweenMax.to($("header"), 0.3, {height: 60,}, 0.1);

            TweenMax.to($("header").find(".gridImg"), 0.3, { scale: 0 } );
            TweenMax.to($("header").find(".tagTitle"), 0.3, { y: -260 } );

        } else {

            TweenMax.to($("header").find(".gridImg"), 0.3, { scale: 1 } );

            TweenMax.to($("header"), 0.3, { height: 320, }, 0.1);
            TweenMax.to($("header").find(".tagTitle"), 0.3, { y: 0 } );
        }
    });   
} 

