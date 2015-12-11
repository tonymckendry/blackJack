var count = 1;
var players = ["dealer"];
var scores =[];
var player0Score = 0;
var player1Score = 0;
var player2Score = 0;
var player3Score = 0;
var player4Score = 0;
var player5Score = 0;

$("#playerNameButton").click(function(){
  var name= document.getElementById("playerInput").value;
  if (name == "" ){
    name = "Player " + count;
  }
  $("#playerNameList").append("<li>" + name + "</li>");
  players.push(name);
  console.log(name);
  count++;
  if (count == 2){
    $("#playerNameRight").append("<button id=startGame>Start Game</button>")
  }
  $("#playerInput").attr("placeholder", "Player " + count)
  $("#playerInput").val("");
  console.log(players)
  if (count > 5){
    $("#playerNameLeft").remove();
    $("#playerNameRight").css("float", "none");
    $("#playerNameRight").css("margin", "0 auto");
  }
})

$(document).on("click", "#startGame", function(){
  $("#playerName").remove();
  console.log("count is "+count)
  $("#dealerArea").append("<div id=0 class=dealer><button id=deal>DEAL</button></div><br><span id=dealer>Dealer</span>")
  if (count == 2){
    $("#playerArea").append("<div class=threePlayer id=1><span class=threePlayerText>"+ players[1] + "</span></div>")
    console.log("Single Player working")
  }
  else if (count == 3){
    for (var i = 1; i < players.length; i++) {
      $("#playerArea").append("<div class=threePlayer id="+i+"><span class=threePlayerText>" + players[i] + "</span></div>")
    }
    console.log("Two Player working")
  }
  else if (count == 4){
    for (var i = 1; i < players.length; i++) {
      $("#playerArea").append("<div class=threePlayer id="+i+"><span class=threePlayerText>" + players[i] + "</span></div>")
    }
    console.log("Three Player working")
  }
  else if (count == 5){
    for (var i = 1; i < players.length; i++) {
      $("#playerArea").append("<div class=threePlayer id="+i+"><span class=threePlayerText>" + players[i] + "</span></div>")
    }
    console.log("four Player working")
  }
  else if (count == 6){
    for (var i = 1; i < players.length; i++) {
      $("#playerArea").append("<div class=threePlayer id="+i+"><span class=threePlayerText>" + players[i] + "</span></div>")
    }
    console.log("five Player working")
  }
})

$(document).on("click", "#deal", function(){
  console.log("dealt")
  for (var i = 0; i < players.length; i++) {
    var rand = Math.round((Math.random()*(13-1)+1));
    console.log("rand is " + rand)
    scores[i] = rand;
    $("#"+i).append("<img class=firstCard src=cards/" + rand + ".png><button id=hit" + i + ">HIT</button>")
    if (rand > 10) {
      score = 10;
      console.log("changed" +  players[i] + "'s score to 10");
    }
    console.log("Player " + players[i] + " value is " + scores[i])
    }
    $("#deal").remove();
    $("#"+i).append("<button id=hit" + i + ">HIT</button>")
})

$(document).on("click", "#hit1", function(){
    var rand = Math.round((Math.random()*(13-1)+1));
    console.log("Player 1's second card is " + rand);
    $("#1").append("<img class=card src=cards/" + rand + ".png>");
    console.log("Player 1's score is " + scores[1] + " before the card is added")
    if (rand > 10) {
      rand = 10;
      console.log("changed rand to 10");
    };
    scores[1] += rand;
    console.log("Player 1's score is " + scores[1] + " after the card is added");
  }
)
