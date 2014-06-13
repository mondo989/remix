// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


$('.circle').on("click", function(){
    $(".demo-row-2").show();
});



$('#begin-contact').on("click", function (){
    $('#begin-contact').hide();
    $("#contact").show();
    
});

// This allows for the nav to be clicked and enabling the div that's hidden.
$('#nav-contact').on("click", function (){
     $("#contact").show();
     $('#begin-contact').hide();
});


// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});


//Scrolll button on bottom makes animation appear
$("#transform").on("click", function (){
    $('#lion').hide("slow");
});

// The see more button clicked makes contact appear
$(".see-more-span").on("click", function () {
    $(".contact-button-span").show("slow");
    $('.see-more-span').hide ("fast") ;
});

$(".contact-button-span").on("click", function () {
     $("#contact").show("slow");
     $('#begin-contact').hide();
      $(".contact-button-span").hide();
      $(".circle").hide();
});