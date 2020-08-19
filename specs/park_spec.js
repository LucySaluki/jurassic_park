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
    dino4 = new Dinosaur("Heterodontosaurus",'omnivore',10)
    dino5 = new Dinosaur("Velociraptor", "carnivore",100);
    dino6 = new Dinosaur("Brontosaurus","herbivore",80);
    park = new Park("Jurassic Park",200,dinosaurs);
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
      assert.strictEqual(200,park.ticket_price);
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
    park.removeDinosaur("Tricerotops");
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

  it('should be able to calculate the total number of visitors per year', function() {
    const yearTotal = park.yearlyVisitors();
    assert.strictEqual(131400,yearTotal);
  });

  it('should be able to calculate total revenue for one year', function() {
    const yearRevenue = park.yearlyRevenue();
    assert.strictEqual(26280000,yearRevenue);
  });

  it('should be able to remove all dinosaurs of a particular species Velociraptor', function() {
    const safeDinos=park.removeDangerDinosaur("Velociraptor");
    const numDinos = park.dinosaurs.length;
    assert.strictEqual(3,numDinos)
  });

  it('should be able to remove all dinosaurs of a particular species Tricerotops', function() {
    const safeDinos=park.removeDangerDinosaur("Tricerotops");
    const numDinos = park.dinosaurs.length;
    assert.strictEqual(4,numDinos)
  });

  it('should be able to count all diets', function() {
    const diet = park.altCountDiet();
    assert.strictEqual(3,diet.carnivore)
  });
});
