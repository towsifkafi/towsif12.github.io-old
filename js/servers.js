$(document).ready(function() {
    console.log("%cOwO", "font: 50px sans-serif; font-weight:bold; color:grey;");
    console.log("%cWaccha duin here?", "font: 15px sans-serif; font-weight:bold; color:grey;");
    setInterval(function() {
        $.ajax({
            url: "https://api.mcsrvstat.us/2/play.pixeledgebd.com"
        }).then(function(data) {
            //console.log(data.ip)
            $("#pixeledge").html(`<h2>PixelEdge: </h2><h3>${data.players.online}</h3>`);
        });
        $.ajax({
            url: "https://api.mcsrvstat.us/2/play.minecraftersbd.com"
        }).then(function(data) {
            //console.log(data.ip)
            $("#banglacraft").html(`<h2>BanglaCraft: </h2><h3>${data.players.online}</h3>`);
        });
        $.ajax({
            url: "https://api.mcsrvstat.us/2/play.ultracraftbd.com"
        }).then(function(data) {
            //console.log(data.ip)
            $("#ultracraft").html(`<h2>UltraCraft: </h2><h3>${data.players.online}</h3>`);
        });
    }, 5000)
})