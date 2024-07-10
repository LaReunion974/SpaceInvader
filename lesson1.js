/* // un objet ca comprend des propriétés et des méthodes
// une proprièté = variable
// une méthode = fonction qui manipule tes variables
// propriètés : public, private, protected

class Voiture {
  #doors;
  constructor(model) {
    this.model = model;
    this.motor = 1;
    this.wheel = 4;
    this.#doors = 4;
    this.fuel = 0;
    this.speed = 0;
  }

  #shout() {
    console.log("Super ma voiture c'est une " + this.model);
  }
  setFuelled(amountOfMoneyToFillTheTank) {
    console.log("this.fuel", this.fuel);
    this.fuel = amountOfMoneyToFillTheTank;
    console.log("this.fuel", this.fuel);
  }
  getFuel() {
    return this.fuel;
  }
  start() {
    // vérifier l'essence
    this.#shout();
    if (this.fuel === 0) {
      alert("il faut faire le plein");
      return;
    }
    // changer la vitesse de la voiture
    this.speed = 50;
    console.log("voiture a démarré");
  }
  move() {
    this.start();
  }
  stop() {
    if (this.speed >= 0) this.speed = 0;
  }
  turn() {}
  back() {}
  horn() {
    this.start();
  }
  changeNumberOfDoors(num) {
    this.#doors = num;
    console.log("doors", this.#doors);
  }
}

let ferrari = new Voiture("Ferrari");
console.log("voiture1", ferrari);

if (ferrari.getFuel() == 0) ferrari.setFuelled(30);
ferrari.move();
ferrari.changeNumberOfDoors(6);

class Phone {
  screen;
  battery;
  case;
  camera;
  memory;
  definition;

  constructor(weight, height, numberOfCamera = null, memory, definition) {
    this.screen = { weight, height, on: false }; // this.screen = {weight: weight, height: height}
    this.battery = 50;
    this.case = null;
    this.definition = definition;
    this.camera = { numberOfCamera, definition: this.definition };
    this.memory = memory;
  }

  powerON() {
    if (this.battery == 0) {
      console.log("le téléphone n'as plus de batterie");
      return;
    }
    this.screen.on = true;
    if (this.screen.on) {
      console.log("le téléphone est allumé");
      return this.screen.on;
    } else {
      console.log("le téléphone n'as plus de batterie");
      return false;
    }
  }

  takePicture() {
    if (this.powerON()) {
      console.log("tu peux faire une photo");
    } else console.log("tu ne peux pas faire de photo");
  }
  call() {}
  playGame() {}
  powerOFF() {}
  sendMessages() {}
}
let nokia = new Phone(100, 200, 5, 256, 50);

nokia.takePicture();

// variable de types :
// string
// boolean
// number
// null | undefined
// array
// object { weight, height, on: false }

let tab = [];
let tab1 = ["vincent", 48, true, { height: 176, eyes: "brown" }];
let tab2 = [
  { id: 1, name: "vincent", highscore: "25000" },
  { id: 2, name: "alix", highscore: "20205000" },
  { id: 3, name: "sacha", highscore: "500000000" },
  { id: 4, name: "yannick", highscore: "25" },
];


console.log("tab1", tab1.length);
tab.push("jeu");
tab.push({ vie: 10, color: "blue" });
console.log("tab", tab[1].vie, tab[1].color);
console.log(
  "tab2",
  tab2.sort((a, b) => a.name.localeCompare(b.name)),
);

// boucle pour tableau
for (let index = 0; index < tab2.length; index++) {
  const element = tab2[index];
  console.log("element", element.name);
}

// forEach
tab1.forEach((element) => console.log(element));
 */
// object for in, for of

let obj = { id: 1, name: "vincent", highscore: "25000" };

for (const key in obj) {
  if (Object.hasOwnProperty.call(obj, key)) {
    const element = obj[key];
    console.log(element);
  }
}
