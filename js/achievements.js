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
        return ("成就")
    },
    achievements: {
        11: {
            name: "起步",
            done() {
                return player.points.gte(1)
            },
            tooltip: "获得 1 积分。 <br>奖励: 1 AP",
			onComplete() {
				return player.a.points = player.a.points.add(1)
			},
        },
        12: {
            name: "新重置！",
            done() {
                return player.b.points.gte("1")
            },
            tooltip: "获得<b>按钮能量</b>。 <br>奖励: 2 AP",
			onComplete() {
				return player.a.points = player.a.points.add(2)
			},
        },
        13: {
            name: "更多升级！",
            done() {
                if (hasUpgrade("p", 21)) return true
            },
            tooltip: "购买第 2 行的第一个升级 <br>奖励: 4 AP",
			onComplete() {
				return player.a.points = player.a.points.add(4)
			},
        },
        14: {
            name: "保留些东西",
            done() {
                if (hasUpgrade("b", 21)) return true
            },
            tooltip: "购买 BP 升级第 2 行的第一个升级。 <br>奖励: 8 AP",
			onComplete() {
				return player.a.points = player.a.points.add(8)
			},
        },
        15: {
            name: "古戈尔！",
            done() {
                return player.points.gte(1e100)
            },
            tooltip: "获得 1e100 积分。<br>奖励: 16 AP",
			onComplete() {
				return player.a.points = player.a.points.add(16)
			},
        },
        16: {
            name: "又一个重置层！",
            done() {
                return player.ant.points.gte("1")
            },
            tooltip: "获得 1 只蚂蚁。 <br>奖励: 32 AP",
			onComplete() {
				return player.a.points = player.a.points.add(32)
			},
        },
        17: {
            name: "继续升级！",
            done() {
                if (hasUpgrade("ant", 21)) return true
            },
            tooltip: "购买 A 升级第 2 行的第一个升级。 <br>奖励: 64 AP",
			onComplete() {
				return player.a.points = player.a.points.add(64)
			},
        },
        21: {
            name: "无限",
            done() {
                return player.points.gte("1.80e308")
            },
            tooltip: "获得 1.80e308 积分。 <br>奖励: 128 AP",
			onComplete() {
				return player.a.points = player.a.points.add(128)
			},
        },
        22: {
            name: "1k 数量级",
            done() {
                return player.points.gte("1e1000")
            },
            tooltip: "获得 1e1,000 积分。<br>奖励: 256 AP",
			onComplete() {
				return player.a.points = player.a.points.add(256)
			},
        },
        23: {
            name: "摸摸草",
            done() {
                return player.g.points.gte("1")
            },
            tooltip: "获得 1 棵草。 <br>奖励: 500 AP",
			onComplete() {
				return player.a.points = player.a.points.add(512)
			},
        },
        24: {
            name: "不错",
            done() {
                return player.g.points.gte(69420)
            },
            tooltip: "获得 69,420 棵草。<br>奖励: 1,024 AP",
			onComplete() {
				return player.a.points = player.a.points.add(1024)
			},
        },
        25: {
            name: "密利利昂",
            done() {
                return player.points.gte("1e3003")
            },
            tooltip: "获得 1e3,003 积分。 <br>奖励: 2,048 AP",
			onComplete() {
				return player.a.points = player.a.points.add(2048)
			},
        },
		    26: {
            name: "还有更多层？！？",
            done() {
                return player.c.points.gte(1)
            },
            tooltip: "获得 1 个奖杯。 <br>奖励: 4,096 AP",
			onComplete() {
				return player.a.points = player.a.points.add(4096)
			},
        },
		        27: {
            name: "10k 数量级",
            done() {
                return player.points.gte("ee4")
            },
            tooltip: "获得 1e10,000 积分。 <br>奖励: 8,192 AP",
			onComplete() {
				return player.a.points = player.a.points.add(8192)
			},
				},
		        31: {
            name: "德西利昂草！",
            done() {
                return player.g.points.gte("e33")
            },
            tooltip: "获得 1e33 棵草。 <br>奖励: 16,384 AP",
			onComplete() {
				return player.a.points = player.a.points.add(16384)
			},
        },
		        32: {
            name: "掷骰",
            done() {
                return player.d.points.gte("1")
            },
            tooltip: "获得 1 个骰子。 <br>奖励: 32,768 AP",
			onComplete() {
				return player.a.points = player.a.points.add(32768)
			},
        },
		        33: {
            name: "骰子的最大点数！",
            done() {
                return player.d.points.gte("6")
            },
            tooltip: "获得 6 个骰子。 <br>奖励: 65,536 AP",
			onComplete() {
				return player.a.points = player.a.points.add(65536)
			},
        },
		        34: {
            name: "古戈尔草",
            done() {
                return player.g.points.gte("1e100")
            },
            tooltip: "获得 1e100 棵草。 <br>奖励: 131,072 AP",
			onComplete() {
				return player.a.points = player.a.points.add(131072)
			},
        },
		
		        35: {
            name: "密里利昂积分",
            done() {
                return player.points.gte("1e30003")
            },
            tooltip: "获得 1e30,003 积分。 <br>奖励: 262,144 AP",
			onComplete() {
				return player.a.points = player.a.points.add(262144)
			},
        },
		        36: {
            name: "更多草",
            done() {
                return player.g.points.gte("1e420")
            },
            tooltip: "获得 1e420 棵草 <br>奖励: 524,288 AP",
			onComplete() {
				return player.a.points = player.a.points.add(524288)
			},
        },
		        37: {
            name: "第 4 行！",
            done() {
                return player.f.points.gte("1")
            },
            tooltip: "获得 1 个水果。<br>奖励: 1,048,576 AP",
			onComplete() {
				return player.a.points = player.a.points.add(1048576)
			},
        },
		    41: {
            name: "充满挑战",
            done() {
                if (hasChallenge("b", 11)) return true
            },
            tooltip: "完成一个挑战。 <br>奖励: 2,097,152 AP",
			onComplete() {
				return player.a.points = player.a.points.add(2097152)
			},
        },
		        42: {
            name: "100k 数量级！",
            done() {
                return player.points.gte("1e100000")
            },
            tooltip: "获得 1e100,000 积分。 <br>奖励: 4,194,304 AP",
			onComplete() {
				return player.a.points = player.a.points.add(4194304)
			},
		},
		        43: {
            name: "紧张刺激！",
            done() {
                if (hasChallenge("b", 13)) return true
            },
            tooltip: "完成第 3 个挑战。 <br>奖励: 8,388,608 AP",
			onComplete() {
				return player.a.points = player.a.points.add(8388608)
			},
		},
		        44: {
            name: "无限奖杯！",
            done() {
                return player.c.points.gte(1.79e308)
            },
            tooltip: "获得 1.80e308 个奖杯。 <br>奖励: 16,777,216 AP",
			onComplete() {
				return player.a.points = player.a.points.add(16777216)
			},
		},
		        45: {
            name: "密利利昂草！",
            done() {
                return player.g.points.gte("1e3003")
            },
            tooltip: "获得 1e3,003 棵草。 <br>奖励: 33,554,432 AP",
			onComplete() {
				return player.a.points = player.a.points.add(33554432)
			},
		},
		        46: {
            name: "暗黑水果？",
            done() {
                return player.f.points.gte("e50")
            },
            tooltip: "获得 1e50 个水果。 <br>奖励: 67,108,864 AP",
			onComplete() {
				return player.a.points = player.a.points.add(67108864)
			},
		},
        47: {
            name: "马克西姆斯百万！",
            done() {
                return player.points.gte("ee6")
            },
            tooltip: "获得 1e1,000,000 积分。 <br>奖励: 137,217,728 AP",
			onComplete() {
				return player.a.points = player.a.points.add(134217728)
			},
		},
        51: {
            name: "年份",
            done() {
                return player.ant.points.gte("2023")
            },
            tooltip: "获得 2,023 只蚂蚁。 <br>奖励: 268,435,456 AP",
			onComplete() {
				return player.a.points = player.a.points.add(268435456)
			},
		},
        52: {
            name: "冷酷无情",
            done() {
                if (hasChallenge("c", 11)) return true
            },
            tooltip: "完成第 1 个奖杯挑战。 <br>奖励: 536,870,912 AP",
			onComplete() {
				return player.a.points = player.a.points.add(536870912)
			},
		},
        53: {
            name: "幸运 7",
            done() {
                return player.g.points.gte("7e7777")
            },
            tooltip: "获得 7e7,777 棵草。 <br>奖励: 1e9 AP",
			onComplete() {
				return player.a.points = player.a.points.add(1e9)
			},
        },
        54: {
                name: "终于有新层了！",
                done() {
                    return player.e.points.gte("1")
                },
                tooltip: "获得 1 电力。 <br>奖励: 1e10 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e10)
                },
            },
            55: {
                name: "密克利利昂！",
                done() {
                    return player.points.gte("1e3000003")
                },
                tooltip: "获得 1e3,000,003 积分。 <br>奖励: 1e11 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e11)
                },
            },
            56: {
                name: "通货膨胀！？",
                done() {
                    return player.points.gte("ee7")
                },
                tooltip: "获得 1e10,000,000 积分。 <br>奖励: 1e12 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e12)
                },
            },
            57: {
                name: "人员比积分还多！？！",
                done() {
                    return player.p.points.gte("ee8")
                },
                tooltip: "获得 1e100,000,000 人员。 <br>奖励: 1e13 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e13)
                },
            },
            61: {
                name: "真快！",
                done() {
                    return player.h.points.gte("1")
                },
                tooltip: "获得 1 栋房屋。 <br>奖励: 1e14 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e14)
                },
            },
            62: {
                name: "马克西姆斯十亿！",
                done() {
                    return player.points.gte("ee9")
                },
                tooltip: "获得 e1e9 积分。 <br>奖励: 1e15 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e15)
                },
            },
            63: {
                name: "三重对话！",
                done() {
                    return player.points.gte("ee10")
                },
                tooltip: "获得 e1e10 积分。 <br>奖励: 1e16 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e16)
                },
            },
            64: {
                name: "冰冻",
                done() {
                    return player.i.points.gte("1")
                },
                tooltip: "获得 1 块冰。 <br>奖励: 1e17 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e17)
                },
            },
            65: {
                name: "马克西姆斯万亿！",
                done() {
                    return player.points.gte("ee12")
                },
                tooltip: "获得 e1e12 积分。 <br>奖励: 1e18 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e18)
                },
            },
            66: {
                name: "年份^2",
                done() {
                    return player.d.points.gte("2024")
                },
                tooltip: "获得 2,024 个骰子。 <br>奖励: 1e19 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e19)
                },
            },
            67: {
                name: "大数字！",
                done() {
                    return player.points.gte("ee15")
                },
                tooltip: "获得 e1e15 积分。 <br>奖励: 1e20 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e20)
                },
            },
            71: {
                name: "第 5 行！",
                done() {
                    return player.j.points.gte("1")
                },
                tooltip: "获得 1 个铃铛。 <br>奖励: 1e23 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e23)
                },
            },
            72: {
                name: "年份^3",
                done() {
                    return player.e.points.gte("2025")
                },
                tooltip: "获得 2,025 电力。 <br>奖励: 1e26 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e26)
                },
            },
            73: {
                name: "世界之铃",
                done() {
                    return player.j.points.gte("1e10")
                },
                tooltip: "获得 1e10 个铃铛。 <br>奖励: 1e29 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e29)
                },
            },
            74: {
                name: "疯狂",
                done() {
                    if (hasChallenge("j", 11)) return true
                },
                tooltip: "完成第 1 个铃铛挑战。 <br>奖励: 1e32 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e32)
                },
            },
            75: {
                name: "马克西姆斯德西利昂！",
                done() {
                    return player.points.gte("e1e33")
                },
                tooltip: "获得 e1e33 积分。 <br>奖励: 1e35 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e35)
                },
            },
            76: {
                name: "年份^4",
                done() {
                    return player.i.points.gte("2026")
                },
                tooltip: "获得 2,026 块冰。 <br>奖励: 1e38 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e38)
                },
            },
            77: {
                name: "古戈尔普勒克斯",
                done() {
                    return player.points.gte("e1e100")
                },
                tooltip: "获得 e1e100 积分。 <br>奖励: 1e41 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e41)
                },
            },
            81: {
                name: "无限^2",
                done() {
                    return player.points.gte("e1.80e308")
                },
                tooltip: "获得 e1.80e308 积分。 <br>奖励: 1e51 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e51)
                },
            },
            82: {
                name: "数量级^2 何时来？",
                done() {
                    return player.points.gte("e1e1000")
                },
                tooltip: "获得 e1e1,000 积分。 <br>奖励: 1e61 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e61)
                },
            },
            83: {
                name: "基利利昂积分！",
                done() {
                    return player.points.gte("e1e3003")
                },
                tooltip: "获得 e1e3,003 积分。 <br>奖励: 1e100 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e100)
                },
            },
            84: {
                name: "光年？",
                done() {
                    return player.ant.points.gte("1e2023")
                },
                tooltip: "获得 1e2,023 只蚂蚁。 <br>奖励: 1e200 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e200)
                },
            },
            85: {
                name: "巨大数字",
                done() {
                    return player.points.gte("eee4")
                },
                tooltip: "获得 e1e10,000 积分。 <br>奖励: 1e300 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e300)
                },
            },
            86: {
                name: "非常巨大的数字！",
                done() {
                    return player.points.gte("ee1000000")
                },
                tooltip: "获得 e1e1,000,000 积分。 <br>奖励: 1e1,000 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("1e1000")
                },
            },
            87: {
                name: "欧米伽巨大数字！",
                done() {
                    return player.points.gte("ee10000000000")
                },
                tooltip: "获得 ee1e10 积分。 <br>奖励: 1e10,000 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("1e10000")
                },
            },
            91: {
                name: "已锁定",
                done() {
                    return player.k.points.gte("1")
                },
                tooltip: "获得 1 把钥匙。 <br>奖励: 1e5,000,000 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("1e5000000")
                },
            },
            92: {
                name: "这么快？",
                done() {
                    return player.k.points.gte("1.80e308")
                },
                tooltip: "获得 1.80e308 把钥匙。 <br>奖励: e1e10 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("ee10")
                },
            },
            93: {
                name: "古戈尔杜普勒克斯",
                done() {
                    return player.points.gte("eee100")
                },
                tooltip: "获得 ee1e100 积分。 <br>奖励: e1e69 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("ee69")
                },
            },
            94: {
                name: "永无止境。",
                done() {
                    return player.l.points.gte("1")
                },
                tooltip: "获得 1 个灯光。 <br>奖励: e1e300 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("ee300")
                },
            },
            95: {
                name: "极限",
                done() {
                    if (hasChallenge("j", 12)) return true
                },
                tooltip: "完成第 2 个铃铛挑战。 <br>奖励: e1e1,000 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("ee1000")
                },
            },
            96: {
                name: "卡利利昂积分！",
                done() {
                    return player.points.gte("eee3003")
                },
                tooltip: "获得 ee1e3,003 积分。 <br>奖励: e1e3,003 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("ee3003")
                },
            },
            97: {
                name: "黑暗？",
                done() {
                    return player.l.points.gte("1.80e308")
                },
                tooltip: "获得 1.80e308 个灯光。 <br>奖励: e1e5,000 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("ee5000")
                },
            },
            101: {
                name: "有资格",
                done() {
                    return player.m.points.gte("1")
                },
                tooltip: "获得 1 金钱。 <br>奖励: e1e10,000 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("ee10000")
                },
            },
            102: {
                name: "离 F 记数法越来越近",
                done() {
                    return player.points.gte("eeee9")
                },
                tooltip: "获得 eee1e9 积分。 <br>奖励: ee1e10,000,000 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("ee10000000")
                },
            },
            103: {
                name: "书",
                done() {
                    return player.n.points.gte("1")
                },
                tooltip: "获得 1 本笔记本。 <br>奖励: ee1e10 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("eee10")
                },
            },
            104: {
                name: "古戈尔特里普勒克斯",
                done() {
                    return player.points.gte("eeee100")
                },
                tooltip: "获得 eee1e100 积分。 <br>奖励: ee1e100 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("eee100")
                },
            },
            105: {
                name: "赫皮利昂积分",
                done() {
                    return player.points.gte("eeee3003")
                },
                tooltip: "获得 eee1e3,003 积分。 <br>奖励: ee1e1,000 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("eee1000")
                },
            },
            106: {
                name: "快到了！",
                done() {
                    return player.points.gte("eeeee9")
                },
                tooltip: "获得 eeee1e9 积分。 <br>奖励: ee1e10,000,000 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("eeee7")
                },
            },
            107: {
                name: "F 记数法！",
                done() {
                    return player.points.gte("eeeee10")
                },
                tooltip: "获得 1F6 积分。 <br>奖励: eee1e10 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("eeee10")
                },
            },
            111: {
                name: "第 6 行！",
                done() {
                    return player.o.points.gte("1")
                },
                tooltip: "获得 1 个洋葱。 <br>奖励: eee1e11 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("eeee11")
                },
            },
            112: {
                name: "自动升级！",
                done() {
                    if (hasUpgrade("o", 13)) return true
                },
                tooltip: "获得第 3 个洋葱升级。 <br>奖励: eee1e12 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("eeee12")
                },
            },
            113: {
                name: "最富有！",
                done() {
                    return player.m.points.gte("2e11")
                },
                tooltip: "获得 2.000e11 金钱。 <br>奖励: eee1e14 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("eeee14")
                },
            },
            114: {
                name: "骇人",
                done() {
                    if (hasChallenge("o", 11)) return true
                },
                tooltip: "完成第 1 个洋葱挑战。 <br>奖励: eee1e18 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("eeee18")
                },
            },
            115: {
            name: "年份^5",
                done() {
                    return player.n.points.gte("2027")
                },
                tooltip: "获得 2,027 本笔记本。 <br>奖励: eee1e26 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("eeee26")
                },
            },
            116: {
                name: "循环何时来？",
                    done() {
                        return player.q.points.gte("1")
                    },
                    tooltip: "获得 1 个四边形。 <br>奖励: 1F6 AP",
                    onComplete() {
                        return player.a.points = player.a.points.add("eeeee10")
                    },
                },
                117: {
                    name: "又通货膨胀了！！？？",
                        done() {
                            return player.points.gte("eeeeeee10")
                        },
                        tooltip: "获得 1F8 积分。 <br>奖励: 2F6 AP",
                        onComplete() {
                            return player.a.points = player.a.points.add("eeeee100")
                        },
                    },
                    121: {
                        name: "好多方块？",
                            done() {
                                return player.q.points.gte("e1.79e308")
                            },
                            tooltip: "获得 e1.79e308 个四边形。 <br>奖励: 5F6 AP",
                            onComplete() {
                                return player.a.points = player.a.points.add("eeeee100000")
                            },
                        },
                        122: {
                            name: "德克尔",
                                done() {
                                    return player.points.gte("eeeeeeeee10")
                                },
                                tooltip: "获得 1F10 积分。 <br>奖励: 1F7 AP",
                                onComplete() {
                                    return player.a.points = player.a.points.add("eeeeee10")
                                },
                            },
                            123: {
                                name: "圆",
                                    done() {
                                        return player.r.points.gte("1")
                                    },
                                    tooltip: "获得 1 个圆环。 <br>奖励: 1F8 AP",
                                    onComplete() {
                                        return player.a.points = player.a.points.add("eeeeeee10")
                                    },
                                },
                                124: {
                                    name: "钻戒？",
                                        done() {
                                            return player.r.points.gte("ee10")
                                        },
                                        tooltip: "获得 e1e10 个圆环。 <br>奖励: 1.301F8 AP",
                                        onComplete() {
                                            return player.a.points = player.a.points.add("eeeeeee20")
                                        },
                                    },
                                    125: {
                                        name: "光速",
                                            done() {
                                                return player.points.gte("eeeeeeeeeee10")
                                            },
                                            tooltip: "获得 1F12 积分。 <br>奖励: 1F9 AP",
                                            onComplete() {
                                                return player.a.points = player.a.points.add("eeeeeeee10")
                                            },
                                        },
                                        126: {
                                            name: "灾难性",
                                            done() {
                                                if (hasChallenge("o", 11)) return true
                                            },
                                            tooltip: "完成第 6 个洋葱挑战。 <br>奖励: 1F10 AP",
                                            onComplete() {
                                                return player.a.points = player.a.points.add("eeeeeeeee10")
                                            },
                                        },
                                        127: {
                                        name: "无限巨大数字！",
                                            done() {
                                                return player.points.gte("eeeeeeeeeeeeeeeee10")
                                            },
                                            tooltip: "获得 1F18 积分。 <br>奖励: 1F13 AP",
                                            onComplete() {
                                                return player.a.points = player.a.points.add("eeeeeeeeeeee10")
                                            },
                                        },
                                        131: {
                                            name: "沙漠",
                                                done() {
                                                    return player.s.points.gte("1")
                                                },
                                                tooltip: "获得 1 粒沙子。 <br>奖励: 1F14 AP",
                                                onComplete() {
                                                    return player.a.points = player.a.points.add("eeeeeeeeeeeee10")
                                                },
                                            },
                                            132: {
                                                name: "子货币！",
                                                    done() {
                                                        return player.s.sanddunes.gte("1")
                                                    },
                                                    tooltip: "获得 1 个沙丘。 <br>奖励: 1F15 AP",
                                                    onComplete() {
                                                        return player.a.points = player.a.points.add("eeeeeeeeeeeeee10")
                                                    },
                                                },
                                                133: {
                                                    name: "购买！",
                                                        done() {
                                                            return player.s.buyables[11].gte("1")
                                                        },
                                                        tooltip: "获得第一个可购买项。 <br>奖励: 1F16 AP",
                                                        onComplete() {
                                                            return player.a.points = player.a.points.add("eeeeeeeeeeeeeee10")
                                                        },
                                                    },
                                                    134: {
                                                        name: "自动购买！",
                                                            done() {
                                                                if (hasMilestone("s", 1)) return true
                                                            },
                                                            tooltip: "获得自动购买项。 <br>奖励: 1F18 AP",
                                                            onComplete() {
                                                                return player.a.points = player.a.points.add("eeeeeeeeeeeeeeeee10")
                                                            },
                                                        },
                                                        135: {
                                                            name: "超级不错",
                                                                done() {
                                                                    return player.points.gte("10^^69")
                                                                },
                                                                tooltip: "获得 1F69 积分。 <br>奖励: 1F30 AP",
                                                                onComplete() {
                                                                    return player.a.points = player.a.points.add("10^^30")
                                                                },
                                                            },
                                                            136: {
                                                                name: "天堂",
                                                                    done() {
                                                                        return player.t.points.gte("1")
                                                                    },
                                                                    tooltip: "获得 1 棵树。 <br>奖励: 1F33 AP",
                                                                    onComplete() {
                                                                        return player.a.points = player.a.points.add("10^^33")
                                                                    },
                                                                },
                                                                137: {
                                                                    name: "#TeamTrees",
                                                                        done() {
                                                                            return player.t.points.gte("1.80e308")
                                                                        },
                                                                        tooltip: "获得 1.80e308 棵树。 <br>奖励: 1F36 AP",
                                                                        onComplete() {
                                                                            return player.a.points = player.a.points.add("10^^36")
                                                                        },
                                                                    },
                                                                    141: {
                                                                        name: "吉戈尔",
                                                                            done() {
                                                                                return player.points.gte("10^^100")
                                                                            },
                                                                            tooltip: "获得 1F100 积分。 <br>奖励: 1F40 AP",
                                                                            onComplete() {
                                                                                return player.a.points = player.a.points.add("10^^40")
                                                                            },
                                                                        },
                                                                        142: {
                                                                            name: "小永恒",
                                                                                done() {
                                                                                    return player.points.gte("10^^308")
                                                                                },
                                                                                tooltip: "获得 1F308 积分。 <br>奖励: 1F50 AP",
                                                                                onComplete() {
                                                                                    return player.a.points = player.a.points.add("10^^50")
                                                                                },
                                                                            },
                                                                            143: {
                                                                                name: "神圣",
                                                                                    done() {
                                                                                        return player.points.gte("10^^1000")
                                                                                    },
                                                                                    tooltip: "获得 1F1,000 积分。 <br>奖励: 1F100 AP",
                                                                                    onComplete() {
                                                                                        return player.a.points = player.a.points.add("10^^100")
                                                                                    },
                                                                                },
                                                                                144: {
                                                                                    name: "太空",
                                                                                        done() {
                                                                                            return player.u.points.gte("1")
                                                                                        },
                                                                                        tooltip: "获得 1 个宇宙。 <br>奖励: 1F150 AP",
                                                                                        onComplete() {
                                                                                            return player.a.points = player.a.points.add("10^^150")
                                                                                        },
                                                                                    },
                                                                                    145: {
                                                                                        name: "星系",
                                                                                            done() {
                                                                                                return player.u.stars.gte("1")
                                                                                            },
                                                                                            tooltip: "获得 1 颗星星。 <br>奖励: 1F200 AP",
                                                                                            onComplete() {
                                                                                                return player.a.points = player.a.points.add("10^^200")
                                                                                            },
                                                                                        },
                                                                                        146: {
                                                                                            name: "多元宇宙？",
                                                                                                done() {
                                                                                                    return player.u.stars.gte("eee1.797e308")
                                                                                                },
                                                                                                tooltip: "获得 eee1.797e308 颗星星。 <br>奖励: 1F250 AP",
                                                                                                onComplete() {
                                                                                                    return player.a.points = player.a.points.add("10^^250")
                                                                                                },
                                                                                            },
                                                                                            147: {
                                                                                                name: "500 个升级",
                                                                                                done() {
                                                                                                    if (hasUpgrade("t", 55)) return true
                                                                                                },
                                                                                                tooltip: "获得树的最后一个升级。 <br>奖励: 1F499 AP",
                                                                                                onComplete() {
                                                                                                    return player.a.points = player.a.points.add("10^^499")
                                                                                                },
                                                                                            },
                                                                                            151: {
                                                                                                name: "究极不错",
                                                                                                    done() {
                                                                                                        return player.points.gte("10^^69420")
                                                                                                    },
                                                                                                    tooltip: "获得 1F69,420 积分。 <br>奖励: 1F666 AP，且 OU71 的威力提升 ×4,096。",
                                                                                                    onComplete() {
                                                                                                        return player.a.points = player.a.points.add("10^^666")
                                                                                                    },
                                                                                                },
                                                                                                152: {
                                                                                                name: "天哪！",
                                                                                                    done() {
                                                                                                        return player.points.gte("10^^1000000")
                                                                                                    },
                                                                                                    tooltip: "获得 F1,000,000 积分。 <br>奖励: 1F1,000 AP",
                                                                                                    onComplete() {
                                                                                                        return player.a.points = player.a.points.add("10^^1000")
                                                                                                    },
                                                                                                },
                                                                                                153: {
                                                                                                    name: "黑暗",
                                                                                                        done() {
                                                                                                            return player.v.points.gte("1")
                                                                                                        },
                                                                                                        tooltip: "获得 1 个虚空。 <br>奖励: 1F2,000 AP。",
                                                                                                        onComplete() {
                                                                                                            return player.a.points = player.a.points.add("10^^2000")
                                                                                                        },
                                                                                                    },
                                                                                                154: {
                                                                                                    name: "全新世界 + 青铜",
                                                                                                        done() {
                                                                                                            return player.re.points.gte("1")
                                                                                                        },
                                                                                                        tooltip: "进行一次新的重置层。 <br>积分不再受成就点加成。",
                                                                                                        onComplete() {
                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                        },
                                                                                                    },
                                                                                                    155: {
                                                                                                        name: "双 FF",
                                                                                                            done() {
                                                                                                                return player.points.gte("10^^9e15")
                                                                                                            },
                                                                                                            tooltip: "获得 FF2.080 积分。",
                                                                                                            onComplete() {
                                                                                                                return player.a.points = player.a.points.add("0")
                                                                                                            },
                                                                                                        },
                                                                                                        156: {
                                                                                                    name: "砍树",
                                                                                                        done() {
                                                                                                            return player.w.total.gte("1")
                                                                                                        },
                                                                                                        tooltip: "获得 1 块木材。",
                                                                                                        onComplete() {
                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                        },
                                                                                                    },
                                                                                                    157: {
                                                                                                        name: "还有更多升级！",
                                                                                                            done() {
                                                                                                                if (hasUpgrade("re", 55)) return true
                                                                                                            },
                                                                                                            tooltip: "获得第 55 个轮回升级。",
                                                                                                            onComplete() {
                                                                                                                return player.a.points = player.a.points.add("0")
                                                                                                            },
                                                                                                        },
                                                                                                        161: {
                                                                                                            name: "黄色",
                                                                                                                done() {
                                                                                                                    if (hasUpgrade("re", 55)) return true
                                                                                                                },
                                                                                                                tooltip: "获得 1 个徽章。",
                                                                                                                onComplete() {
                                                                                                                    return player.a.points = player.a.points.add("0")
                                                                                                                },
                                                                                                            },
                                                                                                        162: {
                                                                                                            name: "箭",
                                                                                                                done() {
                                                                                                                    return player.points.gte("10^^1e99")
                                                                                                                },
                                                                                                                tooltip: "获得 FF2.300 积分。",
                                                                                                                onComplete() {
                                                                                                                    return player.a.points = player.a.points.add("0")
                                                                                                                },
                                                                                                            },
                                                                                                        163: {
                                                                                                            name: "身体",
                                                                                                                done() {
                                                                                                                    return player.x.total.gte("1")
                                                                                                                },
                                                                                                                tooltip: "获得 1 个 X 射线。",
                                                                                                                onComplete() {
                                                                                                                    return player.a.points = player.a.points.add("0")
                                                                                                                },
                                                                                                            },
                                                                                                            164: {
                                                                                                                name: "EternityNum",
                                                                                                                    done() {
                                                                                                                        return player.points.gte("10^^1.79e308")
                                                                                                                    },
                                                                                                                    tooltip: "获得 FF2.396 积分。",
                                                                                                                    onComplete() {
                                                                                                                        return player.a.points = player.a.points.add("0")
                                                                                                                    },
                                                                                                                },
                                                                                                                165: {
                                                                                                                    name: "后院",
                                                                                                                        done() {
                                                                                                                            return player.y.total.gte("1")
                                                                                                                        },
                                                                                                                        tooltip: "获得 1 个庭院。",
                                                                                                                        onComplete() {
                                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                                        },
                                                                                                                    },
                                                                                                                    166: {
                                                                                                                        name: "相当不错",
                                                                                                                            done() {
                                                                                                                                return player.points.gte("10^^1e1450")
                                                                                                                            },
                                                                                                                            tooltip: "获得 FF2.500 积分。",
                                                                                                                            onComplete() {
                                                                                                                                return player.a.points = player.a.points.add("0")
                                                                                                                            },
                                                                                                                        },
                                                                                                                        167: {
                                                                                                                            name: "白银",
                                                                                                                                done() {
                                                                                                                                    return player.re.points.gte("1e9")
                                                                                                                                },
                                                                                                                                tooltip: "获得 1.000e9 枚奖牌。",
                                                                                                                                onComplete() {
                                                                                                                                    return player.a.points = player.a.points.add("0")
                                                                                                                                },
                                                                                                                            },
                                                                                                                            171: {
                                                                                                                                name: "最后的动物名",
                                                                                                                                    done() {
                                                                                                                                        return player.z.total.gte("1")
                                                                                                                                    },
                                                                                                                                    tooltip: "获得 1 匹斑马。",
                                                                                                                                    onComplete() {
                                                                                                                                        return player.a.points = player.a.points.add("0")
                                                                                                                                    },
                                                                                                                                },
                                                                                                                                172: {
                                                                                                                                    name: "消失的货币",
                                                                                                                                        done() {
                                                                                                                                            if (hasUpgrade("z", 12)) return true
                                                                                                                                        },
                                                                                                                                        tooltip: "移除人员层。",
                                                                                                                                        onComplete() {
                                                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                                                        },
                                                                                                                                    },
                                                                                                                                    173: {
                                                                                                                                        name: "更多消失的货币",
                                                                                                                                            done() {
                                                                                                                                                if (hasUpgrade("z", 41)) return true
                                                                                                                                            },
                                                                                                                                            tooltip: "移除第 2 行至第 4 行的层。",
                                                                                                                                            onComplete() {
                                                                                                                                                return player.a.points = player.a.points.add("0")
                                                                                                                                            },
                                                                                                                                        },
                                                                                                                                        174: {
                                                                                                                                            name: "恐怖至极",
                                                                                                                                            done() {
                                                                                                                                                if (hasChallenge("z", 51)) return true
                                                                                                                                            },
                                                                                                                                            tooltip: "完成第 9 个斑马挑战。",
                                                                                                                                            onComplete() {
                                                                                                                                                return player.a.points = player.a.points.add("0")
                                                                                                                                            },
                                                                                                                                        },
                                                                                                                                        175: {
                                                                                                                                            name: "回到小数字？",
                                                                                                                                                done() {
                                                                                                                                                    if (hasUpgrade("z", 55)) return true
                                                                                                                                                },
                                                                                                                                                tooltip: "移除第 5 行的层。",
                                                                                                                                                onComplete() {
                                                                                                                                                    return player.a.points = player.a.points.add("0")
                                                                                                                                                },
                                                                                                                                            },
                                                                                                                                            176: {
                                                                                                                                                name: "五阶化",
                                                                                                                                                    done() {
                                                                                                                                                        if (hasUpgrade("re", 105)) return true
                                                                                                                                                    },
                                                                                                                                                    tooltip: "获得最后一个轮回升级。",
                                                                                                                                                    onComplete() {
                                                                                                                                                        return player.a.points = player.a.points.add("0")
                                                                                                                                                    },
                                                                                                                                                },
                                                                                                                                                177: {
                                                                                                                                                    name: "F 数量级^数量级",
                                                                                                                                                        done() {
                                                                                                                                                            return player.points.gte("10^^e1eeee10")
                                                                                                                                                        },
                                                                                                                                                        tooltip: "获得 FF6.000 积分。",
                                                                                                                                                        onComplete() {
                                                                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                                                                        },
                                                                                                                                                    },
                                                                                                                                                    181: {
                                                                                                                                                        name: "三重 F！",
                                                                                                                                                            done() {
                                                                                                                                                                return player.points.gte("10^^^3")
                                                                                                                                                            },
                                                                                                                                                            tooltip: "获得 FFF1.000 积分。",
                                                                                                                                                            onComplete() {
                                                                                                                                                                return player.a.points = player.a.points.add("0")
                                                                                                                                                            },
                                                                                                                                                        },
                                                                        
                                                                                                                                182: {
                                                                                                                                name: "道路",
                                                                                                                                    done() {
                                                                                                                                        return player.ar.total.gte("1")
                                                                                                                                    },
                                                                                                                                    tooltip: "获得 1 支箭。",
                                                                                                                                    onComplete() {
                                                                                                                                        return player.a.points = player.a.points.add("0")
                                                                                                                                    },
                                                                                                                                },

                                                                                                                                    183: {
                                                                                                                                                    name: "FF 数量级^数量级",
                                                                                                                                                        done() {
                                                                                                                                                            return player.points.gte("10^^10^^9e15")
                                                                                                                                                        },
                                                                                                                                                        tooltip: "获得 FFF2.080 积分。",
                                                                                                                                                        onComplete() {
                                                                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                                                                        },
                                                                                                                                                    },
                                                                                                                                                    184: {
                                                                                                                                                    name: "EternityNum 数量级^数量级",
                                                                                                                                                        done() {
                                                                                                                                                            return player.points.gte("10^^10^^1.79e308")
                                                                                                                                                        },
                                                                                                                                                        tooltip: "获得 FFF2.396 积分。",
                                                                                                                                                        onComplete() {
                                                                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                                                                        },
                                                                                                                                                    },
                                                                                                                                                    185: {
                                                                                                                                    name: "四重 F！",
                                                                                                                                        done() {
                                                                                                                                            return player.points.gte("10^^^4")
                                                                                                                                        },
                                                                                                                                        tooltip: "获得 FFFF1.000 积分。",
                                                                                                                                        onComplete() {
                                                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                                                        },
                                                                                                                                    },
                                                                                                                                    186: {
                                                                                                                                        name: "足球",
                                                                                                                                            done() {
                                                                                                                                                return player.ba.total.gte("1")
                                                                                                                                            },
                                                                                                                                            tooltip: "获得 1 个球。",
                                                                                                                                            onComplete() {
                                                                                                                                                return player.a.points = player.a.points.add("0")
                                                                                                                                            },
                                                                                                                                        },
                                                                                                                                        187: {
                                                                                                                                            name: "750 个升级",
                                                                                                                                            done() {
                                                                                                                                                if (hasUpgrade("ba", 55)) return true
                                                                                                                                            },
                                                                                                                                            tooltip: "获得球的最后一个升级。",
                                                                                                                                            onComplete() {
                                                                                                                                                return player.a.points = player.a.points.add("0")
                                                                                                                                            },
                                                                                                                                        },
                                                                                                                                        191: {
                                                                                                                                            name: "终极通货膨胀",
                                                                                                                                                done() {
                                                                                                                                                    if (hasUpgrade("re", 112)) return true
                                                                                                                                                },
                                                                                                                                                tooltip: "提高第 105 个轮回升级的效果。",
                                                                                                                                                onComplete() {
                                                                                                                                                    return player.a.points = player.a.points.add("0")
                                                                                                                                                },
                                                                                                                                            },
                                                                                                                                            192: {
                                                                                                                                                name: "免费成就",
                                                                                                                                                    done() {
                                                                                                                                                        if (hasAchievement("a",191)) return true
                                                                                                                                                    },
                                                                                                                                                    tooltip: "免费成就。",
                                                                                                                                                    onComplete() {
                                                                                                                                                        return player.a.points = player.a.points.add("0")
                                                                                                                                                    },
                                                                                                                                                },
                                                                                                                                                193: {
                                                                                                                                                    name: "G 记数法！",
                                                                                                                                                        done() {
                                                                                                                                                            return player.points.gte("10^^^5")
                                                                                                                                                        },
                                                                                                                                                        tooltip: "获得 1G5 积分。",
                                                                                                                                                        onComplete() {
                                                                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                                                                        },
                                                                                                                                                    },
                                                                                                                                            194: {
                                                                                                                                                name: "G 数量级^数量级",
                                                                                                                                                    done() {
                                                                                                                                                        return player.points.gte("10^^^6")
                                                                                                                                                    },
                                                                                                                                                    tooltip: "获得 1G6 积分！",
                                                                                                                                                    onComplete() {
                                                                                                                                                        return player.a.points = player.a.points.add("0")
                                                                                                                                                    },
                                                                                                                                                },
                                                                                                                                                195: {
                                                                                                                                                    name: "第 8 行！",
                                                                                                                                                        done() {
                                                                                                                                                            return player.ci.points.gte("1")
                                                                                                                                                        },
                                                                                                                                                        tooltip: "获得 1 个圆！",
                                                                                                                                                        onComplete() {
                                                                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                                                                        },
                                                                                                                                                    },
                                                                                                                                                    196: {
                                                                                                                                                        name: "黄金",
                                                                                                                                                            done() {
                                                                                                                                                                return player.re.points.gte("1e33")
                                                                                                                                                            },
                                                                                                                                                            tooltip: "获得 1.000e33 枚奖牌。",
                                                                                                                                                            onComplete() {
                                                                                                                                                                return player.a.points = player.a.points.add("0")
                                                                                                                                                            },
                                                                                                                                                        },
                                                                                                                                                        197: {
                                                                                                                                                            name: "新挑战？",
                                                                                                                                                                done() {
                                                                                                                                                                    if (hasUpgrade("re", 121)) return true
                                                                                                                                                                },
                                                                                                                                                                tooltip: "获得第 56 个轮回升级。",
                                                                                                                                                                onComplete() {
                                                                                                                                                                    return player.a.points = player.a.points.add("0")
                                                                                                                                                                },
                                                                                                                                                            },
                                                                                                                                                            201: {
                                                                                                                                                                name: "指数级增长",
                                                                                                                                                                    done() {
                                                                                                                                                                        return player.points.gte("10^^^12")
                                                                                                                                                                    },
                                                                                                                                                                    tooltip: "获得 1G12 积分！",
                                                                                                                                                                    onComplete() {
                                                                                                                                                                        return player.a.points = player.a.points.add("0")
                                                                                                                                                                    },
                                                                                                                                                                },
                                                                                                                                                                202: {
                                                                                                                                                                    name: "不真实",
                                                                                                                                                                        done() {
                                                                                                                                                                            if (hasChallenge("re", 11)) return true
                                                                                                                                                                        },
                                                                                                                                                                        tooltip: "完成第 1 个轮回挑战。",
                                                                                                                                                                        onComplete() {
                                                                                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                                                                                        },
                                                                                                                                                                    },
                                                                                                                                                                    203: {
                                                                                                                                                                        name: "嘎嘎",
                                                                                                                                                                            done() {
                                                                                                                                                                                return player.du.points.gte("1")
                                                                                                                                                                            },
                                                                                                                                                                            tooltip: "获得 1 只鸭子！",
                                                                                                                                                                            onComplete() {
                                                                                                                                                                                return player.a.points = player.a.points.add("0")
                                                                                                                                                                            },
                                                                                                                                                                        },
                                                                                                                                                                        204: {
                                                                                                                                                                            name: "幸运 7 第 2 部分",
                                                                                                                                                                                done() {
                                                                                                                                                                                    if (hasUpgrade("du", 12)) return true
                                                                                                                                                                                },
                                                                                                                                                                                tooltip: "获得 777 个升级。",
                                                                                                                                                                                onComplete() {
                                                                                                                                                                                    return player.a.points = player.a.points.add("0")
                                                                                                                                                                                },
                                                                                                                                                                            },
                                                                                                                                                                            205: {
                                                                                                                                                                                name: "n i l",
                                                                                                                                                                                    done() {
                                                                                                                                                                                        if (hasChallenge("re", 31)) return true
                                                                                                                                                                                    },
                                                                                                                                                                                    tooltip: "完成第 5 个轮回挑战。",
                                                                                                                                                                                    onComplete() {
                                                                                                                                                                                        return player.a.points = player.a.points.add("0")
                                                                                                                                                                                    },
                                                                                                                                                                                },
                                                                                                                                                                                206: {
                                                                                                                                                                                    name: "鸡",
                                                                                                                                                                                        done() {
                                                                                                                                                                                            return player.eg.points.gte("1")
                                                                                                                                                                                        },
                                                                                                                                                                                        tooltip: "获得 1 个蛋！",
                                                                                                                                                                                        onComplete() {
                                                                                                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                                                                                                        },
                                                                                                                                                                                    },
                                                                                                                                                                                    207: {
                                                                                                                                                                                        name: "加戈尔",
                                                                                                                                                                                            done() {
                                                                                                                                                                                                return player.points.gte("10^^^100")
                                                                                                                                                                                            },
                                                                                                                                                                                            tooltip: "获得 1G100 积分！",
                                                                                                                                                                                            onComplete() {
                                                                                                                                                                                                return player.a.points = player.a.points.add("0")
                                                                                                                                                                                            },
                                                                                                                                                                                        },
                                                                                                                                                                                        211: {
                                                                                                                                                                                    name: "燃烧",
                                                                                                                                                                                        done() {
                                                                                                                                                                                            return player.fi.points.gte("1")
                                                                                                                                                                                        },
                                                                                                                                                                                        tooltip: "获得 1 团火！",
                                                                                                                                                                                        onComplete() {
                                                                                                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                                                                                                        },
                                                                                                                                                                                    },
                                                                                                                                                                                    212: {
                                                                                                                                                                                        name: "超强+++",
                                                                                                                                                                                            done() {
                                                                                                                                                                                                return player.points.gte("10^^^1000")
                                                                                                                                                                                            },
                                                                                                                                                                                            tooltip: "获得 1G1,000 积分！",
                                                                                                                                                                                            onComplete() {
                                                                                                                                                                                                return player.a.points = player.a.points.add("0")
                                                                                                                                                                                            },
                                                                                                                                                                                        },
                                                                                                                                                                                        213: {
                                                                                                                                                                                            name: "视频",
                                                                                                                                                                                                done() {
                                                                                                                                                                                                    return player.ga.points.gte("1")
                                                                                                                                                                                                },
                                                                                                                                                                                                tooltip: "获得 1 个游戏！",
                                                                                                                                                                                                onComplete() {
                                                                                                                                                                                                    return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                },
                                                                                                                                                                                            },
                                                                                                                                                                                            214: {
                                                                                                                                                                                                name: "轮回快要消失了？",
                                                                                                                                                                                                    done() {
                                                                                                                                                                                                        if (hasUpgrade("ga", 54)) return true
                                                                                                                                                                                                    },
                                                                                                                                                                                                    tooltip: "移除第 6 行的所有层。",
                                                                                                                                                                                                    onComplete() {
                                                                                                                                                                                                        return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                    },
                                                                                                                                                                                                },
                                                                                                                                                                                                215: {
                                                                                                                                                                                                    name: "超强^2",
                                                                                                                                                                                                        done() {
                                                                                                                                                                                                            return player.points.gte("10^^^1000000")
                                                                                                                                                                                                        },
                                                                                                                                                                                                        tooltip: "获得 G1,000,000 积分！",
                                                                                                                                                                                                        onComplete() {
                                                                                                                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                        },
                                                                                                                                                                                                    },
                                                                                                                                                                                                    216: {
                                                                                                                                                                                                        name: "破坏！",
                                                                                                                                                                                                            done() {
                                                                                                                                                                                                                return player.ha.points.gte("1")
                                                                                                                                                                                                            },
                                                                                                                                                                                                            tooltip: "获得 1 把锤子！",
                                                                                                                                                                                                            onComplete() {
                                                                                                                                                                                                                return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                            },
                                                                                                                                                                                                        },
                                                                                                                                                                                                        217: {
                                                                                                                                                                                                            name: "GG！",
                                                                                                                                                                                                                done() {
                                                                                                                                                                                                                    return player.points.gte("10^^^9.007e15")
                                                                                                                                                                                                                },
                                                                                                                                                                                                                tooltip: "获得 GG1.318 积分！",
                                                                                                                                                                                                                onComplete() {
                                                                                                                                                                                                                    return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                },
                                                                                                                                                                                                            },
                                                                                                                                                                                                            221: {
                                                                                                                                                                                                                name: "紧急情况！",
                                                                                                                                                                                                                    done() {
                                                                                                                                                                                                                        if (hasUpgrade("is", 31)) return true
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    tooltip: "获得 911 个升级。",
                                                                                                                                                                                                                    onComplete() {
                                                                                                                                                                                                                        return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                },
                                                                                                                                                                                                                222: {
                                                                                                                                                                                                                    name: "奖牌通货膨胀！",
                                                                                                                                                                                                                        done() {
                                                                                                                                                                                                                            return player.re.points.gte("1e1000")
                                                                                                                                                                                                                        },
                                                                                                                                                                                                                        tooltip: "获得 1e1,000 枚奖牌。",
                                                                                                                                                                                                                        onComplete() {
                                                                                                                                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                        },
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    223: {
                                                                                                                                                                                                                        name: "铂金",
                                                                                                                                                                                                                            done() {
                                                                                                                                                                                                                                return player.re.points.gte("1e3003")
                                                                                                                                                                                                                            },
                                                                                                                                                                                                                            tooltip: "获得 1e3,003 枚奖牌。",
                                                                                                                                                                                                                            onComplete() {
                                                                                                                                                                                                                                return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                            },
                                                                                                                                                                                                                        },
                                                                                                                                                                                                                        224: {
                                                                                                                                                                                                                            name: "大海滩",
                                                                                                                                                                                                                                done() {
                                                                                                                                                                                                                                    return player.is.points.gte("1")
                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                tooltip: "获得 1 座岛屿！",
                                                                                                                                                                                                                                onComplete() {
                                                                                                                                                                                                                                    return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                },
                                                                                                                                                                                                                            },
                                                                                                                                                                                                                            225: {
                                                                                                                                                                                                                                name: "有用",
                                                                                                                                                                                                                                    done() {
                                                                                                                                                                                                                                        return player.ju.points.gte("1")
                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                    tooltip: "获得 1 杯果汁！",
                                                                                                                                                                                                                                    onComplete() {
                                                                                                                                                                                                                                        return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                226: {
                                                                                                                                                                                                                                    name: "多重完成！",
                                                                                                                                                                                                                                        done() {
                                                                                                                                                                                                                                            if (hasUpgrade("re", 151)) return true
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        tooltip: "获得第 71 个轮回升级。",
                                                                                                                                                                                                                                        onComplete() {
                                                                                                                                                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                    227: {
                                                                                                                                                                                                                                        name: "超级究极欧米伽离谱",
                                                                                                                                                                                                                                            done() {
                                                                                                                                                                                                                                                if (hasUpgrade("re", 155)) return true
                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                            tooltip: "获得第 75 个轮回升级。",
                                                                                                                                                                                                                                            onComplete() {
                                                                                                                                                                                                                                                return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                    231: {
                                                                                                                                                                                                                                        name: "比社区树的终局还大！",
                                                                                                                                                                                                                                            done() {
                                                                                                                                                                                                                                                return player.points.gte("10^^^10^^10")
                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                            tooltip: "获得 GG2.000 积分！",
                                                                                                                                                                                                                                            onComplete() {
                                                                                                                                                                                                                                                return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        232: {
                                                                                                                                                                                                                                            name: "真正的树来了！",
                                                                                                                                                                                                                                                done() {
                                                                                                                                                                                                                                                    if (hasUpgrade("re", 161)) return true
                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                tooltip: "解锁一个新的子标签页。",
                                                                                                                                                                                                                                                onComplete() {
                                                                                                                                                                                                                                                    return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                            233: {
                                                                                                                                                                                                                                                name: "超级离谱",
                                                                                                                                                                                                                                                    done() {
                                                                                                                                                                                                                                                        if (hasUpgrade("re", 202)) return true
                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                    tooltip: "获得徽章能量提升奖牌获取的升级。",
                                                                                                                                                                                                                                                    onComplete() {
                                                                                                                                                                                                                                                        return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                234: {
                                                                                                                                                                                                                                                    name: "世界纪录被打破",
                                                                                                                                                                                                                                                        done() {
                                                                                                                                                                                                                                                            return player.re.points.gte("1e10000")
                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                        tooltip: "获得 1e10,000 枚奖牌。",
                                                                                                                                                                                                                                                        onComplete() {
                                                                                                                                                                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                    235: {
                                                                                                                                                                                                                                                        name: "e̸r̶̥̓r̵̬̐o̷̠͒r̵̜͝",
                                                                                                                                                                                                                                                            done() {
                                                                                                                                                                                                                                                                if (hasChallenge("re", 81)) return true
                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                            tooltip: "完成第 15 个轮回挑战。<br> （救命！）",
                                                                                                                                                                                                                                                            onComplete() {
                                                                                                                                                                                                                                                                return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                        236: {
                                                                                                                                                                                                                                                            name: "哇",
                                                                                                                                                                                                                                                                done() {
                                                                                                                                                                                                                                                                    return player.points.gte("10^^^10^^10^^10")
                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                tooltip: "获得 GG3.000 积分！",
                                                                                                                                                                                                                                                                onComplete() {
                                                                                                                                                                                                                                                                    return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                            237: {
                                                                                                                                                                                                                                                                name: "又一个重置层？",
                                                                                                                                                                                                                                                                    done() {
                                                                                                                                                                                                                                                                        return player.su.points.gte("1")
                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                    tooltip: "进行一次超新星重置。<br> 奖励: 获得 ×1.5 中子星。",
                                                                                                                                                                                                                                                                    onComplete() {
                                                                                                                                                                                                                                                                        return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                241: {
                                                                                                                                                                                                                                                                    name: "到马克西姆斯百万奖牌的一半！",
                                                                                                                                                                                                                                                                        done() {
                                                                                                                                                                                                                                                                            return player.re.points.gte("1e500000")
                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                        tooltip: "获得 1e500,000 枚奖牌。",
                                                                                                                                                                                                                                                                        onComplete() {
                                                                                                                                                                                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                    242: {
                                                                                                                                                                                                                                                                        name: "到三重 G 的一半！",
                                                                                                                                                                                                                                                                            done() {
                                                                                                                                                                                                                                                                                return player.points.gte("10^^^10^^^5")
                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                            tooltip: "获得 GG5.000 积分！",
                                                                                                                                                                                                                                                                            onComplete() {
                                                                                                                                                                                                                                                                                return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                        243: {
                                                                                                                                                                                                                                                                            name: "矿石！",
                                                                                                                                                                                                                                                                                done() {
                                                                                                                                                                                                                                                                                    return player.su.stones.gte("1")
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                tooltip: "获得 1 块石头。",
                                                                                                                                                                                                                                                                                onComplete() {
                                                                                                                                                                                                                                                                                    return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                            244: {
                                                                                                                                                                                                                                                                        name: "三重 G！",
                                                                                                                                                                                                                                                                            done() {
                                                                                                                                                                                                                                                                                return player.points.gte("10^^^10^^^10")
                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                            tooltip: "获得 GGG1.000 积分。",
                                                                                                                                                                                                                                                                            onComplete() {
                                                                                                                                                                                                                                                                                return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                        245: {
                                                                                                                                                                                                                                                                            name: "阶！",
                                                                                                                                                                                                                                                                                done() {
                                                                                                                                                                                                                                                                                    return player.su.crystaltiers.gte("1")
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                tooltip: "获得你的第一个水晶阶。",
                                                                                                                                                                                                                                                                                onComplete() {
                                                                                                                                                                                                                                                                                    return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                            246: {
                                                                                                                                                                                                                                                                            name: "级！",
                                                                                                                                                                                                                                                                                done() {
                                                                                                                                                                                                                                                                                    return player.su.crystallevels.gte("1")
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                tooltip: "获得你的第一个水晶级。",
                                                                                                                                                                                                                                                                                onComplete() {
                                                                                                                                                                                                                                                                                    return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                            247: {
                                                                                                                                                                                                                                                                            name: "段！",
                                                                                                                                                                                                                                                                                done() {
                                                                                                                                                                                                                                                                                    return player.su.crystalstages.gte("1")
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                tooltip: "获得你的第一个水晶段。",
                                                                                                                                                                                                                                                                                onComplete() {
                                                                                                                                                                                                                                                                                    return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                            251: {
                                                                                                                                                                                                                                                                                name: "第 1,000 个升级！",
                                                                                                                                                                                                                                                                                    done() {
                                                                                                                                                                                                                                                                                        if (hasUpgrade("su", 535)) return true
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                    tooltip: "获得第 1,000 个升级，也是最后一个超新星升级。",
                                                                                                                                                                                                                                                                                    onComplete() {
                                                                                                                                                                                                                                                                                        return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                252: {
                                                                                                                                                                                                                                                                                    name: "基本上已经没有层了。",
                                                                                                                                                                                                                                                                                        done() {
                                                                                                                                                                                                                                                                                            if (hasUpgrade("su", 535)) return true
                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                        tooltip: "移除第 6 行至第 7 行的层。（虚空除外）",
                                                                                                                                                                                                                                                                                        onComplete() {
                                                                                                                                                                                                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                     253: {
                                                                                                                                                                                                                                                                            name: "游戏还没结束……",
                                                                                                                                                                                                                                                                                done() {
                                                                                                                                                                                                                                                                                    return player.sa.points.gte("1")
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                tooltip: "进行你的第一次献祭重置。",
                                                                                                                                                                                                                                                                                onComplete() {
                                                                                                                                                                                                                                                                                    return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                            254: {
                                                                                                                                                                                                                                                                                name: "积分终于又开始动了。",
                                                                                                                                                                                                                                                                                    done() {
                                                                                                                                                                                                                                                                                        return player.points.gte("10^^^10^^^10^^10")
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                    tooltip: "获得 GGG2.000 积分。",
                                                                                                                                                                                                                                                                                    onComplete() {
                                                                                                                                                                                                                                                                                        return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                255: {
                                                                                                                                                                                                                                                                                    name: "四重 G！",
                                                                                                                                                                                                                                                                                        done() {
                                                                                                                                                                                                                                                                                            return player.points.gte("10^^^^4")
                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                        tooltip: "获得 GGGG1.000 积分。",
                                                                                                                                                                                                                                                                                        onComplete() {
                                                                                                                                                                                                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                     256: {
                                                                                                                                                                                                                                                                            name: "超越？？？",
                                                                                                                                                                                                                                                                                done() {
                                                                                                                                                                                                                                                                                    return player.sa.points.gte("1e100")
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                tooltip: "获得 1 古戈尔 SP。",
                                                                                                                                                                                                                                                                                onComplete() {
                                                                                                                                                                                                                                                                                    return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                            257: {
                                                                                                                                                                                                                                                                                name: "2^10 个升级！",
                                                                                                                                                                                                                                                                                    done() {
                                                                                                                                                                                                                                                                                        if (hasUpgrade("sa", 54)) return true
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                    tooltip: "购买 1,024 个升级！",
                                                                                                                                                                                                                                                                                    onComplete() {
                                                                                                                                                                                                                                                                                        return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                261: {
                                                                                                                                                                                                                                                                                name: "挑战还没结束……",
                                                                                                                                                                                                                                                                                    done() {
                                                                                                                                                                                                                                                                                        return player.sa.challengepoint.gte("1")
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                    tooltip: "获得你的第一个挑战点……",
                                                                                                                                                                                                                                                                                    onComplete() {
                                                                                                                                                                                                                                                                                        return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                262: {
                                                                                                                                                                                                                                                                                    name: "太难了",
                                                                                                                                                                                                                                                                                        done() {
                                                                                                                                                                                                                                                                                            if (hasChallenge("sa", 13)) return true
                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                        tooltip: "完成第 3 个献祭挑战。",
                                                                                                                                                                                                                                                                                        onComplete() {
                                                                                                                                                                                                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                    263: {
                                                                                                                                                                                                                                                                                        name: "能量提升。",
                                                                                                                                                                                                                                                                                            done() {
                                                                                                                                                                                                                                                                                                return player.sa.challengepower.gte("1")
                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                            tooltip: "获得你的第一个挑战能量……",
                                                                                                                                                                                                                                                                                            onComplete() {
                                                                                                                                                                                                                                                                                                return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                        264: {
                                                                                                                                                                                                                                                                                            name: "通货膨胀回归？",
                                                                                                                                                                                                                                                                                                done() {
                                                                                                                                                                                                                                                                                                    return player.sa.challengeexp.gte("1")
                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                tooltip: "获得你的第一个挑战指数。",
                                                                                                                                                                                                                                                                                                onComplete() {
                                                                                                                                                                                                                                                                                                    return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                            265: {
                                                                                                                                                                                                                                                                                                name: "H 积分！！！！",
                                                                                                                                                                                                                                                                                                    done() {
                                                                                                                                                                                                                                                                                                        return player.points.gte("10^^^^5")
                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                    tooltip: "获得 1.000H5 积分。",
                                                                                                                                                                                                                                                                                                    onComplete() {
                                                                                                                                                                                                                                                                                                        return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                266: {
                                                                                                                                                                                                                                                                                                    name: "挑战的类型？",
                                                                                                                                                                                                                                                                                                        done() {
                                                                                                                                                                                                                                                                                                            return player.sa.challengetet.gte("1")
                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                        tooltip: "获得你的第一个挑战四阶。",
                                                                                                                                                                                                                                                                                                        onComplete() {
                                                                                                                                                                                                                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                267: {
                                                                                                                                                                                                                                                                                                    name: "离结局还远得很……",
                                                                                                                                                                                                                                                                                                        done() {
                                                                                                                                                                                                                                                                                                            return player.sa.challengepent.gte("1")
                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                        tooltip: "获得你的第一个挑战五阶。",
                                                                                                                                                                                                                                                                                                        onComplete() {
                                                                                                                                                                                                                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                    271: {
                                                                                                                                                                                                                                                                                                name: "离谱到五阶。",
                                                                                                                                                                                                                                                                                                    done() {
                                                                                                                                                                                                                                                                                                        return player.points.gte("10^^^^10")
                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                    tooltip: "获得 1.000H10 积分。",
                                                                                                                                                                                                                                                                                                    onComplete() {
                                                                                                                                                                                                                                                                                                        return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                272: {
                                                                                                                                                                                                                                                                                                    name: "格戈尔积分",
                                                                                                                                                                                                                                                                                                        done() {
                                                                                                                                                                                                                                                                                                            return player.points.gte("10^^^^100")
                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                        tooltip: "获得 1.000H100 积分。",
                                                                                                                                                                                                                                                                                                        onComplete() {
                                                                                                                                                                                                                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                    273: {
                                                                                                                                                                                                                                                                                                        name: "不。",
                                                                                                                                                                                                                                                                                                            done() {
                                                                                                                                                                                                                                                                                                                if (hasChallenge("sa", 42)) return true
                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                            tooltip: "完成最后一个献祭挑战。",
                                                                                                                                                                                                                                                                                                            onComplete() {
                                                                                                                                                                                                                                                                                                                return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                        274: {
                                                                                                                                                                                                                                                                                name: "1,028 很好笑！",
                                                                                                                                                                                                                                                                                    done() {
                                                                                                                                                                                                                                                                                        if (hasUpgrade("ap", 13)) return true
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                    tooltip: "购买 1,028 个升级！",
                                                                                                                                                                                                                                                                                    onComplete() {
                                                                                                                                                                                                                                                                                        return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                275: {
                                                                                                                                                                                                                                                                                    name: "没有生活",
                                                                                                                                                                                                                                                                                        done() {
                                                                                                                                                                                                                                                                                            return player.points.gte("10^^^^1000")
                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                        tooltip: "获取 1H1,000 积分。<br> 奖励：终局。",
                                                                                                                                                                                                                                                                                        onComplete() {
                                                                                                                                                                                                                                                                                            return player.a.points = player.a.points.add("0")
                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                            

    },
    tabFormat: ["blank", ["display-text", function() {
        return "<h3 style='color: yellow;'>成就: " + player.a.achievements.length + "/" + (Object.keys(tmp.a.achievements).length - 2) + "</h4><br>你有 <h2 style='color: yellow; text-shadow: 0 0 10px yellow'>" + format(player.a.points) + "</h3> 成就点。 <br><h4 style='color: #ffffff;'>给予 ×" + format(player.a.points.add(1).pow(0.56).pow(player.a.points.sub(1e61).max(1))) + " 积分获取。</h3><br>" + "<h4 style='color: grey;'>该效果在 1e61 成就点时会大幅增强。" + "</h4>"
    }
    ], "blank", "blank", "achievements", ],
}, )