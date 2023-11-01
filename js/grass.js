addLayer("g", {
    effect(){

    },
    effect(){
        return ExpantaNum.pow(2, player[this.layer].points)
        /*
          you should use this.layer instead of <layerID>
          Decimal.pow(num1, num2) is an easier way to do
          num1.pow(num2)
        */
      },
      effect(){
        return player[this.layer].points.max(1).pow(5000).log10().max(1)
      },
      effectDescription(){

},
doReset(resettingLayer) {
    let keep = [];
    if (hasMilestone("f", 4) && resettingLayer=="f", "4") keep.push("milestones")
    if (hasMilestone("f", 4) && resettingLayer=="f", "e") keep.push("upgrades")
    if (hasMilestone("f", 4) && resettingLayer=="f", "e") keep.push("challenges")
    if (layers[resettingLayer].row > this.row) layerDataReset("g", keep)
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
  microtabs: {
    stuff: {
                    "Upgrades": {
                        unlocked() {return (hasAchievement("a", 11))},
                content: [
                    ["blank", "15px"],
                    ["upgrades", [1,2,3,4,5,6,7,8,9]]
                ]
            },
                    "Milestones": {
                        content: [
                            ["blank", "15px"],
                            "milestones"
                        ]
                    },
                    "Challenges": {
                        unlocked() {return (hasUpgrade("g", 55))},
                        content: [
                            ["blank", "15px"],
                            "challenges"
                        ]
        },
    },
},
    upgrades: {
        11: { title: "76",
        description: "1e10x Points.",
        cost: new EN("1"),

        },
        12: { title: "77",
        description: "Point gain is boosted by Grass.",
        cost: new EN(5),
        effect() {
            return player[this.layer].points.add(69420).pow(0.420)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        unlocked() {
            return hasUpgrade("g", 11)
        }
        },
        13: { title: "78",
        description: "Gain 1e14x Points.",
        cost: new EN("15"),
        unlocked() {
            return hasUpgrade("g", 12)
        }
        },
        14: { title: "79",
        description: "Keep 4 Rows People Upgrades on reset and gain 1e10x Button Power.",
        cost: new EN("50"),
        unlocked() {
            return hasUpgrade("g", 13)
        }
        
        },
        15: { title: "80",
        description: "Gain 1e20x Prestige Points.",
        cost: new EN("200"),
        unlocked() {
            return hasUpgrade("g", 14)
        }
        },
        21: { title: "81",
        description: "Gain ^1.025 Points.",
        cost: new EN("500"),
        unlocked() {
            return hasUpgrade("g", 15)
        }
        },
        22: { title: "82",
        description: "Gain 1e21x Points.",
        cost: new EN("1e5"),
        unlocked() {
            return hasUpgrade("g", 21)
        }
        },
        23: { title: "83",
        description: "Grass gain is boosted by Points.",
        cost: new EN("1e6"),
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        effect() {
            return player.points.add(1).pow(0.0001)
            
        },
        unlocked() {
            return hasUpgrade("g", 22)
        }
        },
        24: { title: "84",
        description: "Gain 1e30x Points and Keep Row 5 People Upgrades.",
        cost: new EN("5e6"),
        unlocked() {
            return hasUpgrade("g", 23)
        }
        },
        25: { title: "85",
        description: "Unlock more button power and ants upgrades, and autobuy ants.",
        cost: new EN("1e9"),
        unlocked() {
            return hasUpgrade("g", 24)
        }
        },
        31: { title: "86",
        description: "^1.01 BP, ^1.04 People",
        cost: new EN("1e52"),
        unlocked() {
            return hasUpgrade("ant", 45)
        }
        },
        32: { title: "87",
        description: "69x Cups and 420x Grass.",
        cost: new EN("1e55"),
        unlocked() {
            return hasUpgrade("g", 31)
        }
        },
        33: { title: "88",
        description: "1e69x Button Power.",
        cost: new EN("1e58"),
        unlocked() {
            return hasUpgrade("g", 32)
        }
        },
        34: { title: "89",
        description: "1e69x People.",
        cost: new EN("2e61"),
        unlocked() {
            return hasUpgrade("g", 33)
        }
        },
        35: { title: "90",
        description: "100x Cups, 1,000x Grass and unlock a new layer.",
        cost: new EN("1e64"),
        unlocked() {
            return hasUpgrade("g", 34)
        }
        },
        41: { title: "91",
        description: "^1.01 Fruits, ^1.02 Cups, ^1.04 Grass.",
        cost: new EN("1e1490"),
        unlocked() {
            return hasUpgrade("c", 45)
        }
        },
        42: { title: "92",
        description: "^1.01 BP, ^1.02 People.",
        cost: new EN("4e1502"),
        unlocked() {
            return hasUpgrade("g", 41)
        }
        },
        43: { title: "93",
        description: "1e300x Points.",
        cost: new EN("1e1720"),
        unlocked() {
            return hasUpgrade("g", 42)
        }
        },
        44: { title: "94",
        description: "1e300x Points again.",
        cost: new EN("1e1794"),
        unlocked() {
            return hasUpgrade("g", 43)
        }
        },
        45: { title: "95",
        description: "1e200x Points.",
        cost: new EN("1e1870"),
        unlocked() {
            return hasUpgrade("g", 44)
        }
        },
        51: { title: "96",
        description: "1e150x Points.",
        cost: new EN("1e1920"),
        unlocked() {
            return hasUpgrade("g", 45)
        }
        },
        52: { title: "97",
        description: "1e100x Points.",
        cost: new EN("1e1959"),
        unlocked() {
            return hasUpgrade("g", 51)
        }
        },
        53: { title: "98",
        description: "69x Fruits, 1e25x Cups, 1e100x Grass.",
        cost: new EN("1e1984"),
        unlocked() {
            return hasUpgrade("g", 52)
        }
        },
        54: { title: "99",
        description: "1e10x Grass.",
        cost: new EN("1e2097"),
        unlocked() {
            return hasUpgrade("g", 53)
        }
        },
        55: { title: "100",
        description: "1e1,000x Points!",
        cost: new EN("1e2109"),
        unlocked() {
            return hasUpgrade("g", 54)
        }
        },
        61: { title: "?",
        description: "1e6,969x Points!",
        cost: new EN("1e3364"),
        unlocked() {
            return hasUpgrade("ant", 61)
        }
        },
    },
    challenges: {
        11: {
            name: "Buttonless",
            challengeDescription: "Raise Button Power gain to ^0.001.",
            goalDescription: "1e131,480 Points.",
            rewardDescription: "Gain 1e666x Button Power.",
            canComplete: function() {return player.points.gte("e131480")},
            unlocked() { return (hasUpgrade('g', 55)) },
        },
        12: {
            name: "Nuclear x2",
            challengeDescription: "Raise People and Button Power gain to ^0.0001.",
            goalDescription: "1e32,700 Points.",
            rewardDescription: "Gain ^1.05 Button Power.",
            canComplete: function() {return player.points.gte("e32700")},
            unlocked() { return (hasChallenge('g', 11)) },
        },
        13: {
            name: "Pointless^2",
            challengeDescription: "Raise Button Power, People, Point gain to ^0.1.",
            goalDescription: "1.00e944 Points.",
            rewardDescription: "Gain 1e777x Points and unlock 1 new row cup upgrades.",
            canComplete: function() {return player.points.gte("e944")},
            unlocked() { return (hasChallenge('g', 12)) },
            },
            21: {
                name: "Productionless^2",
                challengeDescription: "Raise Point gain to ^0.001.",
                goalDescription: "1.00e14 Points.",
                rewardDescription: "Gain ^1.03 Button Power.",
                canComplete: function() {return player.points.gte("e14")},
                unlocked() { return (hasChallenge('g', 13)) },
                },
                22: {
                    name: "Reverse",
                    challengeDescription: "Raise People gain and Button Power gain to ^0.000001.",
                    goalDescription: "1e45,550 Points.",
                    rewardDescription: "Gain ^1.02 People.",
                    canComplete: function() {return player.points.gte("e45550")},
                    unlocked() { return (hasChallenge('g', 21)) },
                    },
                    23: {
                        name: "Pointe",
                        challengeDescription: "Raise Point Gain ^0.1.",
                        goalDescription: "1e1,400 Points.",
                        rewardDescription: "Gain 1e3,003x Points and unlock 1 new row dice upgrades.",
                        canComplete: function() {return player.points.gte("e1400")},
                        unlocked() { return (hasChallenge('g', 22)) },
                        },
        },
    name: "Grass", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "🌿", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
    }},
    color: "#13D022",
    requires: new EN("1e1130"), // Can be a function that takes requirement increases into account
    resource: "Grass", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type() {if (hasUpgrade("z", 21)) return "static"
    else return "normal"},    
    exponent() {if (hasUpgrade("z", 21)) return new EN(Infinity)
    else return new EN(0.005)},          
    branches: ["b"],
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1)
        return mult
    },
    gainMult() {
        let mult = new EN(1)
        if (hasUpgrade('g', 23)) mult = mult.times(upgradeEffect('g', 23))
        if (hasUpgrade('b', 45)) mult = mult.times(100)
        if (hasUpgrade('c', 15)) mult = mult.times(1000)
        if (hasUpgrade('g', 32)) mult = mult.times(420)
        if (hasUpgrade('g', 35)) mult = mult.times(1000)
        if (hasUpgrade('d', 14)) mult = mult.times(100)
        if (hasUpgrade('d', 15)) mult = mult.times(69420)
        if (hasUpgrade('d', 22)) mult = mult.pow(1.01)
        if (hasUpgrade('d', 23)) mult = mult.times(4)
        if (hasUpgrade('c', 31)) mult = mult.times(69420)
        if (hasUpgrade('c', 32)) mult = mult.pow(1.02)
        if (hasUpgrade('c', 34)) mult = mult.times(69420)
        if (hasUpgrade('ant', 53)) mult = mult.times(1e10)
        if (hasUpgrade('d', 35)) mult = mult.pow(1.02)
        if (hasUpgrade('d', 35)) mult = mult.times(1e69)
        if (hasUpgrade('f', 15)) mult = mult.times(1e25)
        if (hasUpgrade('c', 41)) mult = mult.times(1e20)
        if (hasUpgrade('c', 45)) mult = mult.times(1e100)
        if (hasUpgrade('g', 41)) mult = mult.pow(1.04)
        if (hasUpgrade('g', 53)) mult = mult.times(1e100)
        if (hasUpgrade('g', 54)) mult = mult.times(1e10)
        if (hasUpgrade('c', 52)) mult = mult.times(1e308)
        if (hasChallenge('c', 21)) mult = mult.times("1e1000")
        if (inChallenge("f", 11)) mult = mult.pow(0.001)
        if (inChallenge("f", 11)) mult = mult.pow(0.1)
        if (hasUpgrade('i', 21)) mult = mult.pow(2)
        if (inChallenge("j", 11)) mult = mult.pow(0.1)

        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    passiveGeneration() { 
        if (hasUpgrade("z", 21)) return (hasUpgrade("z", 21)?0:0)
        if (hasMilestone("f", 1)) return (hasMilestone("f", 1)?1:0)
        },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "g", description: "G: Reset for Grass", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){if (hasUpgrade("z", 21)) return false
    else return (hasUpgrade("p", 55) || player[this.layer].unlocked)},
    autoUpgrade() { if (hasUpgrade("f" , 11)) return true},
    milestones: {
        1: {
            requirementDescription: "5 Grass",
            effectDescription: "Gain 100% of Button Power every second.",
            done() { return player.g.points.gte(5) }
        },
    },
        },
)