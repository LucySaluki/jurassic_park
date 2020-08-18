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
    dino2 = new Dinosaur("Velociraptor", "carnivore",150);
    dino3 = new Dinosaur("Tricerotops","herbivore",60);
    dino4 = new Dinosaur("Heterodontosaurus",'ominvore',10)
    dino5 = new Dinosaur("Velociraptor", "carnivore",100);
    dino6 = new Dinosaur("Brontosaurus","herbivore",80);
    park = new Park("Jurassic Park",20,dinosaurs);
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    park.addDinosaur(dino4);
    park.addDinosaur(dino5);
  })

  it('should have a name', function() {
      assert.strictEqual("Jurassic Park",park.name);
  });

  it('should have a ticket price', function() {
      assert.strictEqual(20,park.ticket_price);
  });

  it('should have a collection of dinosaurs', function() {
      const dinos = park.dinosaurs.length;
      assert.strictEqual(5,dinos);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dino6);
    const dinos = park.dinosaurs.length;
    assert.strictEqual(6,dinos);
});

  it('should be able to remove a dinosaur from its collection', function(){
    park.dinosaurs.pop();
    const dinos = park.dinosaurs.length;
    assert.strictEqual(4,dinos); 
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
      const dino = park.popularDinosaur();
      assert.strictEqual( "Velociraptor",dino);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    const velo = park.allDinosaurs("Velociraptor");
    assert.strictEqual( 2,velo.length);
  });
  it('should be able to calculate the total number of visitors per day', function () {
    const total = park.dailyVisitors();
    assert.strictEqual(360, total);
  });

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
