const Park = function (name, ticket_price,dinosaurs){
    this.name = name;
    this.ticket_price = ticket_price;
    this.dinosaurs = [];
}

Park.prototype.addDinosaur = function(dinosaur) {
    this.dinosaurs.push(dinosaur);
}

Park.prototype.popularDinosaur = function() {
    let guestCount=0;
    
    for (const dinosaur of this.dinosaurs) {
        if (dinosaur.guestsAttractedPerDay > guestCount) {
            guestCount=dinosaur.guestsAttractedPerDay;
            popularDino = dinosaur.species;
        }
        
    } return popularDino;
}

Park.prototype.allDinosaurs = function(species) {
    let allDinos = [];

    for (const dinosaur of this.dinosaurs) {
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

Park.prototype.yearlyRevenue = function(){
    let dailyRevenue =0;

    for(const dinosaur of this.dinosaurs){
        dailyRevenue += dinosaur.guestsAttractedPerDay * this.ticket_price;
    }
    return dailyRevenue * 365;
}

Park.prototype.removeDinosaur = function(species){
    let safeDinos = [];

    for (const dinosaur of this.dinosaurs){
        if (dinosaur.species !== species){
            safeDinos.push(dinosaur);
        }
    } this.dinosaurs= safeDinos;
}
module.exports = Park;

