var score = 0;
$(document).ready(function () {
    
    getNewActive();

    
    
    
})
function start() {
    $("#startScreen").hide();
    $("#gameScreen").show();
}
function clicked(id) {
    if ($("#" + id).hasClass("active")) {
        $("#" + id).removeClass("active");
        score++
        $("#score").text("Score: " + score);
        var currentActive = 0;
        for (var j = 1; j < 25; j++) {
            if ($("#" + j).hasClass("active")) {
                currentActive++
            }
        }
        if (currentActive > 0) {
            var add = Math.round(Math.random() * 2);
        } else {
            var add = Math.round(Math.random() * 2) + 1;
        }

        for (var i = 1; i < (add + 1); i++) {
            getNewActive();
        }
    }
}
function getNewActive() {
        var rand = Math.round(Math.random() * 24);
        console.log(rand);
        var randStr = rand.toString();
        $("#" + randStr).addClass("active");
    }
