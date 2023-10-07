class Animal { // Superclass Animal
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal { // Subclass Dog Inherits Animal
    bark() { // Dog class implements a new method
        console.log('Woof! Woof!');
    }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();

// dog object can both move or bark
// the Dog class inherits all the attributes and
// methods from the superclass Animal