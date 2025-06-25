class User {
	protected _courseCount = 1;

	city: string = '';
	private readonly country: string = 'The United States';
	constructor(
		public email: string,
		public name: string,
		private userId: string
	) {}

	private deleteToken() {
		console.log('Token deleted');
	}

	get getAppleEmail(): string {
		return `apple.${this.email}`;
	}

	get courseCount(): number {
		return this._courseCount;
	}

	set courseCount(courseNum) {
		if (courseNum <= 1) {
			throw new Error('Course Count should be more than 1');
		}
		this._courseCount = courseNum;
	}
}

class SubUser extends User {
	isFamily: boolean = true;
	changeCourseCount() {
		this._courseCount = 4;
	}
}

const jim = new User('j@j.com', 'jim', 'jimmy');
jim.city = 'Orange';
