addLayer("o", {
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
                            unlocked() {return (hasMilestone("o", 8))},
                            content: [
                                ["blank", "15px"],
                                "challenges"
                            ]
            },
        },
    },
    upgrades: {
        11: { title: "376",
        description: "获得 ^1.01 灯光和 ^1.1 钥匙。",
        cost: new EN("1"),
        },
        12: { title: "377",
        description: "获得 ^1.1 灯光和 ^2 钥匙。",
        cost: new EN("2"),
        unlocked() {
            return hasUpgrade("o", 11)
        }
        },
        13: { title: "378",
        description: "获得 ^1.25 灯光、^3 钥匙并自动购买钥匙升级。",
        cost: new EN("4"),
        unlocked() {
            return hasUpgrade("o", 12)
        }
        },
        14: { title: "379",
        description: "获得 ×8 灯光、×64 钥匙并自动购买灯光升级。",
        cost: new EN("8"),
        unlocked() {
            return hasUpgrade("o", 13)
        }
        },
        15: { title: "380",
        description: "获得 ×2 洋葱、^1.5 灯光和 ^4 钥匙。",
        cost: new EN("8"),
        unlocked() {
            return hasUpgrade("o", 14)
        }
        },
        21: { title: "381",
        description: "再次获得 ×2 洋葱、^2 灯光和 ^6 钥匙。",
        cost: new EN("8"),
        unlocked() {
            return hasUpgrade("o", 15)
        }
        },
        22: { title: "382",
        description: "又一次获得 ×2 洋葱、^3 灯光和 ^36 钥匙。",
        cost: new EN("16"),
        unlocked() {
            return hasUpgrade("o", 21)
        }
        },
        23: { title: "383",
        description: "^4 灯光和 ^256 钥匙。",
        cost: new EN("32"),
        unlocked() {
            return hasUpgrade("o", 22)
        }
        },
        24: { title: "384",
        description: "^5 灯光和 ^3,125 钥匙。",
        cost: new EN("64"),
        unlocked() {
            return hasUpgrade("o", 23)
        }
        },
        25: { title: "385",
        description: "^6 灯光、^46,656 钥匙并自动购买金钱升级。",
        cost: new EN("64"),
        unlocked() {
            return hasUpgrade("o", 24)
        }
        },
        31: { title: "386",
        description: "^8 灯光和 ^16,777,216 钥匙。",
        cost: new EN("64"),
        unlocked() {
            return hasUpgrade("o", 25)
        }
        },
        32: { title: "387",
        description: "获得 ×4 洋葱、^10 灯光和 ^1e10 钥匙。",
        cost: new EN("128"),
        unlocked() {
            return hasUpgrade("o", 31)
        }
        },
        33: { title: "388",
        description: "^13 灯光和 ^3e14 钥匙。",
        cost: new EN("1024"),
        unlocked() {
            return hasUpgrade("o", 32)
        }
        },
        34: { title: "389",
        description: "^16 灯光和 ^1.85e19 钥匙。",
        cost: new EN("16384"),
        unlocked() {
            return hasUpgrade("o", 33)
        }
        },
        35: { title: "390",
        description: "^20 灯光和 ^1e26 钥匙。",
        cost: new EN("16384"),
        unlocked() {
            return hasUpgrade("o", 34)
        }
        },
        41: { title: "391",
        description: "^25 灯光和 ^1e35 钥匙。",
        cost: new EN("16384"),
        unlocked() {
            return hasUpgrade("o", 35)
        }
        },
        42: { title: "392",
        description: "^2 灯光和 ^2e44 钥匙。",
        cost: new EN("131072"),
        unlocked() {
            return hasUpgrade("o", 41)
        }
        },
        43: { title: "393",
        description: "^1.1 灯光和 ^1e69 钥匙。",
        cost: new EN("8388608"),
        unlocked() {
            return hasUpgrade("o", 42)
        }
        },
        44: { title: "394",
        description: "^1.2 灯光和 ^1e100 钥匙。",
        cost: new EN("33554432"),
        unlocked() {
            return hasUpgrade("o", 43)
        }
        },
        45: { title: "395",
        description: "获得 ×4 洋葱、^1.1 灯光和 ^1e153 钥匙。",
        cost: new EN("268435456"),
        unlocked() {
            return hasUpgrade("o", 44)
        }
        },
        51: { title: "396",
        description: "^1.1 灯光和 ^1e308 钥匙。",
        cost: new EN("2147483648"),
        unlocked() {
            return hasUpgrade("o", 45)
        }
        },
        52: { title: "397",
        description: "^1.1 灯光和 ^1e420 钥匙。",
        cost: new EN("274877906944"),
        unlocked() {
            return hasUpgrade("o", 51)
        }
        },
        53: { title: "398",
        description: "^1.1 灯光和 ^1e666 钥匙。",
        cost: new EN("1.0995116e12"),
        unlocked() {
            return hasUpgrade("o", 52)
        }
        },
        54: { title: "399",
        description: "^1.2 灯光和 ^1e1,000 钥匙。",
        cost: new EN("4.3980465e12"),
        unlocked() {
            return hasUpgrade("o", 53)
        }
        },
        55: { title: "400",
        description: "^4 灯光和 ^1e3,003 钥匙。",
        cost: new EN("1.1258999e15"),
        unlocked() {
            return hasUpgrade("o", 54)
        }
        },
        61: { title: "?",
        description: "完成该挑战。",
        cost: new EN("2e44"),
        unlocked() {
            return hasUpgrade("j", 65)
        }
        },
        62: { title: "?",
        description: "解锁另一个挑战。",
        cost: new EN("1e163"),
        unlocked() {
            return hasUpgrade("o", 61)
        }
        },
        63: { title: "?",
        description: "完成第 2 个挑战。",
        cost: new EN("1e163"),
        unlocked() {
            return hasUpgrade("l", 65)
        }
        },
        64: { title: "?",
        description: "^2 灯光并进一步提升钥匙获取。",
        cost: new EN("e2539"),
        unlocked() {
            return hasUpgrade("o", 63)
        }
        },
        65: { title: "?",
        description: "解锁第 3 个挑战。",
        cost: new EN("e5074"),
        unlocked() {
            return hasUpgrade("o", 64)
        }
        },
        66: { title: "?",
        description: "根据本次重置所花费的时间，对积分获取进行四阶运算。",
        cost: new EN("1"),
        effect() {
            let time = EN(player.o.resetTime)
            if (hasUpgrade("su", 12)) time = time.mul(1000000)
            if (hasUpgrade("q", 55)) time = time.mul(4)
            if (hasChallenge("o", 21)) time = time.mul(2)
            if (hasUpgrade("r", 55)) time = time.mul(16)
            if (hasUpgrade("s", 55)) time = time.mul(256)
            if (hasUpgrade("t", 55)) time = time.mul(65536)
            if (hasChallenge("o", 23)) time = time.mul(4)
            if (hasUpgrade("u", 55)) time = time.mul(4294967296)
            if (hasAchievement("a", 151)) time = time.mul(4096)
            if (hasUpgrade("v", 55)) time = time.pow(3)
            if (hasMilestone("re", 4)) time = time.mul(2)
            if (hasMilestone("re", 5)) time = time.mul(4)
            if (hasUpgrade("re", 44)) time = time.mul(4)
            if (hasUpgrade("re", 45)) time = time.mul(2)
            if (hasUpgrade("re", 51)) time = time.mul(4)
            if (hasUpgrade("w", 55)) time = time.pow(4)
            if (hasUpgrade("re", 52)) time = time.mul(4)
            if (hasUpgrade("re", 55)) time = time.pow(2)
            if (hasUpgrade("x", 55)) time = time.pow(6)
            if (hasMilestone("re", 10)) time = time.mul(1048576)
            if (hasUpgrade("re", 75)) time = time.mul(1e21)
            if (hasUpgrade("re", 82)) time = time.mul(1e21)
            if (hasUpgrade("y", 55)) time = time.pow(8)
            if (hasUpgrade("re", 95)) time = time.mul(1e63)
            if (hasUpgrade("re", 101)) time = time.mul(1e308)
            if (inChallenge("z", 11)) time = time.pow(0.0023)
            if (inChallenge("z", 12)) time = time.pow(0.00143)
            if (inChallenge("z", 21)) time = time.pow(0.0013)
            if (inChallenge("z", 22)) time = time.pow(0.00113)
            if (inChallenge("z", 31)) time = time.pow(0)
            if (inChallenge("z", 32)) time = time.pow(0.002)
            if (inChallenge("z", 42)) time = time.pow(0.33333333333333)
            if (inChallenge("z", 51)) time = time.pow(0.0145)
            if (inChallenge("z", 52)) time = time.pow(0.00238095238)
            if (hasUpgrade("re", 103)) time = time.mul(1e308)
            if (hasUpgrade("re", 105)) time = time.pow(0)
            return EN.tetr(10, time.add(1).pow(0.22316), time)
        },
        effectDisplay() { return "^" + format(this.effect()) },
            unlocked() {
                return hasUpgrade("o", 65)
        }
        },
    },
    autoUpgrade() { if (hasMilestone("re" , 3)) return true},

    effect(){

    },
    effect(){
        return ExpantaNum.pow(2, player[this.layer].points)
        /*
          you should use this.layer instead of <layerID>
          Decimal.pow(num1, num2) is an easier way to do
          num1.pow(num2)
        */
    
    /*
      use format(num) whenever displaying a number
    */
   
  },
    name: "洋葱", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "🧅", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        auto: false
    }},
    color: "#48412B",
    requires: new EN("e1.7e9"), // Can be a function that takes requirement increases into account
    resource: "洋葱", // Name of prestige currency
    baseResource: "灯光", // Name of resource prestige is based on
    baseAmount() {return player.l.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    branches: ["j"],
    exponent: "1e-19", // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1)
        if (hasMilestone('o', 3)) mult = mult.times(1.1)
        if (hasUpgrade('o', 15)) mult = mult.times(2)
        if (hasUpgrade('o', 21)) mult = mult.times(2)
        if (hasUpgrade('o', 22)) mult = mult.times(2)
        if (hasUpgrade('o', 32)) mult = mult.times(4)
        if (hasUpgrade('o', 45)) mult = mult.times(4)
        if (hasMilestone('re', 2)) mult = mult.times(64)
        if (hasUpgrade('v', 54)) mult = mult.tetrate(10000)
        if (hasUpgrade('w', 54)) mult = mult.tetrate(1e5)
        if (hasUpgrade('z', 54)) mult = mult.times("10^^1e3003")
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    canBuyMax() { return hasMilestone("n", 1) },
    row: 5, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "o", description: "O: 重置以获得洋葱", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    milestones: {
        1: {requirementDescription: "1 洋葱",
         effectDescription: "每秒获得 100% 的喷气背包、钥匙和灯光。",
            done() { return player.o.points.gte(1)},},
   2: {requirementDescription: "总计 2 洋葱",
         effectDescription: "自动购买金钱和笔记本。",
            done() { return player.o.total.gte(2)},},
    
    3: {requirementDescription: "总计 4 洋葱",
         effectDescription: "×1.1 洋葱。",
            done() { return player.o.total.gte(4)},},
    4: {requirementDescription: "总计 16 洋葱",
         effectDescription: "重置时保留钥匙升级。",
            done() { return player.o.total.gte(16)},},
    
    5: {requirementDescription: "总计 256 洋葱",
         effectDescription: "重置时保留灯光升级。",
            done() { return player.o.total.gte(256)},},
    
    6: {requirementDescription: "总计 65,536 洋葱",
         effectDescription: "重置时保留金钱相关内容。",
            done() { return player.o.total.gte(65536)},},
    7: {requirementDescription: "总计 4.294e9 洋葱",
         effectDescription: "重置时保留笔记本相关内容。",
            done() { return player.o.total.gte(4.294e9)},},
    8: {requirementDescription: "1e44 洋葱",
         effectDescription: "解锁 1 个新挑战。",
            done() { return player.o.points.gte(1e44)},},
    },
    layerShown(){if (hasUpgrade("ar", 55)) return false
    else return (hasUpgrade("n", 55) || player[this.layer].unlocked)},
    passiveGeneration() { 
        if (hasUpgrade("ar", 55)) return (hasUpgrade("ar", 55)?0:0)
        if (hasMilestone("re", 1)) return (hasMilestone("re", 1)?1:0)
        },   
    challenges: {
        11: {
            name: "欧",
            challengeDescription: "你每秒起始获得 1 钥匙。",
            goalDescription: "e1.797e308 钥匙。",
            rewardDescription: "获得 ^4 灯光，钥匙获得巨大增益。",
            canComplete: function() {return player.k.points.gte("e1.797e308")},
            unlocked() { return (hasMilestone('o', 8)) },
       },
       12: {
        name: "普通",
        challengeDescription: "你每秒起始获得 1 灯光。",
        goalDescription: "e1.000e10 灯光。",
        rewardDescription: "获得 ^16 灯光，钥匙获得还要更大的增益。",
        canComplete: function() {return player.l.points.gte("ee10")},
        unlocked() { return (hasUpgrade('o', 62)) },
   },
   13: {
    name: "宝珠",
    challengeDescription: "你起始拥有 2 笔记本。",
    goalDescription: "2,022 笔记本。",
    rewardDescription: "获得 ^256 灯光，钥匙获得大量更大的增益。",
    canComplete: function() {return player.n.points.gte("2022")},
    unlocked() { return (hasUpgrade('o', 65)) }
},
14: {
    name: "O",
    challengeDescription: "只是一次普通流程。",
    goalDescription: "7F7 积分。",
    rewardDescription: "提升灯光和钥匙获取。",
    canComplete: function() {return player.points.gte("eeeeeee7")},
    unlocked() { return (hasUpgrade('q', 55)) }
},
21: {
    name: "序数",
    challengeDescription: "只是一次普通流程，但更难。",
    goalDescription: "2F8 积分。",
    rewardDescription: "解锁一个新层和洋葱升级 71 ×2。",
    canComplete: function() {return player.points.gte("eeeeeee100")},
    unlocked() { return (hasChallenge('o', 14)) }
},
22: {
    name: "氧气",
    challengeDescription: "同样的流程，但还要更难。",
    goalDescription: "1F12 积分。",
    rewardDescription: "解锁一个新层，提升灯光、钥匙获取等。",
    canComplete: function() {return player.points.gte("eeeeeeeeeee10")},
    unlocked() { return (hasUpgrade('r', 55)) }
},
23: {
    name: "我的天",
    challengeDescription: "你太强了（普通流程）。",
    goalDescription: "1F666 积分。",
    rewardDescription: "解锁第 6 行的最终层和洋葱升级 71 ×4。",
    canComplete: function() {return player.points.gte("10^^666")},
    unlocked() { return (hasUpgrade('t', 55)) }
},
},
    doReset(resettingLayer) {
        let keep = [];
        if (hasMilestone("re", 4) && resettingLayer=="re") keep.push("milestones")
        if (hasMilestone("re", 4) && resettingLayer=="re") keep.push("challenges")
        if (hasMilestone("re", 4) && resettingLayer=="re") keep.push("upgrades")
        if (layers[resettingLayer].row > this.row) layerDataReset("o", keep)
    },

})