$(document).ready(function () {

    $('.menu').width($('#menucontainer').width());
    $(window).resize(function () {
        $('.menu').width($('#menucontainer').width());
    });


  $(".effecthidden").hover(function(){
    console.log("YYY");
    $(this).find("img").each(function(){
      k = $(this).hasClass("hidden")
      if(k){
        $(this).removeClass("hidden");
      }
      else{
        $(this).addClass("hidden");
      }
    })




$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});



    
  });

});


