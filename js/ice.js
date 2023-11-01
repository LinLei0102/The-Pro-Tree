addLayer("i", {
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
        11: { title: "226",
        description: "1e100,000,000x Points.",
        cost: new EN("2"),

        },
        12: { title: "227",
        description: "1e200,000,000x Points.",
        cost: new EN("8"),
        unlocked() {
            return hasUpgrade("i", 11)
        }
        },
        13: { title: "228",
        description: "Sets your points to -1 (Joke).",
        cost: new EN("8"),
        unlocked() {
            return hasUpgrade("i", 12)
        }
        },
        14: { title: "229",
        description: "1e100,000,000x Points.",
        cost: new EN("8"),
        unlocked() {
            return hasUpgrade("i", 13)
        }
        },
        15: { title: "230",
        description: "1e300,000,003x Points.",
        cost: new EN("8"),
        unlocked() {
            return hasUpgrade("i", 14)
        }
        },
        21: { title: "231",
        description: "Square Grass and Cup gain.",
        cost: new EN("9"),
        unlocked() {
            return hasUpgrade("i", 15)
        }
        },
        22: { title: "232",
        description: "1e300,000,003x Points again.",
        cost: new EN("9"),
        unlocked() {
            return hasUpgrade("i", 21)
        }
        },
        23: { title: "233",
        description: "1e420,000,000x Points.",
        cost: new EN("9"),
        unlocked() {
            return hasUpgrade("i", 22)
        }
        },
        24: { title: "234",
        description: "^1.001 Points.",
        cost: new EN("9"),
        unlocked() {
            return hasUpgrade("i", 23)
        }
        },
        25: { title: "235",
        description: "ee9x Points.",
        cost: new EN("9"),
        unlocked() {
            return hasUpgrade("i", 24)
        }
        },
        31: { title: "236",
        description: "ee9x Points again.",
        cost: new EN("10"),
        unlocked() {
            return hasUpgrade("i", 25)
        }
        },
        32: { title: "237",
        description: "^1.01 Point Gain.",
        cost: new EN("10"),
        unlocked() {
            return hasUpgrade("i", 31)
        }
        },
        33: { title: "238",
        description: "^1.005 Point Gain.",
        cost: new EN("11"),
        unlocked() {
            return hasUpgrade("i", 32)
        }
        },
        34: { title: "239",
        description: "ee9x Points again.",
        cost: new EN("11"),
        unlocked() {
            return hasUpgrade("i", 33)
        }
        },
        35: { title: "240",
        description: "ee10x Points.",
        cost: new EN("11"),
        unlocked() {
            return hasUpgrade("i", 34)
        }
        },
        41: { title: "241",
        description: "ee12x Points.",
        cost: new EN("18"),
        unlocked() {
            return hasUpgrade("h", 45)
        }
        },
        42: { title: "242",
        description: "ee13x Points.",
        cost: new EN("19"),
        unlocked() {
            return hasUpgrade("i", 41)
        }
        },
        43: { title: "243",
        description: "ee13x Points.",
        cost: new EN("21"),
        unlocked() {
            return hasUpgrade("i", 42)
        }
        },
        44: { title: "244",
        description: "ee14x Points.",
        cost: new EN("22"),
        unlocked() {
            return hasUpgrade("i", 43)
        }
        },
        45: { title: "245",
        description: "ee15x Points and unlock a new layer.",
        cost: new EN("26"),
        unlocked() {
            return hasUpgrade("i", 44)
        }
        },
        51: { title: "246",
        description: "Speed up by a large amount.",
        cost: new EN("1e40"),
        unlocked() {
            return hasUpgrade("h",55)
        }
        },
        52: { title: "247",
        description: "Speed up by a large amount again.",
        cost: new EN("1e63"),
        unlocked() {
            return hasUpgrade("i", 51)
        }
        },
        53: { title: "248",
        description: "Speed up by a large amount yet again.",
        cost: new EN("1e123"),
        unlocked() {
            return hasUpgrade("i", 52)
        }
        },
        54: { title: "249",
        description: "Speed up by a large amount yet again and again.",
        cost: new EN("1e200"),
        unlocked() {
            return hasUpgrade("i", 53)
        }
        },
        55: { title: "250",
        description: "Speed up by a large amount yet again and again and again.",
        cost: new EN("1.79e308"),
        unlocked() {
            return hasUpgrade("i", 54)
        }
        },
        61: { title: "?",
        description: "Complete the challenge.",
        cost: new EN("230960000"),
        unlocked() {
            return hasUpgrade("h", 61)
        }
        },
    },
    milestones: {
         1: {requirementDescription: "9 Ice",
          effectDescription: "You can buy max Ice.",
             done() { return player.i.points.gte(9)},},
    },
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
        return player[this.layer].points.max(1).pow("5e3000003").log10().max(1)
      },
      effectDescription(){

},
effectDescription(){
    return "multiplying point gain by " + format(tmp[this.layer].effect) 
    /*
      use format(num) whenever displaying a number
    */
   
  },
    name: "Ice", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "🧊", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        auto: false
    }},
    color: "#b4cffa",
    requires: new EN("ee10"), // Can be a function that takes requirement increases into account
    resource: "Ice", // Name of prestige currency
    baseResource: "Points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    branches: ["c"],
    exponent() {if (hasUpgrade("z", 41)) return new EN(Infinity)
    else return new EN(12)},       
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    canBuyMax() { return hasMilestone("i", 1) },
    doReset(resettingLayer) {
        let keep = [];
        if (hasMilestone("j", 5) && resettingLayer=="j", "k") keep.push("milestones")
        if (hasMilestone("j", 5) && resettingLayer=="j", "k") keep.push("upgrades")
        if (layers[resettingLayer].row > this.row) layerDataReset("i", keep)
    },
    row: 3, // Row the layer is in on the tree (0 is the first row)
    resetsNothing() {return hasMilestone("j", 7)},
    hotkeys: [
        {key: "i", description: "I: Reset for Ice", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    autoPrestige() {
        return hasMilestone("j", 7)
    },
    layerShown(){if (hasUpgrade("z", 41)) return false
    else return (hasUpgrade("f", 45) || player[this.layer].unlocked)},
})