const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let dino1;
  let dino2;
  let dino3;
  let dino4;
  let dinosaurs = [];
  let park;

  beforeEach(function () {
    dino1 = new Dinosaur("Tyrannosaur Rex", "carnivore",40);
    dino2 = new Dinosaur("Velociraptor", "carnivore",100);
    dino3 = new Dinosaur("Tricerotops","herbivore",60);
    dino4 = new Dinosaur("Heterodontosaurus",'ominvore',10)
    park = new Park("Jurassic Park",20, dinosaurs);
  })

  it('should have a name', function() {
        assert.strictEqual("Jurassic Park",park.name);
  });

  it('should have a ticket price', function() {
        assert.strictEqual(20,park.ticket_price);
  });

  it('should have a collection of dinosaurs');

  it('should be able to add a dinosaur to its collection');

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
