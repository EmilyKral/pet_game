var prompt = require("prompt-sync")();
// npm install prompt-sync

class Pet {
	constructor(name, happiness = 5, hungerLevel = 5) {
		this.name = name;
		this.happiness = happiness;
		this.hungerLevel = hungerLevel;
	}

	playWith() {
		if (this.happiness === 10) {
			console.log(`${this.name} is very tired from playing with you so much! They need a break.\n`);
		} else if (this.hungerLevel === 10) {
			console.log(`${this.name} doesn't have the energy to play right now! They need some food!\n`);
		} else {
			this.happiness++;
			this.hungerLevel++;
			console.log(`${this.name} is very pleased to play.\n`);
		}
	}

	feed() {
		if (this.hungerLevel === 0) {
			console.log(`${this.name} is full, they would prefer to do something else now.\n`);
		} else {
			this.hungerLevel--;
			console.log(`${this.name} really appreciates the food!\n`);
		}
	}

	leaveAlone() {
		if (this.happiness === 0) {
			console.log(`Please don't leave ${this.name} alone! They are very sad and want to play!\n`);
		} else if (this.hungerLevel === 10) {
			console.log(`Please don't leave ${this.name} alone! They are very hungry!\n`);
		} else {
			console.log(`\n \n \n \n \n \n${this.name} comes to find you.\n`);
			this.hungerLevel++;
			this.happiness -= 2;
		}
	}

	getHappiness() {
		if (this.happiness < 3) {
			return `${this.name} is sad.`;
		} else if (this.happiness <= 7) {
			return `${this.name} is doing fine.`;
		} else {
			return `${this.name} is really happy!`;
		}
	}

	getHungerLevel() {
		if (this.hungerLevel <= 4) {
			return `${this.name} is not hungry at all.`;
		} else if (this.hungerLevel <= 8) {
			return `${this.name} might need some food soon.`;
		} else {
			return `${this.name} is very hungry, please feed them!`;
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
	let count = 0;
	let action;
	while (!done) {
		if (count === 0) {
			action = prompt(
				`What would you like to do with ${pet.name}? You can play, feed, check on or leave alone. If you want to stop, please type done. `
			);
		} else {
			action = prompt(`What would you like to do with ${pet.name}? `);
		}
		if (action.toLowerCase() === "play") {
			pet.playWith();
		} else if (action.toLowerCase() === "feed") {
			pet.feed();
		} else if (action.toLowerCase() === "check on") {
			let happinessLevel = pet.getHappiness();
			let hungerLevel = pet.getHungerLevel();
			console.log(happinessLevel);
			console.log(hungerLevel + "\n");
			let furtherInfo = prompt(`Would you like to see more information about ${pet.name}? `);
			if (furtherInfo.toLowerCase() === "yes") {
				console.log(
					`Pet name: ${pet.name}, happiness: ${pet.happiness}/10, hunger: ${pet.hungerLevel}/10\n`
				);
			}
		} else if (action.toLowerCase() === "leave alone") {
			pet.leaveAlone();
		} else if (action.toLowerCase() === "done") {
			console.log(`Thanks for playing with ${pet.name} today! Goodbye!`);
			done = true;
		} else {
			console.log(
				"\nPlease enter a valid command. You can play, feed, check on or leave alone. If you want to stop, please type done."
			);
		}
		count++;
	}
}

interactWithPet();
