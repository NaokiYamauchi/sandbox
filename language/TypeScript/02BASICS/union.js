var score = 33;
score = 44;
score = '44';
var jim = { name: 'jim', id: 334 };
jim = { username: 'jm', id: 334 };
// function getDbId(id: number | string) {
// 	console.log(`DB id is : ${id}`);
// }
function getDbId(id) {
	if (typeof id === 'string') {
		id.toLowerCase();
	}
}
getDbId(3);
getDbId('3');
// array
var data1 = [1, 2, 3];
var data2 = ['1', '2', '3'];
var data3 = ['1', '2', 3];
var seatAllotment;
seatAllotment = 'aisle';
// seatAllotment = 'crew';
