var AutoPlay = {};
var buildingPP = [];		  
		  
AutoPlay.run = function() {
	AutoPlay.calculatePP();
}

AutoPlay.calculatePP() = function() {
	var building = Game.ObjectsById[AutoPlay.cursorCPS()-1];
	building.buy();
}

AutoPlay.cursorCPS() = function() {
	return 1;
}

AutoPlay.autoPlayer = setInterval(AutoPlay.run, 300);
