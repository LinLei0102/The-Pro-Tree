
addLayer("re", {
    effect(){

    },
    effect(){
        return ExpantaNum.pow(2, player[this.layer].points)
        /*
          you should use this.layer instead of <layerID>
          Decimal.pow(num1, num2) is an easier way to do
          num1.pow(num2)
        *

},
effectDescription(){
    return "multiplying point gain by " + format(tmp[this.layer].effect)
    /*
      use format(num) whenever displaying a number
    */
  },
  
  clickables: {
    11: {
        display() {
            return "洗点升级，但你不会返还奖牌。"
        },
        unlocked() {
            return hasUpgrade("re", 161)
        },
        canClick() {
            return hasUpgrade("re", 171)
        },
        onClick() {
            player.re.upgrades.length
            for(let i = 0; i < player.re.upgrades.length; i++) { 
                if (+player.re.upgrades[i] > 161) { 
                    player.re.upgrades.splice(i, 1); 
                    i--; 
                }
            }
        },
        onHold() {
        },
},
},
tabFormat: [
    "main-display",
    "prestige-button",
    ["microtabs", "stuff"],
    ["blank", "25px"],
],
row: "8",
microtabs: {
    stuff: {
                    "升级": {
                        unlocked() {return (hasAchievement("a", 11))},
                content: [
                    ["blank", "15px"],
                    ["raw-html", () => `<h4 style="opacity:.5">欢迎来到轮回！重置除成就以外的一切。<br> 你在第一次轮回重置时将获得 25 奖牌。<br> 你可以将它们花费在升级、可购买项和树形升级上！<br> 树形升级例如，你可以购买 2 个升级。<br> 但如果你买了 1 个，另一个升级就会变得更贵。</h4>`],
                    ["upgrades", [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]]
                ]
            },
            "徽章": {
                unlocked() {return (hasUpgrade("re", 55))},
                        content: [
                    ["blank", "15px"],
                    ["display-text", () => "你有 <h2 style='color: #74fbd4; text-shadow: 0 0 10px #74fbd4'>" + format(player.re.badges) + "</h2> 徽章，使奖牌获取乘以 <h2 style='color: #74fbd4; text-shadow: 0 0 10px #74fbd4'> <br>" + format(player.re.badges.max(1).pow(0.1)) + "×</h2>。<br>" + "<h3>" + format(tmp.re.effect)  + " 徽章/秒<h3> <br>"],
                    "buyables"
                        ]
                    },
                    "里程碑": {
                        content: [
                            ["blank", "15px"],
                            "milestones"
                        ]
                    },
                    "树": {
                        unlocked() {return (hasUpgrade("re", 161))},
                content: [
                    ["raw-html", () => `<h4 style="opacity:.5">注意: 购买一个升级会提高同一行所有升级的花费！</h4>`],
                    ["clickable", 11],
                    ["blank", "15px"],
                    ["row", [["upgrade", 171]]],
                    ["row", [["upgrade", 181], ["upgrade", 182]]],
                    ["row", [["upgrade", 191], ["upgrade", 192],["upgrade", 193]]],
                    ["row", [["upgrade", 201], ["upgrade", 202]]],
                    ["row", [["upgrade", 211], ["upgrade", 212]]],
                    ["row", [["upgrade", 221], ["upgrade", 222]]],
                    ["row", [["upgrade", 231]]],
                    ["row", [["upgrade", 241]]],
                    ["row", [["upgrade", 251]]],
                    ["row", [["upgrade", 261], ["upgrade", 262]]],
                    ["blank", "15px"],                
                ],
            },
                    "挑战": {
                        unlocked() {return (hasUpgrade("re", 121))},
                content: [
                    ["blank", "15px"],
                    ["challenges", [1,2,3,4,5,6,7,8,9]]
                    
                ]
            },
        },
    },
        tooltip() {
            return ("轮回")
        },
        passiveGeneration() { 
            if (hasMilestone("su", 1)) return (hasMilestone("su", 1)?1:0)
            },
        buyables: {
            11: {
                title: "<h3>第十二个可购买项<h3>",
                cost(x) { return hasUpgrade("re",61) ? new EN(1000).mul(new EN(5).pow(x)) : new EN(1000).mul(new EN(10).pow(x)) },
                display() {return `<h3>获得更多徽章。<h3>\n等级: ` + formatWhole(player.re.buyables[11]) + `/10,000` + `<br>花费: ${format(this.cost())} 奖牌\n效果: ${format(this.effect())}× 徽章`},
                canAfford() {return player.re.points.gte(this.cost()) && getBuyableAmount('re', 11) < 10000},
                buy() {
                    player.re.points = player.re.points.sub(this.cost())
                    setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                },
                unlocked() { return hasUpgrade("re", 55)},
                effect(x) {
                    mult2 = new EN(x).gte(500)? new EN(2).pow(500).mul(new EN(1.1).pow(new EN(x).sub(15))):new EN(2).pow(x)
                    if (hasUpgrade('su', 23)) mult2 = mult2.pow(2)
                    if (hasUpgrade('re', 241)) mult2 = mult2.pow(1.25)
                    if (hasUpgrade('su', 41)) mult2 = mult2.pow(1.1)
                    if (hasUpgrade('su', 52)) mult2 = mult2.pow(2)
                    if (hasUpgrade('re', 261)) mult2 = mult2.pow(1.1)
                    if (hasUpgrade('re', 262)) mult2 = mult2.pow(1.05)
                    if (hasMilestone('re', 7)) mult2 = mult2.pow(3)
                    return mult2
            },
        },
        12: {
            title: "<h3>第十五个可购买项<h3>",
            cost(x) {return new EN("1000").pow(new EN(1.1).pow(x)).floor()},
            canAfford() { return player.re.points.gte(this.cost())},
            buy() {
               player.re.points = player.re.points.sub(this.cost())
               setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            display() {return `<h3>将徽章获取指数化。<h3>\n等级: `+ formatWhole(player.re.buyables[12]) + `\n花费: ${format(this.cost())}\n 奖牌<br>效果: ^${format(this.effect())} 徽章`},
            unlocked(){return hasUpgrade("re",85)},
            effect(x) { 
              mult2 = new EN(x)
              mult2 = new EN(x).gte(70) ? new EN(1.01).pow(70).mul(new EN(1.001).pow(new EN(x).sub(70))) : new EN(1.01).pow(x)
              if (hasUpgrade('su', 24)) mult2 = mult2.pow(1.5)
              if (hasUpgrade('re', 241)) mult2 = mult2.pow(1.25)
              if (hasUpgrade('su', 41)) mult2 = mult2.pow(1.1)
              if (hasUpgrade('su', 52)) mult2 = mult2.pow(2)
              if (hasUpgrade('re', 261)) mult2 = mult2.pow(1.1)
              if (hasUpgrade('re', 262)) mult2 = mult2.pow(1.05)
              if (hasMilestone('re', 7)) mult2 = mult2.pow(3)

              return new EN(mult2)}
          },
          21: {
            title: "<h3>第十六个可购买项<h3>",
            cost(x) { return new EN(1e100).mul(new EN(10).pow(x)) },
            display() {return `<h3>获得更多奖牌。<h3>\n等级: ` + formatWhole(player.re.buyables[21]) + `/1,000` + `<br>花费: ${format(this.cost())} 徽章\n效果: ${format(this.effect())}× 奖牌`},
            canAfford() {return player.re.badges.gte(this.cost()) && getBuyableAmount('re', 21) < 1000},
            buy() {
                player.re.badges = player.re.badges.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            unlocked() { return hasUpgrade("re", 144)},
            effect(x) {
                mult2 = new EN(x).gte(500)? new EN(1.5).pow(500).mul(new EN(1.1).pow(new EN(x).sub(500))):new EN(1.5).pow(x)
                if (hasUpgrade('su', 24)) mult2 = mult2.pow(3)
                if (hasUpgrade('re', 241)) mult2 = mult2.pow(1.25)
                if (hasUpgrade('su', 44)) mult2 = mult2.pow(1.25)
                if (hasUpgrade('su', 52)) mult2 = mult2.pow(2)
                if (hasUpgrade('re', 261)) mult2 = mult2.pow(1.1)
                if (hasUpgrade('re', 262)) mult2 = mult2.pow(1.05)
                if (hasMilestone('re', 7)) mult2 = mult2.pow(3)

                return mult2
        },
    },
    22: {
        title: "<h3>第十七个可购买项<h3>",
        cost(x) { return new EN("1e9").pow(new EN(1.1).pow(x)) },
        display() {return `<h3>将奖牌获取指数化。<h3>\n等级: ` + formatWhole(player.re.buyables[22]) + `<br>花费: ${format(this.cost())} 徽章\n效果: ^${format(this.effect())} 奖牌`},
        canAfford() {return player.re.badges.gte(this.cost())},
        buy() {
            player.re.badges = player.re.badges.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        unlocked() { return hasUpgrade("re", 144)},
        effect(x) {
            mult2 = new EN(x).gte(500)? new EN(1.001).pow(500).mul(new EN(1.001).pow(new EN(x).sub(15))):new EN(1.001).pow(x)
            if (hasUpgrade('su', 24)) mult2 = mult2.pow(1.75)
            if (hasUpgrade('re', 241)) mult2 = mult2.pow(1.25)
            if (hasUpgrade('su', 44)) mult2 = mult2.pow(1.25)
            if (hasUpgrade('su', 52)) mult2 = mult2.pow(2)
            if (hasUpgrade('re', 261)) mult2 = mult2.pow(1.1)
            if (hasUpgrade('re', 262)) mult2 = mult2.pow(1.05)
            if (hasMilestone('re', 7)) mult2 = mult2.pow(3)

            return mult2
    },
},
    },
    upgrades: {
        11: { title: "526",
        description: "根据本次重置中花费的轮回，对积分获取进行四阶运算。",
        cost: new EN(0),
        effect() {
            let time = EN(player.re.resetTime)
            if (hasUpgrade("re", 13)) time = time.mul(64)
            if (hasUpgrade("re", 44)) time = time.mul(1e9)
            if (hasUpgrade("re", 65)) time = time.pow(5)
            if (inChallenge("z", 62)) time = time.pow(0)
            if (hasUpgrade("re", 105)) time = time.pow(0)
            return EN.tetr(10, time.add(1).pow(0.1), time)
        },
        effectDisplay() { return "^" + format(this.effect()) },
        },
        12: { title: "527",
        description: "获得更多灯光。",
        cost: new EN("1"),
        unlocked() {
            return hasUpgrade("re", 11)
        }
        },
        13: { title: "528",
        description: "提升轮回升级 11 的效果。",
        cost: new EN("1"),
        unlocked() {
            return hasUpgrade("re", 12)
        }
        },
        14: { title: "529",
        description: "获得 ×2 虚空。",
        cost: new EN("2"),
        unlocked() {
            return hasUpgrade("re", 13)
        }
        },
        15: { title: "530",
        description: "获得 ×16 宇宙和 ×256 沙子。",
        cost: new EN("4"),
        unlocked() {
            return hasUpgrade("re", 14)
        }
        },
        21: { title: "531",
        description: "获得 ×4 虚空并被动产出虚空。",
        cost: new EN("8"),
        unlocked() {
            return hasUpgrade("re", 15)
        }
        },
        22: { title: "532",
        description: "获得 ×2 宇宙。",
        cost: new EN("8"),
        unlocked() {
            return hasUpgrade("re", 21)
        }
        },
        23: { title: "533",
        description: "获得 ×3 树和 ×9 圆环。",
        cost: new EN("8"),
        unlocked() {
            return hasUpgrade("re", 22)
        }
        },
        24: { title: "534",
        description: "获得 ×3 虚空。",
        cost: new EN("8"),
        unlocked() {
            return hasUpgrade("re", 23)
        }
        },
        25: { title: "535",
        description: "获得 ×2 树和 ×1.1 奖牌。",
        cost: new EN("8"),
        unlocked() {
            return hasUpgrade("re", 24)
        }
        },
        31: { title: "536",
        description: "解锁下一个层。",
        cost: new EN("16"),
        unlocked() {
            return hasUpgrade("re", 25)
        }
        },
        32: { title: "537",
        description: "获得 ×1.2 奖牌。",
        cost: new EN("32"),
        unlocked() {
            return hasUpgrade("re", 31)
        }
        },
        33: { title: "538",
        description: "获得 ×1.25 虚空。",
        cost: new EN("32"),
        unlocked() {
            return hasUpgrade("re", 32)
        }
        },
        34: { title: "539",
        description: "获得 ×2 木材。",
        cost: new EN("32"),
        unlocked() {
            return hasUpgrade("re", 33)
        }
        },
        35: { title: "540",
        description: "获得 ×1.5 木材和 ×1.25 奖牌。",
        cost: new EN("32"),
        unlocked() {
            return hasUpgrade("re", 34)
        }
        },
        41: { title: "541",
        description: "获得 ×1.25 木材和 ×2 虚空。",
        cost: new EN("64"),
        unlocked() {
            return hasUpgrade("re", 35)
        }
        },
        42: { title: "542",
        description: "获得 ×1.1 木材、×69 树和圆环。",
        cost: new EN("64"),
        unlocked() {
            return hasUpgrade("re", 41)
        }
        },
        43: { title: "543",
        description: "宇宙增益自身（上限为 1F6×）。",
        cost: new EN("64"),
        unlocked() {
            return hasUpgrade("re", 42)
        },
        effect(){return player.u.points.root(0.001).add(1).gte("10^^6") ? new EN("10^^6") : player.u.points.root(0.001).add(1)},
        effectDisplay(){return `${format(this.effect())}x`}
    },
         44: { title: "544",
        description: "洋葱升级 71 为 ×4 并提升轮回升级 11 的效果。",
        cost: new EN("128"),
        unlocked() {
            return hasUpgrade("re", 43)
        },
        },
        45: { title: "545",
        description: "获得 ×1.337 奖牌，洋葱升级 61 ×2。",
        cost: new EN("256"),
        unlocked() {
            return hasUpgrade("re", 44)
        },
        },
        51: { title: "546",
        description: "洋葱升级 71 ×4，获得 ×4 虚空、×16 树和 ×256 圆环。",
        cost: new EN("512"),
        unlocked() {
            return hasUpgrade("re", 45)
        },
        },
        52: { title: "547",
        description: "洋葱升级 71 ×4 并获得 ×16 木材。",
        cost: new EN("512"),
        unlocked() {
            return hasUpgrade("re", 51)
        },
        },
        53: { title: "548",
        description: "获得 ×1.5 奖牌。",
        cost: new EN("512"),
        unlocked() {
            return hasUpgrade("re", 52)
        },
        },
        54: { title: "549",
        description: "获得 ×64 虚空。",
        cost: new EN("1024"),
        unlocked() {
            return hasUpgrade("re", 53)
        },
        },
        55: { title: "550",
        description: "获得 ×2 奖牌，将洋葱升级 71 平方，解锁一个新层，开局获得大量木材并解锁一种子货币。",
        cost: new EN("16384"),
        unlocked() {
            return hasUpgrade("re", 54)
        },
        },
        61: { title: "551",
        description: "使轮回可购买项更便宜。",
        cost: new EN("16384"),
        unlocked() {
            return hasUpgrade("re", 55)
        },
        },
        62: { title: "552",
        description: "获得 ×2 X 射线。",
        cost: new EN("16384"),
        unlocked() {
            return hasUpgrade("re", 61)
        },
        },
        63: { title: "553",
        description: "获得 ×4 X 射线。",
        cost: new EN("16384"),
        unlocked() {
            return hasUpgrade("re", 62)
        },
        },
        64: { title: "554",
        description: "奖牌增益自身。",
        cost: new EN("32768"),
        unlocked() {
            return hasUpgrade("re", 63)
        },
        effect(){return player.re.points.root(69).add(1).gte("1e69") ? new EN("1e69") : player.re.points.root(69).add(1)},
        
        effectDisplay(){return `${format(this.effect())}x`}
        },
        65: { title: "555",
        description: "获得 ×1.5 奖牌，轮回升级 11 强得多。",
        cost: new EN("65536"),
        unlocked() {
            return hasUpgrade("re", 64)
        },
        },
        71: { title: "556",
        description: "获得 ×16 X 射线。",
        cost: new EN("131072"),
        unlocked() {
            return hasUpgrade("re", 65)
        },
        },
        72: { title: "557",
        description: "获得 ×32 X 射线。",
        cost: new EN("262144"),
        unlocked() {
            return hasUpgrade("re", 71)
        },
        },
        73: { title: "558",
        description: "获得 ×4,096 X 射线。",
        cost: new EN("524288"),
        unlocked() {
            return hasUpgrade("re", 72)
        },
        },
        74: { title: "559",
        description: "获得 ×1.1 奖牌。",
        cost: new EN("1048576"),
        unlocked() {
            return hasUpgrade("re", 73)
        },
        },
        75: { title: "560",
        description: "获得 ×2 奖牌，且洋葱升级 61 更强。",
        cost: new EN("8388608"),
        unlocked() {
            return hasUpgrade("re", 74)
        },
        },
        81: { title: "561",
        description: "解锁一个新层并获得 ×1.5 奖牌。",
        cost: new EN("16777216"),
        unlocked() {
            return hasUpgrade("re", 75)
        },
        },
        82: { title: "562",
        description: "获得 ×3,125 庭院并提升洋葱升级 61 的效果。",
        cost: new EN("67108864"),
        unlocked() {
            return hasUpgrade("re", 81)
        },
        },
        83: { title: "563",
        description: "获得 ×1.7 奖牌。",
        cost: new EN("134217728"),
        unlocked() {
            return hasUpgrade("re", 82)
        },
        },
        84: { title: "564",
        description: "获得 ×1.5 奖牌。",
        cost: new EN("268435456"),
        unlocked() {
            return hasUpgrade("re", 83)
        },
        },
        85: { title: "565",
        description: "获得 ×3 奖牌并解锁一个新的可购买项。",
        cost: new EN("1073741824"),
        unlocked() {
            return hasUpgrade("re", 84)
        },
        },
        91: { title: "566",
        description: "获得 ×2 奖牌并解锁一个新层。",
        cost: new EN("8589934592"),
        unlocked() {
            return hasUpgrade("re", 85)
        },
        },
        92: { title: "567",
        description: "获得 ×4 奖牌。",
        cost: new EN("8589934592"),
        unlocked() {
            return hasUpgrade("re", 91)
        },
        },
        93: { title: "568",
        description: "获得 ×8 奖牌和 ×10,000 斑马。",
        cost: new EN("17179869184"),
        unlocked() {
            return hasUpgrade("re", 92)
        },
        },
        94: { title: "569",
        description: "获得 ×1.5 奖牌。",
        cost: new EN("68719476736"),
        unlocked() {
            return hasUpgrade("re", 93)
        },
        },
        95: { title: "570",
        description: "获得 ×1.33 奖牌并提升洋葱升级 61 的效果。",
        cost: new EN("137438953472"),
        unlocked() {
            return hasUpgrade("re", 94)
        },
        },
        101: { title: "571",
        description: "获得 ×1.25 奖牌，再次提升洋葱升级 61 的效果，且你开局拥有更多庭院。",
        cost: new EN("274877906944"),
        unlocked() {
            return hasUpgrade("re", 95)
        },
        },
        102: { title: "572",
        description: "获得 ×5 奖牌，且你开局拥有更多庭院。",
        cost: new EN("1.1258999e15"),
        unlocked() {
            return hasUpgrade("re", 101)
        },
        },
        103: { title: "573",
        description: "获得 ×2 奖牌、×1e9 斑马，且洋葱升级 61 效果更强。",
        cost: new EN("4.5035996e15"),
        unlocked() {
            return hasUpgrade("re", 102)
        },
        },
        104: { title: "574",
        description: "获得 ×1.25 奖牌。",
        cost: new EN("1.8014399e16"),
        unlocked() {
            return hasUpgrade("re", 103)
        },
        },
        105: { title: "575",
            description: "根据本次重置中花费的轮回对积分获取进行五阶运算，并解锁一个新层！（但 RU11 和 OU61 不生效。）",
            cost: new EN("1.4411519e17"),
            unlocked() {
                return hasUpgrade("re", 104)
            },
            effect() {
                let time = EN(player.re.resetTime)
                if (hasUpgrade("su", 13)) time = time.pow(3)
                if (hasUpgrade("re", 111)) time = time.mul(16)
                if (hasUpgrade("re", 112)) time = time.mul(69.420)
                if (hasUpgrade("re", 113)) time = time.mul(5)
                if (hasUpgrade("re", 114)) time = time.mul(3)
                if (hasUpgrade("re", 115)) time = time.mul(3)
                if (hasUpgrade("re", 121)) time = time.mul(420)
                if (inChallenge("re", 11)) time = time.pow(0.5)
                if (inChallenge("re", 12)) time = time.pow(0.333333333333)
                if (hasChallenge("re", 21)) time = time.mul(2)
                if (inChallenge("re", 22)) time = time.pow(0.2)
                if (inChallenge("re", 31)) time = time.pow(0.1)
                if (hasChallenge("re", 31)) time = time.mul(1337)
                if (hasUpgrade("re", 123)) time = time.mul(10)
                if (inChallenge("re", 32)) time = time.pow(0.25)
                if (hasChallenge("re", 32)) time = time.mul(6969)
                if (hasUpgrade("re", 131)) time = time.mul(10)
                if (inChallenge("re", 41)) time = time.pow(0.125)
                if (hasUpgrade("re", 132)) time = time.mul(2)
                if (hasChallenge("re", 41)) time = time.mul(69420)
                if (hasUpgrade("re", 133)) time = time.mul(42)
                if (hasUpgrade("re", 135)) time = time.pow(2)
                if (inChallenge("re", 42)) time = time.pow(0.1)
                if (inChallenge("re", 51)) time = time.pow(0.0625)
                if (inChallenge("re", 52)) time = time.pow(0.05)
                if (hasUpgrade("re", 141)) time = time.mul(100)
                if (hasUpgrade("re", 142)) time = time.pow(2.5)
                if (inChallenge("re", 61)) time = time.pow(0.03125)
                if (inChallenge("re", 62)) time = time.pow(0.025)
                if (hasUpgrade("re", 143)) time = time.mul(10000)
                if (hasUpgrade("re", 145)) time = time.pow(2)
                if (inChallenge("re", 71)) time = time.pow(0.02)
                if (inChallenge("re", 72)) time = time.pow(0.01)
                if (hasUpgrade("re", 152)) time = time.pow(3)
                if (hasUpgrade("re", 153)) time = time.pow(2)
                if (hasUpgrade("re", 154)) time = time.pow(0)
                return EN.pent(10, time.add(1).pow(0.11829), time)
            },
            effectDisplay() { return "^^" + format(this.effect()) },
            },
        111: { title: "?",
        description: "将轮回升级 105 提升 ×16，解锁第 7 行的最终层，并获得 ×10 箭。",
        cost: new EN("2e19"),
        unlocked() {
            return hasUpgrade("re", 105)
        },
        },
        112: { title: "?",
        description: "将轮回升级 105 提升 ×69（不错）。",
        cost: new EN("5e23"),
        unlocked() {
            return hasUpgrade("re", 111)
        },
        },
        113: { title: "?",
        description: "解锁第 8 行层，并将轮回升级 105 提升 ×5。",
        cost: new EN("1e24"),
        unlocked() {
            return hasUpgrade("re", 112)
        },
        },
        114: { title: "?",
        description: "将轮回升级 105 提升三倍，对圆的获取进行立方运算，并将箭、球的获取提升 ×1,000。",
        cost: new EN("1e26"),
        unlocked() {
            return hasUpgrade("re", 113)
        },
        },
        115: { title: "?",
        description: "获得 ×2,000 圆、×100 奖牌，并将轮回升级 105 提升三倍（别忘了查看斑马挑战！）",
        cost: new EN("1e32"),
        unlocked() {
            return hasUpgrade("re", 114)
        },
        },
        121: { title: "?",
        description: "将轮回升级 105 提升 ×420，并解锁 3 个轮回挑战。",
        cost: new EN("1e34"),
        unlocked() {
            return hasUpgrade("re", 115)
        },
        },
        122: { title: "?",
        description: "解锁 2 个新的轮回挑战，并将鸭子获取提升 ×69,420。",
        cost: new EN("1e41"),
        unlocked() {
            return hasUpgrade("re", 121)
        },
        },
        123: { title: "?",
        description: "奖牌自我升幂（硬上限为 7.4）（超模），获得 ×69,420 蛋并提升 RU105 效果。",
        cost: new EN("2e58"),
        unlocked() {
            return hasUpgrade("re", 122)
            
        },
        effect(){return player.re.points.root(1000).add(0).gte("7.4") ? new EN("7.4") : player.re.points.root(1000).add(0)},
        effectDisplay(){return `^${format(this.effect())}`}
        },
        124: { title: "?",
        description: "每拥有一个轮回升级，你获得的奖牌 ×2（复利叠加）。",
        cost: new EN("6.767e67"),
        unlocked() {
            return hasUpgrade("re", 123)
            
        },
        effect() {
            let effect = ExpantaNum.pow(2, player.re.upgrades.length)
            return effect
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        125: { title: "?",
        description: "解锁 1 个新的轮回挑战。",
        cost: new EN("1e95"),
        unlocked() {
            return hasUpgrade("re", 124)
        },
    },
    131: { title: "?",
        description: "将火获取提升 ×69,420，RU105 效果 ×10。",
        cost: new EN("1e110"),
        unlocked() {
            return hasUpgrade("re", 125)
        },
    },
    132: { title: "?",
        description: "解锁 1 个新的轮回挑战，RU105 效果 ×2。",
        cost: new EN("1e116"),
        unlocked() {
            return hasUpgrade("re", 131)
        },
    },
    133: { title: "?",
        description: "将游戏获取提升 ×69,420，RU105 效果 ×10。",
        cost: new EN("1e130"),
        unlocked() {
            return hasUpgrade("re", 132)
        },
    },
    134: { title: "?",
        description: "获得 ×1,000 奖牌。",
        cost: new EN("1e140"),
        unlocked() {
            return hasUpgrade("re", 133)
        },
    },
    135: { title: "?",
        description: "解锁 3 个新的轮回挑战，且 RU105 效果平方（完全崩坏）",
        cost: new EN("1e145"),
        unlocked() {
            return hasUpgrade("re", 134)
        },
    },
    141: { title: "?",
        description: "获得 ×69,420 锤子，RU105 效果 ×100。",
        cost: new EN("1.777e177"),
        unlocked() {
            return hasUpgrade("re", 135)
        },
    },
    142: { title: "?",
        description: "解锁 2 个新的轮回挑战，且 RU105 效果提升 ^2.5！",
        cost: new EN("1e200"),
        unlocked() {
            return hasUpgrade("re", 141)
        },
    },
    143: { title: "?",
        description: "获得 ×69,420 岛屿，RU105 效果 ×10,000。",
        cost: new EN("1e267"),
        unlocked() {
            return hasUpgrade("re", 142)
        },
    },
    144: { title: "?",
        description: "解锁 2 个新的轮回可购买项。",
        cost: new EN("1.80e308"),
        unlocked() {
            return hasUpgrade("re", 143)
        },
    },
    145: { title: "?",
        description: "解锁 1 个新的轮回挑战，且 RU105 效果再次平方。",
        cost: new EN("1e2988"),
        unlocked() {
            return hasUpgrade("re", 144)
        },
    },
    151: { title: "?",
        description: "解锁一个新的轮回挑战并获得 ×69,420 果汁。",
        cost: new EN("1e3046"),
        unlocked() {
            return hasUpgrade("re", 145)
        },
    },
    152: { title: "?",
        description: "RU105 效果立方！",
        cost: new EN("1e3060"),
        unlocked() {
            return hasUpgrade("re", 151)
        },
    },
    153: { title: "?",
        description: "RU105 效果平方！",
        cost: new EN("1e3296"),
        unlocked() {
            return hasUpgrade("re", 152)
        },
    },
    154: { title: "?",
        description: "禁用 RU105 效果！",
        cost: new EN("1e3300"),
        unlocked() {
            return hasUpgrade("re", 153)
        },
    },
    155: { title: "?",
        description: "根据本次重置中花费的轮回对积分获取进行五阶运算（更强）",
        cost: new EN("0"),
        effect() {
            let time = EN(player.re.resetTime)
            if (hasUpgrade("su", 13)) time = time.pow(3)
            if (hasUpgrade("re", 192)) time = time.pow(upgradeEffect('re', 192))
            if (inChallenge("re", 81)) time = time.pow(0.333333333333)
                        if (hasUpgrade("su", 55)) time = time.pow(0)
            return EN.pent(10, time.pent(1.33).pow(0.11829), time)
        },
        effectDisplay() { return "^" + format(this.effect()) },
        unlocked() {
            return hasUpgrade("re", 154)
        },
    },
    161: { title: "?",
        description: "解锁一个新的子标签页",
        cost: new EN("1e3306"),
        unlocked() {
            return hasUpgrade("re", 155)
        },
    },
    171: { title: "第一个树形升级",
        description: "根据本次重置中花费的轮回获得更多奖牌（硬上限为 1e10,000×）",
        currencyDisplayName: "奖牌",
        cost:("1e3306"),
            effect() {
            let time = EN(player.re.resetTime)
            if (hasUpgrade("re", 181)) time = time.mul(3)
            if (hasUpgrade("re", 191)) time = time.mul(3)
            if (hasUpgrade("re", 193)) time = time.mul(2)
            if (hasUpgrade("re", 201)) time = time.mul(3)
            if (hasUpgrade("re", 211)) time = time.mul(2)
            if (hasUpgrade("re", 221)) time = time.mul(5)
            if (hasUpgrade("su", 15)) time = time.mul(10)
            return EN.pow(10, time.mul(0.1).pow(1), time).min("ee4")
            
        },
        effectDisplay() { return "x" + format(this.effect()) },
        unlocked() {
            return hasUpgrade("re", 161)
        },
    },
     181: { title: "第二个树形升级",
        description: "上一个升级效果三倍。",
        currencyDisplayName: "奖牌",
        cost() {
            let cost = EN("1e3333")
            let ugs = EN("e466")
            for (let a = 181; a <= 182; a++) if (hasUpgrade("re", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("e10")
            }
            return cost
        },      
        req: [171],
        unlocked() {
            return hasUpgrade("re", 171)
        },
            branches() { 
                let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
                return this.req.map(x => [x, col]) 
            },
            style: { margin: "10px" }
    },
    182: { title: "第三个树形升级",
        description: "根据本次重置中花费的轮回时间对奖牌升幂（硬上限为 1.1）",
        currencyDisplayName: "奖牌",
        cost() {
            let cost = EN("1e3333")
            let ugs = EN("e166")
            for (let a = 181; a <= 182; a++) if (hasUpgrade("re", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("e10")
            }
            return cost
        },
        
      req: [171],
        effect() {
            let time = EN(player.re.resetTime)
            if (hasUpgrade("su", 22)) time = time.mul(10)
            return EN.add(1, time.mul(0.0001).add(0.001), time).min("1.1")
        },
        effectDisplay() { return "^" + format(this.effect()) },
        unlocked() {
            return hasUpgrade("re", 171)
        },
            branches() { 
                let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
                return this.req.map(x => [x, col]) 
            },
            style: { margin: "10px" }
    },
    191: { title: "第四个树形升级",
        description: "RU171 再次三倍。",
        currencyDisplayName: "奖牌",
        cost() {
            let cost = EN("1e4000")
            let ugs = EN("e444")
            for (let a = 191; a <= 193; a++) if (hasUpgrade("re", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("e10")
            }
            return cost
        },      
        req: [181, 182],
        unlocked() {
            return hasUpgrade("re", 181, 182)
        },
            branches() { 
                let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
                return this.req.map(x => [x, col]) 
            },
            style: { margin: "10px" }
    },
    192: { title: "第五个树形升级",
        description: "根据本次重置中花费的轮回时间，RU155 更强。",
        currencyDisplayName: "奖牌",
        effect() {
            let time = EN(player.re.resetTime)
                        if (hasUpgrade("re", 212)) time = time.pow(3)
                        if (hasUpgrade("re", 222)) time = time.tetr(3)
                        if (inChallenge("re", 81)) time = time.pent(0)
                        if (hasUpgrade("re", 231)) time = time.times(upgradeEffect('re', 231))
            return EN.pow(10, time.mul(0.01).add(0.01), time).min("10^^^^^10")
        },
        effectDisplay() { return "^" + format(this.effect()) },
        cost() {
            let cost = EN("1e4000")
            let ugs = EN("e245")
            for (let a = 191; a <= 193; a++) if (hasUpgrade("re", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("e10")
            }
            return cost
        },      
        
        req: [181, 182],
        unlocked() {
            return hasUpgrade("re", 181, 182)
        },
            branches() { 
                let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
                return this.req.map(x => [x, col]) 
            },
            style: { margin: "10px" }
    },
    193: { title: "第六个树形升级",
        description: "你拥有的每个轮回升级现在给予 1,000× 奖牌，且 RU171 翻倍。",
        currencyDisplayName: "奖牌",
        cost() {
            let cost = EN("1e4000")
            let ugs = EN("e321")
            for (let a = 191; a <= 193; a++) if (hasUpgrade("re", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("e10")
            }
            return cost
        },
        effect() {
            let effect = ExpantaNum.pow(1000, player.re.upgrades.length)
            return effect
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect      
        req: [181, 182],
        unlocked() {
            return hasUpgrade("re", 181, 182)
        },
            branches() { 
                let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
                return this.req.map(x => [x, col]) 
            },
            style: { margin: "10px" }
    },
    201: { title: "第七个树形升级",
        description: "RU171 再一次三倍。",
        currencyDisplayName: "奖牌",
        cost() {
            let cost = EN("1e5000")
            let ugs = EN("e555")
            for (let a = 201; a <= 204; a++) if (hasUpgrade("re", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("e10")
            }
            return cost
        },      
        req: [191, 192, 193],
        unlocked() {
            return hasUpgrade("re", 191, 192, 193)
        },
            branches() { 
                let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
                return this.req.map(x => [x, col]) 
            },
            style: { margin: "10px" }
    },
    202: { title: "第八个树形升级",
        description: "徽章对奖牌获取升幂。",
        currencyDisplayName: "奖牌",
        effectDisplay() { return "^" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.re.badges.add(1).pow(0.0001).min("2")
            
        },
        cost() {
            let cost = EN("1e5000")
            let ugs = EN("e555")
            for (let a = 201; a <= 204; a++) if (hasUpgrade("re", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("e10")
            }
            return cost
        },
              
        req: [191, 192, 193],
        unlocked() {
            return hasUpgrade("re", 191, 192, 193)
        },
        
            branches() { 
                let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
                return this.req.map(x => [x, col]) 
            },
            style: { margin: "10px" }
            
    },
    211: { title: "第九个树形升级",
        description: "RU171 翻倍。",
        currencyDisplayName: "奖牌",
        cost() {
            let cost = EN("1e7000")
            let ugs = EN("e777")
            for (let a = 211; a <= 212; a++) if (hasUpgrade("re", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("e111")
            }
            return cost
        },      
        req: [201, 202],
        unlocked() {
            return hasUpgrade("re", 201, 202)
        },
            branches() { 
                let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
                return this.req.map(x => [x, col]) 
            },
            style: { margin: "10px" }
    },
    212: { title: "第十个树形升级",
    description: "RU192 立方。",
    currencyDisplayName: "奖牌",
    cost() {
        let cost = EN("1e7000")
        let ugs = EN("e3000")
        for (let a = 211; a <= 212; a++) if (hasUpgrade("re", a)) {
            cost = cost.mul(ugs)
            ugs = ugs.mul("e1000")
        }
        return cost
    },      
    req: [201, 202],
    unlocked() {
        return hasUpgrade("re", 201, 202)
    },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
},
221: { title: "第十一个树形升级",
    description: "获得 ^1.2 奖牌，且 RU171 五倍。",
    currencyDisplayName: "奖牌",
    cost() {
        let cost = EN("1e20000")
        let ugs = EN("e4000")
        for (let a = 221; a <= 222; a++) if (hasUpgrade("re", a)) {
            cost = cost.mul(ugs)
            ugs = ugs.mul("e1000")
        }
        return cost
    },      
    req: [211, 212],
    unlocked() {
        return hasUpgrade("re", 211, 212)
    },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
},
222: { title: "第十二个树形升级",
    description: "解锁最终轮回挑战，且 RU192 四阶运算。",
    currencyDisplayName: "奖牌",
    cost() {
        let cost = EN("1e20000")
        let ugs = EN("e3000")
        for (let a = 221; a <= 222; a++) if (hasUpgrade("re", a)) {
            cost = cost.mul(ugs)
            ugs = ugs.mul("e1000")
        }
        return cost
    },      
    req: [211, 212],
    unlocked() {
        return hasUpgrade("re", 211, 212)
    },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
},
231: { title: "第十三个树形升级",
    description: "根据本次轮回重置中花费的时间，RU192 更强，并将奖牌获取提升 1.1。",
    currencyDisplayName: "奖牌",
    effect() {
        let time = EN(player.re.resetTime)
        if (hasUpgrade("re", 251)) time = time.times(upgradeEffect('re', 251))
        return EN.tetr(10, time.tetr(0.25).add(0.01), time).min("10^^^^^10")
    },
    effectDisplay() { return "^" + format(this.effect()) },
    cost() {
        let cost = EN("1e30000")
        let ugs = EN("e3000")
        for (let a = 231; a <= 232; a++) if (hasUpgrade("re", a)) {
            cost = cost.mul(ugs)
            ugs = ugs.mul("e1000")
        }
        return cost
    },      
    req: [221, 222],
    unlocked() {
        return hasUpgrade("re", 221, 222)
    },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
},
241: { title: "第十四个树形升级",
    description: "所有轮回可购买项强度 +25%，且中子星获取翻倍。",
    currencyDisplayName: "奖牌",
    cost() {
        let cost = EN("1e70000")
        let ugs = EN("e7000")
        for (let a = 241; a <= 242; a++) if (hasUpgrade("re", a)) {
            cost = cost.mul(ugs)
            ugs = ugs.mul("e1000")
        }
        return cost
    },      
    req: [231],
    unlocked() {
        return hasUpgrade("su", 32)
    },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
},
251: { title: "第十五个树形升级",
    description: "中子星获取三倍，且根据本次轮回重置中花费的时间，RU231 更强。",
    currencyDisplayName: "奖牌",
    effect() {
        let time = EN(player.re.resetTime)
        return EN.pent(10, time.pent(1).add(1), time).min("10^^^^^10")
    },
    effectDisplay() { return "^" + format(this.effect()) },
    cost() {
        let cost = EN("1e101010")
        let ugs = EN("e10101")
        for (let a = 251; a <= 252; a++) if (hasUpgrade("re", a)) {
            cost = cost.mul(ugs)
            ugs = ugs.mul("e11111")
        }
        return cost
    },      
    req: [241],
    unlocked() {
        return hasUpgrade("su", 41)
    },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
},
261: { title: "第十六个树形升级",
    description: "所有轮回可购买项强度 +10%，且中子星获取四倍。",
    currencyDisplayName: "奖牌",
    cost() {
        let cost = EN("1e543210")
        let ugs = EN("e71000")
        for (let a = 261; a <= 262; a++) if (hasUpgrade("re", a)) {
            cost = cost.mul(ugs)
            ugs = ugs.mul("e6969")
        }
        return cost
    },      
    req: [251],
    unlocked() {
        return hasUpgrade("su", 54)
    },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
},
262: { title: "第十七个树形升级",
    description: "所有轮回可购买项强度 +5%，且中子星获取五倍。",
    currencyDisplayName: "奖牌",
    cost() {
        let cost = EN("1e543210")
        let ugs = EN("e222222")
        for (let a = 261; a <= 262; a++) if (hasUpgrade("re", a)) {
            cost = cost.mul(ugs)
            ugs = ugs.mul("e6969")
        }
        return cost
    },      
    req: [251],
    unlocked() {
        return hasUpgrade("su", 54)
    },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
},
    },
    challenges: {
        11: {
                name: "对数",
                challengeDescription: "轮回升级 105 被开平方。",
                goalDescription: "FFFF1.000 积分",
                rewardDescription: "获得 ×2 奖牌。",
                canComplete: function() {return player.points.gte("10^^^4")},
                unlocked() { return (hasUpgrade('re', 121)) },
        },
                12: {
                name: "对数^^2",
                challengeDescription: "轮回升级 105 被开立方",
                goalDescription: "FF2.500 积分。",
                rewardDescription: "获得 ×3 奖牌。",
                canComplete: function() {return player.points.gte("10^^1e1450")},
                unlocked() { return (hasChallenge('re', 11)) },
        },
        21: {
            name: "它回来了！",
            challengeDescription: "普通流程。",
            goalDescription: "1G13 积分。",
            rewardDescription: "解锁一个新层，轮回升级 105 效果 ×2。",
            canComplete: function() {return player.points.gte("10^^^13")},
            unlocked() { return (hasChallenge('re', 12)) },
    },
    22: {
        name: "对数^^3",
        challengeDescription: "RU105 升幂至 0.2。",
        goalDescription: "eee1e3,003 积分。",
        rewardDescription: "获得 ×4 奖牌。",
        canComplete: function() {return player.points.gte("10^10^10^10^3003")},
        unlocked() { return (hasUpgrade('re', 122)) },
},
31: {
    name: "对数^^4",
    challengeDescription: "太简单了。",
    goalDescription: "1 积分。",
    rewardDescription: "解锁一个新层，轮回升级 105 效果 ×1,337。",
    canComplete: function() {return player.points.gte("1")},
    unlocked() { return (hasChallenge('re', 21)) },
},
32: {
    name: "对数^^5",
    challengeDescription: "RU105 升幂至 0.25。",
    goalDescription: "FF4.000 积分。",
    rewardDescription: "获得 ×10 奖牌，解锁一个新层，轮回升级 105 效果 ×6,969。",
    canComplete: function() {return player.points.gte("10^^ee1e10")},
    unlocked() { return (hasUpgrade('re', 125)) },
},
41: {
    name: "对数^^6",
    challengeDescription: "RU105 升幂至 0.125。",
    goalDescription: "1F8 积分。",
    rewardDescription: "获得 ×100 奖牌，解锁一个新层，轮回升级 105 效果 ×69,420。",
    canComplete: function() {return player.points.gte("10^^8")},
    unlocked() { return (hasUpgrade('re', 132)) },
},
42: {
    name: "对数^^7",
    challengeDescription: "RU105 升幂至 0.1。",
    goalDescription: "FFFF1.000 积分。",
    rewardDescription: "获得 ×1,000 奖牌。",
    canComplete: function() {return player.points.gte("10^^^4")},
    unlocked() { return (hasUpgrade('re', 135)) },
},
51: {
    name: "对数^^8",
    challengeDescription: "RU105 升幂至 0.0625。",
    goalDescription: "F9e15 积分。",
    rewardDescription: "获得 ×1,000,000 奖牌。",
    canComplete: function() {return player.points.gte("10^^9e15")},
    unlocked() { return (hasChallenge('re', 42)) },
},
52: {
    name: "对数^^9",
    challengeDescription: "RU105 升幂至 0.05。",
    goalDescription: "1F10 积分。",
    rewardDescription: "解锁一个新层。",
    canComplete: function() {return player.points.gte("10^^10")},
    unlocked() { return (hasChallenge('re', 51)) },
},
61: {
    name: "对数^^^1",
    challengeDescription: "RU105 升幂至 0.03125。",
    goalDescription: "FFF1.000 积分。",
    rewardDescription: "获得 ×100,000,000 奖牌。",
    canComplete: function() {return player.points.gte("10^^^3")},
    unlocked() { return (hasUpgrade('re', 142)) },
},
62: {
    name: "对数^^^2",
    challengeDescription: "RU105 升幂至 0.025。",
    goalDescription: "FF3.000 积分。",
    rewardDescription: "解锁一个新层。",
    canComplete: function() {return player.points.gte("10^^e1e10")},
    unlocked() { return (hasChallenge('re', 61)) },
},
71: {
    name: "对数^^^3",
    challengeDescription: "RU105 升幂至 0.02。",
    goalDescription: "FFFF1.000 积分。",
    rewardDescription: "解锁一个新层并获得 ×1.000e9 奖牌（我建议你使用单标签页模式，否则层会出故障）。",
    canComplete: function() {return player.points.gte("10^^^4")},
    unlocked() { return (hasUpgrade('re', 145)) },
},
72: {
    name: "对数^^^^4",
    completionLimit: 1,
    challengeDescription: function() {return "RU105 效果升幂至 0.01。<br>"+challengeCompletions(this.layer, this.id)
    + "/" + this.completionLimit + " 次完成"},
    canComplete: function() {return player.points.gte(new EN.pent(10, challengeCompletions("re", 72) + 1)) },//always does 1 at a time, check if points > req},
    goalDescription: function() {return format(new EN.pent(1e308, challengeCompletions("re", 72) + 1))+" 积分"},
    rewardDescription: function() {return "获得额外 ×1.000e150 奖牌。"},
    unlocked() {return hasUpgrade('re', 151) },
},
81: {
    name: "对数^^^^^5",
    challengeDescription: "RU192 不生效，且 RU155 被开立方。",
    goalDescription: "1.000G100 积分。",
    rewardDescription: "获得 ×1e3,000 奖牌，然后将其提升 1.111。",
    canComplete: function() {return player.points.gte("10^^^100")},
    unlocked() { return (hasUpgrade('re', 222)) },
},
    },
    name: "轮回", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "轮", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        badges: new EN(0),
        auto: false,
    }},
    color: "#39e75f",
    requires: new EN(1), // Can be a function that takes requirement increases into account
    resource: "奖牌", // Name of prestige currency
    baseResource: "虚空", // Name of resource prestige is based on
    baseAmount() {return player.v.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    branches: [],
    exponent: 0, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(25).mul(buyableEffect("re", 21)).pow(buyableEffect("re", 22))
        mult = mult.times(tmp.su.effect)
        if (hasUpgrade('v', 55)) mult = mult.times(5)
        if (hasMilestone('re', 4)) mult = mult.times(2)
        if (hasUpgrade('re', 25)) mult = mult.times(1.1)
        if (hasUpgrade('re', 32)) mult = mult.times(1.2)
        if (hasUpgrade('w', 11)) mult = mult.times(1.1)
        if (hasUpgrade('re', 35)) mult = mult.times(1.25)
        if (hasUpgrade('re', 45)) mult = mult.times(1.337)
        if (hasUpgrade('w', 55)) mult = mult.times(10)
        if (hasUpgrade('re', 53)) mult = mult.times(1.5)
        if (hasUpgrade('re', 55)) mult = mult.times(2)
        if (hasUpgrade('x', 11)) mult = mult.times(1.25)
        if (player.re.badges.gte(1)) mult = mult.times(player.re.badges.max(1).pow(0.1))
        if (hasUpgrade('re', 64)) mult = mult.times(upgradeEffect('re', 64))
        if (hasUpgrade('re', 65)) mult = mult.times(1.5)
        if (hasMilestone('re', 9)) mult = mult.times(1.1)
        if (hasUpgrade('x', 55)) mult = mult.times(30)
        if (hasMilestone('re', 10)) mult = mult.times(1.25)
        if (hasUpgrade('re', 74)) mult = mult.times(1.1)
        if (hasUpgrade('re', 75)) mult = mult.times(2)
        if (hasUpgrade('re', 81)) mult = mult.times(1.5)
        if (hasUpgrade('y', 11)) mult = mult.times(1.5)
        if (hasUpgrade('re', 83)) mult = mult.times(1.7)
        if (hasUpgrade('re', 84)) mult = mult.times(1.5)
        if (hasMilestone('re', 11)) mult = mult.times(1.111)
        if (hasUpgrade('y', 55)) mult = mult.div(3)
        if (hasUpgrade('re', 85)) mult = mult.times(3)
        if (hasUpgrade('re', 91)) mult = mult.times(2)
        if (hasUpgrade('re', 92)) mult = mult.times(4)
        if (hasUpgrade('re', 93)) mult = mult.times(8)
        if (hasUpgrade('re', 94)) mult = mult.times(1.5)
        if (hasUpgrade('re', 95)) mult = mult.times(1.33)
        if (hasUpgrade('re', 101)) mult = mult.times(1.25)
        if (hasMilestone('re', 13)) mult = mult.times(1.2)
        if (hasUpgrade('z', 11)) mult = mult.times(2)
        if (hasChallenge('z', 11)) mult = mult.times(1.1)
        if (hasChallenge('z', 12)) mult = mult.times(1.2)
        if (hasChallenge('z', 21)) mult = mult.times(1.3)
        if (hasChallenge('z', 22)) mult = mult.times(1.5)
        if (hasChallenge('z', 31)) mult = mult.times(1.6)
        if (hasChallenge('z', 32)) mult = mult.times(1.8)
        if (hasChallenge('z', 41)) mult = mult.times(1.9)
        if (hasChallenge('z', 42)) mult = mult.times(2.1)
        if (hasChallenge('z', 51)) mult = mult.times(2.4)
        if (hasChallenge('z', 52)) mult = mult.times(2.6)
        if (hasChallenge('z', 61)) mult = mult.times(2.9)
        if (hasChallenge('z', 62)) mult = mult.times(3.1)
        if (hasChallenge('z', 71)) mult = mult.times(3.5)
        if (hasChallenge('z', 72)) mult = mult.times(3.8)
        if (hasChallenge('z', 81)) mult = mult.times(4.2)
        if (hasUpgrade('re', 102)) mult = mult.times(5)
        if (hasUpgrade('re', 103)) mult = mult.times(2)
        if (hasUpgrade('re', 104)) mult = mult.times(1.25)
        if (hasUpgrade('ar', 11)) mult = mult.times(3)
        if (hasUpgrade('ar', 55)) mult = mult.times(125)
        if (hasUpgrade('ba', 11)) mult = mult.times(4)
        if (hasUpgrade('ba', 55)) mult = mult.times(10000)
        if (hasUpgrade('ci', 11)) mult = mult.times(5)
        if (hasUpgrade('ci', 12)) mult = mult.times(2)
        if (hasUpgrade('ci', 55)) mult = mult.times(1e6)
        if (hasUpgrade('re', 115)) mult = mult.times(100)
        if (hasChallenge('re', 11)) mult = mult.times(2)
        if (hasChallenge('re', 12)) mult = mult.times(3)
        if (hasUpgrade('du', 11)) mult = mult.times(7)
        if (hasUpgrade('du', 12)) mult = mult.times(7)
        if (hasUpgrade('du', 55)) mult = mult.times(1e9)
        if (hasChallenge('re', 22)) mult = mult.times(4)
        if (hasUpgrade('eg', 11)) mult = mult.times(10)
        if (hasUpgrade('eg', 55)) mult = mult.times(1e10)
        if (hasUpgrade('re', 123)) mult = mult.pow(upgradeEffect('re', 123))
        if (hasUpgrade('re', 124)) mult = mult.times(upgradeEffect('re', 124))
        if (hasChallenge('re', 32)) mult = mult.times(10)
        if (hasUpgrade('fi', 11)) mult = mult.times(20)
        if (hasUpgrade('fi', 55)) mult = mult.times(1e12)
        if (hasChallenge('re', 41)) mult = mult.times(100)
        if (hasUpgrade('ga', 11)) mult = mult.times(100)
        if (hasUpgrade('ga', 55)) mult = mult.pow(1.1)
        if (hasUpgrade('re', 134)) mult = mult.times(1000)
        if (hasChallenge('re', 42)) mult = mult.times(1000)
        if (hasChallenge('re', 51)) mult = mult.times(1000000)
        if (hasUpgrade('ha', 11)) mult = mult.times(1000)
        if (hasUpgrade('ha', 55)) mult = mult.pow(1.11)
                if (hasChallenge('re', 61)) mult = mult.times(100000000)
                if (hasUpgrade('is', 11)) mult = mult.times(1000000)
                if (hasUpgrade('is', 55)) mult = mult.pow(1.23456789)
                if (hasChallenge('re', 71)) mult = mult.times(1000000000)
                if (hasUpgrade('ju', 11)) mult = mult.pow(1.01)
                if (hasUpgrade('ju', 55)) mult = mult.times(1e10)
                if (hasChallenge('re', 72)) mult = mult.times(1e150)
                        if (hasUpgrade('re', 171)) mult = mult.times(upgradeEffect('re', 171))
                        if (hasUpgrade('re', 182)) mult = mult.pow(upgradeEffect('re', 182))
                        if (hasUpgrade('re', 193)) mult = mult.times(upgradeEffect('re', 193))
                        if (hasUpgrade('re', 202)) mult = mult.pow(upgradeEffect('re', 202))
                        if (hasUpgrade('re', 221)) mult = mult.pow(1.2)
                        if (hasChallenge('re', 81)) mult = mult.times("1e3000")
                        if (hasChallenge('re', 81)) mult = mult.pow("1.111")
                        if (hasUpgrade('re', 231)) mult = mult.pow(1.1)
                        if (hasUpgrade('su', 21)) mult = mult.pow(1.01)
                        if (hasUpgrade('su', 33)) mult = mult.pow(1.025)
                        if (hasUpgrade('su', 34)) mult = mult.pow(1.01)
                        if (hasUpgrade('su', 43)) mult = mult.times(upgradeEffect('su', 43))
                        if (hasUpgrade('su', 51)) mult = mult.pow(1.05)
                        if (hasUpgrade('su', 72)) mult = mult.pow(1.5)
        return mult
    },
    doReset(resettingLayer) {
        let keep = [];
        if (hasMilestone("su", 2) && resettingLayer=="su") keep.push("milestones")
        if (hasMilestone("su", 4) && resettingLayer=="su") keep.push("challenges")
        if (hasMilestone("su", 5) && resettingLayer=="su") keep.push("upgrades")
        if (layers[resettingLayer].row > this.row) layerDataReset("re", keep)
    },
    effect() {
        if (hasUpgrade("re", 55))
            return new EN(1).mul(buyableEffect("re", 11)).pow(buyableEffect("re", 12))
        let eff = EN.pow(1)
        return eff;
    },
    update(diff) {
        if (hasUpgrade("re", 55)) return player.re.badges = player.re.badges.add(tmp.re.effect.times(diff))
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    hotkeys: [
        {key: "%", description: "Shift+%: 重置以进行轮回", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
layerShown(){return (hasAchievement("a", 111) || player[this.layer].unlocked)},
    automate() {},
    milestones: {
        1: {
            requirementDescription: "1 奖牌",
            effectDescription: "每秒获得洋葱、四边形、圆环、沙子、树和宇宙的 100%。",
            done() { return player.re.points.gte(1) }
        }, 2: {requirementDescription: "共 5 奖牌",
          effectDescription: "获得 ×2 宇宙、×4 树、×8 沙子、×16 圆环、×32 四边形和 ×64 洋葱。",
             done() { return player.re.total.gte(5)},},
             3: {requirementDescription: "完成虚空层",
             effectDescription: "自动购买洋葱升级。",
                done() {return hasUpgrade("v",55)}},
                4: {requirementDescription: "共 100 奖牌",
          effectDescription: "重置时保留洋葱升级、里程碑和挑战，自动购买四边形升级，获得 ×2 奖牌，洋葱升级 71 ×2。",
             done() { return player.re.total.gte(100)},},
             5: {requirementDescription: "共 420 奖牌",
             effectDescription: "洋葱升级 71 ×4。",
                done() { return player.re.total.gte(420)},},
    6: {requirementDescription: "共 1,000 奖牌",
             effectDescription: "重置时保留四边形升级，自动购买圆环升级，且你被动获得木材。",
                done() { return player.re.total.gte(1000)},},
                7: {requirementDescription: "完成木材层",
                effectDescription: "自动购买沙子升级。",
                   done() {return hasUpgrade("w",55)}},
                   8: {requirementDescription: "共 10,000 奖牌",
                   effectDescription: "重置时保留圆环升级、沙子升级和里程碑，并自动购买树形升级。",
                      done() { return player.re.total.gte(10000)},},
                      9: {requirementDescription: "共 1,000,000 奖牌",
                   effectDescription: "重置时保留树形升级，自动购买宇宙升级，获得 ×1.1 奖牌，并被动获得 X 射线。",
                      done() { return player.re.total.gte(1000000)},},
                      10: {requirementDescription: "完成 X 射线层",
                      effectDescription: "获得 ×1.25 奖牌，你开局拥有更多木材，洋葱升级 61 ×1,048,576。",
                         done() {return hasUpgrade("x",55)}},
                         11: {requirementDescription: "共 1.000e9 奖牌",
                         effectDescription: "重置时保留宇宙升级和里程碑，自动购买虚空和木材升级，获得 ×1.111 奖牌，并被动获得庭院。",
                            done() { return player.re.total.gte(1e9)},},
                            12: {requirementDescription: "完成庭院层",
                      effectDescription: "重置时保留虚空升级以及木材升级和里程碑。",
                         done() {return hasUpgrade("y",55)}},
                         13: {requirementDescription: "共 1.000e12 奖牌",
                         effectDescription: "获得 ×1.2 奖牌，被动获得斑马，并自动购买 X 射线升级。",
                            done() { return player.re.total.gte(1e12)},},
                            14: {requirementDescription: "完成斑马层",
                      effectDescription: "重置时保留 X 射线升级，并自动购买庭院升级。",
                         done() {return hasChallenge("z",81)}},
                         15: {requirementDescription: "完成箭层",
                      effectDescription: "被动获得箭，重置时保留庭院升级和里程碑，并自动购买斑马升级。",
                         done() {return hasUpgrade("ar",55)}},
                         16: {requirementDescription: "完成球层",
                         effectDescription: "被动获得球，并在重置时保留斑马升级。",
                            done() {return hasUpgrade("ba",55)}},
                            17: {requirementDescription: "完成圆层",
                         effectDescription: "被动获得圆，重置时保留斑马挑战和箭升级。",
                            done() {return hasUpgrade("ci",55)}},
                            18: {requirementDescription: "完成鸭子层",
                         effectDescription: "被动获得鸭子，自动购买箭、球升级，并在重置时保留球升级。",
                            done() {return hasUpgrade("du",55)}},
                            19: {requirementDescription: "完成蛋层",
                         effectDescription: "被动获得蛋，自动购买圆和鸭子升级。",
                            done() {return hasUpgrade("eg",55)}},
                            20: {requirementDescription: "完成火层",
                         effectDescription: "被动获得火，自动购买蛋升级，并在重置时保留圆升级。",
                            done() {return hasUpgrade("fi",55)}},
                            21: {requirementDescription: "完成游戏层",
                            effectDescription: "被动获得游戏，自动购买火升级，并在重置时保留鸭子升级和挑战。",
                               done() {return hasUpgrade("ga",55)}},
                               22: {requirementDescription: "完成锤子层",
                            effectDescription: "被动获得锤子，自动购买游戏升级，并在重置时保留蛋升级。",
                               done() {return hasUpgrade("ha",55)}},
                               23: {requirementDescription: "完成岛屿层",
                            effectDescription: "被动获得岛屿，自动购买锤子升级，并在重置时保留火升级。",
                               done() {return hasUpgrade("is",55)}},
                               24: {requirementDescription: "完成果汁层",
                               effectDescription: "被动获得果汁，自动购买岛屿升级，并在重置时保留游戏升级。",
                                  done() {return hasUpgrade("ju",55)}},
    },
})