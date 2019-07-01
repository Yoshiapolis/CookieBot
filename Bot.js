var AutoPlay = {};
var buildingPP = [];	
var upgradePP = [];
var nBuildingTypes = 3;

AutoPlay.calculatePP = function() {
	
	var iters = 0;
	for(var i in CM.Cache.Objects) { 
		buildingPP[iters] = CM.Cache.Objects[i].pp;
		iters ++;
	}
	
	iters = 0;
	
	for(var i in CM.Cache.Upgrades) { 
		upgradePP[iters] = CM.Cache.Upgrades[i].pp;
		iters ++;
	}
}

AutoPlay.tryBestBuy = function() {
	var minPP = buildingPP[0];
	var bestIndex = 0;
	var bestUpgradeIndex = 0;
	var index = 0;
	var i;
	for(i = 0; i < buildingPP.length; i ++) {
		if(buildingPP[i] < minPP) {
			bestIndex = index;
			minPP = buildingPP[i];
		}
		index ++;
	}
	
	var minUpgradePP = upgradePP[0];
	index = 0;
	
	for(i = 0; i < upgradePP.length; i ++) {
		if(upgradePP[i] < minUpgradePP) {
			bestUpgradeIndex = index;
			minUpgradePP = buildingPP[i];
		}
		index ++;
	}
	
	if(minPP < minUpgradePP) {
		if(Game.UpgradesById[bestUpgradeIndex].price <= Game.cookies) {	
			Game.ObjectsById[bestUpgradeIndex].buy();
		}
	} else {
		if(Game.ObjectsById[bestIndex].price <= Game.cookies) {	
			Game.ObjectsById[bestIndex].buy();
		}
	}
}

AutoPlay.click = function() {Game.ClickCookie;}

AutoPlay.run = function() {
	AutoPlay.calculatePP();
	AutoPlay.tryBestBuy();
	Game.ClickCookie();
}

AutoPlay.autoClicker = setInterval(AutoPlay.click, 50);
AutoPlay.autoPlayer = setInterval(AutoPlay.run, 300);
