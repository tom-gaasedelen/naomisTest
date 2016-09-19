$(function (){

  $('.floater').mouseover(function() {
    $('#large').slideToggle();
    $('#small').slideToggle();
    $('.everything').prepend("<div class=bubble>haha<div>")


  });




}) //end jquery init
