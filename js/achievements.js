addLayer("a", {
    
    startData() {
        return {
            unlocked: true,
			points: new EN(0),
        }
    },
    color: "yellow",
    symbol: "🏆",
    row: "side",
    layerShown() {
        return true
    },
    tooltip() {
        return ("Achievements")
    },
    achievements: {
        11: {
            name: "Starting",
            done() {
                return player.points.gte(1)
            },
            tooltip: "Get 1 Point. <br>Reward: 1 AP",
			onComplete() {
				return player.a.points = player.a.points.add(1)
			},
        },
        12: {
            name: "New Reset!",
            done() {
                return player.b.points.gte("1")
            },
            tooltip: "Get <b>Button Power</b>. <br>Reward: 2 AP",
			onComplete() {
				return player.a.points = player.a.points.add(2)
			},
        },
        13: {
            name: "More upgrades!",
            done() {
                if (hasUpgrade("p", 21)) return true
            },
            tooltip: "Buy first upgrade in 2nd row <br>Reward: 4 AP",
			onComplete() {
				return player.a.points = player.a.points.add(4)
			},
        },
        14: {
            name: "Lets keep some stuff",
            done() {
                if (hasUpgrade("b", 21)) return true
            },
            tooltip: "Buy first upgrade in 2nd row of BP upgrades. <br>Reward: 8 AP",
			onComplete() {
				return player.a.points = player.a.points.add(8)
			},
        },
        15: {
            name: "Googol!",
            done() {
                return player.points.gte(1e100)
            },
            tooltip: "Get 1e100 Points.<br>Reward: 16 AP",
			onComplete() {
				return player.a.points = player.a.points.add(16)
			},
        },
        16: {
            name: "Another reset layer!",
            done() {
                return player.ant.points.gte("1")
            },
            tooltip: "Get a ant. <br>Reward: 32 AP",
			onComplete() {
				return player.a.points = player.a.points.add(32)
			},
        },
        17: {
            name: "Upgrading more!",
            done() {
                if (hasUpgrade("ant", 21)) return true
            },
            tooltip: "Buy first upgrade in 2nd row of A upgrades. <br>Reward: 64 AP",
			onComplete() {
				return player.a.points = player.a.points.add(64)
			},
        },
        21: {
            name: "Infinity",
            done() {
                return player.points.gte("1.80e308")
            },
            tooltip: "Get 1.80e308 Points. <br>Reward: 128 AP",
			onComplete() {
				return player.a.points = player.a.points.add(128)
			},
        },
        22: {
            name: "1k OoM",
            done() {
                return player.points.gte("1e1000")
            },
            tooltip: "Get 1e1,000 Points.<br>Reward: 256 AP",
			onComplete() {
				return player.a.points = player.a.points.add(256)
			},
        },
        23: {
            name: "Touch Grass",
            done() {
                return player.g.points.gte("1")
            },
            tooltip: "Get 1 Grass. <br>Reward: 500 AP",
			onComplete() {
				return player.a.points = player.a.points.add(512)
			},
        },
        24: {
            name: "Nice",
            done() {
                return player.g.points.gte(69420)
            },
            tooltip: "Get 69,420 Grass.<br>Reward: 1,024 AP",
			onComplete() {
				return player.a.points = player.a.points.add(1024)
			},
        },
        25: {
            name: "Millilion",
            done() {
                return player.points.gte("1e3003")
            },
            tooltip: "Get 1e3,003 Points. <br>Reward: 2,048 AP",
			onComplete() {
				return player.a.points = player.a.points.add(2048)
			},
        },
		    26: {
            name: "There is more layers?!?",
            done() {
                return player.c.points.gte(1)
            },
            tooltip: "Get 1 Cup. <br>Reward: 4,096 AP",
			onComplete() {
				return player.a.points = player.a.points.add(4096)
			},
        },
		        27: {
            name: "10k OoM",
            done() {
                return player.points.gte("ee4")
            },
            tooltip: "Get 1e10,000 Points. <br>Reward: 8,192 AP",
			onComplete() {
				return player.a.points = player.a.points.add(8192)
			},
				},
		        31: {
            name: "Decillion Grass!",
            done() {
                return player.g.points.gte("e33")
            },
            tooltip: "Get 1e33 Grass. <br>Reward: 16,384 AP",
			onComplete() {
				return player.a.points = player.a.points.add(16384)
			},
        },
		        32: {
            name: "Roll",
            done() {
                return player.d.points.gte("1")
            },
            tooltip: "Get 1 Dice. <br>Reward: 32,768 AP",
			onComplete() {
				return player.a.points = player.a.points.add(32768)
			},
        },
		        33: {
            name: "Highest Number in dice!",
            done() {
                return player.d.points.gte("6")
            },
            tooltip: "Get 6 Dices. <br>Reward: 65,536 AP",
			onComplete() {
				return player.a.points = player.a.points.add(65536)
			},
        },
		        34: {
            name: "Googol Grass",
            done() {
                return player.g.points.gte("1e100")
            },
            tooltip: "Get 1e100 Grass. <br>Reward: 131,072 AP",
			onComplete() {
				return player.a.points = player.a.points.add(131072)
			},
        },
		
		        35: {
            name: "Myrillion Points",
            done() {
                return player.points.gte("1e30003")
            },
            tooltip: "Get 1e30,003 Points. <br>Reward: 262,144 AP",
			onComplete() {
				return player.a.points = player.a.points.add(262144)
			},
        },
		        36: {
            name: "More Grass",
            done() {
                return player.g.points.gte("1e420")
            },
            tooltip: "Get 1e420 Grass <br>Reward: 524,288 AP",
			onComplete() {
				return player.a.points = player.a.points.add(524288)
			},
        },
		        37: {
            name: "Row 4!",
            done() {
                return player.f.points.gte("1")
            },
            tooltip: "Get 1 Fruit.<br>Reward: 1,048,576 AP",
			onComplete() {
				return player.a.points = player.a.points.add(1048576)
			},
        },
		    41: {
            name: "Challenging",
            done() {
                if (hasChallenge("b", 11)) return true
            },
            tooltip: "Complete a challenge. <br>Reward: 2,097,152 AP",
			onComplete() {
				return player.a.points = player.a.points.add(2097152)
			},
        },
		        42: {
            name: "100k OoM!",
            done() {
                return player.points.gte("1e100000")
            },
            tooltip: "Get 1e100,000 Points. <br>Reward: 4,194,304 AP",
			onComplete() {
				return player.a.points = player.a.points.add(4194304)
			},
		},
		        43: {
            name: "Intense!",
            done() {
                if (hasChallenge("b", 13)) return true
            },
            tooltip: "Complete 3rd challenge. <br>Reward: 8,388,608 AP",
			onComplete() {
				return player.a.points = player.a.points.add(8388608)
			},
		},
		        44: {
            name: "Infinity Cups!",
            done() {
                return player.c.points.gte(1.79e308)
            },
            tooltip: "Get 1.80e308 Cups. <br>Reward: 16,777,216 AP",
			onComplete() {
				return player.a.points = player.a.points.add(16777216)
			},
		},
		        45: {
            name: "Millilion Grass!",
            done() {
                return player.g.points.gte("1e3003")
            },
            tooltip: "Get 1e3,003 Grass. <br>Reward: 33,554,432 AP",
			onComplete() {
				return player.a.points = player.a.points.add(33554432)
			},
		},
		        46: {
            name: "Dark Fruits?",
            done() {
                return player.f.points.gte("e50")
            },
            tooltip: "Get 1e50 Fruits. <br>Reward: 67,108,864 AP",
			onComplete() {
				return player.a.points = player.a.points.add(67108864)
			},
		},
        47: {
            name: "Maximusmillion!",
            done() {
                return player.points.gte("ee6")
            },
            tooltip: "Get 1e1,000,000 Points. <br>Reward: 137,217,728 AP",
			onComplete() {
				return player.a.points = player.a.points.add(134217728)
			},
		},
        51: {
            name: "Year",
            done() {
                return player.ant.points.gte("2023")
            },
            tooltip: "Get 2,023 Ants. <br>Reward: 268,435,456 AP",
			onComplete() {
				return player.a.points = player.a.points.add(268435456)
			},
		},
        52: {
            name: "Remorseless",
            done() {
                if (hasChallenge("c", 11)) return true
            },
            tooltip: "Complete 1st cup challenge. <br>Reward: 536,870,912 AP",
			onComplete() {
				return player.a.points = player.a.points.add(536870912)
			},
		},
        53: {
            name: "Lucky 7",
            done() {
                return player.g.points.gte("7e7777")
            },
            tooltip: "Get 7e7,777 Grass. <br>Reward: 1e9 AP",
			onComplete() {
				return player.a.points = player.a.points.add(1e9)
			},
        },
        54: {
                name: "Finally New layer!",
                done() {
                    return player.e.points.gte("1")
                },
                tooltip: "Get 1 Electricity. <br>Reward: 1e10 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e10)
                },
            },
            55: {
                name: "Micrillion!",
                done() {
                    return player.points.gte("1e3000003")
                },
                tooltip: "Get 1e3,000,003 Points. <br>Reward: 1e11 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e11)
                },
            },
            56: {
                name: "Inflation!?",
                done() {
                    return player.points.gte("ee7")
                },
                tooltip: "Get 1e10,000,000 Points. <br>Reward: 1e12 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e12)
                },
            },
            57: {
                name: "More People than Points!?!",
                done() {
                    return player.p.points.gte("ee8")
                },
                tooltip: "Get 1e100,000,000 People. <br>Reward: 1e13 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e13)
                },
            },
            61: {
                name: "That was quick!",
                done() {
                    return player.h.points.gte("1")
                },
                tooltip: "Get 1 House. <br>Reward: 1e14 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e14)
                },
            },
            62: {
                name: "Maximusbillion!",
                done() {
                    return player.points.gte("ee9")
                },
                tooltip: "Get e1e9 Points. <br>Reward: 1e15 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e15)
                },
            },
            63: {
                name: "Trialogue!",
                done() {
                    return player.points.gte("ee10")
                },
                tooltip: "Get e1e10 Points. <br>Reward: 1e16 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e16)
                },
            },
            64: {
                name: "Frozen",
                done() {
                    return player.i.points.gte("1")
                },
                tooltip: "Get 1 Ice. <br>Reward: 1e17 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e17)
                },
            },
            65: {
                name: "Maximustrillion!",
                done() {
                    return player.points.gte("ee12")
                },
                tooltip: "Get e1e12 Points. <br>Reward: 1e18 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e18)
                },
            },
            66: {
                name: "Year^2",
                done() {
                    return player.d.points.gte("2024")
                },
                tooltip: "Get 2,024 Dices. <br>Reward: 1e19 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e19)
                },
            },
            67: {
                name: "Big Numbers!",
                done() {
                    return player.points.gte("ee15")
                },
                tooltip: "Get e1e15 Points. <br>Reward: 1e20 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e20)
                },
            },
            71: {
                name: "Row 5!",
                done() {
                    return player.j.points.gte("1")
                },
                tooltip: "Get 1 Jingle. <br>Reward: 1e23 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e23)
                },
            },
            72: {
                name: "Year^3",
                done() {
                    return player.e.points.gte("2025")
                },
                tooltip: "Get 2,025 Electricity. <br>Reward: 1e26 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e26)
                },
            },
            73: {
                name: "Worldwide bell",
                done() {
                    return player.j.points.gte("1e10")
                },
                tooltip: "Get 1e10 Jingles. <br>Reward: 1e29 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e29)
                },
            },
            74: {
                name: "Insane",
                done() {
                    if (hasChallenge("j", 11)) return true
                },
                tooltip: "Complete 1st Jingle challenge. <br>Reward: 1e32 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e32)
                },
            },
            75: {
                name: "Maximusdecillion!",
                done() {
                    return player.points.gte("e1e33")
                },
                tooltip: "Get e1e33 Points. <br>Reward: 1e35 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e35)
                },
            },
            76: {
                name: "Year^4",
                done() {
                    return player.i.points.gte("2026")
                },
                tooltip: "Get 2,026 Ice. <br>Reward: 1e38 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e38)
                },
            },
            77: {
                name: "Googolplex",
                done() {
                    return player.points.gte("e1e100")
                },
                tooltip: "Get e1e100 Points. <br>Reward: 1e41 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e41)
                },
            },
            81: {
                name: "Infinity^2",
                done() {
                    return player.points.gte("e1.80e308")
                },
                tooltip: "Get e1.80e308 Points. <br>Reward: 1e51 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e51)
                },
            },
            82: {
                name: "OOM^2 when?",
                done() {
                    return player.points.gte("e1e1000")
                },
                tooltip: "Get e1e1,000 Points. <br>Reward: 1e61 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e61)
                },
            },
            83: {
                name: "Killillion Points!",
                done() {
                    return player.points.gte("e1e3003")
                },
                tooltip: "Get e1e3,003 Points. <br>Reward: 1e100 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e100)
                },
            },
            84: {
                name: "Light-Year?",
                done() {
                    return player.ant.points.gte("1e2023")
                },
                tooltip: "Get 1e2,023 Ants. <br>Reward: 1e200 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e200)
                },
            },
            85: {
                name: "Large Numbers",
                done() {
                    return player.points.gte("eee4")
                },
                tooltip: "Get e1e10,000 Points. <br>Reward: 1e300 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e300)
                },
            },
            86: {
                name: "Very Large Numbers!",
                done() {
                    return player.points.gte("ee1000000")
                },
                tooltip: "Get e1e1,000,000 Points. <br>Reward: 1e1,000 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("1e1000")
                },
            },
            87: {
                name: "Omega Large Numbers!",
                done() {
                    return player.points.gte("ee10000000000")
                },
                tooltip: "Get ee1e10 Points. <br>Reward: 1e10,000 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("1e10000")
                },
            },
            91: {
                name: "Locked",
                done() {
                    return player.k.points.gte("1")
                },
                tooltip: "Get 1 Key. <br>Reward: 1e5,000,000 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("1e5000000")
                },
            },
            92: {
                name: "Already?",
                done() {
                    return player.k.points.gte("1.80e308")
                },
                tooltip: "Get 1.80e308 Keys. <br>Reward: e1e10 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("ee10")
                },
            },
            93: {
                name: "Googolduplex",
                done() {
                    return player.points.gte("eee100")
                },
                tooltip: "Get ee1e100 Points. <br>Reward: e1e69 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("ee69")
                },
            },
            94: {
                name: "Never ending.",
                done() {
                    return player.l.points.gte("1")
                },
                tooltip: "Get 1 Light. <br>Reward: e1e300 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("ee300")
                },
            },
            95: {
                name: "Extreme",
                done() {
                    if (hasChallenge("j", 12)) return true
                },
                tooltip: "Complete 2nd Jingle challenge. <br>Reward: e1e1,000 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("ee1000")
                },
            },
            96: {
                name: "Kalillion Points!",
                done() {
                    return player.points.gte("eee3003")
                },
                tooltip: "Get ee1e3,003 Points. <br>Reward: e1e3,003 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("ee3003")
                },
            },
            97: {
                name: "Darkness?",
                done() {
                    return player.l.points.gte("1.80e308")
                },
                tooltip: "Get 1.80e308 Lights. <br>Reward: e1e5,000 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("ee5000")
                },
            },
            101: {
                name: "Worthy",
                done() {
                    return player.m.points.gte("1")
                },
                tooltip: "Get 1 Money. <br>Reward: e1e10,000 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("ee10000")
                },
            },
            102: {
                name: "Getting Closer to F Notation",
                done() {
                    return player.points.gte("eeee9")
                },
                tooltip: "Get eee1e9 Points. <br>Reward: ee1e10,000,000 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("ee10000000")
                },
            },
            103: {
                name: "Books",
                done() {
                    return player.n.points.gte("1")
                },
                tooltip: "Get 1 Notebooks. <br>Reward: ee1e10 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("eee10")
                },
            },
            104: {
                name: "Googoltriplex",
                done() {
                    return player.points.gte("eeee100")
                },
                tooltip: "Get eee1e100 Points. <br>Reward: ee1e100 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("eee100")
                },
            },
            105: {
                name: "Hepillion Points",
                done() {
                    return player.points.gte("eeee3003")
                },
                tooltip: "Get eee1e3,003 Points. <br>Reward: ee1e1,000 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("eee1000")
                },
            },
            106: {
                name: "Almost there!",
                done() {
                    return player.points.gte("eeeee9")
                },
                tooltip: "Get eeee1e9 Points. <br>Reward: ee1e10,000,000 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("eeee7")
                },
            },
            107: {
                name: "F Notation!",
                done() {
                    return player.points.gte("eeeee10")
                },
                tooltip: "Get 1F6 Points. <br>Reward: eee1e10 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("eeee10")
                },
            },
            111: {
                name: "Row 6!",
                done() {
                    return player.o.points.gte("1")
                },
                tooltip: "Get 1 Onion. <br>Reward: eee1e11 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("eeee11")
                },
            },
            112: {
                name: "Auto Upgrade!",
                done() {
                    if (hasUpgrade("o", 13)) return true
                },
                tooltip: "Get 3rd Onion Upgrade. <br>Reward: eee1e12 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("eeee12")
                },
            },
            113: {
                name: "Richest!",
                done() {
                    return player.m.points.gte("2e11")
                },
                tooltip: "Get 2.000e11 Money. <br>Reward: eee1e14 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("eeee14")
                },
            },
            114: {
                name: "Terrifying",
                done() {
                    if (hasChallenge("o", 11)) return true
                },
                tooltip: "Complete 1st Onion challenge. <br>Reward: eee1e18 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("eeee18")
                },
            },
            115: {
            name: "Year^5",
                done() {
                    return player.n.points.gte("2027")
                },
                tooltip: "Get 2,027 Notebooks. <br>Reward: eee1e26 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("eeee26")
                },
            },
            116: {
                name: "Loop when?",
                    done() {
                        return player.q.points.gte("1")
                    },
                    tooltip: "Get 1 Quadrilaterals. <br>Reward: 1F6 AP",
                    onComplete() {
                        return player.a.points = player.a.points.add("eeeee10")
                    },
                },
                117: {
                    name: "Inflation yet again!!??",
                        done() {
                            return player.points.gte("eeeeeee10")
                        },
                        tooltip: "Get 1F8 Points. <br>Reward: 2F6 AP",
                        onComplete() {
                            return player.a.points = player.a.points.add("eeeee100")
                        },
                    },
                    121: {
                        name: "Much squares?",
                            done() {
                                return player.q.points.gte("e1.79e308")
                            },
                            tooltip: "Get e1.79e308 Quadrilaterals. <br>Reward: 5F6 AP",
                            onComplete() {
                                return player.a.points = player.a.points.add("eeeee100000")
                            },
                        },
                        122: {
                            name: "Decker",
                                done() {
                                    return player.points.gte("eeeeeeeee10")
                                },
                                tooltip: "Get 1F10 Points. <br>Reward: 1F7 AP",
                                onComplete() {
                                    return player.a.points = player.a.points.add("eeeeee10")
                                },
                            },
                            123: {
                                name: "Circle",
                                    done() {
                                        return player.r.points.gte("1")
                                    },
                                    tooltip: "Get 1 Ring. <br>Reward: 1F8 AP",
                                    onComplete() {
                                        return player.a.points = player.a.points.add("eeeeeee10")
                                    },
                                },
                                124: {
                                    name: "Diamond Ring?",
                                        done() {
                                            return player.r.points.gte("ee10")
                                        },
                                        tooltip: "Get e1e10 Rings. <br>Reward: 1.301F8 AP",
                                        onComplete() {
                                            return player.a.points = player.a.points.add("eeeeeee20")
                                        },
                                    },
                                    125: {
                                        name: "Light Speed",
                                            done() {
                                                return player.points.gte("eeeeeeeeeee10")
                                            },
                                            tooltip: "Get 1F12 Points. <br>Reward: 1F9 AP",
                                            onComplete() {
                                                return player.a.points = player.a.points.add("eeeeeeee10")
                                            },
                                        },
                                        126: {
                                            name: "Catastrophic",
                                            done() {
                                                if (hasChallenge("o", 11)) return true
                                            },
                                            tooltip: "Complete 6th Onion challenge. <br>Reward: 1F10 AP",
                                            onComplete() {
                                                return player.a.points = player.a.points.add("eeeeeeeee10")
                                            },
                                        },
                                        127: {
                                        name: "Infinity Large Numbers!",
                                            done() {
                                                return player.points.gte("eeeeeeeeeeeeeeeee10")
                                            },
                                            tooltip: "Get 1F18 Points. <br>Reward: 1F13 AP",
                                            onComplete() {
                                                return player.a.points = player.a.points.add("eeeeeeeeeeee10")
                                            },
                                        },
                                        131: {
                                            name: "Desert",
                                                done() {
                                                    return player.s.points.gte("1")
                                                },
                                                tooltip: "Get 1 Sand. <br>Reward: 1F14 AP",
                                                onComplete() {
                                                    return player.a.points = player.a.points.add("eeeeeeeeeeeee10")
                                                },
                                            },
                                            132: {
                                                name: "Sub-Currency!",
                                                    done() {
                                                        return player.s.sanddunes.gte("1")
                                                    },
                                                    tooltip: "Get 1 Sand Dunes. <br>Reward: 1F15 AP",
                                                    onComplete() {
                                                        return player.a.points = player.a.points.add("eeeeeeeeeeeeee10")
                                                    },
                                                },
                                                133: {
                                                    name: "Buy!",
                                                        done() {
                                                            return player.s.buyables[11].gte("1")
                                                        },
                                                        tooltip: "Get the first buyable. <br>Reward: 1F16 AP",
                                                        onComplete() {
                                                            return player.a.points = player.a.points.add("eeeeeeeeeeeeeee10")
                                                        },
                                                    },
                                                    134: {
                                                        name: "Auto-Buy!",
                                                            done() {
                                                                if (hasMilestone("s", 1)) return true
                                                            },
                                                            tooltip: "Get the automate buyable. <br>Reward: 1F18 AP",
                                                            onComplete() {
                                                                return player.a.points = player.a.points.add("eeeeeeeeeeeeeeeee10")
                                                            },
                                                        },
                                                        135: {
                                                            name: "Super Nice",
                                                                done() {
                                                                    return player.points.gte("10^^69")
                                                                },
                                                                tooltip: "Get 1F69 Points. <br>Reward: 1F30 AP",
                                                                onComplete() {
                                                                    return player.a.points = player.a.points.add("10^^30")
                                                                },
                                                            },
                                                            136: {
                                                                name: "Heaven",
                                                                    done() {
                                                                        return player.t.points.gte("1")
                                                                    },
                                                                    tooltip: "Get 1 Trees. <br>Reward: 1F33 AP",
                                                                    onComplete() {
                                                                        return player.a.points = player.a.points.add("10^^33")
                                                                    },
                                                                },
                                                                137: {
                                                                    name: "#TeamTrees",
                                                                        done() {
                                                                            return player.t.points.gte("1.80e308")
                                                                        },
                                                                        tooltip: "Get 1.80e308 Trees. <br>Reward: 1F36 AP",
                                                                        onComplete() {
                                                                            return player.a.points = player.a.points.add("10^^36")
                                                                        },
                                                                    },
                                                                    141: {
                                                                        name: "Giggol",
                                                                            done() {
                                                                                return player.points.gte("10^^100")
                                                                            },
                                                                            tooltip: "Get 1F100 Points. <br>Reward: 1F40 AP",
                                                                            onComplete() {
                                                                                return player.a.points = player.a.points.add("10^^40")
                                                                            },
                                                                        },
                                                                        142: {
                                                                            name: "Small Eternity",
                                                                                done() {
                                                                                    return player.points.gte("10^^308")
                                                                                },
                                                                                tooltip: "Get 1F308 Points. <br>Reward: 1F50 AP",
                                                                                onComplete() {
                                                                                    return player.a.points = player.a.points.add("10^^50")
                                                                                },
                                                                            },
                                                                            143: {
                                                                                name: "HOLY",
                                                                                    done() {
                                                                                        return player.points.gte("10^^1000")
                                                                                    },
                                                                                    tooltip: "Get 1F1,000 Points. <br>Reward: 1F100 AP",
                                                                                    onComplete() {
                                                                                        return player.a.points = player.a.points.add("10^^100")
                                                                                    },
                                                                                },
                                                                                144: {
                                                                                    name: "Space",
                                                                                        done() {
                                                                                            return player.u.points.gte("1")
                                                                                        },
                                                                                        tooltip: "Get 1 Universe. <br>Reward: 1F150 AP",
                                                                                        onComplete() {
                                                                                            return player.a.points = player.a.points.add("10^^150")
                                                                                        },
                                                                                    },
                                                                                    145: {
                                                                                        name: "Galaxy",
                                                                                            done() {
                                                                                                return player.u.stars.gte("1")
                                                                                            },
                                                                                            tooltip: "Get 1 Stars. <br>Reward: 1F200 AP",
                                                                                            onComplete() {
                                                                                                return player.a.points = player.a.points.add("10^^200")
                                                                                            },
                                                                                        },
                                                                                        146: {
                                                                                            name: "Multiverse?",
                                                                                                done() {
                                                                                                    return player.u.stars.gte("eee1.797e308")
                                                                                                },
                                                                                                tooltip: "Get eee1.797e308 Stars. <br>Reward: 1F250 AP",
                                                                                                onComplete() {
                                                                                                    return player.a.points = player.a.points.add("10^^250")
                                                                                                },
                                                                                            },
                                                                                            147: {
                                                                                                name: "500 Upgrades",
                                                                                                done() {
                                                                                                    if (hasUpgrade("t", 55)) return true
                                                                                                },
                                                                                                tooltip: "Get last upgrade for tree. <br>Reward: 1F499 AP",
                                                                                                onComplete() {
                                                                                                    return player.a.points = player.a.points.add("10^^499")
                                                                                                },
                                                                                            },
                                                                                            151: {
                                                                                                name: "Ultra Nice",
                                                                                                    done() {
                                                                                                        return player.points.gte("10^^69420")
                                                                                                    },
                                                                                                    tooltip: "Get 1F69,420 Points. <br>Reward: 1F666 AP and OU71 is x4,096 more powerful.",
                                                                                                    onComplete() {
                                                                                                        return player.a.points = player.a.points.add("10^^666")
                                                                                                    },
                                                                                                },
                                                                                                152: {
                                                                                                name: "OMG!",
                                                                                                    done() {
                                                                                                        return player.points.gte("10^^1000000")
                                                                                                    },
                                                                                                    tooltip: "Get F1,000,000 Points. <br>Reward: 1F1,000 AP",
                                                                                                    onComplete() {
                                                                                                        return player.a.points = player.a.points.add("10^^1000")
                                                                                                    },
                                                                                                },
                                                                                                153: {
                                                                                                    name: "Dark",
                                                                                                        done() {
                                                                                                            return player.v.points.gte("1")
                                                                                                        },
                                                                                                        tooltip: "Get 1 void. <br>Reward: 1F2,000 AP.",
                                                                                                        onComplete() {
                                                                                                            return player.a.points = player.a.points.add("10^^2000")
                                                                                                        },
                                                                                                    },
                                                                                                154: {
                                                                                                    name: "A whole new world + Bronze",
                                                                                                        done() {
                                                                                                            return player.re.points.gte("1")
                                                                                                        },
                                                                                                        tooltip: "Do a new reset layer. <br>Points are no longer boosted by achievements points.",
                                                                                                        onComplete() {
                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                        },
                                                                                                    },
                                                                                                    155: {
                                                                                                        name: "Double FF",
                                                                                                            done() {
                                                                                                                return player.points.gte("10^^9e15")
                                                                                                            },
                                                                                                            tooltip: "Get FF2.080 Points.",
                                                                                                            onComplete() {
                                                                                                                return player.a.points = player.a.points.add("0")
                                                                                                            },
                                                                                                        },
                                                                                                        156: {
                                                                                                    name: "Cut trees",
                                                                                                        done() {
                                                                                                            return player.w.total.gte("1")
                                                                                                        },
                                                                                                        tooltip: "Get 1 wood.",
                                                                                                        onComplete() {
                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                        },
                                                                                                    },
                                                                                                    157: {
                                                                                                        name: "There is more upgrades!",
                                                                                                            done() {
                                                                                                                if (hasUpgrade("re", 55)) return true
                                                                                                            },
                                                                                                            tooltip: "Get the reincarnation upgrade 55.",
                                                                                                            onComplete() {
                                                                                                                return player.a.points = player.a.points.add("0")
                                                                                                            },
                                                                                                        },
                                                                                                        161: {
                                                                                                            name: "Yellow",
                                                                                                                done() {
                                                                                                                    if (hasUpgrade("re", 55)) return true
                                                                                                                },
                                                                                                                tooltip: "Get 1 badge.",
                                                                                                                onComplete() {
                                                                                                                    return player.a.points = player.a.points.add("0")
                                                                                                                },
                                                                                                            },
                                                                                                        162: {
                                                                                                            name: "Arrow",
                                                                                                                done() {
                                                                                                                    return player.points.gte("10^^1e99")
                                                                                                                },
                                                                                                                tooltip: "Get FF2.300 Points.",
                                                                                                                onComplete() {
                                                                                                                    return player.a.points = player.a.points.add("0")
                                                                                                                },
                                                                                                            },
                                                                                                        163: {
                                                                                                            name: "Body",
                                                                                                                done() {
                                                                                                                    return player.x.total.gte("1")
                                                                                                                },
                                                                                                                tooltip: "Get 1 X-Ray.",
                                                                                                                onComplete() {
                                                                                                                    return player.a.points = player.a.points.add("0")
                                                                                                                },
                                                                                                            },
                                                                                                            164: {
                                                                                                                name: "EternityNum",
                                                                                                                    done() {
                                                                                                                        return player.points.gte("10^^1.79e308")
                                                                                                                    },
                                                                                                                    tooltip: "Get FF2.396 Points.",
                                                                                                                    onComplete() {
                                                                                                                        return player.a.points = player.a.points.add("0")
                                                                                                                    },
                                                                                                                },
                                                                                                                165: {
                                                                                                                    name: "Backyard",
                                                                                                                        done() {
                                                                                                                            return player.y.total.gte("1")
                                                                                                                        },
                                                                                                                        tooltip: "Get 1 Yard.",
                                                                                                                        onComplete() {
                                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                                        },
                                                                                                                    },
                                                                                                                    166: {
                                                                                                                        name: "Pretty well",
                                                                                                                            done() {
                                                                                                                                return player.points.gte("10^^1e1450")
                                                                                                                            },
                                                                                                                            tooltip: "Get FF2.500 Points.",
                                                                                                                            onComplete() {
                                                                                                                                return player.a.points = player.a.points.add("0")
                                                                                                                            },
                                                                                                                        },
                                                                                                                        167: {
                                                                                                                            name: "Silver",
                                                                                                                                done() {
                                                                                                                                    return player.re.points.gte("1e9")
                                                                                                                                },
                                                                                                                                tooltip: "Get 1.000e9 Medals.",
                                                                                                                                onComplete() {
                                                                                                                                    return player.a.points = player.a.points.add("0")
                                                                                                                                },
                                                                                                                            },
                                                                                                                            171: {
                                                                                                                                name: "Final Animal Name",
                                                                                                                                    done() {
                                                                                                                                        return player.z.total.gte("1")
                                                                                                                                    },
                                                                                                                                    tooltip: "Get 1 Zebra.",
                                                                                                                                    onComplete() {
                                                                                                                                        return player.a.points = player.a.points.add("0")
                                                                                                                                    },
                                                                                                                                },
                                                                                                                                172: {
                                                                                                                                    name: "Dissapearing currencies",
                                                                                                                                        done() {
                                                                                                                                            if (hasUpgrade("z", 12)) return true
                                                                                                                                        },
                                                                                                                                        tooltip: "Remove People layer.",
                                                                                                                                        onComplete() {
                                                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                                                        },
                                                                                                                                    },
                                                                                                                                    173: {
                                                                                                                                        name: "Dissapearing more currencies",
                                                                                                                                            done() {
                                                                                                                                                if (hasUpgrade("z", 41)) return true
                                                                                                                                            },
                                                                                                                                            tooltip: "Remove Row 2 - Row 4 layer.",
                                                                                                                                            onComplete() {
                                                                                                                                                return player.a.points = player.a.points.add("0")
                                                                                                                                            },
                                                                                                                                        },
                                                                                                                                        174: {
                                                                                                                                            name: "Horrific",
                                                                                                                                            done() {
                                                                                                                                                if (hasChallenge("z", 51)) return true
                                                                                                                                            },
                                                                                                                                            tooltip: "Complete 9th zebra challenge.",
                                                                                                                                            onComplete() {
                                                                                                                                                return player.a.points = player.a.points.add("0")
                                                                                                                                            },
                                                                                                                                        },
                                                                                                                                        175: {
                                                                                                                                            name: "Back to small numbers?",
                                                                                                                                                done() {
                                                                                                                                                    if (hasUpgrade("z", 55)) return true
                                                                                                                                                },
                                                                                                                                                tooltip: "Remove Row 5 layer.",
                                                                                                                                                onComplete() {
                                                                                                                                                    return player.a.points = player.a.points.add("0")
                                                                                                                                                },
                                                                                                                                            },
                                                                                                                                            176: {
                                                                                                                                                name: "Pentate",
                                                                                                                                                    done() {
                                                                                                                                                        if (hasUpgrade("re", 105)) return true
                                                                                                                                                    },
                                                                                                                                                    tooltip: "Get the last reincarnation upgrade.",
                                                                                                                                                    onComplete() {
                                                                                                                                                        return player.a.points = player.a.points.add("0")
                                                                                                                                                    },
                                                                                                                                                },
                                                                                                                                                177: {
                                                                                                                                                    name: "F Oom^OOm",
                                                                                                                                                        done() {
                                                                                                                                                            return player.points.gte("10^^e1eeee10")
                                                                                                                                                        },
                                                                                                                                                        tooltip: "Get FF6.000 Points.",
                                                                                                                                                        onComplete() {
                                                                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                                                                        },
                                                                                                                                                    },
                                                                                                                                                    181: {
                                                                                                                                                        name: "Triple F!",
                                                                                                                                                            done() {
                                                                                                                                                                return player.points.gte("10^^^3")
                                                                                                                                                            },
                                                                                                                                                            tooltip: "Get FFF1.000 Points.",
                                                                                                                                                            onComplete() {
                                                                                                                                                                return player.a.points = player.a.points.add("0")
                                                                                                                                                            },
                                                                                                                                                        },
                                                                        
                                                                                                                                182: {
                                                                                                                                name: "Path",
                                                                                                                                    done() {
                                                                                                                                        return player.ar.total.gte("1")
                                                                                                                                    },
                                                                                                                                    tooltip: "Get 1 Arrow.",
                                                                                                                                    onComplete() {
                                                                                                                                        return player.a.points = player.a.points.add("0")
                                                                                                                                    },
                                                                                                                                },

                                                                                                                                    183: {
                                                                                                                                                    name: "FF Oom^OOm",
                                                                                                                                                        done() {
                                                                                                                                                            return player.points.gte("10^^10^^9e15")
                                                                                                                                                        },
                                                                                                                                                        tooltip: "Get FFF2.080 Points.",
                                                                                                                                                        onComplete() {
                                                                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                                                                        },
                                                                                                                                                    },
                                                                                                                                                    184: {
                                                                                                                                                    name: "EternityNum Oom^OOm",
                                                                                                                                                        done() {
                                                                                                                                                            return player.points.gte("10^^10^^1.79e308")
                                                                                                                                                        },
                                                                                                                                                        tooltip: "Get FFF2.396 Points.",
                                                                                                                                                        onComplete() {
                                                                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                                                                        },
                                                                                                                                                    },
                                                                                                                                                    185: {
                                                                                                                                    name: "Quadruple F!",
                                                                                                                                        done() {
                                                                                                                                            return player.points.gte("10^^^4")
                                                                                                                                        },
                                                                                                                                        tooltip: "Get FFFF1.000 Points.",
                                                                                                                                        onComplete() {
                                                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                                                        },
                                                                                                                                    },
                                                                                                                                    186: {
                                                                                                                                        name: "Soccer",
                                                                                                                                            done() {
                                                                                                                                                return player.ba.total.gte("1")
                                                                                                                                            },
                                                                                                                                            tooltip: "Get 1 Ball.",
                                                                                                                                            onComplete() {
                                                                                                                                                return player.a.points = player.a.points.add("0")
                                                                                                                                            },
                                                                                                                                        },
                                                                                                                                        187: {
                                                                                                                                            name: "750 Upgrades",
                                                                                                                                            done() {
                                                                                                                                                if (hasUpgrade("ba", 55)) return true
                                                                                                                                            },
                                                                                                                                            tooltip: "Get last upgrade for balls.",
                                                                                                                                            onComplete() {
                                                                                                                                                return player.a.points = player.a.points.add("0")
                                                                                                                                            },
                                                                                                                                        },
                                                                                                                                        191: {
                                                                                                                                            name: "ULTIMATE INFLATION",
                                                                                                                                                done() {
                                                                                                                                                    if (hasUpgrade("re", 112)) return true
                                                                                                                                                },
                                                                                                                                                tooltip: "Increase the reincarnation upgrade 105 effect.",
                                                                                                                                                onComplete() {
                                                                                                                                                    return player.a.points = player.a.points.add("0")
                                                                                                                                                },
                                                                                                                                            },
                                                                                                                                            192: {
                                                                                                                                                name: "Free achievement",
                                                                                                                                                    done() {
                                                                                                                                                        if (hasAchievement("a",191)) return true
                                                                                                                                                    },
                                                                                                                                                    tooltip: "Free achievement.",
                                                                                                                                                    onComplete() {
                                                                                                                                                        return player.a.points = player.a.points.add("0")
                                                                                                                                                    },
                                                                                                                                                },
                                                                                                                                                193: {
                                                                                                                                                    name: "G Notation!",
                                                                                                                                                        done() {
                                                                                                                                                            return player.points.gte("10^^^5")
                                                                                                                                                        },
                                                                                                                                                        tooltip: "Get 1G5 Points.",
                                                                                                                                                        onComplete() {
                                                                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                                                                        },
                                                                                                                                                    },
                                                                                                                                            194: {
                                                                                                                                                name: "G Oom^oom",
                                                                                                                                                    done() {
                                                                                                                                                        return player.points.gte("10^^^6")
                                                                                                                                                    },
                                                                                                                                                    tooltip: "Get 1G6 Points!",
                                                                                                                                                    onComplete() {
                                                                                                                                                        return player.a.points = player.a.points.add("0")
                                                                                                                                                    },
                                                                                                                                                },
                                                                                                                                                195: {
                                                                                                                                                    name: "Row 8!",
                                                                                                                                                        done() {
                                                                                                                                                            return player.ci.points.gte("1")
                                                                                                                                                        },
                                                                                                                                                        tooltip: "Get a Circle!",
                                                                                                                                                        onComplete() {
                                                                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                                                                        },
                                                                                                                                                    },
                                                                                                                                                    196: {
                                                                                                                                                        name: "Gold",
                                                                                                                                                            done() {
                                                                                                                                                                return player.re.points.gte("1e33")
                                                                                                                                                            },
                                                                                                                                                            tooltip: "Get 1.000e33 Medals.",
                                                                                                                                                            onComplete() {
                                                                                                                                                                return player.a.points = player.a.points.add("0")
                                                                                                                                                            },
                                                                                                                                                        },
                                                                                                                                                        197: {
                                                                                                                                                            name: "New Challenges?",
                                                                                                                                                                done() {
                                                                                                                                                                    if (hasUpgrade("re", 121)) return true
                                                                                                                                                                },
                                                                                                                                                                tooltip: "Get 56th reincarnation upgrade.",
                                                                                                                                                                onComplete() {
                                                                                                                                                                    return player.a.points = player.a.points.add("0")
                                                                                                                                                                },
                                                                                                                                                            },
                                                                                                                                                            201: {
                                                                                                                                                                name: "Exponential Growth",
                                                                                                                                                                    done() {
                                                                                                                                                                        return player.points.gte("10^^^12")
                                                                                                                                                                    },
                                                                                                                                                                    tooltip: "Get 1G12 Points!",
                                                                                                                                                                    onComplete() {
                                                                                                                                                                        return player.a.points = player.a.points.add("0")
                                                                                                                                                                    },
                                                                                                                                                                },
                                                                                                                                                                202: {
                                                                                                                                                                    name: "Unreal",
                                                                                                                                                                        done() {
                                                                                                                                                                            if (hasChallenge("re", 11)) return true
                                                                                                                                                                        },
                                                                                                                                                                        tooltip: "Complete 1st reincarnation challenge.",
                                                                                                                                                                        onComplete() {
                                                                                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                                                                                        },
                                                                                                                                                                    },
                                                                                                                                                                    203: {
                                                                                                                                                                        name: "Quack",
                                                                                                                                                                            done() {
                                                                                                                                                                                return player.du.points.gte("1")
                                                                                                                                                                            },
                                                                                                                                                                            tooltip: "Get a Duck!",
                                                                                                                                                                            onComplete() {
                                                                                                                                                                                return player.a.points = player.a.points.add("0")
                                                                                                                                                                            },
                                                                                                                                                                        },
                                                                                                                                                                        204: {
                                                                                                                                                                            name: "Lucky 7 Part 2",
                                                                                                                                                                                done() {
                                                                                                                                                                                    if (hasUpgrade("du", 12)) return true
                                                                                                                                                                                },
                                                                                                                                                                                tooltip: "Get 777 Upgrades.",
                                                                                                                                                                                onComplete() {
                                                                                                                                                                                    return player.a.points = player.a.points.add("0")
                                                                                                                                                                                },
                                                                                                                                                                            },
                                                                                                                                                                            205: {
                                                                                                                                                                                name: "n i l",
                                                                                                                                                                                    done() {
                                                                                                                                                                                        if (hasChallenge("re", 31)) return true
                                                                                                                                                                                    },
                                                                                                                                                                                    tooltip: "Complete 5th reincarnation challenge.",
                                                                                                                                                                                    onComplete() {
                                                                                                                                                                                        return player.a.points = player.a.points.add("0")
                                                                                                                                                                                    },
                                                                                                                                                                                },
                                                                                                                                                                                206: {
                                                                                                                                                                                    name: "Chicken",
                                                                                                                                                                                        done() {
                                                                                                                                                                                            return player.eg.points.gte("1")
                                                                                                                                                                                        },
                                                                                                                                                                                        tooltip: "Get an Egg!",
                                                                                                                                                                                        onComplete() {
                                                                                                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                                                                                                        },
                                                                                                                                                                                    },
                                                                                                                                                                                    207: {
                                                                                                                                                                                        name: "Gaggol",
                                                                                                                                                                                            done() {
                                                                                                                                                                                                return player.points.gte("10^^^100")
                                                                                                                                                                                            },
                                                                                                                                                                                            tooltip: "Get 1G100 Points!",
                                                                                                                                                                                            onComplete() {
                                                                                                                                                                                                return player.a.points = player.a.points.add("0")
                                                                                                                                                                                            },
                                                                                                                                                                                        },
                                                                                                                                                                                        211: {
                                                                                                                                                                                    name: "Burn",
                                                                                                                                                                                        done() {
                                                                                                                                                                                            return player.fi.points.gte("1")
                                                                                                                                                                                        },
                                                                                                                                                                                        tooltip: "Get a Fire!",
                                                                                                                                                                                        onComplete() {
                                                                                                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                                                                                                        },
                                                                                                                                                                                    },
                                                                                                                                                                                    212: {
                                                                                                                                                                                        name: "Overpower+++",
                                                                                                                                                                                            done() {
                                                                                                                                                                                                return player.points.gte("10^^^1000")
                                                                                                                                                                                            },
                                                                                                                                                                                            tooltip: "Get 1G1,000 Points!",
                                                                                                                                                                                            onComplete() {
                                                                                                                                                                                                return player.a.points = player.a.points.add("0")
                                                                                                                                                                                            },
                                                                                                                                                                                        },
                                                                                                                                                                                        213: {
                                                                                                                                                                                            name: "Video",
                                                                                                                                                                                                done() {
                                                                                                                                                                                                    return player.ga.points.gte("1")
                                                                                                                                                                                                },
                                                                                                                                                                                                tooltip: "Get a Game!",
                                                                                                                                                                                                onComplete() {
                                                                                                                                                                                                    return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                },
                                                                                                                                                                                            },
                                                                                                                                                                                            214: {
                                                                                                                                                                                                name: "Reincarnation going away soon?",
                                                                                                                                                                                                    done() {
                                                                                                                                                                                                        if (hasUpgrade("ga", 54)) return true
                                                                                                                                                                                                    },
                                                                                                                                                                                                    tooltip: "Remove all layers from row 6.",
                                                                                                                                                                                                    onComplete() {
                                                                                                                                                                                                        return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                    },
                                                                                                                                                                                                },
                                                                                                                                                                                                215: {
                                                                                                                                                                                                    name: "Overpower^2",
                                                                                                                                                                                                        done() {
                                                                                                                                                                                                            return player.points.gte("10^^^1000000")
                                                                                                                                                                                                        },
                                                                                                                                                                                                        tooltip: "Get G1,000,000 Points!",
                                                                                                                                                                                                        onComplete() {
                                                                                                                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                        },
                                                                                                                                                                                                    },
                                                                                                                                                                                                    216: {
                                                                                                                                                                                                        name: "Break!",
                                                                                                                                                                                                            done() {
                                                                                                                                                                                                                return player.ha.points.gte("1")
                                                                                                                                                                                                            },
                                                                                                                                                                                                            tooltip: "Get a Hammer!",
                                                                                                                                                                                                            onComplete() {
                                                                                                                                                                                                                return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                            },
                                                                                                                                                                                                        },
                                                                                                                                                                                                        217: {
                                                                                                                                                                                                            name: "GG!",
                                                                                                                                                                                                                done() {
                                                                                                                                                                                                                    return player.points.gte("10^^^9.007e15")
                                                                                                                                                                                                                },
                                                                                                                                                                                                                tooltip: "Get GG1.318 Points!",
                                                                                                                                                                                                                onComplete() {
                                                                                                                                                                                                                    return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                },
                                                                                                                                                                                                            },
                                                                                                                                                                                                            221: {
                                                                                                                                                                                                                name: "EMERGENCY!",
                                                                                                                                                                                                                    done() {
                                                                                                                                                                                                                        if (hasUpgrade("is", 31)) return true
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    tooltip: "Get 911 upgrades.",
                                                                                                                                                                                                                    onComplete() {
                                                                                                                                                                                                                        return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                },
                                                                                                                                                                                                                222: {
                                                                                                                                                                                                                    name: "INFLATION FOR MEDALS!",
                                                                                                                                                                                                                        done() {
                                                                                                                                                                                                                            return player.re.points.gte("1e1000")
                                                                                                                                                                                                                        },
                                                                                                                                                                                                                        tooltip: "Get 1e1,000 Medals.",
                                                                                                                                                                                                                        onComplete() {
                                                                                                                                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                        },
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    223: {
                                                                                                                                                                                                                        name: "Platinum",
                                                                                                                                                                                                                            done() {
                                                                                                                                                                                                                                return player.re.points.gte("1e3003")
                                                                                                                                                                                                                            },
                                                                                                                                                                                                                            tooltip: "Get 1e3,003 Medals.",
                                                                                                                                                                                                                            onComplete() {
                                                                                                                                                                                                                                return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                            },
                                                                                                                                                                                                                        },
                                                                                                                                                                                                                        224: {
                                                                                                                                                                                                                            name: "Big Beach",
                                                                                                                                                                                                                                done() {
                                                                                                                                                                                                                                    return player.is.points.gte("1")
                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                tooltip: "Get a Island!",
                                                                                                                                                                                                                                onComplete() {
                                                                                                                                                                                                                                    return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                },
                                                                                                                                                                                                                            },
                                                                                                                                                                                                                            225: {
                                                                                                                                                                                                                                name: "Useful",
                                                                                                                                                                                                                                    done() {
                                                                                                                                                                                                                                        return player.ju.points.gte("1")
                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                    tooltip: "Get a Juice!",
                                                                                                                                                                                                                                    onComplete() {
                                                                                                                                                                                                                                        return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                226: {
                                                                                                                                                                                                                                    name: "Multi-Completion!",
                                                                                                                                                                                                                                        done() {
                                                                                                                                                                                                                                            if (hasUpgrade("re", 151)) return true
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        tooltip: "Get the 71st reincarnation upgrade.",
                                                                                                                                                                                                                                        onComplete() {
                                                                                                                                                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                    227: {
                                                                                                                                                                                                                                        name: "SUPER ULTRA OMEGA BROKEN",
                                                                                                                                                                                                                                            done() {
                                                                                                                                                                                                                                                if (hasUpgrade("re", 155)) return true
                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                            tooltip: "Get the 75th reincarnation upgrade.",
                                                                                                                                                                                                                                            onComplete() {
                                                                                                                                                                                                                                                return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                    231: {
                                                                                                                                                                                                                                        name: "Bigger than Communitree endgame!",
                                                                                                                                                                                                                                            done() {
                                                                                                                                                                                                                                                return player.points.gte("10^^^10^^10")
                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                            tooltip: "Get GG2.000 Points!",
                                                                                                                                                                                                                                            onComplete() {
                                                                                                                                                                                                                                                return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        232: {
                                                                                                                                                                                                                                            name: "The Real Tree is here!",
                                                                                                                                                                                                                                                done() {
                                                                                                                                                                                                                                                    if (hasUpgrade("re", 161)) return true
                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                tooltip: "Unlock a new sub-tab.",
                                                                                                                                                                                                                                                onComplete() {
                                                                                                                                                                                                                                                    return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                            233: {
                                                                                                                                                                                                                                                name: "Super Broken",
                                                                                                                                                                                                                                                    done() {
                                                                                                                                                                                                                                                        if (hasUpgrade("re", 202)) return true
                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                    tooltip: "Get the badges powers medal gain upgrade.",
                                                                                                                                                                                                                                                    onComplete() {
                                                                                                                                                                                                                                                        return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                234: {
                                                                                                                                                                                                                                                    name: "WORLD RECORD BROKEN",
                                                                                                                                                                                                                                                        done() {
                                                                                                                                                                                                                                                            return player.re.points.gte("1e10000")
                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                        tooltip: "Get 1e10,000 Medals.",
                                                                                                                                                                                                                                                        onComplete() {
                                                                                                                                                                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                    235: {
                                                                                                                                                                                                                                                        name: "e̸r̶̥̓r̵̬̐o̷̠͒r̵̜͝",
                                                                                                                                                                                                                                                            done() {
                                                                                                                                                                                                                                                                if (hasChallenge("re", 81)) return true
                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                            tooltip: "Complete 15th reincarnation challenge.<br> (Help!)",
                                                                                                                                                                                                                                                            onComplete() {
                                                                                                                                                                                                                                                                return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                        236: {
                                                                                                                                                                                                                                                            name: "Wow",
                                                                                                                                                                                                                                                                done() {
                                                                                                                                                                                                                                                                    return player.points.gte("10^^^10^^10^^10")
                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                tooltip: "Get GG3.000 Points!",
                                                                                                                                                                                                                                                                onComplete() {
                                                                                                                                                                                                                                                                    return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                            237: {
                                                                                                                                                                                                                                                                name: "Another reset layer?",
                                                                                                                                                                                                                                                                    done() {
                                                                                                                                                                                                                                                                        return player.su.points.gte("1")
                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                    tooltip: "Do a supernova reset.<br> Reward: Gain x1.5 Neutron Stars.",
                                                                                                                                                                                                                                                                    onComplete() {
                                                                                                                                                                                                                                                                        return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                241: {
                                                                                                                                                                                                                                                                    name: "Half way to Maximusmillion MEDALS!",
                                                                                                                                                                                                                                                                        done() {
                                                                                                                                                                                                                                                                            return player.re.points.gte("1e500000")
                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                        tooltip: "Get 1e500,000 Medals.",
                                                                                                                                                                                                                                                                        onComplete() {
                                                                                                                                                                                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                    242: {
                                                                                                                                                                                                                                                                        name: "Halfway to Triple G!",
                                                                                                                                                                                                                                                                            done() {
                                                                                                                                                                                                                                                                                return player.points.gte("10^^^10^^^5")
                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                            tooltip: "Get GG5.000 Points!",
                                                                                                                                                                                                                                                                            onComplete() {
                                                                                                                                                                                                                                                                                return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                        243: {
                                                                                                                                                                                                                                                                            name: "Ores!",
                                                                                                                                                                                                                                                                                done() {
                                                                                                                                                                                                                                                                                    return player.su.stones.gte("1")
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                tooltip: "Get 1 Stone.",
                                                                                                                                                                                                                                                                                onComplete() {
                                                                                                                                                                                                                                                                                    return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                            244: {
                                                                                                                                                                                                                                                                        name: "Triple G!",
                                                                                                                                                                                                                                                                            done() {
                                                                                                                                                                                                                                                                                return player.points.gte("10^^^10^^^10")
                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                            tooltip: "Get GGG1.000 Points.",
                                                                                                                                                                                                                                                                            onComplete() {
                                                                                                                                                                                                                                                                                return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                        245: {
                                                                                                                                                                                                                                                                            name: "Tiers!",
                                                                                                                                                                                                                                                                                done() {
                                                                                                                                                                                                                                                                                    return player.su.crystaltiers.gte("1")
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                tooltip: "Get your first crystal tier.",
                                                                                                                                                                                                                                                                                onComplete() {
                                                                                                                                                                                                                                                                                    return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                            246: {
                                                                                                                                                                                                                                                                            name: "Levels!",
                                                                                                                                                                                                                                                                                done() {
                                                                                                                                                                                                                                                                                    return player.su.crystallevels.gte("1")
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                tooltip: "Get your first crystal level.",
                                                                                                                                                                                                                                                                                onComplete() {
                                                                                                                                                                                                                                                                                    return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                            247: {
                                                                                                                                                                                                                                                                            name: "Stages!",
                                                                                                                                                                                                                                                                                done() {
                                                                                                                                                                                                                                                                                    return player.su.crystalstages.gte("1")
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                tooltip: "Get your first crystal stage.",
                                                                                                                                                                                                                                                                                onComplete() {
                                                                                                                                                                                                                                                                                    return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                            251: {
                                                                                                                                                                                                                                                                                name: "1,000th Upgrade!",
                                                                                                                                                                                                                                                                                    done() {
                                                                                                                                                                                                                                                                                        if (hasUpgrade("su", 535)) return true
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                    tooltip: "Get the 1,000th upgrade and last supernova upgrade.",
                                                                                                                                                                                                                                                                                    onComplete() {
                                                                                                                                                                                                                                                                                        return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                252: {
                                                                                                                                                                                                                                                                                    name: "There is no layers left basically.",
                                                                                                                                                                                                                                                                                        done() {
                                                                                                                                                                                                                                                                                            if (hasUpgrade("su", 535)) return true
                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                        tooltip: "Remove Row 6- Row 7 Layers. (Excluding Void)",
                                                                                                                                                                                                                                                                                        onComplete() {
                                                                                                                                                                                                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                     253: {
                                                                                                                                                                                                                                                                            name: "The game is not over yet...",
                                                                                                                                                                                                                                                                                done() {
                                                                                                                                                                                                                                                                                    return player.sa.points.gte("1")
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                tooltip: "Do your first sacrifice reset.",
                                                                                                                                                                                                                                                                                onComplete() {
                                                                                                                                                                                                                                                                                    return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                            254: {
                                                                                                                                                                                                                                                                                name: "Finally points are starting to move again.",
                                                                                                                                                                                                                                                                                    done() {
                                                                                                                                                                                                                                                                                        return player.points.gte("10^^^10^^^10^^10")
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                    tooltip: "Get GGG2.000 Points.",
                                                                                                                                                                                                                                                                                    onComplete() {
                                                                                                                                                                                                                                                                                        return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                255: {
                                                                                                                                                                                                                                                                                    name: "Quadruple G!",
                                                                                                                                                                                                                                                                                        done() {
                                                                                                                                                                                                                                                                                            return player.points.gte("10^^^^4")
                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                        tooltip: "Get GGGG1.000 Points.",
                                                                                                                                                                                                                                                                                        onComplete() {
                                                                                                                                                                                                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                     256: {
                                                                                                                                                                                                                                                                            name: "Transcension???",
                                                                                                                                                                                                                                                                                done() {
                                                                                                                                                                                                                                                                                    return player.sa.points.gte("1e100")
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                tooltip: "Get a googol SP.",
                                                                                                                                                                                                                                                                                onComplete() {
                                                                                                                                                                                                                                                                                    return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                            257: {
                                                                                                                                                                                                                                                                                name: "2^10 Upgrades!",
                                                                                                                                                                                                                                                                                    done() {
                                                                                                                                                                                                                                                                                        if (hasUpgrade("sa", 54)) return true
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                    tooltip: "Buy 1,024 upgrades!",
                                                                                                                                                                                                                                                                                    onComplete() {
                                                                                                                                                                                                                                                                                        return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                261: {
                                                                                                                                                                                                                                                                                name: "The challenging is still not over..",
                                                                                                                                                                                                                                                                                    done() {
                                                                                                                                                                                                                                                                                        return player.sa.challengepoint.gte("1")
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                    tooltip: "Get your first challenge point..",
                                                                                                                                                                                                                                                                                    onComplete() {
                                                                                                                                                                                                                                                                                        return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                262: {
                                                                                                                                                                                                                                                                                    name: "TooHard",
                                                                                                                                                                                                                                                                                        done() {
                                                                                                                                                                                                                                                                                            if (hasChallenge("sa", 13)) return true
                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                        tooltip: "Complete 3rd sacrifice challenge.",
                                                                                                                                                                                                                                                                                        onComplete() {
                                                                                                                                                                                                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                    263: {
                                                                                                                                                                                                                                                                                        name: "Power up.",
                                                                                                                                                                                                                                                                                            done() {
                                                                                                                                                                                                                                                                                                return player.sa.challengepower.gte("1")
                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                            tooltip: "Get your first challenge power..",
                                                                                                                                                                                                                                                                                            onComplete() {
                                                                                                                                                                                                                                                                                                return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                        264: {
                                                                                                                                                                                                                                                                                            name: "Inflation returns?",
                                                                                                                                                                                                                                                                                                done() {
                                                                                                                                                                                                                                                                                                    return player.sa.challengeexp.gte("1")
                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                tooltip: "Get your first challenge exponential.",
                                                                                                                                                                                                                                                                                                onComplete() {
                                                                                                                                                                                                                                                                                                    return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                            265: {
                                                                                                                                                                                                                                                                                                name: "H POINTS!!!!",
                                                                                                                                                                                                                                                                                                    done() {
                                                                                                                                                                                                                                                                                                        return player.points.gte("10^^^^5")
                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                    tooltip: "Get 1.000H5 Points.",
                                                                                                                                                                                                                                                                                                    onComplete() {
                                                                                                                                                                                                                                                                                                        return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                266: {
                                                                                                                                                                                                                                                                                                    name: "Types of challenges?",
                                                                                                                                                                                                                                                                                                        done() {
                                                                                                                                                                                                                                                                                                            return player.sa.challengetet.gte("1")
                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                        tooltip: "Get your first challenge tetrational.",
                                                                                                                                                                                                                                                                                                        onComplete() {
                                                                                                                                                                                                                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                267: {
                                                                                                                                                                                                                                                                                                    name: "The end is not even close...",
                                                                                                                                                                                                                                                                                                        done() {
                                                                                                                                                                                                                                                                                                            return player.sa.challengepent.gte("1")
                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                        tooltip: "Get your first challenge pentational.",
                                                                                                                                                                                                                                                                                                        onComplete() {
                                                                                                                                                                                                                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                    271: {
                                                                                                                                                                                                                                                                                                name: "Broken to the pentate.",
                                                                                                                                                                                                                                                                                                    done() {
                                                                                                                                                                                                                                                                                                        return player.points.gte("10^^^^10")
                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                    tooltip: "Get 1.000H10 Points.",
                                                                                                                                                                                                                                                                                                    onComplete() {
                                                                                                                                                                                                                                                                                                        return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                272: {
                                                                                                                                                                                                                                                                                                    name: "GEGGOL POINTS",
                                                                                                                                                                                                                                                                                                        done() {
                                                                                                                                                                                                                                                                                                            return player.points.gte("10^^^^100")
                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                        tooltip: "Get 1.000H100 Points.",
                                                                                                                                                                                                                                                                                                        onComplete() {
                                                                                                                                                                                                                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                    273: {
                                                                                                                                                                                                                                                                                                        name: "No.",
                                                                                                                                                                                                                                                                                                            done() {
                                                                                                                                                                                                                                                                                                                if (hasChallenge("sa", 42)) return true
                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                            tooltip: "Complete the last sacrifice challenge.",
                                                                                                                                                                                                                                                                                                            onComplete() {
                                                                                                                                                                                                                                                                                                                return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                        274: {
                                                                                                                                                                                                                                                                                name: "1,028 is funny!",
                                                                                                                                                                                                                                                                                    done() {
                                                                                                                                                                                                                                                                                        if (hasUpgrade("ap", 13)) return true
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                    tooltip: "Buy 1,028 upgrades!",
                                                                                                                                                                                                                                                                                    onComplete() {
                                                                                                                                                                                                                                                                                        return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                275: {
                                                                                                                                                                                                                                                                                    name: "No life",
                                                                                                                                                                                                                                                                                        done() {
                                                                                                                                                                                                                                                                                            return player.points.gte("10^^^^1000")
                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                        tooltip: "Get 1H1,000 Points.<br> Reward: Endgame.",
                                                                                                                                                                                                                                                                                        onComplete() {
                                                                                                                                                                                                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                            

    },
    tabFormat: ["blank", ["display-text", function() {
        return "<h3 style='color: yellow;'>Achievements: " + player.a.achievements.length + "/" + (Object.keys(tmp.a.achievements).length - 2) + "</h4><br>You have <h2 style='color: yellow; text-shadow: 0 0 10px yellow'>" + format(player.a.points) + "</h3> Achievement Points. <br><h4 style='color: #ffffff;'>Giving x" + format(player.a.points.add(1).pow(0.56).pow(player.a.points.sub(1e61).max(1))) + " to point gain.</h3><br>" + "<h4 style='color: grey;'>The effect is massively increased at 1e61 AP." + "</h4>"
    }
    ], "blank", "blank", "achievements", ],
}, )