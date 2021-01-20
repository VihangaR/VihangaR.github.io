$(document).ready(function () {
    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return elemBottom <= docViewBottom && elemTop >= docViewTop;
    }
    $(window).scroll(function(){
        // if(isScrolledIntoView($("#coffee-section")) == true) {
        //     $("#cof").addClass("animate__pulse");
        // }
        if (isScrolledIntoView($(".about")) == true) {
            $(".about").removeClass("hide");
            $(".about").addClass("animate__fadeInUp")
        }
        if (isScrolledIntoView($(".about-desc")) == true) {
            $(".about-desc").removeClass("hide");
            $(".about-desc").addClass("animate__fadeInUp")
        }
        if (isScrolledIntoView($(".projects")) == true) {
            $(".projects").removeClass("hide");
            $(".projects").addClass("animate__fadeInUp")
        }
        if (isScrolledIntoView($(".tech")) == true) {
            $(".tech").removeClass("hide");
            $(".tech").addClass("animate__fadeInUp")
            $(".tech-logos").removeClass("hide");
            $(".tech-logos").addClass("animate__fadeInUp")
        }
        if (isScrolledIntoView($("#proj-1-title")) == true) {
            $("#proj-1").removeClass("hide");
            $("#proj-1").addClass("animate__fadeInLeft")
        }
        if (isScrolledIntoView($("#proj-2-title")) == true) {
            $("#proj-2").removeClass("hide");
            $("#proj-2").addClass("animate__fadeInLeft")
        }
        if (isScrolledIntoView($("#proj-3-title")) == true) {
            $("#proj-3").removeClass("hide");
            $("#proj-3").addClass("animate__fadeInLeft")
        }

    });
    $("#expand-chirp").click(function(){
        $("#chirp-desc-toggle").slideToggle();
        $(this).text(function(i, text){
            return text === "Show more..." ? "Show less" : "Show more...";
        })
    });
    $("#expand-shell").click(function(){
        $("#shell-desc-toggle").slideToggle();
        $(this).text(function(i, text){
            return text === "Show more..." ? "Show less" : "Show more...";
        })
    });
    $("#chirp-modal-trigger").click(function(){
        $("#chirp-modal").addClass("is-active");
        $("html").addClass("is-clipped");
    });
    $("#shell-modal-trigger").click(function(){
        $("#shell-modal").addClass("is-active");
        $("html").addClass("is-clipped");
    });
    $("#blog-modal-trigger").click(function(){
        $("#blog-modal").addClass("is-active");
        $("html").addClass("is-clipped");
    });
    $(".modal-close, .modal-background").click(function(){
        $(".modal").removeClass("is-active");
        $("html").removeClass("is-clipped");
    })
});