addLayer("fi", {
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
        11: { title: "826",
        description: "Gain x20 Medals!",
        cost: new EN("1"),
        unlocked() {
            return hasChallenge("re", 31)
        },
        },
        12: { title: "827",
        description: "Gain x10 Fire",
        cost: new EN("10"),
        unlocked() {
            return hasUpgrade("fi", 11)
        },
        },
        13: { title: "828",
        description: "Gain x100 Fire",
        cost: new EN("1000"),
        unlocked() {
            return hasUpgrade("fi", 12)
        },
        },
        14: { title: "829",
        description: "Gain x1,000 Fire",
        cost: new EN("100000"),
        unlocked() {
            return hasUpgrade("fi", 13)
        },
        },
        15: { title: "830",
        description: "Gain x10,000 Fire",
        cost: new EN("1e8"),
        unlocked() {
            return hasUpgrade("fi", 14)
        },
        },
        21: { title: "831",
        description: "Gain x100,000 Fire",
        cost: new EN("1e12"),
        unlocked() {
            return hasUpgrade("fi", 15)
        },
        },
        22: { title: "832",
        description: "Gain x1,000,000 Fire",
        cost: new EN("1e15"),
        unlocked() {
            return hasUpgrade("fi", 21)
        },
        },
        23: { title: "833",
        description: "Gain x10,000,000 Fire",
        cost: new EN("1e21"),
        unlocked() {
            return hasUpgrade("fi", 22)
        },
        },
        24: { title: "834",
        description: "Gain x100,000,000 Fire",
        cost: new EN("1e28"),
        unlocked() {
            return hasUpgrade("fi", 23)
        },
        },
        25: { title: "835",
        description: "Gain x1,000,000,000 Fire",
        cost: new EN("1e36"),
        unlocked() {
            return hasUpgrade("fi", 24)
        },
        },
        31: { title: "836",
        description: "Gain x1e10 Fire",
        cost: new EN("1e45"),
        unlocked() {
            return hasUpgrade("fi", 25)
        },
        },
        32: { title: "837",
        description: "Gain x1e11 Fire",
        cost: new EN("1e55"),
        unlocked() {
            return hasUpgrade("fi", 31)
        },
        },
        33: { title: "838",
        description: "Gain x1e12 Fire",
        cost: new EN("1e66"),
        unlocked() {
            return hasUpgrade("fi", 32)
        },
        },
        34: { title: "839",
        description: "Gain x1e13 Fire",
        cost: new EN("1e78"),
        unlocked() {
            return hasUpgrade("fi", 33)
        },
        },
        35: { title: "840",
        description: "Gain x1e14 Fire",
        cost: new EN("1e91"),
        unlocked() {
            return hasUpgrade("fi", 34)
        },
        },
        41: { title: "841",
        description: "Gain x1e15 Fire",
        cost: new EN("1e106"),
        unlocked() {
            return hasUpgrade("fi", 35)
        },
        },
        42: { title: "842",
        description: "Gain x1e16 Fire",
        cost: new EN("1e121"),
        unlocked() {
            return hasUpgrade("fi", 41)
        },
        },
        43: { title: "843",
        description: "Gain x1e17 Fire",
        cost: new EN("1e137"),
        unlocked() {
            return hasUpgrade("fi", 42)
        },
        },
        44: { title: "844",
        description: "Gain x1e18 Fire",
        cost: new EN("1e154"),
        unlocked() {
            return hasUpgrade("fi", 43)
        },
        },
        45: { title: "845",
        description: "Gain x1e19 Fire",
        cost: new EN("1e173"),
        unlocked() {
            return hasUpgrade("fi", 44)
        },
        },
        51: { title: "846",
        description: "Gain x1e20 Fire",
        cost: new EN("1e191"),
        unlocked() {
            return hasUpgrade("fi", 45)
        },
        },
        52: { title: "847",
        description: "Gain x1e21 Fire",
        cost: new EN("1e210"),
        unlocked() {
            return hasUpgrade("fi", 51)
        },
        },
        53: { title: "848",
        description: "Gain x1e22 Fire",
        cost: new EN("1e232"),
        unlocked() {
            return hasUpgrade("fi", 52)
        },
        },
        54: { title: "849",
        description: "Increase currencies from universal - fire",
        cost: new EN("1e254"),
        unlocked() {
            return hasUpgrade("fi", 53)
        },
        },
        55: { title: "850",
        description: "Gain x1e12 Medals.",
        cost: new EN("10^^^50"),
        unlocked() {
            return hasUpgrade("fi", 54)
        },
        },
    },
    name: "Fire", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "🔥", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        auto: false
    }},
    color: " #fdcf58",
    requires: new EN("10^^^130"), // Can be a function that takes requirement increases into account
    resource: "Fire", // Name of prestige currency
    baseResource: "Points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    branches: ["y", "eg"],
    type() {if (hasUpgrade("su", 535)) return "normal"
    else return "normal"},    
    exponent() {if (hasUpgrade("su", 535)) return new EN(0)
    else return new EN(0)},    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1)
        if (hasUpgrade('fi', 12)) mult = mult.times(10)
        if (hasUpgrade('fi', 13)) mult = mult.times(100)
        if (hasUpgrade('fi', 14)) mult = mult.times(1000)
        if (hasUpgrade('fi', 15)) mult = mult.times(10000)
        if (hasUpgrade('fi', 21)) mult = mult.times(100000)
        if (hasUpgrade('fi', 22)) mult = mult.times(1000000)
        if (hasUpgrade('fi', 23)) mult = mult.times(10000000)
        if (hasUpgrade('fi', 24)) mult = mult.times(1e8)
        if (hasUpgrade('fi', 25)) mult = mult.times(1e9)
        if (hasUpgrade('fi', 31)) mult = mult.times(1e10)
        if (hasUpgrade('fi', 32)) mult = mult.times(1e11)
        if (hasUpgrade('fi', 33)) mult = mult.times(1e12)
        if (hasUpgrade('fi', 34)) mult = mult.times(1e13)
        if (hasUpgrade('fi', 35)) mult = mult.times(1e14)
        if (hasUpgrade('fi', 41)) mult = mult.times(1e15)
        if (hasUpgrade('fi', 42)) mult = mult.times(1e16)
        if (hasUpgrade('fi', 43)) mult = mult.times(1e17)
        if (hasUpgrade('fi', 44)) mult = mult.times(1e18)
        if (hasUpgrade('fi', 45)) mult = mult.times(1e19)
        if (hasUpgrade('fi', 51)) mult = mult.times(1e20)
        if (hasUpgrade('fi', 52)) mult = mult.times(1e21)
        if (hasUpgrade('fi', 53)) mult = mult.times(1e22)
        if (hasUpgrade('fi', 54)) mult = mult.times("10^^^50")
        if (hasUpgrade('re', 131)) mult = mult.times(69420)
        if (hasUpgrade('ga', 54)) mult = mult.times("10^^^100")
        if (hasUpgrade('ha', 54)) mult = mult.times("10^^^1000")
        if (hasUpgrade('is', 54)) mult = mult.times("10^^^9e15")
        if (hasUpgrade('ju', 54)) mult = mult.times("10^^^1e16")
        if (hasUpgrade('su', 14)) mult = mult.times(100)


        return mult
    },
     passiveGeneration() { 
        if (hasMilestone("re", 20)) return (hasMilestone("re", 20)?1:0)
        },
        autoUpgrade() { if (hasMilestone("re" , 21)) return true},
        doReset(resettingLayer) {
            let keep = [];
            if (hasMilestone("re", 23) && resettingLayer=="re") keep.push("upgrades")
            if (layers[resettingLayer].row > this.row) layerDataReset("fi", keep)
        },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    row: 7, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "*", description: "Shift+*: Reset for Fire", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){if (hasUpgrade("su", 535)) return false
    else return (hasChallenge("re", 32) || player[this.layer].unlocked)},})