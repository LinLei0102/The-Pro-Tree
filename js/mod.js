let modInfo = {
	name: "The Pro Tree",
	id: "1",
	author: "ProGamesGrinder",
	pointsName: "points",
	modFiles: ["layers.js", "tree.js", "buttonpower.js", "ant.js", "grass.js", "cups.js", "dices.js", "fruits.js", "electricity.js", "houses.js", "ice.js", "achievements.js", "jetpacks.js", "keys.js", "lights.js", "money.js", "notes.js", "onions.js", "quadrilaterals.js", "rings.js", "sand.js", "trees.js", "universal.js", "void.js", "reincarnation.js", "wood.js", "xray.js", "yard.js", "zebras.js", "arrows.js", "ball.js", "circles.js", "duck.js", "eggs.js", "fire.js", "games.js", "hammers.js" , "islands.js", "juice.js","supernova.js","sacrifice.js","asc.js"],
	discordName: "The ProGames YT Fan Group",
	discordLink: "https://discord.gg/8pwhpb8rtM",
	initialStartPoints: new ExpantaNum (0), // Used for hard resets and new players
	offlineLimit: 24,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.9c",
	name: "Bug Fix+2"
}

let changelog = `<h1>Changelog:</h1><br>
<h3>v0.9c (22/09/2023)</h3><br>
- Balanced the game yet again.<br>
- Made 2 upgrades cheaper.<br><br>
<h3>v0.9b</h3><br>
- Balanced the game again.<br>
- Fixed the same text in the 2nd last layer of the game.<br><br>
<h3>v0.9a (21/09/2023)</h3><br>
- Fixed No Offline Progress Bug.<br>
- Added 5 new upgrades.<br>
- Added 1 new milestone.<br>
- Changed 1 upgrade effect.<br><br>
<h3>v0.9 (20/09/2023)</h3><br>
		- Endgame: 1H1,000 Points = 10^^^^1,000.<br>
		- Added 10 new layers! (2 of them are Normal)<br>
		- Added more buyables!<br>
		- Added more milestones.<br>
		- Added more achievements.<br>
		- Added 1 new achievement reward for endgame.<br>
		- Added more upgrades.<br>
		- Added more challenges.<br>
		- Added more hotkeys.<br>
		- Bug Fixes.<br>
		- Bringed one layer back from the old version.<br>
		- Added even more OP upgrades.<br>
		- Balanced the game.<br>
		- Changed the endgame.<br>
		- Changed statistics.<br>
		- Added more tree Upgrades.<br>
		- Added more sub-prestige layers.<br>
		- Added more sub-currencies.<br>
		- Added more milestone effects.<br>
		- Added more tutorials.<br>
		- Added more hardcaps.<br><br>
<h3>v0.8e (03/06/2023)</h3><br>
		- Improved the endgame.<br><br>
<h3>v0.8d</h3><br>
		- Some changes in the statistics.<br><br>
<h3>v0.8c (28/05/2023)</h3><br>
		- Bug Fixes again.<br><br>
<h3>v0.8b (20/05/2023)</h3><br>
		- Changes to the game.<br><br>
<h3>v0.8a (14/05/2023)</h3><br>
		- Bug Fixes.<br>
		- Dropped the 2nd light upgrade cost to 500.<br><br>
<h3>v0.8 (11/05/2023)</h3><br>
		- Endgame: GGG1.000 Points = 10^^^^3.<br>
		- Added 10 new layers!! (8 of them are normal.)<br>
		- Added more buyables!<br>
		- Added more milestones.<br>
		- Added more upgrades.<br>
		- Added more challenges.<br>
		- Added more sub-currencies.<br>
		- Added more achievements.<br>
		- Added more auto upgrades.<br>
		- Added more emojis.<br>
        - Added more hotkeys.<br>
		- Added a few tutorials to not get you stuck.<br>
		- Changed the key requirement.<br>
		- eee10 --> eee9.<br>
		- Changed a few key upgrades.<br>
		- Changed the warning color to red.<br>
		- Changed the endgame.<br>
		- Added more achievement rewards.<br>
		- Added best points.<br>
		- Changed some achievements names.<br>
		- Added more hardcaps.<br>
		- Added more softcaps.<br>
		- Added a sub-prestige layer.<br>
		- Added statistics.<br>
		- Added Tree Upgrades.<br>
		- Added Respec.<br>
		- Added Buyable Level Cap.<br>
		- Bug Fixes.<br>
		- Revamped the game even more.<br>
		- Changed so many layer names.<br>
		- Changed Color for some layers.<br>
		- Added Multi-Completion Challenge.<br>
		- Changed the Challenge decoration back to original.<br>
		- Added Milestone Effect.<br>
		- Added Star.<br><br>
<h3>v0.7f (22/02/2023)</h3><br>
	- Bug Fixes.<br>
	- Changed some achievements.<br>
	- Endgame: 1G6 Points.<br><br>
<h3>v0.7e</h3><br>
		- Added dates for each version (The ones it doesnt have the date, it is the same date i did on the earlier version.)<br><br>
<h3>v0.7d</h3><br>
		- Added more endgames for earlier versions.<br><br>
<h3>v0.7c (18/02/2023)</h3><br>
		- Changed the requirement for massive increased points.<br>
		- The requirement is now 1.2e60 -> 1e61.<br><br>
	<h3>v0.7b (17/02/2023)</h3><br>
		- Fixed Prestige Upgrade 11 does not boost points.<br><br>
		<h3>v0.7a</h3><br>
		- Bug Fixes.<br><br>
<h3>v0.7 (12/02/2023)</h3><br>
		- Endgame: 1G5 Points = 10^^^5.<br>
		- Added 8 new layers! (7 of them is normal.)<br>
		- Added more buyables!<br>
		- Added more auto-buyables.<br>
		- Added more milestones.<br>
		- Added more upgrades.<br>
		- Added more challenges.<br>
		- Added more achievements.<br>
		- Added more auto upgrades.<br>
		- Added more sub-currencies.<br>
		- Added emojis.<br>
		- Changed the code a little bit.<br>
		- Changed the endgame.<br>
		- Changed the hotkeys.<br>
		- Changed some achievements requirements.<br><br>
<h3>v0.6c (08/01/2023)</h3><br>
		- Removed Christmas Event.<br>
		- Changed the milestone for row 6.<br><br>
<h3>v0.6b</h3><br>
		- Changed some stuff.<br><br>
<h3>v0.6a</h3><br>
		- Added more settings!<br>
		- Added more notations!<br><br>
<h3>v0.6 (18/12/2022)</h3><br>
		- Endgame: F1,000,000 Points = 10^^1,000,000.<br>
		- Added 6 new layers!<br>
		- Added buyables.<br>
		- Added auto-buyables.<br>
		- Added new milestones.<br>
		- Added new upgrades.<br>
		- Added new challenges.<br>
		- Added new achievements.<br>
		- Added auto upgrade.<br>
		- Added a small christmas event.<br>
		- Revamped the game a bit.<br>
		- Added sub-currencies.<br>
		- Removed some stuff.<br>
		- Added a warning once you reach endgame.<br><br>
		<h3>v0.5a (21/11/2022)</h3><br>
		- Bug Fixes.<br><br>
		<h3>v0.5 (15/11/2022)</h3><br>
		- Endgame: eeee1.000e10 Points = 10^^6.<br>
		- Added 5 new layers.<br>
		- Added new milestones.<br>
		- Added new upgrades.<br>
		- Added new Challenges.<br>
		- Added Achievements.<br>
		- Rebalances + Bug fixes.<br><br>
<h3>v0.4 (Released) (27/10/2022)</h3><br>
		- Endgame: e1.000e17 Points.<br>
		- Added 4 new layers.<br>
		- Added new milestones.<br>
		- Added new upgrades.<br>
		- Added Challenges.
		<h3></h3><br><br>	
		<h3>v0.3 (19/10/2022)</h3><br>
		- Endgame: 1e75,000 Points.<br>
		- Added 3 new layers.<br>
		- Added new milestones.<br>
		- Added new upgrades.<br>
		- Added Ants resets nothing.
		<h3></h3><br><br>	
		<h3>v0.2 (10/10/2022)</h3><br>
		- Endgame: 1e1,130 Points.<br>
		- Added 1 new layer.<br>
		- Added Milestones.<br>
		- Added Branches.<br>
		- Added New upgrades.<br>
		- Added Passive Gain.<br>
		- Added Keep stuff.<br>
		- Added max ants.<br>
		- Added current endgame at top.
			<h3></h3><br><br>
			<h3>v0.1 (08/10/2022)</h3><br>
			- Endgame: 1.000e100 Points.<br>
			- Added 1 new layer.<br>
			- Added New Upgrades.
			<h3></h3><br><br>
			<h3>v0.0b (02/10/2022)</h3><br>
			- Endgame: 10,000,000 Points.<br><br>
			<h3>v0.0a (01/10/2022)</h3><br>
			- Endgame: 1,000,000 Points.<br>
			- Added 1 layer.<br>
			- Added Upgrades.<br><br>
			<h3>v0.0 (25/09/2022)</h3><br>
			- Endgame: 1,000 Points.<br>
			`
