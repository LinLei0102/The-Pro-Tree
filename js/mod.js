let modInfo = {
	name: "专业树",
	id: "1",
	author: "ProGamesGrinder",
	pointsName: "积分",
	// 【顺序敏感，勿随意调整】TREE_LAYERS 的排序比较器为 (a, b) => (a.position > b.position) ? 1 : -1，
	// 而第 3~7 行各层的 position 均为 '0'，该比较器恒返回 -1，实际效果是「把整行反转」，
	// 因此树节点的行内显示顺序 = 脚本加载顺序的逆序。本清单顺序必须与原 index.html 的加载顺序一致，
	// 否则树中第 5、6 行的节点排列会改变。前 26 项 = 原 index.html 静态标签顺序；后 16 项 = 原 loader 注入顺序。
	modFiles: ["tree.js", "layers.js", "buttonpower.js", "grass.js", "cups.js", "dices.js", "fruits.js", "achievements.js", "electricity.js", "houses.js", "ice.js", "jetpacks.js", "keys.js", "lights.js", "money.js", "notes.js", "rings.js", "sand.js", "universal.js", "reincarnation.js", "void.js", "wood.js", "xray.js", "yard.js", "arrows.js", "ball.js", "ant.js", "onions.js", "quadrilaterals.js", "trees.js", "zebras.js", "circles.js", "duck.js", "eggs.js", "fire.js", "games.js", "hammers.js", "islands.js", "juice.js", "supernova.js", "sacrifice.js", "asc.js"],
	discordName: "ProGames YT 粉丝群",
	discordLink: "https://discord.gg/8pwhpb8rtM",
	initialStartPoints: new ExpantaNum (0), // Used for hard resets and new players
	offlineLimit: 24,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.9c",
	name: "漏洞修复+2"
}

