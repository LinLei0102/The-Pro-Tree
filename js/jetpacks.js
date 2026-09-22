addLayer("j", {
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
                            unlocked() {return (hasMilestone("j", 8))},
                            content: [
                                ["blank", "15px"],
                                "challenges"
                            ]
            },
        },
    },
    upgrades: {
        11: { title: "251",
        description: "获得 e1e12× 积分。",
        cost: new EN("1"),

        },
        12: { title: "252",
        description: "获得 e1e14× 积分。",
        cost: new EN("1"),
        unlocked() {
            return hasUpgrade("j", 11)
        }
        },
        13: { title: "253",
        description: "获得 e1e15× 积分。",
        cost: new EN("1"),
        unlocked() {
            return hasUpgrade("j", 12)
        }
        },
        14: { title: "254",
        description: "获得 e1e17× 积分并使铃铛获取翻倍。",
        cost: new EN("69"),
        unlocked() {
            return hasUpgrade("j", 13)
        }
        },
        15: { title: "255",
        description: "铃铛获取变为三倍。",
        cost: new EN("420"),
        unlocked() {
            return hasUpgrade("j", 14)
        }
        },
        21: { title: "256",
        description: "铃铛获取变为四倍并获得 e1e18× 积分。",
        cost: new EN("1337"),
        unlocked() {
            return hasUpgrade("j", 15)
        }
        },
        22: { title: "257",
        description: "铃铛获取变为五倍。",
        cost: new EN("6969"),
        unlocked() {
            return hasUpgrade("j", 21)
        }
        },
        23: { title: "258",
        description: "6× 铃铛获取与 e1e19× 积分。",
        cost: new EN("69420"),
        unlocked() {
            return hasUpgrade("j", 22)
        }
        },
        24: { title: "259",
        description: "7× 铃铛获取。",
        cost: new EN("1e5"),
        unlocked() {
            return hasUpgrade("j", 23)
        }
        },
        25: { title: "260",
        description: "8× 铃铛获取。",
        cost: new EN("2e6"),
        unlocked() {
            return hasUpgrade("j", 24)
        }
        },
        31: { title: "261",
        description: "9× 铃铛获取与 e1e20× 积分。",
        cost: new EN("1e7"),
        unlocked() {
            return hasUpgrade("j", 25)
        }
        },
        32: { title: "262",
        description: "10× 铃铛获取。",
        cost: new EN("5e7"),
        unlocked() {
            return hasUpgrade("j", 31)
        }
        },
        33: { title: "263",
        description: "20× 铃铛获取。",
        cost: new EN("1e9"),
        unlocked() {
            return hasUpgrade("j", 32)
        }
        },
        34: { title: "264",
        description: "30× 铃铛获取。",
        cost: new EN("1e10"),
        unlocked() {
            return hasUpgrade("j", 33)
        }
        },
        35: { title: "265",
        description: "40× 铃铛获取。",
        cost: new EN("1e12"),
        unlocked() {
            return hasUpgrade("j", 34)
        }
        },
        41: { title: "266",
        description: "50× 铃铛获取与 e1e21× 积分。",
        cost: new EN("2.5e13"),
        unlocked() {
            return hasUpgrade("j", 35)
        }
        },
        42: { title: "267",
        description: "60× 铃铛获取。",
        cost: new EN("1e15"),
        unlocked() {
            return hasUpgrade("j", 41)
        }
        },
        43: { title: "268",
        description: "70× 铃铛获取与 e1e22× 积分。",
        cost: new EN("2e16"),
        unlocked() {
            return hasUpgrade("j", 42)
        }
        },
        44: { title: "269",
        description: "80× 铃铛获取。",
        cost: new EN("1e18"),
        unlocked() {
            return hasUpgrade("j", 43)
        }
        },
        45: { title: "270",
        description: "90× 铃铛获取与 e1e23× 积分。",
        cost: new EN("1e20"),
        unlocked() {
            return hasUpgrade("j", 44)
        }
        },
        51: { title: "271",
        description: "更多积分！",
        cost: new EN("eee47"),
        unlocked() {
            return hasUpgrade("k", 45)
        }
        },
        52: { title: "272",
        description: "又是更多积分！",
        cost: new EN("eee63"),
        unlocked() {
            return hasUpgrade("j", 51)
        }
        },
        53: { title: "273",
        description: "还是更多积分！",
        cost: new EN("eee79"),
        unlocked() {
            return hasUpgrade("j", 52)
        }
        },
        54: { title: "24974",
        description: "更多积分，一次又一次！",
        cost: new EN("eee111"),
        unlocked() {
            return hasUpgrade("j", 53)
        }
        },
        55: { title: "275",
        description: "更多积分，一次又一次，并解锁一个新层！",
        cost: new EN("eee200"),
        unlocked() {
            return hasUpgrade("j", 54)
        }
        },
        61: { title: "?",
        description: "提升钥匙获取。",
        cost: new EN("-1"),
        unlocked() {
            return inChallenge("o", 11)
        }
        },
        62: { title: "?",
        description: "再次提升钥匙获取。",
        cost: new EN("eeeee14"),
        unlocked() {
            return inChallenge("o", 11)
        }
        },
        63: { title: "?",
        description: "又一次提升钥匙获取。",
        cost: new EN("eeeee14"),
        unlocked() {
            return inChallenge("o", 11)
        }
        },
        64: { title: "?",
        description: "再一次又一次提升钥匙获取。",
        cost: new EN("eeeee14"),
        unlocked() {
            return inChallenge("o", 11)
        }
        },
        65: { title: "?",
        description: "一遍又一遍又一遍地提升钥匙获取。",
        cost: new EN("eeeee14"),
        unlocked() {
            return inChallenge("o", 11)
        }
        },
    },
    milestones: {
         1: {requirementDescription: "1 铃铛",
          effectDescription: "每秒获得 100% 的水果与房屋。",
             done() { return player.j.points.gte(1)},},
         2: {requirementDescription: "共 2 铃铛",
             effectDescription: "重置时保留水果相关内容。",
                done() { return player.j.total.gte(2)},},
        3: {requirementDescription: "共 4 铃铛",
             effectDescription: "重置时保留电力相关内容。",
            done() { return player.j.total.gte(4)},},
         4: {requirementDescription: "共 16 铃铛",
             effectDescription: "重置时保留房屋相关内容。",
                done() { return player.j.total.gte(16)},},
         5: {requirementDescription: "共 256 铃铛",
             effectDescription: "重置时保留冰相关内容。",
              done() { return player.j.total.gte(256)},},
         6: {requirementDescription: "共 65,536 铃铛",
             effectDescription: "自动购买电力，不重置任何内容。",
                done() { return player.j.total.gte(65536)},},
        7: {requirementDescription: "共 4.294e9 铃铛",
             effectDescription: "自动购买冰，不重置任何内容。",
                done() { return player.j.total.gte(4.294e9)},},
                8: {requirementDescription: "共 2.222e22 铃铛",
                effectDescription: "解锁一个挑战。",
                   done() { return player.j.total.gte(2.222e22)},},
    },
    challenges: {
        11: {
            name: "乌龟",
            challengeDescription: "将第 1 行至第 4 行提升 ^0.1。",
            goalDescription: "1e111,111,125 积分。",
            rewardDescription: "获得 ^1.01 积分。",
            canComplete: function() {return player.points.gte("e111111125")},
            unlocked() { return (hasMilestone('j', 8)) },
       },
       12: {
        name: "陷阱",
        challengeDescription: "你每秒初始获得 1 积分。",
        goalDescription: "ee1.79e308 积分。",
        rewardDescription: "获得 ^2 灯光并略微提升积分获取。",
        canComplete: function() {return player.points.gte("ee1.79e308")},
        unlocked() { return (hasUpgrade('l', 31)) },
   }},
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
        return player[this.layer].points.max(1).pow("ee16").log10().max(1)
      },
      effectDescription(){

},
effectDescription(){
    return "使积分获取乘以 " + format(tmp[this.layer].effect) 
    /*
      use format(num) whenever displaying a number
    */
   
  },
    name: "铃铛", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "🔔", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        auto: false
    }},
    color: "#ffa500",
    requires: new EN("e2e12"), // Can be a function that takes requirement increases into account
    resource: "铃铛", // Name of prestige currency
    baseResource: "水果", // Name of resource prestige is based on
    baseAmount() {return player.f.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    branches: ["f"],
    exponent: "1e-308", // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1)
        if (hasUpgrade('j', 14)) mult = mult.times(2)
        if (hasUpgrade('j', 15)) mult = mult.times(3)
        if (hasUpgrade('j', 21)) mult = mult.times(4)
        if (hasUpgrade('j', 22)) mult = mult.times(5)
        if (hasUpgrade('j', 23)) mult = mult.times(6)
        if (hasUpgrade('j', 24)) mult = mult.times(7)
        if (hasUpgrade('j', 25)) mult = mult.times(8)
        if (hasUpgrade('j', 31)) mult = mult.times(9)
        if (hasUpgrade('j', 32)) mult = mult.times(10)
        if (hasUpgrade('j', 33)) mult = mult.times(20)
        if (hasUpgrade('j', 34)) mult = mult.times(30)
        if (hasUpgrade('j', 35)) mult = mult.times(40)
        if (hasUpgrade('j', 41)) mult = mult.times(50)
        if (hasUpgrade('j', 42)) mult = mult.times(60)
        if (hasUpgrade('j', 43)) mult = mult.times(70)
        if (hasUpgrade('j', 44)) mult = mult.times(80)
        if (hasUpgrade('j', 45)) mult = mult.times(90)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    row: 4, // Row the layer is in on the tree (0 is the first row)
    passiveGeneration() { 
        if (hasUpgrade("z", 44)) return 0
        if (hasMilestone("o", 1)) return 1
        },        
        hotkeys: [
        {key: "j", description: "J: 重置获取铃铛", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    doReset(resettingLayer) {
        let keep = [];
        if (hasMilestone("o", 3) && resettingLayer=="o", "q", "r") keep.push("milestones")
        if (hasMilestone("o", 3) && resettingLayer=="o", "q", "r") keep.push("upgrades")
        if (hasMilestone("o", 3) && resettingLayer=="o", "q", "r") keep.push("challenges")
        if (layers[resettingLayer].row > this.row) layerDataReset("j", keep)
    },
    layerShown(){if (hasUpgrade("z", 44)) return false
    else return (hasUpgrade("i", 45) || player[this.layer].unlocked)},
})