const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var database;
var gameState = 0;
var playerCount = 0;
var score = 0;

var player1,player2;

var allPlayers;

const NotReq = "Please Enter Your Name";

var player, form, game;

var engine, world;

function preload(){

}
function setup(){
    createCanvas(1200,400);
    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();

    engine = Engine.create();
    world = engine.world;

}
function draw(){
    
    background("pink");
    Engine.update(engine);

    if (playerCount === 2&&gameState===0) {
        game.update(1);
      }
      if (gameState === 1) {
        clear(); 
        game.play();
      }
    
}