
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
                    "Upgrades": {
                        unlocked() {return (hasAchievement("a", 11))},
                content: [
                    ["blank", "15px"],
                    ["raw-html", () => `<h4 style="opacity:.5">Welcome to the Ascension! Resets a lot of stuff except achievements, etc.<br> You will gain 1 Ascension Points on your first Ascension reset.<br> Which you can spend on upgrades, buyables and tree upgrades!</h4>`],
                    ["upgrades", [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]]
                ]
                    },
                    "Milestones": {
                        
                        content: [
                            ["blank", "15px"],
                            "milestones"
                        ]
                        },
                },
    },
        tooltip() {
            return ("Ascension")
        },
    
    upgrades: {
        11: { title: "1,026",
        description: "Every Ascension Upgrade = 2x AP and gain 69x challenge pentational.",
        cost: new EN(10),
        effect() {
            let effect = ExpantaNum.pow(2, player.ap.upgrades.length)
            return effect
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect    
},
12: { title: "1,027",
description: "420x Challenge Pentational.",
cost: new EN(100),
unlocked() {
    return hasUpgrade("ap", 11)

}
},
13: { title: "1,028 is funny",
description: "3x AP.",
cost: new EN(1000),
unlocked() {
    return hasUpgrade("ap", 12)

}
},
14: { title: "1,029",
description: "2x AP.",
cost: new EN(5000),
unlocked() {
    return hasUpgrade("ap", 13)

}
},
15: { title: "1,030",
description: "Challenge Pentational is boosted by a lot based on Crystal.",
cost: new EN(5000),
unlocked() {
    return hasUpgrade("ap", 14)
},
effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
    effect() {
        return player.su.crystal.add(1).pow("0.5").min("10^^^^500")
    },},
21: { title: "1,031",
description: "3x AP.",
cost: new EN(10000),
unlocked() {
    return hasUpgrade("ap", 15)

}
},
22: { title: "1,032",
description: "1.5x AP.",
cost: new EN(100000),
unlocked() {
    return hasUpgrade("ap", 21)

}
},
23: { title: "1,033",
description: "1.25x AP.",
cost: new EN(500000),
unlocked() {
    return hasUpgrade("ap", 22)

}
},
24: { title: "1,034",
description: "2x AP.",
cost: new EN(1000000),
unlocked() {
    return hasUpgrade("ap", 23)

}
},
25: { title: "1,035",
description: "Challenge Pentational is boosted by a lot based on Crystal.",
cost: new EN(5000000),
unlocked() {
    return hasUpgrade("ap", 24)
},
effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
    effect() {
        return player.su.crystal.add(1).pow("0.5").min("10^^^^998")
    },},
    },
    name: "Ascension", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Asc", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        auto: false,
    }},
    color: "yellow",
    requires: new EN("10^^^^100"), // Can be a function that takes requirement increases into account
    resource: "Ascension Points", // Name of prestige currency
    baseResource: "Points", // Name of resource prestige is based on
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
        {key: ">", description: "Shift+>: Reset for Asc", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
layerShown(){return (hasChallenge("sa", 42) || player[this.layer].unlocked)},
    automate() {},
    milestones: {
        1: {
            requirementDescription: "1 Ascension Point",
            effectDescription: "Keep Sacrifice Challenges on reset.",
            done() { return player.ap.points.gte(1) }
        },
        2: {
            requirementDescription: "10 Ascension Points",
            effectDescription: "Keep Sacrifice Upgrades on reset.",
            done() { return player.ap.points.gte(10) }
        },
        3: {
            requirementDescription: "69,420 Ascension Points",
            effectDescription: "2x AP.",
            done() { return player.ap.points.gte(69420) }
        },
    },
})