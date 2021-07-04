class Game{
    constructor(){}

    getState() {

        var gameStateRef = database.ref('gameState');

        gameStateRef.on("value", function (data) {

            gameState = data.val();

        })

    }

    update(state) {

        database.ref('/').update({

            gameState: state

        });

    }

    async start() {

            if (gameState === 0) {

                player = new Player();

                var playerCountRef = await database.ref('playerCount').once("value");

                if (playerCountRef.exists()) {

                    playerCount = playerCountRef.val();

                    player.getCount();

                    form = new Button();
                    form.display();


                }
            }
        }


        play(){
            allPlayers=[player1,player2];
            Player.getPlayerInfo();

            var x=300;
            var y=200;
            var ScoreTextY=20;
            var index = 1;

            form.hide();
            
            for(var plr in allPlayers){

                index+=1;
                ScoreTextY+=20;

                x+=600;
                console.log(allPlayers[index-1]);


            }





        }

        end(){
           //write code..

         }

    }