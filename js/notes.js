addLayer("n", {
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
        11: { title: "351",
        description: "Gain x69,420 Lights.",
        cost: new EN("1"),

        },
        12: { title: "352",
        description: "Gain x6.969e69 Lights and increase point gain.",
        cost: new EN("2"),
        unlocked() {
            return hasUpgrade("n", 11)
        }
        },
        13: { title: "353",
        description: "Gain x1e420 Lights.",
        cost: new EN("3"),
        unlocked() {
            return hasUpgrade("n", 12)
        }
        },
        14: { title: "354",
        description: "Gain x1e666 Lights.",
        cost: new EN("3"),
        unlocked() {
            return hasUpgrade("n", 13)
        }
        },
        15: { title: "355",
        description: "Gain x1e1,000 Lights and increase point gain.",
        cost: new EN("4"),
        unlocked() {
            return hasUpgrade("n", 14)
        }
        },
        21: { title: "356",
        description: "Gain x1e2,000 Lights and increase point gain again.",
        cost: new EN("4"),
        unlocked() {
            return hasUpgrade("n", 15)
        }
        },
        22: { title: "357",
        description: "Gain x1e2,000 Lights.",
        cost: new EN("4"),
        unlocked() {
            return hasUpgrade("n", 21)
        }
        },
        23: { title: "358",
        description: "Gain x1e3,000 Lights.",
        cost: new EN("5"),
        unlocked() {
            return hasUpgrade("n", 22)
        }
        },
        24: { title: "359",
        description: "Gain x1e5,000 Lights.",
        cost: new EN("5"),
        unlocked() {
            return hasUpgrade("n", 23)
        }
        },
        25: { title: "360",
        description: "Gain x1e10,000 Lights and increase point gain.",
        cost: new EN("5"),
        unlocked() {
            return hasUpgrade("n", 24)
        }
        },
        31: { title: "361",
        description: "Gain x1e10,000 Lights.",
        cost: new EN("6"),
        unlocked() {
            return hasUpgrade("n", 25)
        }
        },
        32: { title: "362",
        description: "Gain x1e20,000 Lights.",
        cost: new EN("6"),
        unlocked() {
            return hasUpgrade("n", 31)
        }
        },
        33: { title: "363",
        description: "Gain x1e30,000 Lights and increase point gain.",
        cost: new EN("6"),
        unlocked() {
            return hasUpgrade("n", 32)
        }
        },
        34: { title: "364",
        description: "Gain x1e40,000 Lights.",
        cost: new EN("6"),
        unlocked() {
            return hasUpgrade("n", 33)
        }
        },
        35: { title: "365",
        description: "Gain x1e100,000 Lights and increase point gain.",
        cost: new EN("7"),
        unlocked() {
            return hasUpgrade("n", 34)
        }
        },
        41: { title: "366",
        description: "Gain x1e100,000 Lights.",
        cost: new EN("7"),
        unlocked() {
            return hasUpgrade("n", 35)
        }
        },
        42: { title: "367",
        description: "Gain x1e200,000 Lights and increase point gain.",
        cost: new EN("8"),
        unlocked() {
            return hasUpgrade("n", 41)
        }
        },
        43: { title: "368",
        description: "Gain x1e200,000 Lights.",
        cost: new EN("8"),
        unlocked() {
            return hasUpgrade("n", 42)
        }
        },
        44: { title: "369",
        description: "Gain x1e500,000 Lights.",
        cost: new EN("9"),
        unlocked() {
            return hasUpgrade("n", 43)
        }
        },
        45: { title: "370",
        description: "Gain x1e1,000,000 Lights and increase point gain.",
        cost: new EN("9"),
        unlocked() {
            return hasUpgrade("n", 44)
        }
        },
        51: { title: "371",
        description: "Gain ^2 Lights and increase point gain.",
        cost: new EN("16"),
        unlocked() {
            return hasUpgrade("n", 45)
        }
        },
        52: { title: "372",
        description: "Gain ^2 Lights.",
        cost: new EN("17"),
        unlocked() {
            return hasUpgrade("n", 51)
        }
        },
        53: { title: "373",
        description: "Gain ^2 Lights and increase point gain.",
        cost: new EN("19"),
        unlocked() {
            return hasUpgrade("n", 52)
        }
        },
        54: { title: "374",
        description: "Gain ^2 Lights.",
        cost: new EN("21"),
        unlocked() {
            return hasUpgrade("n", 53)
        }
        },
        55: { title: "375",
        description: "Gain ^2 Lights and unlock a new layer!",
        cost: new EN("23"),
        unlocked() {
            return hasUpgrade("n", 54)
        }
        },
    
    /*
      use format(num) whenever displaying a number
    */
   
  },
    name: "Notebooks", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "📓", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        auto: false
    }},
    color: "#ff7eb9",
    requires: new EN("1e3392"), // Can be a function that takes requirement increases into account
    resource: "Notebooks", // Name of prestige currency
    baseResource: "Lights", // Name of resource prestige is based on
    baseAmount() {return player.l.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    branches: ["m", "i"],
    exponent() {if (hasUpgrade("z", 55)) return new EN(Infinity)
    else return new EN(7)},     
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    canBuyMax() { return hasMilestone("n", 1) },
    row: 4, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "n", description: "N: Reset for Notebook", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    milestones: {
        1: {requirementDescription: "8 Notesbooks",
         effectDescription: "You can buy max Notesbooks.",
            done() { return player.n.points.gte(8)},},
   },
   layerShown(){if (hasUpgrade("z", 55)) return false
    else return (hasUpgrade("l", 55) || player[this.layer].unlocked)},
    autoUpgrade() { if (hasUpgrade("o" , 41)) return true},
    resetsNothing() {return hasUpgrade("o", 41)},
    autoPrestige() {
        return hasMilestone("o", 2)
    },
    doReset(resettingLayer) {
        let keep = [];
        if (hasMilestone("o", 7) && resettingLayer=="o") keep.push("milestones")
        if (hasMilestone("o", 7) && resettingLayer=="o") keep.push("upgrades")
        if (layers[resettingLayer].row > this.row) layerDataReset("n", keep)
    },
})