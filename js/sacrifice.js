
addLayer("sa", {
    effect(){

    },
    effect(){
        return ExpantaNum.pow(1, player[this.layer].points)
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
tabFormat: [
    "main-display",
    "prestige-button",
    ["microtabs", "stuff"],
    ["blank", "25px"],
],
row: "10",
microtabs: {
    stuff: {
                    "Upgrades": {
                        unlocked() {return (hasAchievement("a", 11))},
                content: [
                    ["blank", "15px"],
                    ["raw-html", () => `<h4 style="opacity:.5">Welcome to the Sacrifice! Resets a few stuff.<br> You will gain 1 Sacrifice Points on your first sacrifice reset.<br> Which you can spend on upgrades!</h4>`],
                    ["upgrades", [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]]
                ]
                    },
                    "Milestones": {
                        
                        content: [
                            ["blank", "15px"],
                            "milestones"
                        ]
                        },
                        "Challenges": {
                            unlocked() {return (hasUpgrade("sa", 11))},
                    content: [
                        ["blank", "15px"],
                        ["display-text", () => "You have <h2 style='color: red; text-shadow: 0 0 10px red'>" + formatWhole(player.sa.challengepoint) + "</h2> Challenge Points, multiplying SP gain by <h2 style='color: purple; text-shadow: 0 0 10px purple'>" + format(player.sa.challengepoint.max(1).pow(2)) + "x</h2>.<br>"],
                        ["display-text", () => "You have <h2 style='color: green; text-shadow: 0 0 10px red'>" + formatWhole(player.sa.challengepower) + "</h2> Challenge Power, tetrating SP and Challenge Point gain by<h2 style='color: red; text-shadow: 0 0 10px red'>" + " ^^" + format(player.sa.challengepower.max(1).pow(3)) + "</h2>.<br>"],
                        ["display-text", () => "You have <h2 style='color: white; text-shadow: 0 0 10px green'>" + formatWhole(player.sa.challengeexp) + "</h2> Challenge Exponential, pentating SP, CP and crystal stages gain by<h2 style='color: green; text-shadow: 0 0 10px red'>" + " ^^^" + format(player.sa.challengeexp.max(1).pow(4)) + "</h2>.<br>"],
                        ["display-text", () => "You have <h2 style='color: white; text-shadow: 0 0 10px yellow'>" + formatWhole(player.sa.challengetet) + "</h2> Challenge Tetrational, pentating SP, CP, CE and crystal stages gain by<h2 style='color: white; text-shadow: 0 0 10px yellow'>" + " ^^^" + format(player.sa.challengetet.max(1).pow(5)) + "</h2>.<br>"],
                        ["display-text", () => "You have <h2 style='color: white; text-shadow: 0 0 10px blue'>" + formatWhole(player.sa.challengepent) + "</h2> Challenge Pentational, pentating SP, CP, CE, CT and crystal stages gain by<h2 style='color: white; text-shadow: 0 0 10px green'>" + " ^^^" + format(player.sa.challengepent.max(1).tetr(6)) + "</h2>.<br>"],
                        ["challenges", [1,2,3,4]]
                        
                    ]
                },
                },
    },
        tooltip() {
            return ("Sacrifice")
        },
    upgrades: {
        11: { title: "1,001",
        description: "Crystal also boosts points gain.",
        cost: new EN(1),
    effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
    effect() {
        return player.su.crystal.add(1).pow("0.5")
    },
},
12: { title: "1,002",
        description: "Crystal stages raises itself.",
        cost: new EN("5"),
        unlocked() {
            return hasUpgrade("sa", 11)
            
        },
        effectDisplay() { return "^" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.crystalstages.add(1).pow("0.5")
        },
        },
        13: { title: "1,003",
        description: "Crystal stages tetrates itself.",
        cost: new EN("25"),
        unlocked() {
            return hasUpgrade("sa", 12)
            
        },
        effectDisplay() { return "^^" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.crystalstages.add(1).pow("0.5")
        },
        },
        14: { title: "1,004",
        description: "Crystal levels is boosted based on juice time spent on this reset and triple SP gain.",
        cost: new EN("125"),
        unlocked() {
            return hasUpgrade("sa", 13)
        },
        effect() {
            let time = EN(player.ju.resetTime)
            return EN.pent(100, time.pow("100").pow(10), time)
        },
        effectDisplay() { return "x" + format(this.effect()) },
    },
    15: { title: "1,005",
        description: "Gain 1.66x more SP.",
        cost: new EN(625),
        unlocked() {
            return hasUpgrade("sa", 14)
        },
},
21: { title: "1,006",
        description: "Crystal levels is boosted based on juice time spent on this reset and double SP. (Stronger)",
        cost: new EN("15625"),
        unlocked() {
            return hasUpgrade("sa", 15)
        },
        effect() {
            let time = EN(player.ju.resetTime)
            return EN.pent(1e100, time.tetr("10").pow(10), time)
        },
        effectDisplay() { return "x" + format(this.effect()) },
    },
    22: { title: "1,007",
        description: "Square SP Gain.",
        cost: new EN(78125),
        unlocked() {
            return hasUpgrade("sa", 21)
        },
},
23: { title: "1,008",
        description: "Every Sacrifice Upgrade = 3x SP.",
        cost: new EN(30517578125),
        unlocked() {
            return hasUpgrade("sa", 22)
        },
        effect() {
            let effect = ExpantaNum.pow(3, player.sa.upgrades.length)
            return effect
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect    
},
24: { title: "1,009",
        description: "SP gain is boosted based on reset time.",
        cost: new EN("2.32830643654e22"),
        unlocked() {
            return hasUpgrade("sa", 23)
        },
        effect() {
            let time = EN(player.ju.resetTime)
            return EN.pow(3, time.pow("0.5").pow(1), time)
        },
        effectDisplay() { return "x" + format(this.effect()) },
    },
    25: { title: "1,010",
        description: "Gain 100x more SP.",
        cost: new EN(9.09494701773E+27),
        unlocked() {
            return hasUpgrade("sa", 24)
        },
        
},
31: { title: "1,011",
description: "Gain 1,000x more SP.",
cost: new EN(2.77555756156E+38),
unlocked() {
    return hasUpgrade("sa", 25)
},
},
32: { title: "1,012",
description: "Gain 420x more SP.",
cost: new EN(8.67361737988E+41),
unlocked() {
    return hasUpgrade("sa", 31)
},
},
33: { title: "1,013",
description: "Gain 69x more SP.",
cost: new EN(1.69406589451E+48),
unlocked() {
    return hasUpgrade("sa", 32)
},
},
34: { title: "1,014",
description: "Gain 42x more SP.",
cost: new EN(3.23117426779E+61),
unlocked() {
    return hasUpgrade("sa", 33)
},
},
35: { title: "1,015",
description: "Gain 1,337x more SP.",
cost: new EN(1.26217744835E+67),
unlocked() {
    return hasUpgrade("sa", 34)
},
},
41: { title: "1,016",
description: "Crystal levels is boosted based on juice time spent on this reset and gain 10x SP.",
cost: new EN(7.88860905221E+69),
unlocked() {
    return hasUpgrade("sa", 35)
},
    effect() {
        let time = EN(player.ju.resetTime)
        return EN.pent(1e308, time.tetr("10^^^10^^3").tetr(1e308), time)
    },
    effectDisplay() { return "x" + format(this.effect()) },
},
42: { title: "1,017",
description: "SP gain is raised based on SP upgrades bought (Small rate).",
cost: new EN(3.85185988877E+77),
unlocked() {
    return hasUpgrade("sa", 41)
},
effect() {
    let effect = ExpantaNum.pow(1.001, player.sa.upgrades.length)
    return effect
},
effectDisplay() { return "^" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
},
43: { title: "1,018",
description: "Gain 6,969x more SP.",
cost: new EN(9.40395480658E+85),
unlocked() {
    return hasUpgrade("sa", 42)
},
},
44: { title: "1,019",
description: "Gain 69,420x more SP.",
cost: new EN(4.48415508584E+100),
unlocked() {
    return hasUpgrade("sa", 43)
},
},
45: { title: "1,020",
description: "Gain 7,331x more SP.",
cost: new EN(6.37236764453E+132),
unlocked() {
    return hasUpgrade("sa", 44)
},
},
51: { title: "1,021",
description: "Gain 96x more SP.",
cost: new EN(6.22301527786E+139),
unlocked() {
    return hasUpgrade("sa", 45)
},
},
52: { title: "1,022",
description: "Gain 28,980x more SP.",
cost: new EN(1.18694596822E+153),
unlocked() {
    return hasUpgrade("sa", 51)
},
},
53: { title: "1,023",
description: "Gain 4,761x more SP.",
cost: new EN(5.52714787526E+174),
unlocked() {
    return hasUpgrade("sa", 52)
},
},
54: { title: "1,024",
description: "Gain 1e9x more SP.",
cost: new EN(5.27109897162E+188),
unlocked() {
    return hasUpgrade("sa", 53)
},
},
55: { title: "1,025",
description: "Unlock a sacrifice challenge.",
cost: new EN(1e240),
unlocked() {
    return hasUpgrade("sa", 54)
},
},
61: { title: "?",
description: "Challenge Exponential is boosted based on reset time.",
cost: new EN("10^^^10^^^1e3"),
unlocked() {
    return hasUpgrade("sa", 55)
},
effect() {
    let time = EN(player.ju.resetTime)
    return EN.pent(1e308, time.tetr("1e308").tetr(1e308), time)
},
effectDisplay() { return "^^" + format(this.effect()) },
},
62: { title: "?",
description: "Challenge Tetrational is boosted based on reset time.",
cost: new EN("10^^^10^^^10^4"),
unlocked() {
    return player.sa.challengetet.gte("420")
},
effect() {
    let time = EN(player.ju.resetTime)
    return EN.pent(2, time.tetr("4").tetr(1), time)
},
effectDisplay() { return "^^" + format(this.effect()) },
},
63: { title: "?",
description: "Challenge Pentational is boosted based on reset time.",
cost: new EN("10^^^10^^^20000"),
unlocked() {
    return player.sa.challengepent.gte("10^^^4")
},
effect() {
    let time = EN(player.ju.resetTime)
    return EN.pent(2, time.tetr("1e308").tetr(1), time)
},
effectDisplay() { return "^^^" + format(this.effect()) },
},
64: { title: "?",
description: "Crystal boost Challenge Pentational.",
cost: new EN("10^^^^4"),
unlocked() {
    return player.sa.challengepent.gte("10^^^^3")
},
effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
    effect() {
        return player.su.crystal.add(1).pow("0.5").min("10^^^^98")
    },},
},

challenges: {
    11: {
            name: "Easiest Challenge",
            challengeDescription: "Begin the journey.",
            goalDescription: "1 Point.",
            rewardDescription: "Gain x69 SP.",
            canComplete: function() {return player.points.gte("1")},
            unlocked() { return (hasUpgrade('sa', 55)) }
    },
    12: {
        name: "Easiest Challenge+",
        challengeDescription: "Nothing..",
        goalDescription: "100 Challenge Points.",
        rewardDescription: "Triple CP Gain.",
        canComplete: function() {return player.sa.challengepoint.gte("100")},
        unlocked() { return player.sa.challengepoint.gte("10")
        },
    },
    13: {
        name: "Easiest Challenge++",
        challengeDescription: "Still nothing...",
        canComplete: function() {return player.sa.challengepoint.gte(1000)},
        unlocked() {return hasChallenge(this.layer,12)},
        goalDescription: "1,000 Challenge Points.",
        rewardDescription: "Double CP Gain and x1,000 SP.",
    },
    21: {
        name: "Medium Challenge",
        challengeDescription: "Nothing...",
        canComplete: function() {return player.sa.challengepoint.gte(69420)},
        unlocked() {return hasChallenge(this.layer,13)},
        goalDescription: "69,420 Challenge Points.",
        rewardDescription: "x6.9420 Challenge Points and x69,420 SP.",
    },
    22: {
        name: "Medium Challenge+",
        challengeDescription: "Nothing...",
        canComplete: function() {return player.sa.challengepoint.gte(1e6)},
        unlocked() {return hasChallenge(this.layer,21)},
        goalDescription: "1,000,000 Challenge Points.",
        rewardDescription: "x10 Challenge Points and x1,000,000 SP.",
    },
    23: {
        name: "Medium Challenge++",
        challengeDescription: "Nothing...",
        canComplete: function() {return player.sa.challengepoint.gte(2e7)},
        unlocked() {return hasChallenge(this.layer,22)},
        goalDescription: "20,000,000 Challenge Points.",
        rewardDescription: "Quadruple CP Gain and ^1.01 SP.",
    },
    31: {
        name: "Medium Challenge+++",
        challengeDescription: "Nothing...",
        canComplete: function() {return player.sa.challengepoint.gte(77777777)},
        unlocked() {return hasChallenge(this.layer,23)},
        goalDescription: "77,777,777 Challenge Points.",
        rewardDescription: "x7.7777777 CP Gain and ^1.01 SP.",
    },
    32: {
        name: "Hard Challenge",
        challengeDescription: "Nothing...",
        canComplete: function() {return player.sa.challengepoint.gte(1e9)},
        unlocked() {return hasChallenge(this.layer,31)},
        goalDescription: "1e9 Challenge Points.",
        rewardDescription: "x1,000 CP Gain and x1e9 SP.",
    },
    33: {
        name: "Hard Challenge+",
        challengeDescription: "Nothing...",
        canComplete: function() {return player.sa.challengepoint.gte(1e13)},
        unlocked() {return hasChallenge(this.layer,32)},
        goalDescription: "1e13 Challenge Points.",
        rewardDescription: "x69 CP Gain and x1,000 SP.",
    },
    41: {
        name: "Hard Challenge++",
        challengeDescription: "Nothing...",
        canComplete: function() {return player.sa.challengepoint.gte(1e16)},
        unlocked() {return hasChallenge(this.layer,33)},
        goalDescription: "1e16 Challenge Points.",
        rewardDescription: "x420 CP Gain and x420 SP.",
    },
    42: {
        name: "Difficult Challenge",
        challengeDescription: "Nothing...",
        canComplete: function() {return player.su.points.gte("10^^^^100")},
        unlocked() {return hasChallenge(this.layer,41)},
        goalDescription: "1.000H100 Neutron Stars.",
        rewardDescription: "Unlock a new layer.",
    },
},
    name: "Sacrifice", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Sac", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        challengepoint: new EN(0),
        challengepower: new EN(0),
        challengeexp: new EN(0),
        challengetet: new EN(0),
        challengepent: new EN(0),
        auto: false,
    }},
    color: "#800080",
    requires: new EN("10^^^10^1e1000"), // Can be a function that takes requirement increases into account
    resource: "Sacrifice Points", // Name of prestige currency
    baseResource: "Neutron Stars", // Name of resource prestige is based on
    baseAmount() {return player.su.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    branches: ["su"],
    exponent: 0, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1)
        if (hasUpgrade('sa', 14)) mult = mult.times(3)
        if (hasUpgrade('sa', 15)) mult = mult.times(1.67)
        if (hasMilestone('sa', 2)) mult = mult.times(milestoneEffect('sa', 2))
        if (hasUpgrade('sa', 21)) mult = mult.times(2)
        if (hasUpgrade('sa', 22)) mult = mult.pow(2)
        if (hasUpgrade('sa', 23)) mult = mult.times(upgradeEffect('sa', 23))
        if (hasUpgrade('sa', 24)) mult = mult.times(upgradeEffect('sa', 24))
        if (hasUpgrade('sa', 25)) mult = mult.times(100)
        if (hasUpgrade('sa', 31)) mult = mult.times(1000)
        if (hasUpgrade('sa', 32)) mult = mult.times(420)
        if (hasUpgrade('sa', 33)) mult = mult.times(69)
        if (hasUpgrade('sa', 34)) mult = mult.times(42)
        if (hasUpgrade('sa', 35)) mult = mult.times(1337)
        if (hasUpgrade('sa', 41)) mult = mult.times(10)
        if (hasUpgrade('sa', 42)) mult = mult.pow(upgradeEffect('sa', 42))
        if (hasUpgrade('sa', 43)) mult = mult.times(6969)
        if (hasMilestone('sa', 3)) mult = mult.pow(milestoneEffect('sa', 3))
        if (hasUpgrade('sa', 44)) mult = mult.times(69420)
        if (hasUpgrade('sa', 45)) mult = mult.times(7331)
        if (hasUpgrade('sa', 51)) mult = mult.times(96)
        if (hasUpgrade('sa', 52)) mult = mult.times(28980)
        if (hasUpgrade('sa', 53)) mult = mult.times(4761)
        if (hasUpgrade('sa', 54)) mult = mult.times(1e9)
        if (hasChallenge('sa', 11)) mult = mult.times(69)
        if (hasChallenge('sa', 13)) mult = mult.times(1000)
        if (hasChallenge('sa', 21)) mult = mult.times(69420)
        if (hasChallenge('sa', 22)) mult = mult.times(1e6)
        if (hasChallenge('sa', 23)) mult = mult.pow(1.01)
        if (hasChallenge('sa', 31)) mult = mult.pow(1.01)
        if (hasChallenge('sa', 32)) mult = mult.times(1e9)
        if (hasChallenge('sa', 33)) mult = mult.times(1000)
        if (hasChallenge('sa', 41)) mult = mult.times(420)
        if (player.sa.challengepoint.gte(1)) mult = mult.times(player.sa.challengepoint.max(1).pow(2))
        if (player.sa.challengepower.gte(1)) mult = mult.times(player.sa.challengepower.max(1).pow(3))
        if (player.sa.challengeexp.gte(1)) mult2 = mult2.pent(player.sa.challengeexp.max(1).pow(4))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    hotkeys: [
        {key: "<", description: "Shift+<: Reset for SP", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    doReset(resettingLayer) {
        let keep = [];
        if (hasMilestone("ap", 1) && resettingLayer=="ap") keep.push("challenges")
        if (hasMilestone("ap", 2) && resettingLayer=="ap") keep.push("upgrades")
        if (layers[resettingLayer].row > this.row) layerDataReset("sa", keep)
    },
layerShown(){return (hasUpgrade("su", 535) || player[this.layer].unlocked)},
    automate() {},
    milestones: {
        1: {
            requirementDescription: "1 Sacrifice Point",
            effectDescription: "Gain 100% of Neutron Stars gained on reset per second.",
            done() { return player.sa.points.gte(1) }
        },
        2: {
            requirementDescription: "1,000 Sacrifice Points",
            effect() {
                let eff = player.sa.points.pow(0.3333333333333333333333333)
                return eff
            },
            effectDescription() {
                return "Sacrifice Points boosts itself at a reduced rate.<br>Currently: x"+format(milestoneEffect("sa",2))+""}
                ,    done() { return player.sa.points.gte("1000") }
                
            },
            3: {
                requirementDescription: "1.000e100 Sacrifice Points",
                effect() {
                    let eff = player.sa.points.pow(0.0001)
                    return eff
                },
                effectDescription() {
                    return "Sacrifice Points raises itself at a reduced rate.<br>Currently: ^"+format(milestoneEffect("sa",3))+""}
                    ,    done() { return player.sa.points.gte("1e100") }
                    
                },
                4: {
                    requirementDescription: "5,000 Challenge Points",
                    effect() {
                        let eff = player.sa.challengepoint.pow(0.25)
                        return eff
                    },
                    effectDescription() {
                        return "Challenge Points boosts itself at a reduced rate.<br>Currently: x"+format(milestoneEffect("sa",4))+""}
                        ,    done() { return player.sa.challengepoint.gte("5000") }
                        
                    },
                    5: {
                        requirementDescription: "1.797e308 Sacrifice Points",
                        effect() {
                            let eff = player.sa.points.pow(0.001)
                            return eff
                        },
                        effectDescription() {
                            return "Sacrifice Points boosts challenge point gain at a reduced rate.<br>Currently: x"+format(milestoneEffect("sa",5))+""}
                            ,    done() { return player.sa.points.gte("1.797e308") }
                            
                        },
                        6: {
                            requirementDescription: "750 Challenge Power",
                            effect() {
                                let eff = player.sa.challengepower.pow(1)
                                return eff
                            },
                            effectDescription() {
                                return "Challenge Power boosts itself.<br>Currently: x"+format(milestoneEffect("sa",6))+""}
                                ,    done() { return player.sa.challengepower.gte("750") }
                                
                            },
                            7: {
                                requirementDescription: "1.797e308 Challenge Power",
                                effect() {
                                    let eff = player.sa.challengepower.pow(0.001)
                                    return eff
                                },
                                effectDescription() {
                                    return "Challenge Power raises itself.<br>Currently: ^"+format(milestoneEffect("sa",7))+""}
                                    ,    done() { return player.sa.challengepower.gte("1.797e308") }
                                    
                                },
                                8: {
                                    requirementDescription: "1F1,000 Challenge Power",
                                    effect() {
                                        let eff = player.sa.challengepower.pow(1)
                                        return eff
                                    },
                                    effectDescription() {
                                        return "Challenge Power tetrates itself.<br>Currently: ^^"+format(milestoneEffect("sa",8))+""}
                                        ,    done() { return player.sa.challengepower.gte("10^^1000") }
                                        
                                    },
                                    9: {
                            requirementDescription: "1,000 Challenge Exponential.",
                            effect() {
                                let eff = player.sa.challengeexp.pow(2)
                                return eff
                            },
                            effectDescription() {
                                return "Challenge Exponential boosts itself.<br>Currently: x"+format(milestoneEffect("sa",9))+""}
                                ,    done() { return player.sa.challengeexp.gte("100") }
                                
                            },
                            10: {
                                requirementDescription: "e1.797e308 Challenge Exponential.",
                                effect() {
                                    let eff = player.sa.challengeexp.pow(1)
                                    return eff
                                },
                                effectDescription() {
                                    return "Challenge Exponential raises itself.<br>Currently: ^"+format(milestoneEffect("sa",10))+""}
                                    ,    done() { return player.sa.challengeexp.gte("e1.797e308") }
                                    
                                },
                                11: {
                                    requirementDescription: "1F2,000 Challenge Exponential.",
                                    effect() {
                                        let eff = player.sa.challengeexp.pow(1)
                                        return eff
                                    },
                                    effectDescription() {
                                        return "Challenge Exponential tetrates itself.<br>Currently: ^^"+format(milestoneEffect("sa",11))+""}
                                        ,    done() { return player.sa.challengeexp.gte("10^^2000") }
                                        
                                    },
                                    12: {
                                        requirementDescription: "1,000 Challenge Pentational.",
                                        effect() {
                                            let eff = player.sa.challengepent.pow(6)
                                            return eff
                                        },
                                        effectDescription() {
                                            return "Challenge Pentational boosts itself.<br>Currently: x"+format(milestoneEffect("sa",12))+""}
                                            ,    done() { return player.sa.challengepent.gte("1000") }
                                            
                                        },
                                        13: {
                                            requirementDescription: "e1e1,000 Challenge Pentational.",
                                            effect() {
                                                let eff = player.sa.challengepent.pow(6)
                                                return eff
                                            },
                                            effectDescription() {
                                                return "Challenge Pentational raises itself.<br>Currently: ^"+format(milestoneEffect("sa",13))+""}
                                                ,    done() { return player.sa.challengepent.gte("e1e1000") }
                                                
                                            },
                                            14: {
                                                requirementDescription: "1F1,337 Challenge Pentational.",
                                                effect() {
                                                    let eff = player.sa.challengepent.tetr(6)
                                                    return eff
                                                },
                                                effectDescription() {
                                                    return "Challenge Pentational tetrates itself.<br>Currently: ^^"+format(milestoneEffect("sa",14))+""}
                                                    ,    done() { return player.sa.challengepent.gte("10^^1337") }
                                                    
                                                },
    },
})