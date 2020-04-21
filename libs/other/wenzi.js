


$(function() {
    var a_idx = 0;
    jQuery(document).ready(function($) {
        $("body").click(function(e) {
            // var a = new Array("子（鼠）","丑（牛）","寅（虎）","卯（兔）","辰（龙）","巳（蛇）","午（马）","未（羊）","申（猴）","酉（鸡）","戌（狗）","亥（猪）");
            var a = new Array("❤自由❤","❤富强❤","❤民主❤","❤友善❤","❤文明❤","❤自由❤","❤平等❤","❤法制❤","申（猴）","❤爱国❤","❤诚信❤","❤敬业❤");
            var $i = $("<span></span>").text(a[a_idx]);
            a_idx = (a_idx + 1) % a.length;
            var x = e.pageX
              , y = e.pageY; 
            $i.css({
                "z-index": 999999999,
                "top": y - 20,
                "left": x,
                "position": "absolute",
                "font-weight": "bold",
                "color": "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"
            });
            $("body").append($i);
            $i.animate({
                "top": y - 180,
                "opacity": 0
            }, 1500, function() {
                $i.remove();
            });
        });
    });
});
