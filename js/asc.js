
addLayer("ap", {
    effect(){

    },
    effect(){
        return ExpantaNum.pow(1, player[this.layer].points)
        /*
          you should use this.layer instead of <layerID>
          Decimal.pow(num1, num2) is an easier way to do
          num1.pow(num2)
        *

},
effectDescription(){
    return "multiplying point gain by " + format(tmp[this.layer].effect)
    /*
      use format(num) whenever displaying a number
    */
  },
tabFormat: [
    "main-display",
    "prestige-button",
    ["microtabs", "stuff"],
    ["blank", "25px"],
],
row: "11",
microtabs: {
    stuff: {
                    "升级": {
                        unlocked() {return (hasAchievement("a", 11))},
                content: [
                    ["blank", "15px"],
                    ["raw-html", () => `<h4 style="opacity:.5">欢迎来到升华！它会重置大量内容，但保留成就等。<br> 你的第一次升华重置将获得 1 升华点。<br> 你可以将其用于升级、可购买项和树形升级！</h4>`],
                    ["upgrades", [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]]
                ]
                    },
                    "里程碑": {
                        
                        content: [
                            ["blank", "15px"],
                            "milestones"
                        ]
                        },
                },
    },
        tooltip() {
            return ("升华")
        },
    
    upgrades: {
        11: { title: "1,026",
        description: "每项升华升级 = 2× 升华点，并获得 69× 挑战五阶。",
        cost: new EN(10),
        effect() {
            let effect = ExpantaNum.pow(2, player.ap.upgrades.length)
            return effect
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect    
},
12: { title: "1,027",
description: "420× 挑战五阶。",
cost: new EN(100),
unlocked() {
    return hasUpgrade("ap", 11)

}
},
13: { title: "1,028 很有趣",
description: "3× 升华点。",
cost: new EN(1000),
unlocked() {
    return hasUpgrade("ap", 12)

}
},
14: { title: "1,029",
description: "2× 升华点。",
cost: new EN(5000),
unlocked() {
    return hasUpgrade("ap", 13)

}
},
15: { title: "1,030",
description: "挑战五阶会根据水晶获得大幅增益。",
cost: new EN(5000),
unlocked() {
    return hasUpgrade("ap", 14)
},
effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
    effect() {
        return player.su.crystal.add(1).pow("0.5").min("10^^^^500")
    },},
21: { title: "1,031",
description: "3× 升华点。",
cost: new EN(10000),
unlocked() {
    return hasUpgrade("ap", 15)

}
},
22: { title: "1,032",
description: "1.5× 升华点。",
cost: new EN(100000),
unlocked() {
    return hasUpgrade("ap", 21)

}
},
23: { title: "1,033",
description: "1.25× 升华点。",
cost: new EN(500000),
unlocked() {
    return hasUpgrade("ap", 22)

}
},
24: { title: "1,034",
description: "2× 升华点。",
cost: new EN(1000000),
unlocked() {
    return hasUpgrade("ap", 23)

}
},
25: { title: "1,035",
description: "挑战五阶会根据水晶获得大幅增益。",
cost: new EN(5000000),
unlocked() {
    return hasUpgrade("ap", 24)
},
effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
    effect() {
        return player.su.crystal.add(1).pow("0.5").min("10^^^^998")
    },},
    },
    name: "升华", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "升", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        auto: false,
    }},
    color: "yellow",
    requires: new EN("10^^^^100"), // Can be a function that takes requirement increases into account
    resource: "升华点", // Name of prestige currency
    baseResource: "积分", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    branches: ["sa"],
    exponent: 0, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1)
        if (hasUpgrade('ap', 11)) mult = mult.times(upgradeEffect('ap', 11))
        if (hasUpgrade('ap', 13)) mult = mult.times(3)
        if (hasUpgrade('ap', 14)) mult = mult.times(2)
        if (hasUpgrade('ap', 21)) mult = mult.times(3)
        if (hasMilestone('ap', 3)) mult = mult.times(2)
        if (hasUpgrade('ap', 22)) mult = mult.times(1.5)
        if (hasUpgrade('ap', 23)) mult = mult.times(1.25)
        if (hasUpgrade('ap', 24)) mult = mult.times(2)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    hotkeys: [
        {key: ">", description: "Shift+>: 重置以获取升华点", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
layerShown(){return (hasChallenge("sa", 42) || player[this.layer].unlocked)},
    automate() {},
    milestones: {
        1: {
            requirementDescription: "1 升华点",
            effectDescription: "重置时保留献祭挑战。",
            done() { return player.ap.points.gte(1) }
        },
        2: {
            requirementDescription: "10 升华点",
            effectDescription: "重置时保留献祭升级。",
            done() { return player.ap.points.gte(10) }
        },
        3: {
            requirementDescription: "69,420 升华点",
            effectDescription: "2× 升华点。",
            done() { return player.ap.points.gte(69420) }
        },
    },
})