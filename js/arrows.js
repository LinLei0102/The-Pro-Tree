addLayer("ar", {
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
        11: { title: "701",
        description: "获得 ×3 奖牌！",
        cost: new EN("1"),
        unlocked() {
            return hasUpgrade("re", 105)
        },
        },
        12: { title: "702",
        description: "获得 ×25 箭。",
        cost: new EN("69"),
        unlocked() {
            return hasUpgrade("ar", 11)
        },
        },
        13: { title: "703",
        description: "获得 ×1.000e35 箭。",
        cost: new EN("2500"),
        unlocked() {
            return hasUpgrade("ar", 12)
        },
        },
        14: { title: "704",
        description: "获得 ^9,765,625 箭。",
        cost: new EN("1e38"),
        unlocked() {
            return hasUpgrade("ar", 13)
        },
        },
        15: { title: "705",
        description: "获得 ^5.5e174 箭。",
        cost: new EN("1e182724318"),
        unlocked() {
            return hasUpgrade("ar", 14)
        },
        },
        21: { title: "706",
        description: "获得对箭的糟糕增益。",
        cost: new EN("e9.774e182"),
        unlocked() {
            return hasUpgrade("ar", 15)
        },
        },
        22: { title: "707",
        description: "获得更多箭。",
        cost: new EN("ee1.8e308"),
        unlocked() {
            return hasUpgrade("ar", 21)
        },
        },
        23: { title: "708",
        description: "获得更多的箭。",
        cost: new EN("10^^7"),
        unlocked() {
            return hasUpgrade("ar", 22)
        },
        },
        24: { title: "709",
        description: "获得多得多的箭。",
        cost: new EN("10^^25"),
        unlocked() {
            return hasUpgrade("ar", 23)
        },
        },
        25: { title: "710",
        description: "获得对箭的中等增益。",
        cost: new EN("10^^100"),
        unlocked() {
            return hasUpgrade("ar", 24)
        },
        },
        31: { title: "711",
        description: "获得对箭的不错增益。",
        cost: new EN("10^^1000"),
        unlocked() {
            return hasUpgrade("ar", 25)
        },
        },
        32: { title: "712",
        description: "获得对箭的良好增益。",
        cost: new EN("10^^1e6"),
        unlocked() {
            return hasUpgrade("ar", 31)
        },
        },
        33: { title: "713",
        description: "获得对箭的极佳增益。",
        cost: new EN("10^^9e15"),
        unlocked() {
            return hasUpgrade("ar", 32)
        },
        },
        34: { title: "714",
        description: "获得对箭的大幅增益。",
        cost: new EN("10^^e1e9"),
        unlocked() {
            return hasUpgrade("ar", 33)
        },
        },
        35: { title: "715",
        description: "获得对箭的巨大增益。",
        cost: new EN("10^^e1e69"),
        unlocked() {
            return hasUpgrade("ar", 34)
        },
        },
        41: { title: "716",
        description: "获得对箭的更大增益。",
        cost: new EN("10^^ee1e9"),
        unlocked() {
            return hasUpgrade("ar", 35)
        },
        },
        42: { title: "717",
        description: "获得对箭的巨大增益。",
        cost: new EN("10^^ee1e42"),
        unlocked() {
            return hasUpgrade("ar", 41)
        },
        },
        43: { title: "718",
        description: "获得对箭的极大增益。",
        cost: new EN("10^^ee1e69"),
        unlocked() {
            return hasUpgrade("ar", 42)
        },
        },
        44: { title: "719",
        description: "获得对箭的超强增益。",
        cost: new EN("10^^ee1e420"),
        unlocked() {
            return hasUpgrade("ar", 43)
        },
        },
        45: { title: "720",
        description: "获得对箭的海量增益。",
        cost: new EN("10^^ee1e1337"),
        unlocked() {
            return hasUpgrade("ar", 44)
        },
        },
        51: { title: "721",
        description: "获得对箭的疯狂增益。",
        cost: new EN("10^^eeee1e9"),
        unlocked() {
            return hasUpgrade("ar", 45)
        },
        },
        52: { title: "722",
        description: "获得对箭的极端增益。",
        cost: new EN("10^^eeeee1e9"),
        unlocked() {
            return hasUpgrade("ar", 51)
        },
        },
        53: { title: "723",
        description: "获得对箭的欧米伽增益。",
        cost: new EN("10^^eeeeee1e9"),
        unlocked() {
            return hasUpgrade("ar", 52)
        },
        },
        54: { title: "724",
        description: "获得对第 6 行 - 第 7 行的终极增益。",
        cost: new EN("10^^eeeeeee1e9"),
        unlocked() {
            return hasUpgrade("ar", 53)
        },
        },
        55: { title: "725",
        description: "移除洋葱层，但获得 ×125 奖牌。",
        cost: new EN("10^^^3"),
        unlocked() {
            return hasUpgrade("ar", 54)
        },
        },
    },
    name: "箭", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "➜", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        auto: false
    }},
    color: "#ffffff",
    requires: new EN("10^^10^^5"), // Can be a function that takes requirement increases into account
    resource: "箭", // Name of prestige currency
    baseResource: "积分", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    branches: ["u" , "z"],
    type() {if (hasUpgrade("su", 535)) return "normal"
    else return "normal"},    
    exponent() {if (hasUpgrade("su", 535)) return new EN(0)
    else return new EN(0)},   gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1)
        if (hasUpgrade('ar', 12)) mult = mult.times(25)
        if (hasUpgrade('ar', 13)) mult = mult.times(1e35)
        if (hasUpgrade('ar', 14)) mult = mult.pow(9765625)
        if (hasUpgrade('ar', 15)) mult = mult.pow(5.5e174)
        if (hasUpgrade('ar', 21)) mult = mult.pow("e1.8e308")
        if (hasUpgrade('ar', 22)) mult = mult.pow("10^^6")
        if (hasUpgrade('ar', 23)) mult = mult.pow("10^^25")
        if (hasUpgrade('ar', 24)) mult = mult.pow("10^^100")
        if (hasUpgrade('ar', 25)) mult = mult.pow("10^^1000")
        if (hasUpgrade('ar', 31)) mult = mult.pow("10^^1e6")
        if (hasUpgrade('ar', 32)) mult = mult.pow("10^^9e15")
        if (hasUpgrade('ar', 33)) mult = mult.pow("10^^e1e9")
        if (hasUpgrade('ar', 34)) mult = mult.pow("10^^e1e69")
        if (hasUpgrade('ar', 35)) mult = mult.pow("10^^ee1e9")
        if (hasUpgrade('ar', 41)) mult = mult.pow("10^^ee1e42")
        if (hasUpgrade('ar', 42)) mult = mult.pow("10^^ee1e69")
        if (hasUpgrade('ar', 43)) mult = mult.pow("10^^ee1e420")
        if (hasUpgrade('ar', 44)) mult = mult.pow("10^^ee1e1337")
        if (hasUpgrade('ar', 45)) mult = mult.pow("10^^eeee1e9")
        if (hasUpgrade('ar', 51)) mult = mult.pow("10^^eeeee1e9")
        if (hasUpgrade('ar', 52)) mult = mult.pow("10^^eeeeee1e9")
        if (hasUpgrade('ar', 53)) mult = mult.pow("10^^eeeeeee1e9")
        if (hasUpgrade('ar', 54)) mult = mult.pow("10^^^3")
        if (hasUpgrade('re', 111)) mult = mult.times(10)
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
    autoUpgrade() { if (hasMilestone("re" , 18)) return true},
    doReset(resettingLayer) {
        let keep = [];
        if (hasMilestone("re", 17) && resettingLayer=="re") keep.push("upgrades")
        if (layers[resettingLayer].row > this.row) layerDataReset("ar", keep)
    },
    passiveGeneration() { 
        if (hasMilestone("re", 15)) return (hasMilestone("re", 15)?1:0)
        },   
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    row: 6, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "?", description: "Shift+?: 重置以获取箭", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){if (hasUpgrade("su", 535)) return false
    else return (hasUpgrade("re", 105) || player[this.layer].unlocked)},})