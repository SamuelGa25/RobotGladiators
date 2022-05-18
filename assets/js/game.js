
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//developer tools
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

    
var fight = function(enemyName){
    window.alert("Welcome to Robot Gladiators!");

    while(playerHealth > 0 && enemyHealth >0){
        var promptFight = window.prompt("Would you like FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")

        if (promptFight === "fight" || promptFight == "FIGHT"){
        
            //myPlayer Attack 
            enemyHealth = enemyHealth - playerAttack;
            //log in the resulting message
            console.log(playerName +" attacked "+ enemyName+". "+" now has "+enemyHealth+" health remaining");
            
            //enemy's health
            if (enemyHealth <=0){
                window.alert(enemyName +" has died!");
                break;
            }else {
                window.alert(enemyName+" still has "+enemyHealth+ " health left.");

            }

            //Enemy Attack
            playerHealth = playerHealth - enemyAttack;
            //log in the resulting message
            console.log(enemyName +" attacked "+playerName+". "+" now has "+playerHealth+" health remaining");

            //check player's health
            if (playerHealth <= 0){
                window.alert("Your player "+playerName+" is dead!");
                break;

            }else{
                window.alert(playerName+ " still has "+playerHealth+" health left");
            }

        }else if(promptFight === "skip"|| promptFight ==="SKIP"){

            //confirm player wants to skip 
            var confirmSkip = window.confirm("Are you sure you'd like to quit?")

            //if yes(true), leave fight
            if (confirmSkip){
                window.alert(playerName + " has chosen to skip the fight!");
                //subtracting money from playerMoney for skipping 
                playerMoney = playerMoney -10;
                console.log("playerMoney", playerMoney)
                break;

            //if no (false), ask question again
            }else fight(); {
            }

        }else{
            
            window.alert("You need to choose a valid option. Try again!");
        }
    }

};

var endGame = function(){
    //if player is still alive, player wins!
    if (playerHealth >0){
        window.alert("Great job, you've survived the game! You now have a score of "+playerMoney+".");
    }else{
        window.alert("You've lost your robot in battle.");

    }
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm){
        //restart the game
        startGame();
    }else{
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }

};



var startGame = function(){
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i= 0; i < enemyNames.length; i++){

        if (playerHealth > 0){
            //letting the player know what round they are in.
            window.alert("Welcome to Robot Gladiators! Round "+ (i+1));
            //pick new enemy to fight based on the index of the enemyNames array 
            var pickedEnemyName = enemyNames[i];
            //reseting the health 
            enemyHealth = 50;

            //Using a debugger to check what's going on inside.
            //debugger;

            //passing the variable function 
            fight(pickedEnemyName);

        }else{
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    //play again 
    endGame();
};
startGame();



