addLayer("m", {
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
                },
            },
    upgrades: {
        11: { title: "326",
        description: "Gain ^2 Keys.",
        cost: new EN("2"),

        },
        12: { title: "327",
        description: "Gain ^4 Keys.",
        cost: new EN("2"),
        unlocked() {
            return hasUpgrade("m", 11)
        }
        },
        13: { title: "328",
        description: "Gain ^8 Keys.",
        cost: new EN("2"),
        unlocked() {
            return hasUpgrade("m", 12)
        }
        },
        14: { title: "329",
        description: "Gain ^16 Keys.",
        cost: new EN("2"),
        unlocked() {
            return hasUpgrade("m", 13)
        }
        },
        15: { title: "330",
        description: "Gain ^32 Keys.",
        cost: new EN("2"),
        unlocked() {
            return hasUpgrade("m", 14)
        }
        },
        21: { title: "331",
        description: "Gain ^64 Keys.",
        cost: new EN("3"),
        unlocked() {
            return hasUpgrade("k", 43)
        }
        },
        22: { title: "332",
        description: "Gain ^128 Keys.",
        cost: new EN("3"),
        unlocked() {
            return hasUpgrade("m", 21)
        }
        },
        23: { title: "333",
        description: "Gain ^256 Keys.",
        cost: new EN("3"),
        unlocked() {
            return hasUpgrade("m", 22)
        }
        },
        24: { title: "334",
        description: "Gain ^512 Keys.",
        cost: new EN("3"),
        unlocked() {
            return hasUpgrade("m", 23)
        }
        },
        25: { title: "335",
        description: "Gain ^1,024 Keys and increase point gain.",
        cost: new EN("4"),
        unlocked() {
            return hasUpgrade("m", 24)
        }
        },
        31: { title: "336",
        description: "Gain ^2,048 Keys and increase point gain again.",
        cost: new EN("4"),
        unlocked() {
            return hasUpgrade("m", 25)
        }
        },
        32: { title: "337",
        description: "Gain ^4,096 Keys.",
        cost: new EN("5"),
        unlocked() {
            return hasUpgrade("m", 31)
        }
        },
        33: { title: "338",
        description: "Gain ^8,192 Keys.",
        cost: new EN("5"),
        unlocked() {
            return hasUpgrade("m", 32)
        }
        },
        34: { title: "339",
        description: "Gain ^16,384 Keys.",
        cost: new EN("6"),
        unlocked() {
            return hasUpgrade("m", 33)
        }
        },
        35: { title: "340",
        description: "Gain ^32,768 Keys.",
        cost: new EN("7"),
        unlocked() {
            return hasUpgrade("m", 34)
        }
        },
        41: { title: "341",
        description: "Gain ^65,536 Keys.",
        cost: new EN("11"),
        unlocked() {
            return hasUpgrade("k", 55)
        }
        },
        42: { title: "342",
        description: "Gain ^131,072 Keys.",
        cost: new EN("13"),
        unlocked() {
            return hasUpgrade("m", 41)
        }
        },
        43: { title: "343",
        description: "Gain ^262,144 Keys.",
        cost: new EN("15"),
        unlocked() {
            return hasUpgrade("m", 42)
        }
        },
        44: { title: "344",
        description: "Gain ^524,288 Keys.",
        cost: new EN("18"),
        unlocked() {
            return hasUpgrade("m", 43)
        }
        },
        45: { title: "345",
        description: "Gain ^1,048,576 Keys and increase point gain.",
        cost: new EN("18"),
        unlocked() {
            return hasUpgrade("m", 44)
        }
        },
        51: { title: "346",
        description: "Gain ^2,097,152 Keys and ^2 Lights.",
        cost: new EN("26"),
        unlocked() {
            return hasUpgrade("n", 45)
        }
        },
        52: { title: "347",
        description: "Gain ^4,194,304 Keys and ^2 Lights.",
        cost: new EN("32"),
        unlocked() {
            return hasUpgrade("m", 51)
        }
        },
        53: { title: "348",
        description: "Gain ^8,388,608 Keys and ^2 Lights.",
        cost: new EN("40"),
        unlocked() {
            return hasUpgrade("m", 52)
        }
        },
        54: { title: "349",
        description: "Gain ^16,777,216 Keys and ^2 Lights.",
        cost: new EN("50"),
        unlocked() {
            return hasUpgrade("m", 53)
        }
        },
        55: { title: "350",
        description: "Gain ^3 Lights and increase points.",
        cost: new EN("64"),
        unlocked() {
            return hasUpgrade("m", 54)
        }
        },
    /*
      use format(num) whenever displaying a number
    */
   
  },
    name: "Money", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "💵", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        auto: false
    }},
    color: "#118C4F",
    requires: new EN("e3.750e9"), // Can be a function that takes requirement increases into account
    resource: "Money", // Name of prestige currency
    baseResource: "Keys", // Name of resource prestige is based on
    baseAmount() {return player.k.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    branches: ["l", "i", "h"],
    exponent() {if (hasUpgrade("z", 53)) return new EN(Infinity)
    else return new EN(69)},     
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    row: 4, // Row the layer is in on the tree (0 is the first row)
    resetsNothing() {return hasUpgrade("o", 25)},
    hotkeys: [
        {key: "m", description: "M: Reset for Money", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    canBuyMax() { return hasMilestone("m", 1) },
    milestones: {
        1: {requirementDescription: "8 Money",
         effectDescription: "You can buy max Money.",
            done() { return player.m.points.gte(8)},},
   },
   layerShown(){if (hasUpgrade("z", 53)) return false
    else return (hasUpgrade("l", 45) || player[this.layer].unlocked)},
    autoPrestige() {
        return hasMilestone("o", 2)
    },
    doReset(resettingLayer) {
        let keep = [];
        if (hasMilestone("o", 6) && resettingLayer=="o") keep.push("milestones")
        if (hasMilestone("o", 6) && resettingLayer=="o") keep.push("upgrades")
        if (layers[resettingLayer].row > this.row) layerDataReset("m", keep)
    },
    autoUpgrade() { if (hasUpgrade("o" , 25)) return true},
})