var refreshMins = 5;
var msPerMin = 1000*60;

console.log(DJShows[1].get(ShowName));

function getDJ() {
    var now = new Date();
    for (i = 0; i < DJShows.length; ++i) {
        startSplit = DJShows[i].Start.split(":")
        endSplit = DJShows[i].End.split(":")

    }

}

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("demo").innerHTML = myObj.currentDJ;
  }
};

function callApi() {
  xmlhttp.open("GET", "https://us-central1-wvum-d6fb8.cloudfunctions.net/getDJ", true);
  xmlhttp.send();
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("State Ready")
  window.setInterval(function () {
    callApi();
  }, refreshMins * msPerMin);
  callApi();
});





