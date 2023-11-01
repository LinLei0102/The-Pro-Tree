addLayer("x", {
    tabFormat: [
        "main-display",
        "prestige-button",
        ["microtabs", "stuff"],
        ["blank", "25px"],
    ],
    microtabs: {
        stuff: {
                        "Upgrades": {
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
        description: "Gain x1.25 Medals.",
        cost: new EN("1"),
        unlocked() {
            return hasUpgrade("re", 55)
        },
        },
        12: { title: "627",
        description: "Gain x5 X-Rays.",
        cost: new EN("1e6"),
        unlocked() {
            return hasUpgrade("x", 11)
        },
        },
        13: { title: "628",
        description: "Gain x3,125 X-Rays.",
        cost: new EN("1e7"),
        unlocked() {
            return hasUpgrade("x", 12)
        },
        },
        14: { title: "629",
        description: "Gain x5.527e174 X-Rays.",
        cost: new EN("1e10"),
        unlocked() {
            return hasUpgrade("x", 13)
        },
        },
        15: { title: "630",
        description: "Gain ^90 X-Rays.",
        cost: new EN("1e185"),
        unlocked() {
            return hasUpgrade("x", 14)
        },
        },
        21: { title: "631",
        description: "Gain ^125 X-Rays.",
        cost: new EN("1e16430"),
        unlocked() {
            return hasUpgrade("x", 15)
        },
        },
        22: { title: "632",
        description: "Gain ^1,300 X-Rays.",
        cost: new EN("1e2053675"),
        unlocked() {
            return hasUpgrade("x", 21)
        },
        },
        23: { title: "633",
        description: "Gain a good boost to X-Rays.",
        cost: new EN("e1.339e9"),
        unlocked() {
            return hasUpgrade("x", 22)
        },
        },
        24: { title: "634",
        description: "Gain a decent boost to X-Rays.",
        cost: new EN("e5e999999999"),
        unlocked() {
            return hasUpgrade("x", 23)
        },
        },
        25: { title: "635",
        description: "Gain a medium boost to X-Rays.",
        cost: new EN("eeeee9"),
        unlocked() {
            return hasUpgrade("x", 24)
        },
        },
        31: { title: "636",
        description: "Gain a big boost to X-Rays.",
        cost: new EN("10^^10"),
        unlocked() {
            return hasUpgrade("x", 25)
        },
        },
        32: { title: "637",
        description: "Gain a large boost to X-Rays.",
        cost: new EN("10^^18"),
        unlocked() {
            return hasUpgrade("x", 31)
        },
        },
        33: { title: "638",
        description: "Gain a bigger boost to X-Rays.",
        cost: new EN("10^^34"),
        unlocked() {
            return hasUpgrade("x", 32)
        },
        },
        34: { title: "639",
        description: "Gain a very large boost to X-Rays.",
        cost: new EN("10^^66"),
        unlocked() {
            return hasUpgrade("x", 33)
        },
        },
        35: { title: "640",
        description: "Gain a ultra boost to X-Rays.",
        cost: new EN("10^^130"),
        unlocked() {
            return hasUpgrade("x", 34)
        },
        },
        41: { title: "641",
        description: "Gain a massive boost to X-Rays.",
        cost: new EN("10^^258"),
        unlocked() {
            return hasUpgrade("x", 35)
        },
        },
        42: { title: "642",
        description: "Gain a insane boost to X-Rays.",
        cost: new EN("10^^514"),
        unlocked() {
            return hasUpgrade("x", 41)
        },
        },
        43: { title: "643",
        description: "Gain a extreme boost to X-Rays.",
        cost: new EN("10^^1026"),
        unlocked() {
            return hasUpgrade("x", 42)
        },
        },
        44: { title: "644",
        description: "Gain a OMEGA boost to X-Rays.",
        cost: new EN("10^^2050"),
        unlocked() {
            return hasUpgrade("x", 43)
        },
        },
        45: { title: "645",
        description: "Gain a null boost to X-Rays.",
        cost: new EN("10^^4098"),
        unlocked() {
            return hasUpgrade("x", 44)
        },
        },
        51: { title: "646",
        description: "Gain a GIANT boost to X-Rays.",
        cost: new EN("10^^8194"),
        unlocked() {
            return player.points.gte("10^^1e148")
        },
        },
        52: { title: "647",
        description: "Gain a GOD boost to X-Rays.",
        cost: new EN("10^^25000"),
        unlocked() {
            return hasUpgrade("x", 51)
        },
        },
        53: { title: "648",
        description: "Gain a BEST boost to X-Rays.",
        cost: new EN("10^^100000"),
        unlocked() {
            return hasUpgrade("x", 52)
        },
        },
        54: { title: "649",
        description: "Gain a BIGGEST boost to X-Rays and increase other currencies.",
        cost: new EN("10^^1000000"),
        unlocked() {
            return hasUpgrade("x", 53)
        },
        },
        55: { title: "650",
        description: "Onion Upgrade 61 ^6 and gain x30 medals.",
        cost: new EN("10^^1000000000"),
        unlocked() {
            return hasUpgrade("x", 54)
        },
        },
    },
    name: "X-Rays", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "🦴", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        auto: false
    }},
    color: "#5a6f6a",
    requires: new EN("10^^1e145"), // Can be a function that takes requirement increases into account
    resource: "X-Rays", // Name of prestige currency
    baseResource: "Points", // Name of resource prestige is based on
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
        {key: "x", description: "X: Reset for X-Rays", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){if (hasUpgrade("su", 535)) return false
    else return (hasUpgrade("re", 55) || player[this.layer].unlocked)},
})