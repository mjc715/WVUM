var fs = require('fs');
const { parse } = require('csv-parse');


var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

var refreshMins = 5;
var msPerMin = 1000*60;

function readCSV() {
    
}

class Show {
    constructor(showName, weekday, start, end, DJs, biweeklyEven, biweeklyOdd) {
    this.ShowName = showName;
    this.Weekday = weekday;
    this.Start = start;
    this.End = end;
    this.DJS = DJs;
    this.BiweeklyEven = biweeklyEven;
    this.BiweeklyOdd = biweeklyOdd;
    }
    


}
readCSV();
for (i = 0; i < entries.length; ++i) {
    console.log(entries[i].ShowName);
}