let changelog = `<h1>更新日志：</h1><br>
<h3>v0.9c (22/09/2023)</h3><br>
- 又一次平衡了游戏。<br>
- 让 2 个升级更便宜。<br><br>
<h3>v0.9b</h3><br>
- 再次平衡了游戏。<br>
- 修复了游戏倒数第 2 层中相同的文本。<br><br>
<h3>v0.9a (21/09/2023)</h3><br>
- 修复了没有离线进度的漏洞。<br>
- 添加了 5 个新升级。<br>
- 添加了 1 个新里程碑。<br>
- 修改了 1 个升级效果。<br><br>
<h3>v0.9 (20/09/2023)</h3><br>
		- 终局: 1H1,000 积分 = 10^^^^1,000.<br>
		- 添加了 10 个新层！（其中 2 个是普通层）<br>
		- 添加了更多可购买项！<br>
		- 添加了更多里程碑。<br>
		- 添加了更多成就。<br>
		- 为终局添加了 1 个新成就奖励。<br>
		- 添加了更多升级。<br>
		- 添加了更多挑战。<br>
		- 添加了更多快捷键。<br>
		- 漏洞修复。<br>
		- 从旧版本中带回了 1 个层。<br>
		- 添加了更多超强升级。<br>
		- 平衡了游戏。<br>
		- 修改了终局。<br>
		- 修改了统计。<br>
		- 添加了更多树形升级。<br>
		- 添加了更多次级声望层。<br>
		- 添加了更多子货币。<br>
		- 添加了更多里程碑效果。<br>
		- 添加了更多教程。<br>
		- 添加了更多硬上限。<br><br>
<h3>v0.8e (03/06/2023)</h3><br>
		- 改进了终局。<br><br>
<h3>v0.8d</h3><br>
		- 对统计做了一些改动。<br><br>
<h3>v0.8c (28/05/2023)</h3><br>
		- 再次漏洞修复。<br><br>
<h3>v0.8b (20/05/2023)</h3><br>
		- 对游戏做了一些改动。<br><br>
<h3>v0.8a (14/05/2023)</h3><br>
		- 漏洞修复。<br>
		- 将第 2 个灯光升级的花费降至 500。<br><br>
<h3>v0.8 (11/05/2023)</h3><br>
		- 终局: GGG1.000 积分 = 10^^^^3.<br>
		- 添加了 10 个新层！！（其中 8 个是普通层）<br>
		- 添加了更多可购买项！<br>
		- 添加了更多里程碑。<br>
		- 添加了更多升级。<br>
		- 添加了更多挑战。<br>
		- 添加了更多子货币。<br>
		- 添加了更多成就。<br>
		- 添加了更多自动升级。<br>
		- 添加了更多表情符号。<br>
        - 添加了更多快捷键。<br>
		- 添加了一些教程，以免你卡住。<br>
		- 修改了钥匙的条件。<br>
		- eee10 --> eee9.<br>
		- 修改了几个钥匙升级。<br>
		- 将警告颜色改为红色。<br>
		- 修改了终局。<br>
		- 添加了更多成就奖励。<br>
		- 添加了最佳积分。<br>
		- 修改了一些成就名称。<br>
		- 添加了更多硬上限。<br>
		- 添加了更多软上限。<br>
		- 添加了 1 个次级声望层。<br>
		- 添加了统计。<br>
		- 添加了树形升级。<br>
		- 添加了洗点。<br>
		- 添加了可购买项等级上限。<br>
		- 漏洞修复。<br>
		- 进一步重制了游戏。<br>
		- 修改了大量层名称。<br>
		- 修改了一些层的颜色。<br>
		- 添加了多重完成挑战。<br>
		- 将挑战装饰改回原样。<br>
		- 添加了里程碑效果。<br>
		- 添加了星星。<br><br>
<h3>v0.7f (22/02/2023)</h3><br>
	- 漏洞修复。<br>
	- 修改了一些成就。<br>
	- 终局: 1G6 积分。<br><br>
<h3>v0.7e</h3><br>
		- 为每个版本添加了日期（没有标注日期的版本，其日期与我制作较早版本时的日期相同。）<br><br>
<h3>v0.7d</h3><br>
		- 为较早的版本添加了更多终局。<br><br>
<h3>v0.7c (18/02/2023)</h3><br>
		- 修改了积分大幅提升的条件。<br>
		- 该条件现在是 1.2e60 -> 1e61。<br><br>
	<h3>v0.7b (17/02/2023)</h3><br>
		- 修复了声望升级 11 不提升积分的问题。<br><br>
		<h3>v0.7a</h3><br>
		- 漏洞修复。<br><br>
<h3>v0.7 (12/02/2023)</h3><br>
		- 终局: 1G5 积分 = 10^^^5.<br>
		- 添加了 8 个新层！（其中 7 个是普通层）<br>
		- 添加了更多可购买项！<br>
		- 添加了更多自动购买项。<br>
		- 添加了更多里程碑。<br>
		- 添加了更多升级。<br>
		- 添加了更多挑战。<br>
		- 添加了更多成就。<br>
		- 添加了更多自动升级。<br>
		- 添加了更多子货币。<br>
		- 添加了表情符号。<br>
		- 稍微修改了代码。<br>
		- 修改了终局。<br>
		- 修改了快捷键。<br>
		- 修改了一些成就的条件。<br><br>
<h3>v0.6c (08/01/2023)</h3><br>
		- 移除了圣诞活动。<br>
		- 修改了第 6 行的里程碑。<br><br>
<h3>v0.6b</h3><br>
		- 修改了一些东西。<br><br>
<h3>v0.6a</h3><br>
		- 添加了更多设置！<br>
		- 添加了更多记数法！<br><br>
<h3>v0.6 (18/12/2022)</h3><br>
		- 终局: F1,000,000 积分 = 10^^1,000,000.<br>
		- 添加了 6 个新层！<br>
		- 添加了可购买项。<br>
		- 添加了自动购买项。<br>
		- 添加了新里程碑。<br>
		- 添加了新升级。<br>
		- 添加了新挑战。<br>
		- 添加了新成就。<br>
		- 添加了自动升级。<br>
		- 添加了一个小型圣诞活动。<br>
		- 稍微重制了游戏。<br>
		- 添加了子货币。<br>
		- 移除了一些东西。<br>
		- 当你到达终局时添加了一个警告。<br><br>
		<h3>v0.5a (21/11/2022)</h3><br>
		- 漏洞修复。<br><br>
		<h3>v0.5 (15/11/2022)</h3><br>
		- 终局: eeee1.000e10 积分 = 10^^6.<br>
		- 添加了 5 个新层。<br>
		- 添加了新里程碑。<br>
		- 添加了新升级。<br>
		- 添加了新挑战。<br>
		- 添加了成就。<br>
		- 重新平衡 + 漏洞修复。<br><br>
<h3>v0.4 (已发布) (27/10/2022)</h3><br>
		- 终局: e1.000e17 积分。<br>
		- 添加了 4 个新层。<br>
		- 添加了新里程碑。<br>
		- 添加了新升级。<br>
		- 添加了挑战。
		<h3></h3><br><br>	
		<h3>v0.3 (19/10/2022)</h3><br>
		- 终局: 1e75,000 积分。<br>
		- 添加了 3 个新层。<br>
		- 添加了新里程碑。<br>
		- 添加了新升级。<br>
		- 添加了蚂蚁重置不清空任何东西。
		<h3></h3><br><br>	
		<h3>v0.2 (10/10/2022)</h3><br>
		- 终局: 1e1,130 积分。<br>
		- 添加了 1 个新层。<br>
		- 添加了里程碑。<br>
		- 添加了分支。<br>
		- 添加了新升级。<br>
		- 添加了被动产出。<br>
		- 添加了保留内容。<br>
		- 添加了最大蚂蚁数。<br>
		- 在顶部添加了当前终局。
			<h3></h3><br><br>
			<h3>v0.1 (08/10/2022)</h3><br>
			- 终局: 1.000e100 积分。<br>
			- 添加了 1 个新层。<br>
			- 添加了新升级。
			<h3></h3><br><br>
			<h3>v0.0b (02/10/2022)</h3><br>
			- 终局: 10,000,000 积分。<br><br>
			<h3>v0.0a (01/10/2022)</h3><br>
			- 终局: 1,000,000 积分。<br>
			- 添加了 1 个层。<br>
			- 添加了升级。<br><br>
			<h3>v0.0 (25/09/2022)</h3><br>
			- 终局: 1,000 积分。<br>
			`
let winText = `恭喜！你已到达终点并通关了本游戏，但现在...`

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
		let a = "当前终局: "+colorText("h2", x,format("10^^^^1000"))/*"Taeyeon"*/+" 积分。"
		let d = isEndgame()?makeRed("<br>你已越过终局，<br>游戏在此处的平衡可能并不完善。"):""
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