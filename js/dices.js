addLayer("d", {
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
        return player[this.layer].points.max(1).pow(5e10).log10().max(1)
      },
      effectDescription(){

},
effectDescription(){
    return "multiplying point gain by " + format(tmp[this.layer].effect) 
    /*
      use format(num) whenever displaying a number
    */
   
  },
  autoPrestige() {
    return hasUpgrade("f", 12)
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
            },
        },
  upgrades: {
        11: { title: "126",
        description: "1e30x Points.",
        cost: new EN("1"),

        },
        12: { title: "127",
        description: "Gain more points based on dices.",
        cost: new EN("7"),
        effect() {
            return player[this.layer].points.add(69).pow(10)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        unlocked() {
            return hasUpgrade("d", 11)
        }
        },
        13: { title: "128",
        description: "1e42x Points.",
        cost: new EN("7"),
        unlocked() {
            return hasUpgrade("d", 12)
        }
        },
        14: { title: "129",
        description: "1e32x BP, People and 100x Grass, Cups.",
        cost: new EN("8"),
        unlocked() {
            return hasUpgrade("d", 13)
        }
        },
        15: { title: "130",
        description: "69,420x Grass and 1,000x Cups.",
        cost: new EN("9"),
        unlocked() {
            return hasUpgrade("d", 14)
        }
        },
        21: { title: "131",
        description: "1e60x Points.",
        cost: new EN("9"),
        unlocked() {
            return hasUpgrade("d", 15)
        }
        },
        22: { title: "132",
        description: "^1.01 Grass, ^1.02 BP, ^1.05 People.",
        cost: new EN("10"),
        unlocked() {
            return hasUpgrade("d", 21)
        }
        },
        23: { title: "133",
        description: "2x Cups and 4x Grass.",
        cost: new EN("11"),
        unlocked() {
            return hasUpgrade("d", 22)
        }
        },
        24: { title: "134",
        description: "1e125x Points.",
        cost: new EN("11"),
        unlocked() {
            return hasUpgrade("d", 23)
        }
        },
        25: { title: "135",
        description: "1e100x People, BP and 1,000x Cups.",
        cost: new EN("12"),
        unlocked() {
            return hasUpgrade("d", 24)
        }
        },
        31: { title: "136",
        description: "1e50x Points.",
        cost: new EN("16"),
        unlocked() {
            return hasUpgrade("ant", 55)
        }
        },
        32: { title: "137",
        description: "1e100x Points.",
        cost: new EN("16"),
        unlocked() {
            return hasUpgrade("d", 31)
        }
        },
        33: { title: "138",
        description: "1e150x Points.",
        cost: new EN("16"),
        unlocked() {
            return hasUpgrade("d", 32)
        }
        },
        34: { title: "139",
        description: "1e200x Points.",
        cost: new EN("17"),
        unlocked() {
            return hasUpgrade("d", 33)
        }
        },
        35: { title: "140",
        description: "1.79e308x Points, People, BP. ^1.01 C, ^1.02 G, ^1.05 BP, ^1.1 People, 1e10x Cups, 1e69x Grass and unlocks a new layer.",
        cost: new EN("17"),
        unlocked() {
            return hasUpgrade("d", 34)
        }
        },
        41: { title: "141",
        description: "1e666x Points.",
        cost: new EN("40"),
        unlocked() {
            return hasChallenge("g", 23)
        }
        },
        42: { title: "142",
        description: "1e1,000x Points.",
        cost: new EN("40"),
        unlocked() {
            return hasUpgrade("d", 41)
        }
        },
        43: { title: "143",
        description: "1e420x Points.",
        cost: new EN("41"),
        unlocked() {
            return hasUpgrade("d", 42)
        }
        },
        44: { title: "144",
        description: "1e420x Points again.",
        cost: new EN("41"),
        unlocked() {
            return hasUpgrade("d", 43)
        }
        },
        45: { title: "145",
        description: "1e1,000x Points.",
        cost: new EN("42"),
        unlocked() {
            return hasUpgrade("d", 44)
        }
        },
        51: { title: "146",
        description: "1e1,000x Points again.",
        cost: new EN("45"),
        unlocked() {
            return hasChallenge("c", 22)
        }
        },
        52: { title: "147",
        description: "1e2,000x Points.",
        cost: new EN("45"),
        unlocked() {
            return hasUpgrade("d", 51)
        }
        },
        53: { title: "148",
        description: "1e4,000x Points.",
        cost: new EN("46"),
        unlocked() {
            return hasUpgrade("d", 52)
        }
        },
        54: { title: "149",
        description: "1e6,969x Points.",
        cost: new EN("48"),
        unlocked() {
            return hasUpgrade("d", 53)
        }
        },
        55: { title: "150",
        description: "1e10,000x Points and unlocks a new layer!!",
        cost: new EN("51"),
        unlocked() {
            return hasUpgrade("d", 54)
        }
        },
        61: { title: "?",
        description: "6.666e666,666x Points",
        cost: new EN("28"),
        unlocked() {
            return hasUpgrade("c", 61)
        }
        },
    },
    name: "Dices", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "🎲", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
    }},
    color: "#4D4B4B",
    requires: new EN("1e8300"), // Can be a function that takes requirement increases into account
    resource: "Dices", // Name of prestige currency
    baseResource: "People", // Name of resource prestige is based on
    baseAmount() {return player.p.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    branches: ["ant" , "c"],
    exponent: 4, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1)
        return mult
    },
    doReset(resettingLayer) {
        let keep = [];
        if (hasMilestone("f", 7) && resettingLayer=="f") keep.push("milestones")
        if (hasMilestone("f", 7) && resettingLayer=="f") keep.push("upgrades")
        if (hasMilestone("e", 1) && resettingLayer=="e", "h") keep.push("milestones")
        if (hasMilestone("e", 1) && resettingLayer=="e", "h") keep.push("upgrades")
        if (layers[resettingLayer].row > this.row) layerDataReset("d", keep)
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    canBuyMax() { return hasMilestone("d", 1) },
    resetsNothing() {return hasMilestone("f", 2)},
    hotkeys: [
        {key: "d", description: "D: Reset for Dices", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){if (hasUpgrade("z", 24)) return false
    else return (hasUpgrade("g", 35) || player[this.layer].unlocked)},
    milestones: {
                1: {requirementDescription: "16 Dices",
             effectDescription: "You can buy max dices.",
                done() { return player.d.points.gte(16)},},
    },
        },
)