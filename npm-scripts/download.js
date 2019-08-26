var request = require('request');
var fs = require('fs');

// var ui5Version = '1.44.12';
var ui5Version = '1.68.1';

request('https://sapui5.hana.ondemand.com/' + ui5Version + '/test-resources/sap/m/designtime/api.json', { json: true }, (error, response, body) => {
  if (error) { return console.log(error); }
    // console.log(body);
    fs.writeFile('data/' + ui5Version + '-api.json', JSON.stringify(body), 'utf8', function (error) {
        if (error) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(error);
        }
        console.log("JSON file has been saved.");
    });
});

