addLayer("u", {
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
        "Stars": {
unlocked() {return (hasUpgrade("u", 11))},
        content: [
    ["blank", "15px"],
    ["display-text", () => "You have <h2 style='color: #e5e500; text-shadow: 0 0 10px #e5e500'>" + format(player.u.stars) + "</h2> Stars ⭐, multiplying Universal gain by <h2 style='color: #e5e500; text-shadow: 0 0 10px #e5e500'> <br>" + format(player.u.stars.max(1).pow(0.69420)) + "x</h2>."],
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
        11: { title: "501",
        description: "Unlock a buyable.",
        cost: new EN("100"),
        },
        12: { title: "502",
        description: "Unlock another buyable.",
        cost: new EN("100000"),
        unlocked() {
            return hasUpgrade("u", 11)
        }
        },
        13: { title: "503",
        description: "Gain 1e64x stars.",
        cost: new EN("10000000"),
        unlocked() {
            return hasUpgrade("u", 12)
        }
        },
        14: { title: "504",
        description: "Gain more stars based on universal.",
        cost: new EN("1e88"),
        unlocked() {
            return hasUpgrade("u", 13)
        },
        effect(){return player.u.points.root(1).add(1).gte("ee200") ? new EN("ee200") : player.u.points.root(1).add(1)},
        effectDisplay(){return `${format(this.effect())}x`}
    },
    15: { title: "505",
    description: "Unlock the eighth buyable.",
    cost: new EN("1e465"),
    unlocked() {
        return hasUpgrade("u", 14)
    }
    },
    21: { title: "506",
    description: "Gain 1e3,200x stars.",
    cost: new EN("1e10000"),
    unlocked() {
        return hasUpgrade("u", 15)
    }
    },
    22: { title: "507",
    description: "Gain ^1.44 stars.",
    cost: new EN("1e42000"),
    unlocked() {
        return hasUpgrade("u", 21)
    }
    },
    23: { title: "508",
    description: "Gain x1e100,000 stars.",
    cost: new EN("1e70000000"),
    unlocked() {
        return hasUpgrade("u", 22)
    }
    },
    24: { title: "509",
        description: "Stars boosts itself.",
        cost: new EN("1e70000001"),
        unlocked() {
         return hasUpgrade("u", 23)
        },
        effect(){return player.u.stars.root(2).add(1).gte("ee200") ? new EN("ee200") : player.u.stars.root(2).add(1)},
        effectDisplay(){return `${format(this.effect())}x`}
    },
    25: { title: "510",
    description: "Gain xe1.000e100 stars.",
    cost: new EN("ee50"),
    unlocked() {
        return hasUpgrade("u", 24)
    }
    },
    31: { title: "511",
    description: "Unlock the ninth buyable.",
    cost: new EN("ee150"),
    unlocked() {
        return hasUpgrade("u", 25)
    }
    },
    32: { title: "512",
    description: "Gain e1e1,000,000x Stars.",
    cost: new EN("ee69420"),
    unlocked() {
        return hasUpgrade("u", 31)
    }
    },
    33: { title: "513",
    description: "Gain a lot of stars.",
    cost: new EN("eee6"),
    unlocked() {
        return hasUpgrade("u", 32)
    }
    },
    34: { title: "514",
    description: "Gain even more stars.",
    cost: new EN("eee9"),
    unlocked() {
        return hasUpgrade("u", 33)
    }
    },
    35: { title: "515",
    description: "Gain a lot more stars.",
    cost: new EN("eeee9"),
    unlocked() {
        return hasUpgrade("u", 34)
    }
    },
    41: { title: "516",
    description: "Gain so much stars.",
    cost: new EN("10^^7"),
    unlocked() {
        return hasUpgrade("u", 35)
    }
    },
    42: { title: "517",
    description: "Gain a insane amount of stars.",
    cost: new EN("10^^10"),
    unlocked() {
        return hasUpgrade("u", 41)
    }
    },
    43: { title: "518",
    description: "Gain a extreme amount of stars.",
    cost: new EN("10^^15"),
    unlocked() {
        return hasUpgrade("u", 42)
    }
    },
    44: { title: "519",
    description: "Gain a intense amount of stars.",
    cost: new EN("10^^25"),
    unlocked() {
        return hasUpgrade("u", 43)
    }
    },
    45: { title: "520",
    description: "Gain a intense amount of stars.",
    cost: new EN("10^^30"),
    unlocked() {
        return hasUpgrade("u", 44)
    }
    },
    51: { title: "521",
    description: "Gain a GOD amount of stars.",
    cost: new EN("10^^50"),
    unlocked() {
        return hasUpgrade("u", 45)
    }
    },
    52: { title: "522",
    description: "Gain a BEST amount of stars.",
    cost: new EN("10^^69"),
    unlocked() {
        return hasUpgrade("u", 51)
    }
    },
    53: { title: "523",
    description: "Gain a TRUE BEST amount of stars.",
    cost: new EN("10^^100"),
    unlocked() {
        return hasUpgrade("u", 52)
    }
    },
    54: { title: "524",
    description: "Increase Row 5 - Row 6 Currencies.",
    cost: new EN("10^^200"),
    unlocked() {
        return hasUpgrade("u", 53)
    }
    },
    55: { title: "525",
    description: "The Onion Upgrade 71 is x4.294e9 more powerful and unlock a new layer!",
    cost: new EN("10^^300"),
    unlocked() {
        return player.o.points.gte("10^^500")
    }
    },
    61: { title: "You are stuck?",
    description: "Press this then.",
    cost: new EN("e45000"),
    unlocked() {
        return player.u.points.gte("e45000")
    }
    },
},
    buyables: {
        11: {
          title: "<h3>Sixth Buyable<h3>",
          cost(x) {return new EN(1).mul(new EN(2).pow(x)).floor()},
          canAfford() { return player.u.points.gte(this.cost())},
          buy() {
             player.u.points = player.u.points.sub(this.cost())
             setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
          },
          display() {return `<h3>Generate stars!<h3>\nLevel: `+ formatWhole(player.u.buyables[11]) + `\nCost: ${format(this.cost())}\n Universal<br>Effect: +${format(this.effect())} stars/s`},
          effect(x) { 
            mult2 = new EN(x)
            mult2 = mult2.mul(buyableEffect("u",12))
            mult2 = mult2.mul(hasUpgrade("u",13)?1e64:1)
            mult2 = mult2.mul(hasUpgrade("u",14)?upgradeEffect("u",14):1)
            mult2 = mult2.mul(buyableEffect("u",13))
            mult2 = mult2.mul(hasUpgrade("u",21)?"1e3200":1)
            mult2 = mult2.pow(hasUpgrade("u",22)?1.44:1)
            mult2 = mult2.mul(hasUpgrade("u",23)?"1e100000":1)
            mult2 = mult2.mul(hasUpgrade("u",24)?upgradeEffect("u",24):1)
            mult2 = mult2.mul(hasUpgrade("u",25)?"ee100":1)
            mult2 = mult2.pow(buyableEffect("u",14))
            mult2 = mult2.mul(hasUpgrade("u",32)?"eee6":1)
            mult2 = mult2.mul(hasUpgrade("u",33)?"eee9":1)
            mult2 = mult2.mul(hasUpgrade("u",34)?"eeee9":1)
            mult2 = mult2.mul(hasUpgrade("u",35)?"10^^7":1)
            mult2 = mult2.mul(hasUpgrade("u",41)?"10^^10":1)
            mult2 = mult2.mul(hasUpgrade("u",42)?"10^^15":1)
            mult2 = mult2.mul(hasUpgrade("u",43)?"10^^25":1)
            mult2 = mult2.mul(hasUpgrade("u",44)?"10^^30":1)
            mult2 = mult2.mul(hasUpgrade("u",45)?"10^^50":1)
            mult2 = mult2.mul(hasUpgrade("u",51)?"10^^69":1)
            mult2 = mult2.mul(hasUpgrade("u",52)?"10^^100":1)
            mult2 = mult2.mul(hasUpgrade("u",53)?"10^^200":1)
            mult2 = mult2.mul(hasUpgrade("u",54)?"10^^300":1)
            return new EN(mult2)}
        },
        12: {
            title: "<h3>Seventh Buyable<h3>",
            cost(x) {return new EN(1).mul(new EN(3).pow(x)).floor()},
            canAfford() { return player.u.points.gte(this.cost())},
            buy() {
               player.u.points = player.u.points.sub(this.cost())
               setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            display() {return `<h3>Double star gain.<h3>\nLevel: `+ formatWhole(player.u.buyables[12]) + `\nCost: ${format(this.cost())}\n Universal<br>Effect: x${format(this.effect())} stars.`},
            unlocked(){return hasUpgrade("u",12)},
            effect(x) { 
              mult2 = new EN(x)
              mult2 = new EN(x).gte(200) ? new EN(2).pow(200).mul(new EN(1.25).pow(new EN(x).sub(200))) : new EN(2).pow(x)
              return new EN(mult2)}
          },
          13: {
            title: "<h3>Eighth Buyable<h3>",
            cost(x) {return new EN("1.79e308").mul(new EN(69420).pow(x)).floor()},
            canAfford() { return player.u.points.gte(this.cost())},
            buy() {
               player.u.points = player.u.points.sub(this.cost())
               setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            display() {return `<h3>100x star gain.<h3>\nLevel: `+ formatWhole(player.u.buyables[13]) + `\nCost: ${format(this.cost())}\n Universal<br>Effect: x${format(this.effect())} stars.`},
            unlocked(){return hasUpgrade("u",15)},
            effect(x) { 
              mult2 = new EN(x)
              mult2 = new EN(x).gte(1e308) ? new EN(100).pow(200).mul(new EN(1.25).pow(new EN(x).sub(1e308))) : new EN(100).pow(x)
              return new EN(mult2)}
          },
          14: {
            title: "<h3>Ninth Buyable<h3>",
            cost(x) {return new EN("2").pow(new EN(69420).pow(x)).floor()},
            canAfford() { return player.u.points.gte(this.cost())},
            buy() {
               player.u.points = player.u.points.sub(this.cost())
               setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            display() {return `<h3>Exponentiate star gain.<h3>\nLevel: `+ formatWhole(player.u.buyables[14]) + `\nCost: ${format(this.cost())}\n Universal<br>Effect: ^${format(this.effect())} stars.`},
            unlocked(){return hasUpgrade("u",31)},
            effect(x) { 
              mult2 = new EN(x)
              mult2 = new EN(x).gte(1e308) ? new EN(100).pow(200).mul(new EN(2).pow(new EN(x).sub(1e308))) : new EN(2).pow(x)
              return new EN(mult2)}
          },
    },
    automate(){
        if (player.u.points.lte(0)) return
        if (player.u.auto) {
         addBuyables("u",11,player.u.points.times(new EN(1.5)).div(new EN(2).pow(getBuyableAmount("u",11).plus(1))).plus(1).log(1).floor());
        }
         if (player.u.auto2) {
            addBuyables("u",12,player.u.points.times(new EN(1)).div(new EN(4).pow(getBuyableAmount("u",12).plus(1))).plus(1).log(1).floor());
        }
        if (player.u.auto3) {
            addBuyables("u",13,player.u.points.times(new EN(1.79e308)).div(new EN(69420).pow(getBuyableAmount("u",13).plus(1))).plus(1).log(1).floor());
        }
        if (player.u.auto4) {
            hasMilestone("u",5) ? setBuyableAmount("u",14,tmp.u.buyables[14].canAfford?player.u.points.div(2).log(1e308).floor().add(1):getBuyableAmount("u",14)) : buyBuyable("u",14)
        }
    },
    milestones: {
        1: {
            requirementDescription: "1e3,003 Universal",
            effectDescription: "Automate the first universal buyable and buy max.",
            done() { return player.u.points.gte("1e3003") },
            toggles: [
              ["u","auto"]
            ]
        },
        2: {
            requirementDescription: "6e6,969 Universal",
            effectDescription: "Automate the second universal buyable and buy max.",
            done() { return player.u.points.gte("6e6969") },
            toggles: [
              ["u","auto2"]
            ]
        },
        3: {
            requirementDescription: "1e10,000,000 Universal",
            effectDescription: "Automate the third universal buyable and buy max.",
            done() { return player.u.points.gte("ee7") },
            toggles: [
              ["u","auto3"]
            ]
        },
        4: {
            requirementDescription: "e1e1,000,000 Universal",
            effectDescription: "Automate the fourth universal buyable.",
            done() { return player.u.points.gte("eee6") },
            toggles: [
              ["u","auto4"]
            ]
        },
        5: {
            requirementDescription: "100,000,000 Medals",
            effectDescription: "Buy max of the fourth buyable.",
            done() { return player.re.points.gte("1e8") },
        },
    },
    update(diff) {
        player.u.stars = player.u.stars.add(buyableEffect("u", 11).mul(diff))
      },
    name: "Universal", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "🌌", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        stars: new EN(0),
        auto: false
    }},
    color: "#005395",
    requires: new EN("10^^1000"), // Can be a function that takes requirement increases into account
    resource: "Universal", // Name of prestige currency
    baseResource: "Points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    branches: ["t", "n"],
    type() {if (hasUpgrade("ga", 54)) return "static"
    else return "normal"},    
    exponent() {if (hasUpgrade("ga", 54)) return new EN(Infinity)
    else return new EN(0)},    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1)
        if (player.u.stars.gte(1)) mult = mult.times(player.u.stars.max(1).pow(0.69420))
        if (hasMilestone('re', 2)) mult = mult.times(2)
        if (hasUpgrade('re', 15)) mult = mult.times(16)
        if (hasUpgrade('re', 22)) mult = mult.times(2)
        if (hasUpgrade('u', 61)) mult = mult.times("ee8")
        if (hasUpgrade('v', 54)) mult = mult.times("10^^1000")
        if (hasUpgrade('re', 43)) mult = mult.times(upgradeEffect('re', 43))
        if (hasUpgrade('w', 54)) mult = mult.times("10^^25000")
        if (hasUpgrade('x', 54)) mult = mult.times("10^^1e12")
        if (hasUpgrade('y', 54)) mult = mult.pow("10^^1e50")
        if (hasUpgrade('z', 54)) mult = mult.times("10^^1e700")
        if (hasUpgrade('ar', 54)) mult = mult.pow("10^^^3")
        if (hasUpgrade('ba', 54)) mult = mult.pow("10^^^4")
        if (hasUpgrade('ci', 54)) mult = mult.times("10^^^6")
        if (hasUpgrade('du', 54)) mult = mult.times("10^^^10")
        if (hasUpgrade('eg', 54)) mult = mult.times("10^^^25")
        if (hasUpgrade('fi', 54)) mult = mult.times("10^^^50")

        return mult
    },
    autoUpgrade() { if (hasMilestone("re" , 9)) return true},
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    doReset(resettingLayer) {
        let keep = [];
        if (hasMilestone("re", 11) && resettingLayer=="re") keep.push("upgrades")
        if (hasMilestone("re", 11) && resettingLayer=="re") keep.push("milestones")
        if (layers[resettingLayer].row > this.row) layerDataReset("u", keep)
    },
    row: 5, // Row the layer is in on the tree (0 is the first row)
    passiveGeneration() { return (hasMilestone("re", 1)&&player.current!="u")?1:0 },
    hotkeys: [
        {key: "u", description: "U: Reset for Universal", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){if (hasUpgrade("ga", 54)) return false
    else return (hasChallenge("o", 23) || player[this.layer].unlocked)},
})