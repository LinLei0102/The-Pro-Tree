
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
            return "Respec upgrades, but you do not get your medals back."
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
                    "Upgrades": {
                        unlocked() {return (hasAchievement("a", 11))},
                content: [
                    ["blank", "15px"],
                    ["raw-html", () => `<h4 style="opacity:.5">Welcome to the Reincarnation! Resets everything except achievements.<br> You will gain 25 medals on your first reincarnation reset.<br> Which you can spend on upgrades, buyables and tree upgrades!<br> Tree upgrades are like for example, you can buy 2 upgrades.<br> But if you get 1 then the other upgrade gets more expensive.</h4>`],
                    ["upgrades", [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]]
                ]
            },
            "Badges": {
                unlocked() {return (hasUpgrade("re", 55))},
                        content: [
                    ["blank", "15px"],
                    ["display-text", () => "You have <h2 style='color: #74fbd4; text-shadow: 0 0 10px #74fbd4'>" + format(player.re.badges) + "</h2> Badges, multiplying medal gain by <h2 style='color: #74fbd4; text-shadow: 0 0 10px #74fbd4'> <br>" + format(player.re.badges.max(1).pow(0.1)) + "x</h2>.<br>" + "<h3>" + format(tmp.re.effect)  + " Badges/s<h3> <br>"],
                    "buyables"
                        ]
                    },
                    "Milestones": {
                        content: [
                            ["blank", "15px"],
                            "milestones"
                        ]
                    },
                    "Tree": {
                        unlocked() {return (hasUpgrade("re", 161))},
                content: [
                    ["raw-html", () => `<h4 style="opacity:.5">Note: Buying an upgrade increases the cost of all upgrades in the same row!</h4>`],
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
                    "Challenges": {
                        unlocked() {return (hasUpgrade("re", 121))},
                content: [
                    ["blank", "15px"],
                    ["challenges", [1,2,3,4,5,6,7,8,9]]
                    
                ]
            },
        },
    },
        tooltip() {
            return ("Reincarnation")
        },
        passiveGeneration() { 
            if (hasMilestone("su", 1)) return (hasMilestone("su", 1)?1:0)
            },
        buyables: {
            11: {
                title: "<h3>Twelfth Buyable<h3>",
                cost(x) { return hasUpgrade("re",61) ? new EN(1000).mul(new EN(5).pow(x)) : new EN(1000).mul(new EN(10).pow(x)) },
                display() {return `<h3>Gain more badges.<h3>\nLevel: ` + formatWhole(player.re.buyables[11]) + `/10,000` + `<br>Cost: ${format(this.cost())} Medals\nEffect: ${format(this.effect())}x Badges`},
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
            title: "<h3>Fifteenth Buyable<h3>",
            cost(x) {return new EN("1000").pow(new EN(1.1).pow(x)).floor()},
            canAfford() { return player.re.points.gte(this.cost())},
            buy() {
               player.re.points = player.re.points.sub(this.cost())
               setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            display() {return `<h3>Exponentiate badge gain.<h3>\nLevel: `+ formatWhole(player.re.buyables[12]) + `\nCost: ${format(this.cost())}\n Medals<br>Effect: ^${format(this.effect())} Badges`},
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
            title: "<h3>Sixteenth Buyable<h3>",
            cost(x) { return new EN(1e100).mul(new EN(10).pow(x)) },
            display() {return `<h3>Gain more medals.<h3>\nLevel: ` + formatWhole(player.re.buyables[21]) + `/1,000` + `<br>Cost: ${format(this.cost())} Badges\nEffect: ${format(this.effect())}x Medals`},
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
        title: "<h3>Seventeenth Buyable<h3>",
        cost(x) { return new EN("1e9").pow(new EN(1.1).pow(x)) },
        display() {return `<h3>Exponentate medals gain.<h3>\nLevel: ` + formatWhole(player.re.buyables[22]) + `<br>Cost: ${format(this.cost())} Badges\nEffect: ^${format(this.effect())} Medals`},
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
        description: "Tetrate point gain based on your reincarnation spent on this reset.",
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
        description: "Gain more lights.",
        cost: new EN("1"),
        unlocked() {
            return hasUpgrade("re", 11)
        }
        },
        13: { title: "528",
        description: "Increase the reincarnation upgrade 11 effect.",
        cost: new EN("1"),
        unlocked() {
            return hasUpgrade("re", 12)
        }
        },
        14: { title: "529",
        description: "Gain x2 Void.",
        cost: new EN("2"),
        unlocked() {
            return hasUpgrade("re", 13)
        }
        },
        15: { title: "530",
        description: "Gain x16 Universal and x256 Sand.",
        cost: new EN("4"),
        unlocked() {
            return hasUpgrade("re", 14)
        }
        },
        21: { title: "531",
        description: "Gain x4 Void and generate void passively.",
        cost: new EN("8"),
        unlocked() {
            return hasUpgrade("re", 15)
        }
        },
        22: { title: "532",
        description: "Gain x2 Universal.",
        cost: new EN("8"),
        unlocked() {
            return hasUpgrade("re", 21)
        }
        },
        23: { title: "533",
        description: "Gain x3 Trees and x9 Rings.",
        cost: new EN("8"),
        unlocked() {
            return hasUpgrade("re", 22)
        }
        },
        24: { title: "534",
        description: "Gain x3 Void.",
        cost: new EN("8"),
        unlocked() {
            return hasUpgrade("re", 23)
        }
        },
        25: { title: "535",
        description: "Gain x2 Trees and x1.1 Medals.",
        cost: new EN("8"),
        unlocked() {
            return hasUpgrade("re", 24)
        }
        },
        31: { title: "536",
        description: "Unlock the next layer.",
        cost: new EN("16"),
        unlocked() {
            return hasUpgrade("re", 25)
        }
        },
        32: { title: "537",
        description: "Gain x1.2 Medals.",
        cost: new EN("32"),
        unlocked() {
            return hasUpgrade("re", 31)
        }
        },
        33: { title: "538",
        description: "Gain x1.25 Void.",
        cost: new EN("32"),
        unlocked() {
            return hasUpgrade("re", 32)
        }
        },
        34: { title: "539",
        description: "Gain x2 Wood.",
        cost: new EN("32"),
        unlocked() {
            return hasUpgrade("re", 33)
        }
        },
        35: { title: "540",
        description: "Gain x1.5 Wood and x1.25 Medals.",
        cost: new EN("32"),
        unlocked() {
            return hasUpgrade("re", 34)
        }
        },
        41: { title: "541",
        description: "Gain x1.25 Wood and x2 Void.",
        cost: new EN("64"),
        unlocked() {
            return hasUpgrade("re", 35)
        }
        },
        42: { title: "542",
        description: "Gain x1.1 Wood, x69 Trees and Rings.",
        cost: new EN("64"),
        unlocked() {
            return hasUpgrade("re", 41)
        }
        },
        43: { title: "543",
        description: "Universal boosts itself (Cap at 1F6x).",
        cost: new EN("64"),
        unlocked() {
            return hasUpgrade("re", 42)
        },
        effect(){return player.u.points.root(0.001).add(1).gte("10^^6") ? new EN("10^^6") : player.u.points.root(0.001).add(1)},
        effectDisplay(){return `${format(this.effect())}x`}
    },
         44: { title: "544",
        description: "The Onion upgrade 71 is x4 and increase the reincarnation upgrade 11 effect.",
        cost: new EN("128"),
        unlocked() {
            return hasUpgrade("re", 43)
        },
        },
        45: { title: "545",
        description: "Gain x1.337 Medals and Onion upgrade 61 x2.",
        cost: new EN("256"),
        unlocked() {
            return hasUpgrade("re", 44)
        },
        },
        51: { title: "546",
        description: "Onion Upgrade 71 x4, gain x4 void, x16 trees and x256 rings.",
        cost: new EN("512"),
        unlocked() {
            return hasUpgrade("re", 45)
        },
        },
        52: { title: "547",
        description: "Onion Upgrade 71 x4 and gain x16 wood.",
        cost: new EN("512"),
        unlocked() {
            return hasUpgrade("re", 51)
        },
        },
        53: { title: "548",
        description: "Gain x1.5 Medals.",
        cost: new EN("512"),
        unlocked() {
            return hasUpgrade("re", 52)
        },
        },
        54: { title: "549",
        description: "Gain x64 Void.",
        cost: new EN("1024"),
        unlocked() {
            return hasUpgrade("re", 53)
        },
        },
        55: { title: "550",
        description: "Gain x2 medals, square Onion upgrade 71, unlock a new layer, gain a massive wood from start and unlock a sub-currency.",
        cost: new EN("16384"),
        unlocked() {
            return hasUpgrade("re", 54)
        },
        },
        61: { title: "551",
        description: "Make the reincarnation buyable cheaper.",
        cost: new EN("16384"),
        unlocked() {
            return hasUpgrade("re", 55)
        },
        },
        62: { title: "552",
        description: "Gain x2 X-Rays.",
        cost: new EN("16384"),
        unlocked() {
            return hasUpgrade("re", 61)
        },
        },
        63: { title: "553",
        description: "Gain x4 X-Rays.",
        cost: new EN("16384"),
        unlocked() {
            return hasUpgrade("re", 62)
        },
        },
        64: { title: "554",
        description: "Medals boosts itself.",
        cost: new EN("32768"),
        unlocked() {
            return hasUpgrade("re", 63)
        },
        effect(){return player.re.points.root(69).add(1).gte("1e69") ? new EN("1e69") : player.re.points.root(69).add(1)},
        
        effectDisplay(){return `${format(this.effect())}x`}
        },
        65: { title: "555",
        description: "Gain x1.5 Medals and reincarnation upgrade 11 is a lot stronger.",
        cost: new EN("65536"),
        unlocked() {
            return hasUpgrade("re", 64)
        },
        },
        71: { title: "556",
        description: "Gain x16 X-Rays.",
        cost: new EN("131072"),
        unlocked() {
            return hasUpgrade("re", 65)
        },
        },
        72: { title: "557",
        description: "Gain x32 X-Rays.",
        cost: new EN("262144"),
        unlocked() {
            return hasUpgrade("re", 71)
        },
        },
        73: { title: "558",
        description: "Gain x4,096 X-Rays.",
        cost: new EN("524288"),
        unlocked() {
            return hasUpgrade("re", 72)
        },
        },
        74: { title: "559",
        description: "Gain x1.1 Medals.",
        cost: new EN("1048576"),
        unlocked() {
            return hasUpgrade("re", 73)
        },
        },
        75: { title: "560",
        description: "Gain x2 Medals & Onion Upgrade 61 is more powerful.",
        cost: new EN("8388608"),
        unlocked() {
            return hasUpgrade("re", 74)
        },
        },
        81: { title: "561",
        description: "Unlock a new layer and gain x1.5 medals.",
        cost: new EN("16777216"),
        unlocked() {
            return hasUpgrade("re", 75)
        },
        },
        82: { title: "562",
        description: "Gain x3,125 Yard and increase Onion upgrade 61 effect.",
        cost: new EN("67108864"),
        unlocked() {
            return hasUpgrade("re", 81)
        },
        },
        83: { title: "563",
        description: "Gain x1.7 Medals.",
        cost: new EN("134217728"),
        unlocked() {
            return hasUpgrade("re", 82)
        },
        },
        84: { title: "564",
        description: "Gain x1.5 Medals.",
        cost: new EN("268435456"),
        unlocked() {
            return hasUpgrade("re", 83)
        },
        },
        85: { title: "565",
        description: "Gain x3 Medals and unlock a new buyable.",
        cost: new EN("1073741824"),
        unlocked() {
            return hasUpgrade("re", 84)
        },
        },
        91: { title: "566",
        description: "Gain x2 Medals and unlock a new layer.",
        cost: new EN("8589934592"),
        unlocked() {
            return hasUpgrade("re", 85)
        },
        },
        92: { title: "567",
        description: "Gain x4 Medals.",
        cost: new EN("8589934592"),
        unlocked() {
            return hasUpgrade("re", 91)
        },
        },
        93: { title: "568",
        description: "Gain x8 Medals and x10,000 Zebra.",
        cost: new EN("17179869184"),
        unlocked() {
            return hasUpgrade("re", 92)
        },
        },
        94: { title: "569",
        description: "Gain x1.5 Medals.",
        cost: new EN("68719476736"),
        unlocked() {
            return hasUpgrade("re", 93)
        },
        },
        95: { title: "570",
        description: "Gain x1.33 Medals and increase Onion upgrade 61 effect.",
        cost: new EN("137438953472"),
        unlocked() {
            return hasUpgrade("re", 94)
        },
        },
        101: { title: "571",
        description: "Gain x1.25 Medals, increase Onion upgrade 61 effect again and you start with more yard.",
        cost: new EN("274877906944"),
        unlocked() {
            return hasUpgrade("re", 95)
        },
        },
        102: { title: "572",
        description: "Gain x5 Medals and you start with even more yard.",
        cost: new EN("1.1258999e15"),
        unlocked() {
            return hasUpgrade("re", 101)
        },
        },
        103: { title: "573",
        description: "Gain x2 Medals, x1e9 Zebra and Onion upgrade 61 even more effect.",
        cost: new EN("4.5035996e15"),
        unlocked() {
            return hasUpgrade("re", 102)
        },
        },
        104: { title: "574",
        description: "Gain x1.25 Medals.",
        cost: new EN("1.8014399e16"),
        unlocked() {
            return hasUpgrade("re", 103)
        },
        },
        105: { title: "575",
            description: "Pentate point gain based on your reincarnation spent on this reset, also unlocks a new layer! (But RU11 and OU61 does nothing.)",
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
        description: "Boost the reincarnation upgrade 105 by x16, unlock the final layer for row 7 and gain x10 arrows.",
        cost: new EN("2e19"),
        unlocked() {
            return hasUpgrade("re", 105)
        },
        },
        112: { title: "?",
        description: "Boost reincarnation upgrade 105 by x69 (Nice).",
        cost: new EN("5e23"),
        unlocked() {
            return hasUpgrade("re", 111)
        },
        },
        113: { title: "?",
        description: "Unlock row 8 layer and boost reincarnation upgrade 105 by x5.",
        cost: new EN("1e24"),
        unlocked() {
            return hasUpgrade("re", 112)
        },
        },
        114: { title: "?",
        description: "Boost reincarnation upgrade 105 by triple, cube circle gain and boost arrow, ball gain by x1,000.",
        cost: new EN("1e26"),
        unlocked() {
            return hasUpgrade("re", 113)
        },
        },
        115: { title: "?",
        description: "Gain x2,000 Circles, x100 Medals and triple reincarnation upgrade 105 (DO NOT FORGET TO CHECK ZEBRA CHALLENGES!)",
        cost: new EN("1e32"),
        unlocked() {
            return hasUpgrade("re", 114)
        },
        },
        121: { title: "?",
        description: "Boost Reincarnation upgrade 105 by x420 and unlock 3 reincarnation challenges.",
        cost: new EN("1e34"),
        unlocked() {
            return hasUpgrade("re", 115)
        },
        },
        122: { title: "?",
        description: "Unlock 2 new reincarnation challenges and boost duck gain by x69,420.",
        cost: new EN("1e41"),
        unlocked() {
            return hasUpgrade("re", 121)
        },
        },
        123: { title: "?",
        description: "Medal powers itself (Hardcaps at 7.4) (OP), gain x69,420 Eggs and boost RU105 effect.",
        cost: new EN("2e58"),
        unlocked() {
            return hasUpgrade("re", 122)
            
        },
        effect(){return player.re.points.root(1000).add(0).gte("7.4") ? new EN("7.4") : player.re.points.root(1000).add(0)},
        effectDisplay(){return `^${format(this.effect())}`}
        },
        124: { title: "?",
        description: "Every reincarnation upgrade, you get x2 more medals (compounding).",
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
        description: "Unlock 1 new reincarnation challenge.",
        cost: new EN("1e95"),
        unlocked() {
            return hasUpgrade("re", 124)
        },
    },
    131: { title: "?",
        description: "Boost Fire gain by x69,420 and RU105 effect x10.",
        cost: new EN("1e110"),
        unlocked() {
            return hasUpgrade("re", 125)
        },
    },
    132: { title: "?",
        description: "Unlock 1 new reincarnation challenge and RU105 effect x2.",
        cost: new EN("1e116"),
        unlocked() {
            return hasUpgrade("re", 131)
        },
    },
    133: { title: "?",
        description: "Boost Game gain by x69,420 and RU105 effect x10.",
        cost: new EN("1e130"),
        unlocked() {
            return hasUpgrade("re", 132)
        },
    },
    134: { title: "?",
        description: "Gain x1,000 medals.",
        cost: new EN("1e140"),
        unlocked() {
            return hasUpgrade("re", 133)
        },
    },
    135: { title: "?",
        description: "Unlock 3 new reincarnation challenges and RU105 effect is squared (COMPLETELY BROKEN)",
        cost: new EN("1e145"),
        unlocked() {
            return hasUpgrade("re", 134)
        },
    },
    141: { title: "?",
        description: "Gain x69,420 Hammers and RU105 effect x100.",
        cost: new EN("1.777e177"),
        unlocked() {
            return hasUpgrade("re", 135)
        },
    },
    142: { title: "?",
        description: "Unlock 2 new reincarnation challenges and RU105 effect is increased by ^2.5!",
        cost: new EN("1e200"),
        unlocked() {
            return hasUpgrade("re", 141)
        },
    },
    143: { title: "?",
        description: "Gain x69,420 Islands and RU105 effect x10,000.",
        cost: new EN("1e267"),
        unlocked() {
            return hasUpgrade("re", 142)
        },
    },
    144: { title: "?",
        description: "Unlock 2 new reincarnation buyables.",
        cost: new EN("1.80e308"),
        unlocked() {
            return hasUpgrade("re", 143)
        },
    },
    145: { title: "?",
        description: "Unlock 1 new reincarnation challenge and RU105 effect is squared again.",
        cost: new EN("1e2988"),
        unlocked() {
            return hasUpgrade("re", 144)
        },
    },
    151: { title: "?",
        description: "Unlock a new reincarnation challenge and gain x69,420 juices.",
        cost: new EN("1e3046"),
        unlocked() {
            return hasUpgrade("re", 145)
        },
    },
    152: { title: "?",
        description: "RU105 effect is cubed!",
        cost: new EN("1e3060"),
        unlocked() {
            return hasUpgrade("re", 151)
        },
    },
    153: { title: "?",
        description: "RU105 effect is squared!",
        cost: new EN("1e3296"),
        unlocked() {
            return hasUpgrade("re", 152)
        },
    },
    154: { title: "?",
        description: "DISABLE RU105 effect!",
        cost: new EN("1e3300"),
        unlocked() {
            return hasUpgrade("re", 153)
        },
    },
    155: { title: "?",
        description: "Pentate point gain based on your reincarnation spent on this reset (Stronger)",
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
        description: "Unlock a new sub-tab",
        cost: new EN("1e3306"),
        unlocked() {
            return hasUpgrade("re", 155)
        },
    },
    171: { title: "First Tree Upgrade",
        description: "Gain more medals based on your reincarnation spent on this reset (Hardcaps at 1e10,000x)",
        currencyDisplayName: "Medals",
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
     181: { title: "Second Tree Upgrade",
        description: "The previous upgrade is tripled.",
        currencyDisplayName: "Medals",
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
    182: { title: "Third Tree Upgrade",
        description: "Power your medals based on your reincarnation time spent on this reset (Hardcaps at 1.1)",
        currencyDisplayName: "Medals",
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
    191: { title: "Fourth Tree Upgrade",
        description: "The RU171 is tripled again.",
        currencyDisplayName: "Medals",
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
    192: { title: "Fifth Tree Upgrade",
        description: "The RU155 is stronger based on your reincarnation time spent on this reset.",
        currencyDisplayName: "Medals",
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
    193: { title: "Sixth Tree Upgrade",
        description: "Every reincarnation upgrade you have now gives you 1,000x medals and RU171 is doubled.",
        currencyDisplayName: "Medals",
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
    201: { title: "Seventh Tree Upgrade",
        description: "The RU171 is tripled yet again.",
        currencyDisplayName: "Medals",
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
    202: { title: "Eighth Tree Upgrade",
        description: "Badges powers medal gain.",
        currencyDisplayName: "Medals",
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
    211: { title: "Ninth Tree Upgrade",
        description: "The RU171 is doubled.",
        currencyDisplayName: "Medals",
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
    212: { title: "Tenth Tree Upgrade",
    description: "The RU192 is cubed.",
    currencyDisplayName: "Medals",
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
221: { title: "Eleventh Tree Upgrade",
    description: "Gain ^1.2 Medals abd RU171 is quintupled.",
    currencyDisplayName: "Medals",
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
222: { title: "Twelfth Tree Upgrade",
    description: "Unlock the final reincarnation challenge and RU192 is tetrated.",
    currencyDisplayName: "Medals",
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
231: { title: "Thirteenth Tree Upgrade",
    description: "RU192 is stronger based on time spent on this reincarnation reset and raise medal gain by 1.1.",
    currencyDisplayName: "Medals",
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
241: { title: "Fourteenth Tree Upgrade",
    description: "All Reincarnation Buyables are 25% stronger and double neutron star gain.",
    currencyDisplayName: "Medals",
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
251: { title: "Fifteenth Tree Upgrade",
    description: "Triple Neutron Star Gain and RU231 is stronger based on time spent on this reincarnation reset.",
    currencyDisplayName: "Medals",
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
261: { title: "Sixteenth Tree Upgrade",
    description: "All Reincarnation Buyables are 10% stronger and quadruple neutron star gain.",
    currencyDisplayName: "Medals",
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
262: { title: "Seventeenth Tree Upgrade",
    description: "All Reincarnation Buyables are 5% stronger and quintuple neutron star gain.",
    currencyDisplayName: "Medals",
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
                name: "Log",
                challengeDescription: "Reincarnation Upgrade 105 is square rooted.",
                goalDescription: "FFFF1.000 Points",
                rewardDescription: "Gain x2 medals.",
                canComplete: function() {return player.points.gte("10^^^4")},
                unlocked() { return (hasUpgrade('re', 121)) },
        },
                12: {
                name: "Log^^2",
                challengeDescription: "Reincarnation Upgrade 105 is cube rooted",
                goalDescription: "FF2.500 Points.",
                rewardDescription: "Gain x3 medals.",
                canComplete: function() {return player.points.gte("10^^1e1450")},
                unlocked() { return (hasChallenge('re', 11)) },
        },
        21: {
            name: "Its back!",
            challengeDescription: "Normal Run.",
            goalDescription: "1G13 Points.",
            rewardDescription: "Unlock a new layer and x2 reincarnation upgrade 105 effect.",
            canComplete: function() {return player.points.gte("10^^^13")},
            unlocked() { return (hasChallenge('re', 12)) },
    },
    22: {
        name: "Log^^3",
        challengeDescription: "RU105 is powered to 0.2.",
        goalDescription: "eee1e3,003 Points.",
        rewardDescription: "Gain x4 medals.",
        canComplete: function() {return player.points.gte("10^10^10^10^3003")},
        unlocked() { return (hasUpgrade('re', 122)) },
},
31: {
    name: "Log^^4",
    challengeDescription: "Too easy.",
    goalDescription: "1 Point.",
    rewardDescription: "Unlock a new layer and x1,337 reincarnation upgrade 105 effect.",
    canComplete: function() {return player.points.gte("1")},
    unlocked() { return (hasChallenge('re', 21)) },
},
32: {
    name: "Log^^5",
    challengeDescription: "RU105 is powered to 0.25.",
    goalDescription: "FF4.000 Points.",
    rewardDescription: "Gain x10 medals, unlock a new layer and x6,969 reincarnation upgrade 105 effect.",
    canComplete: function() {return player.points.gte("10^^ee1e10")},
    unlocked() { return (hasUpgrade('re', 125)) },
},
41: {
    name: "Log^^6",
    challengeDescription: "RU105 is powered to 0.125.",
    goalDescription: "1F8 Points.",
    rewardDescription: "Gain x100 medals, unlock a new layer and x69,420 reincarnation upgrade 105 effect.",
    canComplete: function() {return player.points.gte("10^^8")},
    unlocked() { return (hasUpgrade('re', 132)) },
},
42: {
    name: "Log^^7",
    challengeDescription: "RU105 is powered to 0.1.",
    goalDescription: "FFFF1.000 Points.",
    rewardDescription: "Gain x1,000 medals.",
    canComplete: function() {return player.points.gte("10^^^4")},
    unlocked() { return (hasUpgrade('re', 135)) },
},
51: {
    name: "Log^^8",
    challengeDescription: "RU105 is powered to 0.0625.",
    goalDescription: "F9e15 Points.",
    rewardDescription: "Gain x1,000,000 medals.",
    canComplete: function() {return player.points.gte("10^^9e15")},
    unlocked() { return (hasChallenge('re', 42)) },
},
52: {
    name: "Log^^9",
    challengeDescription: "RU105 is powered to 0.05.",
    goalDescription: "1F10 Points.",
    rewardDescription: "Unlock a new layer.",
    canComplete: function() {return player.points.gte("10^^10")},
    unlocked() { return (hasChallenge('re', 51)) },
},
61: {
    name: "Log^^^1",
    challengeDescription: "RU105 is powered to 0.03125.",
    goalDescription: "FFF1.000 Points.",
    rewardDescription: "Gain x100,000,000 medals.",
    canComplete: function() {return player.points.gte("10^^^3")},
    unlocked() { return (hasUpgrade('re', 142)) },
},
62: {
    name: "Log^^^2",
    challengeDescription: "RU105 is powered to 0.025.",
    goalDescription: "FF3.000 Points.",
    rewardDescription: "Unlock a new layer.",
    canComplete: function() {return player.points.gte("10^^e1e10")},
    unlocked() { return (hasChallenge('re', 61)) },
},
71: {
    name: "Log^^^3",
    challengeDescription: "RU105 is powered to 0.02.",
    goalDescription: "FFFF1.000 Points.",
    rewardDescription: "Unlock a new layer and gain x1.000e9 medals (I recommend you using single tab mode or the layers will giltch).",
    canComplete: function() {return player.points.gte("10^^^4")},
    unlocked() { return (hasUpgrade('re', 145)) },
},
72: {
    name: "Log^^^^4",
    completionLimit: 1,
    challengeDescription: function() {return "RU105 effect is powered to 0.01.<br>"+challengeCompletions(this.layer, this.id)
    + "/" + this.completionLimit + " completions"},
    canComplete: function() {return player.points.gte(new EN.pent(10, challengeCompletions("re", 72) + 1)) },//always does 1 at a time, check if points > req},
    goalDescription: function() {return format(new EN.pent(1e308, challengeCompletions("re", 72) + 1))+" Points"},
    rewardDescription: function() {return "Gain x1.000e150 more medals."},
    unlocked() {return hasUpgrade('re', 151) },
},
81: {
    name: "Log^^^^^5",
    challengeDescription: "RU192 does nothing and RU155 is cube rooted.",
    goalDescription: "1.000G100 Points.",
    rewardDescription: "Gain x1e3,000 medals and then raise it by 1.111.",
    canComplete: function() {return player.points.gte("10^^^100")},
    unlocked() { return (hasUpgrade('re', 222)) },
},
    },
    name: "Reincarnation", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Re", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        badges: new EN(0),
        auto: false,
    }},
    color: "#39e75f",
    requires: new EN(1), // Can be a function that takes requirement increases into account
    resource: "Medals", // Name of prestige currency
    baseResource: "Void", // Name of resource prestige is based on
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
        {key: "%", description: "Shift+%: Reset for reincarnation", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
layerShown(){return (hasAchievement("a", 111) || player[this.layer].unlocked)},
    automate() {},
    milestones: {
        1: {
            requirementDescription: "1 Medal",
            effectDescription: "Gain 100% of Onions, Quadrilaterals, Rings, Sand, Trees and Universal per second.",
            done() { return player.re.points.gte(1) }
        }, 2: {requirementDescription: "5 Total Medals",
          effectDescription: "Gain x2 Universal, x4 trees, x8 Sand, x16 Rings, x32 Quadrilaterals and x64 Onions.",
             done() { return player.re.total.gte(5)},},
             3: {requirementDescription: "Finish Void Layer",
             effectDescription: "Autobuy Onions upgrades.",
                done() {return hasUpgrade("v",55)}},
                4: {requirementDescription: "100 Total Medals",
          effectDescription: "Keep Onions upgrades, milestones and challenges on reset, autobuy quadrilateral upgrades, gain x2 medals and onion upgrade 71 x2.",
             done() { return player.re.total.gte(100)},},
             5: {requirementDescription: "420 Total Medals",
             effectDescription: "Onions Upgrade 71 x4.",
                done() { return player.re.total.gte(420)},},
    6: {requirementDescription: "1,000 Total Medals",
             effectDescription: "Keep quadrilateral upgrades on reset, autobuy ring upgrades and you gain wood passively.",
                done() { return player.re.total.gte(1000)},},
                7: {requirementDescription: "Finish Wood Layer",
                effectDescription: "Autobuy Sand upgrades.",
                   done() {return hasUpgrade("w",55)}},
                   8: {requirementDescription: "10,000 Total Medals",
                   effectDescription: "Keep Ring upgrades, Sand upgrades & milestones on reset and autobuy tree upgrades.",
                      done() { return player.re.total.gte(10000)},},
                      9: {requirementDescription: "1,000,000 Total Medals",
                   effectDescription: "Keep tree upgrades on reset, autobuy universe upgrades, gain x1.1 medals and gain x-rays passively.",
                      done() { return player.re.total.gte(1000000)},},
                      10: {requirementDescription: "Finish X-Ray Layer",
                      effectDescription: "Gain x1.25 Medals, you start with even more wood and onion upgrade 61 x1,048,576.",
                         done() {return hasUpgrade("x",55)}},
                         11: {requirementDescription: "1.000e9 Total Medals",
                         effectDescription: "Keep Universal upgrades & milestones on reset, autobuy void and wood upgrades, gain x1.111 medals and gain yard passively.",
                            done() { return player.re.total.gte(1e9)},},
                            12: {requirementDescription: "Finish Yard Layer",
                      effectDescription: "Keep void upgrades and wood upgrades & milestones on reset.",
                         done() {return hasUpgrade("y",55)}},
                         13: {requirementDescription: "1.000e12 Total Medals",
                         effectDescription: "Gain x1.2 medals, gain zebra passively and autobuy xray upgrades.",
                            done() { return player.re.total.gte(1e12)},},
                            14: {requirementDescription: "Finish Zebra Layer",
                      effectDescription: "Keep X-Ray upgrades on reset and autobuy yard upgrades.",
                         done() {return hasChallenge("z",81)}},
                         15: {requirementDescription: "Finish Arrows Layer",
                      effectDescription: "Gain arrows passively, keep yard upgrades & milestones on reset and autobuy zebra upgrades.",
                         done() {return hasUpgrade("ar",55)}},
                         16: {requirementDescription: "Finish Balls Layer",
                         effectDescription: "Gain balls passively and keep zebra upgrades on reset.",
                            done() {return hasUpgrade("ba",55)}},
                            17: {requirementDescription: "Finish Circles Layer",
                         effectDescription: "Gain circles passively, keep zebra challenges and arrow upgrades on reset.",
                            done() {return hasUpgrade("ci",55)}},
                            18: {requirementDescription: "Finish Ducks Layer",
                         effectDescription: "Gain ducks passively, autobuy arrows, balls upgrades and keep balls upgrades on reset.",
                            done() {return hasUpgrade("du",55)}},
                            19: {requirementDescription: "Finish Eggs Layer",
                         effectDescription: "Gain eggs passively, autobuy circle and duck upgrades.",
                            done() {return hasUpgrade("eg",55)}},
                            20: {requirementDescription: "Finish Fire Layer",
                         effectDescription: "Gain fire passively, autobuy eggs upgrades and keep circle upgrades on reset.",
                            done() {return hasUpgrade("fi",55)}},
                            21: {requirementDescription: "Finish Game Layer",
                            effectDescription: "Gain games passively, autobuy fire upgrades and keep duck upgrades & challenges on reset.",
                               done() {return hasUpgrade("ga",55)}},
                               22: {requirementDescription: "Finish Hammer Layer",
                            effectDescription: "Gain hammers passively, autobuy game upgrades and keep eggs upgrades on reset.",
                               done() {return hasUpgrade("ha",55)}},
                               23: {requirementDescription: "Finish Island Layer",
                            effectDescription: "Gain islands passively, autobuy hammer upgrades and keep fire upgrades on reset.",
                               done() {return hasUpgrade("is",55)}},
                               24: {requirementDescription: "Finish Juice Layer",
                               effectDescription: "Gain juices passively, autobuy island upgrades and keep games upgrades on reset.",
                                  done() {return hasUpgrade("ju",55)}},
    },
})