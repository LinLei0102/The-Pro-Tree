addLayer("r", {
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
        11: { title: "426",
        description: "Gain x3 Rings.",
        cost: new EN("100"),
        },
        12: { title: "427",
        description: "Gain x27 Rings.",
        cost: new EN("1000"),
        unlocked() {
            return hasUpgrade("r", 11)
        }
        },
        13: { title: "428",
        description: "Gain x729 Rings.",
        cost: new EN("25000"),
        unlocked() {
            return hasUpgrade("r", 12)
        }
        },
        14: { title: "429",
        description: "Gain x387,420,489 Rings.",
        cost: new EN("25000000"),
        unlocked() {
            return hasUpgrade("r", 13)
        }
        },
        15: { title: "430",
        description: "Gain x1.500e17 Rings and increase quantum gain.",
        cost: new EN("1e16"),
        unlocked() {
            return hasUpgrade("r", 14)
        }
        },
        21: { title: "431",
        description: "Gain x3.381e51 Rings.",
        cost: new EN("1e33"),
        unlocked() {
            return hasUpgrade("r", 15)
        }
        },
        22: { title: "432",
        description: "Gain x1.143e103 Rings.",
        cost: new EN("1e84"),
        unlocked() {
            return hasUpgrade("r", 21)
        }
        },
        23: { title: "433",
        description: "Gain x1.5e309 Rings.",
        cost: new EN("2.5e187"),
        unlocked() {
            return hasUpgrade("r", 22)
        }
        },
        24: { title: "434",
        description: "Gain x5e1,236 Rings.",
        cost: new EN("5e496"),
        unlocked() {
            return hasUpgrade("r", 23)
        }
        },
        25: { title: "435",
        description: "Gain x1.5e3,709 Rings and increase light and key gain.",
        cost: new EN("1e1733"),
        unlocked() {
            return hasUpgrade("r", 24)
        }
        },
        31: { title: "436",
        description: "Gain ^4 Rings.",
        cost: new EN("5e5442"),
        unlocked() {
            return hasUpgrade("r", 25)
        }
        },
        32: { title: "437",
        description: "Gain ^16 Rings.",
        cost: new EN("1e21763"),
        unlocked() {
            return hasUpgrade("r", 31)
        }
        },
        33: { title: "438",
        description: "Gain ^256 Rings.",
        cost: new EN("5e348173"),
        unlocked() {
            return hasUpgrade("r", 32)
        }
        },
        34: { title: "439",
        description: "Gain ^4.294e9 Rings.",
        cost: new EN("1e49565906"),
        unlocked() {
            return hasUpgrade("r", 33)
        }
        },
        35: { title: "440",
        description: "Gain ^1e69 Rings.",
        cost: new EN("e1.913e17"),
        unlocked() {
            return hasUpgrade("r", 34)
        }
        },
        41: { title: "441",
        description: "Gain a good ring boost.",
        cost: new EN("e1.913e86"),
        unlocked() {
            return player.points.gte("eeeeeeeeee3000")
        }
        },
        42: { title: "442",
        description: "Gain a big ring boost.",
        cost: new EN("e1.913e394"),
        unlocked() {
            return hasUpgrade("r", 41)
        }
        },
        43: { title: "443",
        description: "Gain a bigger ring boost.",
        cost: new EN("e1.913e69814"),
        unlocked() {
            return hasUpgrade("r", 42)
        }
        },
        44: { title: "444",
        description: "Gain a massive ring boost.",
        cost: new EN("e1.913e1069814"),
        unlocked() {
            return hasUpgrade("r", 43)
        }
        },
        45: { title: "445",
        description: "Gain a insane ring boost.",
        cost: new EN("eee10"),
        unlocked() {
            return hasUpgrade("r", 44)
        }
        },
        51: { title: "446",
        description: "Gain a EXTREME ring boost.",
        cost: new EN("eee69420"),
        unlocked() {
            return player.points.gte("eeeeeeeeee500000")
        }
        },
        52: { title: "447",
        description: "Gain a GOD ring boost.",
        cost: new EN("eeee9"),
        unlocked() {
            return hasUpgrade("r", 51)
        }
        },
        53: { title: "448",
        description: "Gain a BEST ring boost.",
        cost: new EN("eeee1337"),
        unlocked() {
            return hasUpgrade("r", 52)
        }
        },
        54: { title: "449",
        description: "Gain a TRUE BEST ring boost and increase quantum gain.",
        cost: new EN("eeeee6"),
        unlocked() {
            return hasUpgrade("r", 53)
        }
        },
        55: { title: "450",
        description: "The Onion Upgrade 71 is x16 more powerful and unlock a challenge!",
        cost: new EN("eeeee10"),
        unlocked() {
            return player.o.points.gte("eeeeeeeee10")
        }
        },
    },
    name: "Rings", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "💍", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        auto: false
    }},
    color: "#00ced1",
    requires: new EN("eeeeeeeee10"), // Can be a function that takes requirement increases into account
    resource: "Rings", // Name of prestige currency
    baseResource: "Points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type() {if (hasUpgrade("ci", 54)) return "static"
    else return "normal"},    
    exponent() {if (hasUpgrade("ci", 54)) return new EN(Infinity)
    else return new EN(0)},     
    branches: ["q", "l"],
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1)
        if (hasUpgrade('r', 11)) mult = mult.times(3)
        if (hasUpgrade('r', 12)) mult = mult.times(27)
        if (hasUpgrade('r', 13)) mult = mult.times(729)
        if (hasUpgrade('r', 14)) mult = mult.times(387420489)
        if (hasUpgrade('r', 15)) mult = mult.times(1.500e17)
        if (hasUpgrade('r', 21)) mult = mult.times(3.381e51)
        if (hasUpgrade('r', 22)) mult = mult.times(1.143e103)
        if (hasUpgrade('r', 23)) mult = mult.times("1.5e309")
        if (hasUpgrade('r', 24)) mult = mult.times("5e1236")
        if (hasUpgrade('r', 25)) mult = mult.times("1.5e3709")
        if (hasUpgrade('r', 31)) mult = mult.pow(4)
        if (hasUpgrade('r', 32)) mult = mult.pow(16)
        if (hasUpgrade('r', 33)) mult = mult.pow(256)
        if (hasUpgrade('r', 34)) mult = mult.pow(4.294e9)
        if (hasUpgrade('r', 35)) mult = mult.pow(1e69)
        if (hasUpgrade('r', 41)) mult = mult.pow("1e308")
        if (hasUpgrade('r', 42)) mult = mult.pow("1e69420")
        if (hasUpgrade('r', 43)) mult = mult.pow("1e1000000")
        if (hasUpgrade('r', 44)) mult = mult.pow("ee10")
        if (hasUpgrade('r', 45)) mult = mult.pow("ee69420")
        if (hasUpgrade('r', 51)) mult = mult.pow("eee9")
        if (hasUpgrade('r', 52)) mult = mult.pow("eee1337")
        if (hasUpgrade('r', 53)) mult = mult.pow("eee1000000")
        if (hasUpgrade('r', 54)) mult = mult.pow("eeee10")
        if (hasUpgrade('s', 54)) mult = mult.times("10^^14")
        if (hasUpgrade('t', 54)) mult = mult.times("10^^30")
        if (hasUpgrade('u', 54)) mult = mult.times("10^^420")
        if (hasMilestone('re', 2)) mult = mult.times(16)
        if (hasUpgrade('v', 54)) mult = mult.tetrate(4000)
        if (hasUpgrade('re', 23)) mult = mult.times("9")
        if (hasUpgrade('re', 42)) mult = mult.times(69)
        if (hasUpgrade('re', 51)) mult = mult.times(256)
        if (hasUpgrade('w', 54)) mult = mult.tetrate(75000)
        if (hasUpgrade('x', 54)) mult = mult.times("10^^1e15")
        if (hasUpgrade('y', 54)) mult = mult.pow("10^^1e150")
        if (hasUpgrade('z', 54)) mult = mult.times("10^^1e1500")
        if (hasUpgrade('ar', 54)) mult = mult.pow("10^^^3")
        if (hasUpgrade('ba', 54)) mult = mult.pow("10^^^4")

        return mult
    },
    doReset(resettingLayer) {
        let keep = [];
        if (hasMilestone("re", 8) && resettingLayer=="re") keep.push("upgrades")
        if (layers[resettingLayer].row > this.row) layerDataReset("r", keep)
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    autoUpgrade() { if (hasMilestone("re" , 6)) return true},

    row: 5, // Row the layer is in on the tree (0 is the first row)
    passiveGeneration() { return (hasMilestone("re", 1)&&player.current!="r")?1:0 },

    hotkeys: [
        {key: "r", description: "R: Reset for Rings", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){if (hasUpgrade("ci", 54)) return false
    else return (hasChallenge("o", 21) || player[this.layer].unlocked)},
})