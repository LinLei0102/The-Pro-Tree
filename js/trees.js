addLayer("t", {
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
        11: { title: "476",
        description: "Gain x4 Trees.",
        cost: new EN("500"),
        },
        12: { title: "477",
        description: "Gain x256 Trees.",
        cost: new EN("1000"),
        unlocked() {
            return hasUpgrade("t", 11)
        }
        },
        13: { title: "478",
        description: "Gain x65,536 Trees.",
        cost: new EN("400000"),
        unlocked() {
            return hasUpgrade("t", 12)
        }
        },
        14: { title: "479",
        description: "Gain x2.814e14 Trees.",
        cost: new EN("2e10"),
        unlocked() {
            return hasUpgrade("t", 13)
        }
        },
        15: { title: "480",
        description: "Gain x7.922e28 Trees.",
        cost: new EN("5e24"),
        unlocked() {
            return hasUpgrade("t", 14)
        }
        },
        21: { title: "481",
        description: "Gain x3.940e115 Trees.",
        cost: new EN("4e53"),
        unlocked() {
            return hasUpgrade("t", 15)
        }
        },
        22: { title: "482",
        description: "Gain x1.552e231 Trees.",
        cost: new EN("1e169"),
        unlocked() {
            return hasUpgrade("t", 21)
        }
        },
        23: { title: "483",
        description: "Gain x3.5e693 Trees.",
        cost: new EN("1e400"),
        unlocked() {
            return hasUpgrade("t", 22)
        }
        },
        24: { title: "484",
        description: "Gain x7e1,386 Trees.",
        cost: new EN("1e1094"),
        unlocked() {
            return hasUpgrade("t", 23)
        }
        },
        25: { title: "485",
        description: "Gain x2.8e5,548 Trees.",
        cost: new EN("1e2480"),
        unlocked() {
            return hasUpgrade("t", 24)
        }
        },
        31: { title: "486",
        description: "Gain ^5 Trees.",
        cost: new EN("1e8029"),
        unlocked() {
            return hasUpgrade("t", 25)
        }
        },
        32: { title: "487",
        description: "Gain ^25 Trees.",
        cost: new EN("5e40136"),
        unlocked() {
            return hasUpgrade("t", 31)
        }
        },
        33: { title: "488",
        description: "Gain ^625 Trees.",
        cost: new EN("1e1003352"),
        unlocked() {
            return hasUpgrade("t", 32)
        }
        },
        34: { title: "489",
        description: "Gain ^9.536e13 Trees.",
        cost: new EN("4e318546786"),
        unlocked() {
            return hasUpgrade("t", 33)
        }
        },
        35: { title: "490",
        description: "Gain ^1e308 Trees.",
        cost: new EN("e2.989e22"),
        unlocked() {
            return hasUpgrade("t", 34)
        }
        },
        41: { title: "491",
        description: "Gain a good Trees boost.",
        cost: new EN("e2.989e330"),
        unlocked() {
            return hasUpgrade("t", 35)
        }
        },
        42: { title: "492",
        description: "Gain a big Trees boost.",
        cost: new EN("eee9"),
        unlocked() {
            return hasUpgrade("t", 41)
        }
        },
        43: { title: "493",
        description: "Gain a bigger Trees boost.",
        cost: new EN("eee420"),
        unlocked() {
            return hasUpgrade("t", 42)
        }
        },
        44: { title: "494",
        description: "Gain a massive Trees boost.",
        cost: new EN("eeee9"),
        unlocked() {
            return hasUpgrade("t", 43)
        }
        },
        45: { title: "495",
        description: "Gain a insane Trees boost.",
        cost: new EN("eeee999999999"),
        unlocked() {
            return hasUpgrade("t", 44)
        }
        },
        51: { title: "496",
        description: "Gain a EXTREME Trees boost.",
        cost: new EN("10^^7"),
        unlocked() {
            return hasUpgrade("t", 45)
        }
        },
        52: { title: "497",
        description: "Gain a GOD Trees boost.",
        cost: new EN("10^^10"),
        unlocked() {
            return hasUpgrade("t", 51)
        }
        },
        53: { title: "498",
        description: "Gain a BEST Trees boost.",
        cost: new EN("10^^13"),
        unlocked() {
            return hasUpgrade("t", 52)
        }
        },
        54: { title: "499",
        description: "Gain a TRUE BEST Trees boost and increase other currencies.",
        cost: new EN("10^^16"),
        unlocked() {
            return hasUpgrade("t", 53)
        }
        },
        55: { title: "500",
        description: "The Onion Upgrade 71 is x65,536 more powerful and unlock the final onion challenge!",
        cost: new EN("10^^20"),
        unlocked() {
            return player.o.points.gte("10^^40")
        }
        },
    },
    name: "Trees", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "🌳", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        auto: false
    }},
    color: "#42692f",
    requires: new EN("10^^69"), // Can be a function that takes requirement increases into account
    resource: "Trees", // Name of prestige currency
    baseResource: "Points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type() {if (hasUpgrade("du", 54)) return "static"
    else return "normal"},    
    exponent() {if (hasUpgrade("du", 54)) return new EN(Infinity)
    else return new EN(0)},  
    branches: ["s", "n"],
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1)
        if (hasUpgrade('t', 11)) mult = mult.times(4)
        if (hasUpgrade('t', 12)) mult = mult.times(256)
        if (hasUpgrade('t', 13)) mult = mult.times(65536)
        if (hasUpgrade('t', 14)) mult = mult.times(2.814e14)
        if (hasUpgrade('t', 15)) mult = mult.times(7.922e28)
        if (hasUpgrade('t', 21)) mult = mult.times(3.940201e115)
        if (hasUpgrade('t', 22)) mult = mult.times(1.552e231)
        if (hasUpgrade('t', 23)) mult = mult.times("3.5e693")
        if (hasUpgrade('t', 24)) mult = mult.times("7e1386")
        if (hasUpgrade('t', 25)) mult = mult.times("2.8e5548")
        if (hasUpgrade('t', 31)) mult = mult.pow(5)
        if (hasUpgrade('t', 32)) mult = mult.pow(25)
        if (hasUpgrade('t', 33)) mult = mult.pow(625)
        if (hasUpgrade('t', 34)) mult = mult.pow(9.536e13)
        if (hasUpgrade('t', 35)) mult = mult.pow(1e308)
        if (hasUpgrade('t', 41)) mult = mult.pow("ee9")
        if (hasUpgrade('t', 42)) mult = mult.pow("ee420")
        if (hasUpgrade('t', 43)) mult = mult.pow("eee9")
        if (hasUpgrade('t', 44)) mult = mult.pow("eee999999999")
        if (hasUpgrade('t', 45)) mult = mult.pow("10^^6")
        if (hasUpgrade('t', 51)) mult = mult.pow("10^^9")
        if (hasUpgrade('t', 52)) mult = mult.pow("10^^12")
        if (hasUpgrade('t', 53)) mult = mult.pow("10^^15")
        if (hasUpgrade('t', 54)) mult = mult.pow("10^^19")
        if (hasUpgrade('u', 54)) mult = mult.pow("10^^308")
        if (hasMilestone('re', 2)) mult = mult.times(4)
        if (hasUpgrade('v', 54)) mult = mult.tetrate(2000)
        if (hasUpgrade('re', 23)) mult = mult.times("3")
        if (hasUpgrade('re', 25)) mult = mult.times("2")
        if (hasUpgrade('re', 42)) mult = mult.times(69)
        if (hasUpgrade('re', 51)) mult = mult.times(16)
        if (hasUpgrade('w', 54)) mult = mult.tetrate(40000)
        if (hasUpgrade('x', 54)) mult = mult.times("10^^1e13")
        if (hasUpgrade('y', 54)) mult = mult.pow("10^^1e70")
        if (hasUpgrade('z', 54)) mult = mult.times("10^^1e1000")
        if (hasUpgrade('ar', 54)) mult = mult.pow("10^^^3")
        if (hasUpgrade('ba', 54)) mult = mult.pow("10^^^4")
        if (hasUpgrade('ci', 54)) mult = mult.times("10^^^6")

        return mult
    },
    autoUpgrade() { if (hasMilestone("re" , 8)) return true},
    doReset(resettingLayer) {
        let keep = [];
        if (hasMilestone("re", 9) && resettingLayer=="re") keep.push("upgrades")
        if (layers[resettingLayer].row > this.row) layerDataReset("t", keep)
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    row: 5, // Row the layer is in on the tree (0 is the first row)
    passiveGeneration() { return (hasMilestone("re", 1)&&player.current!="t")?1:0 },
    hotkeys: [
        {key: "t", description: "T: Reset for Trees", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){if (hasUpgrade("du", 54)) return false
    else return (hasUpgrade("s", 55) || player[this.layer].unlocked)},
})