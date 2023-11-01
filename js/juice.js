addLayer("ju", {
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
        11: { title: "926",
        description: "Gain ^1.01 Medals and Triple Juice gain.",
        cost: new EN("1"),
        unlocked() {
            return hasChallenge("re", 62)
        },
        },
        12: { title: "927",
        description: "Gain x10 Juices.",
        cost: new EN("100"),
        unlocked() {
            return hasUpgrade("ju", 11)
        },
        },
        13: { title: "928",
        description: "Gain x100 Juices.",
        cost: new EN("1000"),
        unlocked() {
            return hasUpgrade("ju", 12)
        },
        },
        14: { title: "929",
        description: "Gain x1,000 Juices.",
        cost: new EN("100000"),
        unlocked() {
            return hasUpgrade("ju", 13)
        },
        },
        15: { title: "930",
        description: "Gain x10,000 Juices.",
        cost: new EN("100000000"),
        unlocked() {
            return hasUpgrade("ju", 14)
        },
        },
        21: { title: "931",
        description: "Gain x100,000 Juices.",
        cost: new EN("1e11"),
        unlocked() {
            return hasUpgrade("ju", 15)
        },
        },
        22: { title: "932",
        description: "Gain x1,000,000 Juices.",
        cost: new EN("1e16"),
        unlocked() {
            return hasUpgrade("ju", 21)
        },
        },
        23: { title: "933",
        description: "Gain x10,000,000 Juices.",
        cost: new EN("1e22"),
        unlocked() {
            return hasUpgrade("ju", 22)
        },
        },
        24: { title: "934",
        description: "Gain x100,000,000 Juices.",
        cost: new EN("1e29"),
        unlocked() {
            return hasUpgrade("ju", 23)
        },
        },
        25: { title: "935",
        description: "Gain x1e9 Juices.",
        cost: new EN("1e37"),
        unlocked() {
            return hasUpgrade("ju", 24)
        },
        },
        31: { title: "936",
        description: "Gain x1e10 Juices.",
        cost: new EN("1e46"),
        unlocked() {
            return hasUpgrade("ju", 25)
        },
        },
        32: { title: "937",
        description: "Gain x1e11 Juices.",
        cost: new EN("1e56"),
        unlocked() {
            return hasUpgrade("ju", 31)
        },
        },
        33: { title: "938",
        description: "Gain x1e12 Juices.",
        cost: new EN("1e67"),
        unlocked() {
            return hasUpgrade("ju", 32)
        },
        },
        34: { title: "939",
        description: "Gain x1e13 Juices.",
        cost: new EN("1e79"),
        unlocked() {
            return hasUpgrade("ju", 33)
        },
        },
        35: { title: "940",
        description: "Gain x1e14 Juices.",
        cost: new EN("1e92"),
        unlocked() {
            return hasUpgrade("ju", 34)
        },
        },
        41: { title: "941",
        description: "Gain x1e15 Juices.",
        cost: new EN("1e106"),
        unlocked() {
            return hasUpgrade("ju", 35)
        },
        },
        42: { title: "942",
        description: "Gain x1e16 Juices.",
        cost: new EN("1e121"),
        unlocked() {
            return hasUpgrade("ju", 41)
        },
        },
        43: { title: "943",
        description: "Gain x1e17 Juices.",
        cost: new EN("1e137"),
        unlocked() {
            return hasUpgrade("ju", 42)
        },
        },
        44: { title: "944",
        description: "Gain x1e18 Juices.",
        cost: new EN("1e154"),
        unlocked() {
            return hasUpgrade("ju", 43)
        },
        },
        45: { title: "945",
        description: "Gain x1e19 Juices.",
        cost: new EN("1e172"),
        unlocked() {
            return hasUpgrade("ju", 44)
        },
        },
        51: { title: "946",
        description: "Gain x1e20 Juices.",
        cost: new EN("1e191"),
        unlocked() {
            return hasUpgrade("ju", 45)
        },
        },
        52: { title: "947",
        description: "Gain x1e21 Juices.",
        cost: new EN("1e211"),
        unlocked() {
            return hasUpgrade("ju", 51)
        },
        },
        53: { title: "948",
        description: "Gain x1e22 Juices.",
        cost: new EN("1e232"),
        unlocked() {
            return hasUpgrade("ju", 52)
        },
        },
        54: { title: "949",
        description: "Increase Row 7 and Row 8 currencies.",
        cost: new EN("1e255"),
        unlocked() {
            return hasUpgrade("ju", 53)
        },
        },
        55: { title: "950 (50 more to 1K!)",
        description: "Gain x1.000e10 Medals.",
        cost: new EN("10^^^1e16"),
        unlocked() {
            return hasUpgrade("ju", 54)
        },
        },
    },
    name: "Juices", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "🍊", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        auto: false
    }},
    color: "#da614e",
    requires: new EN("10^^^1e33"), // Can be a function that takes requirement increases into account
    resource: "Juices", // Name of prestige currency
    baseResource: "Points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    branches: ["is", "ba"],
    type() {if (hasUpgrade("su", 535)) return "normal"
    else return "normal"},    
    exponent() {if (hasUpgrade("su", 535)) return new EN(0)
    else return new EN(0)},    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1)
        if (hasUpgrade('ju', 11)) mult = mult.times(3)
        if (hasUpgrade('ju', 12)) mult = mult.times(10)
        if (hasUpgrade('ju', 13)) mult = mult.times(100)
        if (hasUpgrade('ju', 14)) mult = mult.times(1000)
        if (hasUpgrade('ju', 15)) mult = mult.times(10000)
        if (hasUpgrade('ju', 21)) mult = mult.times(100000)
        if (hasUpgrade('ju', 22)) mult = mult.times(1000000)
        if (hasUpgrade('ju', 23)) mult = mult.times(1e7)
        if (hasUpgrade('ju', 24)) mult = mult.times(1e8)
        if (hasUpgrade('ju', 25)) mult = mult.times(1e9)
        if (hasUpgrade('ju', 31)) mult = mult.times(1e10)
        if (hasUpgrade('ju', 32)) mult = mult.times(1e11)
        if (hasUpgrade('ju', 33)) mult = mult.times(1e12)
        if (hasUpgrade('ju', 34)) mult = mult.times(1e13)
        if (hasUpgrade('ju', 35)) mult = mult.times(1e14)
        if (hasUpgrade('ju', 41)) mult = mult.times(1e15)
        if (hasUpgrade('ju', 42)) mult = mult.times(1e16)
        if (hasUpgrade('ju', 43)) mult = mult.times(1e17)
        if (hasUpgrade('ju', 44)) mult = mult.times(1e18)
        if (hasUpgrade('ju', 45)) mult = mult.times(1e19)
        if (hasUpgrade('ju', 51)) mult = mult.times(1e20)
        if (hasUpgrade('ju', 52)) mult = mult.times(1e21)
        if (hasUpgrade('ju', 53)) mult = mult.times(1e22)
        if (hasUpgrade('ju', 54)) mult = mult.times("10^^^1e16")
        if (hasUpgrade('re', 151)) mult = mult.times(69420)
        if (hasUpgrade('su', 14)) mult = mult.times(100)
        return mult
    },
    autoUpgrade() { if (hasMilestone("su" , 3)) return true},
    passiveGeneration() { 
        if (hasMilestone("re", 24)) return (hasMilestone("re", 24)?1:0)
        },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    row: 7, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "#", description: "Shift+#: Reset for Juices", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){if (hasUpgrade("su", 535)) return false
    else return (hasChallenge("re", 71) || player[this.layer].unlocked)},})