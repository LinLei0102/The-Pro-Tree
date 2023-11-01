addLayer("ant", {
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
        return player[this.layer].points.max(1).pow(500).log10().max(1)
      },
      effectDescription(){

},
effectDescription(){
    return "multiplying point gain by " + format(tmp[this.layer].effect)
    /*
      use format(num) whenever displaying a number
    */
  },
  doReset(resettingLayer) {
    let keep = [];
    if (hasMilestone("g", 2) && resettingLayer=="g", "c", "d") keep.push("milestones")
    if (hasMilestone("f", 3) && resettingLayer=="f", "e", "h") keep.push("milestones")
    if (hasMilestone("g", 3) && resettingLayer=="g", "c", "d") keep.push("upgrades")
    if (hasMilestone("f", 3) && resettingLayer=="f", "d", "e", "h") keep.push("upgrades")
    if (layers[resettingLayer].row > this.row) layerDataReset("ant", keep)
},
autoPrestige() {
    return hasUpgrade("g", 25)
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
                    ["raw-html", () => `<h4 style="opacity:.5">You are getting better.<br> You will see milestones which helps a lot on your progression.<br> Good luck to reach the 3rd row!</h4>`],
                    ["upgrades", [1,2,3,4,5,6]]
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
        11: { title: "51",
        description: "1,000x Point gain.",
        cost: new EN(6),

        },
        12: { title: "52",
        description: "Point gain is boosted by Ants.",
        cost: new EN(9),
        effect() {
            return player[this.layer].points.add(5).pow(2.5)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        unlocked() {
            return hasUpgrade("ant", 11)
        }
        },
        13: { title: "53",
        description: "69,420x Point Gain.",
        cost: new EN(12),
        unlocked() {
            return hasUpgrade("ant", 12)
        
        }
        },
        14: { title: "54",
        description: "Gain 1,000x More People.",
        cost: new EN(15),
        unlocked() {
            return hasUpgrade("ant", 13)
        
        }
        },
        15: { title: "55",
        description: "Keep Row 3 People Upgrades.",
        cost: new EN(16),
        unlocked() {
            return hasUpgrade("ant", 14)
        
        }
        },
        21: { title: "56",
        description: "69x Button Power.",
        cost: new EN(17),
        unlocked() {
            return hasUpgrade("ant", 15)
        
        }
        },
        22: { title: "57",
        description: "10,000x People Gain.",
        cost: new EN(17),
        unlocked() {
            return hasUpgrade("ant", 21)
        
        }
        },
        23: { title: "58",
        description: "1,000,000x Points Gain.",
        cost: new EN(18),
        unlocked() {
            return hasUpgrade("ant", 22)
        
        }
        },
        24: { title: "59",
        description: "100,000x People Gain.",
        cost: new EN(21),
        unlocked() {
            return hasUpgrade("ant", 23)
        
        }
        },
        25: { title: "60",
        description: "More Button Power Upgrades.",
        cost: new EN(22),
        unlocked() {
            return hasUpgrade("ant", 24)
        
        }
        },
        31: { title: "61",
        description: "Gain 1e42x Button Power.",
        cost: new EN(107),
        unlocked() {
            return hasUpgrade("g", 25)
        
        }
        },
        32: { title: "62",
        description: "Gain 6.969e69x Points.",
        cost: new EN(112),
        unlocked() {
            return hasUpgrade("ant", 31)
        
        }
        },
        33: { title: "63",
        description: "Gain 1e33x People.",
        cost: new EN(125),
        unlocked() {
            return hasUpgrade("ant", 32)
        
        }
        },
        34: { title: "64",
        description: "Gain 1e25x Button Power.",
        cost: new EN(129),
        unlocked() {
            return hasUpgrade("ant", 33)
        
        }
        },
        35: { title: "65",
        description: "Unlock a new layer.",
        cost: new EN(131),
        unlocked() {
            return hasUpgrade("ant", 34)
        
        }
        },
        41: { title: "66",
        description: "1e10x Points.",
        cost: new EN(166),
        unlocked() {
            return hasUpgrade("c", 25)
        
        }
        },
        42: { title: "67",
        description: "1e20x Points.",
        cost: new EN(168),
        unlocked() {
            return hasUpgrade("ant", 41)
        
        }
        },
        43: { title: "68",
        description: "1e40x Points.",
        cost: new EN(170),
        unlocked() {
            return hasUpgrade("ant", 42)
        
        }
        },
        44: { title: "69",
        description: "1e69x Points.",
        cost: new EN(170),
        unlocked() {
            return hasUpgrade("ant", 43)
        
        }
        },
        45: { title: "70",
        description: "Unlock more grass upgrades.",
        cost: new EN(183),
        unlocked() {
            return hasUpgrade("ant", 44)
        
        }
        },
        51: { title: "71",
        description: "1e150x People.",
        cost: new EN(318),
        unlocked() {
            return hasUpgrade("c", 35)
        
        }
        },
        52: { title: "72",
        description: "1e100x BP.",
        cost: new EN(327),
        unlocked() {
            return hasUpgrade("ant", 51)
        
        }
        },
        53: { title: "73",
        description: "1e10x Grass.",
        cost: new EN(333),
        unlocked() {
            return hasUpgrade("ant", 52)
        
        }
        },
        54: { title: "74",
        description: "100,000x Cups.",
        cost: new EN(333),
        unlocked() {
            return hasUpgrade("ant", 53)
        
        }
        },
        55: { title: "75",
        description: "1e100x Points.",
        cost: new EN(333),
        unlocked() {
            return hasUpgrade("ant", 54)
        
        }
        },
        61: { title: "?",
        description: "1e1,014x Points.",
        cost: new EN(1),
        unlocked() {
            return hasUpgrade("b", 61)
        
        }
        },
    },
    name: "Ants", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "🐜", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        auto: false,
    }},
    color: "#1890ff",
    requires: new EN(1e116), // Can be a function that takes requirement increases into account
    resource: "Ants", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    branches: ["p"],
    exponent() {if (hasUpgrade("z", 14)) return new EN(Infinity)
    else return new EN(2)},    
    resetsNothing() { return player.ant.auto },
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    canBuyMax() { return hasMilestone("ant", 2) },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "a", description: "A: Reset for ants", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    resetsNothing() {return hasMilestone("ant", 3)},
    layerShown(){if (hasUpgrade("z", 14)) return false
    else return (hasUpgrade("p", 35) || player[this.layer].unlocked)},
    automate() {},
    milestones: {
        1: {
            requirementDescription: "16 Ants",
            effectDescription: "Gain 100% People every second.",
            done() { return player.ant.points.gte(16) }
        }, 2: {requirementDescription: "25 Ants",
          effectDescription: "You can buy max Ants.",
          
             done() { return player.ant.points.gte(25)},},
             3: {requirementDescription: "107 Ants",
             effectDescription: "Ants resets nothing.",
             
                done() { return player.ant.points.gte(107)},},
        
    },
})