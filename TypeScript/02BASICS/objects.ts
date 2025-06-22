const User = {
	name: 'Jim',
	email: 'jim@example.com',
	isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

let newUser = { name: 'Jim', isPaid: false, email: 'jim@example.com' };

createUser(newUser);

function createCourse(): { name: string; price: number } {
	return { name: 'ReactJS', price: 397 };
}

type User = {
	readonly _id: string;
	name: string;
	email: string;
	isActive: boolean;
	creditCard?: number;
};

let myUser: User = {
	_id: '12345',
	name: 'h',
	email: 'h@h.com',
	isActive: false,
};

type cardNumber = {
	cardNumber: number;
};

type cardName = {
	cardName: string;
};

type cardDate = {
	cardDate: string;
};

type cardDetails = cardNumber &
	cardName &
	cardDate & {
		cvv: number;
	};

myUser.email = 'h@alt.com';
// myUser._id = '6789';
