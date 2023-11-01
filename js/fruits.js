addLayer("f", {
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
                        ["raw-html", () => `<h4 style="opacity:.5">You will see challenges, which basically decreases the production.<br> But you will get an reward for completing it!</h4>`],
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
                            unlocked() {return (hasUpgrade("e", 35))},
                            content: [
                                ["blank", "15px"],
                                "challenges"
                            ]
            },
        },
    },
    upgrades: {
        11: { title: "151",
        description: "1e100x Points and keep People Upgrades.",
        cost: new EN("1"),

        },
        12: { title: "152",
        description: "Gain more points based on Fruits and Autobuy dices.",
        cost: new EN("2"),
        effect() {
            return player[this.layer].points.add(1e10).pow(0.420)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        unlocked() {
            return hasUpgrade("f", 11)
        }
        },
        13: { title: "153",
        description: "1e150x Points.",
        cost: new EN("3"),
        unlocked() {
            return hasUpgrade("f", 12)
        }
        },
        14: { title: "154",
        description: "1e123x BP, People.",
        cost: new EN("10"),
        unlocked() {
            return hasUpgrade("f", 13)
        }
        },
        15: { title: "155",
        description: "1e10x Cups, 1e25x Grass.",
        cost: new EN("16"),
        unlocked() {
            return hasUpgrade("f", 14)
        }
        },
        21: { title: "156",
        description: "1e200x Points.",
        cost: new EN("25"),
        unlocked() {
            return hasUpgrade("f", 15)
        }
        },
        22: { title: "157",
        description: "^1.024 People.",
        cost: new EN("69"),
        unlocked() {
            return hasUpgrade("f", 21)
        }
        },
        23: { title: "158",
        description: "0x Points (Joke)",
        cost: new EN("100"),
        unlocked() {
            return hasUpgrade("f", 22)
        }
        },
        24: { title: "159",
        description: "Every Upgrade = 1,000x Points.",
        effect() {
            let effect = ExpantaNum.pow(1000, player.f.upgrades.length)
            return effect
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        cost: new EN("200"),
        unlocked() {
            return hasUpgrade("f", 23)
        }
        },
        25: { title: "160",
        description: "Gain more Fruits based on points.",
        cost: new EN("250"),
        effect() {
            return player.points.add(1).pow(0.000001)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        unlocked() {
            return hasUpgrade("f", 24)
        }
        },
        31: { title: "161",
        description: "1e300x Points.",
        cost: new EN("300"),
        unlocked() {
            return hasUpgrade("f", 25)
        }
        },
        32: { title: "162",
        description: "1e200x Points.",
        cost: new EN("666"),
        unlocked() {
            return hasUpgrade("f", 31)
        }
        },
        33: { title: "163",
        description: "Double Fruits.",
        cost: new EN("1337"),
        unlocked() {
            return hasUpgrade("f", 32)
        }
        },
        34: { title: "164",
        description: "Triple Fruits.",
        cost: new EN("2500"),
        unlocked() {
            return hasUpgrade("f", 33)
        }
        },
        35: { title: "165",
        description: "Double Fruits gain, 1e100x Points and unlock another challenge in button power layer.",
        cost: new EN("15000"),
        unlocked() {
            return hasUpgrade("f", 34)
        }
        },
        41: { title: "166",
        description: "1e20,000,000x Points.",
        cost: new EN("1e132229"),
        unlocked() {
            return hasUpgrade("h", 35)
        }
        },
        42: { title: "167",
        description: "^1.005 Points.",
        cost: new EN("1e151543"),
        unlocked() {
            return hasUpgrade("f", 41)
        }
        },
        43: { title: "168",
        description: "1e50,000,000x Points.",
        cost: new EN("1e175078"),
        unlocked() {
            return hasUpgrade("f", 42)
        }
        },
        44: { title: "169",
        description: "1J10x Points (Joke)",
        cost: new EN("1e234271"),
        unlocked() {
            return hasUpgrade("f", 43)
        }
        },
        45: { title: "170",
        description: "1e60,070,000x Points and unlock a new layer.",
        cost: new EN("1e234317"),
        unlocked() {
            return hasUpgrade("f", 44)
        }
        },
        51: { title: "171",
        description: "Speed up by a small amount.",
        cost: new EN("e1e21"),
        unlocked() {
            return hasUpgrade("j", 45)
        }
        },
        52: { title: "172",
        description: "Speed up by a small amount again.",
        cost: new EN("e1e22"),
        unlocked() {
            return hasUpgrade("f", 51)
        }
        },
        53: { title: "173",
        description: "Speed up by a small amount yet again.",
        cost: new EN("e3e23"),
        unlocked() {
            return hasUpgrade("f", 52)
        }
        },
        54: { title: "174",
        description: "Speed up by a small amount yet again and again.",
        cost: new EN("e3e24"),
        unlocked() {
            return hasUpgrade("f", 53)
        }
        },
        55: { title: "175",
        description: "Speed up by a small amount yet again and again and again.",
        cost: new EN("e1e26"),
        unlocked() {
            return hasUpgrade("f", 53)
        }
        },
        61: { title: "?",
        description: "1e500,000,000x Points.",
        cost: new EN("1e72"),
        unlocked() {
            return hasUpgrade("d", 61)
        }
        },
    },
    milestones: {
        1: {
            requirementDescription: "1 Total Fruits",
            effectDescription: "Gain 100%  Grass and Cups every second.",
            done() { return player.f.points.gte(1) }
        },
                2: {requirementDescription: "8 Total Fruits",
             effectDescription: "Dices reset nothing.",
                done() { return player.f.total.gte(8)},},
                3: {requirementDescription: "15 Total Fruits",
             effectDescription: "Unlock a challenge in button power layer.",
                done() { return player.f.total.gte(15)},},
    },
    challenges: {
        11: {
            name: "Resolve",
            challengeDescription: "Raise People, BP, Grass and Cups to ^0.001.",
            goalDescription: "1e26,159,020 Points.",
            rewardDescription: "Gain ^1.01 Points.",
            canComplete: function() {return player.points.gte("e26159020")},
            unlocked() { return (hasUpgrade('e', 35)) },
        },
        12: {
            name: "Divided",
            challengeDescription: "Raise People, BP, Grass, Cups and Points to ^0.1.",
            goalDescription: "1e28,825 Points.",
            rewardDescription: "Unlock a new layer and ^1.02 Points.",
            canComplete: function() {return player.points.gte("e28825")},
            unlocked() { return (hasChallenge('f', 11)) },
    }},
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
        return player[this.layer].points.max(1).pow(5e69).log10().max(1)
      },
      effectDescription(){

},
effectDescription(){
    return "multiplying point gain by " + format(tmp[this.layer].effect) 
    /*
      use format(num) whenever displaying a number
    */
   
  },
    name: "Fruits", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "🍇", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        auto: false
    }},
    color: "#800080",
    requires: new EN("1e499"), // Can be a function that takes requirement increases into account
    resource: "Fruits", // Name of prestige currency
    baseResource: "Grass", // Name of resource prestige is based on
    baseAmount() {return player.g.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    branches: ["c"],
    exponent: 0.01, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1)
     if (hasUpgrade('f', 33)) mult = mult.times(2)
     if (hasUpgrade('f', 34)) mult = mult.times(3)
     if (hasUpgrade('f', 35)) mult = mult.times(2)
     if (hasUpgrade('g', 41)) mult = mult.pow(1.01)
     if (hasUpgrade('g', 53)) mult = mult.times(69)
     if (inChallenge("j", 11)) mult = mult.pow(0.1)

        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    row: 3, // Row the layer is in on the tree (0 is the first row)
    passiveGeneration() { 
        if (hasUpgrade("z", 31)) return (hasUpgrade("z", 31)?0:0)
        if (hasMilestone("j", 1)) return (hasMilestone("j", 1)?1:0)
        },    
        doReset(resettingLayer) {
        let keep = [];
        if (hasMilestone("j", 2) && resettingLayer=="j", "k", "l", "m", "n") keep.push("milestones")
        if (hasMilestone("j", 2) && resettingLayer=="j", "k", "l", "m", "n") keep.push("upgrades")
        if (hasMilestone("j", 2) && resettingLayer=="j", "k", "l", "m", "n") keep.push("challenges")
        if (layers[resettingLayer].row > this.row) layerDataReset("f", keep)
    },
    hotkeys: [
        {key: "f", description: "F: Reset for Fruits", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){if (hasUpgrade("z", 31)) return false
    else return (hasUpgrade("d", 35) || player[this.layer].unlocked)},
})