let score: number | string = 33;

score = 44;
score = '44';

type User = {
	name: string;
	id: number;
};

type Admin = {
	username: string;
	id: number;
};

let jim: User | Admin = { name: 'jim', id: 334 };

jim = { username: 'jm', id: 334 };

// function getDbId(id: number | string) {
// 	console.log(`DB id is : ${id}`);
// }

function getDbId(id: number | string) {
	if (typeof id === 'string') {
		id.toLowerCase();
	}
}

getDbId(3);
getDbId('3');

// array
const data1: number[] = [1, 2, 3];
const data2: string[] = ['1', '2', '3'];
const data3: (string | number)[] = ['1', '2', 3];

let seatAllotment: 'aisle' | 'middle' | 'window';

seatAllotment = 'aisle';
// seatAllotment = 'crew';
