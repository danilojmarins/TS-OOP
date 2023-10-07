class Animal_ {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal_ {
    constructor(name: string) {
        super(name); // A derived class with constructor must call the super class constructor
    }

    move(distanceInMeters: number = 5) { // Method move() is overrided
        console.log('Slithering...');
        super.move(distanceInMeters);
    }
}

class Horse extends Animal_ {
    constructor(name: string) {
        super(name);
    }

    move(distanceInMeters: number = 45) {
        console.log('Galloping...');
        super.move(distanceInMeters);
    }
}

const sam = new Snake('Sammy the Python');
const tom = new Horse('Tommy the Palomino');

sam.move();
tom.move(30);

// the method move() in the subclassses overrides the move()
// from the superclass, to implement an unique functionality
// specific to each animal

// this method overriding thecninque allows the implementation
// of a core concept of the OOP, that is the POLYMORPHISM