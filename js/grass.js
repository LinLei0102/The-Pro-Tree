addLayer("g", {
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
        return player[this.layer].points.max(1).pow(5000).log10().max(1)
      },
      effectDescription(){

},
doReset(resettingLayer) {
    let keep = [];
    if (hasMilestone("f", 4) && resettingLayer=="f", "4") keep.push("milestones")
    if (hasMilestone("f", 4) && resettingLayer=="f", "e") keep.push("upgrades")
    if (hasMilestone("f", 4) && resettingLayer=="f", "e") keep.push("challenges")
    if (layers[resettingLayer].row > this.row) layerDataReset("g", keep)
},
effectDescription(){
    return "使积分获取乘以 " + format(tmp[this.layer].effect) 
    /*
      use format(num) whenever displaying a number
    */
   
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
                    "挑战": {
                        unlocked() {return (hasUpgrade("g", 55))},
                        content: [
                            ["blank", "15px"],
                            "challenges"
                        ]
        },
    },
},
    upgrades: {
        11: { title: "76",
        description: "1e10× 积分。",
        cost: new EN("1"),

        },
        12: { title: "77",
        description: "积分获取受草增益。",
        cost: new EN(5),
        effect() {
            return player[this.layer].points.add(69420).pow(0.420)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        unlocked() {
            return hasUpgrade("g", 11)
        }
        },
        13: { title: "78",
        description: "获得 1e14× 积分。",
        cost: new EN("15"),
        unlocked() {
            return hasUpgrade("g", 12)
        }
        },
        14: { title: "79",
        description: "重置时保留 4 行人员升级，并获得 1e10× 按钮能量。",
        cost: new EN("50"),
        unlocked() {
            return hasUpgrade("g", 13)
        }
        
        },
        15: { title: "80",
        description: "获得 1e20× 声望点。",
        cost: new EN("200"),
        unlocked() {
            return hasUpgrade("g", 14)
        }
        },
        21: { title: "81",
        description: "获得 ^1.025 积分。",
        cost: new EN("500"),
        unlocked() {
            return hasUpgrade("g", 15)
        }
        },
        22: { title: "82",
        description: "获得 1e21× 积分。",
        cost: new EN("1e5"),
        unlocked() {
            return hasUpgrade("g", 21)
        }
        },
        23: { title: "83",
        description: "草获取受积分增益。",
        cost: new EN("1e6"),
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        effect() {
            return player.points.add(1).pow(0.0001)
            
        },
        unlocked() {
            return hasUpgrade("g", 22)
        }
        },
        24: { title: "84",
        description: "获得 1e30× 积分并保留第 5 行人员升级。",
        cost: new EN("5e6"),
        unlocked() {
            return hasUpgrade("g", 23)
        }
        },
        25: { title: "85",
        description: "解锁更多按钮能量与蚂蚁升级，并自动购买蚂蚁。",
        cost: new EN("1e9"),
        unlocked() {
            return hasUpgrade("g", 24)
        }
        },
        31: { title: "86",
        description: "^1.01 按钮能量，^1.04 人员",
        cost: new EN("1e52"),
        unlocked() {
            return hasUpgrade("ant", 45)
        }
        },
        32: { title: "87",
        description: "69× 奖杯与 420× 草。",
        cost: new EN("1e55"),
        unlocked() {
            return hasUpgrade("g", 31)
        }
        },
        33: { title: "88",
        description: "1e69× 按钮能量。",
        cost: new EN("1e58"),
        unlocked() {
            return hasUpgrade("g", 32)
        }
        },
        34: { title: "89",
        description: "1e69× 人员。",
        cost: new EN("2e61"),
        unlocked() {
            return hasUpgrade("g", 33)
        }
        },
        35: { title: "90",
        description: "100× 奖杯、1,000× 草，并解锁一个新层。",
        cost: new EN("1e64"),
        unlocked() {
            return hasUpgrade("g", 34)
        }
        },
        41: { title: "91",
        description: "^1.01 水果，^1.02 奖杯，^1.04 草。",
        cost: new EN("1e1490"),
        unlocked() {
            return hasUpgrade("c", 45)
        }
        },
        42: { title: "92",
        description: "^1.01 按钮能量，^1.02 人员。",
        cost: new EN("4e1502"),
        unlocked() {
            return hasUpgrade("g", 41)
        }
        },
        43: { title: "93",
        description: "1e300× 积分。",
        cost: new EN("1e1720"),
        unlocked() {
            return hasUpgrade("g", 42)
        }
        },
        44: { title: "94",
        description: "再次获得 1e300× 积分。",
        cost: new EN("1e1794"),
        unlocked() {
            return hasUpgrade("g", 43)
        }
        },
        45: { title: "95",
        description: "1e200× 积分。",
        cost: new EN("1e1870"),
        unlocked() {
            return hasUpgrade("g", 44)
        }
        },
        51: { title: "96",
        description: "1e150× 积分。",
        cost: new EN("1e1920"),
        unlocked() {
            return hasUpgrade("g", 45)
        }
        },
        52: { title: "97",
        description: "1e100× 积分。",
        cost: new EN("1e1959"),
        unlocked() {
            return hasUpgrade("g", 51)
        }
        },
        53: { title: "98",
        description: "69× 水果，1e25× 奖杯，1e100× 草。",
        cost: new EN("1e1984"),
        unlocked() {
            return hasUpgrade("g", 52)
        }
        },
        54: { title: "99",
        description: "1e10× 草。",
        cost: new EN("1e2097"),
        unlocked() {
            return hasUpgrade("g", 53)
        }
        },
        55: { title: "100",
        description: "1e1,000× 积分！",
        cost: new EN("1e2109"),
        unlocked() {
            return hasUpgrade("g", 54)
        }
        },
        61: { title: "?",
        description: "1e6,969× 积分！",
        cost: new EN("1e3364"),
        unlocked() {
            return hasUpgrade("ant", 61)
        }
        },
    },
    challenges: {
        11: {
            name: "无按钮",
            challengeDescription: "将按钮能量获取提升至 ^0.001。",
            goalDescription: "1e131,480 积分。",
            rewardDescription: "获得 1e666× 按钮能量。",
            canComplete: function() {return player.points.gte("e131480")},
            unlocked() { return (hasUpgrade('g', 55)) },
        },
        12: {
            name: "核爆 ×2",
            challengeDescription: "将人员与按钮能量获取提升至 ^0.0001。",
            goalDescription: "1e32,700 积分。",
            rewardDescription: "获得 ^1.05 按钮能量。",
            canComplete: function() {return player.points.gte("e32700")},
            unlocked() { return (hasChallenge('g', 11)) },
        },
        13: {
            name: "毫无积分^2",
            challengeDescription: "将按钮能量、人员、积分获取提升至 ^0.1。",
            goalDescription: "1.00e944 积分。",
            rewardDescription: "获得 1e777× 积分并解锁 1 行新奖杯升级。",
            canComplete: function() {return player.points.gte("e944")},
            unlocked() { return (hasChallenge('g', 12)) },
            },
            21: {
                name: "无产出^2",
                challengeDescription: "将积分获取提升至 ^0.001。",
                goalDescription: "1.00e14 积分。",
                rewardDescription: "获得 ^1.03 按钮能量。",
                canComplete: function() {return player.points.gte("e14")},
                unlocked() { return (hasChallenge('g', 13)) },
                },
                22: {
                    name: "反转",
                    challengeDescription: "将人员获取与按钮能量获取提升至 ^0.000001。",
                    goalDescription: "1e45,550 积分。",
                    rewardDescription: "获得 ^1.02 人员。",
                    canComplete: function() {return player.points.gte("e45550")},
                    unlocked() { return (hasChallenge('g', 21)) },
                    },
                    23: {
                        name: "积分儿",
                        challengeDescription: "将积分获取提升 ^0.1。",
                        goalDescription: "1e1,400 积分。",
                        rewardDescription: "获得 1e3,003× 积分并解锁 1 行新骰子升级。",
                        canComplete: function() {return player.points.gte("e1400")},
                        unlocked() { return (hasChallenge('g', 22)) },
                        },
        },
    name: "草", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "🌿", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
    }},
    color: "#13D022",
    requires: new EN("1e1130"), // Can be a function that takes requirement increases into account
    resource: "草", // Name of prestige currency
    baseResource: "积分", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type() {if (hasUpgrade("z", 21)) return "static"
    else return "normal"},    
    exponent() {if (hasUpgrade("z", 21)) return new EN(Infinity)
    else return new EN(0.005)},          
    branches: ["b"],
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1)
        return mult
    },
    gainMult() {
        let mult = new EN(1)
        if (hasUpgrade('g', 23)) mult = mult.times(upgradeEffect('g', 23))
        if (hasUpgrade('b', 45)) mult = mult.times(100)
        if (hasUpgrade('c', 15)) mult = mult.times(1000)
        if (hasUpgrade('g', 32)) mult = mult.times(420)
        if (hasUpgrade('g', 35)) mult = mult.times(1000)
        if (hasUpgrade('d', 14)) mult = mult.times(100)
        if (hasUpgrade('d', 15)) mult = mult.times(69420)
        if (hasUpgrade('d', 22)) mult = mult.pow(1.01)
        if (hasUpgrade('d', 23)) mult = mult.times(4)
        if (hasUpgrade('c', 31)) mult = mult.times(69420)
        if (hasUpgrade('c', 32)) mult = mult.pow(1.02)
        if (hasUpgrade('c', 34)) mult = mult.times(69420)
        if (hasUpgrade('ant', 53)) mult = mult.times(1e10)
        if (hasUpgrade('d', 35)) mult = mult.pow(1.02)
        if (hasUpgrade('d', 35)) mult = mult.times(1e69)
        if (hasUpgrade('f', 15)) mult = mult.times(1e25)
        if (hasUpgrade('c', 41)) mult = mult.times(1e20)
        if (hasUpgrade('c', 45)) mult = mult.times(1e100)
        if (hasUpgrade('g', 41)) mult = mult.pow(1.04)
        if (hasUpgrade('g', 53)) mult = mult.times(1e100)
        if (hasUpgrade('g', 54)) mult = mult.times(1e10)
        if (hasUpgrade('c', 52)) mult = mult.times(1e308)
        if (hasChallenge('c', 21)) mult = mult.times("1e1000")
        if (inChallenge("f", 11)) mult = mult.pow(0.001)
        if (inChallenge("f", 11)) mult = mult.pow(0.1)
        if (hasUpgrade('i', 21)) mult = mult.pow(2)
        if (inChallenge("j", 11)) mult = mult.pow(0.1)

        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    passiveGeneration() { 
        if (hasUpgrade("z", 21)) return 0
        if (hasMilestone("f", 1)) return 1
        },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "g", description: "G: 重置获取草", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){if (hasUpgrade("z", 21)) return false
    else return (hasUpgrade("p", 55) || player[this.layer].unlocked)},
    autoUpgrade() { if (hasUpgrade("f" , 11)) return true},
    milestones: {
        1: {
            requirementDescription: "5 草",
            effectDescription: "每秒获得 100% 的按钮能量。",
            done() { return player.g.points.gte(5) }
        },
    },
        },
)