interface User {
	readonly dbId: number;
	email: string;
	userId: number;
	googleId?: string;
	// startTrial: () => string;
	startTrial(): string;
	getCoupon(couponName: string, value: number): number;
}

interface User {
	githubToken: string;
}

interface Admin extends User {
	role: 'admin' | 'ta' | 'learner';
}

const jim: User = {
	dbId: 12345,
	email: 'j@j.com',
	userId: 123,
	githubToken: 'github',
	startTrial: () => {
		return 'trial started';
	},
	getCoupon: (name: 'welcome10', off: 10) => {
		return 10;
	},
};
