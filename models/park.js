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

module.exports = Park;