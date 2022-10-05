const csv = require('csv-parser');
const fs = require('fs');
const DJShows = [];

fs.createReadStream('Schedule.csv')
    .pipe(csv({}))
    .on('data', (data) => DJShows.push(data))
    .on('end', () => {
        console.log(DJShows);
    });


var refreshMins = 5;
var msPerMin = 1000*60;





