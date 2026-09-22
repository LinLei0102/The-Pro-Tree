// This layer is mostly minimal but it uses a custom prestige type and a clickable
addLayer("f", {
    infoboxes:{
        coolInfo: {
            title: "背景设定",
            titleStyle: {'color': '#FE0000'},
            body: "深邃的背景设定！",
            bodyStyle: {'background-color': "#0000EE"}
        }
    },

    startData() { return {
        unlocked: false,
        points: new Decimal(0),
        boop: false,
        clickables: {[11]: "开始"}, // Optional default Clickable state
    }},
    color: "#FE0102",
    requires() {return new Decimal(10)}, 
    resource: "农场点", 
    baseResource: "积分", 
    baseAmount() {return player.points},
    type: "static",
    exponent: 0.5,
    base: 3,
    roundUpCost: true,
    canBuyMax() {return false},
    //directMult() {return new Decimal(player.c.otherThingy)},

    row: 1,
    layerShown() {return true}, 
    branches: ["c"], // When this layer appears, a branch will appear from this layer to any layers here. Each entry can be a pair consisting of a layer id and a color.

    tooltipLocked() { // Optional, tooltip displays when the layer is locked
        return ("这只奇怪的农夫恐龙只会在你拥有至少 " + this.requires() + " 积分时才肯见你。你只有 " + formatWhole(player.points))
    },
    midsection: [
        "blank", ['display-image', 'https://images.beano.com/store/24ab3094eb95e5373bca1ccd6f330d4406db8d1f517fc4170b32e146f80d?auto=compress%2Cformat&dpr=1&w=390'],
        ["display-text", "嗷呜嗷呜！"]
    ],
    // The following are only currently used for "custom" Prestige type:
    prestigeButtonText() { //Is secretly HTML
        if (!this.canBuyMax()) return "嗨！我是一只<u>奇怪的恐龙</u>，我会用 1 个农场点换走你所有的积分和棒棒糖！（至少需要 " + formatWhole(tmp[this.layer].nextAt) + " 积分）"
        if (this.canBuyMax()) return "嗨！我是一只<u>奇怪的恐龙</u>，我会给你 <b>" + formatWhole(tmp[this.layer].resetGain) + "</b> 个农场点，换走你所有的积分和棒棒糖！（你在 " + formatWhole(tmp[this.layer].nextAtDisp) + " 积分）"
    },
    getResetGain() {
        return getResetGain(this.layer, useType = "static")
    },
    getNextAt(canMax=false) { //  
        return getNextAt(this.layer, canMax, useType = "static")
    },
    canReset() {
        return tmp[this.layer].baseAmount.gte(tmp[this.layer].nextAt)
    },
    // This is also non minimal, a Clickable!
    clickables: {

        masterButtonPress() {
            if (getClickableState(this.layer, 11) == "坏掉了……")
                player[this.layer].clickables[11] = "开始"
        },
        masterButtonText() {return (getClickableState(this.layer, 11) == "坏掉了……") ? "修复这个可点击项！" : "什么也不做"}, // Text on Respec button, optional
        11: {
            title: "点点点！", // Optional, displayed at the top in a larger font
            display() { // Everything else displayed in the buyable button after the title
                let data = getClickableState(this.layer, this.id)
                return "当前状态:<br>" + data
            },
            unlocked() { return player[this.layer].unlocked }, 
            canClick() {
                return getClickableState(this.layer, this.id) !== "坏掉了……"},
            onClick() { 
                switch(getClickableState(this.layer, this.id)){
                    case "开始":
                        player[this.layer].clickables[this.id] = "新状态！"
                        break;
                    case "新状态！":
                        player[this.layer].clickables[this.id] = "继续！"
                        break;
                    case "继续！":
                        player[this.layer].clickables[this.id] = "也许有点过头了……"
                        break;                        
                    case "也许有点过头了……":
                        makeParticles(coolParticle, 4)
                        player[this.layer].clickables[this.id] = "坏掉了……"
                        break;
                    default:
                        player[this.layer].clickables[this.id] = "开始"
                        break;
                }
            },
            onHold(){
                console.log("Clickkkkk...")
            },
            style() {
                switch(getClickableState(this.layer, this.id)){
                    case "开始":
                        return {'background-color': 'green'}
                        break;
                    case "新状态！":
                        return {'background-color': 'yellow'}
                        break;
                    case "继续！":
                        return {'background-color': 'orange'}
                        break;                        
                    case "也许有点过头了……":
                        return {'background-color': 'red'}
                        break;
                    default:
                        return {}
                        break;
            }},
        },
    },

}, 
)

const coolParticle = {
    image:"options_wheel.png",
    spread: 20,
    gravity: 2,
    time: 3,
    rotation (id) {
        return 20 * (id - 1.5) + (Math.random() - 0.5) * 10
    },
    dir() {
        return (Math.random() - 0.5) * 10
    },
    speed() {
        return (Math.random() + 1.2) * 8 
    },
    onClick() {
        console.log("yay")
    },
    onMouseOver() {
        console.log("hi")
    },
    onMouseLeave() {
        console.log("bye")
    },
    update() {
        //this.width += 1
        //setDir(this, 135)
    },
    layer: 'f',
}