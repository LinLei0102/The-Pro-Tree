addLayer("e", {
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
        11: { title: "176",
        description: "1e6,969x Points.",
        cost: new EN("1"),

        },
        12: { title: "177",
        description: "Gain more points based on Electricity.",
        cost: new EN("2"),
        effect() {
            return player[this.layer].points.add(1e69).pow(0.420)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        unlocked() {
            return hasUpgrade("e", 11)
        }
        },
        13: { title: "178",
        description: "Unlock a new people upgrade.",
        cost: new EN("2"),
        unlocked() {
            return hasUpgrade("e", 12)
        }
        },
        14: { title: "179",
        description: "1e10,000x Points.",
        cost: new EN("5"),
        unlocked() {
            return hasUpgrade("e", 13)
        }
        },
        15: { title: "180",
        description: "Unlock another people upgrade.",
        cost: new EN("5"),
        unlocked() {
            return hasUpgrade("e", 14)
        }
        },
        21: { title: "181",
        description: "1e6,969x Points.",
        cost: new EN("8"),
        unlocked() {
            return hasUpgrade("e", 15)
        }
        },
        22: { title: "182",
        description: "Square People Gain.",
        cost: new EN("8"),
        unlocked() {
            return hasUpgrade("e", 21)
        }
        },
        23: { title: "183",
        description: "Square BP Gain.",
        cost: new EN("8"),
        unlocked() {
            return hasUpgrade("e", 22)
        }
        },
        24: { title: "184",
        description: "^1.1 Points.",
        cost: new EN("8"),
        unlocked() {
            return hasUpgrade("e", 23)
        }
        },
        25: { title: "185",
        description: "1e100,000x Points.",
        cost: new EN("9"),
        unlocked() {
            return hasUpgrade("e", 24)
        }
        },
        31: { title: "186",
        description: "Cube People Gain!",
        cost: new EN("9"),
        unlocked() {
            return hasUpgrade("e", 25)
        }
        },
        32: { title: "187",
        description: "Cube BP Gain!",
        cost: new EN("10"),
        unlocked() {
            return hasUpgrade("e", 31)
        }
        },
        33: { title: "188",
        description: "^1.15 Points.",
        cost: new EN("11"),
        unlocked() {
            return hasUpgrade("e", 32)
        }
        },
        34: { title: "189",
        description: "^1.1 Points.",
        cost: new EN("12"),
        unlocked() {
            return hasUpgrade("e", 33)
        }
        },
        35: { title: "190",
        description: "^1.01 Points and unlock a challenge.",
        cost: new EN("13"),
        unlocked() {
            return hasUpgrade("e", 34)
        }
        },
        41: { title: "191",
        description: "ee10x Points.",
        cost: new EN("75"),
        unlocked() {
            return hasUpgrade("i", 35)
        }
        },
        42: { title: "192",
        description: "ee10x Points.",
        cost: new EN("83"),
        unlocked() {
            return hasUpgrade("e", 41)
        }
        },
        43: { title: "193",
        description: "ee10x Points.",
        cost: new EN("89"),
        unlocked() {
            return hasUpgrade("e", 42)
        }
        },
        44: { title: "194",
        description: "ee10x Points.",
        cost: new EN("93"),
        unlocked() {
            return hasUpgrade("e", 43)
        }
        },
        45: { title: "195",
        description: "ee11x Points.",
        cost: new EN("97"),
        unlocked() {
            return hasUpgrade("e", 44)
        }
        },
        51: { title: "196",
        description: "Speed up by a normal amount.",
        cost: new EN("1e6"),
        unlocked() {
            return hasUpgrade("f", 55)
        }
        },
        52: { title: "197",
        description: "Speed up by a normal amount again.",
        cost: new EN("5e6"),
        unlocked() {
            return hasUpgrade("e", 51)
        }
        },
        53: { title: "198",
        description: "Speed up by a normal amount yet again.",
        cost: new EN("1e8"),
        unlocked() {
            return hasUpgrade("e", 52)
        }
        },
        54: { title: "199",
        description: "Speed up by a normal amount yet again and again.",
        cost: new EN("2e9"),
        unlocked() {
            return hasUpgrade("e", 53)
        }
        },
        55: { title: "200",
        description: "Speed up by a normal amount yet again and again and again.",
        cost: new EN("4e10"),
        unlocked() {
            return hasUpgrade("e", 54)
        }
        },
        61: { title: "?",
        description: "e1e10x Points.",
        cost: new EN("16"),
        unlocked() {
            return hasUpgrade("f", 61)
        }
        },
    },
    autoPrestige() {
        return hasMilestone("j", 6)
    },
    milestones: {
         1: {requirementDescription: "10 Electricity",
          effectDescription: "You can buy max Electricity.",
             done() { return player.e.points.gte(10)},},
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
        return player[this.layer].points.max(1).pow(5e300).log10().max(1)
      },
      effectDescription(){

},
effectDescription(){
    return "multiplying point gain by " + format(tmp[this.layer].effect) 
    /*
      use format(num) whenever displaying a number
    */
   
  },
    name: "Electricity", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "⚡", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        auto: false
    }},
    color: "#00FFFF",
    requires: new EN("5e2142"), // Can be a function that takes requirement increases into account
    resource: "Electricity", // Name of prestige currency
    baseResource: "Cups", // Name of resource prestige is based on
    baseAmount() {return player.c.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    branches: ["c"],
    exponent() {if (hasUpgrade("z", 32)) return new EN(Infinity)
    else return new EN(5)},    
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    doReset(resettingLayer) {
        let keep = [];
        if (hasMilestone("j", 3) && resettingLayer=="j", "k", "l", "m", "n") keep.push("milestones")
        if (hasMilestone("j", 3) && resettingLayer=="j", "k", "l", "m", "n") keep.push("upgrades")
        if (layers[resettingLayer].row > this.row) layerDataReset("e", keep)
    },
    canBuyMax() { return hasMilestone("e", 1) },
    resetsNothing() {return hasMilestone("j", 6)},
    row: 3, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "e", description: "E: Reset for Electricity", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){if (hasUpgrade("z", 32)) return false
    else return (hasUpgrade("d", 55) || player[this.layer].unlocked)},
})