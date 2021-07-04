class Button{
    constructor(){

       this.input = createInput("Please Enter Your Name");

       this.button = createButton('Play');

       this.greeting = createElement('h2');

       this.title = createElement('h2');

       this.reset = createButton('Reset');

       this.instructions = createElement('h3');
       this.instructions1 = createElement('h3');
       this.instructions2 = createElement('h3');
       this.instructions3 = createElement('h3');
       this.instructions4 = createElement('h3');
       this.instructions5 = createElement('h3');
       this.instructions6 = createElement('h3');
       this.instructions7 = createElement('h3');

      // this.instructionsOp = createElement('h4');

    }

    hide() {

        this.greeting.hide();
        this.title.hide();
        this.input.hide();
        this.button.hide();       

        this.instructions.hide();
        this.instructions1.hide();
        this.instructions2.hide();
        this.instructions3.hide();
        this.instructions4.hide();
        this.instructions5.hide();
        this.instructions6.hide();
        this.instructions7.hide();
        
    }

    display() {

        this.title.html("The Ultimate Balloon Buster!");
        this.title.position(200, -70);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');

        this.input.position(560,410);
        this.input.style('width', '200px');
        this.input.style('height', '50px');
        this.input.style('background', 'skyblue');

        this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'skyblue');

        this.reset.position(900, 660);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');

        this.instructions.html("Hello player! welcome to the balloon buster! here are the instruction:");
        this.instructions.position(200, 70);

        this.instructions1.html("1. The Score you will get will be there in the balloon.");
        this.instructions1.position(200, 90);
        
        this.instructions2.html("2. If you touch the black balloon you will lose 10 points.");
        this.instructions2.position(200, 110);
        
        this.instructions3.html("3. You have to drag the arrow and release it by pressing the mouse and releasing it to relrease the arrow.");
        this.instructions3.position(200, 130);
        
        this.instructions4.html("4. Then you have to aim in such a way that it hits the balloon. This will dystroy the balloon and give you score.")
        this.instructions4.position(200, 150);
        
        this.instructions5.html("5. You can reattach the arrow by cliking the space bar. ");
        this.instructions5.position(200, 170);
        
        this.instructions6.html("6. The first one to get 200 points will wins the game!");
        this.instructions6.position(200, 190);
        
        this.instructions7.html("7. It is a two player game..");
        this.instructions7.position(200, 210);
             
        this.button.mousePressed(() => {

            this.input.hide();
            this.button.hide();            

            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello And Welcome !" + player.name)
            this.greeting.position(200,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '50px');

        })

        this.reset.mousePressed(() => {

            player.updateCount(0);
            game.update(0);

        });
    
  }
}