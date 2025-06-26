const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

interface HandGenerator {
	generate(): number;
}

class RandomHandGenerator implements HandGenerator {
	generate(): number {
		return Math.floor(Math.random() * 3);
	}

	generateArray(): number[] {
		return [];
	}
}

class Roshambo {
	play(handGenerator: HandGenerator) {
		const computerHand = handGenerator.generate();

		console.log(`computerHand = ${computerHand}`);
	}
}

const roshambo = new Roshambo();

const generator = new RandomHandGenerator();
roshambo.play(generator);

class RockHandGenerator implements HandGenerator {
	generate(): number {
		return ROCK;
	}
}

const generator2 = new RockHandGenerator();
roshambo.play(generator2);
