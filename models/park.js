const Park = function (name, ticket_price,dinosaurs){
    this.name = name;
    this.ticket_price = ticket_price;
    this.dinosaurs = [];
}

Park.prototype.addDinosaur = function(dinosaur) {
    this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur= function(dinosaur){
    const index = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(index,1);
}

Park.prototype.popularDinosaur = function() {
    let guestCount=0;
    let popularDino = "";
    for (const dinosaur of this.dinosaurs) {
        if (dinosaur.guestsAttractedPerDay > guestCount) {
            guestCount=dinosaur.guestsAttractedPerDay;
            popularDino = dinosaur.species;
        }
        
    } return popularDino;
}

Park.prototype.allDinosaurs = function(species) {
    const allDinos = [];

    for (let dinosaur of this.dinosaurs) {
        if (dinosaur.species === species) {
            allDinos.push(dinosaur);
        }

    } return allDinos;
}

Park.prototype.dailyVisitors = function(){
    let total =0;

    for(const dinosaur of this.dinosaurs){
        total += dinosaur.guestsAttractedPerDay;
    }
    return total;
}

Park.prototype.yearlyVisitors = function(){
    return this.dailyVisitors() * 365;
}

Park.prototype.yearlyRevenue = function(){
    let dailyRevenue =0;

    for(const dinosaur of this.dinosaurs){
        dailyRevenue += dinosaur.guestsAttractedPerDay * this.ticket_price;
    }
    return dailyRevenue * 365;
}

Park.prototype.removeDangerDinosaur = function(species){
    const safeDinos = [];

    for (const dinosaur of this.dinosaurs){
        if (dinosaur.species !== species){
            safeDinos.push(dinosaur);
        }
    } this.dinosaurs= safeDinos;
}

Park.prototype.altRemoveDinosaurs = function(species){
    const toRemove  = this.allDinosaurs(species);

    for (const dino of toRemove) {
        this.removeDinosaur(dino);
    }
}


Park.prototype.countDiet = function(){
    let dinoDiet={};
    let carni = 0;
    let herb = 0;
    let omni = 0;

    for (const dinosaur of this.dinosaurs) {
        if (dinosaur.diet ==="carnivore") {
            carni += 1; 
        } 
        else if (dinosaur.diet === "herbivore") {
            herb += 1; 
        }
        else {
            omni +=1;
        }
    } dinoDiet.carnivore = carni;
    dinoDiet.herbivore=herb;
    dinoDiet.ominvore = omni;
    return dinoDiet;
}

Park.prototype.altCountDiet = function (){
    const dinosByDiet = {};

    for (const dino of this.dinosaurs){
        if(dinosByDiet[dino.diet]){
            dinosByDiet[dino.diet] += 1;
        } else {
            dinosByDiet[dino.diet]=1;
        }
} return dinosByDiet;
}

module.exports = Park;

