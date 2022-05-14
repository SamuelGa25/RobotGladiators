
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
    window.alert("Welcome to Robot Gladiators!")

    var promptFight = window.prompt("Would you like FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")

    if (promptFight === "fight" || promptFight == "FIGHT"){
        
        //myPlayer Attack 
        enemyHealth = enemyHealth - playerAttack;
        //log in the resulting message
        console.log(playerName +" attacked "+ enemyName+". "+" now has "+enemyHealth+" health remaining");
        
        //enemy's health
        if (enemyHealth <=0){
            window.alert(enemyName +" has died!");
        }else {
            window.alert(enemyName+" still has "+enemyHealth+ " health left.");

        }

        //Enemy Attack
        playerHealth = playerHealt - enemyAttack;
        //log in the resulting message
        console.log(enemyName +" attacked "+playerName+". "+" now has "+playerHealth+" health remaining");




        //check player's health
        if (playerHealth <= 0){
            window.alert("Your player "+playerName+" is dead!");

        }else{
            window.alert(playerName+ " still has "+playerHealth+" health left");
        }

    }else if(promptFight === "skip"|| promptFight ==="SKIP"){
        //confirm player wants to skip 
        var confirmSkip = window.confirm("Are you sure you'd like to quit?")


        //if yes(true), leave fight
        if (confirmSkip){
             window.alert(playerName + " has chosen to skip the fight!");
             playerMoney = playerMoney -2;
        }
        //if no (false), ask question again
        else{
            fight();
        }
       
    }else{
        window.alert("You need to choose a valid option. Try again!");
    }
};

for (var i= 0; i < enemyNames.length; i++){
    fight(enemyNames[i]);

}

//fight();



