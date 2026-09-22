addLayer("z", {
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
                        unlocked() {return (hasUpgrade("z", 12))},
                content: [
                    ["blank", "15px"],
                    ["challenges", [1,2,3,4,5,6,7,8,9]]
                    
                ]
},
},
                },
    upgrades: {
        11: { title: "676",
        description: "获得 ×2 奖牌。",
        cost: new EN("1"),
        unlocked() {
            return hasUpgrade("re",91)
        },
        },
        12: { title: "677",
        description: "解锁一个挑战，但移除人员层。",
        cost: new EN("1e6"),
        unlocked() {
            return hasUpgrade("z",11)
        },
        },
        13: { title: "678",
        description: "获得 ×10 斑马，但移除按钮能量层。",
        cost: new EN("3e6"),
        unlocked() {
            return hasUpgrade("z",12)
        },
        },
        14: { title: "679",
        description: "解锁 2 个新挑战，但移除蚂蚁层。",
        cost: new EN("4e7"),
        unlocked() {
            return hasUpgrade("z",13)
        },
        },
        15: { title: "680",
        description: "获得 ×3 斑马。",
        cost: new EN("1e8"),
        unlocked() {
            return hasUpgrade("z",14)
        },
        },
        21: { title: "681",
        description: "获得 ×9 斑马，但移除草层。",
        cost: new EN("1e9"),
        unlocked() {
            return hasUpgrade("z",15)
        },
        },
        22: { title: "682",
        description: "获得 ×81 斑马，但移除奖杯层。",
        cost: new EN("8e9"),
        unlocked() {
            return hasUpgrade("z",21)
        },
        },
        23: { title: "683",
        description: "获得 ×3 斑马。",
        cost: new EN("1e11"),
        unlocked() {
            return hasUpgrade("z",22)
        },
        },
        24: { title: "684",
        description: "解锁 3 个新挑战，移除骰子层。",
        cost: new EN("1e12"),
        unlocked() {
            return hasUpgrade("z",23)
        },
        },
        25: { title: "685",
        description: "获得 ×3 斑马。",
        cost: new EN("1e14"),
        unlocked() {
            return hasUpgrade("z",24)
        },
        },
        31: { title: "686",
        description: "获得 ×9 斑马，但移除水果层。",
        cost: new EN("1e15"),
        unlocked() {
            return hasUpgrade("z",25)
        },
        },
        32: { title: "687",
        description: "获得 ×81 斑马，但移除电力层。",
        cost: new EN("1e16"),
        unlocked() {
            return hasUpgrade("z",31)
        },
        },
        33: { title: "688",
        description: "获得 ×6,561 斑马，但移除房屋层。",
        cost: new EN("1e18"),
        unlocked() {
            return hasUpgrade("z",32)
        },
        },
        34: { title: "689",
        description: "获得 ×3 斑马。",
        cost: new EN("1e21"),
        unlocked() {
            return hasUpgrade("z",33)
        },
        },
        35: { title: "690",
        description: "获得 ×3 斑马。",
        cost: new EN("1e22"),
        unlocked() {
            return hasUpgrade("z",34)
        },
        },
        41: { title: "691",
        description: "解锁 4 个新挑战，但移除冰层。",
        cost: new EN("2.222e22"),
        unlocked() {
            return hasUpgrade("z",35)
        },
        },
        42: { title: "692",
        description: "获得 ×4 斑马。",
        cost: new EN("1e26"),
        unlocked() {
            return hasUpgrade("z",41)
        },
        },
        43: { title: "693",
        description: "获得 ×4 斑马。",
        cost: new EN("1e27"),
        unlocked() {
            return hasUpgrade("z",42)
        },
        },
        44: { title: "694",
        description: "获得 ×16 斑马，但移除铃铛层。",
        cost: new EN("2.5e27"),
        unlocked() {
            return hasUpgrade("z",43)
        },
        },
        45: { title: "695",
        description: "获得 ×256 斑马，但移除钥匙层。",
        cost: new EN("2e28"),
        unlocked() {
            return hasUpgrade("z",44)
        },
        },
        51: { title: "696",
        description: "获得 ×4 斑马。",
        cost: new EN("1e31"),
        unlocked() {
            return hasUpgrade("z",45)
        },
        },
        52: { title: "697",
        description: "获得 ×16 斑马，但移除灯光层（不要重置任何内容，否则你必须重新开始轮回流程。）",
        cost: new EN("1e32"),
        unlocked() {
            return hasUpgrade("z",51)
        },
        },
        53: { title: "698",
        description: "获得 ×256 斑马，但移除金钱层。",
        cost: new EN("4e32"),
        unlocked() {
            return hasUpgrade("z",52)
        },
        },
        54: { title: "699",
        description: "提升第 6 行 - 第 7 行货币。",
        cost: new EN("1e35"),
        unlocked() {
            return hasUpgrade("z",53)
        },
        },
        55: { title: "700",
        description: "解锁 5 个最终斑马挑战，但移除笔记本层（如果你不完成任何挑战，你将会卡住。）",
        cost: new EN("10^^1e100"),
        unlocked() {
            return hasUpgrade("z",54)
        },
        },
    },
    challenges: {
        11: {
                name: "苦战",
                challengeDescription: "洋葱升级 61 更差。",
                goalDescription: "F9e15 积分。",
                rewardDescription: "获得 ×1.1 奖牌。",
                canComplete: function() {return player.points.gte("10^^9e15")},
                unlocked() { return (hasUpgrade('z', 12)) },
        },
                12: {
                name: "苦战^2",
                challengeDescription: "洋葱升级 61 更加糟糕。",
                goalDescription: "F1e10 积分。",
                rewardDescription: "获得 ×1.2 奖牌和 ×4 斑马。",
                canComplete: function() {return player.points.gte("10^^1e10")},
                unlocked() { return (hasUpgrade('z', 14)) },
        },
        21: {
            name: "苦战^3",
            challengeDescription: "洋葱升级 61 甚至更差。",
            goalDescription: "F999,999,999 积分。",
            rewardDescription: "获得 ×1.3 奖牌和 ×3 斑马。",
            canComplete: function() {return player.points.gte("10^^999999999")},
            unlocked() { return (hasChallenge('z', 12)) },
    },
    22: {
        name: "苦战^4",
        challengeDescription: "洋葱升级 61 差得多。",
        goalDescription: "F77,777,777 积分。",
        rewardDescription: "获得 ×1.5 奖牌和 ×16 斑马。",
        canComplete: function() {return player.points.gte("10^^77777777")},
        unlocked() { return (hasUpgrade('z', 24)) },
},
31: {
    name: "苦战^∞",
    challengeDescription: "洋葱升级 61 没有任何效果。",
    goalDescription: "1 积分。",
    rewardDescription: "获得 ×1.6 奖牌和 ×4 斑马。",
    canComplete: function() {return player.points.gte("1")},
    unlocked() { return (hasChallenge('z', 22)) },
},
32: {
    name: "苦战^0.5",
    challengeDescription: "洋葱升级 61 糟糕得多。",
    goalDescription: "F1e14 积分。",
    rewardDescription: "获得 ×1.8 奖牌和 ×4 斑马。",
    canComplete: function() {return player.points.gte("10^^1e14")},
    unlocked() { return (hasChallenge('z', 31)) },
},
41: {
    name: "普通流程",
    challengeDescription: "只是一次普通流程。",
    goalDescription: "FF2.585 积分。",
    rewardDescription: "获得 ×1.9 奖牌和 ×4 斑马。",
    canComplete: function() {return player.points.gte("10^^1e7000")},
    unlocked() { return (hasUpgrade('z', 41)) },
},
42: {
    name: "根号",
    challengeDescription: "洋葱升级 61 降低了 ^3。",
    goalDescription: "FF2.527 积分。",
    rewardDescription: "获得 ×2.1 奖牌和 ×4 斑马。",
    canComplete: function() {return player.points.gte("10^^1e2333")},
    unlocked() { return (hasChallenge('z', 41)) },
},
51: {
    name: "平方根",
    challengeDescription: "洋葱升级 61 少 ^69。",
    goalDescription: "FF2.301 积分。",
    rewardDescription: "获得 ×2.4 奖牌和 ×81 斑马。",
    canComplete: function() {return player.points.gte("10^^1e100")},
    unlocked() { return (hasChallenge('z', 42)) },
},
52: {
    name: "立方根",
    challengeDescription: "洋葱升级 61 少 ^420。",
    goalDescription: "F9e15 积分。",
    rewardDescription: "获得 ×2.6 奖牌和 ×4 斑马。",
    canComplete: function() {return player.points.gte("10^^9e15")},
    unlocked() { return (hasChallenge('z', 51)) },
},
61: {
    name: "免费",
    challengeDescription: "在 1 刻内完成此挑战。",
    goalDescription: "1 积分。",
    rewardDescription: "获得 ×2.9 奖牌。",
    canComplete: function() {return player.points.gte("1")},
    unlocked() { return (hasUpgrade('z', 55)) },
},
62: {
    name: "开始？",
    challengeDescription: "轮回升级 11 几乎没有任何作用。",
    goalDescription: "ee1e3,000 积分。",
    rewardDescription: "获得 ×3.1 奖牌。",
    canComplete: function() {return player.points.gte("eee3000")},
    unlocked() { return (hasChallenge('z', 61)) },
},
71: {
    name: "再次免费",
    challengeDescription: "同样的东西。",
    goalDescription: "1 积分。",
    rewardDescription: "获得 ×3.5 奖牌。",
    canComplete: function() {return player.points.gte("1")},
    unlocked() { return (hasChallenge('z', 62)) },
},
72: {
    name: "你能停下吗",
    challengeDescription: "不",
    goalDescription: "0 积分。",
    rewardDescription: "获得 ×3.8 奖牌。",
    canComplete: function() {return player.points.gte("0")},
    unlocked() { return (hasChallenge('z', 71)) },
},
81: {
    name: "唉，好吧，那就多买点轮回升级。",
    challengeDescription: "谢谢你，游戏。",
    goalDescription: "1 积分。",
    rewardDescription: "获得 ×4.2 奖牌。",
    canComplete: function() {return player.points.gte("1")},
    unlocked() { return (hasChallenge('z', 72)) },
},
    },
    name: "斑马", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "🦓", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        auto: false
    }},
    color: "#4b6753",
    requires: new EN("10^^1e7000"), // Can be a function that takes requirement increases into account
    resource: "斑马", // Name of prestige currency
    baseResource: "积分", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    branches: ["t" , "y"],
    type() {if (hasUpgrade("su", 535)) return "normal"
    else return "normal"},    
    exponent() {if (hasUpgrade("su", 535)) return new EN(0)
    else return new EN(0)},    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1)
        if (hasUpgrade('re', 93)) mult = mult.times(10000)
        if (hasUpgrade('z', 13)) mult = mult.times(10)
        if (hasChallenge('z', 12)) mult = mult.times(4)
        if (hasChallenge('z', 21)) mult = mult.times(3)
        if (hasUpgrade('z', 15)) mult = mult.times(3)
        if (hasUpgrade('z', 21)) mult = mult.times(9)
        if (hasUpgrade('z', 22)) mult = mult.times(81)
        if (hasUpgrade('z', 23)) mult = mult.times(3)
        if (hasChallenge('z', 22)) mult = mult.times(16)
        if (hasChallenge('z', 31)) mult = mult.times(4)
        if (hasChallenge('z', 32)) mult = mult.times(4)
        if (hasUpgrade('z', 25)) mult = mult.times(3)
        if (hasUpgrade('z', 31)) mult = mult.times(9)
        if (hasUpgrade('z', 32)) mult = mult.times(81)
        if (hasUpgrade('z', 33)) mult = mult.times(6561)
        if (hasUpgrade('z', 34)) mult = mult.times(3)
        if (hasUpgrade('z', 35)) mult = mult.times(3)
        if (hasChallenge('z', 41)) mult = mult.times(4)
        if (hasChallenge('z', 42)) mult = mult.times(4)
        if (hasChallenge('z', 51)) mult = mult.times(81)
        if (hasChallenge('z', 52)) mult = mult.times(4)
        if (hasUpgrade('z', 42)) mult = mult.times(4)
        if (hasUpgrade('z', 43)) mult = mult.times(4)
        if (hasUpgrade('z', 44)) mult = mult.times(16)
        if (hasUpgrade('z', 45)) mult = mult.times(256)
        if (hasUpgrade('z', 51)) mult = mult.times(4)
        if (hasUpgrade('z', 52)) mult = mult.times(16)
        if (hasUpgrade('z', 53)) mult = mult.times(256)
        if (hasUpgrade('z', 54)) mult = mult.times("10^^1e100")
        if (hasUpgrade('re', 103)) mult = mult.times(1e9)
        if (hasUpgrade('ar', 54)) mult = mult.pow("10^^^3")
        if (hasUpgrade('ba', 54)) mult = mult.pow("10^^^4")
        if (hasUpgrade('ci', 54)) mult = mult.times("10^^^6")
        if (hasUpgrade('du', 54)) mult = mult.times("10^^^10")
        if (hasUpgrade('eg', 54)) mult = mult.times("10^^^25")
        if (hasUpgrade('fi', 54)) mult = mult.times("10^^^50")
        if (hasUpgrade('ga', 54)) mult = mult.times("10^^^100")
        if (hasUpgrade('ha', 54)) mult = mult.times("10^^^1000")
        if (hasUpgrade('is', 54)) mult = mult.times("10^^^9e15")
        if (hasUpgrade('ju', 54)) mult = mult.times("10^^^1e16")

        return mult
    },
    doReset(resettingLayer) {
        let keep = [];
        if (hasMilestone("re", 16) && resettingLayer=="re") keep.push("upgrades")
        if (hasMilestone("re", 17) && resettingLayer=="re") keep.push("challenges")
        if (layers[resettingLayer].row > this.row) layerDataReset("z", keep)
    },
    autoUpgrade() { if (hasMilestone("re" , 15)) return true},
    passiveGeneration() { return (hasMilestone("re", 13)&&player.current!="z")?1:0 },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    row: 6, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "z", description: "Z: 重置以获得斑马", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){if (hasUpgrade("su", 535)) return false
    else return (hasUpgrade("re", 91) || player[this.layer].unlocked)},})