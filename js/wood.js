addLayer("w", {
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
                "可购买项": {
                    unlocked() {return (hasUpgrade("w", 12))},
                    content: [
                        ["blank", "15px"],
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
        11: { title: "601",
        description: "获得 ×1.1 奖牌。",
        cost: new EN("1"),
        },
        12: { title: "602",
        description: "解锁第十个可购买项。",
        cost: new EN("1000"),
        unlocked() {
            return hasUpgrade("w", 11)
        }
        },
        13: { title: "603",
        description: "使第十个可购买项更便宜。",
        cost: new EN("69420"),
        unlocked() {
            return hasUpgrade("w", 12)
        }
        },
        14: { title: "604",
        description: "解锁下一个可购买项。",
        cost: new EN("1e6"),
        unlocked() {
            return hasUpgrade("w", 13)
        }
        },
        15: { title: "605",
        description: "使第十一个可购买项更便宜。",
        cost: new EN("1e18"),
        unlocked() {
            return hasUpgrade("w", 14)
        }
        },
        21: { title: "606",
        description: "木材增益自身。",
        cost: new EN("1e2150"),
        unlocked() {
            return hasUpgrade("w", 15)
        },
        effect(){return player.w.points.root(4).add(1).gte("10^^6") ? new EN("10^^6") : player.w.points.root(4).add(1)},
        effectDisplay(){return `${format(this.effect())}x`}
        },
        22: { title: "607",
        description: "获得巨量木材。",
        cost: new EN("1e3935"),
        unlocked() {
            return hasUpgrade("w", 21)
        },
    },
    23: { title: "608",
        description: "获得多得多木材。",
        cost: new EN("e1e30003"),
        unlocked() {
            return hasUpgrade("w", 22)
        },
    },
    24: { title: "609",
        description: "获得更多木材。",
        cost: new EN("ee1e9"),
        unlocked() {
            return hasUpgrade("w", 23)
        },
    },
    25: { title: "610",
        description: "获得大量木材。",
        cost: new EN("ee1e15"),
        unlocked() {
            return hasUpgrade("w", 24)
        },
    },
    31: { title: "611",
        description: "获得可观木材。",
        cost: new EN("ee1e27"),
        unlocked() {
            return hasUpgrade("w", 25)
        },
    },
    32: { title: "612",
        description: "获得疯狂数量的木材。",
        cost: new EN("ee1e51"),
        unlocked() {
            return hasUpgrade("w",31)
        },
    },
    33: { title: "613",
        description: "获得极限数量的木材。",
        cost: new EN("ee1e147"),
        unlocked() {
            return hasUpgrade("w",32)
        },
    },
    34: { title: "614",
        description: "获得不错的木材量。",
        cost: new EN("ee1e589"),
        unlocked() {
            return hasUpgrade("w",33)
        },
    },
    35: { title: "615",
        description: "获得神明数量的木材。",
        cost: new EN("ee1e69423"),
        unlocked() {
            return hasUpgrade("w",34)
        },
    },
    41: { title: "616",
        description: "提升木材获取量。",
        cost: new EN("10^^100"),
        unlocked() {
            return hasUpgrade("w",35)
        },
    },
    42: { title: "617",
        description: "再次提升木材获取量。",
        cost: new EN("10^^200"),
        unlocked() {
            return hasUpgrade("w",41)
        },
    },
    43: { title: "618",
        description: "再度提升木材获取量。",
        cost: new EN("10^^400"),
        unlocked() {
            return hasUpgrade("w",42)
        },
    },
    44: { title: "619",
        description: "又一次提升木材获取量。",
        cost: new EN("10^^777"),
        unlocked() {
            return hasUpgrade("w",43)
        },
    },
    45: { title: "620",
        description: "进一步提升木材获取量。",
        cost: new EN("10^^1000"),
        unlocked() {
            return hasUpgrade("w",44)
        },
    },
    51: { title: "621",
        description: "更大幅度地提升木材获取量。",
        cost: new EN("10^^1666"),
        unlocked() {
            return hasUpgrade("w",45)
        },
    },
    52: { title: "622",
        description: "大幅度提升木材获取量。",
        cost: new EN("10^^2222"),
        unlocked() {
            return hasUpgrade("w",51)
        },
    },
    53: { title: "623",
        description: "超大幅度提升木材获取量。",
        cost: new EN("10^^3003"),
        unlocked() {
            return hasUpgrade("w",52)
        },
    },
    54: { title: "624",
        description: "将木材获取量提升至上限 + 提升所有其他货币。",
        cost: new EN("10^^5000"),
        unlocked() {
            return hasUpgrade("w",53)
        },
    },
    55: { title: "625",
        description: "洋葱升级 71 额外 ^4，且获得 ×10 奖牌。",
        cost: new EN("10^^10000"),
        unlocked() {
            return hasUpgrade("w",54)
        },
    },
},

    buyables: {
        11: {
            title: "<h3>第十个可购买项<h3>",
            cost(x) { return hasUpgrade("w",13) ? new EN(1).mul(new EN(3).pow(x)) : new EN(1).mul(new EN(4).pow(x)) },
            display() {return `<h3>木材获取量翻倍。<h3>\n等级: ` + formatWhole(player.w.buyables[11]) + `<br>花费: ${format(this.cost())} 木材\n效果: ${format(this.effect())}× 木材`},
            canAfford() {return player.w.points.gte(this.cost())},
            buy() {
                player.w.points = player.w.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            unlocked() { return hasUpgrade("w", 12)},
            effect(x) {
                mult2 = new EN(x).gte(1000)? new EN(3).pow(1000).mul(new EN(1.1).pow(new EN(x).sub(1000))):new EN(2).pow(x)
                return mult2
        },
    },
    12: {
        title: "<h3>第十一个可购买项<h3>",
        cost(x) { return hasUpgrade("w",15) ? new EN(2).pow(new EN(2).pow(x)) : new EN(2).pow(new EN(3).pow(x)) },
        display() {return `<h3>木材获取量指数化。<h3>\n等级: ` + formatWhole(player.w.buyables[12]) + `<br>花费: ${format(this.cost())} 木材\n效果: ^${format(this.effect())} 木材`},
        canAfford() {return player.w.points.gte(this.cost())},
        buy() {
            player.w.points = player.w.points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        unlocked() { return hasUpgrade("w", 14)},
        effect(x) {
            mult2 = new EN(x).gte("10^^10000")? new EN(1).pow(1).mul(new EN(1.1).pow(new EN(x).sub("10^^10000"))):new EN(1.1).pow(x)
            return mult2
    },
},
},
milestones: {
    1: {
        requirementDescription: "3e3,333 木材",
        effectDescription: "自动购买第一个木材可购买项并最大购买。",
        done() { return player.w.points.gte("3e3333") },
        toggles: [
          ["w","auto"]
        ]
    },
        2: {
            requirementDescription: "e1e3,003 木材",
            effectDescription: "自动购买第二个木材可购买项。",
            done() { return player.w.points.gte("ee3003") },
            toggles: [
              ["w","auto2"]
            ]
        },
        3: {
            requirementDescription: "eee1.000e9 木材",
            effectDescription: "最大购买第二个木材可购买项。",
            done() { return player.w.points.gte("eeee9") },
        },
},
automate(){
    if (player.w.points.lte(0)) return
    if (player.w.auto) {
        hasMilestone("w",1) ? setBuyableAmount("w",11,tmp.w.buyables[11].canAfford?player.w.points.div(4).log(4).floor().add(1):getBuyableAmount("w",11)) : buyBuyable("w",11)
    }
    if (player.w.auto2) {
        hasMilestone("w",3) ? setBuyableAmount("w",12,tmp.w.buyables[12].canAfford?player.w.points.div(2).log().floor(2).add(1):getBuyableAmount("w",12)) : buyBuyable("w",12)
    }
},
    name: "木材", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "🟫", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        auto: false
    }},
    color: "#966F33",
    requires: new EN("10^^1.26e18"), // Can be a function that takes requirement increases into account
    resource: "木材", // Name of prestige currency
    baseResource: "积分", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    branches: ["q" , "v"],
    type() {if (hasUpgrade("su", 535)) return "normal"
    else return "normal"},    
    exponent() {if (hasUpgrade("su", 535)) return new EN(0)
    else return new EN(0)},    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1).mul(buyableEffect("w", 11)).pow(buyableEffect("w", 12))
        if (hasUpgrade('re', 34)) mult = mult.times(2)
        if (hasUpgrade('re', 35)) mult = mult.times(1.5)
        if (hasUpgrade('re', 41)) mult = mult.times(1.25)
        if (hasUpgrade('re', 42)) mult = mult.times(1.1)
        if (hasUpgrade('w', 21)) mult = mult.times(upgradeEffect('w', 21))
        if (hasUpgrade('w', 22)) mult = mult.pow(69)
        if (hasUpgrade('w', 23)) mult = mult.pow("1e1000000")
        if (hasUpgrade('w', 24)) mult = mult.pow("ee12")
        if (hasUpgrade('w', 25)) mult = mult.pow("ee24")
        if (hasUpgrade('w', 31)) mult = mult.pow("ee48")
        if (hasUpgrade('w', 32)) mult = mult.pow("ee144")
        if (hasUpgrade('w', 33)) mult = mult.pow("ee586")
        if (hasUpgrade('w', 34)) mult = mult.pow("ee69420")
        if (hasUpgrade('w', 35)) mult = mult.pow("eee9")
        if (hasUpgrade('w', 41)) mult = mult.pow("10^^200")
        if (hasUpgrade('w', 42)) mult = mult.pow("10^^300")
        if (hasUpgrade('w', 43)) mult = mult.pow("10^^600")
        if (hasUpgrade('w', 44)) mult = mult.pow("10^^1111")
        if (hasUpgrade('w', 45)) mult = mult.pow("10^^1500")
        if (hasUpgrade('w', 51)) mult = mult.pow("10^^2000")
        if (hasUpgrade('w', 52)) mult = mult.pow("10^^2500")
        if (hasUpgrade('w', 53)) mult = mult.pow("10^^4000")
        if (hasUpgrade('w', 54)) mult = mult.pow("10^^10000")
        if (hasUpgrade('re', 52)) mult = mult.times(16)
        if (hasUpgrade('re', 55)) mult = mult.times("eee69423")
        if (hasUpgrade('x', 54)) mult = mult.times("10^^1e10")
        if (hasMilestone('re', 10)) mult = mult.times("10^^2223")
        if (hasUpgrade('re', 75)) mult = mult.times("10^^3003")
        if (hasUpgrade('y', 54)) mult = mult.pow("10^^1e30")
        if (hasUpgrade('z', 54)) mult = mult.times("10^^1e400")
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
        if (hasMilestone("re", 12) && resettingLayer=="re") keep.push("milestones")
        if (layers[resettingLayer].row > this.row) layerDataReset("w", keep)
    },
    autoUpgrade() { if (hasMilestone("re" , 11)) return true},
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    passiveGeneration() { return (hasMilestone("re", 6)&&player.current!="w")?1:0 },

    row: 6, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "w", description: "W: 重置以获得木材", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){if (hasUpgrade("su", 535)) return false
    else return (hasUpgrade("re", 31) || player[this.layer].unlocked)},
})