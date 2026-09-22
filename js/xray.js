addLayer("x", {
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
        11: { title: "626",
        description: "获得 ×1.25 奖牌。",
        cost: new EN("1"),
        unlocked() {
            return hasUpgrade("re", 55)
        },
        },
        12: { title: "627",
        description: "获得 ×5 X 射线。",
        cost: new EN("1e6"),
        unlocked() {
            return hasUpgrade("x", 11)
        },
        },
        13: { title: "628",
        description: "获得 ×3,125 X 射线。",
        cost: new EN("1e7"),
        unlocked() {
            return hasUpgrade("x", 12)
        },
        },
        14: { title: "629",
        description: "获得 ×5.527e174 X 射线。",
        cost: new EN("1e10"),
        unlocked() {
            return hasUpgrade("x", 13)
        },
        },
        15: { title: "630",
        description: "获得 ^90 X 射线。",
        cost: new EN("1e185"),
        unlocked() {
            return hasUpgrade("x", 14)
        },
        },
        21: { title: "631",
        description: "获得 ^125 X 射线。",
        cost: new EN("1e16430"),
        unlocked() {
            return hasUpgrade("x", 15)
        },
        },
        22: { title: "632",
        description: "获得 ^1,300 X 射线。",
        cost: new EN("1e2053675"),
        unlocked() {
            return hasUpgrade("x", 21)
        },
        },
        23: { title: "633",
        description: "获得对 X 射线的不错增益。",
        cost: new EN("e1.339e9"),
        unlocked() {
            return hasUpgrade("x", 22)
        },
        },
        24: { title: "634",
        description: "获得对 X 射线的可观增益。",
        cost: new EN("e5e999999999"),
        unlocked() {
            return hasUpgrade("x", 23)
        },
        },
        25: { title: "635",
        description: "获得对 X 射线的中等增益。",
        cost: new EN("eeeee9"),
        unlocked() {
            return hasUpgrade("x", 24)
        },
        },
        31: { title: "636",
        description: "获得对 X 射线的大幅增益。",
        cost: new EN("10^^10"),
        unlocked() {
            return hasUpgrade("x", 25)
        },
        },
        32: { title: "637",
        description: "获得对 X 射线的较大增益。",
        cost: new EN("10^^18"),
        unlocked() {
            return hasUpgrade("x", 31)
        },
        },
        33: { title: "638",
        description: "获得对 X 射线的更大增益。",
        cost: new EN("10^^34"),
        unlocked() {
            return hasUpgrade("x", 32)
        },
        },
        34: { title: "639",
        description: "获得对 X 射线的极大增益。",
        cost: new EN("10^^66"),
        unlocked() {
            return hasUpgrade("x", 33)
        },
        },
        35: { title: "640",
        description: "获得对 X 射线的终极增益。",
        cost: new EN("10^^130"),
        unlocked() {
            return hasUpgrade("x", 34)
        },
        },
        41: { title: "641",
        description: "获得对 X 射线的巨量增益。",
        cost: new EN("10^^258"),
        unlocked() {
            return hasUpgrade("x", 35)
        },
        },
        42: { title: "642",
        description: "获得对 X 射线的疯狂增益。",
        cost: new EN("10^^514"),
        unlocked() {
            return hasUpgrade("x", 41)
        },
        },
        43: { title: "643",
        description: "获得对 X 射线的极限增益。",
        cost: new EN("10^^1026"),
        unlocked() {
            return hasUpgrade("x", 42)
        },
        },
        44: { title: "644",
        description: "获得对 X 射线的欧米伽增益。",
        cost: new EN("10^^2050"),
        unlocked() {
            return hasUpgrade("x", 43)
        },
        },
        45: { title: "645",
        description: "获得对 X 射线的空增益。",
        cost: new EN("10^^4098"),
        unlocked() {
            return hasUpgrade("x", 44)
        },
        },
        51: { title: "646",
        description: "获得对 X 射线的巨人增益。",
        cost: new EN("10^^8194"),
        unlocked() {
            return player.points.gte("10^^1e148")
        },
        },
        52: { title: "647",
        description: "获得对 X 射线的神明增益。",
        cost: new EN("10^^25000"),
        unlocked() {
            return hasUpgrade("x", 51)
        },
        },
        53: { title: "648",
        description: "获得对 X 射线的最强增益。",
        cost: new EN("10^^100000"),
        unlocked() {
            return hasUpgrade("x", 52)
        },
        },
        54: { title: "649",
        description: "获得对 X 射线的最大增益，并提升其他货币。",
        cost: new EN("10^^1000000"),
        unlocked() {
            return hasUpgrade("x", 53)
        },
        },
        55: { title: "650",
        description: "洋葱升级 61 ^6，且获得 ×30 奖牌。",
        cost: new EN("10^^1000000000"),
        unlocked() {
            return hasUpgrade("x", 54)
        },
        },
    },
    name: "X 射线", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "🦴", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        auto: false
    }},
    color: "#5a6f6a",
    requires: new EN("10^^1e145"), // Can be a function that takes requirement increases into account
    resource: "X 射线", // Name of prestige currency
    baseResource: "积分", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    branches: ["r" , "w"],
    type() {if (hasUpgrade("su", 535)) return "normal"
    else return "normal"},    
    exponent() {if (hasUpgrade("su", 535)) return new EN(0)
    else return new EN(0)},    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1)
        if (hasUpgrade('re', 62)) mult = mult.times(2)
        if (hasUpgrade('re', 63)) mult = mult.times(4)
        if (hasUpgrade('re', 71)) mult = mult.times(16)
        if (hasUpgrade('re', 72)) mult = mult.times(32)
        if (hasUpgrade('x', 12)) mult = mult.times(5)
        if (hasUpgrade('x', 13)) mult = mult.times(3125)
        if (hasUpgrade('x', 14)) mult = mult.times(5.527e174)
        if (hasUpgrade('x', 15)) mult = mult.pow(90)
        if (hasUpgrade('x', 21)) mult = mult.pow(125)
        if (hasUpgrade('x', 22)) mult = mult.pow(1300)
        if (hasUpgrade('x', 23)) mult = mult.times("eee9")
        if (hasUpgrade('x', 24)) mult = mult.times("eeeee9")
        if (hasUpgrade('x', 25)) mult = mult.times("10^^10")
        if (hasUpgrade('x', 31)) mult = mult.times("10^^18")
        if (hasUpgrade('x', 32)) mult = mult.times("10^^34")
        if (hasUpgrade('x', 33)) mult = mult.times("10^^66")
        if (hasUpgrade('x', 34)) mult = mult.times("10^^130")
        if (hasUpgrade('x', 35)) mult = mult.times("10^^258")
        if (hasUpgrade('x', 41)) mult = mult.times("10^^514")
        if (hasUpgrade('x', 42)) mult = mult.times("10^^1026")
        if (hasUpgrade('x', 43)) mult = mult.times("10^^2050")
        if (hasUpgrade('x', 44)) mult = mult.times("10^^4098")
        if (hasUpgrade('x', 45)) mult = mult.times("10^^8194")
        if (hasUpgrade('x', 51)) mult = mult.times("10^^25000")
        if (hasUpgrade('x', 52)) mult = mult.times("10^^100000")
        if (hasUpgrade('x', 53)) mult = mult.times("10^^1000000")
        if (hasUpgrade('x', 54)) mult = mult.times("10^^1e9")
        if (hasUpgrade('re', 73)) mult = mult.times(4096)
        if (hasUpgrade('y', 54)) mult = mult.pow("10^^1e25")
        if (hasUpgrade('z', 54)) mult = mult.times("10^^1e300")
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
        if (hasMilestone("re", 14) && resettingLayer=="re") keep.push("upgrades")
        if (layers[resettingLayer].row > this.row) layerDataReset("x", keep)
    },
    autoUpgrade() { if (hasMilestone("re" , 13)) return true},
    passiveGeneration() { return (hasMilestone("re", 9)&&player.current!="x")?1:0 },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    row: 6, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "x", description: "X: 重置以获得 X 射线", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){if (hasUpgrade("su", 535)) return false
    else return (hasUpgrade("re", 55) || player[this.layer].unlocked)},
})