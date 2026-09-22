addLayer("h", {
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
            },
        },
    upgrades: {
        11: { title: "201",
        description: "1e1,000,000× 积分。",
        cost: new EN("5"),

        },
        12: { title: "202",
        description: "根据房屋获得更多积分。",
        cost: new EN("5"),
        effect() {
            return player[this.layer].points.add("1e69420").pow(0.420)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        unlocked() {
            return hasUpgrade("h", 11)
        }
        },
        13: { title: "203",
        description: "^1.03 积分。",
        cost: new EN("10"),
        unlocked() {
            return hasUpgrade("h", 12)
        }
        },
        14: { title: "204",
        description: "1e3,000,003× 积分。",
        cost: new EN("35"),
        unlocked() {
            return hasUpgrade("h", 13)
        }
        },
        15: { title: "205",
        description: "根据积分获得更多房屋，并获得 10× 房屋。",
        effect() {
            return player.points.add(1).pow(1e-10)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        cost: new EN("50"),
        unlocked() {
            return hasUpgrade("h", 14)
        }
        },
        21: { title: "206",
        description: "^1.025 积分。",
        cost: new EN("250"),
        unlocked() {
            return hasUpgrade("h", 15)
        }
        },
        22: { title: "207",
        description: "房屋获取变为三倍。",
        cost: new EN("300"),
        unlocked() {
            return hasUpgrade("h", 21)
        }
        },
        23: { title: "208",
        description: "房屋获取变为四倍。",
        cost: new EN("1000"),
        unlocked() {
            return hasUpgrade("h", 22)
        }
        },
        24: { title: "209",
        description: "1e10,000,000× 积分。",
        cost: new EN("4000"),
        unlocked() {
            return hasUpgrade("h", 23)
        }
        },
        25: { title: "210",
        description: "^1.001 积分且房屋获取变为五倍。",
        cost: new EN("6969"),
        unlocked() {
            return hasUpgrade("h", 24)
        }
        },
        31: { title: "211",
        description: "^1.01 积分且房屋获取变为三倍。",
        cost: new EN("25000"),
        unlocked() {
            return hasUpgrade("h", 25)
        }
        },
        32: { title: "212",
        description: "^1.01 积分获取且 10× 房屋获取！",
        cost: new EN("1e5"),
        unlocked() {
            return hasUpgrade("h", 31)
        }
        },
        33: { title: "213",
        description: "1e30,000,003× 积分。",
        cost: new EN("5e5"),
        unlocked() {
            return hasUpgrade("h", 32)
        }
        },
        34: { title: "214",
        description: "1e10,000,000× 积分与 5× 房屋获取。",
        cost: new EN("2e6"),
        unlocked() {
            return hasUpgrade("h", 33)
        }
        },
        35: { title: "215",
        description: "^1.001 积分获取。",
        cost: new EN("1e7"),
        unlocked() {
            return hasUpgrade("h", 34)
        }
        },
        41: { title: "216",
        description: "ee11× 积分。",
        cost: new EN("1e2605"),
        unlocked() {
            return hasUpgrade("e", 45)
        }
        },
        42: { title: "217",
        description: "ee11× 积分。",
        cost: new EN("1e4280"),
        unlocked() {
            return hasUpgrade("h", 41)
        }
        },
        43: { title: "218",
        description: "ee11× 积分。",
        cost: new EN("1e5960"),
        unlocked() {
            return hasUpgrade("h", 42)
        }
        },
        44: { title: "219",
        description: "ee11× 积分。",
        cost: new EN("1e7640"),
        unlocked() {
            return hasUpgrade("h", 43)
        }
        },
        45: { title: "220",
        description: "ee12× 积分。",
        cost: new EN("1e8500"),
        unlocked() {
            return hasUpgrade("h", 44)
        }
        },
        51: { title: "221",
        description: "大幅加速。",
        cost: new EN("e1e60"),
        unlocked() {
            return hasUpgrade("e", 55)
        }
        },
        52: { title: "222",
        description: "再次大幅加速。",
        cost: new EN("e1e90"),
        unlocked() {
            return hasUpgrade("h", 51)
        }
        },
        53: { title: "223",
        description: "又一次大幅加速。",
        cost: new EN("e1e128"),
        unlocked() {
            return hasUpgrade("h", 52)
        }
        },
        54: { title: "224",
        description: "再一次又一次大幅加速。",
        cost: new EN("e1e222"),
        unlocked() {
            return hasUpgrade("h", 53)
        }
        },
        55: { title: "225",
        description: "一遍又一遍又一遍地大幅加速。",
        cost: new EN("e1.79e308"),
        unlocked() {
            return hasUpgrade("h", 54)
        }
        },
        61: { title: "?",
        description: "获得 ee100× 积分。",
        cost: new EN("1e9"),
        unlocked() {
            return hasUpgrade("e", 61)
        }
        },
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
        return player[this.layer].points.max(1).pow("5e10000").log10().max(1)
      },
      effectDescription(){

},
effectDescription(){
    return "使积分获取乘以 " + format(tmp[this.layer].effect) 
    /*
      use format(num) whenever displaying a number
    */
   
  },
    name: "房屋", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "🏠", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        auto: false
    }},
    color: "#563D2D",
    requires: new EN("24400"), // Can be a function that takes requirement increases into account
    resource: "房屋", // Name of prestige currency
    baseResource: "蚂蚁", // Name of resource prestige is based on
    baseAmount() {return player.ant.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    branches: ["c"],
    exponent: 1, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1)
        if (hasUpgrade('h', 15)) mult = mult.times(upgradeEffect('h', 15))
        if (hasUpgrade('h', 15)) mult = mult.times(10)
        if (hasUpgrade('h', 22)) mult = mult.times(3)
        if (hasUpgrade('h', 23)) mult = mult.times(4)
        if (hasUpgrade('h', 25)) mult = mult.times(5)
        if (hasUpgrade('h', 31)) mult = mult.times(3)
        if (hasUpgrade('h', 32)) mult = mult.times(10)
        if (hasUpgrade('h', 34)) mult = mult.times(5)
        if (inChallenge("j", 11)) mult = mult.pow(0.1)

        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    row: 3, // Row the layer is in on the tree (0 is the first row)
    doReset(resettingLayer) {
        let keep = [];
        if (hasMilestone("j", 4) && resettingLayer=="j", "k", "l", "m", "n") keep.push("upgrades")
        if (layers[resettingLayer].row > this.row) layerDataReset("h", keep)
    },
    passiveGeneration() { 
        if (hasUpgrade("z", 33)) return (hasUpgrade("z", 33)?0:0)
        if (hasMilestone("j", 1)) return (hasMilestone("j", 1)?1:0)
        },    
    hotkeys: [
        {key: "h", description: "H: 重置获取房屋", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){if (hasUpgrade("z", 33)) return false
    else return (hasChallenge("f", 12) || player[this.layer].unlocked)},
})