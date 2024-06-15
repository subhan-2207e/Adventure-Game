import inquirer from "inquirer";
class player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelincrease() {
        this.fuel = 100;
    }
}
class ooponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel = -25;
        this.fuel = fuel;
    }
}
let Player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Enter your name :-",
    },
]);
// console.log(Player.name)
let Ooponent = await inquirer.prompt([
    {
        name: "Select",
        type: "list",
        message: "Select your Ooponent",
        choices: ["Seleton", "Zombie", "Assassin"],
    },
]);
// console.log(Ooponent.Select);
let p1 = new player(Player.name);
let o1 = new player(Ooponent.Select);
do {
    if (Ooponent.Select === "Seleton") {
        let ask = await inquirer.prompt([
            {
                name: "Opt",
                type: "list",
                message: "What would like to do ?",
                choices: ["Attack", "Drink portion", "Run for the life...."]
            }
        ]);
        if (ask.Opt === "Attack") {
            let number = Math.floor(Math.random() * 2);
            if (number > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel} `);
                console.log(`${o1.name} fuel is ${o1.fuel} `);
                if (p1.fuel <= 0) {
                    console.log("You loose, better luck next time");
                    process.exit();
                }
            }
            if (number <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel} `);
                console.log(`${o1.name} fuel is ${o1.fuel} `);
                if (o1.fuel <= 0) {
                    console.log("You Win");
                    process.exit();
                }
            }
        }
        if (ask.Opt === "Drink portion") {
            p1.fuelincrease();
            console.log(`you drink health protion your fuel is ${p1.fuel}`);
        }
        if (ask.Opt === "Run for the life....") {
            p1.fuelincrease();
            console.log("You loose, better luck next time");
            process.exit();
        }
    }
    if (Ooponent.Select === "Zombie") {
        let ask = await inquirer.prompt([
            {
                name: "Opt",
                type: "list",
                message: "What would like to do ?",
                choices: ["Attack", "Drink portion", "Run for the life...."]
            }
        ]);
        if (ask.Opt === "Attack") {
            let number = Math.floor(Math.random() * 2);
            if (number > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel} `);
                console.log(`${o1.name} fuel is ${o1.fuel} `);
                if (p1.fuel <= 0) {
                    console.log("You loose, better luck next time");
                    process.exit();
                }
            }
            if (number <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel} `);
                console.log(`${o1.name} fuel is ${o1.fuel} `);
                if (o1.fuel <= 0) {
                    console.log("You Win");
                    process.exit();
                }
            }
        }
        if (ask.Opt === "Drink portion") {
            p1.fuelincrease();
            console.log(`you drink health protion your fuel is ${p1.fuel}`);
        }
        if (ask.Opt === "Run for the life....") {
            p1.fuelincrease();
            console.log("You loose, better luck next time");
            process.exit();
        }
    }
    if (Ooponent.Select === "Assassin") {
        let ask = await inquirer.prompt([
            {
                name: "Opt",
                type: "list",
                message: "What would like to do ?",
                choices: ["Attack", "Drink portion", "Run for the life...."]
            }
        ]);
        if (ask.Opt === "Attack") {
            let number = Math.floor(Math.random() * 2);
            if (number > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel} `);
                console.log(`${o1.name} fuel is ${o1.fuel} `);
                if (p1.fuel <= 0) {
                    console.log("You loose, better luck next time");
                    process.exit();
                }
            }
            if (number <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel} `);
                console.log(`${o1.name} fuel is ${o1.fuel} `);
                if (o1.fuel <= 0) {
                    console.log("You Win");
                    process.exit();
                }
            }
        }
        if (ask.Opt === "Drink portion") {
            p1.fuelincrease();
            console.log(`you drink health protion your fuel is ${p1.fuel}`);
        }
        if (ask.Opt === "Run for the life....") {
            p1.fuelincrease();
            console.log("You loose, better luck next time");
            process.exit();
        }
    }
} while (true);
