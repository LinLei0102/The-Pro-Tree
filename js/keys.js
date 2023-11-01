addLayer("k", {
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
                        ["raw-html", () => `<h4 style="opacity:.5">You will only be able to get 1 key at a time.<br> But you can spend it on upgrades to increase.</h4>`],
                        ["upgrades", [1,2,3,4,5,6,7,8,9]]
                    ]
                },
            },
        },
    upgrades: {
        11: { title: "276",
        description: "Point gain is increased by a lot and gain x2 Keys.",
        cost: new EN("1"),

        },
        12: { title: "277",
        description: "Square Key Gain.",
        cost: new EN("100"),
        unlocked() {
            return hasUpgrade("k", 11)
        }
        },
        13: { title: "278",
        description: "Square Key Gain Again and also point gain is increased.",
        cost: new EN("1337"),
        unlocked() {
            return hasUpgrade("k", 12)
        }
        },
        14: { title: "279",
        description: "Square Key Gain yet again.",
        cost: new EN("6969"),
        unlocked() {
            return hasUpgrade("k", 13)
        }
        },
        15: { title: "280",
        description: "Square Key Gain yet again and again and point gain is increased.",
        cost: new EN("69420"),
        unlocked() {
            return hasUpgrade("k", 14)
        }
        },
        21: { title: "281",
        description: "Cube Key gain.",
        cost: new EN("1e7"),
        unlocked() {
            return hasUpgrade("k", 15)
        }
        },
        22: { title: "282",
        description: "Cube Key gain again.",
        cost: new EN("1e17"),
        unlocked() {
            return hasUpgrade("k", 21)
        }
        },
        23: { title: "283",
        description: "Cube Key gain yet again.",
        cost: new EN("5e45"),
        unlocked() {
            return hasUpgrade("k", 22)
        }
        },
        24: { title: "284",
        description: "Cube Key gain yet again and again also increases point gain.",
        cost: new EN("3e132"),
        unlocked() {
            return hasUpgrade("k", 23)
        }
        },
        25: { title: "285",
        description: "Cube Key gain yet again and again and again.",
        cost: new EN("3e392"),
        unlocked() {
            return hasUpgrade("k", 24)
        }
        },
        31: { title: "286",
        description: "^4 Key gain.",
        cost: new EN("5e1172"),
        unlocked() {
            return hasUpgrade("k", 25)
        }
        },
        32: { title: "287",
        description: "^4 Key gain.",
        cost: new EN("1e4684"),
        unlocked() {
            return hasUpgrade("k", 31)
        }
        },
        33: { title: "288",
        description: "^4 Key gain and increases point gain even more.",
        cost: new EN("1e18729"),
        unlocked() {
            return hasUpgrade("k", 32)
        }
        },
        34: { title: "289",
        description: "^4 Key gain.",
        cost: new EN("1e74908"),
        unlocked() {
            return hasUpgrade("k", 33)
        }
        },
        35: { title: "290",
        description: "^4 Key gain.",
        cost: new EN("1e299626"),
        unlocked() {
            return hasUpgrade("k", 34)
        }
        },
        41: { title: "291",
        description: "^5 Key gain and increase point gain.",
        cost: new EN("1e1198496"),
        unlocked() {
            return hasUpgrade("k", 35)
        }
        },
        42: { title: "292",
        description: "^5 Key gain and increase point gain.",
        cost: new EN("1e5992474"),
        unlocked() {
            return hasUpgrade("k", 41)
        }
        },
        43: { title: "293",
        description: "^5 Key gain and increase point gain.",
        cost: new EN("1e19981181"),
        unlocked() {
            return hasUpgrade("k", 42)
        }
        },
        44: { title: "294",
        description: "^5 Key gain and increase point gain.",
        cost: new EN("1e79905898"),
        unlocked() {
            return hasUpgrade("k", 43)
        }
        },
        45: { title: "295",
        description: "^10 Key gain! Increase point gain by a lot.",
        cost: new EN("1e379529481"),
        unlocked() {
            return hasUpgrade("k", 44)
        }
        },
        51: { title: "296",
        description: "^100 Key gain!",
        cost: new EN("e1.227e14"),
        unlocked() {
            return hasUpgrade("m", 15)
        }
        },
        52: { title: "297",
        description: "^1,000 Key gain!",
        cost: new EN("e1.227e16"),
        unlocked() {
            return hasUpgrade("k", 51)
        }
        },
        53: { title: "298",
        description: "^10,000 Key gain!",
        cost: new EN("e1.227e19"),
        unlocked() {
            return hasUpgrade("k", 52)
        }
        },
        54: { title: "299",
        description: "^100,000 Key gain!",
        cost: new EN("e1.317e32"),
        unlocked() {
            return hasUpgrade("m", 24)
        }
        },
        55: { title: "300",
        description: "^1e10 Key gain! Increase point gain also.",
        cost: new EN("e4.978e59"),
        unlocked() {
            return hasUpgrade("m", 35)
        }
        },
        61: { title: "?",
        description: "Increase something.",
        cost: new EN("25000"),
        unlocked() {
            return inChallenge("o", 11)
        }
        },
        62: { title: "?",
        description: "Increase even more.",
        cost: new EN("1e74"),
        unlocked() {
            return inChallenge("o", 11)
        }
        },
        63: { title: "?",
        description: "Increase a lot more.",
        cost: new EN("1e1411"),
        unlocked() {
            return inChallenge("o", 11)
        }
        },
        64: { title: "?",
        description: "Increase by more more and more.",
        cost: new EN("1e70831"),
        unlocked() {
            return inChallenge("o", 11)
        }
        },
        65: { title: "?",
        description: "uNlOcK sOmEthIng.",
        cost: new EN("e5e9"),
        unlocked() {
            return inChallenge("o", 11)
        }
        },
        66: { title: "?",
        description: "Gain even more keys and lights.",
        cost: new EN("100"),
        unlocked() {
            return inChallenge("z", 11)
        }
        },
    },
    /*
      use format(num) whenever displaying a number
    */
   
    name: "Keys", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "🔑", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        auto: false
    }},
    color: "#b6c0b3",
    requires: new EN("eee9"), // Can be a function that takes requirement increases into account
    resource: "Keys", // Name of prestige currency
    baseResource: "Points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type() {if (hasUpgrade("z", 45)) return "static"
    else return "normal"},    
    exponent() {if (hasUpgrade("z", 45)) return new EN(Infinity)
    else return new EN(0)},       
    branches: ["j", "e", "f"],
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1)
        if (hasUpgrade('k', 11)) mult = mult.times(2)
        if (hasUpgrade('k', 12)) mult = mult.pow(2)
        if (hasUpgrade('k', 13)) mult = mult.pow(2)
        if (hasUpgrade('k', 14)) mult = mult.pow(2)
        if (hasUpgrade('k', 15)) mult = mult.pow(2)
        if (hasUpgrade('k', 21)) mult = mult.pow(3)
        if (hasUpgrade('k', 22)) mult = mult.pow(3)
        if (hasUpgrade('k', 23)) mult = mult.pow(3)
        if (hasUpgrade('k', 24)) mult = mult.pow(3)
        if (hasUpgrade('k', 25)) mult = mult.pow(3)
        if (hasUpgrade('k', 31)) mult = mult.pow(4)
        if (hasUpgrade('k', 32)) mult = mult.pow(4)
        if (hasUpgrade('k', 33)) mult = mult.pow(4)
        if (hasUpgrade('k', 34)) mult = mult.pow(4)
        if (hasUpgrade('k', 35)) mult = mult.pow(4)
        if (hasUpgrade('k', 41)) mult = mult.pow(5)
        if (hasUpgrade('k', 42)) mult = mult.pow(5)
        if (hasUpgrade('k', 43)) mult = mult.pow(5)
        if (hasUpgrade('k', 44)) mult = mult.pow(5)
        if (hasUpgrade('k', 45)) mult = mult.pow(10)
        if (hasUpgrade('m', 11)) mult = mult.pow(2)
        if (hasUpgrade('m', 12)) mult = mult.pow(4)
        if (hasUpgrade('m', 13)) mult = mult.pow(8)
        if (hasUpgrade('m', 14)) mult = mult.pow(16)
        if (hasUpgrade('m', 15)) mult = mult.pow(32)
        if (hasUpgrade('k', 51)) mult = mult.pow(100)
        if (hasUpgrade('k', 52)) mult = mult.pow(1000)
        if (hasUpgrade('k', 53)) mult = mult.pow(10000)
        if (hasUpgrade('k', 54)) mult = mult.pow(100000)
        if (hasUpgrade('k', 55)) mult = mult.pow(1e10)
        if (hasUpgrade('m', 21)) mult = mult.pow(64)
        if (hasUpgrade('m', 22)) mult = mult.pow(128)
        if (hasUpgrade('m', 23)) mult = mult.pow(256)
        if (hasUpgrade('m', 24)) mult = mult.pow(512)
        if (hasUpgrade('m', 25)) mult = mult.pow(1024)
        if (hasUpgrade('m', 31)) mult = mult.pow(2048)
        if (hasUpgrade('m', 32)) mult = mult.pow(4096)
        if (hasUpgrade('m', 33)) mult = mult.pow(8192)
        if (hasUpgrade('m', 34)) mult = mult.pow(16384)
        if (hasUpgrade('m', 35)) mult = mult.pow(32768)
        if (hasUpgrade('m', 41)) mult = mult.pow(65536)
        if (hasUpgrade('m', 42)) mult = mult.pow(131072)
        if (hasUpgrade('m', 43)) mult = mult.pow(262144)
        if (hasUpgrade('m', 44)) mult = mult.pow(524288)
        if (hasUpgrade('m', 45)) mult = mult.pow(1048576)
        if (hasUpgrade('m', 51)) mult = mult.pow(2097152)
        if (hasUpgrade('m', 52)) mult = mult.pow(4194304)
        if (hasUpgrade('m', 53)) mult = mult.pow(8388608)
        if (hasUpgrade('m', 54)) mult = mult.pow(16777216)
        if (hasUpgrade("o", 11)) mult = mult.pow("1.1")
        if (hasUpgrade("o", 12)) mult = mult.pow("2")
        if (hasUpgrade("o", 13)) mult = mult.pow("3")
        if (hasUpgrade('o', 14)) mult = mult.times(64)
        if (hasUpgrade("o", 15)) mult = mult.pow("4")
        if (hasUpgrade("o", 21)) mult = mult.pow("6")
        if (hasUpgrade("o", 22)) mult = mult.pow("36")
        if (hasUpgrade("o", 23)) mult = mult.pow("256")
        if (hasUpgrade("o", 24)) mult = mult.pow("3125")
        if (hasUpgrade("o", 25)) mult = mult.pow("46656")
        if (hasUpgrade("o", 31)) mult = mult.pow("16777216")
        if (hasUpgrade("o", 32)) mult = mult.pow("1e10")
        if (hasUpgrade("o", 33)) mult = mult.pow("3e14")
        if (hasUpgrade("o", 34)) mult = mult.pow("1.8e19")
        if (hasUpgrade("o", 35)) mult = mult.pow("1e26")
        if (hasUpgrade("o", 41)) mult = mult.pow("1e35")
        if (hasUpgrade("o", 42)) mult = mult.pow("2e44")
        if (hasUpgrade("o", 43)) mult = mult.pow("1e69")
        if (hasUpgrade("o", 44)) mult = mult.pow("1e100")
        if (hasUpgrade("o", 45)) mult = mult.pow("1e153")
        if (hasUpgrade("o", 51)) mult = mult.pow("1e308")
        if (hasUpgrade("o", 52)) mult = mult.pow("1e420")
        if (hasUpgrade("o", 53)) mult = mult.pow("1e666")
        if (hasUpgrade("o", 54)) mult = mult.pow("1e1000")
        if (hasUpgrade("o", 55)) mult = mult.pow("1e3003")
        if (inChallenge("o", 11)) mult = mult.pow("4e-6013")
        if (hasUpgrade('j', 61)) mult = mult.times(69)
        if (hasUpgrade('k', 61)) mult = mult.times(6.969e69)
        if (hasUpgrade('k', 62)) mult = mult.times("1e1337")
        if (hasUpgrade('k', 63)) mult = mult.times("1e69420")
        if (hasUpgrade('k', 64)) mult = mult.times("ee10")
        if (hasUpgrade('k', 65)) mult = mult.times("ee20")   
        if (hasUpgrade('j', 62)) mult = mult.times("ee40")
        if (hasUpgrade('j', 63)) mult = mult.times("ee80") 
        if (hasUpgrade('j', 64)) mult = mult.times("ee160")   
        if (hasUpgrade('j', 65)) mult = mult.times("ee256")   
        if (hasUpgrade('o', 61)) mult = mult.times("ee309")
        if (hasChallenge("o", 11)) mult = mult.pow("ee6")
        if (hasChallenge("o", 12)) mult = mult.pow("ee10")
        if (hasUpgrade('o', 64)) mult = mult.times("eee20")
        if (hasChallenge("o", 13)) mult = mult.pow("ee100")
        if (hasUpgrade("q", 12)) mult = mult.pow("ee1000")
        if (hasUpgrade("q", 13)) mult = mult.pow("ee1000000")
        if (hasUpgrade("q", 14)) mult = mult.pow("eee10")
        if (hasUpgrade("q", 15)) mult = mult.pow("eee1000")
        if (hasUpgrade("q", 21)) mult = mult.pow("eee1000000")
        if (hasUpgrade("q", 22)) mult = mult.pow("eeee9")
        if (hasUpgrade("q", 23)) mult = mult.pow("eeee10")
        if (hasChallenge("o", 14)) mult = mult.pow("eeeee10")
        if (hasUpgrade("r", 25)) mult = mult.pow("eeeeeeee10")
        if (hasChallenge('o', 22)) mult = mult.pow("eeeeeeeeee10")
        if (hasUpgrade('s', 54)) mult = mult.times("10^^20")
        if (hasUpgrade('t', 54)) mult = mult.times("10^^40")
        if (hasUpgrade('u', 54)) mult = mult.times("10^^500")
        if (hasUpgrade('w', 54)) mult = mult.tetrate(1e7)
        if (hasUpgrade('x', 54)) mult = mult.times("10^^1e20")
        if (hasUpgrade('y', 54)) mult = mult.pow("10^^1e308")
        if (inChallenge("z", 11)) mult = mult.pow("0.001")
        if (hasChallenge("k", 66)) mult = mult.times("ee100")
        return mult
    },
    autoUpgrade() { if (hasUpgrade("o" , 13)) return true},
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    row: 4, // Row the layer is in on the tree (0 is the first row)
    passiveGeneration() { 
        if (hasUpgrade("z", 45)) return (hasUpgrade("z", 45)?0:0)
        if (hasMilestone("o", 1)) return (hasMilestone("o", 1)?1:0)
        }, 
    hotkeys: [
        {key: "k", description: "K: Reset for Keys", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    
    layerShown(){if (hasUpgrade("z", 45)) return false
    else return (hasUpgrade("p", 75) || player[this.layer].unlocked)},
    doReset(resettingLayer) {
        let keep = [];
        if (hasMilestone("o", 4) && resettingLayer=="o") keep.push("upgrades")
        if (layers[resettingLayer].row > this.row) layerDataReset("k", keep)
    },
})