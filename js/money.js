addLayer("m", {
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
                        "里程碑": {
                            content: [
                                ["blank", "15px"],
                                "milestones"
                            ]
                        },
                },
            },
    upgrades: {
        11: { title: "326",
        description: "获得 ^2 钥匙。",
        cost: new EN("2"),

        },
        12: { title: "327",
        description: "获得 ^4 钥匙。",
        cost: new EN("2"),
        unlocked() {
            return hasUpgrade("m", 11)
        }
        },
        13: { title: "328",
        description: "获得 ^8 钥匙。",
        cost: new EN("2"),
        unlocked() {
            return hasUpgrade("m", 12)
        }
        },
        14: { title: "329",
        description: "获得 ^16 钥匙。",
        cost: new EN("2"),
        unlocked() {
            return hasUpgrade("m", 13)
        }
        },
        15: { title: "330",
        description: "获得 ^32 钥匙。",
        cost: new EN("2"),
        unlocked() {
            return hasUpgrade("m", 14)
        }
        },
        21: { title: "331",
        description: "获得 ^64 钥匙。",
        cost: new EN("3"),
        unlocked() {
            return hasUpgrade("k", 43)
        }
        },
        22: { title: "332",
        description: "获得 ^128 钥匙。",
        cost: new EN("3"),
        unlocked() {
            return hasUpgrade("m", 21)
        }
        },
        23: { title: "333",
        description: "获得 ^256 钥匙。",
        cost: new EN("3"),
        unlocked() {
            return hasUpgrade("m", 22)
        }
        },
        24: { title: "334",
        description: "获得 ^512 钥匙。",
        cost: new EN("3"),
        unlocked() {
            return hasUpgrade("m", 23)
        }
        },
        25: { title: "335",
        description: "获得 ^1,024 钥匙并提升积分获取。",
        cost: new EN("4"),
        unlocked() {
            return hasUpgrade("m", 24)
        }
        },
        31: { title: "336",
        description: "获得 ^2,048 钥匙并再次提升积分获取。",
        cost: new EN("4"),
        unlocked() {
            return hasUpgrade("m", 25)
        }
        },
        32: { title: "337",
        description: "获得 ^4,096 钥匙。",
        cost: new EN("5"),
        unlocked() {
            return hasUpgrade("m", 31)
        }
        },
        33: { title: "338",
        description: "获得 ^8,192 钥匙。",
        cost: new EN("5"),
        unlocked() {
            return hasUpgrade("m", 32)
        }
        },
        34: { title: "339",
        description: "获得 ^16,384 钥匙。",
        cost: new EN("6"),
        unlocked() {
            return hasUpgrade("m", 33)
        }
        },
        35: { title: "340",
        description: "获得 ^32,768 钥匙。",
        cost: new EN("7"),
        unlocked() {
            return hasUpgrade("m", 34)
        }
        },
        41: { title: "341",
        description: "获得 ^65,536 钥匙。",
        cost: new EN("11"),
        unlocked() {
            return hasUpgrade("k", 55)
        }
        },
        42: { title: "342",
        description: "获得 ^131,072 钥匙。",
        cost: new EN("13"),
        unlocked() {
            return hasUpgrade("m", 41)
        }
        },
        43: { title: "343",
        description: "获得 ^262,144 钥匙。",
        cost: new EN("15"),
        unlocked() {
            return hasUpgrade("m", 42)
        }
        },
        44: { title: "344",
        description: "获得 ^524,288 钥匙。",
        cost: new EN("18"),
        unlocked() {
            return hasUpgrade("m", 43)
        }
        },
        45: { title: "345",
        description: "获得 ^1,048,576 钥匙并提升积分获取。",
        cost: new EN("18"),
        unlocked() {
            return hasUpgrade("m", 44)
        }
        },
        51: { title: "346",
        description: "获得 ^2,097,152 钥匙和 ^2 灯光。",
        cost: new EN("26"),
        unlocked() {
            return hasUpgrade("n", 45)
        }
        },
        52: { title: "347",
        description: "获得 ^4,194,304 钥匙和 ^2 灯光。",
        cost: new EN("32"),
        unlocked() {
            return hasUpgrade("m", 51)
        }
        },
        53: { title: "348",
        description: "获得 ^8,388,608 钥匙和 ^2 灯光。",
        cost: new EN("40"),
        unlocked() {
            return hasUpgrade("m", 52)
        }
        },
        54: { title: "349",
        description: "获得 ^16,777,216 钥匙和 ^2 灯光。",
        cost: new EN("50"),
        unlocked() {
            return hasUpgrade("m", 53)
        }
        },
        55: { title: "350",
        description: "获得 ^3 灯光并提升积分。",
        cost: new EN("64"),
        unlocked() {
            return hasUpgrade("m", 54)
        }
        },
    /*
      use format(num) whenever displaying a number
    */
   
  },
    name: "金钱", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "💵", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        auto: false
    }},
    color: "#118C4F",
    requires: new EN("e3.750e9"), // Can be a function that takes requirement increases into account
    resource: "金钱", // Name of prestige currency
    baseResource: "钥匙", // Name of resource prestige is based on
    baseAmount() {return player.k.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    branches: ["l", "i", "h"],
    exponent() {if (hasUpgrade("z", 53)) return new EN(Infinity)
    else return new EN(69)},     
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    row: 4, // Row the layer is in on the tree (0 is the first row)
    resetsNothing() {return hasUpgrade("o", 25)},
    hotkeys: [
        {key: "m", description: "M: 重置以获得金钱", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    canBuyMax() { return hasMilestone("m", 1) },
    milestones: {
        1: {requirementDescription: "8 金钱",
         effectDescription: "你可以最大购买金钱。",
            done() { return player.m.points.gte(8)},},
   },
   layerShown(){if (hasUpgrade("z", 53)) return false
    else return (hasUpgrade("l", 45) || player[this.layer].unlocked)},
    autoPrestige() {
        return hasMilestone("o", 2)
    },
    doReset(resettingLayer) {
        let keep = [];
        if (hasMilestone("o", 6) && resettingLayer=="o") keep.push("milestones")
        if (hasMilestone("o", 6) && resettingLayer=="o") keep.push("upgrades")
        if (layers[resettingLayer].row > this.row) layerDataReset("m", keep)
    },
    autoUpgrade() { if (hasUpgrade("o" , 25)) return true},
})