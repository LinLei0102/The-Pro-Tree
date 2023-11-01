addLayer("is", {
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
        11: { title: "901",
        description: "Gain x1,000,000 Medals and double island gain!",
        cost: new EN("1"),
        unlocked() {
            return hasChallenge("re", 62)
        },
        },
        12: { title: "902",
        description: "Gain x10 Islands.",
        cost: new EN("100"),
        unlocked() {
            return hasUpgrade("is", 11)
        },
        },
        13: { title: "903",
        description: "Gain x100 Islands.",
        cost: new EN("1000"),
        unlocked() {
            return hasUpgrade("is", 12)
        },
        },
        14: { title: "904",
        description: "Gain x1,000 Islands.",
        cost: new EN("100000"),
        unlocked() {
            return hasUpgrade("is", 13)
        },
        },
        15: { title: "905",
        description: "Gain x10,000 Islands.",
        cost: new EN("100000000"),
        unlocked() {
            return hasUpgrade("is", 14)
        },
        },
        21: { title: "906",
        description: "Gain x100,000 Islands.",
        cost: new EN("1e11"),
        unlocked() {
            return hasUpgrade("is", 15)
        },
        },
        22: { title: "907",
        description: "Gain x1,000,000 Islands.",
        cost: new EN("1e16"),
        unlocked() {
            return hasUpgrade("is", 21)
        },
        },
        23: { title: "908",
        description: "Gain x10,000,000 Islands.",
        cost: new EN("1e22"),
        unlocked() {
            return hasUpgrade("is", 22)
        },
        },
        24: { title: "909",
        description: "Gain x100,000,000 Islands.",
        cost: new EN("1e29"),
        unlocked() {
            return hasUpgrade("is", 23)
        },
        },
        25: { title: "910",
        description: "Gain x1e9 Islands.",
        cost: new EN("1e37"),
        unlocked() {
            return hasUpgrade("is", 24)
        },
        },
        31: { title: "911, whats ur emergency?",
        description: "Gain x1e10 Islands.",
        cost: new EN("1e46"),
        unlocked() {
            return hasUpgrade("is", 25)
        },
        },
        32: { title: "912",
        description: "Gain x1e11 Islands.",
        cost: new EN("1e56"),
        unlocked() {
            return hasUpgrade("is", 31)
        },
        },
        33: { title: "913",
        description: "Gain x1e12 Islands.",
        cost: new EN("1e67"),
        unlocked() {
            return hasUpgrade("is", 32)
        },
        },
        34: { title: "914",
        description: "Gain x1e13 Islands.",
        cost: new EN("1e79"),
        unlocked() {
            return hasUpgrade("is", 33)
        },
        },
        35: { title: "915",
        description: "Gain x1e14 Islands.",
        cost: new EN("1e92"),
        unlocked() {
            return hasUpgrade("is", 34)
        },
        },
        41: { title: "916",
        description: "Gain x1e15 Islands.",
        cost: new EN("1e106"),
        unlocked() {
            return hasUpgrade("is", 35)
        },
        },
        42: { title: "917",
        description: "Gain x1e16 Islands.",
        cost: new EN("1e121"),
        unlocked() {
            return hasUpgrade("is", 41)
        },
        },
        43: { title: "918",
        description: "Gain x1e17 Islands.",
        cost: new EN("1e137"),
        unlocked() {
            return hasUpgrade("is", 42)
        },
        },
        44: { title: "919",
        description: "Gain x1e18 Islands.",
        cost: new EN("1e154"),
        unlocked() {
            return hasUpgrade("is", 43)
        },
        },
        45: { title: "920",
        description: "Gain x1e19 Islands.",
        cost: new EN("1e172"),
        unlocked() {
            return hasUpgrade("is", 44)
        },
        },
        51: { title: "921",
        description: "Gain x1e20 Islands.",
        cost: new EN("1e191"),
        unlocked() {
            return hasUpgrade("is", 45)
        },
        },
        52: { title: "922",
        description: "Gain x1e21 Islands.",
        cost: new EN("1e211"),
        unlocked() {
            return hasUpgrade("is", 51)
        },
        },
        53: { title: "923",
        description: "Gain x1e22 Islands.",
        cost: new EN("1e232"),
        unlocked() {
            return hasUpgrade("is", 52)
        },
        },
        54: { title: "924",
        description: "Increase Row 7 and Row 8 currencies.",
        cost: new EN("1e255"),
        unlocked() {
            return hasUpgrade("is", 53)
        },
        },
        55: { title: "925 (75 more to 1K!)",
        description: "Gain ^1.23456789 Medals.",
        cost: new EN("10^^^9e15"),
        unlocked() {
            return hasUpgrade("is", 54)
        },
        },
    },
    passiveGeneration() { 
        if (hasMilestone("re", 23)) return (hasMilestone("re", 23)?1:0)
        },
        autoUpgrade() { if (hasMilestone("re" , 24)) return true},

    name: "Islands", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "🏝️", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        auto: false
    }},
    color: " #ffffff",
    requires: new EN("10^^^9.007e15"), // Can be a function that takes requirement increases into account
    resource: "Islands", // Name of prestige currency
    baseResource: "Points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    branches: ["ba", "ha"],
    type() {if (hasUpgrade("su", 535)) return "normal"
    else return "normal"},    
    exponent() {if (hasUpgrade("su", 535)) return new EN(0)
    else return new EN(0)},    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1)
        if (hasUpgrade('is', 11)) mult = mult.times(2)
        if (hasUpgrade('is', 12)) mult = mult.times(10)
        if (hasUpgrade('is', 13)) mult = mult.times(100)
        if (hasUpgrade('is', 14)) mult = mult.times(1000)
        if (hasUpgrade('is', 15)) mult = mult.times(10000)
        if (hasUpgrade('is', 21)) mult = mult.times(100000)
        if (hasUpgrade('is', 22)) mult = mult.times(1000000)
        if (hasUpgrade('is', 23)) mult = mult.times(1e7)
        if (hasUpgrade('is', 24)) mult = mult.times(1e8)
        if (hasUpgrade('is', 25)) mult = mult.times(1e9)
        if (hasUpgrade('is', 31)) mult = mult.times(1e10)
        if (hasUpgrade('is', 32)) mult = mult.times(1e11)
        if (hasUpgrade('is', 33)) mult = mult.times(1e12)
        if (hasUpgrade('is', 34)) mult = mult.times(1e13)
        if (hasUpgrade('is', 35)) mult = mult.times(1e14)
        if (hasUpgrade('is', 41)) mult = mult.times(1e15)
        if (hasUpgrade('is', 42)) mult = mult.times(1e16)
        if (hasUpgrade('is', 43)) mult = mult.times(1e17)
        if (hasUpgrade('is', 44)) mult = mult.times(1e18)
        if (hasUpgrade('is', 45)) mult = mult.times(1e19)
        if (hasUpgrade('is', 51)) mult = mult.times(1e20)
        if (hasUpgrade('is', 52)) mult = mult.times(1e21)
        if (hasUpgrade('is', 53)) mult = mult.times(1e22)
        if (hasUpgrade('is', 54)) mult = mult.times("10^^^9e15")
        if (hasUpgrade('re', 143)) mult = mult.times(69420)
        if (hasUpgrade('ju', 54)) mult = mult.times("10^^^1e16")
        if (hasUpgrade('su', 14)) mult = mult.times(100)

        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    row: 7, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "$", description: "Shift+$: Reset for islands", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){if (hasUpgrade("su", 535)) return false
    else return (hasChallenge("re", 62) || player[this.layer].unlocked)},})