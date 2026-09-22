addLayer("ba", {
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
        11: { title: "726",
        description: "获得 ×4 奖牌！",
        cost: new EN("1"),
        unlocked() {
            return hasUpgrade("re", 105)
        },
        },
        12: { title: "727",
        description: "获得 ×8.000e9 球。",
        cost: new EN("42"),
        unlocked() {
            return hasUpgrade("ba", 11)
        },
        },
        13: { title: "728",
        description: "获得 ^1e9 球。",
        cost: new EN("4e11"),
        unlocked() {
            return hasUpgrade("ba", 12)
        },
        },
        14: { title: "729",
        description: "获得 ^1e308 球。",
        cost: new EN("0"),
        unlocked() {
            return hasUpgrade("ba", 13)
        },
        },
        15: { title: "730",
        description: "获得更多球。",
        cost: new EN("0"),
        unlocked() {
            return hasUpgrade("ba", 14)
        },
        },
        21: { title: "731",
        description: "获得更多球。",
        cost: new EN("0"),
        unlocked() {
            return hasUpgrade("ba", 15)
        },
        },
        22: { title: "732",
        description: "获得更多球。",
        cost: new EN("0"),
        unlocked() {
            return hasUpgrade("ba", 21)
        },
        },
        23: { title: "733",
        description: "获得更多球。",
        cost: new EN("0"),
        unlocked() {
            return hasUpgrade("ba", 22)
        },
        },
        24: { title: "734",
        description: "获得更多球。",
        cost: new EN("0"),
        unlocked() {
            return hasUpgrade("ba", 23)
        },
        },
        25: { title: "735",
        description: "获得更多球。",
        cost: new EN("0"),
        unlocked() {
            return hasUpgrade("ba", 24)
        },
        },
        31: { title: "736",
        description: "获得更多球。",
        cost: new EN("0"),
        unlocked() {
            return hasUpgrade("ba", 25)
        },
        },
        32: { title: "737",
        description: "获得更多球。",
        cost: new EN("0"),
        unlocked() {
            return hasUpgrade("ba", 31)
        },
        },
        33: { title: "738",
        description: "获得更多球。",
        cost: new EN("0"),
        unlocked() {
            return hasUpgrade("ba", 32)
        },
        },
        34: { title: "739",
        description: "获得更多球。",
        cost: new EN("0"),
        unlocked() {
            return hasUpgrade("ba", 33)
        },
        },
        35: { title: "740",
        description: "获得更多球。",
        cost: new EN("0"),
        unlocked() {
            return hasUpgrade("ba", 34)
        },
        },
        41: { title: "741",
        description: "获得更多球。",
        cost: new EN("0"),
        unlocked() {
            return hasUpgrade("ba", 35)
        },
        },
        42: { title: "742",
        description: "获得更多球。",
        cost: new EN("0"),
        unlocked() {
            return hasUpgrade("ba",41)
        },
        },
        43: { title: "743",
        description: "获得更多球。",
        cost: new EN("0"),
        unlocked() {
            return hasUpgrade("ba", 42)
        },
        },
        44: { title: "744",
        description: "获得更多球。",
        cost: new EN("0"),
        unlocked() {
            return hasUpgrade("ba", 43)
        },
        },
        45: { title: "745",
        description: "获得更多球。",
        cost: new EN("0"),
        unlocked() {
            return hasUpgrade("ba", 44)
        },
        },
        51: { title: "746",
        description: "获得更多球。",
        cost: new EN("0"),
        unlocked() {
            return hasUpgrade("ba", 45)
        },
        },
        52: { title: "747",
        description: "获得更多球。",
        cost: new EN("0"),
        unlocked() {
            return hasUpgrade("ba", 51)
        },
        },
        53: { title: "748",
        description: "获得更多球。",
        cost: new EN("0"),
        unlocked() {
            return hasUpgrade("ba", 52)
        },
        },
        54: { title: "749",
        description: "增加所有其他货币。",
        cost: new EN("0"),
        unlocked() {
            return hasUpgrade("ba", 53)
        },
        },
        55: { title: "750",
        description: "解锁 1 项新轮回升级，并获得 ×10,000 奖牌。",
        cost: new EN("10^^^4"),
        unlocked() {
            return hasUpgrade("ba", 54)
        },
        },
    },
    name: "球", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "⚽", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        auto: false
    }},
    passiveGeneration() { 
        if (hasMilestone("re", 16)) return 1
        },  
    color: "#21abcd",
    requires: new EN("10^^^4"), // Can be a function that takes requirement increases into account
    resource: "球", // Name of prestige currency
    baseResource: "积分", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    branches: ["u" , "ar"],
    type() {if (hasUpgrade("su", 535)) return "normal"
    else return "normal"},    
    exponent() {if (hasUpgrade("su", 535)) return new EN(0)
    else return new EN(0)},    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1)
        if (hasUpgrade('ba', 12)) mult = mult.times(8e9)
        if (hasUpgrade('ba', 13)) mult = mult.pow(1e9)
        if (hasUpgrade('ba', 14)) mult = mult.pow(1e308)
        if (hasUpgrade('ba', 15)) mult = mult.pow("1e308")
        if (hasUpgrade('ba', 21)) mult = mult.pow("e1e308")
        if (hasUpgrade('ba', 22)) mult = mult.pow("ee1e308")
        if (hasUpgrade('ba', 23)) mult = mult.pow("eee1e308")
        if (hasUpgrade('ba', 24)) mult = mult.pow("eeee1e308")
        if (hasUpgrade('ba', 25)) mult = mult.pow("eeeee1e308")
        if (hasUpgrade('ba', 31)) mult = mult.pow("eeeeee1e308")
        if (hasUpgrade('ba', 32)) mult = mult.pow("eeeeeeeeee1e308")
        if (hasUpgrade('ba', 33)) mult = mult.pow("eeeeeeeeeeeee1e308")
        if (hasUpgrade('ba', 34)) mult = mult.pow("eeeeeeeeeeeeeeee1e308")
        if (hasUpgrade('ba', 35)) mult = mult.pow("eeeeeeeeeeeeeeeeeeeeeee1e308")
        if (hasUpgrade('ba', 41)) mult = mult.pow("10^^100")
        if (hasUpgrade('ba', 42)) mult = mult.pow("10^^1000")
        if (hasUpgrade('ba', 43)) mult = mult.pow("10^^10000")
        if (hasUpgrade('ba', 44)) mult = mult.pow("10^^1000000")
        if (hasUpgrade('ba', 45)) mult = mult.pow("10^^10000000")
        if (hasUpgrade('ba', 51)) mult = mult.pow("10^^1000000000")
        if (hasUpgrade('ba', 52)) mult = mult.pow("10^^1000000000000")
        if (hasUpgrade('ba', 53)) mult = mult.pow("10^^100000000000000000000000000000000")
        if (hasUpgrade('ba', 54)) mult = mult.pow("10^^^4")
        if (hasUpgrade('re', 114)) mult = mult.times(1000)
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
        if (hasMilestone("re", 18) && resettingLayer=="re") keep.push("upgrades")
        if (layers[resettingLayer].row > this.row) layerDataReset("ba", keep)
    },
    autoUpgrade() { if (hasMilestone("re" , 18)) return true},

    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    row: 6, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "=", description: "Shift+=: 重置以获取球", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){if (hasUpgrade("su", 535)) return false
    else return (hasUpgrade("re", 111) || player[this.layer].unlocked)},})