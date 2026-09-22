addLayer("f", {
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
                        ["raw-html", () => `<h4 style="opacity:.5">你会看到挑战，它们基本上会降低产出。<br> 但完成它会获得奖励！</h4>`],
                        ["upgrades", [1,2,3,4,5,6,7,8,9]]
                    ]
                },
                        "里程碑": {
                            content: [
                                ["blank", "15px"],
                                "milestones"
                            ]
                        },
                        "挑战": {
                            unlocked() {return (hasUpgrade("e", 35))},
                            content: [
                                ["blank", "15px"],
                                "challenges"
                            ]
            },
        },
    },
    upgrades: {
        11: { title: "151",
        description: "1e100× 积分，并保留人员升级。",
        cost: new EN("1"),

        },
        12: { title: "152",
        description: "根据水果和自动购买骰子获得更多积分。",
        cost: new EN("2"),
        effect() {
            return player[this.layer].points.add(1e10).pow(0.420)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        unlocked() {
            return hasUpgrade("f", 11)
        }
        },
        13: { title: "153",
        description: "1e150× 积分。",
        cost: new EN("3"),
        unlocked() {
            return hasUpgrade("f", 12)
        }
        },
        14: { title: "154",
        description: "1e123× 按钮能量、人员。",
        cost: new EN("10"),
        unlocked() {
            return hasUpgrade("f", 13)
        }
        },
        15: { title: "155",
        description: "1e10× 奖杯，1e25× 草。",
        cost: new EN("16"),
        unlocked() {
            return hasUpgrade("f", 14)
        }
        },
        21: { title: "156",
        description: "1e200× 积分。",
        cost: new EN("25"),
        unlocked() {
            return hasUpgrade("f", 15)
        }
        },
        22: { title: "157",
        description: "^1.024 人员。",
        cost: new EN("69"),
        unlocked() {
            return hasUpgrade("f", 21)
        }
        },
        23: { title: "158",
        description: "0× 积分（玩笑）",
        cost: new EN("100"),
        unlocked() {
            return hasUpgrade("f", 22)
        }
        },
        24: { title: "159",
        description: "每项升级 = 1,000× 积分。",
        effect() {
            let effect = ExpantaNum.pow(1000, player.f.upgrades.length)
            return effect
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        cost: new EN("200"),
        unlocked() {
            return hasUpgrade("f", 23)
        }
        },
        25: { title: "160",
        description: "根据积分获得更多水果。",
        cost: new EN("250"),
        effect() {
            return player.points.add(1).pow(0.000001)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        unlocked() {
            return hasUpgrade("f", 24)
        }
        },
        31: { title: "161",
        description: "1e300× 积分。",
        cost: new EN("300"),
        unlocked() {
            return hasUpgrade("f", 25)
        }
        },
        32: { title: "162",
        description: "1e200× 积分。",
        cost: new EN("666"),
        unlocked() {
            return hasUpgrade("f", 31)
        }
        },
        33: { title: "163",
        description: "双倍水果。",
        cost: new EN("1337"),
        unlocked() {
            return hasUpgrade("f", 32)
        }
        },
        34: { title: "164",
        description: "三倍水果。",
        cost: new EN("2500"),
        unlocked() {
            return hasUpgrade("f", 33)
        }
        },
        35: { title: "165",
        description: "双倍水果获取、1e100× 积分，并在按钮能量层解锁另一个挑战。",
        cost: new EN("15000"),
        unlocked() {
            return hasUpgrade("f", 34)
        }
        },
        41: { title: "166",
        description: "1e20,000,000× 积分。",
        cost: new EN("1e132229"),
        unlocked() {
            return hasUpgrade("h", 35)
        }
        },
        42: { title: "167",
        description: "^1.005 积分。",
        cost: new EN("1e151543"),
        unlocked() {
            return hasUpgrade("f", 41)
        }
        },
        43: { title: "168",
        description: "1e50,000,000× 积分。",
        cost: new EN("1e175078"),
        unlocked() {
            return hasUpgrade("f", 42)
        }
        },
        44: { title: "169",
        description: "1J10× 积分（玩笑）",
        cost: new EN("1e234271"),
        unlocked() {
            return hasUpgrade("f", 43)
        }
        },
        45: { title: "170",
        description: "1e60,070,000× 积分，并解锁一个新层。",
        cost: new EN("1e234317"),
        unlocked() {
            return hasUpgrade("f", 44)
        }
        },
        51: { title: "171",
        description: "以较小幅度加速。",
        cost: new EN("e1e21"),
        unlocked() {
            return hasUpgrade("j", 45)
        }
        },
        52: { title: "172",
        description: "再次以较小幅度加速。",
        cost: new EN("e1e22"),
        unlocked() {
            return hasUpgrade("f", 51)
        }
        },
        53: { title: "173",
        description: "再一次以较小幅度加速。",
        cost: new EN("e3e23"),
        unlocked() {
            return hasUpgrade("f", 52)
        }
        },
        54: { title: "174",
        description: "再一次又一次地以较小幅度加速。",
        cost: new EN("e3e24"),
        unlocked() {
            return hasUpgrade("f", 53)
        }
        },
        55: { title: "175",
        description: "再一次又一次又一次地以较小幅度加速。",
        cost: new EN("e1e26"),
        unlocked() {
            return hasUpgrade("f", 53)
        }
        },
        61: { title: "?",
        description: "1e500,000,000× 积分。",
        cost: new EN("1e72"),
        unlocked() {
            return hasUpgrade("d", 61)
        }
        },
    },
    milestones: {
        1: {
            requirementDescription: "1 总水果",
            effectDescription: "每秒获得 100% 草和奖杯。",
            done() { return player.f.points.gte(1) }
        },
                2: {requirementDescription: "8 总水果",
             effectDescription: "骰子不重置任何内容。",
                done() { return player.f.total.gte(8)},},
                3: {requirementDescription: "15 总水果",
             effectDescription: "在按钮能量层解锁一个挑战。",
                done() { return player.f.total.gte(15)},},
    },
    challenges: {
        11: {
            name: "解析",
            challengeDescription: "将人员、按钮能量、草和奖杯提升至 ^0.001。",
            goalDescription: "1e26,159,020 积分。",
            rewardDescription: "获得 ^1.01 积分。",
            canComplete: function() {return player.points.gte("e26159020")},
            unlocked() { return (hasUpgrade('e', 35)) },
        },
        12: {
            name: "分裂",
            challengeDescription: "将人员、按钮能量、草、奖杯和积分提升至 ^0.1。",
            goalDescription: "1e28,825 积分。",
            rewardDescription: "解锁一个新层并获得 ^1.02 积分。",
            canComplete: function() {return player.points.gte("e28825")},
            unlocked() { return (hasChallenge('f', 11)) },
    }},
    effect(){

    },
    effect(){
        return ExpantaNum.pow(2, player[this.layer].points)
        /*
          you should use this.layer instead of <layerID>
          Decimal.pow(num1, num2) is an easier way to do
          num1.pow(num2)
        */
      },
      effect(){
        return player[this.layer].points.max(1).pow(5e69).log10().max(1)
      },
      effectDescription(){

},
effectDescription(){
    return "使积分获取乘以 " + format(tmp[this.layer].effect) 
    /*
      use format(num) whenever displaying a number
    */
   
  },
    name: "水果", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "🍇", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        auto: false
    }},
    color: "#800080",
    requires: new EN("1e499"), // Can be a function that takes requirement increases into account
    resource: "水果", // Name of prestige currency
    baseResource: "草", // Name of resource prestige is based on
    baseAmount() {return player.g.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    branches: ["c"],
    exponent: 0.01, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1)
     if (hasUpgrade('f', 33)) mult = mult.times(2)
     if (hasUpgrade('f', 34)) mult = mult.times(3)
     if (hasUpgrade('f', 35)) mult = mult.times(2)
     if (hasUpgrade('g', 41)) mult = mult.pow(1.01)
     if (hasUpgrade('g', 53)) mult = mult.times(69)
     if (inChallenge("j", 11)) mult = mult.pow(0.1)

        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    row: 3, // Row the layer is in on the tree (0 is the first row)
    passiveGeneration() { 
        if (hasUpgrade("z", 31)) return (hasUpgrade("z", 31)?0:0)
        if (hasMilestone("j", 1)) return (hasMilestone("j", 1)?1:0)
        },    
        doReset(resettingLayer) {
        let keep = [];
        if (hasMilestone("j", 2) && resettingLayer=="j", "k", "l", "m", "n") keep.push("milestones")
        if (hasMilestone("j", 2) && resettingLayer=="j", "k", "l", "m", "n") keep.push("upgrades")
        if (hasMilestone("j", 2) && resettingLayer=="j", "k", "l", "m", "n") keep.push("challenges")
        if (layers[resettingLayer].row > this.row) layerDataReset("f", keep)
    },
    hotkeys: [
        {key: "f", description: "F: 重置获取水果", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){if (hasUpgrade("z", 31)) return false
    else return (hasUpgrade("d", 35) || player[this.layer].unlocked)},
})