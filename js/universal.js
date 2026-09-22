addLayer("u", {
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
        "星星": {
unlocked() {return (hasUpgrade("u", 11))},
        content: [
    ["blank", "15px"],
    ["display-text", () => "你有 <h2 style='color: #e5e500; text-shadow: 0 0 10px #e5e500'>" + format(player.u.stars) + "</h2> 星星 ⭐，使宇宙获取量乘以 <h2 style='color: #e5e500; text-shadow: 0 0 10px #e5e500'> <br>" + format(player.u.stars.max(1).pow(0.69420)) + "x</h2>."],
    "buyables"
        ]
    },
        "里程碑": {
            unlocked() {return (hasAchievement("a", 11))},
    content: [
        ["blank", "15px"],
        "milestones"
    ]
},
},
                },
    upgrades: {
        11: { title: "501",
        description: "解锁一个可购买项。",
        cost: new EN("100"),
        },
        12: { title: "502",
        description: "解锁另一个可购买项。",
        cost: new EN("100000"),
        unlocked() {
            return hasUpgrade("u", 11)
        }
        },
        13: { title: "503",
        description: "获得 1e64× 星星。",
        cost: new EN("10000000"),
        unlocked() {
            return hasUpgrade("u", 12)
        }
        },
        14: { title: "504",
        description: "根据宇宙获得更多星星。",
        cost: new EN("1e88"),
        unlocked() {
            return hasUpgrade("u", 13)
        },
        effect(){return player.u.points.root(1).add(1).gte("ee200") ? new EN("ee200") : player.u.points.root(1).add(1)},
        effectDisplay(){return `${format(this.effect())}x`}
    },
    15: { title: "505",
    description: "解锁第八个可购买项。",
    cost: new EN("1e465"),
    unlocked() {
        return hasUpgrade("u", 14)
    }
    },
    21: { title: "506",
    description: "获得 1e3,200× 星星。",
    cost: new EN("1e10000"),
    unlocked() {
        return hasUpgrade("u", 15)
    }
    },
    22: { title: "507",
    description: "获得 ^1.44 星星。",
    cost: new EN("1e42000"),
    unlocked() {
        return hasUpgrade("u", 21)
    }
    },
    23: { title: "508",
    description: "获得 ×1e100,000 星星。",
    cost: new EN("1e70000000"),
    unlocked() {
        return hasUpgrade("u", 22)
    }
    },
    24: { title: "509",
        description: "星星增益自身。",
        cost: new EN("1e70000001"),
        unlocked() {
         return hasUpgrade("u", 23)
        },
        effect(){return player.u.stars.root(2).add(1).gte("ee200") ? new EN("ee200") : player.u.stars.root(2).add(1)},
        effectDisplay(){return `${format(this.effect())}x`}
    },
    25: { title: "510",
    description: "获得 ×e1.000e100 星星。",
    cost: new EN("ee50"),
    unlocked() {
        return hasUpgrade("u", 24)
    }
    },
    31: { title: "511",
    description: "解锁第九个可购买项。",
    cost: new EN("ee150"),
    unlocked() {
        return hasUpgrade("u", 25)
    }
    },
    32: { title: "512",
    description: "获得 e1e1,000,000× 星星。",
    cost: new EN("ee69420"),
    unlocked() {
        return hasUpgrade("u", 31)
    }
    },
    33: { title: "513",
    description: "获得大量星星。",
    cost: new EN("eee6"),
    unlocked() {
        return hasUpgrade("u", 32)
    }
    },
    34: { title: "514",
    description: "获得更多星星。",
    cost: new EN("eee9"),
    unlocked() {
        return hasUpgrade("u", 33)
    }
    },
    35: { title: "515",
    description: "获得多得多星星。",
    cost: new EN("eeee9"),
    unlocked() {
        return hasUpgrade("u", 34)
    }
    },
    41: { title: "516",
    description: "获得超多星星。",
    cost: new EN("10^^7"),
    unlocked() {
        return hasUpgrade("u", 35)
    }
    },
    42: { title: "517",
    description: "获得疯狂数量的星星。",
    cost: new EN("10^^10"),
    unlocked() {
        return hasUpgrade("u", 41)
    }
    },
    43: { title: "518",
    description: "获得极限数量的星星。",
    cost: new EN("10^^15"),
    unlocked() {
        return hasUpgrade("u", 42)
    }
    },
    44: { title: "519",
    description: "获得极高数量的星星。",
    cost: new EN("10^^25"),
    unlocked() {
        return hasUpgrade("u", 43)
    }
    },
    45: { title: "520",
    description: "获得极高数量的星星。",
    cost: new EN("10^^30"),
    unlocked() {
        return hasUpgrade("u", 44)
    }
    },
    51: { title: "521",
    description: "获得神明数量的星星。",
    cost: new EN("10^^50"),
    unlocked() {
        return hasUpgrade("u", 45)
    }
    },
    52: { title: "522",
    description: "获得最强数量的星星。",
    cost: new EN("10^^69"),
    unlocked() {
        return hasUpgrade("u", 51)
    }
    },
    53: { title: "523",
    description: "获得真正最强数量的星星。",
    cost: new EN("10^^100"),
    unlocked() {
        return hasUpgrade("u", 52)
    }
    },
    54: { title: "524",
    description: "提升第 5 行 - 第 6 行货币。",
    cost: new EN("10^^200"),
    unlocked() {
        return hasUpgrade("u", 53)
    }
    },
    55: { title: "525",
    description: "洋葱升级 71 强大了 ×4.294e9 倍，并解锁一个新层！",
    cost: new EN("10^^300"),
    unlocked() {
        return player.o.points.gte("10^^500")
    }
    },
    61: { title: "你卡住了？",
    description: "那就按这个。",
    cost: new EN("e45000"),
    unlocked() {
        return player.u.points.gte("e45000")
    }
    },
},
    buyables: {
        11: {
          title: "<h3>第六个可购买项<h3>",
          cost(x) {return new EN(1).mul(new EN(2).pow(x)).floor()},
          canAfford() { return player.u.points.gte(this.cost())},
          buy() {
             player.u.points = player.u.points.sub(this.cost())
             setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
          },
          display() {return `<h3>生成星星！<h3>\n等级: `+ formatWhole(player.u.buyables[11]) + `\n花费: ${format(this.cost())}\n 宇宙<br>效果: +${format(this.effect())} 星星/秒`},
          effect(x) { 
            mult2 = new EN(x)
            mult2 = mult2.mul(buyableEffect("u",12))
            mult2 = mult2.mul(hasUpgrade("u",13)?1e64:1)
            mult2 = mult2.mul(hasUpgrade("u",14)?upgradeEffect("u",14):1)
            mult2 = mult2.mul(buyableEffect("u",13))
            mult2 = mult2.mul(hasUpgrade("u",21)?"1e3200":1)
            mult2 = mult2.pow(hasUpgrade("u",22)?1.44:1)
            mult2 = mult2.mul(hasUpgrade("u",23)?"1e100000":1)
            mult2 = mult2.mul(hasUpgrade("u",24)?upgradeEffect("u",24):1)
            mult2 = mult2.mul(hasUpgrade("u",25)?"ee100":1)
            mult2 = mult2.pow(buyableEffect("u",14))
            mult2 = mult2.mul(hasUpgrade("u",32)?"eee6":1)
            mult2 = mult2.mul(hasUpgrade("u",33)?"eee9":1)
            mult2 = mult2.mul(hasUpgrade("u",34)?"eeee9":1)
            mult2 = mult2.mul(hasUpgrade("u",35)?"10^^7":1)
            mult2 = mult2.mul(hasUpgrade("u",41)?"10^^10":1)
            mult2 = mult2.mul(hasUpgrade("u",42)?"10^^15":1)
            mult2 = mult2.mul(hasUpgrade("u",43)?"10^^25":1)
            mult2 = mult2.mul(hasUpgrade("u",44)?"10^^30":1)
            mult2 = mult2.mul(hasUpgrade("u",45)?"10^^50":1)
            mult2 = mult2.mul(hasUpgrade("u",51)?"10^^69":1)
            mult2 = mult2.mul(hasUpgrade("u",52)?"10^^100":1)
            mult2 = mult2.mul(hasUpgrade("u",53)?"10^^200":1)
            mult2 = mult2.mul(hasUpgrade("u",54)?"10^^300":1)
            return new EN(mult2)}
        },
        12: {
            title: "<h3>第七个可购买项<h3>",
            cost(x) {return new EN(1).mul(new EN(3).pow(x)).floor()},
            canAfford() { return player.u.points.gte(this.cost())},
            buy() {
               player.u.points = player.u.points.sub(this.cost())
               setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            display() {return `<h3>星星获取量翻倍。<h3>\n等级: `+ formatWhole(player.u.buyables[12]) + `\n花费: ${format(this.cost())}\n 宇宙<br>效果: ×${format(this.effect())} 星星。`},
            unlocked(){return hasUpgrade("u",12)},
            effect(x) { 
              mult2 = new EN(x)
              mult2 = new EN(x).gte(200) ? new EN(2).pow(200).mul(new EN(1.25).pow(new EN(x).sub(200))) : new EN(2).pow(x)
              return new EN(mult2)}
          },
          13: {
            title: "<h3>第八个可购买项<h3>",
            cost(x) {return new EN("1.79e308").mul(new EN(69420).pow(x)).floor()},
            canAfford() { return player.u.points.gte(this.cost())},
            buy() {
               player.u.points = player.u.points.sub(this.cost())
               setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            display() {return `<h3>星星获取量 ×100。<h3>\n等级: `+ formatWhole(player.u.buyables[13]) + `\n花费: ${format(this.cost())}\n 宇宙<br>效果: ×${format(this.effect())} 星星。`},
            unlocked(){return hasUpgrade("u",15)},
            effect(x) { 
              mult2 = new EN(x)
              mult2 = new EN(x).gte(1e308) ? new EN(100).pow(200).mul(new EN(1.25).pow(new EN(x).sub(1e308))) : new EN(100).pow(x)
              return new EN(mult2)}
          },
          14: {
            title: "<h3>第九个可购买项<h3>",
            cost(x) {return new EN("2").pow(new EN(69420).pow(x)).floor()},
            canAfford() { return player.u.points.gte(this.cost())},
            buy() {
               player.u.points = player.u.points.sub(this.cost())
               setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            display() {return `<h3>星星获取量指数化。<h3>\n等级: `+ formatWhole(player.u.buyables[14]) + `\n花费: ${format(this.cost())}\n 宇宙<br>效果: ^${format(this.effect())} 星星。`},
            unlocked(){return hasUpgrade("u",31)},
            effect(x) { 
              mult2 = new EN(x)
              mult2 = new EN(x).gte(1e308) ? new EN(100).pow(200).mul(new EN(2).pow(new EN(x).sub(1e308))) : new EN(2).pow(x)
              return new EN(mult2)}
          },
    },
    automate(){
        if (player.u.points.lte(0)) return
        if (player.u.auto) {
         addBuyables("u",11,player.u.points.times(new EN(1.5)).div(new EN(2).pow(getBuyableAmount("u",11).plus(1))).plus(1).log(1).floor());
        }
         if (player.u.auto2) {
            addBuyables("u",12,player.u.points.times(new EN(1)).div(new EN(4).pow(getBuyableAmount("u",12).plus(1))).plus(1).log(1).floor());
        }
        if (player.u.auto3) {
            addBuyables("u",13,player.u.points.times(new EN(1.79e308)).div(new EN(69420).pow(getBuyableAmount("u",13).plus(1))).plus(1).log(1).floor());
        }
        if (player.u.auto4) {
            hasMilestone("u",5) ? setBuyableAmount("u",14,tmp.u.buyables[14].canAfford?player.u.points.div(2).log(1e308).floor().add(1):getBuyableAmount("u",14)) : buyBuyable("u",14)
        }
    },
    milestones: {
        1: {
            requirementDescription: "1e3,003 宇宙",
            effectDescription: "自动购买第一个宇宙可购买项并最大购买。",
            done() { return player.u.points.gte("1e3003") },
            toggles: [
              ["u","auto"]
            ]
        },
        2: {
            requirementDescription: "6e6,969 宇宙",
            effectDescription: "自动购买第二个宇宙可购买项并最大购买。",
            done() { return player.u.points.gte("6e6969") },
            toggles: [
              ["u","auto2"]
            ]
        },
        3: {
            requirementDescription: "1e10,000,000 宇宙",
            effectDescription: "自动购买第三个宇宙可购买项并最大购买。",
            done() { return player.u.points.gte("ee7") },
            toggles: [
              ["u","auto3"]
            ]
        },
        4: {
            requirementDescription: "e1e1,000,000 宇宙",
            effectDescription: "自动购买第四个宇宙可购买项。",
            done() { return player.u.points.gte("eee6") },
            toggles: [
              ["u","auto4"]
            ]
        },
        5: {
            requirementDescription: "100,000,000 奖牌",
            effectDescription: "最大购买第四个可购买项。",
            done() { return player.re.points.gte("1e8") },
        },
    },
    update(diff) {
        player.u.stars = player.u.stars.add(buyableEffect("u", 11).mul(diff))
      },
    name: "宇宙", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "🌌", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        stars: new EN(0),
        auto: false
    }},
    color: "#005395",
    requires: new EN("10^^1000"), // Can be a function that takes requirement increases into account
    resource: "宇宙", // Name of prestige currency
    baseResource: "积分", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    branches: ["t", "n"],
    type() {if (hasUpgrade("ga", 54)) return "static"
    else return "normal"},    
    exponent() {if (hasUpgrade("ga", 54)) return new EN(Infinity)
    else return new EN(0)},    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1)
        if (player.u.stars.gte(1)) mult = mult.times(player.u.stars.max(1).pow(0.69420))
        if (hasMilestone('re', 2)) mult = mult.times(2)
        if (hasUpgrade('re', 15)) mult = mult.times(16)
        if (hasUpgrade('re', 22)) mult = mult.times(2)
        if (hasUpgrade('u', 61)) mult = mult.times("ee8")
        if (hasUpgrade('v', 54)) mult = mult.times("10^^1000")
        if (hasUpgrade('re', 43)) mult = mult.times(upgradeEffect('re', 43))
        if (hasUpgrade('w', 54)) mult = mult.times("10^^25000")
        if (hasUpgrade('x', 54)) mult = mult.times("10^^1e12")
        if (hasUpgrade('y', 54)) mult = mult.pow("10^^1e50")
        if (hasUpgrade('z', 54)) mult = mult.times("10^^1e700")
        if (hasUpgrade('ar', 54)) mult = mult.pow("10^^^3")
        if (hasUpgrade('ba', 54)) mult = mult.pow("10^^^4")
        if (hasUpgrade('ci', 54)) mult = mult.times("10^^^6")
        if (hasUpgrade('du', 54)) mult = mult.times("10^^^10")
        if (hasUpgrade('eg', 54)) mult = mult.times("10^^^25")
        if (hasUpgrade('fi', 54)) mult = mult.times("10^^^50")

        return mult
    },
    autoUpgrade() { if (hasMilestone("re" , 9)) return true},
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    doReset(resettingLayer) {
        let keep = [];
        if (hasMilestone("re", 11) && resettingLayer=="re") keep.push("upgrades")
        if (hasMilestone("re", 11) && resettingLayer=="re") keep.push("milestones")
        if (layers[resettingLayer].row > this.row) layerDataReset("u", keep)
    },
    row: 5, // Row the layer is in on the tree (0 is the first row)
    passiveGeneration() { return (hasMilestone("re", 1)&&player.current!="u")?1:0 },
    hotkeys: [
        {key: "u", description: "U: 重置以获得宇宙", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){if (hasUpgrade("ga", 54)) return false
    else return (hasChallenge("o", 23) || player[this.layer].unlocked)},
})