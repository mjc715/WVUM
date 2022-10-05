var fs = require('fs');
var parse = require('csv-parse');

var refreshMins = 5;
var msPerMin = 1000*60;

function readCSV() {
    let entries = [];
    let count = 0;

    fs.createReadStream('Schedule.csv')
        .pipe(parse({delimiter: ',', from_line: 2}))
        .on('data', function(row) {
            count++;
            entries.push(new Show(row[0], row[1],row[2],row[3],row[4],row[5],row[6]))

            if (count % 10 == 0) {
                processEntries(entries);
                count = 0;
                entries = [];
            }
        })
        .on('end', function () {
            processEntries(entries);
        });

}

function processEntries(entries) {
    console.log(entries[0].Id + "  to " + entries[entries.length - 1].Id);
}

class Show {
    constructor(showName, weekday, start, end, DJs, biweeklyEven, biweeklyOdd )
    ShowName = showName;
    Weekday = weekday;
    Start = start;
    End = end;
    DJS = DJs;
    BiweeklyEven = biweeklyEven;
    BiweeklyOdd = biweeklyOdd;


}

readCSV();
for (i = 0; i < entries.length; ++i) {
    print(entries[i].ShowName)
}

