addLayer("ga", {
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
        11: { title: "851",
        description: "Gain x100 Medals!",
        cost: new EN("1"),
        unlocked() {
            return hasChallenge("re", 41)
        },
        },
        12: { title: "852",
        description: "Gain x10 Games.",
        cost: new EN("100"),
        unlocked() {
            return hasUpgrade("ga", 11)
        },
        },
        13: { title: "853",
        description: "Gain x100 Games.",
        cost: new EN("1000"),
        unlocked() {
            return hasUpgrade("ga", 12)
        },
        },
        14: { title: "854",
        description: "Gain x1,000 Games.",
        cost: new EN("100000"),
        unlocked() {
            return hasUpgrade("ga", 13)
        },
        },
        15: { title: "855",
        description: "Gain x10,000 Games.",
        cost: new EN("100000000"),
        unlocked() {
            return hasUpgrade("ga", 14)
        },
        },
        21: { title: "856",
        description: "Gain x100,000 Games.",
        cost: new EN("1e11"),
        unlocked() {
            return hasUpgrade("ga", 15)
        },
        },
        22: { title: "857",
        description: "Gain x1,000,000 Games.",
        cost: new EN("1e16"),
        unlocked() {
            return hasUpgrade("ga", 21)
        },
        },
        23: { title: "858",
        description: "Gain x10,000,000 Games.",
        cost: new EN("1e22"),
        unlocked() {
            return hasUpgrade("ga", 22)
        },
        },
        24: { title: "859",
        description: "Gain x100,000,000 Games.",
        cost: new EN("1e29"),
        unlocked() {
            return hasUpgrade("ga", 23)
        },
        },
        25: { title: "860",
        description: "Gain x1e9 Games.",
        cost: new EN("1e37"),
        unlocked() {
            return hasUpgrade("ga", 24)
        },
        },
        31: { title: "861",
        description: "Gain x1e10 Games.",
        cost: new EN("1e46"),
        unlocked() {
            return hasUpgrade("ga", 25)
        },
        },
        32: { title: "862",
        description: "Gain x1e11 Games.",
        cost: new EN("1e56"),
        unlocked() {
            return hasUpgrade("ga", 31)
        },
        },
        33: { title: "863",
        description: "Gain x1e12 Games.",
        cost: new EN("1e67"),
        unlocked() {
            return hasUpgrade("ga", 32)
        },
        },
        34: { title: "864",
        description: "Gain x1e13 Games.",
        cost: new EN("1e79"),
        unlocked() {
            return hasUpgrade("ga", 33)
        },
        },
        35: { title: "865",
        description: "Gain x1e14 Games.",
        cost: new EN("1e92"),
        unlocked() {
            return hasUpgrade("ga", 34)
        },
        },
        41: { title: "866",
        description: "Gain x1e15 Games.",
        cost: new EN("1e106"),
        unlocked() {
            return hasUpgrade("ga", 35)
        },
        },
        42: { title: "867",
        description: "Gain x1e16 Games.",
        cost: new EN("1e121"),
        unlocked() {
            return hasUpgrade("ga", 41)
        },
        },
        43: { title: "868",
        description: "Gain x1e17 Games.",
        cost: new EN("1e137"),
        unlocked() {
            return hasUpgrade("ga", 42)
        },
        },
        44: { title: "869",
        description: "Gain x1e18 Games.",
        cost: new EN("1e154"),
        unlocked() {
            return hasUpgrade("ga", 43)
        },
        },
        45: { title: "870",
        description: "Gain x1e19 Games.",
        cost: new EN("1e172"),
        unlocked() {
            return hasUpgrade("ga", 44)
        },
        },
        51: { title: "871",
        description: "Gain x1e20 Games.",
        cost: new EN("1e191"),
        unlocked() {
            return hasUpgrade("ga", 45)
        },
        },
        52: { title: "872",
        description: "Gain x1e21 Games.",
        cost: new EN("1e211"),
        unlocked() {
            return hasUpgrade("ga", 51)
        },
        },
        53: { title: "873",
        description: "Gain x1e22 Games.",
        cost: new EN("1e232"),
        unlocked() {
            return hasUpgrade("ga", 52)
        },
        },
        54: { title: "874",
        description: "Increase Row 7 and Row 8 currencies but remove universal layer.",
        cost: new EN("1e254"),
        unlocked() {
            return hasUpgrade("ga", 53)
        },
        },
        55: { title: "875",
        description: "Gain ^1.1 Medals.",
        cost: new EN("10^^^100"),
        unlocked() {
            return hasUpgrade("ga", 54)
        },
        },
    },
    passiveGeneration() { 
        if (hasMilestone("re", 21)) return (hasMilestone("re", 21)?1:0)
        },
        autoUpgrade() { if (hasMilestone("re" , 22)) return true},

    name: "Games", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "🎮", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        auto: false
    }},
    color: " #ffffff",
    requires: new EN("10^^^750"), // Can be a function that takes requirement increases into account
    resource: "Games", // Name of prestige currency
    baseResource: "Points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    branches: ["z", "fi"],
    type() {if (hasUpgrade("su", 535)) return "normal"
    else return "normal"},    
    exponent() {if (hasUpgrade("su", 535)) return new EN(0)
    else return new EN(0)},    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1)
        if (hasUpgrade('ga', 12)) mult = mult.times(10)
        if (hasUpgrade('ga', 13)) mult = mult.times(100)
        if (hasUpgrade('ga', 14)) mult = mult.times(1000)
        if (hasUpgrade('ga', 15)) mult = mult.times(10000)
        if (hasUpgrade('ga', 21)) mult = mult.times(100000)
        if (hasUpgrade('ga', 22)) mult = mult.times(1000000)
        if (hasUpgrade('ga', 23)) mult = mult.times(1e7)
        if (hasUpgrade('ga', 24)) mult = mult.times(1e8)
        if (hasUpgrade('ga', 25)) mult = mult.times(1e9)
        if (hasUpgrade('ga', 31)) mult = mult.times(1e10)
        if (hasUpgrade('ga', 32)) mult = mult.times(1e11)
        if (hasUpgrade('ga', 33)) mult = mult.times(1e12)
        if (hasUpgrade('ga', 34)) mult = mult.times(1e13)
        if (hasUpgrade('ga', 35)) mult = mult.times(1e14)
        if (hasUpgrade('ga', 41)) mult = mult.times(1e15)
        if (hasUpgrade('ga', 42)) mult = mult.times(1e16)
        if (hasUpgrade('ga', 43)) mult = mult.times(1e17)
        if (hasUpgrade('ga', 44)) mult = mult.times(1e18)
        if (hasUpgrade('ga', 45)) mult = mult.times(1e19)
        if (hasUpgrade('ga', 51)) mult = mult.times(1e20)
        if (hasUpgrade('ga', 52)) mult = mult.times(1e21)
        if (hasUpgrade('ga', 53)) mult = mult.times(1e22)
        if (hasUpgrade('ga', 54)) mult = mult.times("10^^^100")
        if (hasUpgrade('re', 133)) mult = mult.times(69420)
        if (hasUpgrade('ha', 54)) mult = mult.times("10^^^1000")
        if (hasUpgrade('is', 54)) mult = mult.times("10^^^9e15")
        if (hasUpgrade('ju', 54)) mult = mult.times("10^^^1e16")
        if (hasUpgrade('su', 14)) mult = mult.times(100)

        return mult
    },
    doReset(resettingLayer) {
        let keep = [];
        if (hasMilestone("re", 24) && resettingLayer=="re") keep.push("upgrades")
        if (layers[resettingLayer].row > this.row) layerDataReset("ga", keep)
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    row: 7, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "&", description: "Shift+&: Reset for Games", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){if (hasUpgrade("su", 535)) return false
    else return (hasChallenge("re", 41) || player[this.layer].unlocked)},})