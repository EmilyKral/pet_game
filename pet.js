var prompt = require("prompt-sync")();

class Pet {
	constructor(name, happiness = 5, hungerLevel = 5) {
		this.name = name;
		this.happiness = happiness;
		this.hungerLevel = hungerLevel;
	}

	playWith() {
		if (this.happiness >= 10) {
			console.log(`${this.name} loves playing with you so much`);
		} else {
			this.happiness++;
			console.log(`${this.name} is very pleased to play`);
		}
	}

	feed() {
		if (this.hungerLevel === 0) {
			console.log(`${this.name} is full`);
		} else {
			this.hungerLevel--;
			console.log(`${this.name} really appreciates the food`);
		}
	}

	leaveAlone() {
		if (this.happiness === 0) {
			console.log(
				`Please don't leave ${this.name} alone! They are very sad and would love to play`
			);
		} else if (this.hungerLevel === 10) {
			console.log(`Please don't leave ${this.name} alone! THey are very hungry`);
		} else {
			this.hungerLevel--;
			this.happiness--;
		}
	}

	getHappiness() {
		if (this.happiness < 3) {
			return `${this.name} is sad`;
		} else if (this.happiness < 7) {
			return `${this.name} is doing fine`;
		} else {
			return `${this.name} is really happy!`;
		}
	}

	getHungerLevel() {
		if (this.hungerLevel < 3) {
			return `${this.name} is not hungry at all`;
		} else if (this.happiness < 7) {
			return `${this.name} might need some food soon`;
		} else {
			return `${this.name} is very hungry, please feed them soon!`;
		}
	}
}

function createPet() {
	let name = prompt("What would you like to name your new pet? ");
	let MyPet = new Pet(name);
	return MyPet;
}

function interactWithPet() {
	let pet = createPet();
	let done = false;
	while (!done) {
		let action = prompt(
			`What would you like to do with ${pet.name}? You can play, feed, check on or leave alone. If you want to stop, please type done. `
		);
		if (action === "play") {
			pet.playWith();
		} else if (action === "feed") {
			pet.feed();
		} else if (action === "check on") {
			let happinessLevel = pet.getHappiness();
			let hungerLevel = pet.getHungerLevel();
			console.log(happinessLevel);
			console.log(hungerLevel);
		} else if (action === "done") {
			console.log("Thanks for playing!");
			done = true;
		} else if (action === "leave alone") {
			pet.leaveAlone();
		} else {
			console.log(
				"Please enter a valid command. You can play, feed, check on or leave alone. If you want to stop, please type done. "
			);
		}
	}
}

interactWithPet();
