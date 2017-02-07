$(document).ready(function () {
    $('.menu').width($('#menucontainer').width());
    console.log("AAAA");
    $(window).resize(function () {
        $('.menu').width($('#menucontainer').width());
    });
});

console.log("BBBB");