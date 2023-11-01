addLayer("z", {
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
                        unlocked() {return (hasUpgrade("z", 12))},
                content: [
                    ["blank", "15px"],
                    ["challenges", [1,2,3,4,5,6,7,8,9]]
                    
                ]
},
},
                },
    upgrades: {
        11: { title: "676",
        description: "Gain x2 Medals.",
        cost: new EN("1"),
        unlocked() {
            return hasUpgrade("re",91)
        },
        },
        12: { title: "677",
        description: "Unlock a challenge but remove people layer.",
        cost: new EN("1e6"),
        unlocked() {
            return hasUpgrade("z",11)
        },
        },
        13: { title: "678",
        description: "Gain x10 zebra but remove button power layer.",
        cost: new EN("3e6"),
        unlocked() {
            return hasUpgrade("z",12)
        },
        },
        14: { title: "679",
        description: "Unlock 2 new challenges but remove ants layer.",
        cost: new EN("4e7"),
        unlocked() {
            return hasUpgrade("z",13)
        },
        },
        15: { title: "680",
        description: "Gain x3 zebras.",
        cost: new EN("1e8"),
        unlocked() {
            return hasUpgrade("z",14)
        },
        },
        21: { title: "681",
        description: "Gain x9 zebras but remove grass layer.",
        cost: new EN("1e9"),
        unlocked() {
            return hasUpgrade("z",15)
        },
        },
        22: { title: "682",
        description: "Gain x81 zebras but remove cups layer.",
        cost: new EN("8e9"),
        unlocked() {
            return hasUpgrade("z",21)
        },
        },
        23: { title: "683",
        description: "Gain x3 zebras.",
        cost: new EN("1e11"),
        unlocked() {
            return hasUpgrade("z",22)
        },
        },
        24: { title: "684",
        description: "Unlock 3 new challenges remove dice layer.",
        cost: new EN("1e12"),
        unlocked() {
            return hasUpgrade("z",23)
        },
        },
        25: { title: "685",
        description: "Gain x3 zebras.",
        cost: new EN("1e14"),
        unlocked() {
            return hasUpgrade("z",24)
        },
        },
        31: { title: "686",
        description: "Gain x9 zebras but remove fruits layer.",
        cost: new EN("1e15"),
        unlocked() {
            return hasUpgrade("z",25)
        },
        },
        32: { title: "687",
        description: "Gain x81 zebras but remove electricity layer.",
        cost: new EN("1e16"),
        unlocked() {
            return hasUpgrade("z",31)
        },
        },
        33: { title: "688",
        description: "Gain x6,561 zebras but remove houses layer.",
        cost: new EN("1e18"),
        unlocked() {
            return hasUpgrade("z",32)
        },
        },
        34: { title: "689",
        description: "Gain x3 zebras.",
        cost: new EN("1e21"),
        unlocked() {
            return hasUpgrade("z",33)
        },
        },
        35: { title: "690",
        description: "Gain x3 zebras.",
        cost: new EN("1e22"),
        unlocked() {
            return hasUpgrade("z",34)
        },
        },
        41: { title: "691",
        description: "Unlock 4 new challenges but remove ice layer.",
        cost: new EN("2.222e22"),
        unlocked() {
            return hasUpgrade("z",35)
        },
        },
        42: { title: "692",
        description: "Gain x4 zebras.",
        cost: new EN("1e26"),
        unlocked() {
            return hasUpgrade("z",41)
        },
        },
        43: { title: "693",
        description: "Gain x4 zebras.",
        cost: new EN("1e27"),
        unlocked() {
            return hasUpgrade("z",42)
        },
        },
        44: { title: "694",
        description: "Gain x16 zebras but remove jingles layer.",
        cost: new EN("2.5e27"),
        unlocked() {
            return hasUpgrade("z",43)
        },
        },
        45: { title: "695",
        description: "Gain x256 zebras but remove keys layer.",
        cost: new EN("2e28"),
        unlocked() {
            return hasUpgrade("z",44)
        },
        },
        51: { title: "696",
        description: "Gain x4 zebras.",
        cost: new EN("1e31"),
        unlocked() {
            return hasUpgrade("z",45)
        },
        },
        52: { title: "697",
        description: "Gain x16 zebras but remove lights layer, (do not reset anything, otherwise you have to restart the reincarnation run.)",
        cost: new EN("1e32"),
        unlocked() {
            return hasUpgrade("z",51)
        },
        },
        53: { title: "698",
        description: "Gain x256 zebras but remove money layer.",
        cost: new EN("4e32"),
        unlocked() {
            return hasUpgrade("z",52)
        },
        },
        54: { title: "699",
        description: "Increase row 6 - row 7 currencies.",
        cost: new EN("1e35"),
        unlocked() {
            return hasUpgrade("z",53)
        },
        },
        55: { title: "700",
        description: "Unlock the 5 final zebras challenges but remove notebook layer, (If you dont complete any challenges, you will be stuck.)",
        cost: new EN("10^^1e100"),
        unlocked() {
            return hasUpgrade("z",54)
        },
        },
    },
    challenges: {
        11: {
                name: "Slog",
                challengeDescription: "Onion upgrade 61 is worse.",
                goalDescription: "F9e15 Points.",
                rewardDescription: "Gain x1.1 medals.",
                canComplete: function() {return player.points.gte("10^^9e15")},
                unlocked() { return (hasUpgrade('z', 12)) },
        },
                12: {
                name: "Slog^2",
                challengeDescription: "Onion upgrade 61 is more worse.",
                goalDescription: "F1e10 Points.",
                rewardDescription: "Gain x1.2 medals and x4 zebras.",
                canComplete: function() {return player.points.gte("10^^1e10")},
                unlocked() { return (hasUpgrade('z', 14)) },
        },
        21: {
            name: "Slog^3",
            challengeDescription: "Onion upgrade 61 is even worse.",
            goalDescription: "F999,999,999 Points.",
            rewardDescription: "Gain x1.3 medals and x3 zebras.",
            canComplete: function() {return player.points.gte("10^^999999999")},
            unlocked() { return (hasChallenge('z', 12)) },
    },
    22: {
        name: "Slog^4",
        challengeDescription: "Onion upgrade 61 is a lot worse.",
        goalDescription: "F77,777,777 Points.",
        rewardDescription: "Gain x1.5 medals and x16 zebras.",
        canComplete: function() {return player.points.gte("10^^77777777")},
        unlocked() { return (hasUpgrade('z', 24)) },
},
31: {
    name: "Slog^inf",
    challengeDescription: "Onion upgrade 61 does nothing.",
    goalDescription: "1 Point.",
    rewardDescription: "Gain x1.6 medals and x4 zebras.",
    canComplete: function() {return player.points.gte("1")},
    unlocked() { return (hasChallenge('z', 22)) },
},
32: {
    name: "Slog^0.5",
    challengeDescription: "Onion upgrade 61 is so much worse.",
    goalDescription: "F1e14 Points.",
    rewardDescription: "Gain x1.8 medals and x4 zebras.",
    canComplete: function() {return player.points.gte("10^^1e14")},
    unlocked() { return (hasChallenge('z', 31)) },
},
41: {
    name: "Normal Run",
    challengeDescription: "Just a normal run.",
    goalDescription: "FF2.585 Points.",
    rewardDescription: "Gain x1.9 medals and x4 zebras.",
    canComplete: function() {return player.points.gte("10^^1e7000")},
    unlocked() { return (hasUpgrade('z', 41)) },
},
42: {
    name: "Root",
    challengeDescription: "Onion upgrade 61 is ^3 less.",
    goalDescription: "FF2.527 Points.",
    rewardDescription: "Gain x2.1 medals and x4 zebras.",
    canComplete: function() {return player.points.gte("10^^1e2333")},
    unlocked() { return (hasChallenge('z', 41)) },
},
51: {
    name: "Sqrtroot",
    challengeDescription: "Onion upgrade 61 is ^69 less.",
    goalDescription: "FF2.301 Points.",
    rewardDescription: "Gain x2.4 medals and x81 zebras.",
    canComplete: function() {return player.points.gte("10^^1e100")},
    unlocked() { return (hasChallenge('z', 42)) },
},
52: {
    name: "Cuberoot",
    challengeDescription: "Onion upgrade 61 is ^420 less.",
    goalDescription: "F9e15 Points.",
    rewardDescription: "Gain x2.6 medals and x4 zebras.",
    canComplete: function() {return player.points.gte("10^^9e15")},
    unlocked() { return (hasChallenge('z', 51)) },
},
61: {
    name: "Free",
    challengeDescription: "Complete this challenge in 1 tick.",
    goalDescription: "1 Point.",
    rewardDescription: "Gain x2.9 medals.",
    canComplete: function() {return player.points.gte("1")},
    unlocked() { return (hasUpgrade('z', 55)) },
},
62: {
    name: "Beginning?",
    challengeDescription: "Reincarnation upgrade 11 does barely anything.",
    goalDescription: "ee1e3,000 Points.",
    rewardDescription: "Gain x3.1 medals.",
    canComplete: function() {return player.points.gte("eee3000")},
    unlocked() { return (hasChallenge('z', 61)) },
},
71: {
    name: "Free again",
    challengeDescription: "The same thing.",
    goalDescription: "1 Point.",
    rewardDescription: "Gain x3.5 medals.",
    canComplete: function() {return player.points.gte("1")},
    unlocked() { return (hasChallenge('z', 62)) },
},
72: {
    name: "Can you stop",
    challengeDescription: "No",
    goalDescription: "0 Points.",
    rewardDescription: "Gain x3.8 medals.",
    canComplete: function() {return player.points.gte("0")},
    unlocked() { return (hasChallenge('z', 71)) },
},
81: {
    name: "Ugh fine, just buy more rein upgrades.",
    challengeDescription: "Thanks game.",
    goalDescription: "1 Point.",
    rewardDescription: "Gain x4.2 medals.",
    canComplete: function() {return player.points.gte("1")},
    unlocked() { return (hasChallenge('z', 72)) },
},
    },
    name: "Zebras", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "🦓", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        auto: false
    }},
    color: "#4b6753",
    requires: new EN("10^^1e7000"), // Can be a function that takes requirement increases into account
    resource: "Zebras", // Name of prestige currency
    baseResource: "Points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    branches: ["t" , "y"],
    type() {if (hasUpgrade("su", 535)) return "normal"
    else return "normal"},    
    exponent() {if (hasUpgrade("su", 535)) return new EN(0)
    else return new EN(0)},    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1)
        if (hasUpgrade('re', 93)) mult = mult.times(10000)
        if (hasUpgrade('z', 13)) mult = mult.times(10)
        if (hasChallenge('z', 12)) mult = mult.times(4)
        if (hasChallenge('z', 21)) mult = mult.times(3)
        if (hasUpgrade('z', 15)) mult = mult.times(3)
        if (hasUpgrade('z', 21)) mult = mult.times(9)
        if (hasUpgrade('z', 22)) mult = mult.times(81)
        if (hasUpgrade('z', 23)) mult = mult.times(3)
        if (hasChallenge('z', 22)) mult = mult.times(16)
        if (hasChallenge('z', 31)) mult = mult.times(4)
        if (hasChallenge('z', 32)) mult = mult.times(4)
        if (hasUpgrade('z', 25)) mult = mult.times(3)
        if (hasUpgrade('z', 31)) mult = mult.times(9)
        if (hasUpgrade('z', 32)) mult = mult.times(81)
        if (hasUpgrade('z', 33)) mult = mult.times(6561)
        if (hasUpgrade('z', 34)) mult = mult.times(3)
        if (hasUpgrade('z', 35)) mult = mult.times(3)
        if (hasChallenge('z', 41)) mult = mult.times(4)
        if (hasChallenge('z', 42)) mult = mult.times(4)
        if (hasChallenge('z', 51)) mult = mult.times(81)
        if (hasChallenge('z', 52)) mult = mult.times(4)
        if (hasUpgrade('z', 42)) mult = mult.times(4)
        if (hasUpgrade('z', 43)) mult = mult.times(4)
        if (hasUpgrade('z', 44)) mult = mult.times(16)
        if (hasUpgrade('z', 45)) mult = mult.times(256)
        if (hasUpgrade('z', 51)) mult = mult.times(4)
        if (hasUpgrade('z', 52)) mult = mult.times(16)
        if (hasUpgrade('z', 53)) mult = mult.times(256)
        if (hasUpgrade('z', 54)) mult = mult.times("10^^1e100")
        if (hasUpgrade('re', 103)) mult = mult.times(1e9)
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
        if (hasMilestone("re", 16) && resettingLayer=="re") keep.push("upgrades")
        if (hasMilestone("re", 17) && resettingLayer=="re") keep.push("challenges")
        if (layers[resettingLayer].row > this.row) layerDataReset("z", keep)
    },
    autoUpgrade() { if (hasMilestone("re" , 15)) return true},
    passiveGeneration() { return (hasMilestone("re", 13)&&player.current!="z")?1:0 },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    row: 6, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "z", description: "Z: Reset for Zebra", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){if (hasUpgrade("su", 535)) return false
    else return (hasUpgrade("re", 91) || player[this.layer].unlocked)},})