addLayer("ha", {
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
        11: { title: "876",
        description: "获得 ×1,000 奖牌！",
        cost: new EN("1"),
        unlocked() {
            return hasChallenge("re", 52)
        },
        },
        12: { title: "877",
        description: "获得 ×10 锤子。",
        cost: new EN("100"),
        unlocked() {
            return hasUpgrade("ha", 11)
        },
        },
        13: { title: "878",
        description: "获得 ×100 锤子。",
        cost: new EN("1000"),
        unlocked() {
            return hasUpgrade("ha", 12)
        },
        },
        14: { title: "879",
        description: "获得 ×1,000 锤子。",
        cost: new EN("100000"),
        unlocked() {
            return hasUpgrade("ha", 13)
        },
        },
        15: { title: "880",
        description: "获得 ×10,000 锤子。",
        cost: new EN("100000000"),
        unlocked() {
            return hasUpgrade("ha", 14)
        },
        },
        21: { title: "881",
        description: "获得 ×100,000 锤子。",
        cost: new EN("1e11"),
        unlocked() {
            return hasUpgrade("ha", 15)
        },
        },
        22: { title: "882",
        description: "获得 ×1,000,000 锤子。",
        cost: new EN("1e16"),
        unlocked() {
            return hasUpgrade("ha", 21)
        },
        },
        23: { title: "883",
        description: "获得 ×10,000,000 锤子。",
        cost: new EN("1e22"),
        unlocked() {
            return hasUpgrade("ha", 22)
        },
        },
        24: { title: "884",
        description: "获得 ×100,000,000 锤子。",
        cost: new EN("1e29"),
        unlocked() {
            return hasUpgrade("ha", 23)
        },
        },
        25: { title: "885",
        description: "获得 ×1e9 锤子。",
        cost: new EN("1e37"),
        unlocked() {
            return hasUpgrade("ha", 24)
        },
        },
        31: { title: "886",
        description: "获得 ×1e10 锤子。",
        cost: new EN("1e46"),
        unlocked() {
            return hasUpgrade("ha", 25)
        },
        },
        32: { title: "887",
        description: "获得 ×1e11 锤子。",
        cost: new EN("1e56"),
        unlocked() {
            return hasUpgrade("ha", 31)
        },
        },
        33: { title: "888",
        description: "获得 ×1e12 锤子。",
        cost: new EN("1e67"),
        unlocked() {
            return hasUpgrade("ha", 32)
        },
        },
        34: { title: "889",
        description: "获得 ×1e13 锤子。",
        cost: new EN("1e79"),
        unlocked() {
            return hasUpgrade("ha", 33)
        },
        },
        35: { title: "890",
        description: "获得 ×1e14 锤子。",
        cost: new EN("1e92"),
        unlocked() {
            return hasUpgrade("ha", 34)
        },
        },
        41: { title: "891",
        description: "获得 ×1e15 锤子。",
        cost: new EN("1e106"),
        unlocked() {
            return hasUpgrade("ha", 35)
        },
        },
        42: { title: "892",
        description: "获得 ×1e16 锤子。",
        cost: new EN("1e121"),
        unlocked() {
            return hasUpgrade("ha", 41)
        },
        },
        43: { title: "893",
        description: "获得 ×1e17 锤子。",
        cost: new EN("1e137"),
        unlocked() {
            return hasUpgrade("ha", 42)
        },
        },
        44: { title: "894",
        description: "获得 ×1e18 锤子。",
        cost: new EN("1e154"),
        unlocked() {
            return hasUpgrade("ha", 43)
        },
        },
        45: { title: "895",
        description: "获得 ×1e19 锤子。",
        cost: new EN("1e172"),
        unlocked() {
            return hasUpgrade("ha", 44)
        },
        },
        51: { title: "896",
        description: "获得 ×1e20 锤子。",
        cost: new EN("1e191"),
        unlocked() {
            return hasUpgrade("ha", 45)
        },
        },
        52: { title: "897",
        description: "获得 ×1e21 锤子。",
        cost: new EN("1e211"),
        unlocked() {
            return hasUpgrade("ha", 51)
        },
        },
        53: { title: "898",
        description: "获得 ×1e22 锤子。",
        cost: new EN("1e232"),
        unlocked() {
            return hasUpgrade("ha", 52)
        },
        },
        54: { title: "899",
        description: "提升第 7 行与第 8 行的货币。",
        cost: new EN("1e255"),
        unlocked() {
            return hasUpgrade("ha", 53)
        },
        },
        55: { title: "900（再 100 到 1K！）",
        description: "获得 ^1.11 奖牌。",
        cost: new EN("10^^^1000"),
        unlocked() {
            return hasUpgrade("ha", 54)
        },
        },
    },
    passiveGeneration() { 
        if (hasMilestone("re", 22)) return (hasMilestone("re", 22)?1:0)
        },
        autoUpgrade() { if (hasMilestone("re" , 23)) return true},

    name: "锤子", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "🔨", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        auto: false
    }},
    color: " #ffffff",
    requires: new EN("10^^^1234567"), // Can be a function that takes requirement increases into account
    resource: "锤子", // Name of prestige currency
    baseResource: "积分", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    branches: ["ar", "ga"],
    type() {if (hasUpgrade("su", 535)) return "normal"
    else return "normal"},    
    exponent() {if (hasUpgrade("su", 535)) return new EN(0)
    else return new EN(0)},    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1)
        if (hasUpgrade('ha', 12)) mult = mult.times(10)
        if (hasUpgrade('ha', 13)) mult = mult.times(100)
        if (hasUpgrade('ha', 14)) mult = mult.times(1000)
        if (hasUpgrade('ha', 15)) mult = mult.times(10000)
        if (hasUpgrade('ha', 21)) mult = mult.times(100000)
        if (hasUpgrade('ha', 22)) mult = mult.times(1000000)
        if (hasUpgrade('ha', 23)) mult = mult.times(1e7)
        if (hasUpgrade('ha', 24)) mult = mult.times(1e8)
        if (hasUpgrade('ha', 25)) mult = mult.times(1e9)
        if (hasUpgrade('ha', 31)) mult = mult.times(1e10)
        if (hasUpgrade('ha', 32)) mult = mult.times(1e11)
        if (hasUpgrade('ha', 33)) mult = mult.times(1e12)
        if (hasUpgrade('ha', 34)) mult = mult.times(1e13)
        if (hasUpgrade('ha', 35)) mult = mult.times(1e14)
        if (hasUpgrade('ha', 41)) mult = mult.times(1e15)
        if (hasUpgrade('ha', 42)) mult = mult.times(1e16)
        if (hasUpgrade('ha', 43)) mult = mult.times(1e17)
        if (hasUpgrade('ha', 44)) mult = mult.times(1e18)
        if (hasUpgrade('ha', 45)) mult = mult.times(1e19)
        if (hasUpgrade('ha', 51)) mult = mult.times(1e20)
        if (hasUpgrade('ha', 52)) mult = mult.times(1e21)
        if (hasUpgrade('ha', 53)) mult = mult.times(1e22)
        if (hasUpgrade('ha', 54)) mult = mult.times("10^^^1000")
        if (hasUpgrade('re', 141)) mult = mult.times(69420)
        if (hasUpgrade('is', 54)) mult = mult.times("10^^^9e15")
        if (hasUpgrade('ju', 54)) mult = mult.times("10^^^1e16")
        if (hasUpgrade('su', 14)) mult = mult.times(100)

        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    row: 7, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "%", description: "Shift+%: 重置获取锤子", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){if (hasUpgrade("su", 535)) return false
    else return (hasChallenge("re", 52) || player[this.layer].unlocked)},})