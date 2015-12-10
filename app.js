var count = 1;
var players = [];
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
