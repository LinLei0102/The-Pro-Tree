addLayer("y", {
    tabFormat: [
        "main-display",
        "prestige-button",
        ["microtabs", "stuff"],
        ["blank", "25px"],
    ],
    microtabs: {
        stuff: {
            
                        "Upgrades": {
                            unlocked() {return (hasAchievement("a", 11))},
                    content: [
                        ["blank", "15px"],
                        ["upgrades", [1,2,3,4,5,6,7,8,9]]
                        
                    ]
                },
                
                "Buyables": {
                    unlocked() {return (hasUpgrade("y", 12))},
                    content: [
                        ["blank", "15px"],
                        "buyables"
                    ]
                    
                },
                 "Milestones": {
            unlocked() {return (hasAchievement("a", 11))},
    content: [
        ["blank", "15px"],
        "milestones"
    ]
},
},
                },
    upgrades: {
        11: { title: "651",
        description: "Gain x1.5 Medals.",
        cost: new EN("1"),
        unlocked() {
            return hasUpgrade("re",81)
        },
        },
        12: { title: "652",
        description: "Gain x5 yard and unlock a buyable.",
        cost: new EN("1e6"),
        unlocked() {
            return hasUpgrade("y",11)
        },
        },
        13: { title: "653",
        description: "Gain x125 yard.",
        cost: new EN("1e7"),
        unlocked() {
            return hasUpgrade("y",12)
        },
        },
        14: { title: "654",
        description: "Gain x1,953,125 yard.",
        cost: new EN("1e11"),
        unlocked() {
            return hasUpgrade("y",13)
        },
        },
        15: { title: "655",
        description: "Gain x1.084e44 yard.",
        cost: new EN("1e23"),
        unlocked() {
            return hasUpgrade("y",14)
        },
        },
        21: { title: "656",
        description: "Gain x1e1,276 yard.",
        cost: new EN("1e107"),
        unlocked() {
            return hasUpgrade("y",15)
        },
        },
        22: { title: "657",
        description: "Unlock the next buyable and cube yard gain.",
        cost: new EN("1e1816"),
        unlocked() {
            return hasUpgrade("y",21)
        },
        },
        23: { title: "658",
        description: "Gain ^9 Yard.",
        cost: new EN("1e6900"),
        unlocked() {
            return hasUpgrade("y",22)
        },
        },
        24: { title: "659",
        description: "Gain ^27 Yard.",
        cost: new EN("1e50000"),
        unlocked() {
            return hasUpgrade("y",23)
        },
        },
        25: { title: "660",
        description: "Gain a good amount of yard.",
        cost: new EN("e1e10000"),
        unlocked() {
            return hasUpgrade("y",24)
        },
        },
        31: { title: "661",
        description: "Gain a decent amount of yard.",
        cost: new EN("e1e100000"),
        unlocked() {
            return hasUpgrade("y",25)
        },
        },
        32: { title: "662",
        description: "Gain a more amount of yard.",
        cost: new EN("eee9"),
        unlocked() {
            return hasUpgrade("y",31)
        },
        },
        33: { title: "663",
        description: "Gain even more amount of yard.",
        cost: new EN("ee1e30"),
        unlocked() {
            return hasUpgrade("y",32)
        },
        },
        34: { title: "664",
        description: "Gain a lot more amount of yard.",
        cost: new EN("ee5e245"),
        unlocked() {
            return hasUpgrade("y",33)
        },
        },
        35: { title: "665",
        description: "Gain a big amount of yard.",
        cost: new EN("ee1e6564"),
        unlocked() {
            return hasUpgrade("y",34)
        },
        },
        41: { title: "666",
        description: "This upgrade does nothing, bc demon number",
        cost: new EN("eeee9"),
        unlocked() {
            return hasUpgrade("y",35)
        },
        },
        42: { title: "667",
        description: "Gain a massive amount of yard.",
        cost: new EN("eeee9"),
        unlocked() {
            return hasUpgrade("y",41)
        },
        },
        43: { title: "668",
        description: "Gain a insane amount of yard.",
        cost: new EN("10^^250"),
        unlocked() {
            return hasUpgrade("y",42)
        },
        },
        44: { title: "669",
        description: "Gain a extreme amount of yard.",
        cost: new EN("10^^777"),
        unlocked() {
            return hasUpgrade("y",43)
        },
        },
        45: { title: "670",
        description: "Gain a god amount of yard.",
        cost: new EN("10^^1337"),
        unlocked() {
            return hasUpgrade("y",44)
        },
        },
        51: { title: "671",
        description: "Gain a bigger amount of yard.",
        cost: new EN("10^^2500"),
        unlocked() {
            return hasUpgrade("y",45)
        },
        },
        52: { title: "672",
        description: "Gain a best amount of yard.",
        cost: new EN("10^^4000"),
        unlocked() {
            return hasUpgrade("y",51)
        },
        },
        53: { title: "673",
        description: "Gain a true best amount of yard.",
        cost: new EN("10^^10000"),
        unlocked() {
            return hasUpgrade("y",52)
        },
        },
        54: { title: "674",
        description: "Increase all other currencies.",
        cost: new EN("10^^100000"),
        unlocked() {
            return hasUpgrade("y",53)
        },
        },
        55: { title: "675",
        description: "Onion Upgrade 61 ^8 but divide your medal gain by 3.",
        cost: new EN("10^^1e15"),
        unlocked() {
            return player.points.gte("10^^1e800")
        },
        },
    },
    buyables: {
        11: {
            title: "<h3>Thirteenth Buyable<h3>",
            cost(x) {return new EN(1000000).mul(new EN(10).pow(x))},
            display() {return `<h3>Triple Yard Gain.<h3>\nLevel: ` + formatWhole(player.y.buyables[11]) + `<br>Cost: ${format(this.cost())} Yard\nEffect: ${format(this.effect())}x Yard`},
            canAfford() {return player.y.points.gte(this.cost())},
            buy() {
                player.y.points = player.y.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            unlocked() { return hasUpgrade("y", 12)},
            effect(x) {
                mult2 = new EN(x).gte(1000)? new EN(3).pow(1000).mul(new EN(1.01).pow(new EN(x).sub(1000))):new EN(3).pow(x)
                return mult2
        },
    },
    12: {
        title: "<h3>Fourteenth Buyable<h3>",
        cost(x) { return new EN(1e100).pow(new EN(2).pow(x)) },
        display() {return `<h3>Exponentiate Yard Gain.<h3>\nLevel: ` + formatWhole(player.y.buyables[12]) + `<br>Cost: ${format(this.cost())} Yard\nEffect: ^${format(this.effect())} Yard`},
        canAfford() {return player.y.points.gte(this.cost())},
        buy() {
            player.y.points = player.y.points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        unlocked() { return hasUpgrade("y", 22)},
        effect(x) {
            mult2 = new EN(x).gte("10^^100000")? new EN(1).pow(1).mul(new EN(1.1).pow(new EN(x).sub("10^^100000"))):new EN(1.1).pow(x)
            return mult2
    },
},
},
automate(){
    if (player.y.points.lte(0)) return
    if (player.y.auto) {
        hasMilestone("y",1) ? setBuyableAmount("y",11,tmp.y.buyables[11].canAfford?player.y.points.div(10).log(1e6).floor(10).add(1):getBuyableAmount("y",11)) : buyBuyable("y",11)
    }
    if (player.y.auto2) {
        hasMilestone("y",2) ? setBuyableAmount("y",12,tmp.y.buyables[12].canAfford?player.y.points.div(2).log().floor(2).add(1):getBuyableAmount("y",12)) : buyBuyable("y",12)
    }
},
milestones: {
    1: {
        requirementDescription: "1e6,900 Yard",
        effectDescription: "Automate the first yard buyable and buy max.",
        done() { return player.y.points.gte("1e6900") },
        toggles: [
          ["y","auto"]
        ]
    },
    2: {
        requirementDescription: "eeee1.000e9 Yard",
        effectDescription: "Automate the second yard buyable and buy max.",
        done() { return player.y.points.gte("eeeee9") },
        toggles: [
          ["y","auto2"]
        ]
    },
},
    name: "Yard", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "🏡", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        auto: false
    }},
    passiveGeneration() { return (hasMilestone("re", 11)&&player.current!="y")?1:0 },
    color: "#7CFC00",
    requires: new EN("10^^1e887"), // Can be a function that takes requirement increases into account
    resource: "Yard", // Name of prestige currency
    baseResource: "Points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    branches: ["s" , "x"],
    type() {if (hasUpgrade("su", 535)) return "normal"
    else return "normal"},    
    exponent() {if (hasUpgrade("su", 535)) return new EN(0)
    else return new EN(0)},    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1).mul(buyableEffect("y", 11)).pow(buyableEffect("y", 12))
        if (hasUpgrade('re', 82)) mult = mult.times(3125)
        if (hasUpgrade('y', 12)) mult = mult.times(5)
        if (hasUpgrade('y', 13)) mult = mult.times(125)
        if (hasUpgrade('y', 14)) mult = mult.times(1953125)
        if (hasUpgrade('y', 15)) mult = mult.times(1.084e44)
        if (hasUpgrade('y', 21)) mult = mult.times("1e1276")
        if (hasUpgrade('y', 22)) mult = mult.pow(3)
        if (hasUpgrade('y', 23)) mult = mult.pow(9)
        if (hasUpgrade('y', 24)) mult = mult.pow(27)
        if (hasUpgrade('y', 25)) mult = mult.times("e1e50000")
        if (hasUpgrade('y', 31)) mult = mult.pow("1e1000000")
        if (hasUpgrade('y', 32)) mult = mult.pow("ee27")
        if (hasUpgrade('y', 33)) mult = mult.pow("ee243")
        if (hasUpgrade('y', 34)) mult = mult.pow("ee6561")
        if (hasUpgrade('y', 35)) mult = mult.pow("eee9")
        if (hasUpgrade('y', 42)) mult = mult.pow("eeee9")
        if (hasUpgrade('y', 43)) mult = mult.pow("10^^500")
        if (hasUpgrade('y', 44)) mult = mult.pow("10^^1000")
        if (hasUpgrade('y', 45)) mult = mult.pow("10^^2000")
        if (hasUpgrade('y', 51)) mult = mult.pow("10^^3000")
        if (hasUpgrade('y', 52)) mult = mult.pow("10^^8000")
        if (hasUpgrade('y', 53)) mult = mult.pow("10^^100000")
        if (hasUpgrade('y', 54)) mult = mult.pow("10^^1e15")
        if (hasUpgrade('re', 101)) mult = mult.times("10^^5")
        if (hasUpgrade('z', 54)) mult = mult.times("10^^1e200")
        if (hasUpgrade('re', 101)) mult = mult.times("10^^5")
        if (hasUpgrade('re', 102)) mult = mult.times("10^^4000")
                if (hasUpgrade('ar', 54)) mult = mult.pow("10^^^3")
                if (hasUpgrade('ba', 54)) mult = mult.pow("10^^^4")
                if (hasUpgrade('ci', 54)) mult = mult.times("10^^^6")
                if (hasUpgrade('du', 54)) mult = mult.times("10^^^10")
                if (hasUpgrade('eg', 54)) mult = mult.times("10^^^25")
                if (hasUpgrade('fi', 54)) mult = mult.times("10^^^50")
                if (hasUpgrade('ga', 54)) mult = mult.times("10^^^100")
                if (hasUpgrade('ha', 54)) mult = mult.times("10^^^1000")
                if (hasUpgrade('is', 54)) mult = mult.times("10^^^9e15")
        if (hasUpgrade('ju', 54)) mult = mult.times("10^^^1e16")

        return mult
    },
    doReset(resettingLayer) {
        let keep = [];
        if (hasMilestone("re", 15) && resettingLayer=="re") keep.push("upgrades")
        if (hasMilestone("re", 15) && resettingLayer=="re") keep.push("milestones")
        if (layers[resettingLayer].row > this.row) layerDataReset("y", keep)
    },
    autoUpgrade() { if (hasMilestone("re" , 14)) return true},
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    row: 6, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "y", description: "Y: Reset for Yard", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){if (hasUpgrade("su", 535)) return false
    else return (hasUpgrade("re", 81) || player[this.layer].unlocked)},})