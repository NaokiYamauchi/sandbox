const scores: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number | string {
	return val;
}

function identityTwo(val: any): any {
	return val;
}

function identityThree<Type>(val: Type): Type {
	return val;
}

identityThree(true);

function identityFour<T>(val: T): T {
	return val;
}

interface Bottle {
	brand: string;
	size: number;
}

// identityFour<Bottle>({ brand: 'jim', size: 500 });

function getSearchProducts<T>(products: T[]): T {
	// do some database operations
	const myIdex = 0;
	return products[myIdex];
}

const getMoreSearchProduct = <T>(products: T[]): T => {
	// do some database operation
	const myIndex = 0;
	return products[myIndex];
};

interface Database {
	connection: string;
	username: string;
	password: string;
}

function generic<T, U extends Database>(valOne: T, valTwo: U): object {
	return {
		valOne,
		valTwo,
	};
}

// generic(3, {});

interface Quiz {
	name: string;
	type: string;
}

interface Course {
	name: string;
	author: string;
	subject: string;
}

class Sellable<T> {
	public cart: T[] = [];

	addToCard(products: T) {
		this.cart.push(products);
	}
}
