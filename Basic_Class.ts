class Greeter { // Implements a Greeter Class
    greeting: string; // Public attribute

    constructor(message: string) { // Constructor is called when Class is initialized
        this.greeting = message;
    }

    greet() { // Greet Method
        console.log(`Hello, ${this.greeting}`);
    }
}

const newGreeter = new Greeter("World!"); // Creates an object of the Greeter Class
newGreeter.greet(); // Calls the greet() method of the object