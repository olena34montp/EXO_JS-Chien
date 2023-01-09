class Dog {
    quantite = 0;
    constructor(name, age, specie) {
        this.name = name;
        this.age = age;
        this.specie = specie;
    }
    barks(){
        return `${this.name}: - Wouf, wouf!`;
    }
    eats(quantite){
        this.quantite += quantite;
    }
    total(){
        return this.quantite;
    }
}

let richard = new Dog('Richard', 3, 'Chow Chow');
richard.eats(3);
richard.eats(6);
console.log(richard.barks());

// console.log(richard.barks());
console.log(richard.total());