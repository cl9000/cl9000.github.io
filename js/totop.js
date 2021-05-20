$(window).scroll(function() {
    // 回到顶部
    // $(window).scrollTop() > $(window).height()*0.5 ? $("#rocket").addClass("show") : $("#rocket").removeClass("show");
    $(window).scrollTop() > $(window).height()*0.5 ? $("#rocket2").addClass("show") : $("#rocket2").removeClass("show");
});

// $("#rocket").click(function() {
//     $("#rocket").addClass("launch");
//     $("html, body").animate({
//         scrollTop: 0
//     }, 1000, function() {
//         $("#rocket").removeClass("show launch");
//     });
//     return false;
// });

$("#rocket2").click(function() {
    $("html, body").animate({
        scrollTop: 0
    }, 800, function() {
        $("#rocket2").removeClass("show");
    });
    return false;
});