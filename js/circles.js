addLayer("ci", {
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
        11: { title: "751",
        description: "Gain x5 Medals!",
        cost: new EN("1"),
        unlocked() {
            return hasUpgrade("re", 113)
        },
        },
        12: { title: "752",
        description: "Gain x2 Medals and x2,000 Circles.",
        cost: new EN("50"),
        unlocked() {
            return hasUpgrade("ci", 11)
        },
        },
        13: { title: "753",
        description: "Gain more circles.",
        cost: new EN("4e11"),
        unlocked() {
            return hasUpgrade("ci", 12)
        },
        },
        14: { title: "754",
        description: "Gain more circles.",
        cost: new EN("10^^6"),
        unlocked() {
            return hasUpgrade("ci", 13)
        },
        },
        15: { title: "755",
        description: "Gain more circles.",
        cost: new EN("10^^100"),
        unlocked() {
            return hasUpgrade("ci", 14)
        },
        },
        21: { title: "756",
        description: "Gain more circles.",
        cost: new EN("10^^1000000"),
        unlocked() {
            return hasUpgrade("ci", 15)
        },
        },
        22: { title: "757",
        description: "Gain more circles.",
        cost: new EN("10^^1000000"),
        unlocked() {
            return hasUpgrade("ci", 21)
        },
        },
        23: { title: "758",
        description: "Gain more circles.",
        cost: new EN("10^^1000000"),
        unlocked() {
            return hasUpgrade("ci", 22)
        },
        },
        24: { title: "759",
        description: "Gain more circles.",
        cost: new EN("10^^1000000"),
        unlocked() {
            return hasUpgrade("ci", 23)
        },
        },
        25: { title: "760",
        description: "Gain more circles.",
        cost: new EN("10^^1000000"),
        unlocked() {
            return hasUpgrade("ci", 24)
        },
        },
        31: { title: "761",
        description: "Nothing.",
        cost: new EN("10^^^4"),
        unlocked() {
            return hasUpgrade("ci", 25)
        },
        },
        32: { title: "762",
        description: "Nothing.",
        cost: new EN("10^^^4"),
        unlocked() {
            return hasUpgrade("ci", 31)
        },
        },
        33: { title: "763",
        description: "Nothing.",
        cost: new EN("10^^^4"),
        unlocked() {
            return hasUpgrade("ci", 32)
        },
        },
        34: { title: "764",
        description: "Nothing.",
        cost: new EN("10^^^4"),
        unlocked() {
            return hasUpgrade("ci", 33)
        },
        },
        35: { title: "765",
        description: "Gain more circles.",
        cost: new EN("10^^^4"),
        unlocked() {
            return hasUpgrade("ci", 34)
        },
        },
        41: { title: "766",
        description: "Nothing.",
        cost: new EN("10^^^5"),
        unlocked() {
            return hasUpgrade("ci", 35)
        },
        },
        42: { title: "767",
        description: "Nothing.",
        cost: new EN("10^^^5"),
        unlocked() {
            return hasUpgrade("ci", 41)
        },
        },
        43: { title: "768",
        description: "Nothing.",
        cost: new EN("10^^^5"),
        unlocked() {
            return hasUpgrade("ci", 42)
        },
        },
        44: { title: "769",
        description: "Nothing.",
        cost: new EN("10^^^5"),
        unlocked() {
            return hasUpgrade("ci", 43)
        },
        },
        45: { title: "770",
        description: "Nothing.",
        cost: new EN("10^^^5"),
        unlocked() {
            return hasUpgrade("ci", 44)
        },
        },
        51: { title: "771",
        description: "Nothing.",
        cost: new EN("10^^^5"),
        unlocked() {
            return hasUpgrade("ci", 45)
        },
        },
        52: { title: "772",
        description: "Nothing.",
        cost: new EN("10^^^5"),
        unlocked() {
            return hasUpgrade("ci", 51)
        },
        },
        53: { title: "773",
        description: "Nothing.",
        cost: new EN("10^^^5"),
        unlocked() {
            return hasUpgrade("ci", 52)
        },
        },
        54: { title: "774",
        description: "Increase currencies from sand - circles, but remove quantum and rings layer.",
        cost: new EN("10^^^5"),
        unlocked() {
            return hasUpgrade("ci", 53)
        },
        },
        55: { title: "775",
        description: "Gain x1,000,000 Medals.",
        cost: new EN("10^^^6"),
        unlocked() {
            return player.points.gte("10^^^8")
        },
        },
    },
    passiveGeneration() { 
        if (hasMilestone("re", 17)) return (hasMilestone("re", 17)?1:0)
        }, 
    name: "Circles", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "⚪", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        auto: false
    }},
    color: "#ffffff",
    requires: new EN("10^^^6"), // Can be a function that takes requirement increases into account
    resource: "Circles", // Name of prestige currency
    baseResource: "Points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    branches: ["v"],
    type() {if (hasUpgrade("su", 535)) return "normal"
    else return "normal"},    
    exponent() {if (hasUpgrade("su", 535)) return new EN(0)
    else return new EN(0)},    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1)
        if (hasUpgrade('ci', 12)) mult = mult.times(2000)
        if (hasUpgrade('re', 114)) mult = mult.pow(3)
        if (hasUpgrade('ci', 12)) mult = mult.times("10^^6")
        if (hasUpgrade('ci', 13)) mult = mult.times("10^^100")
        if (hasUpgrade('ci', 14)) mult = mult.times("10^^1000000")
        if (hasUpgrade('ci', 15)) mult = mult.times("10^^1e9")
        if (hasUpgrade('ci', 21)) mult = mult.times("10^^1e90")
        if (hasUpgrade('ci', 22)) mult = mult.times("10^^1e799")
        if (hasUpgrade('ci', 23)) mult = mult.times("10^^1e997")
        if (hasUpgrade('ci', 24)) mult = mult.times("10^^1e9797")
        if (hasUpgrade('ci', 25)) mult = mult.times("10^^^4")
        if (hasUpgrade('ci', 35)) mult = mult.times("10^^^5")
        if (hasUpgrade('ci', 54)) mult = mult.times("10^^^6")
        if (hasUpgrade('re', 115)) mult = mult.times(2000)
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
        if (hasMilestone("re", 20) && resettingLayer=="re") keep.push("upgrades")
        if (layers[resettingLayer].row > this.row) layerDataReset("ci", keep)
    },
    autoUpgrade() { if (hasMilestone("re" , 19)) return true},
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    row: 7, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "!", description: "Shift+!: Reset for Circles", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){if (hasUpgrade("su", 535)) return false
    else return (hasUpgrade("re", 113) || player[this.layer].unlocked)},})