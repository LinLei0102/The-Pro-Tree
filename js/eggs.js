addLayer("eg", {
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
        11: { title: "801",
        description: "Gain x10 Medals!",
        cost: new EN("1"),
        unlocked() {
            return hasChallenge("re", 31)
        },
        },
        12: { title: "802",
        description: "Gain x10 Eggs.",
        cost: new EN("111"),
        unlocked() {
            return hasUpgrade("eg", 11)
        },
        },
        13: { title: "803",
        description: "Gain x100 Eggs.",
        cost: new EN("500"),
        unlocked() {
            return hasUpgrade("eg", 12)
        },
        },
        14: { title: "804",
        description: "Gain x1,000 Eggs.",
        cost: new EN("50000"),
        unlocked() {
            return hasUpgrade("eg", 13)
        },
        },
        15: { title: "805",
        description: "Gain x10,000 Eggs.",
        cost: new EN("5e7"),
        unlocked() {
            return hasUpgrade("eg", 14)
        },
        },
        21: { title: "806",
        description: "Gain x100,000 Eggs.",
        cost: new EN("5e11"),
        unlocked() {
            return hasUpgrade("eg", 15)
        },
        },
        22: { title: "807",
        description: "Gain x1,000,000 Eggs.",
        cost: new EN("5e16"),
        unlocked() {
            return hasUpgrade("eg", 21)
        },
        },
        23: { title: "808",
        description: "Gain x10,000,000 Eggs.",
        cost: new EN("5e22"),
        unlocked() {
            return hasUpgrade("eg", 22)
        },
        },
        24: { title: "809",
        description: "Gain x100,000,000 Eggs.",
        cost: new EN("5e28"),
        unlocked() {
            return hasUpgrade("eg", 23)
        },
        },
        25: { title: "810",
        description: "Gain x1e9 Eggs.",
        cost: new EN("5e36"),
        unlocked() {
            return hasUpgrade("eg", 24)
        },
        },
        31: { title: "811",
        description: "Gain x1e10 Eggs.",
        cost: new EN("5e45"),
        unlocked() {
            return hasUpgrade("eg", 25)
        },
        },
        32: { title: "812",
        description: "Gain x1e11 Eggs.",
        cost: new EN("5e55"),
        unlocked() {
            return hasUpgrade("eg", 31)
        },
        },
        33: { title: "813",
        description: "Gain x1e12 Eggs.",
        cost: new EN("5e66"),
        unlocked() {
            return hasUpgrade("eg", 32)
        },
        },
        34: { title: "814",
        description: "Gain x1e13 Eggs.",
        cost: new EN("5e78"),
        unlocked() {
            return hasUpgrade("eg", 33)
        },
        },
        35: { title: "815",
        description: "Gain x1e14 Eggs.",
        cost: new EN("5e91"),
        unlocked() {
            return hasUpgrade("eg", 34)
        },
        },
        41: { title: "816",
        description: "Gain x1e15 Eggs.",
        cost: new EN("5e105"),
        unlocked() {
            return hasUpgrade("eg", 35)
        },
        },
        42: { title: "817",
        description: "Gain x1e16 Eggs.",
        cost: new EN("5e120"),
        unlocked() {
            return hasUpgrade("eg", 41)
        },
        },
        43: { title: "818",
        description: "Gain x1e17 Eggs.",
        cost: new EN("5e136"),
        unlocked() {
            return hasUpgrade("eg", 42)
        },
        },
        44: { title: "819",
        description: "Gain x1e18 Eggs.",
        cost: new EN("5e153"),
        unlocked() {
            return hasUpgrade("eg", 43)
        },
        },
        45: { title: "820",
        description: "Gain x1e19 Eggs.",
        cost: new EN("5e171"),
        unlocked() {
            return hasUpgrade("eg", 44)
        },
        },
        51: { title: "821",
        description: "Gain x1e20 Eggs.",
        cost: new EN("5e190"),
        unlocked() {
            return hasUpgrade("eg", 45)
        },
        },
        52: { title: "822",
        description: "Gain x1e21 Eggs.",
        cost: new EN("5e210"),
        unlocked() {
            return hasUpgrade("eg", 51)
        },
        },
        53: { title: "823",
        description: "Gain x1e22 Eggs.",
        cost: new EN("5e232"),
        unlocked() {
            return hasUpgrade("eg", 52)
        },
        },
        54: { title: "824",
        description: "Increase universal - eggs currency.",
        cost: new EN("5e254"),
        unlocked() {
            return hasUpgrade("eg", 53)
        },
        },
        55: { title: "825",
        description: "Gain x1.000e10 Medals.",
        cost: new EN("10^^^25"),
        unlocked() {
            return hasUpgrade("eg", 54)
        },
        },
    },
    passiveGeneration() { 
        if (hasMilestone("re", 19)) return (hasMilestone("re", 19)?1:0)
        }, 
    name: "Eggs", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "🥚", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        auto: false
    }},
    color: " #FFFFff",
    requires: new EN("10^^^36"), // Can be a function that takes requirement increases into account
    resource: "Eggs", // Name of prestige currency
    baseResource: "Points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    branches: ["x", "du"],
    type() {if (hasUpgrade("su", 535)) return "normal"
    else return "normal"},    
    exponent() {if (hasUpgrade("su", 535)) return new EN(0)
    else return new EN(0)},    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1)
        if (hasUpgrade('eg', 12)) mult = mult.times(10)
        if (hasUpgrade('eg', 13)) mult = mult.times(100)
        if (hasUpgrade('eg', 14)) mult = mult.times(1000)
        if (hasUpgrade('eg', 15)) mult = mult.times(1e4)
        if (hasUpgrade('eg', 21)) mult = mult.times(1e5)
        if (hasUpgrade('eg', 22)) mult = mult.times(1e6)
        if (hasUpgrade('eg', 23)) mult = mult.times(1e7)
        if (hasUpgrade('eg', 24)) mult = mult.times(1e8)
        if (hasUpgrade('eg', 25)) mult = mult.times(1e9)
        if (hasUpgrade('eg', 31)) mult = mult.times(1e10)
        if (hasUpgrade('eg', 32)) mult = mult.times(1e11)
        if (hasUpgrade('eg', 33)) mult = mult.times(1e12)
        if (hasUpgrade('eg', 34)) mult = mult.times(1e13)
        if (hasUpgrade('eg', 35)) mult = mult.times(1e14)
        if (hasUpgrade('eg', 41)) mult = mult.times(1e15)
        if (hasUpgrade('eg', 42)) mult = mult.times(1e16)
        if (hasUpgrade('eg', 43)) mult = mult.times(1e17)
        if (hasUpgrade('eg', 44)) mult = mult.times(1e18)
        if (hasUpgrade('eg', 45)) mult = mult.times(1e19)
        if (hasUpgrade('eg', 51)) mult = mult.times(1e20)
        if (hasUpgrade('eg', 52)) mult = mult.times(1e21)
        if (hasUpgrade('eg', 53)) mult = mult.times(1e22)
        if (hasUpgrade('eg', 54)) mult = mult.times("10^^^25")
        if (hasUpgrade('re', 123)) mult = mult.times(69420)
        if (hasUpgrade('fi', 54)) mult = mult.times("10^^^50")
        if (hasUpgrade('ga', 54)) mult = mult.times("10^^^100")
        if (hasUpgrade('ha', 54)) mult = mult.times("10^^^1000")
        if (hasUpgrade('is', 54)) mult = mult.times("10^^^9e15")
        if (hasUpgrade('ju', 54)) mult = mult.times("10^^^1e16")
        if (hasUpgrade('su', 14)) mult = mult.times(100)

        return mult
    },
    doReset(resettingLayer) {
        let keep = [];
        if (hasMilestone("re", 22) && resettingLayer=="re") keep.push("upgrades")
        if (layers[resettingLayer].row > this.row) layerDataReset("eg", keep)
    },
    autoUpgrade() { if (hasMilestone("re" , 20)) return true},
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    row: 7, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "(", description: "Shift+(: Reset for Eggs", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){if (hasUpgrade("su", 535)) return false
    else return (hasChallenge("re", 31) || player[this.layer].unlocked)},})