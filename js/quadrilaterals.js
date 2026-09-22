addLayer("q", {
    tabFormat: [
        "main-display",
        "prestige-button",
        ["microtabs", "stuff"],
        ["blank", "25px"],
    ],
    microtabs: {
        stuff: {
                        "升级": {
                            unlocked() {return (hasAchievement("a", 11))},
                    content: [
                        ["blank", "15px"],
                        ["upgrades", [1,2,3,4,5,6,7,8,9]]
                    ]
                },
            },
        },
    upgrades: {
        11: { title: "401",
        description: "获得 ×2 四边形。",
        cost: new EN("420"),
        },
        12: { title: "402",
        description: "获得 ×4 四边形、^69 灯光，钥匙获得庞大增益。",
        cost: new EN("1000"),
        unlocked() {
            return hasUpgrade("q", 11)
        }
        },
        13: { title: "403",
        description: "获得 ×16 四边形、又一次 ^69 灯光，钥匙获得疯狂增益。",
        cost: new EN("6969"),
        unlocked() {
            return hasUpgrade("q", 12)
        }
        },
        14: { title: "404",
        description: "获得 ×256 四边形、^420 灯光，钥匙获得极致增益。",
        cost: new EN("69420"),
        unlocked() {
            return hasUpgrade("q", 13)
        }
        },
        15: { title: "405",
        description: "获得 ×65,536 四边形、又一次 ^420 灯光，钥匙获得神级增益。",
        cost: new EN("7777777"),
        unlocked() {
            return hasUpgrade("q", 14)
        }
        },
        21: { title: "406",
        description: "获得 ×4.294e9 四边形、^69,420 灯光，钥匙获得最佳增益。",
        cost: new EN("1e12"),
        unlocked() {
            return hasUpgrade("q", 15)
        }
        },
        22: { title: "407",
        description: "获得 ×1.844e19 四边形、又一次 ^69,420 灯光，钥匙获得真正最佳的增益。",
        cost: new EN("3e21"),
        unlocked() {
            return hasUpgrade("q", 21)
        }
        },
        23: { title: "408",
        description: "获得 ×3.400e38 四边形、^1e10 灯光，钥匙获得真正最佳的增益。",
        cost: new EN("4e40"),
        unlocked() {
            return hasUpgrade("q", 22)
        }
        },
        24: { title: "409",
        description: "获得 ×1.157e77 四边形和 ^1e69 灯光。",
        cost: new EN("2e79"),
        unlocked() {
            return hasUpgrade("q", 23)
        }
        },
        25: { title: "410",
        description: "获得 ×1.340e154 四边形和 ^1e308 灯光。",
        cost: new EN("4e156"),
        unlocked() {
            return hasUpgrade("q", 24)
        }
        },
        31: { title: "411",
        description: "获得 ×1.797e308 四边形和灯光增益。",
        cost: new EN("4e310"),
        unlocked() {
            return hasUpgrade("q", 25)
        }
        },
        32: { title: "412",
        description: "获得 ^3 四边形和不错的灯光增益。",
        cost: new EN("1e619"),
        unlocked() {
            return hasUpgrade("q", 31)
        }
        },
        33: { title: "413",
        description: "获得 ^27 四边形和较大的灯光增益。",
        cost: new EN("1e1851"),
        unlocked() {
            return hasUpgrade("q", 32)
        }
        },
        34: { title: "414",
        description: "获得 ^19,683 四边形和更大的灯光增益。",
        cost: new EN("5e49915"),
        unlocked() {
            return hasUpgrade("q", 33)
        }
        },
        35: { title: "415",
        description: "获得 ^1e13 四边形和庞大的灯光增益。",
        cost: new EN("e496217279"),
        unlocked() {
            return hasUpgrade("q", 34)
        }
        },
        41: { title: "416",
        description: "获得 ^1e100 四边形和疯狂的灯光增益。",
        cost: new EN("e3.745e21"),
        unlocked() {
            return hasUpgrade("q", 35)
        }
        },
        42: { title: "417",
        description: "获得不错的四边形增益和极致的灯光增益。",
        cost: new EN("e3.745e121"),
        unlocked() {
            return hasUpgrade("q", 41)
        }
        },
        43: { title: "418",
        description: "获得较大的四边形增益和神级的灯光增益。",
        cost: new EN("e3.745e421"),
        unlocked() {
            return hasUpgrade("q", 42)
        }
        },
        44: { title: "419",
        description: "获得更大的四边形增益和最佳的灯光增益。",
        cost: new EN("e3e3432"),
        unlocked() {
            return hasUpgrade("q", 43)
        }
        },
        45: { title: "420",
        description: "获得庞大的四边形增益和真正最佳的灯光增益。",
        cost: new EN("e3e1003432"),
        unlocked() {
            return hasUpgrade("q", 44)
        }
        },
        51: { title: "421",
        description: "获得疯狂的四边形增益。",
        cost: new EN("eee69"),
        unlocked() {
            return hasUpgrade("q", 45)
        }
        },
        52: { title: "422",
        description: "获得极致的四边形增益。",
        cost: new EN("eee1337"),
        unlocked() {
            return hasUpgrade("q", 51)
        }
        },
        53: { title: "423",
        description: "获得神级的四边形增益。",
        cost: new EN("eee7777777"),
        unlocked() {
            return hasUpgrade("q", 52)
        }
        },
        54: { title: "424",
        description: "获得最佳的四边形增益。",
        cost: new EN("eeee42"),
        unlocked() {
            return hasUpgrade("q", 53)
        }
        },
        55: { title: "425",
        description: "洋葱升级 71 强度 ×4 并解锁 2 个新挑战。",
        cost: new EN("eeee420"),
        unlocked() {
            return player.o.points.gte("eeeee10")
        }
        },
    },
    name: "四边形", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "🔲", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        auto: false
    }},
    color: "#f70845",
    requires: new EN("eeeeee10"), // Can be a function that takes requirement increases into account
    resource: "四边形", // Name of prestige currency
    baseResource: "积分", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type() {if (hasUpgrade("ci", 54)) return "static"
    else return "normal"},    
    exponent() {if (hasUpgrade("ci", 54)) return new EN(Infinity)
    else return new EN(0)},      
    branches: ["o", "k"],
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1)
        if (hasUpgrade('q', 11)) mult = mult.times(2)
        if (hasUpgrade('q', 12)) mult = mult.times(4)
        if (hasUpgrade('q', 13)) mult = mult.times(16)
        if (hasUpgrade('q', 14)) mult = mult.times(256)
        if (hasUpgrade('q', 15)) mult = mult.times(65536)
        if (hasUpgrade('q', 21)) mult = mult.times(4.294e9)
        if (hasUpgrade('q', 22)) mult = mult.times(1.844e19)
        if (hasUpgrade('q', 23)) mult = mult.times(3.4028237e38)
        if (hasUpgrade('q', 24)) mult = mult.times(1.1579209e77)
        if (hasUpgrade('q', 25)) mult = mult.times(1.340781e154)
        if (hasUpgrade('q', 31)) mult = mult.times(1.797e308)
        if (hasUpgrade('q', 32)) mult = mult.pow(3)
        if (hasUpgrade('q', 33)) mult = mult.pow(27)
        if (hasUpgrade('q', 34)) mult = mult.pow(19683)
        if (hasUpgrade('q', 35)) mult = mult.pow(7.6255975e12)
        if (hasUpgrade('q', 41)) mult = mult.pow(1e100)
        if (hasUpgrade('q', 42)) mult = mult.pow("1e308")
        if (hasUpgrade('q', 43)) mult = mult.pow("1e3003")
        if (hasUpgrade('q', 44)) mult = mult.pow("1e1000000")
        if (hasUpgrade('q', 45)) mult = mult.pow("ee69")
        if (hasUpgrade('q', 51)) mult = mult.pow("ee1337")
        if (hasUpgrade('q', 52)) mult = mult.pow("ee7777777")
        if (hasUpgrade('q', 53)) mult = mult.pow("eee42")
        if (hasUpgrade('q', 54)) mult = mult.pow("eee420")
        if (hasUpgrade('r', 15)) mult = mult.pow("eeee10")
        if (hasUpgrade('r', 54)) mult = mult.pow("eeeeeee10")
        if (hasChallenge('o', 22)) mult = mult.pow("eeeeeeee10")
        if (hasUpgrade('s', 54)) mult = mult.times("10^^16")
        if (hasUpgrade('t', 54)) mult = mult.times("10^^33")
        if (hasUpgrade('u', 54)) mult = mult.times("10^^444")
        if (hasMilestone('re', 2)) mult = mult.times(32)
        if (hasUpgrade('v', 54)) mult = mult.tetrate(5000)
        if (hasUpgrade('w', 54)) mult = mult.tetrate(90000)
        if (hasUpgrade('x', 54)) mult = mult.times("10^^9e15")
        if (hasUpgrade('y', 54)) mult = mult.pow("10^^1e200")
        if (hasUpgrade('z', 54)) mult = mult.times("10^^1e2000")
        if (hasUpgrade('ar', 54)) mult = mult.pow("10^^^3")
        if (hasUpgrade('ba', 54)) mult = mult.pow("10^^^4")

        return mult
    },
    doReset(resettingLayer) {
        let keep = [];
        if (hasMilestone("re", 6) && resettingLayer=="re") keep.push("upgrades")
        if (layers[resettingLayer].row > this.row) layerDataReset("q", keep)
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    passiveGeneration() { return (hasMilestone("re", 1)&&player.current!="q")?1:0 },

    row: 5, // Row the layer is in on the tree (0 is the first row)
    autoUpgrade() { if (hasMilestone("re" , 4)) return true},
    hotkeys: [
        
        {key: "q", description: "Q: 重置以获得四边形", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){if (hasUpgrade("ci", 54)) return false
    else return (hasUpgrade("o", 66) || player[this.layer].unlocked)},
})