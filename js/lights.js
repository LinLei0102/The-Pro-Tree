addLayer("l", {
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
        11: { title: "301",
        description: "获得 ×69 灯光并提升积分获取。",
        cost: new EN("1"),

        },
        12: { title: "302",
        description: "获得 ×420 灯光。",
        cost: new EN("500"),
        unlocked() {
            return hasUpgrade("l", 11)
        }
        },
        13: { title: "303",
        description: "获得 ×6,969 灯光。",
        cost: new EN("6666666"),
        unlocked() {
            return hasUpgrade("l", 12)
        }
        },
        14: { title: "304",
        description: "获得 ×69,420 灯光。",
        cost: new EN("5e10"),
        unlocked() {
            return hasUpgrade("l", 13)
        }
        },
        15: { title: "305",
        description: "获得 ×1,000,000 灯光。",
        cost: new EN("5e15"),
        unlocked() {
            return hasUpgrade("l", 14)
        }
        },
        21: { title: "306",
        description: "获得 ×1e9 灯光。",
        cost: new EN("2e21"),
        unlocked() {
            return hasUpgrade("l", 15)
        }
        },
        22: { title: "307",
        description: "获得 ×1e12 灯光。",
        cost: new EN("5e30"),
        unlocked() {
            return hasUpgrade("l", 21)
        }
        },
        23: { title: "308",
        description: "获得 ×1e15 灯光。",
        cost: new EN("5e42"),
        unlocked() {
            return hasUpgrade("l", 22)
        }
        },
        24: { title: "309",
        description: "获得 ×1e18 灯光。",
        cost: new EN("1e58"),
        unlocked() {
            return hasUpgrade("l", 23)
        }
        },
        25: { title: "310",
        description: "获得 ×1e21 灯光并产出更多积分。",
        cost: new EN("1e76"),
        unlocked() {
            return hasUpgrade("l", 24)
        }
        },
        31: { title: "311",
        description: "解锁一个挑战。",
        cost: new EN("1e97"),
        unlocked() {
            return hasUpgrade("l", 25)
        }
        },
        32: { title: "312",
        description: "获得 ×1e24 灯光。",
        cost: new EN("1e191"),
        unlocked() {
            return hasUpgrade("l", 31)
        }
        },
        33: { title: "313",
        description: "获得 ×1e27 灯光。",
        cost: new EN("1e214"),
        unlocked() {
            return hasUpgrade("l",32)
        }
        },
        34: { title: "314",
        description: "获得 ×1e30 灯光。",
        cost: new EN("1e241"),
        unlocked() {
            return hasUpgrade("l",33)
        }
        },
        35: { title: "315",
        description: "获得 ×1e60 灯光。",
        cost: new EN("1e272"),
        unlocked() {
            return hasUpgrade("l",34)
        }
        },
        41: { title: "316",
        description: "获得 ×1e90 灯光。",
        cost: new EN("1e331"),
        unlocked() {
            return hasUpgrade("l",35)
        }
        },
        42: { title: "317",
        description: "获得 ×1e120 灯光。",
        cost: new EN("1e421"),
        unlocked() {
            return hasUpgrade("l",41)
        }
        },
        43: { title: "318",
        description: "获得 ×1e150 灯光。",
        cost: new EN("1e541"),
        unlocked() {
            return hasUpgrade("l",42)
        }
        },
        44: { title: "319",
        description: "获得 ×1e180 灯光。",
        cost: new EN("1e692"),
        unlocked() {
            return hasUpgrade("l",43)
        }
        },
        45: { title: "320",
        description: "获得 ×1e210 灯光，提升积分获取并解锁一个新层。",
        cost: new EN("1e872"),
        unlocked() {
            return hasUpgrade("l",44)
        }
        },
        51: { title: "321",
        description: "获得 ×1e240 灯光。",
        cost: new EN("1e1081"),
        unlocked() {
            return hasUpgrade("m",45)
        }
        },
        52: { title: "322",
        description: "获得 ×1e270 灯光并提升积分获取。",
        cost: new EN("1e1321"),
        unlocked() {
            return hasUpgrade("l",51)
        }
        },
        53: { title: "323",
        description: "获得 ×1e300 灯光并再次提升积分获取。",
        cost: new EN("1e1591"),
        unlocked() {
            return hasUpgrade("l",52)
        }
        },
        54: { title: "324",
        description: "获得 ×1e600 灯光并又一次提升积分获取。",
        cost: new EN("1e1891"),
        unlocked() {
            return hasUpgrade("l",53)
        }
        },
        55: { title: "325",
        description: "获得 ×1e900 灯光，又一次提升积分获取并解锁第 5 行的最后一个层。",
        cost: new EN("1e2492"),
        unlocked() {
            return hasUpgrade("l",54)
        }
        },
        61: { title: "?",
        description: "获得灯光增益。",
        cost: new EN("255"),
        unlocked() {
            return inChallenge("o",12)
        }
        },
        62: { title: "?",
        description: "获得更大的灯光增益。",
        cost: new EN("7777777"),
        unlocked() {
            return inChallenge("o",12)
        }
        },
        63: { title: "?",
        description: "获得还要更大的灯光增益。",
        cost: new EN("2e427"),
        unlocked() {
            return inChallenge("o",12)
        }
        },
        64: { title: "?",
        description: "获得大量灯光增益。",
        cost: new EN("1e69847"),
        unlocked() {
            return inChallenge("o",12)
        }
        },
        65: { title: "?",
        description: "离击败挑战又近一步。",
        cost: new EN("1e105034924"),
        unlocked() {
            return inChallenge("o",12)
        }
        },
        71: { title: "?",
        description: "?",
        cost: new EN("1e3399"),
        unlocked() {
            return inChallenge("o",13)
        }
        },
        72: { title: "?",
        description: "??",
        cost: new EN("1e72819"),
        unlocked() {
            return inChallenge("o",13)
        }
        },
        73: { title: "?",
        description: "完成此挑战",
        cost: new EN("e5.005e9"),
        unlocked() {
            return inChallenge("o",13)
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
      },
      effectDescription(){

},
effectDescription(){
    return "你一次只能获得 1 灯光，可通过升级增加。"
    
    /*
      use format(num) whenever displaying a number
    */
   
  },
    name: "灯光", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "💡", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        auto: false
    }},
    color: "#FFFF8A",
    requires: new EN("ee1.80e308"), // Can be a function that takes requirement increases into account
    resource: "灯光", // Name of prestige currency
    baseResource: "积分", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type() {if (hasUpgrade("z", 52)) return "static"
    else return "normal"},    
    exponent() {if (hasUpgrade("z", 52)) return new EN(Infinity)
    else return new EN(0)},     
    branches: ["k", "h", "e"],
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1)
        if (hasUpgrade('l', 11)) mult = mult.times(69)
        if (hasUpgrade('l', 12)) mult = mult.times(420)
        if (hasUpgrade('l', 13)) mult = mult.times(6969)
        if (hasUpgrade('l', 14)) mult = mult.times(69420)
        if (hasUpgrade('l', 15)) mult = mult.times(1e6)
        if (hasUpgrade('l', 21)) mult = mult.times(1e9)
        if (hasUpgrade('l', 22)) mult = mult.times(1e12)
        if (hasUpgrade('l', 23)) mult = mult.times(1e15)
        if (hasUpgrade('l', 24)) mult = mult.times(1e18)
        if (hasUpgrade('l', 25)) mult = mult.times(1e21)
        if (hasChallenge("j", 12)) mult = mult.pow("2")
        if (hasUpgrade('l', 32)) mult = mult.times(1e24)
        if (hasUpgrade('l', 33)) mult = mult.times(1e27)
        if (hasUpgrade('l', 34)) mult = mult.times(1e30)
        if (hasUpgrade('l', 35)) mult = mult.times(1e60)
        if (hasUpgrade('l', 41)) mult = mult.times(1e90)
        if (hasUpgrade('l', 42)) mult = mult.times(1e120)
        if (hasUpgrade('l', 43)) mult = mult.times(1e150)
        if (hasUpgrade('l', 44)) mult = mult.times(1e180)
        if (hasUpgrade('l', 45)) mult = mult.times(1e210)
        if (hasUpgrade('l', 51)) mult = mult.times(1e240)
        if (hasUpgrade('l', 52)) mult = mult.times(1e270)
        if (hasUpgrade('l', 53)) mult = mult.times(1e300)
        if (hasUpgrade('l', 54)) mult = mult.times("1e600")
        if (hasUpgrade('l', 55)) mult = mult.times("1e900")
        if (hasUpgrade('n', 11)) mult = mult.times(69420)
        if (hasUpgrade('n', 12)) mult = mult.times(6.969e69)
        if (hasUpgrade('n', 13)) mult = mult.times("1e420")
        if (hasUpgrade('n', 14)) mult = mult.times("1e666")
        if (hasUpgrade('n', 15)) mult = mult.times("1e1000")
        if (hasUpgrade('n', 21)) mult = mult.times("1e2000")
        if (hasUpgrade('n', 22)) mult = mult.times("1e2000")
        if (hasUpgrade('n', 23)) mult = mult.times("1e3000")
        if (hasUpgrade('n', 24)) mult = mult.times("1e5000")
        if (hasUpgrade('n', 25)) mult = mult.times("1e10000")
        if (hasUpgrade('n', 31)) mult = mult.times("1e10000")
        if (hasUpgrade('n', 32)) mult = mult.times("1e20000")
        if (hasUpgrade('n', 33)) mult = mult.times("1e30000")
        if (hasUpgrade('n', 34)) mult = mult.times("1e40000")
        if (hasUpgrade('n', 35)) mult = mult.times("1e100000")
        if (hasUpgrade('n', 41)) mult = mult.times("1e100000")
        if (hasUpgrade('n', 42)) mult = mult.times("1e200000")
        if (hasUpgrade('n', 43)) mult = mult.times("1e200000")
        if (hasUpgrade('n', 44)) mult = mult.times("1e500000")
        if (hasUpgrade('n', 45)) mult = mult.times("1e1000000")
        if (hasUpgrade("m", 51)) mult = mult.pow("2")
        if (hasUpgrade("m", 52)) mult = mult.pow("2")
        if (hasUpgrade("m", 53)) mult = mult.pow("2")
        if (hasUpgrade("m", 54)) mult = mult.pow("2")
        if (hasUpgrade("m", 55)) mult = mult.pow("3")
        if (hasUpgrade("n", 51)) mult = mult.pow("2")
        if (hasUpgrade("n", 52)) mult = mult.pow("2")
        if (hasUpgrade("n", 53)) mult = mult.pow("2")
        if (hasUpgrade("n", 54)) mult = mult.pow("2")
        if (hasUpgrade("n", 55)) mult = mult.pow("2")
        if (hasUpgrade("o", 11)) mult = mult.pow("1.01")
        if (hasUpgrade("o", 12)) mult = mult.pow("1.1")
        if (hasUpgrade("o", 13)) mult = mult.pow("1.25")
        if (hasUpgrade('o', 14)) mult = mult.times(8)
        if (hasUpgrade("o", 15)) mult = mult.pow("1.5")
        if (hasUpgrade("o", 21)) mult = mult.pow("2")
        if (hasUpgrade("o", 22)) mult = mult.pow("3")
        if (hasUpgrade("o", 23)) mult = mult.pow("4")
        if (hasUpgrade("o", 24)) mult = mult.pow("5")
        if (hasUpgrade("o", 25)) mult = mult.pow("6")
        if (hasUpgrade("o", 31)) mult = mult.pow("8")
        if (hasUpgrade("o", 32)) mult = mult.pow("10")
        if (hasUpgrade("o", 33)) mult = mult.pow("13")
        if (hasUpgrade("o", 34)) mult = mult.pow("16")
        if (hasUpgrade("o", 35)) mult = mult.pow("20")
        if (hasUpgrade("o", 41)) mult = mult.pow("25")
        if (hasUpgrade("o", 42)) mult = mult.pow("2")
        if (hasUpgrade("o", 43)) mult = mult.pow("1.1")
        if (hasUpgrade("o", 44)) mult = mult.pow("1.2")
        if (hasUpgrade("o", 45)) mult = mult.pow("1.1")
        if (hasUpgrade("o", 51)) mult = mult.pow("1.1")
        if (hasUpgrade("o", 52)) mult = mult.pow("1.1")
        if (hasUpgrade("o", 53)) mult = mult.pow("1.1")
        if (hasUpgrade("o", 54)) mult = mult.pow("1.2")
        if (hasUpgrade("o", 55)) mult = mult.pow("4")
        if (hasChallenge("o", 11)) mult = mult.pow("4")
        if (inChallenge("o", 12)) mult = mult.pow("1.586e-23")
        if (hasUpgrade('l', 61)) mult = mult.times(69420)
        if (hasUpgrade('l', 62)) mult = mult.times("1e420")
        if (hasUpgrade('l', 63)) mult = mult.times("1e69420")
        if (hasUpgrade('l', 64)) mult = mult.times("1e200000000")
        if (hasUpgrade('l', 65)) mult = mult.times("1e2000000000")
        if (hasChallenge("o", 12)) mult = mult.pow("16")
        if (hasUpgrade("o", 63)) mult = mult.times("ee11")
        if (hasUpgrade("o", 54)) mult = mult.pow("2")
        if (inChallenge("o", 13)) mult = mult.pow("3.35e-20")
        if (hasUpgrade('l', 71)) mult = mult.times("1e69420")
        if (hasUpgrade('l', 72)) mult = mult.times("ee10")
        if (hasUpgrade('l', 73)) mult = mult.times("ee22.92")
        if (hasChallenge("o", 13)) mult = mult.pow("256")
        if (hasUpgrade("q", 12)) mult = mult.pow("69")
        if (hasUpgrade("q", 13)) mult = mult.pow("69")
        if (hasUpgrade("q", 14)) mult = mult.pow("420")
        if (hasUpgrade("q", 15)) mult = mult.pow("420")
        if (hasUpgrade("q", 21)) mult = mult.pow("69420")
        if (hasUpgrade("q", 22)) mult = mult.pow("69420")
        if (hasUpgrade("q", 23)) mult = mult.pow("1e10")
        if (hasUpgrade("q", 24)) mult = mult.pow("1e69")
        if (hasUpgrade("q", 25)) mult = mult.pow("1e308")
        if (hasUpgrade("q", 31)) mult = mult.pow("1e10000")
        if (hasUpgrade("q", 32)) mult = mult.pow("1e1000000000")
        if (hasUpgrade("q", 33)) mult = mult.pow("ee100")
        if (hasUpgrade("q", 34)) mult = mult.pow("ee1000")
        if (hasUpgrade("q", 35)) mult = mult.pow("eee9")
        if (hasUpgrade("q", 41)) mult = mult.pow("eee1000")
        if (hasUpgrade("q", 42)) mult = mult.pow("eeee8")
        if (hasUpgrade("q", 43)) mult = mult.pow("eeee9")
        if (hasUpgrade("q", 44)) mult = mult.pow("eeee10")
        if (hasChallenge("o", 14)) mult = mult.pow("eeeee10")
        if (hasUpgrade("r", 25)) mult = mult.pow("eeeeeeee10")
        if (hasChallenge('o', 22)) mult = mult.pow("eeeeeeeee10")
        if (hasUpgrade('s', 54)) mult = mult.times("10^^20")
        if (hasUpgrade('t', 54)) mult = mult.times("10^^40")
        if (hasUpgrade('u', 54)) mult = mult.times("10^^500")
        if (hasUpgrade('re', 12)) mult = mult.times("ee9")
        if (hasUpgrade('w', 54)) mult = mult.tetrate(1e6)
        if (hasUpgrade('x', 54)) mult = mult.times("10^^1e16")
        if (hasUpgrade('y', 54)) mult = mult.pow("10^^1e300")
        if (inChallenge("z", 11)) mult = mult.pow("1")
        if (hasChallenge("k", 66)) mult = mult.times("ee9")
        if (hasUpgrade('su', 11)) mult = mult.times("eee10")
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
        
    },
    row: 4, // Row the layer is in on the tree (0 is the first row)
    passiveGeneration() { 
        if (hasUpgrade("z", 52)) return (hasUpgrade("z", 52)?0:0)
        if (hasMilestone("o", 1)) return (hasMilestone("o", 1)?1:0)
        },     
        hotkeys: [
        {key: "l", description: "L: 重置以获得灯光", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){if (hasUpgrade("z", 52)) return false
    else return (hasUpgrade("j", 55) || player[this.layer].unlocked)},
    autoUpgrade() { if (hasUpgrade("o" , 14)) return true},
    doReset(resettingLayer) {
        let keep = [];
        if (hasMilestone("o", 5) && resettingLayer=="o") keep.push("upgrades")
        if (layers[resettingLayer].row > this.row) layerDataReset("l", keep)
    },
})