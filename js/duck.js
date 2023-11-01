addLayer("du", {
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
          "Challenges": {
    unlocked() {return (hasUpgrade("du", 12))},
content: [
["blank", "15px"],
["challenges", [1,2,3,4,5,6,7,8,9]]
],
},
        },
                },
    upgrades: {
        11: { title: "776",
        description: "Gain x7 Medals!",
        cost: new EN("1"),
        unlocked() {
            return hasChallenge("re", 21)
        },
        },
        12: { title: "777 (Lucky!)",
        description: "Gain x7 Medals again, unlock 1 duck challenge and gain x777 ducks.",
        cost: new EN("77"),
        unlocked() {
            return hasUpgrade("du", 11)
        },
        },
        13: { title: "778",
        description: "Gain x10 ducks.",
        cost: new EN("777000"),
        unlocked() {
            return hasUpgrade("du", 12)
        },
        },
        14: { title: "779",
        description: "Unlock 2 new duck challenges.",
        cost: new EN("7770000"),
        unlocked() {
            return hasUpgrade("du", 13)
        },
        },
        15: { title: "780",
        description: "Gain x10 ducks.",
        cost: new EN("7.77e9"),
        unlocked() {
            return hasUpgrade("du", 14)
        },
        },
        21: { title: "781",
        description: "Gain x100 ducks.",
        cost: new EN("7.77e9"),
        unlocked() {
            return hasUpgrade("du", 15)
        },
        },
        22: { title: "782",
        description: "Gain x100 ducks.",
        cost: new EN("7.77e12"),
        unlocked() {
            return hasUpgrade("du", 21)
        },
        },
        23: { title: "783",
        description: "Unlock 3 new duck challenges.",
        cost: new EN("7.77e13"),
        unlocked() {
            return hasUpgrade("du", 22)
        },
        },
        24: { title: "784",
        description: "Gain x100 ducks.",
        cost: new EN("7.77e21"),
        unlocked() {
            return hasUpgrade("du", 23)
        },
        },
        25: { title: "785",
        description: "Gain x100 ducks.",
        cost: new EN("7.77e23"),
        unlocked() {
            return hasUpgrade("du", 24)
        },
        },
        31: { title: "786",
        description: "Gain x1,000 ducks.",
        cost: new EN("7.77e25"),
        unlocked() {
            return hasUpgrade("du", 25)
        },
        },
        32: { title: "787",
        description: "Gain x1,000 ducks.",
        cost: new EN("7.77e28"),
        unlocked() {
            return hasUpgrade("du", 31)
        },
        },
        33: { title: "788",
        description: "Gain x1,000 ducks.",
        cost: new EN("7.77e32"),
        unlocked() {
            return hasUpgrade("du", 32)
        },
        },
        34: { title: "789",
        description: "Gain x1,000 ducks.",
        cost: new EN("7.77e34"),
        unlocked() {
            return hasUpgrade("du", 33)
        },
        },
        35: { title: "790",
        description: "Gain x1,000 ducks.",
        cost: new EN("7.77e37"),
        unlocked() {
            return hasUpgrade("du", 34)
        },
        },
        41: { title: "791",
        description: "Unlock the final duck challenge.",
        cost: new EN("7.77e41"),
        unlocked() {
            return hasUpgrade("du", 35)
        },
        },
        42: { title: "792",
        description: "Nothing.",
        cost: new EN("7.77e45"),
        unlocked() {
            return hasUpgrade("du", 41)
        },
        },
        43: { title: "793",
        description: "Nothing.",
        cost: new EN("7.77e45"),
        unlocked() {
            return hasUpgrade("du", 42)
        },
        },
        44: { title: "794",
        description: "Nothing.",
        cost: new EN("7.77e45"),
        unlocked() {
            return hasUpgrade("du", 43)
        },
        },
        45: { title: "795",
        description: "Nothing.",
        cost: new EN("7.77e45"),
        unlocked() {
            return hasUpgrade("du", 44)
        },
        },
        51: { title: "796",
        description: "Nothing.",
        cost: new EN("7.77e45"),
        unlocked() {
            return hasUpgrade("du", 45)
        },
        },
        52: { title: "797",
        description: "Nothing.",
        cost: new EN("7.77e45"),
        unlocked() {
            return hasUpgrade("du", 51)
        },
        },
        53: { title: "798",
        description: "Nothing.",
        cost: new EN("7.77e45"),
        unlocked() {
            return hasUpgrade("du", 52)
        },
        },
        54: { title: "799",
        description: "Increase from universal - ducks currencies but remove sand and transcension layer.",
        cost: new EN("7.77e45"),
        unlocked() {
            return hasUpgrade("du",53)
        },
        },
        55: { title: "800",
        description: "Gain x1,000,000,000 medals.",
        cost: new EN("10^^^10"),
        unlocked() {
            return hasUpgrade("du", 54)
        },
        },
    },
    challenges: {
        11: {
                name: "Easiest",
                challengeDescription: "Normal Run^2.",
                goalDescription: "1G18 Points.",
                rewardDescription: "Gain x10 ducks.",
                canComplete: function() {return player.points.gte("10^^^18")},
                unlocked() { return (hasUpgrade('du', 12)) },
        },
                12: {
                name: "Easy",
                challengeDescription: "Normal Run^3.",
                goalDescription: "1G19 Points.",
                rewardDescription: "Gain x10 ducks again.",
                canComplete: function() {return player.points.gte("10^^^19")},
                unlocked() { return (hasUpgrade('du', 14)) },
        },
        21: {
            name: "Easy+",
            challengeDescription: "Normal Run^4.",
            goalDescription: "1G19 Points.",
            rewardDescription: "Gain x100 ducks.",
            canComplete: function() {return player.points.gte("10^^^19")},
            unlocked() { return (hasChallenge('du', 12)) },
    },
    22: {
        name: "Easy++",
        challengeDescription: "Normal Run^5.",
        goalDescription: "1G19 Points.",
        rewardDescription: "Gain x100 ducks.",
        canComplete: function() {return player.points.gte("10^^^19")},
        unlocked() { return (hasUpgrade('du', 23)) },
},
31: {
    name: "Easy+3",
    challengeDescription: "Normal Run^6.",
    goalDescription: "1G19 Points.",
    rewardDescription: "Gain x1,000 ducks.",
    canComplete: function() {return player.points.gte("10^^^19")},
    unlocked() { return (hasChallenge('du', 22)) },
},
32: {
    name: "Easy+^",
    challengeDescription: "Normal Run^7",
    goalDescription: "1G19 Points.",
    rewardDescription: "Gain x1,000 ducks.",
    canComplete: function() {return player.points.gte("10^^^19")},
    unlocked() { return (hasChallenge('du', 31)) },
},
41: {
    name: "Medium",
    challengeDescription: "Normal Run^8.",
    goalDescription: "1G20 Points.",
    rewardDescription: "Gain x1,000,000 ducks.",
    canComplete: function() {return player.points.gte("10^^^20")},
    unlocked() { return (hasUpgrade('du', 41)) },
},
    },
    name: "Ducks", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "🦆", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        auto: false
    }},
    color: " #FFFF00",
    requires: new EN("10^^^17"), // Can be a function that takes requirement increases into account
    resource: "Ducks", // Name of prestige currency
    baseResource: "Points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    branches: ["w", "ci"],
    type() {if (hasUpgrade("su", 535)) return "normal"
    else return "normal"},    
    exponent() {if (hasUpgrade("su", 535)) return new EN(0)
    else return new EN(0)},    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1)
        if (hasUpgrade('du', 12)) mult = mult.times(777)
        if (hasChallenge('du', 11)) mult = mult.times(10)
        if (hasUpgrade('du', 13)) mult = mult.times(10)
        if (hasChallenge('du', 12)) mult = mult.times(10)
        if (hasChallenge('du', 21)) mult = mult.times(100)
        if (hasUpgrade('du', 15)) mult = mult.times(10)
        if (hasUpgrade('du', 21)) mult = mult.times(100)
        if (hasUpgrade('du', 22)) mult = mult.times(100)
        if (hasChallenge('du', 22)) mult = mult.times(100)
        if (hasChallenge('du', 31)) mult = mult.times(1000)
        if (hasChallenge('du', 32)) mult = mult.times(1000)
        if (hasUpgrade('du', 24)) mult = mult.times(100)
        if (hasUpgrade('du', 25)) mult = mult.times(100)
        if (hasUpgrade('du', 31)) mult = mult.times(1000)
        if (hasUpgrade('du', 32)) mult = mult.times(1000)
        if (hasUpgrade('du', 33)) mult = mult.times(1000)
        if (hasUpgrade('du', 34)) mult = mult.times(1000)
        if (hasUpgrade('du', 35)) mult = mult.times(1000)
        if (hasChallenge('du', 41)) mult = mult.times(1000000)
        if (hasUpgrade('du', 54)) mult = mult.times("10^^^10")
        if (hasUpgrade('re', 122)) mult = mult.times(69420)
        if (hasUpgrade('eg', 54)) mult = mult.times("10^^^25")
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
        if (hasMilestone("re", 21) && resettingLayer=="re") keep.push("upgrades")
        if (hasMilestone("re", 21) && resettingLayer=="re") keep.push("challenges")
        if (layers[resettingLayer].row > this.row) layerDataReset("du", keep)
    },
    passiveGeneration() { 
        if (hasMilestone("re", 18)) return (hasMilestone("re", 18)?1:0)
        },   
        autoUpgrade() { if (hasMilestone("re" , 19)) return true},

    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    row: 7, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: ")", description: "Shift+): Reset for Ducks", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){if (hasUpgrade("su", 535)) return false
    else return (hasChallenge("re", 21) || player[this.layer].unlocked)},})