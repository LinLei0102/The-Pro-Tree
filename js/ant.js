addLayer("ant", {
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
        return player[this.layer].points.max(1).pow(500).log10().max(1)
      },
      effectDescription(){

},
effectDescription(){
    return "使积分获取乘以 " + format(tmp[this.layer].effect)
    /*
      use format(num) whenever displaying a number
    */
  },
  doReset(resettingLayer) {
    let keep = [];
    if (hasMilestone("g", 2) && resettingLayer=="g", "c", "d") keep.push("milestones")
    if (hasMilestone("f", 3) && resettingLayer=="f", "e", "h") keep.push("milestones")
    if (hasMilestone("g", 3) && resettingLayer=="g", "c", "d") keep.push("upgrades")
    if (hasMilestone("f", 3) && resettingLayer=="f", "d", "e", "h") keep.push("upgrades")
    if (layers[resettingLayer].row > this.row) layerDataReset("ant", keep)
},
autoPrestige() {
    return hasUpgrade("g", 25)
},
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
                    ["raw-html", () => `<h4 style="opacity:.5">你越来越熟练了。<br> 你会看到里程碑，它们对你的进度帮助很大。<br> 祝你好运，抵达第 3 行！</h4>`],
                    ["upgrades", [1,2,3,4,5,6]]
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
        11: { title: "51",
        description: "1,000× 积分获取。",
        cost: new EN(6),

        },
        12: { title: "52",
        description: "积分获取受蚂蚁增益。",
        cost: new EN(9),
        effect() {
            return player[this.layer].points.add(5).pow(2.5)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        unlocked() {
            return hasUpgrade("ant", 11)
        }
        },
        13: { title: "53",
        description: "69,420× 积分获取。",
        cost: new EN(12),
        unlocked() {
            return hasUpgrade("ant", 12)
        
        }
        },
        14: { title: "54",
        description: "获得 1,000× 更多人员。",
        cost: new EN(15),
        unlocked() {
            return hasUpgrade("ant", 13)
        
        }
        },
        15: { title: "55",
        description: "保留第 3 行人员升级。",
        cost: new EN(16),
        unlocked() {
            return hasUpgrade("ant", 14)
        
        }
        },
        21: { title: "56",
        description: "69× 按钮能量。",
        cost: new EN(17),
        unlocked() {
            return hasUpgrade("ant", 15)
        
        }
        },
        22: { title: "57",
        description: "10,000× 人员获取。",
        cost: new EN(17),
        unlocked() {
            return hasUpgrade("ant", 21)
        
        }
        },
        23: { title: "58",
        description: "1,000,000× 积分获取。",
        cost: new EN(18),
        unlocked() {
            return hasUpgrade("ant", 22)
        
        }
        },
        24: { title: "59",
        description: "100,000× 人员获取。",
        cost: new EN(21),
        unlocked() {
            return hasUpgrade("ant", 23)
        
        }
        },
        25: { title: "60",
        description: "更多按钮能量升级。",
        cost: new EN(22),
        unlocked() {
            return hasUpgrade("ant", 24)
        
        }
        },
        31: { title: "61",
        description: "获得 1e42× 按钮能量。",
        cost: new EN(107),
        unlocked() {
            return hasUpgrade("g", 25)
        
        }
        },
        32: { title: "62",
        description: "获得 6.969e69× 积分。",
        cost: new EN(112),
        unlocked() {
            return hasUpgrade("ant", 31)
        
        }
        },
        33: { title: "63",
        description: "获得 1e33× 人员。",
        cost: new EN(125),
        unlocked() {
            return hasUpgrade("ant", 32)
        
        }
        },
        34: { title: "64",
        description: "获得 1e25× 按钮能量。",
        cost: new EN(129),
        unlocked() {
            return hasUpgrade("ant", 33)
        
        }
        },
        35: { title: "65",
        description: "解锁一个新层。",
        cost: new EN(131),
        unlocked() {
            return hasUpgrade("ant", 34)
        
        }
        },
        41: { title: "66",
        description: "1e10× 积分。",
        cost: new EN(166),
        unlocked() {
            return hasUpgrade("c", 25)
        
        }
        },
        42: { title: "67",
        description: "1e20× 积分。",
        cost: new EN(168),
        unlocked() {
            return hasUpgrade("ant", 41)
        
        }
        },
        43: { title: "68",
        description: "1e40× 积分。",
        cost: new EN(170),
        unlocked() {
            return hasUpgrade("ant", 42)
        
        }
        },
        44: { title: "69",
        description: "1e69× 积分。",
        cost: new EN(170),
        unlocked() {
            return hasUpgrade("ant", 43)
        
        }
        },
        45: { title: "70",
        description: "解锁更多草升级。",
        cost: new EN(183),
        unlocked() {
            return hasUpgrade("ant", 44)
        
        }
        },
        51: { title: "71",
        description: "1e150× 人员。",
        cost: new EN(318),
        unlocked() {
            return hasUpgrade("c", 35)
        
        }
        },
        52: { title: "72",
        description: "1e100× 按钮能量。",
        cost: new EN(327),
        unlocked() {
            return hasUpgrade("ant", 51)
        
        }
        },
        53: { title: "73",
        description: "1e10× 草。",
        cost: new EN(333),
        unlocked() {
            return hasUpgrade("ant", 52)
        
        }
        },
        54: { title: "74",
        description: "100,000× 奖杯。",
        cost: new EN(333),
        unlocked() {
            return hasUpgrade("ant", 53)
        
        }
        },
        55: { title: "75",
        description: "1e100× 积分。",
        cost: new EN(333),
        unlocked() {
            return hasUpgrade("ant", 54)
        
        }
        },
        61: { title: "?",
        description: "1e1,014× 积分。",
        cost: new EN(1),
        unlocked() {
            return hasUpgrade("b", 61)
        
        }
        },
    },
    name: "蚂蚁", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "🐜", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        auto: false,
    }},
    color: "#1890ff",
    requires: new EN(1e116), // Can be a function that takes requirement increases into account
    resource: "蚂蚁", // Name of prestige currency
    baseResource: "积分", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    branches: ["p"],
    exponent() {if (hasUpgrade("z", 14)) return new EN(Infinity)
    else return new EN(2)},    
    resetsNothing() { return player.ant.auto },
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    canBuyMax() { return hasMilestone("ant", 2) },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "a", description: "A: 重置以获取蚂蚁", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    resetsNothing() {return hasMilestone("ant", 3)},
    layerShown(){if (hasUpgrade("z", 14)) return false
    else return (hasUpgrade("p", 35) || player[this.layer].unlocked)},
    automate() {},
    milestones: {
        1: {
            requirementDescription: "16 蚂蚁",
            effectDescription: "每秒获得 100% 人员。",
            done() { return player.ant.points.gte(16) }
        }, 2: {requirementDescription: "25 蚂蚁",
          effectDescription: "你可以最大购买蚂蚁。",
          
             done() { return player.ant.points.gte(25)},},
             3: {requirementDescription: "107 蚂蚁",
             effectDescription: "蚂蚁不重置任何内容。",
             
                done() { return player.ant.points.gte(107)},},
        
    },
})