let modInfo = {
	name: "The Modding Tree",
	id: "modbase",
	pointsName: "points",
	modFiles: ["Demo/layers/c.js", "Demo/layers/f.js", "Demo/layers/a.js", "Demo/demoTree.js"],


	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "2.6.6",
	name: "修复的现实",
}

let changelog = `<h1>更新日志：</h1><br>
	<h3>v0.0</h3><br>
		- 添加了一些东西。<br>
		- 添加了一些内容。`

let winText = `恭喜！你已到达终点并通关了本游戏，但现在...`
// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["doReset", "buy", "onPurchase", "blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return hasUpgrade("c", 11)
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
	if (hasUpgrade("c", 12)) gain = gain.times(upgradeEffect("c", 12))
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
	weather: "Yes",
	happiness: new Decimal(72),
}}

// Display extra things at the top of the page
var displayThings = [
	function() {if (player.points.eq(69)) return "嘿嘿！"},
	function() {if (player.f.points.gt(1)) return `你有 ${player.f.points} 个农场点。（它们什么也不做。）`},
	function() {if (inChallenge("c", 11)) return "游戏目前难度增加了 <h1>0%</h1>。"},
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("11"))
}



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
