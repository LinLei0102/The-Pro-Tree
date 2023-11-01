addLayer("v", {
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
        11: { title: "576",
        description: "Gain x2 Void.",
        cost: new EN("420"),
        unlocked() {
            return hasUpgrade("re", 11)
        },
        },
        12: { title: "577",
        description: "Gain x4 Void.",
        cost: new EN("1000"),
        unlocked() {
            return hasUpgrade("v", 11)
        }
        },
        13: { title: "578",
        description: "Gain x4,096 Void.",
        cost: new EN("6969"),
        unlocked() {
            return hasUpgrade("v", 12)
        }
        },
        14: { title: "579",
        description: "Gain x1.152e18 Void.",
        cost: new EN("2e7"),
        unlocked() {
            return hasUpgrade("v", 13)
        }
        },
        15: { title: "580",
        description: "Gain x5.462e216 Void.",
        cost: new EN("1e26"),
        unlocked() {
            return hasUpgrade("v", 14)
        }
        },
        21: { title: "581",
        description: "Gain ^40 more void.",
        cost: new EN("1e242"),
        unlocked() {
            return hasUpgrade("v", 15)
        }
        },
        22: { title: "582",
        description: "Gain ^800 more void.",
        cost: new EN("1e9610"),
        unlocked() {
            return hasUpgrade("v", 21)
        }
        },
        23: { title: "583",
        description: "Gain ^640,000 more void.",
        cost: new EN("2e7686970"),
        unlocked() {
            return hasUpgrade("v", 22)
        }
        },
        24: { title: "584",
        description: "Gain ^1.28e308 more void.",
        cost: new EN("e2.450e12"),
        unlocked() {
            return hasUpgrade("v", 23)
        }
        },
        25: { title: "585",
        description: "Gain ^^2 more void.",
        cost: new EN("e3.148e320"),
        unlocked() {
            return hasUpgrade("v", 24)
        }
        },
        31: { title: "586",
        description: "Gain ^^3 more void.",
        cost: new EN("ee6.297e320"),
        unlocked() {
            return hasUpgrade("v", 25)
        }
        },
        32: { title: "587",
        description: "Gain ^^4 more void.",
        cost: new EN("10^^5"),
        unlocked() {
            return hasUpgrade("v", 31)
        }
        },
        33: { title: "588",
        description: "Gain ^^6 more void.",
        cost: new EN("10^^9"),
        unlocked() {
            return hasUpgrade("v", 32)
        }
        },
        34: { title: "589",
        description: "Gain ^^8 more void.",
        cost: new EN("10^^14"),
        unlocked() {
            return hasUpgrade("v", 33)
        }
        },
        35: { title: "590",
        description: "Gain ^^10 more void.",
        cost: new EN("10^^21"),
        unlocked() {
            return hasUpgrade("v", 34)
        }
        },
        41: { title: "591",
        description: "Gain ^^13 more void.",
        cost: new EN("10^^30"),
        unlocked() {
            return hasUpgrade("v", 35)
        }
        },
        42: { title: "592",
        description: "Gain ^^16 more void.",
        cost: new EN("10^^42"),
        unlocked() {
            return hasUpgrade("v", 41)
        }
        },
        43: { title: "593",
        description: "Gain ^^20 more void.",
        cost: new EN("10^^57"),
        unlocked() {
            return hasUpgrade("v", 42)
        }
        },
        44: { title: "594",
        description: "Gain ^^24 more void.",
        cost: new EN("10^^76"),
        unlocked() {
            return hasUpgrade("v", 43)
        }
        },
        45: { title: "595",
        description: "Gain ^^28 more void.",
        cost: new EN("10^^99"),
        unlocked() {
            return hasUpgrade("v", 44)
        }
        },
        51: { title: "596",
        description: "Gain ^^56 more void.",
        cost: new EN("10^^126"),
        unlocked() {
            return hasUpgrade("v", 45)
        }
        },
        52: { title: "597",
        description: "Gain ^^112 more void.",
        cost: new EN("10^^181"),
        unlocked() {
            return hasUpgrade("v", 51)
        }
        },
        53: { title: "598",
        description: "Gain ^^224 more void.",
        cost: new EN("10^^292"),
        unlocked() {
            return hasUpgrade("v", 52)
        }
        },
        54: { title: "599",
        description: "Gain ^^515 more void and increase all other currencies.",
        cost: new EN("10^^515"),
        unlocked() {
            return hasUpgrade("v", 53)
        }
        },
        55: { title: "600",
        description: "The Onion Upgrade 71 is cubed and you gain x5 more medals.",
        cost: new EN("10^^1029"),
        unlocked() {
            return player.points.gte("10^^1111111")
        }
        },
    },
    name: "Void", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "🕳️", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        auto: false
    }},
    color: "#4c00b0",
    requires: new EN("10^^999999"), // Can be a function that takes requirement increases into account
    resource: "Void", // Name of prestige currency
    baseResource: "Points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    branches: ["o"],
    exponent: "0", // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1)
                if (hasUpgrade('re', 14)) mult = mult.times(2)
                if (hasUpgrade('re', 21)) mult = mult.times(4)
                if (hasUpgrade('v', 11)) mult = mult.times(2)
                if (hasUpgrade('v', 12)) mult = mult.times(4)
                if (hasUpgrade('v', 13)) mult = mult.times(4096)
                if (hasUpgrade('v', 14)) mult = mult.times(1.1529215e18)
                if (hasUpgrade('v', 15)) mult = mult.times(5.462982e216)
                if (hasUpgrade('v', 21)) mult = mult.pow(40)
                if (hasUpgrade('v', 22)) mult = mult.pow(800)
                if (hasUpgrade('v', 23)) mult = mult.pow(640000)
                if (hasUpgrade('v', 24)) mult = mult.pow(1.28e308)
                if (hasUpgrade('v', 25)) mult = mult.tetrate(2)
                if (hasUpgrade('v', 31)) mult = mult.tetrate(3)
                if (hasUpgrade('v', 32)) mult = mult.tetrate(4)
                if (hasUpgrade('v', 33)) mult = mult.tetrate(6)
                if (hasUpgrade('v', 34)) mult = mult.tetrate(8)
                if (hasUpgrade('v', 35)) mult = mult.tetrate(10)
                if (hasUpgrade('v', 41)) mult = mult.tetrate(13)
                if (hasUpgrade('v', 42)) mult = mult.tetrate(16)
                if (hasUpgrade('v', 43)) mult = mult.tetrate(20)
                if (hasUpgrade('v', 44)) mult = mult.tetrate(24)
                if (hasUpgrade('v', 45)) mult = mult.tetrate(28)
                if (hasUpgrade('v', 51)) mult = mult.tetrate(56)
                if (hasUpgrade('v', 52)) mult = mult.tetrate(112)
                if (hasUpgrade('v', 53)) mult = mult.tetrate(224)
                if (hasUpgrade('v', 54)) mult = mult.tetrate(515)
                if (hasUpgrade('re', 24)) mult = mult.times(3)
                if (hasUpgrade('re', 33)) mult = mult.times(1.25)
                if (hasUpgrade('re', 41)) mult = mult.times(2)
                if (hasUpgrade('re', 51)) mult = mult.times(4)
                if (hasUpgrade('w', 54)) mult = mult.tetrate(20000)
                if (hasUpgrade('re', 54)) mult = mult.times(64)
                if (hasUpgrade('x', 54)) mult = mult.times("10^^1e11")
                if (hasUpgrade('y', 54)) mult = mult.pow("10^^1e40")
                if (hasUpgrade('z', 54)) mult = mult.times("10^^1e500")
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
        if (hasMilestone("re", 12) && resettingLayer=="re") keep.push("upgrades")
        if (layers[resettingLayer].row > this.row) layerDataReset("v", keep)
    },
    autoUpgrade() { if (hasMilestone("re" , 11)) return true},
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    row: 6, // Row the layer is in on the tree (0 is the first row)
    passiveGeneration() { return (hasUpgrade("re", 21)&&player.current!="v")?1:0 },
    hotkeys: [
        {key: "v", description: "V: Reset for Void", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return (hasUpgrade("u",55) || player[this.layer].unlocked)},
})