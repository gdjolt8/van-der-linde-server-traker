$("#secret-button").show();
let points = {};
let ajax = $.ajax("https://vdlg-server.onrender.com/points", {
  dataType: 'json',
  async: false
}).done(function(data) {
  points = data;
}).fail(function(e) {
  $(".rankings").attr("class", "failed");
  $(".failed").text("Failed to load rankings");
  console.log(e.statusText);
});

function id(id) {
  return document.getElementById(id);
}

var timesPlayed = 1;
$("#secret-button").click(function() {
  id("funny").play();
  $("#funny").show();
  $("#secret-button").hide();

});

id('funny').addEventListener('ended', () => {
  timesPlayed += 1;
  id("funny").play();
  if (timesPlayed > 2) {
    $("#funny").hide();
  }
}, false);
console.log(points)

for (let i = 0; i < points.length; i++) {
  $(`#rank${points[i]['lvl']}`).append(`<span id=\"${points[i]['name']}\"">${points[i]['name']} - ${points[i]['points']} pt. (lvl ${points[i]['lvl']})</span><br>`);
}

(function() { var link = document.querySelector("link[rel*='icon']") || document.createElement('link'); link.type = 'image/x-icon'; link.rel = 'shortcut icon'; link.href = 'https://ssl.gstatic.com/classroom/favicon.png'; document.title = 'Home'; console.log(document.title); document.getElementsByTagName('head')[0].appendChild(link); })();

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const rndInt = randomIntFromInterval(1, 6);
console.log(rndInt);
