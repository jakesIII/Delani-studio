var work = ["work4", "work3", "work2", "work1", "work5", "work6", "work7", "work8"]

$(document).ready(function(){
    $("div.design").click(function(){
        $(".swapin").toggle();
        $(".swapout").toggle();
    });

    $("div.development").click(function(){
        $(".swapin1").toggle();
        $(".swapout1").toggle();
    });

    $("div.product").click(function(){
        $(".swapin2").toggle();
        $(".swapout2").toggle();
    });

    $("form").submit(function(){
        var name = $("input#user").val();
        var email = $("input#email").val();
        var text = $("input#textarea").val();

        alert(name + ", Thank you so much for you contacting us.");

        event.preventDefault();
    });

    $(".portfolio").hover(function(){
        $(".work").animate({
            opacity: '0.4',
        });
    });
});