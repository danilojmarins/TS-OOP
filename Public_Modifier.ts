class Animal {
    public name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}.`);
    }
}

const animal = new Animal('GATO');
animal.move(20);
console.log(animal.name);

// animal.name property and animal.move() method
// can be accessed outside of the class,
// because they are marked as PUBLIC.