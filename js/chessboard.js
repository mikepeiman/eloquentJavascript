var white = ' ';
var black = '#';
var size = 8;
var row1 = '', row2 = '';
var rows = 0;
var columns1 = 0;
var columns2 = 0;

var chessboard = function(size) {
	for (rows; rows < size; rows += 2) {

		for (columns1; columns1 < size; columns1 += 2) {
			row1 += white + black; 
		}
      	for (columns2; columns2 < size; columns2 += 2) {
			row2 += black + white; 
		}
		console.log(row1 + '\n' + row2 + '\n');
}
}
chessboard(8);