const User = {
	name: 'Jim',
	email: 'jim@example.com',
	isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

let newUser = { name: 'Jim', isPaid: false, email: 'jim@example.com' };

createUser(newUser);

function createCourse(): { name: string; price: number } {
	return { name: 'reactjs', price: 397 };
}
