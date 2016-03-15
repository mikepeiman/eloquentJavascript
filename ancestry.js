//import * as lib from 'ANCESTRY_FILE';

var ANCESTRY_FILE = (function() {
        var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "ANCESTRY_FILE.json",
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
    })();
// This makes sure the data is exported in node.js —
// `require(./path/to/ancestry.js)` will get you the array.
if (typeof module != "undefined" && module.exports)
  module.exports = ANCESTRY_FILE;

var ancestry = JSON.parse(ANCESTRY_FILE);
console.log(ancestry.length);

