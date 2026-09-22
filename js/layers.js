function makeRed(c){
    return "<span style='color:#FF0000'>" + c + "</span>"
}

addLayer("p", {
    name: "人员", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "🧍", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new ExpantaNum(0),
    }},
    color: "3399FF",
    requires: new ExpantaNum([10]), // Can be a function that takes requirement increases into account
    resource: "人员", // Name of prestige currency
    baseResource: "积分", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type() {if (hasUpgrade("z", 12)) return "static"
    else return "normal"},    
    exponent() {if (hasUpgrade("z", 12)) return new EN(Infinity)
    else return new EN(0.5)},      
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new ExpantaNum(1)
        return mult
    },
    gainMult() {
        let mult = new ExpantaNum(1)
        if (hasUpgrade('p', 13)) mult = mult.times(upgradeEffect('p', 13))
        if (hasUpgrade('b', 14)) mult = mult.times(10)
        if (hasUpgrade('p', 21)) mult = mult.times(10)
        if (hasUpgrade('p', 33)) mult = mult.times(69420)
        if (hasUpgrade('p', 24)) mult = mult.times(4)
        if (hasUpgrade('b', 22)) mult = mult.times(100)
        if (hasUpgrade('b', 24)) mult = mult.times(6969)
        if (hasUpgrade('ant', 14)) mult = mult.times(6969)
        if (hasUpgrade('ant', 22)) mult = mult.times(10000)
        if (hasUpgrade('ant', 24)) mult = mult.times(100000)
        if (hasUpgrade('p', 41)) mult = mult.times(1000000)
        if (hasUpgrade('p', 45)) mult = mult.times(1e10)
        if (hasUpgrade('p', 53)) mult = mult.times(1e10)
        if (hasUpgrade('p', 55)) mult = mult.times(1e6)
        if (hasUpgrade('g', 15)) mult = mult.times(1e20)
        if (hasUpgrade('b', 41)) mult = mult.pow(1.01)
        if (hasUpgrade('b', 42)) mult = mult.pow(1.05)
        if (hasUpgrade('b', 52)) mult = mult.times(1e15)
        if (hasUpgrade('ant', 33)) mult = mult.times(1e33)
        if (hasUpgrade('c', 14)) mult = mult.times(1e20)
        if (hasUpgrade('g', 31)) mult = mult.pow(1.04)
        if (hasUpgrade('g', 34)) mult = mult.times(1e69)
        if (hasUpgrade('d', 14)) mult = mult.times(1e32)
        if (hasUpgrade('d', 22)) mult = mult.pow(1.05)
        if (hasUpgrade('d', 25)) mult = mult.times(1e100)
        if (hasUpgrade('c', 32)) mult = mult.pow(1.08)
        if (hasUpgrade('ant', 51)) mult = mult.times(1e150)
        if (hasUpgrade('d', 35)) mult = mult.pow(1.1)
        if (hasUpgrade('d', 35)) mult = mult.times("1.79e308")
        if (hasUpgrade('f', 14)) mult = mult.times(1e123)
        if (inChallenge("b", 12)) mult = mult.pow(0.001)
        if (hasChallenge("b", 12)) mult = mult.pow(1.01)
        if (hasUpgrade('f', 22)) mult = mult.pow(1.024)
        if (inChallenge("b", 13)) mult = mult.pow(0.001)
        if (hasChallenge("b", 13)) mult = mult.pow(1.1)
        if (hasUpgrade('c', 43)) mult = mult.times("1.79e308")
        if (hasUpgrade('g', 42)) mult = mult.pow(1.02)
        if (inChallenge("g", 12)) mult = mult.pow(0.0001)
        if (inChallenge("g", 13)) mult = mult.pow(0.1)
        if (inChallenge("g", 22)) mult = mult.pow(0.000001)
        if (hasChallenge("g", 22)) mult = mult.pow(1.02)
        if (inChallenge("c", 12)) mult = mult.pow(0.25)
        if (hasChallenge("c", 12)) mult = mult.times("1e1503")
        if (inChallenge("c", 22)) mult = mult.pow(0.0145)
        if (hasUpgrade('e', 22)) mult = mult.pow(2)
        if (hasUpgrade('e', 31)) mult = mult.pow(3)
        if (inChallenge("f", 11)) mult = mult.pow(0.001)
        if (inChallenge("f", 12)) mult = mult.pow(0.1)
        if (inChallenge("j", 11)) mult = mult.pow(0.1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new ExpantaNum(1)
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        ["microtabs", "stuff"],
        ["blank", "25px"],
    ],
    microtabs: {
        stuff: {
                        "升级": {
                            unlocked() {return (hasAchievement("a", 11))},
                    content: [
                        ["blank", "15px"],
                        ["raw-html", () => `<h4 style="opacity:.5">欢迎来到 Pro Tree！<br> 你的目标是抵达终局。你可以按 P 来获得人员。<br> 人员用于购买升级。</h4>`],
                        ["upgrades", [1,2,3,4,5,6,7,8,9]]
                    ],
                    "教程": {
                        unlocked() {return (hasAchievement("a", 11))},
                        content: [
                            ["blank", "15px"],
                            "lore"
                        ]
                        
                    },
                },
            },
        },
        update(diff){
            player.bestPoints = player.bestPoints.max(player.points)
            player.bestNS = player.bestNS.max(player.su.points)
        },
    upgrades: {
        11: { title: "1",
        description: "使积分获取翻倍。",
        cost: new ExpantaNum(1),

        },
        12: { title: "2",
        description: "积分获取受人员增益。",
        cost: new ExpantaNum(5),
        effect() {
            return player[this.layer].points.add(1).pow("0.5").min("ee6")
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        unlocked() {
            return hasUpgrade("p", 11)
        }
        },
        13: { title: "3",
        description: "人员获取受积分增益。",
        cost: EN("10"),
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        effect() {
            return player.points.add(1).pow(0.15).min("eee100")
            
        },
        unlocked() {
            return hasUpgrade("p", 12)
        
        }
        },
        14: { title: "4",
        description: "使积分获取变为三倍。",
        cost: new EN(20),
        unlocked() {
            return hasUpgrade("p", 13)
        
        }
        },
        15: { title: "5",
        description: "积分翻倍并解锁一个新层。",
        cost: new EN(50),
        unlocked() {
            return hasUpgrade("p", 14)
        
        }
        },
        21: { title: "6",
        description: "获得 3× 更多人员",
        cost: new EN(1e9),
        unlocked() {
            return hasUpgrade("b", 15)
        
        }
        },
        22: { title: "7",
        description: "按钮能量获取受积分增益，但效率降低。",
        cost: new EN(2.5e10),
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        effect() {
            return player.points.add(1).pow(0.05).min("ee100")
            
        },
        unlocked() {
            return hasUpgrade("p", 21)
        
        }
        },
        23: { title: "8",
        description: "获得 10× 更多积分",
        cost: new EN(1e12),
        unlocked() {
            return hasUpgrade("p", 22)
        
        }
        },
        24: { title: "9",
        description: "4× 声望点获取。",
        cost: new EN(5e12),
        unlocked() {
            return hasUpgrade("p", 23)
        
        }
        },
        25: { title: "10",
        description: "积分获取自我增益。",
        cost: EN(2e13),
        effect() {
            return player.points.add(1).pow(0.1).min("eee100")
        },
		effectDisplay() {return format(upgradeEffect("p", 25)) + "x"},
        unlocked() {
            return hasUpgrade("p", 24)
        }
        },
        31: { title: "11",
        description: "10× 按钮能量。",
        cost: EN(1e40),
        unlocked() {
            return hasUpgrade("b", 25)
        }
        },
        32: { title: "12",
        description: "^1.01 积分。",
        cost: EN(1e42),
        unlocked() {
            return hasUpgrade("p", 31)
        }
        },
        33: { title: "13",
        description: "^1.11 积分。",
        cost: EN(1e42),
        unlocked() {
            return hasUpgrade("p", 32)
        }
        },
        34: { title: "14",
        description: "69,420× 人员。",
        cost: EN(1e54),
        unlocked() {
            return hasUpgrade("p", 33)
        }
        },
        35: { title: "15",
        description: "69,420× 积分。",
        cost: EN(1e71),
        unlocked() {
            return hasUpgrade("p", 34)
        }
        },
        41: { title: "16",
        description: "1,000,000× 人员",
        cost: EN(1e220),
        unlocked() {
            return hasUpgrade("b", 35)
        }
        },
        42: { title: "17",
        description: "^1.111 积分",
        cost: EN(1e232),
        unlocked() {
            return hasUpgrade("p", 41)
        }
        },
        43: { title: "18",
        description: "1e9× 积分。",
        cost:EN("1e410"),
        unlocked() {
            return hasUpgrade("p", 42)
        }
        },
        44: { title: "19",
        description: "100,000× 按钮能量。",
        cost: EN("1e453"),
        unlocked() {
            return hasUpgrade("p", 43)
        }
        },
        45: { title: "20",
        description: "1e10× 人员。",
        cost: EN("1e477"),
        unlocked() {
            return hasUpgrade("p", 44)
        }
        },
        51: { title: "21",
        description: "1,000,000× 按钮能量。",
        cost: EN("1e517"),
        unlocked() {
            return hasUpgrade("p", 45)
        }
        },
        52: { title: "22",
        description: "1e12× 积分。",
        cost: EN("1e540"),
        unlocked() {
            return hasUpgrade("p", 51)
        }
        },
        53: { title: "23",
        description: "1e10× 人员。",
        cost: EN("1e603"),
        unlocked() {
            return hasUpgrade("p", 52)
        }
        },
        54: { title: "24",
        description: "10,000,000× 按钮能量。",
        cost: EN("1e650"),
        unlocked() {
            return hasUpgrade("p", 53)
        }
        },
        55: { title: "25",
        description: "^1.01 积分，1e6× 人员，按钮能量。",
        cost: EN("1e678"),
        unlocked() {
            return hasUpgrade("p", 54)
        }
        },
        61: { title: "?",
        description: "积分获取受人员增益，但效率降低。",
        cost: EN("1e2000000"),
        effect() {
            return player[this.layer].points.add(1).pow(0.05).min("3e109258")
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        unlocked() {
            return hasUpgrade("d", 55)
        }
        },
        62: { title: "?",
        description: "积分获取受人员增益，但效率降低。（^0.2）",
        cost: EN("1e2000000"),
        effect() {
            return player[this.layer].points.add(1).pow(0.1).min("e258609")
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        unlocked() {
            return hasUpgrade("e", 13)
        }
        },
        63: { title: "?",
        description: "积分获取受人员增益。",
        cost: EN("1e2000000"),
        effect() {
            return player[this.layer].points.add(1).pow(0.5).min("ee1000000")
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        unlocked() {
            return hasUpgrade("e", 15)
        }
        },
        64: { title: "?",
        description: "以非常巨大的幅度加速。",
        cost: EN("ee10000"),
        unlocked() {
            return hasUpgrade("i", 55)
        }
        },
        65: { title: "?",
        description: "以超巨大幅度加速。",
        cost: EN("ee20000"),
        unlocked() {
            return hasUpgrade("p", 64)
        }
        },
        71: { title: "?",
        description: "以欧米伽幅度加速！",
        cost: EN("ee30000"),
        unlocked() {
            return hasUpgrade("p", 65)
        }
        },
        72: { title: "?",
        description: "以更甚幅度加速！",
        cost: EN("ee200000"),
        unlocked() {
            return hasUpgrade("p", 71)
        }
        },
        73: { title: "?",
        description: "以巨大无匹的幅度加速！",
        cost: EN("eee6"),
        unlocked() {
            return hasUpgrade("p", 72)
        }
        },
        74: { title: "?",
        description: "以灯光级的幅度加速！",
        cost: EN("ee5000000"),
        unlocked() {
            return hasUpgrade("p", 73)
        }
        },
        75: { title: "?",
        description: "以最大之最的幅度加速！",
        cost: EN("eee9"),
        unlocked() {
            return hasUpgrade("p", 74)
        }
        },
        81: { title: "?",
        description: "?",
        cost: EN("e18310"),
        unlocked() {
            return inChallenge("j", 12)
        }
        },
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: 重置获取人员", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    
    ],
    doReset(resettingLayer){ // Triggers when this layer is being reset, along with the layer doing the resetting. Not triggered by lower layers resetting, but is by layers on the same row.
        if(layers[resettingLayer].row > this.row) {
        layerDataReset(this.layer)
        if(hasUpgrade("b",21)) player.p.upgrades.push("11", "12", "13", "14", "15", "21", "22", "23", "24", "25")
        if(hasUpgrade("ant",15)) player.p.upgrades.push("31", "32", "33", "34", "35")    
        if(hasUpgrade("g",14)) player.p.upgrades.push("11", "12", "13", "14", "15", "21", "22", "23", "24", "25", "31", "32", "33", "34", "35", "41", "42", "43", "44", "45")
        if(hasUpgrade("g",24)) player.p.upgrades.push("51", "52", "53", "54", "55")    
        if(hasUpgrade("f",11)) player.p.upgrades.push("11", "12", "13", "14", "15", "21", "22", "23", "24", "25", "31", "32", "33", "34", "35", "41", "42", "43", "44", "45", "51", "52", "53", "54", "55")
        if(hasUpgrade("e",11)) player.p.upgrades.push("61")
        if(hasUpgrade("e",13)) player.p.upgrades.push("62")
        if(hasUpgrade("e",15)) player.p.upgrades.push("63")
        if(hasUpgrade("j",55)) player.p.upgrades.push("64" , "65" , "71", "72", "73", "74", "75")
        if(hasUpgrade("o",11)) player.p.upgrades.push("64" , "65" , "71", "72", "73", "74", "75")
    }
    },
    passiveGeneration() {
        if (hasUpgrade("z", 12)) return 0
        if (hasMilestone("ant", 1)) return 1
        },
    layerShown(){if (hasUpgrade("z", 12)) return false
    else return (hasAchievement("a", 11) || player[this.layer].unlocked)}
})
addLayer("stat", {
    name: "统计", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "📈", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        points: 0,
        unlocked: true,
    }},
    color: "#ffffff",
    tooltip(){return "统计"},
    row: "side", // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    tabFormat:{
        "统计":{
            content:[
                ["display-text",function(){return getStatTab()}]
            ]
        },
    },
})
function getStatTab(){
    let br = "<br>"
    let x = "<h1 style='color: #ffffff'>积分</h1>"
    x += br
    x += "<h3>你有 " + format(player.points) + " 积分。</h3>"
    x += br
    x += "<h3>你的最高积分曾达到 " + format(player.bestPoints) + ".</h3>"    
    x += br
    x+= "――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――"
    x += br
    x += "<h1>时间:🕒</h1>"
    x += br
    x += "<h3>你已游玩 " + formatTime(player.timePlayed) + "。</h3>"
   x += br
    x+= "<h4>―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――</h4>"
    if (player.su.unlocked){
        x += br
        x += "<h1 style='color: orange'>超新星</h1>"
        x += br
        x += "<h3>你有 " + formatWhole(player.su.points) + " 中子星（" + formatWhole(player.su.total) + " 总计）。</h3>"
       
        x += br
       x += "<h3>你已花费 " + formatTime(player.su.resetTime) + " 于此超新星中。</h3>"
       x += br
       x+= "――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――"
    }
    if (player.ju.unlocked){
        x += br
        x += "<h1 style='color: #da614e'>果汁:🍊</h1>"
        x += br
        x += "<h3>你有 " + formatWhole(player.ju.points) + " 果汁。</h3>"
        x += br
        x += "<h3>你已花费 " + formatTime(player.ju.resetTime) + " 于此果汁中。</h3>"
        x += br
        x+= "――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――"
        x += br
    }
    if (player.ap.unlocked){
        x += br
        x += "<h1 style='color: yellow'>升华</h1>"
        x += br
        x += "<h3>你有 " + formatWhole(player.ap.points) + " 升华点。</h3>"
        x += br
        x+= "――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――"
        x += br
    }
    x += br
    x += "<h1 style='color: white'>层</h1>"
    x += br
    x += "<h3>这个游戏有 40+ 个层。</h3>"
    x += br
    x += "<h3>这个游戏有超过 1,000+ 个升级。</h3>"
    x += br
    x += "<h3>这个游戏有 30+ 个可购买项。</h3>"
    x += br
    x += "<h3>这个游戏有超过 50+ 个里程碑。</h3>"
    x += br
    x += "<h3>这个游戏有超过 50+ 个挑战。</h3>"
    x += br
    x += "<h3>更多内容即将推出！</h3>"
    x += br
    x+= "――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――"
    x += br
    let y = "<h1 style='color: yellow'>成就:🏆</h1>"
    y += br
    y += "<h3>你有 " + format(player.a.points) + " 成就点。</h3>"
    y += br
    y += "<h3>你有 " + formatWhole(player.a.achievements.length) +  "/" + (Object.keys(tmp.a.achievements).length - 2) + " 成就。</h3>"
    y += br
    y+= "――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――"
    return x+y
}