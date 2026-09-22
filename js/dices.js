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
    return "使积分获取乘以 " + format(tmp[this.layer].effect) 
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
                    "升级": {
                        unlocked() {return (hasAchievement("a", 11))},
                content: [
                    ["blank", "15px"],
                    ["upgrades", [1,2,3,4,5,6,7,8,9]]
                ]
            },
                    "里程碑": {
                        content: [
                            ["blank", "15px"],
                            "milestones"
                        ]
                    },
            },
        },
  upgrades: {
        11: { title: "126",
        description: "1e30× 积分。",
        cost: new EN("1"),

        },
        12: { title: "127",
        description: "根据骰子获得更多积分。",
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
        description: "1e42× 积分。",
        cost: new EN("7"),
        unlocked() {
            return hasUpgrade("d", 12)
        }
        },
        14: { title: "129",
        description: "1e32× 按钮能量、人员，以及 100× 草、奖杯。",
        cost: new EN("8"),
        unlocked() {
            return hasUpgrade("d", 13)
        }
        },
        15: { title: "130",
        description: "69,420× 草和 1,000× 奖杯。",
        cost: new EN("9"),
        unlocked() {
            return hasUpgrade("d", 14)
        }
        },
        21: { title: "131",
        description: "1e60× 积分。",
        cost: new EN("9"),
        unlocked() {
            return hasUpgrade("d", 15)
        }
        },
        22: { title: "132",
        description: "^1.01 草、^1.02 按钮能量、^1.05 人员。",
        cost: new EN("10"),
        unlocked() {
            return hasUpgrade("d", 21)
        }
        },
        23: { title: "133",
        description: "2× 奖杯和 4× 草。",
        cost: new EN("11"),
        unlocked() {
            return hasUpgrade("d", 22)
        }
        },
        24: { title: "134",
        description: "1e125× 积分。",
        cost: new EN("11"),
        unlocked() {
            return hasUpgrade("d", 23)
        }
        },
        25: { title: "135",
        description: "1e100× 人员、按钮能量和 1,000× 奖杯。",
        cost: new EN("12"),
        unlocked() {
            return hasUpgrade("d", 24)
        }
        },
        31: { title: "136",
        description: "1e50× 积分。",
        cost: new EN("16"),
        unlocked() {
            return hasUpgrade("ant", 55)
        }
        },
        32: { title: "137",
        description: "1e100× 积分。",
        cost: new EN("16"),
        unlocked() {
            return hasUpgrade("d", 31)
        }
        },
        33: { title: "138",
        description: "1e150× 积分。",
        cost: new EN("16"),
        unlocked() {
            return hasUpgrade("d", 32)
        }
        },
        34: { title: "139",
        description: "1e200× 积分。",
        cost: new EN("17"),
        unlocked() {
            return hasUpgrade("d", 33)
        }
        },
        35: { title: "140",
        description: "1.79e308× 积分、人员、按钮能量。^1.01 奖杯、^1.02 草、^1.05 按钮能量、^1.1 人员，1e10× 奖杯，1e69× 草，并解锁一个新层。",
        cost: new EN("17"),
        unlocked() {
            return hasUpgrade("d", 34)
        }
        },
        41: { title: "141",
        description: "1e666× 积分。",
        cost: new EN("40"),
        unlocked() {
            return hasChallenge("g", 23)
        }
        },
        42: { title: "142",
        description: "1e1,000× 积分。",
        cost: new EN("40"),
        unlocked() {
            return hasUpgrade("d", 41)
        }
        },
        43: { title: "143",
        description: "1e420× 积分。",
        cost: new EN("41"),
        unlocked() {
            return hasUpgrade("d", 42)
        }
        },
        44: { title: "144",
        description: "再次 1e420× 积分。",
        cost: new EN("41"),
        unlocked() {
            return hasUpgrade("d", 43)
        }
        },
        45: { title: "145",
        description: "1e1,000× 积分。",
        cost: new EN("42"),
        unlocked() {
            return hasUpgrade("d", 44)
        }
        },
        51: { title: "146",
        description: "再次 1e1,000× 积分。",
        cost: new EN("45"),
        unlocked() {
            return hasChallenge("c", 22)
        }
        },
        52: { title: "147",
        description: "1e2,000× 积分。",
        cost: new EN("45"),
        unlocked() {
            return hasUpgrade("d", 51)
        }
        },
        53: { title: "148",
        description: "1e4,000× 积分。",
        cost: new EN("46"),
        unlocked() {
            return hasUpgrade("d", 52)
        }
        },
        54: { title: "149",
        description: "1e6,969× 积分。",
        cost: new EN("48"),
        unlocked() {
            return hasUpgrade("d", 53)
        }
        },
        55: { title: "150",
        description: "1e10,000× 积分，并解锁一个新层！！",
        cost: new EN("51"),
        unlocked() {
            return hasUpgrade("d", 54)
        }
        },
        61: { title: "?",
        description: "6.666e666,666× 积分",
        cost: new EN("28"),
        unlocked() {
            return hasUpgrade("c", 61)
        }
        },
    },
    name: "骰子", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "🎲", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
    }},
    color: "#4D4B4B",
    requires: new EN("1e8300"), // Can be a function that takes requirement increases into account
    resource: "骰子", // Name of prestige currency
    baseResource: "人员", // Name of resource prestige is based on
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
        {key: "d", description: "D: 重置以获取骰子", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){if (hasUpgrade("z", 24)) return false
    else return (hasUpgrade("g", 35) || player[this.layer].unlocked)},
    milestones: {
                1: {requirementDescription: "16 骰子",
             effectDescription: "你可以最大购买骰子。",
                done() { return player.d.points.gte(16)},},
    },
        },
)