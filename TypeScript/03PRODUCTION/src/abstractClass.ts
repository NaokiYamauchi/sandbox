abstract class TakePhoto {
	constructor(public cameraMode: string, public filter: string) {}

	abstract getSepia(): void;
	getReelTime(): number {
		//some complex calculation
		return 9;
	}
}

// const jm = new TakePhoto('test', 'test');

class Snap extends TakePhoto {
	constructor(
		public cameraMode: string,
		public filter: string,
		public burst: number
	) {
		super(cameraMode, filter);
	}

	getSepia(): void {
		console.log('Sepia');
	}
}
