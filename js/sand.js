addLayer("s", {
    tabFormat: [
        "main-display",
        "prestige-button",
        ["microtabs", "stuff"],
        ["blank", "65px"],
    ],
    microtabs: {
    stuff: {
        "Upgrades": {
            unlocked() {return (hasAchievement("a", 55))},
    content: [
        ["blank", "15px"],
        ["raw-html", () => `<h4 style="opacity:.5">You will be able to unlock buyables and sub currency!<br>Which you can spend it on buyables and boost more sand gain!</h4>`],
        ["upgrades", [1,2,3,4,5,6,7,8,9]]
    ]
    
},
"Buyables": {
    unlocked() {return (hasUpgrade("s", 11))},
    content: [
        ["blank", "15px"],
        ["display-text", () => "You have <h2 style='color: #c2b280; text-shadow: 0 0 10px #c2b280'>" + format(player.s.sanddunes) + "</h2> Sand Dunes 🏖️, multiplying Sand gain by <h2 style='color: #c2b280; text-shadow: 0 0 10px #c2b280'> <br>" + format(player.s.sanddunes.max(1).pow(0.5)) + "x</h2>.<br>" + "<h3>" + format(tmp.s.effect) + " Sand Dust/s<h3> <br>"],
        "buyables"
    ]
},
    "Milestones": {
        unlocked() {return (hasUpgrade("s", 21))},
content: [
    ["blank", "15px"],
    "milestones"
]
},
},
    },
    upgrades: {
        11: { title: "451",
        description: "Begin to generate sand dunes and unlock a buyable.",
        cost: new EN("500"),
    },
    12: { title: "452",
        description: "Unlock another buyable.",
        cost: new EN("100000"),
        unlocked() {
            return hasUpgrade("s", 11)
        }
    },
    13: { title: "453",
        description: "Gain 69,420x sand.",
        cost: new EN("1e24"),
        unlocked() {
            return hasUpgrade("s", 12)
        }
    },
    14: { title: "454",
        description: "Unlock the third buyable.",
        cost: new EN("1e60"),
        unlocked() {
            return hasUpgrade("s", 13)
        }
    },
    15: { title: "455",
        description: "Gain 1e69x sand.",
        cost: new EN("1e222"),
        unlocked() {
            return hasUpgrade("s", 14)
        }
    },
    21: { title: "456",
        description: "Gain 1e308x sand.",
        cost: new EN("1e900"),
        unlocked() {
            return hasUpgrade("s", 15)
        }
    },
    22: { title: "457",
        description: "Gain 1e1,000x sand.",
        cost: new EN("1e5269"),
        unlocked() {
            return hasUpgrade("s", 21)
        }
    },
    23: { title: "458",
        description: "Unlock the fourth buyable.",
        cost: new EN("1e7000"),
        unlocked() {
            return hasUpgrade("s", 22)
        }
    },
    24: { title: "459",
        description: "Gain 1e3,003x sand.",
        cost: new EN("1e12345"),
        unlocked() {
            return hasUpgrade("s", 23)
        }
    },
    25: { title: "460",
        description: "Gain 1e10,000x sand.",
        cost: new EN("1e20000"),
        unlocked() {
            return hasUpgrade("s", 24)
        }
    },
    31: { title: "461",
        description: "Gain 1e69,420x sand.",
        cost: new EN("1e69420"),
        unlocked() {
            return hasUpgrade("s", 25)
        }
    },
    32: { title: "462",
        description: "Gain 1e1,000,000x sand.",
        cost: new EN("1e111111"),
        unlocked() {
            return hasUpgrade("s", 31)
        }
    },
    33: { title: "463",
        description: "Gain 1e100,000,000x sand.",
        cost: new EN("1e1111111"),
        unlocked() {
            return hasUpgrade("s", 32)
        }
    },
    34: { title: "464",
        description: "Gain e1.000e9x sand and make the fourth buyable cheaper.",
        cost: new EN("1e11111111"),
        unlocked() {
            return hasUpgrade("s", 33)
        }
    },
    35: { title: "465",
        description: "Gain a good boost to sand.",
        cost: new EN("ee1000"),
        unlocked() {
            return hasUpgrade("s", 34)
        }
    },
    41: { title: "466",
        description: "Unlock the fifth buyable.",
        cost: new EN("ee10000"),
        unlocked() {
            return hasUpgrade("s", 35)
        }
    },
    42: { title: "467",
        description: "Gain a big boost to sand.",
        cost: new EN("ee2e11"),
        unlocked() {
            return hasUpgrade("s", 41)
        }
    },
    43: { title: "468",
        description: "Gain a bigger boost to sand.",
        cost: new EN("eee100"),
        unlocked() {
            return hasUpgrade("s", 42)
        }
    },
    44: { title: "469",
        description: "Gain a massive boost to sand.",
        cost: new EN("eee69420"),
        unlocked() {
            return hasUpgrade("s", 43)
        }
    },
    45: { title: "470",
        description: "Gain a insane boost to sand.",
        cost: new EN("eeee9"),
        unlocked() {
            return hasUpgrade("s", 44)
        }
    },
    51: { title: "471",
        description: "Gain a EXTREME boost to sand.",
        cost: new EN("eeeee8"),
        unlocked() {
            return hasUpgrade("s", 45)
        }
    },
    52: { title: "472",
        description: "Gain a GOD boost to sand.",
        cost: new EN("10^^7"),
        unlocked() {
            return hasUpgrade("s", 51)
        }
    },
    53: { title: "473",
        description: "Gain a BEST boost to sand.",
        cost: new EN("10^^8"),
        unlocked() {
            return hasUpgrade("s", 52)
        }
    },
    54: { title: "474",
        description: "Gain a TRUE BEST boost to sand and increase other currencies.",
        cost: new EN("10^^9"),
        unlocked() {
            return hasUpgrade("s", 53)
        }
    },
    55: { title: "475",
        description: "The Onion Upgrade 71 is x256 more powerful and unlock a new layer.",
        cost: new EN("10^^12"),
        unlocked() {
            return player.o.points.gte("10^^20")
        }
    },
},
buyables: {
    11: {
        title: "<h3>First Buyable<h3>",
        cost(x) { return new EN(1).mul(new EN(3).pow(x)) },
        display() {return `<h3>Double Sand Dunes Gain.<h3>\nLevel: ` + formatWhole(player.s.buyables[11]) + `<br>Cost: ${format(this.cost())} Sand\nEffect: ${format(this.effect())}x Sand Dunes`},
        canAfford() {return player.s.points.gte(this.cost())},
        buy() {
            player.s.points = player.s.points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        unlocked() { return hasUpgrade("s", 11)},
        effect(x) {
            mult2 = new EN(x).gte(15)? new EN(4).pow(15).mul(new EN(2.5).pow(new EN(x).sub(15))):new EN(2).pow(x)
            return mult2
    },
},
    12: {
        title: "<h3>Second Buyable<h3>",
        cost(x) { return new EN(1).mul(new EN(5).pow(x)) },
        display() {return `<h3>Triple Sand Dunes Gain.<h3>\nLevel: ` + formatWhole(player.s.buyables[12]) + `<br>Cost: ${format(this.cost())} Sand\nEffect: ${format(this.effect())}x Sand Dunes`},
        canAfford() {return player.s.points.gte(this.cost())},
        buy() {
            player.s.points = player.s.points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        unlocked() { return hasUpgrade("s", 12)},
        effect(x) {
            mult2 = new EN(x).gte(50)? new EN(4).pow(69).mul(new EN(2).pow(new EN(x).sub(50))):new EN(4).pow(x)
            return mult2
    },
},
    13: {
        title: "<h3>Third Buyable<h3>",
        cost(x) { return new EN(1).mul(new EN(69).pow(x)) },
        display() {return `<h3>10x Sand Dunes Gain.<h3>\nLevel: ` + formatWhole(player.s.buyables[13]) + `<br>Cost: ${format(this.cost())} Sand\nEffect: ${format(this.effect())}x Sand Dunes`},
        canAfford() {return player.s.points.gte(this.cost())},
        buy() {
            player.s.points = player.s.points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        unlocked() { return hasUpgrade("s", 14)},
        effect(x) {
            mult2 = new EN(x).gte(1000)? new EN(10).pow((3000)).mul(new EN(1.1).pow(new EN(x).sub(1000))):new EN(10).pow(x)
            return mult2
    },
},
    14: {
        title: "<h3>Fourth Buyable<h3>",
        cost(x) { return hasUpgrade("s",34) ? new EN(2).pow(new EN(1.1).pow(x)) : new EN(2).pow(new EN(2).pow(x)) },
        display() {return `<h3>Power Sand Dunes Gain.<h3>\nLevel: ` + formatWhole(player.s.buyables[14]) + `<br>Cost: ${format(this.cost())} Sand\nEffect: ^${format(this.effect())} Sand Dunes`},
        canAfford() {return player.s.points.gte(this.cost())},
        buy() {
            player.s.points = player.s.points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        unlocked() { return hasUpgrade("s", 23)},
        effect(x) {
            mult2 = new EN(x).gte(1000000)? new EN(1.01).pow((3000)).mul(new EN(1.001).pow(new EN(x).sub(1000000))):new EN(1.01).pow(x)
            return mult2
    },
},
    15: {
        title: "<h3>Fifth Buyable<h3>",
        cost(x) { return new EN("ee10000").tetrate(new EN(1.000000000001).pow(x)) },
        display() {return `<h3>Power Sand Dunes Gain.<h3>\nLevel: ` + formatWhole(player.s.buyables[15]) + `<br>Cost: ${format(this.cost())} Sand\nEffect: ^${format(this.effect())} Sand Dunes`},
        canAfford() {return player.s.points.gte(this.cost())},
        buy() {
            player.s.points = player.s.points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        unlocked() { return hasUpgrade("s", 41)},
        effect(x) {
            mult2 = new EN(x).gte(1000000)? new EN(1.01).pow((3000)).mul(new EN(1.001).pow(new EN(x).sub(1000000))):new EN("ee9").pow(x)
            return mult2
    },
},
},
effect() {
    if (hasUpgrade("s", 11))
        return new EN(1).mul(buyableEffect("s", 11)).mul(buyableEffect("s", 12)).mul(buyableEffect("s", 13)).pow(buyableEffect("s", 14)).pow(buyableEffect("s", 15))
    let eff = EN.pow(1)
    return eff;
},
    name: "Sand",
    symbol: "🏜️", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        sanddunes: new EN(0),
        auto: false
    }},
    color: "#c2b280",
    requires: new EN("eeeeeeeeeeeeeeeeeee10"), // Can be a function that takes requirement increases into account
    resource: "Sand", // Name of prestige currency
    baseResource: "Points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    branches: ["r", "m"],
    type() {if (hasUpgrade("du", 54)) return "static"
    else return "normal"},    
    exponent() {if (hasUpgrade("du", 54)) return new EN(Infinity)
    else return new EN(0)},    
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1)
        if (player.s.sanddunes.gte(1)) mult = mult.times(player.s.sanddunes.max(1).pow(0.5))
        if (hasUpgrade('s', 13)) mult = mult.times(69420)
        if (hasUpgrade('s', 15)) mult = mult.times(1e69)
        if (hasUpgrade('s', 21)) mult = mult.times(1e308)
        if (hasUpgrade('s', 22)) mult = mult.times("1e1000")
        if (hasUpgrade('s', 24)) mult = mult.times("1e3003")
        if (hasUpgrade('s', 25)) mult = mult.times("1e10000")
        if (hasUpgrade('s', 31)) mult = mult.times("1e69420")
        if (hasUpgrade('s', 32)) mult = mult.times("ee6")
        if (hasUpgrade('s', 33)) mult = mult.times("ee8")
        if (hasUpgrade('s', 34)) mult = mult.times("ee9")
        if (hasUpgrade('s', 35)) mult = mult.times("ee2000")
        if (hasUpgrade('s', 42)) mult = mult.times("eee100")
        if (hasUpgrade('s', 43)) mult = mult.times("eee69420")
        if (hasUpgrade('s', 44)) mult = mult.times("eeee9")
        if (hasUpgrade('s', 45)) mult = mult.times("eeeee8")
        if (hasUpgrade('s', 51)) mult = mult.times("eeeeee10")
        if (hasUpgrade('s', 52)) mult = mult.times("10^^8")
        if (hasUpgrade('s', 53)) mult = mult.times("10^^9")
        if (hasUpgrade('s', 54)) mult = mult.times("10^^12")
        if (hasUpgrade('t', 54)) mult = mult.times("10^^25")
        if (hasUpgrade('u', 54)) mult = mult.times("10^^400")
        if (hasMilestone('re', 2)) mult = mult.times(8)
        if (hasUpgrade('re', 15)) mult = mult.times(256)
        if (hasUpgrade('v', 54)) mult = mult.times("10^^2500")
        if (hasUpgrade('w', 54)) mult = mult.times("10^^50000")
        if (hasUpgrade('x', 54)) mult = mult.times("10^^1e14")
        if (hasUpgrade('y', 54)) mult = mult.pow("10^^1e100")
        if (hasUpgrade('z', 54)) mult = mult.times("10^^1e1250")
        if (hasUpgrade('ar', 54)) mult = mult.pow("10^^^3")
        if (hasUpgrade('ba', 54)) mult = mult.pow("10^^^4")
        if (hasUpgrade('ci', 54)) mult = mult.times("10^^^6")

        return mult
    },
    doReset(resettingLayer) {
        let keep = [];
        if (hasMilestone("re", 8) && resettingLayer=="re") keep.push("upgrades")
        if (hasMilestone("re", 8) && resettingLayer=="re") keep.push("milestones")
        if (layers[resettingLayer].row > this.row) layerDataReset("s", keep)
    },
    autoUpgrade() { if (hasMilestone("re" , 7)) return true},

    milestones: {
        1: {
            requirementDescription: "1e1,777 Sand",
            effectDescription: "Automate the first sand buyable.",
            done() { return player.s.points.gte("1e1777") },
            toggles: [
              ["s","auto"]
            ]
        },
        2: {
            requirementDescription: "6e6,969 Sand",
            effectDescription: "Automate the second sand buyable and buy max of the first buyable.",
            done() { return player.s.points.gte("6e6969") },
            toggles: [
              ["s","auto2"]
            ]
        },
        3: {
            requirementDescription: "1e20,000 Sand",
            effectDescription: "Automate the third sand buyable and buy max of the second buyable.",
            done() { return player.s.points.gte("1e20000") },
            toggles: [
              ["s","auto3"]
            ]
        },
        4: {
            requirementDescription: "e1.000e9 Sand",
            effectDescription: "Buy max of the third buyable.",
            done() { return player.s.points.gte("ee9") },
        },
        5: {
            requirementDescription: "e1e3,003 Sand",
            effectDescription: "Autobuy the fourth buyable.",
            done() { return player.s.points.gte("ee3003") },
            toggles: [
              ["s","auto4"]
            ]
        },
        6: {
            requirementDescription: "10,000 Medals",
            effectDescription: "Buy max of the fourth buyable.",
            done() { return player.re.points.gte("10000")
            },
        },
        7: {
            requirementDescription: "1,000,000 Medals",
            effectDescription: "Autobuy the fifth buyable & buy max.",
            done() { return player.re.points.gte("1e6") },
            toggles: [
              ["s","auto5"]
            ]
        },
    },
     automate(){
      if (player.s.points.lte(0)) return
      if (player.s.auto) {
        hasMilestone("s",2) ? setBuyableAmount("s",11,tmp.s.buyables[11].canAfford?player.s.points.div(1).log(3).floor().add(1):getBuyableAmount("s",11)) : buyBuyable("s",11)
      }
      if (player.s.auto2) {
        hasMilestone("s",3) ? setBuyableAmount("s",12,tmp.s.buyables[12].canAfford?player.s.points.div(1).log(5).floor().add(1):getBuyableAmount("s",12)) : buyBuyable("s",12)
      }
      if (player.s.auto3) {
        hasMilestone("s",4) ? setBuyableAmount("s",13,tmp.s.buyables[13].canAfford?player.s.points.div(1).log(69).floor().add(1):getBuyableAmount("s",13)) : buyBuyable("s",13)
      }
      if (player.s.auto4) {
        hasMilestone("s",6) ? setBuyableAmount("s",14,tmp.s.buyables[14].canAfford?player.s.points.div(2).log(1e308).floor().add(1):getBuyableAmount("s",14)) : buyBuyable("s",14)
      }
      if (player.s.auto5) {
        hasMilestone("s",7) ? setBuyableAmount("s",15,tmp.s.buyables[15].canAfford?player.s.points.div(2).log(1e308).floor().add(1):getBuyableAmount("s",15)) : buyBuyable("s",15)
      }
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    update(diff) {
		if (hasUpgrade("s", 11)) return player.s.sanddunes = player.s.sanddunes.add(tmp.s.effect.times(diff))
	},
    row: 5, // Row the layer is in on the tree (0 is the first row)
    passiveGeneration() { return (hasMilestone("re", 1)&&player.current!="s")?1:0 },
    hotkeys: [
        {key: "s", description: "S: Reset for Sand", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){if (hasUpgrade("du", 54)) return false
    else return (hasChallenge("o", 22) || player[this.layer].unlocked)},
})