var refreshMins = 5;
var msPerMin = 1000 * 60;

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

// document.addEventListener('load', () => {
//     const params = (new URL("https://www.wvum.org/djs")).searchParams;
//     const djName = params.get('submit');
//     document.getElementById('demo').innerHTML = djName;
//     window.setInterval(function () {
//         const params = (new URL("https://www.wvum.org/djs")).searchParams;
//         const djName = params.get('submit');
//         document.getElementById('demo').innerHTML = djName;
//     }, refreshMins * msPerMin);
    
//   });