let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new ExpantaNum(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	
	if(!canGenPoints())
		return new ExpantaNum(1)

	let gain = new ExpantaNum(1).mul(tmp["b"].effect).mul(tmp["ant"].effect).mul(tmp["g"].effect).mul(tmp["c"].effect).mul(tmp["d"].effect).mul(tmp["f"].effect).mul(tmp["e"].effect).mul(tmp["h"].effect).mul(tmp["i"].effect).mul(tmp["j"].effect)
	if (hasUpgrade('p', 11)) gain = gain.times("2")
	if (hasUpgrade('p', 82)) gain = gain.times("2")
	if (hasUpgrade('b', 62)) gain = gain.times("4")
	if (hasUpgrade('a', 62)) gain = gain.times("16")
	if (hasAchievement("a", 11) && (!inChallenge("b", 11) && (!hasAchievement("a", 152)) && (!inChallenge("b",13)))) gain = gain.times(player.a.points.add(1).pow(0.56).pow(player.a.points.sub(1.2e60).max(1)))
	if (hasUpgrade('p', 12)) gain = gain.times(upgradeEffect('p', 12))
	if (hasUpgrade('p', 14)) gain = gain.times("3")
	if (hasUpgrade('p', 15)) gain = gain.times(2)
	if (hasUpgrade('p', 15)) gain = gain.times(2)
	if (hasUpgrade('p', 23)) gain = gain.times(10)
	if (hasUpgrade('p', 25)) gain = gain.times(upgradeEffect("p", 25))
	if (hasUpgrade('b', 11)) gain = gain.times(10)
	if (hasUpgrade('b', 12)) gain = gain.times(upgradeEffect('b', 12))
	if (hasUpgrade('b', 13)) gain = gain.times(69)
	if (hasUpgrade('b', 23)) gain = gain.times(6969)
	if (hasUpgrade('b', 33)) gain = gain.times(1000)
	if (hasUpgrade('p', 32)) gain = gain.pow(1.01)
	if (hasUpgrade('b', 31)) gain = gain.pow(1.01)
	if (hasUpgrade('p', 34)) gain = gain.pow(1.11)
	if (hasUpgrade('p', 42)) gain = gain.pow(1.111)
	if (hasUpgrade('p', 35)) gain = gain.times(69420)
	if (hasUpgrade('ant', 11)) gain = gain.times(1000)
	if (hasUpgrade('ant', 12)) gain = gain.times(upgradeEffect('ant', 12))
	if (hasUpgrade('ant', 13)) gain = gain.times(69420)
	if (hasUpgrade('ant', 23)) gain = gain.times(1e6)
	if (hasUpgrade('p', 43)) gain = gain.times(1e9)
	if (hasUpgrade('p', 52)) gain = gain.times(1e12)
	if (hasUpgrade('p', 55)) gain = gain.pow(1.01)
	if (hasUpgrade('g', 11)) gain = gain.times(1e10)
	if (hasUpgrade('g', 12)) gain = gain.times(upgradeEffect('g', 12))
	if (hasUpgrade('g', 13)) gain = gain.times(1e14)
	if (hasUpgrade('g', 21)) gain = gain.pow(1.025)
	if (hasUpgrade('g', 22)) gain = gain.times(1e21)
	if (hasUpgrade('g', 24)) gain = gain.times(1e30)
	if (hasUpgrade('b', 53)) gain = gain.times(1e10)
	if (hasUpgrade('b', 54)) gain = gain.times(1e5)
	if (hasUpgrade('b', 55)) gain = gain.pow(1.0015)
	if (hasUpgrade('ant', 32)) gain = gain.times(6.969e69)
	if (hasUpgrade('c', 11)) gain = gain.times(1e20)
	if (hasUpgrade('c', 12)) gain = gain.times(upgradeEffect('c', 12))
	if (hasUpgrade('c', 13)) gain = gain.times(1e25)
	if (hasUpgrade('c', 21)) gain = gain.times(1e10)
	if (hasUpgrade('c', 22)) gain = gain.times(1e50)
	if (hasUpgrade('c', 24)) gain = gain.times(1e69)
	if (hasUpgrade('c', 25)) gain = gain.times(1e30)
	if (hasUpgrade('ant', 41)) gain = gain.times(1e10)
	if (hasUpgrade('ant', 42)) gain = gain.times(1e20)
	if (hasUpgrade('ant', 43)) gain = gain.times(1e40)
	if (hasUpgrade('ant', 44)) gain = gain.times(1e69)
	if (hasUpgrade('d', 11)) gain = gain.times(1e30)
	if (hasUpgrade('d', 12)) gain = gain.times(upgradeEffect('d', 12))
	if (hasUpgrade('d', 13)) gain = gain.times(1e42)
	if (hasUpgrade('d', 21)) gain = gain.times(1e60)
	if (hasUpgrade('d', 24)) gain = gain.times(1e125)
	if (hasUpgrade('c', 33)) gain = gain.times(1e200)
	if (hasUpgrade('c', 35)) gain = gain.times(1.111e111)
	if (hasUpgrade('ant', 55)) gain = gain.times(1e100)
	if (hasUpgrade('d', 31)) gain = gain.times(1e50)
	if (hasUpgrade('d', 32)) gain = gain.times(1e100)
	if (hasUpgrade('d', 33)) gain = gain.times(1e150)
	if (hasUpgrade('d', 34)) gain = gain.times(1e200)
	if (hasUpgrade('d', 35)) gain = gain.times("1.79e308")
	if (hasUpgrade('f', 11)) gain = gain.times(1e100)
	if (hasUpgrade('f', 12)) gain = gain.times(upgradeEffect('f', 12))
	if (hasUpgrade('f', 13)) gain = gain.times(1e150)
	if (inChallenge("b", 11)) gain = gain.pow(0.01)
	if (hasChallenge("b", 11)) gain = gain.times(1e69)
	if (hasUpgrade('f', 21)) gain = gain.times(1e200)
	if (hasUpgrade('f', 24)) gain = gain.times(upgradeEffect('f', 24))
	if (hasUpgrade('f', 31)) gain = gain.times(1e300)
	if (hasUpgrade('f', 32)) gain = gain.times(1e200)
	if (hasUpgrade('f', 35)) gain = gain.times(1e100)
	if (inChallenge("b", 13)) gain = gain.pow(0.001)
	if (hasChallenge("b", 13)) gain = gain.times(1e69)
	if (hasUpgrade('c', 44)) gain = gain.times("1e420")
	if (hasUpgrade('g', 43)) gain = gain.times(1e300)
	if (hasUpgrade('g', 44)) gain = gain.times(1e300)
	if (hasUpgrade('g', 45)) gain = gain.times(1e200)
	if (hasUpgrade('g', 51)) gain = gain.times(1e150)
	if (hasUpgrade('g', 52)) gain = gain.times(1e100)
	if (hasUpgrade('g', 55)) gain = gain.times("1e1000")
	if (inChallenge("g", 13)) gain = gain.pow(0.1)
	if (hasChallenge("g", 13)) gain = gain.times("1e777")
	if (hasUpgrade("c", 51)) gain = gain.times("1e308")
	if (hasUpgrade('c', 55)) gain = gain.times("1e1000")
	if (inChallenge("g", 21)) gain = gain.pow(0.001)
	if (inChallenge("g", 23)) gain = gain.pow(0.1)
	if (hasChallenge("g", 23)) gain = gain.times("1e3003")
	if (hasUpgrade("d", 41)) gain = gain.times("1e666")
	if (hasUpgrade("d", 42)) gain = gain.times("1e1000")
	if (hasUpgrade("d", 43)) gain = gain.times("1e420")
	if (hasUpgrade("d", 44)) gain = gain.times("1e420")
	if (hasUpgrade("d", 45)) gain = gain.times("1e1000")
	if (inChallenge("c", 12)) gain = gain.pow(0.5)
	if (inChallenge("c", 21)) gain = gain.pow(0.0145)
	if (hasChallenge("c", 22)) gain = gain.times("1e2000")
	if (hasUpgrade("d", 51)) gain = gain.times("1e1000")
	if (hasUpgrade("d", 52)) gain = gain.times("1e2000")
	if (hasUpgrade("d", 53)) gain = gain.times("1e4000")
	if (hasUpgrade("d", 54)) gain = gain.times("1e6969")
	if (hasUpgrade("d", 55)) gain = gain.times("1e10000")
	if (hasUpgrade('p', 61)) gain = gain.times(upgradeEffect('p', 61))
	if (hasUpgrade("e", 11)) gain = gain.times("1e6969")
	if (hasUpgrade('e', 12)) gain = gain.times(upgradeEffect('e', 12))
	if (hasUpgrade('p', 62)) gain = gain.times(upgradeEffect('p', 62))
	if (hasUpgrade("e", 14)) gain = gain.times("1e10000")
	if (hasUpgrade('p', 63)) gain = gain.times(upgradeEffect('p', 63))
	if (hasUpgrade("e", 21)) gain = gain.times("1e6969")
	if (hasUpgrade("e", 24)) gain = gain.pow("1.1")
	if (hasUpgrade("e", 25)) gain = gain.times("1e100000")
	if (hasUpgrade("e", 33)) gain = gain.pow("1.15")
	if (hasUpgrade("e", 34)) gain = gain.pow("1.1")
	if (hasUpgrade("e", 35)) gain = gain.pow("1.01")
	if (hasChallenge("f", 11)) gain = gain.pow("1.01")
	if (inChallenge("f", 12)) gain = gain.pow(0.1)
	if (hasChallenge("f", 12)) gain = gain.pow("1.02")
	if (hasUpgrade("h", 11)) gain = gain.times("1e1000000")
	if (hasUpgrade('h', 12)) gain = gain.times(upgradeEffect('h', 12))
	if (hasUpgrade("h", 13)) gain = gain.pow("1.03")
	if (hasUpgrade("h", 14)) gain = gain.times("e3000003")
	if (hasUpgrade("h", 21)) gain = gain.pow("1.025")
	if (hasUpgrade("h", 24)) gain = gain.times("e10000000")
	if (hasUpgrade("h", 25)) gain = gain.pow("1.001")
	if (hasUpgrade("h", 31)) gain = gain.pow("1.01")
	if (hasUpgrade("h", 32)) gain = gain.pow("1.01")
	if (hasUpgrade("h", 33)) gain = gain.times("e30000003")
	if (hasUpgrade("h", 34)) gain = gain.times("e10000000")
	if (hasUpgrade("h", 35)) gain = gain.pow("1.001")
	if (hasUpgrade("f", 41)) gain = gain.times("e20000000")
	if (hasUpgrade("f", 42)) gain = gain.pow("1.005")
	if (hasUpgrade("f", 43)) gain = gain.times("e50000000")
	if (hasUpgrade("f", 45)) gain = gain.times("e60075000")
	if (hasUpgrade("i", 11)) gain = gain.times("ee8")
	if (hasUpgrade("i", 12)) gain = gain.times("1e200000000")
	if (hasUpgrade("i", 14)) gain = gain.times("1e100000000")
	if (hasUpgrade("i", 15)) gain = gain.times("1e300000003")
	if (hasUpgrade("i", 22)) gain = gain.times("1e300000003")
	if (hasUpgrade("i", 23)) gain = gain.times("1e420000000")
	if (hasUpgrade("i", 24)) gain = gain.pow("1.001")
	if (hasUpgrade("i", 25)) gain = gain.times("ee9")
	if (hasUpgrade("i", 31)) gain = gain.times("ee9")
	if (hasUpgrade("i", 32)) gain = gain.pow("1.01")
	if (hasUpgrade("i", 33)) gain = gain.pow("1.005")
	if (hasUpgrade("i", 34)) gain = gain.times("ee9")
	if (hasUpgrade("i", 35)) gain = gain.times("ee10")
	if (hasUpgrade("e", 41)) gain = gain.times("ee10")
	if (hasUpgrade("e", 42)) gain = gain.times("ee10")
	if (hasUpgrade("e", 43)) gain = gain.times("ee10")
	if (hasUpgrade("e", 44)) gain = gain.times("ee10")
	if (hasUpgrade("e", 45)) gain = gain.times("ee11")
	if (hasUpgrade("h", 41)) gain = gain.times("ee11")
	if (hasUpgrade("h", 42)) gain = gain.times("ee11")
	if (hasUpgrade("h", 43)) gain = gain.times("ee11")
	if (hasUpgrade("h", 44)) gain = gain.times("ee11")
	if (hasUpgrade("h", 45)) gain = gain.times("ee12")
	if (hasUpgrade("i", 41)) gain = gain.times("ee12")
	if (hasUpgrade("i", 42)) gain = gain.times("ee13")
	if (hasUpgrade("i", 43)) gain = gain.times("ee13")
	if (hasUpgrade("i", 44)) gain = gain.times("ee14")
	if (hasUpgrade("i", 45)) gain = gain.times("ee15")
	if (hasUpgrade("j", 11)) gain = gain.times("ee12")
	if (hasUpgrade("j", 12)) gain = gain.times("ee14")
	if (hasUpgrade("j", 12)) gain = gain.times("ee15")
	if (hasUpgrade("j", 14)) gain = gain.times("ee17")
	if (hasUpgrade("j", 21)) gain = gain.times("ee18")
	if (hasUpgrade("j", 23)) gain = gain.times("ee19")
	if (hasUpgrade("j", 31)) gain = gain.times("ee20")
	if (hasUpgrade("j", 41)) gain = gain.times("ee21")
	if (hasUpgrade("j", 43)) gain = gain.times("ee22")
	if (hasUpgrade("j", 45)) gain = gain.times("ee23")
	if (inChallenge("j", 11)) gain = gain.pow(0.000000000000001)
	if (hasChallenge("j", 11)) gain = gain.pow(1.01)
	if (hasUpgrade("f", 51)) gain = gain.pow(1.001)
	if (hasUpgrade("f", 52)) gain = gain.pow(1.001)
	if (hasUpgrade("f", 53)) gain = gain.pow(1.001)
	if (hasUpgrade("f", 54)) gain = gain.pow(1.001)
	if (hasUpgrade("f", 55)) gain = gain.pow(1.001)
	if (hasUpgrade("e", 51)) gain = gain.pow(1.01)
	if (hasUpgrade("e", 52)) gain = gain.pow(1.01)
	if (hasUpgrade("e", 53)) gain = gain.pow(1.01)
	if (hasUpgrade("e", 54)) gain = gain.pow(1.01)
	if (hasUpgrade("e", 55)) gain = gain.pow(1.01)
	if (hasUpgrade("h", 51)) gain = gain.pow(1.1)
	if (hasUpgrade("h", 52)) gain = gain.pow(1.1)
	if (hasUpgrade("h", 53)) gain = gain.pow(1.1)
	if (hasUpgrade("h", 54)) gain = gain.pow(1.1)
	if (hasUpgrade("h", 55)) gain = gain.pow(1.1)
	if (hasUpgrade("i", 51)) gain = gain.pow(2)
	if (hasUpgrade("i", 52)) gain = gain.pow(4)
	if (hasUpgrade("i", 53)) gain = gain.pow(8)
	if (hasUpgrade("i", 54)) gain = gain.pow(16)
	if (hasUpgrade("i", 55)) gain = gain.pow(32)
	if (hasUpgrade("p", 64)) gain = gain.pow(128)
	if (hasUpgrade("p", 65)) gain = gain.pow(1024)
	if (hasUpgrade("p", 71)) gain = gain.pow(1e100)
	if (hasUpgrade("p", 72)) gain = gain.pow(1e308)
	if (hasUpgrade("p", 73)) gain = gain.pow("1e3003")
	if (hasUpgrade("p", 74)) gain = gain.pow("1e300003")
	if (hasUpgrade("p", 75)) gain = gain.pow("1e3000003")
	if (hasUpgrade("k", 11)) gain = gain.pow("ee9")
	if (hasUpgrade("k", 13)) gain = gain.pow("ee10")
	if (hasUpgrade("k", 15)) gain = gain.pow("ee11")
	if (hasUpgrade("k", 24)) gain = gain.pow("ee12")
	if (hasUpgrade("k", 33)) gain = gain.pow("ee13")
	if (hasUpgrade("k", 41)) gain = gain.pow("ee14")
	if (hasUpgrade("k", 42)) gain = gain.pow("ee16")
	if (hasUpgrade("k", 43)) gain = gain.pow("ee20")
	if (hasUpgrade("k", 44)) gain = gain.pow("ee28")
	if (hasUpgrade("k", 45)) gain = gain.pow("ee44")
	if (hasUpgrade("j", 51)) gain = gain.pow("ee60")
	if (hasUpgrade("j", 52)) gain = gain.pow("ee76")
	if (hasUpgrade("j", 53)) gain = gain.pow("ee108")
	if (hasUpgrade("j", 54)) gain = gain.pow("ee197")
	if (hasUpgrade("j", 55)) gain = gain.pow("ee305")
	if (hasUpgrade("l", 25)) gain = gain.pow("ee1024")
	if (inChallenge("j", 12)) gain = gain.pow("1e-1024")
	if (hasUpgrade("p", 81)) gain = gain.times("69420")
	if (hasUpgrade("b", 61)) gain = gain.times("1e109")
	if (hasUpgrade("ant", 61)) gain = gain.times("1e1014")
	if (hasUpgrade("g", 61)) gain = gain.times("1e6969")
	if (hasUpgrade("c", 61)) gain = gain.times("1e69420")
	if (hasUpgrade("d", 61)) gain = gain.times("6.666e666666")
	if (hasUpgrade("f", 61)) gain = gain.times("e500000000")
	if (hasUpgrade("e", 61)) gain = gain.times("ee10")
	if (hasUpgrade("h", 61)) gain = gain.times("ee100")
	if (hasUpgrade("i", 61)) gain = gain.times("ee1.79e308")
	if (hasChallenge("j", 12)) gain = gain.pow("ee3000")
	if (hasUpgrade("l", 11)) gain = gain.times("ee1.81e308")
	if (hasUpgrade("l", 45)) gain = gain.pow("ee10000")
	if (hasUpgrade("m", 25)) gain = gain.pow("ee30000")
	if (hasUpgrade("m", 31)) gain = gain.pow("ee100000")
	if (hasUpgrade("k", 55)) gain = gain.pow("ee1000000")
	if (hasUpgrade("m", 45)) gain = gain.pow("ee10000000")
	if (hasUpgrade("l", 52)) gain = gain.pow("ee100000000")
	if (hasUpgrade("l", 53)) gain = gain.pow("ee1000000000")
	if (hasUpgrade("l", 54)) gain = gain.pow("eee11")
	if (hasUpgrade("l", 55)) gain = gain.times("eeee22")
	if (hasUpgrade("n", 12)) gain = gain.times("eeee50")
	if (hasUpgrade("n", 15)) gain = gain.times("eeee100")
	if (hasUpgrade("n", 15)) gain = gain.times("eeee308")
	if (hasUpgrade("n", 25)) gain = gain.times("eeee1000")
	if (hasUpgrade("n", 33)) gain = gain.times("eeee3003")
	if (hasUpgrade("n", 35)) gain = gain.times("eeee10000")
	if (hasUpgrade("n", 42)) gain = gain.times("eeee100000")
	if (hasUpgrade("n", 45)) gain = gain.times("eeee1000000")
	if (hasUpgrade("m", 55)) gain = gain.times("eeee10000000")
	if (hasUpgrade("n", 51)) gain = gain.times("eeee100000000")
	if (hasUpgrade("n", 53)) gain = gain.times("eeee1000000000")
	if (hasUpgrade("n", 55)) gain = gain.times("eeee10000000000")
	if (hasUpgrade('o', 66)) gain = gain.times(upgradeEffect('o', 66))
	if (hasUpgrade('re', 11)) gain = gain.times(upgradeEffect('re', 11))
	if (hasUpgrade('re', 105)) gain = gain.times(upgradeEffect('re', 105))
	if (hasUpgrade('re', 155)) gain = gain.times(upgradeEffect('re', 155))
	if (hasUpgrade('su', 55)) gain = gain.times(upgradeEffect('su', 55))
	if (hasUpgrade('su', 431)) gain = gain.times(upgradeEffect('su', 431))
	if (hasUpgrade('su', 492)) gain = gain.times(upgradeEffect('su', 492))
	if (hasUpgrade('sa', 11)) gain = gain.times(upgradeEffect('sa', 11))
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
	bestPoints: new EN(0),
	bestNS: new EN(0),
}}
function convertToB16(n){
    let codes = {
            0: "0",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "A",
            11: "B",
            12: "C",
            13: "D",
            14: "E",
            15: "F",
    }
    let x = n % 16
    return codes[(n-x)/16] + codes[x]
}
function getUndulatingColor(period = Math.sqrt(760)){
	let t = new Date().getTime()
	let a = Math.sin(t / 1e3 / period * 2 * Math.PI + 0) 
	let b = Math.sin(t / 1e3 / period * 2 * Math.PI + 2)
	let c = Math.sin(t / 1e3 / period * 2 * Math.PI + 4)
	a = convertToB16(Math.floor(a*128) + 128)
	b = convertToB16(Math.floor(b*128) + 128)
	c = convertToB16(Math.floor(c*128) + 128)
	return "#"+String(a) + String(b) + String(c)
}
// Display extra things at the top of the page
var displayThings = [
	function(){
		let x = getUndulatingColor()
		let a = "Current endgame: "+colorText("h2", x,format("10^^^^1000"))/*"Taeyeon"*/+" Points."
		let d = isEndgame()?makeRed("<br>You are past endgame,<br>and the game might not be balanced here."):""
		let e = `<br>────────────────────────────────────`
		return a+d+e
	},
]

// Determines when the game "ends"
function isEndgame() {
return player.points.gte("10^^^^1000")}


// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}