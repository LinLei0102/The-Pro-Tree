
// A side layer with achievements, with no prestige
addLayer("a", {
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "yellow",
    resource: "成就之力", 
    row: "side",
    tooltip() { // Optional, tooltip displays when the layer is locked
        return ("成就")
    },
    achievementPopups: true,
    achievements: {
        11: {
            image: "discord.png",
            name: "抓到我！",
            done() {return true}, // This one is a freebie
            goalTooltip: "这是怎么发生的？", // Shows when achievement is not completed
            doneTooltip: "你做到了！", // Showed when the achievement is completed
        },
        12: {
            name: "不可能！",
            done() {return false},
            goalTooltip: "哇哈哈哈！", // Shows when achievement is not completed
            doneTooltip: "怎么做到的？？？？", // Showed when the achievement is completed
            textStyle: {'color': '#04e050'},
        },
        13: {
            name: "咿呀咿呀哟",
            done() {return player.f.points.gte(1)},
            tooltip: "获得 1 个农场点。\n\n奖励: 恐龙现在是你的朋友了（你可以把农场点拉满）。", // Showed when the achievement is completed
            onComplete() {console.log("Bork bork bork!")}
        },
    },
    midsection: ["grid", "blank"],
    grid: {
        maxRows: 3,
        rows: 2,
        cols: 2,
        getStartData(id) {
            return id
        },
        getUnlocked(id) { // Default
            return true
        },
        getCanClick(data, id) {
            return player.points.eq(10)
        },
        getStyle(data, id) {
            return {'background-color': '#'+ (data*1234%999999)}
        },
        onClick(data, id) { // Don't forget onHold
            player[this.layer].grid[id]++
        },
        getTitle(data, id) {
            return "格子 #" + id
        },
        getDisplay(data, id) {
            return data
        },
    },
},
)