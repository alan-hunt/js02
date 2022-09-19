teams = new Array([]);
teams = ["Braves", "Nationals","Phillies","Mets","Marlins","Cardinals","Cubs","Brewers","Reds","Pirates","Dodgers","Diamondbacks","Giants","Padres","Rockies",];
wins = [89,79,74,72,51,81,76,74,67,62,93,75,69,66,60];
losses = [55,63,68,70,91,62,66,68,77,81,52,68,74,76,84];

var tempHighWins = 0;
var tempLeader = 0;

for (var i=0; i<teams.length; i++){
    if(wins[i] >= tempHighWins){
        tempHighWins = wins[i];
        tempLeader = i;
    }
}

console.log(teams[tempLeader]);

console.log("The teams with the most wins are the ")
var Dodgers = teams[tempLeader].replace(teams[tempLeader], '<strong>' + teams[tempLeader] + '</strong>');
console.log(Dodgers);

var teams2 = teams.indexOf(teams[tempLeader]);

if (teams2 !== -1){
    teams[teams2] = Dodgers;
}

var tableBuilder = "";

tableBuilder = "<table> <tr> <th> Teams </th> <th> Wins </th> <th> Losses </th> </tr>";

for (var i=0; i<teams.length; i++){
    console.log(teams[i]);

    tableBuilder += "<tr>" + "<td>" + teams[i] + "</td>" + "<td>" + wins[i] + "</td>" + "<td>" + losses[i] + "</td>" + "</tr>";
    console.log(tableBuilder);
}

tableBuilder += "</table>"
document.getElementById('teams').
innerHTML=tableBuilder;