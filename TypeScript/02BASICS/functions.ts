function addTwo(num: number): number {
	return num + 2;
}

function getUpper(val: string) {
	return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean = false) {}

addTwo(5);
getUpper('hello');

function getValue(myVal: number) {
	if (myVal > 5) {
		return true;
	}
	return '200 OK';
}

const getHello = (s: string): string => {
	return '';
};

const heros = ['thor', 'spiderman', 'ironman'];

heros.map((hero): string => {
	return `hero is ${hero}`;
});

function consoleError(err: string): void {
	console.log(err);
}

function handleError(err: string): never {
	throw new Error(err);
}
