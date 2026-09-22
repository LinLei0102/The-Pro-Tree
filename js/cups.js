addLayer("c", {
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
        return player[this.layer].points.max(1).pow(5000000).log10().max(1)
      },
      effectDescription(){

},
effectDescription(){
    return "使积分获取乘以 " + format(tmp[this.layer].effect) 
    /*
      use format(num) whenever displaying a number
    */
   
  },
  challenges: {
    11: {
        name: "无按钮^2",
        challengeDescription: "将按钮能量获取提升至 ^0.0001。",
        goalDescription: "1e325,300 积分。",
        rewardDescription: "获得 1e1,337× 按钮能量。",
        canComplete: function() {return player.points.gte("e325300")},
        unlocked() { return (hasUpgrade('d', 45)) },
    },
    12: {
        name: "生根",
        challengeDescription: "将积分获取提升至 ^0.5、人员获取提升至 ^0.25、按钮能量提升至 ^0.125。",
        goalDescription: "1e15,848 积分。",
        rewardDescription: "获得 1e1,503× 人员。",
        canComplete: function() {return player.points.gte("e15848")},
        unlocked() { return (hasChallenge('c', 11)) },
    },
    21: {
        name: "缓慢",
        challengeDescription: "将积分获取提升至 ^0.0145。",
        goalDescription: "1.00e332 积分。",
        rewardDescription: "获得 1e100× 奖杯和 1e1,000× 草。",
        canComplete: function() {return player.points.gte("e332")},
        unlocked() { return (hasChallenge('c', 12)) },
        },
        22: {
            name: "时间墙",
            challengeDescription: "将人员获取和按钮能量提升至 ^0.0145。",
            goalDescription: "1e87,770 积分。",
            rewardDescription: "获得 1e2,000× 积分。",
            canComplete: function() {return player.points.gte("e87770")},
            unlocked() { return (hasChallenge('c', 21)) },
           }},
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
                    "挑战": {
                        unlocked() {return (hasUpgrade("d", 45))},
                        content: [
                            ["blank", "15px"],
                            "challenges"
                        ]
                    },
                },
            },
    upgrades: {
        11: { title: "101",
        description: "1e20× 积分。",
        cost: new EN("1"),

        },
        12: { title: "102",
        description: "积分获取受奖杯增益。",
        cost: new EN(4),
        effect() {
            return player[this.layer].points.add(1e10).pow(0.360)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        unlocked() {
            return hasUpgrade("c", 11)
        }
        },
        13: { title: "103",
        description: "获得 1e25× 积分。",
        cost: new EN("10"),
        unlocked() {
            return hasUpgrade("c", 12)
        }
        },
        14: { title: "104",
        description: "获得 1e20× 人员和 1e15× 按钮能量。",
        cost: new EN("20"),
        unlocked() {
            return hasUpgrade("c", 13)
        }
        
        },
        15: { title: "105",
        description: "获得 10× 奖杯和 1,000× 草。",
        cost: new EN("30"),
        unlocked() {
            return hasUpgrade("c", 14)
        }
        },
        21: { title: "106",
        description: "获得 1e10× 积分。",
        cost: new EN("256"),
        unlocked() {
            return hasUpgrade("c", 15)
        }
        },
        22: { title: "107",
        description: "获得 1e50× 积分。",
        cost: new EN("420"),
        unlocked() {
            return hasUpgrade("c", 21)
        }
        },
        23: { title: "108",
        description: "奖杯获取受积分增益。",
        cost: new EN("666"),
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        effect() {
            return player.points.add(1).pow(0.00005)
            
        },
        unlocked() {
            return hasUpgrade("c", 22)
        }
        },
        24: { title: "109",
        description: "获得 1e69× 积分。",
        cost: new EN("2000"),
        unlocked() {
            return hasUpgrade("c", 23)
        }
        },
        25: { title: "110",
        description: "1e30× 积分和 1 行新蚂蚁升级。",
        cost: new EN("10000"),
        unlocked() {
            return hasUpgrade("c", 24)
        }
        },
        31: { title: "111",
        description: "69,420× 奖杯和草。",
        cost: new EN("2.5e23"),
        unlocked() {
            return hasUpgrade("d", 25)
        }
        },
        32: { title: "112",
        description: "^1.01 奖杯、^1.02 草、^1.04 按钮能量、^1.08 人员。",
        cost: new EN("4e28"),
        unlocked() {
            return hasUpgrade("c", 31)
        }
        },
        33: { title: "113",
        description: "1e200× 积分。",
        cost: new EN("1e31"),
        unlocked() {
            return hasUpgrade("c", 32)
        }
        },
        34: { title: "114",
        description: "69,420× 奖杯和草。",
        cost: new EN("3.333e33"),
        unlocked() {
            return hasUpgrade("c", 33)
        }
        },
        35: { title: "115",
        description: "1.111e111× 积分。",
        cost: new EN("1e38"),
        unlocked() {
            return hasUpgrade("c", 34)
        }
        },
        41: { title: "116",
        description: "1e10× 奖杯和 1e20× 草。",
        cost: new EN("1e173"),
        unlocked() {
            return hasChallenge("b", 13)
        }
        },
        42: { title: "117",
        description: "1.79e308× 按钮能量。",
        cost: new EN("1e184"),
        unlocked() {
            return hasUpgrade("c", 41)
        }
        },
        43: { title: "118",
        description: "1.79e308× 人员。",
        cost: new EN("1e189"),
        unlocked() {
            return hasUpgrade("c", 42)
        }
        },
        44: { title: "119",
        description: "1e420× 积分。",
        cost: new EN("1e194"),
        unlocked() {
            return hasUpgrade("c", 43)
        }
        },
        45: { title: "120",
        description: "1e20× 奖杯，1e100× 草。",
        cost: new EN("1e205"),
        unlocked() {
            return hasUpgrade("c", 44)
        }
        },
        51: { title: "121",
        description: "1e308× 积分。",
        cost: new EN("1e412"),
        unlocked() {
            return hasChallenge("g", 13)
        }
        },
        52: { title: "122",
        description: "1e308× 草。",
        cost: new EN("1e423"),
        unlocked() {
            return hasUpgrade("c", 51)
        }
        },
        53: { title: "123",
        description: "1e69× 奖杯。",
        cost: new EN("1e427"),
        unlocked() {
            return hasUpgrade("c", 52)
        }
        },
        54: { title: "124",
        description: "再次 1e69× 奖杯。",
        cost: new EN("1e497"),
        unlocked() {
            return hasUpgrade("c", 53)
        }
        },
        55: { title: "125",
        description: "1e1,000× 积分。",
        cost: new EN("1e567"),
        unlocked() {
            return hasUpgrade("c", 54)
        }
        },
        61: { title: "?",
        description: "1e69,420× 积分。",
        cost: new EN("1e713"),
        unlocked() {
            return hasUpgrade("g",61)
        }
        },
    },
    name: "奖杯", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "🥤", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
    }},
    color: "#FFFF00",
    requires: new EN("1e3050"), // Can be a function that takes requirement increases into account
    resource: "奖杯", // Name of prestige currency
    baseResource: "按钮能量", // Name of resource prestige is based on
    baseAmount() {return player.b.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    branches: ["g"],
    exponent: 0.001, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1)
        return mult
    },
    gainMult() {
        let mult = new EN(1)
        if (hasUpgrade('c', 15)) mult = mult.times(10)
        if (hasUpgrade('c', 23)) mult = mult.times(upgradeEffect('c', 23))
        if (hasUpgrade('g', 32)) mult = mult.times(69)
        if (hasUpgrade('g', 35)) mult = mult.times(100)
        if (hasUpgrade('d', 14)) mult = mult.times(100)
        if (hasUpgrade('d', 23)) mult = mult.times(2)
        if (hasUpgrade('d', 15)) mult = mult.times(1000)
        if (hasUpgrade('d', 25)) mult = mult.times(1000)
        if (hasUpgrade('c', 31)) mult = mult.times(69420)
        if (hasUpgrade('c', 32)) mult = mult.pow(1.01)
        if (hasUpgrade('c', 34)) mult = mult.times(69420)
        if (hasUpgrade('ant', 54)) mult = mult.times(100000)
        if (hasUpgrade('d', 35)) mult = mult.pow(1.01)
        if (hasUpgrade('d', 35)) mult = mult.times(1e10)
        if (hasUpgrade('f', 15)) mult = mult.times(1e10)
        if (hasUpgrade('c', 41)) mult = mult.times(1e10)
        if (hasUpgrade('c', 45)) mult = mult.times(1e20)
        if (hasUpgrade('g', 41)) mult = mult.pow(1.02)
        if (hasUpgrade('g', 53)) mult = mult.times(1e25)
        if (hasUpgrade('c', 53)) mult = mult.times(1e69)
        if (hasUpgrade('c', 54)) mult = mult.times(1e69)
        if (hasChallenge('c', 21)) mult = mult.times("1e100")
        if (inChallenge("f", 11)) mult = mult.pow(0.001)
        if (inChallenge("f", 12)) mult = mult.pow(0.1)
        if (hasUpgrade('i', 21)) mult = mult.pow(2)
        if (inChallenge("j", 11)) mult = mult.pow(0.1)

        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "c", description: "C: 重置以获取奖杯", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    doReset(resettingLayer) {
        let keep = [];
        if (hasMilestone("f", 6) && resettingLayer=="f") keep.push("milestones")
        if (hasMilestone("f", 6) && resettingLayer=="f", "e") keep.push("upgrades")
        if (hasMilestone("f", 6) && resettingLayer=="f", "e") keep.push("challenges")
        if (layers[resettingLayer].row > this.row) layerDataReset("c", keep)
    },
    passiveGeneration() { 
        if (hasUpgrade("z", 22)) return (hasUpgrade("z", 22)?0:0)
        if (hasMilestone("f", 1)) return (hasMilestone("f", 1)?1:0)
        },    
    layerShown(){if (hasUpgrade("z", 22)) return false
    return (hasUpgrade("ant", 35) || player[this.layer].unlocked)},
    autoUpgrade() { if (hasUpgrade("f" , 11)) return true},
}
)