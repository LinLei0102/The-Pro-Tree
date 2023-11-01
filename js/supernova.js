let smallClickable = {
    width: 'fit-content', 
    'min-height': 'fit-content', 
    'font-size': '14px',
    'border-radius': '5px',
}
addLayer("su", {
    effect(){

    },
    effect(){
        return ExpantaNum.pow(10, player[this.layer].total)
        /*
          you should use this.layer instead of <layerID>
          Decimal.pow(num1, num2) is an easier way to do
          num1.pow(num2)
        */
      },
      effect(){
        let e = player[this.layer].total.max("1").tetr("2")
        if(e.gt("e3000")){
            if(hasAchievement("a",237))e=e.log10().pow(5.18e3/6).min("ee4")
        }
        return e
      },
      effectDescription(){

},
effectDescription(){
    let s =  "multiplying medal gain by " + format(tmp[this.layer].effect) 
    if(this.effect().gt("9.99e9999")){s=s+" (hardcapped)"}
    else if(this.effect().gt("e3000")){s=s+" (softcapped)"}
    return s
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
row: "9",
microtabs: {
    stuff: {
                    "Upgrades": {
                        unlocked() {return (hasAchievement("a", 11))},
                content: [
                    ["blank", "15px"],
                    ["raw-html", () => `<h4 style="opacity:.5">Welcome to the Supernova! Resets everything except achievements.<br> You will gain 10 neutron stars on your first supernova reset.</h4>`],
                    ["upgrades", [1,2,3,4,5,43,49,50,51,53]]
                ]
            },
            "Mining": {
                unlocked() {return (hasUpgrade("su", 55))},
                        content: [
                            
                    ["blank", "15px"],
                    ["display-text", () => "You have <h2 style='color: #918E85; text-shadow: 0 0 10px #918E85'>" + format(player.su.stones) + "</h2> Stone, multiplying neutron star gain by <h2 style='color: #918E85; text-shadow: 0 0 10px #918E85'> <br>" + format(player.su.stones.max(1).pow(0.02)) + "x.</h2><br>" + "<h3>" + "(" + format(tmp.su.effect2)  +  " Stone/s)</h3><br>-------------------------------------------------------------------------------------"],
                    ["display-text", () => "You have <h2 style='color: #36454F; text-shadow: 0 0 10px #36454F'>" + format(player.su.coal) + "</h2> Coal, multiplying stone gain by <h2 style='color: #36454F; text-shadow: 0 0 10px #36454F'> <br>" + format(player.su.coal.max(1).pow(0.04)) + "x.</h2><br>-------------------------------------------------------------------------------------"],
                    ["display-text", () => "You have <h2 style='color: #A59C94; text-shadow: 0 0 10px #A59C94'>" + format(player.su.iron) + "</h2> Iron, multiplying stone and coal gain by <h2 style='color: #A59C94; text-shadow: 0 0 10px #A59C94'> <br>" + format(player.su.iron.max(1).pow(0.1)) + "x.</h2><br>-------------------------------------------------------------------------------------"],
                    ["display-text", () => "You have <h2 style='color: #FFD700; text-shadow: 0 0 10px #FFD700'>" + format(player.su.gold) + "</h2> Gold, multiplying stone, coal and iron gain by <h2 style='color: #FFD700; text-shadow: 0 0 10px #FFD700'> <br>" + format(player.su.gold.max(1).pow(0.16)) + "x.</h2><br>-------------------------------------------------------------------------------------"],
                    ["display-text", () => "You have <h2 style='color: #B9F2FF; text-shadow: 0 0 10px #B9F2FF'>" + format(player.su.diamond) + "</h2> Diamond, multiplying stone, coal, iron and gold gain by <h2 style='color: #B9F2FF; text-shadow: 0 0 10px #B9F2FF'> <br>" + format(player.su.diamond.max(1).pow(0.25)) + "x.</h2><br>-------------------------------------------------------------------------------------"],
                    ["display-text", () => "You have <h2 style='color: #9B111E; text-shadow: 0 0 10px #9B111E'>" + format(player.su.ruby) + "</h2> Ruby, multiplying stone - diamond gain by <h2 style='color: #9B111E; text-shadow: 0 0 10px #9B111E'> <br>" + format(player.su.ruby.max(1).pow(0.36)) + "x.</h2><br>-------------------------------------------------------------------------------------"],
                    ["display-text", () => "You have <h2 style='color: #50c878; text-shadow: 0 0 10px #50c878'>" + format(player.su.emerald) + "</h2> Emerald, multiplying stone - ruby gain by <h2 style='color: #50c878; text-shadow: 0 0 10px #50c878'> <br>" + format(player.su.emerald.max(1).pow(0.5)) + "x.</h2><br>-------------------------------------------------------------------------------------"],
                    ["display-text", () => "You have <h2 style='color: #9966cc; text-shadow: 0 0 10px #9966cc'>" + format(player.su.amethyst) + "</h2> Amethyst, multiplying stone - emerald gain by <h2 style='color: #9966cc; text-shadow: 0 0 10px #9966cc'> <br>" + format(player.su.amethyst.max(1).pow(0.64)) + "x.</h2><br>-------------------------------------------------------------------------------------"],
                    ["display-text", () => "You have <h2 style='color: #0047AB; text-shadow: 0 0 10px #0047AB'>" + format(player.su.cobalt) + "</h2> Cobalt, multiplying stone - amethyst gain by <h2 style='color: #0047AB; text-shadow: 0 0 10px #0047AB'> <br>" + format(player.su.cobalt.max(1).pow(0.81)) + "x.</h2><br>-------------------------------------------------------------------------------------"],
                    ["raw-html", () => `<h4 style="opacity:.5">Note: Buying an upgrade increases the cost of all upgrades in the same row!</h4><br>`],
                    ["clickable", 11],
                    ["row", [["upgrade", 61]]],
                    ["row", [["upgrade", 71], ["upgrade", 72]]],
                    ["row", [["upgrade", 81]]],
                    ["row", [["upgrade", 91], ["upgrade", 92]]],
                    ["row", [["upgrade", 101]]],
                    ["row", [["upgrade", 111], ["upgrade", 112]]],
                    ["row", [["upgrade", 121], ["upgrade", 122]]],
                    ["row", [["upgrade", 131], ["upgrade", 132]]],
                    ["row", [["upgrade", 141]]],
                    ["row", [["upgrade", 151], ["upgrade", 152]]],
                    ["row", [["upgrade", 161], ["upgrade", 162]]],
                    ["row", [["upgrade", 171], ["upgrade", 172]]],
                    ["row", [["upgrade", 181], ["upgrade", 182]]],
                    ["row", [["upgrade", 191]]],
                    ["row", [["upgrade", 201], ["upgrade", 202],["upgrade", 203],["upgrade", 204],["upgrade", 205]]],
                    ["row", [["upgrade", 211]]],
                    ["row", [["upgrade", 221]]],
                    ["row", [["upgrade", 231]]],
                    ["row", [["upgrade", 241]]],
                    ["row", [["upgrade", 251], ["upgrade", 252],["upgrade", 253],["upgrade", 254]]],
                    ["row", [["upgrade", 261]]],
                    ["row", [["upgrade", 271], ["upgrade", 272],["upgrade", 273]]],
                    ["row", [["upgrade", 281]]],
                    ["row", [["upgrade", 291]]],
                    ["row", [["upgrade", 301], ["upgrade", 302],["upgrade", 303],["upgrade", 304],["upgrade", 305]]],
                    ["row", [["upgrade", 311]]],
                    ["row", [["upgrade", 321], ["upgrade", 322],["upgrade", 323],["upgrade", 324]]],
                    ["row", [["upgrade", 331]]],
                    ["row", [["upgrade", 341]]],
                    ["row", [["upgrade", 351]]],
                    ["row", [["upgrade", 361], ["upgrade", 362],["upgrade", 363],["upgrade", 364],["upgrade", 365]]],
                    ["row", [["upgrade", 371]]],
                    ["row", [["upgrade", 381], ["upgrade", 382],["upgrade", 383],["upgrade", 384],["upgrade", 385]]],
                    ["row", [["upgrade", 391]]],
                    ["row", [["upgrade", 401], ["upgrade", 402],["upgrade", 403],["upgrade", 404],["upgrade", 405]]],
                    ["row", [["upgrade", 411]]],
                    ["row", [["upgrade", 421], ["upgrade", 422]]],
                    ["row", [["upgrade", 441]]],
                    ["row", [["upgrade", 451]]],
                    ["row", [["upgrade", 461]]],
                    ["row", [["upgrade", 471]]],
                    ["row", [["upgrade", 481]]],
                    ["row", [["upgrade", 521]]],

                ]
                    },
                    "Buyables": {
                        unlocked() {return (hasUpgrade("su", 101))},

                        content: [
                            ["blank", "15px"],
                            ["row", [["buyable", 11], ["buyable", 12],["buyable", 13],["buyable", 14],["buyable", 15],["buyable", 16],["buyable", 17],["buyable", 18]]],
                        ],
                    },
            "Milestones": {
                content: [
                    ["blank", "15px"],
                    "milestones"
                ]
                
            },
            "Crystal": {
                unlocked() {return (hasUpgrade("su", 55))},
                content: [
                    ["blank", "15px"],
                    ["display-text", () => "You have <h2 style='color: #a7d8de ; text-shadow: 0 0 10px #a7d8de '>" + format(player.su.crystal) + "</h2> Crystal, raising stone - cobalt gain by <h2 style='color: #a7d8de ; text-shadow: 0 0 10px #a7d8de '> <br>^" + format(player.su.crystal.max(1).pow(1)) + ".</h2><br>-------------------------------------------------------------------------------------"],
                    ["display-text", () => "You have <h2 style='color: #ffc0cb ; text-shadow: 0 0 10px #a7d8de '>" + formatWhole(player.su.crystaltiers) + "</h2> Crystal Tiers, multiplying crystal gain by <h2 style='color: #a7d8de ; text-shadow: 0 0 10px #a7d8de '> <br>x" + format(player.su.crystaltiers.max(1).pow(10)) + ".</h2><br>-------------------------------------------------------------------------------------"],
                    ["display-text", () => "You have <h2 style='color: #00008b ; text-shadow: 0 0 10px #a7d8de '>" + formatWhole(player.su.crystallevels) + "</h2> Crystal Levels, tetrating crystal tier and crystal gain by <h2 style='color: #ffc0cb ; text-shadow: 0 0 10px #ffc0cb '> <br>^^" + format(player.su.crystallevels.max(1).pow(1)) + ".</h2><br>-------------------------------------------------------------------------------------"],
                    ["display-text", () => "You have <h2 style='color: #FFFFFF ; text-shadow: 0 0 10px #a7d8de '>" + formatWhole(player.su.crystalstages) + "</h2> Crystal Stages, pentating crystal level, crystal tier and crystal gain by <h2 style='color: #00008b ; text-shadow: 0 0 10px #a7d8de '> <br>^^^" + format(player.su.crystalstages.max(1).pow(1)) + ".</h2><br>-------------------------------------------------------------------------------------"],
                    ["buyable", 21],
                    ["buyable", 22],
                    ["buyable", 23],
                    ["buyable", 24],
                    ["buyable", 25],
                    ["buyable", 26],
                    ["buyable", 27],
                    ["buyable", 28],
                    ["buyable", 29],
                ]
                
            },
        },
    },
        tooltip() {
            return ("Supernova")
        },
        passiveGeneration() { 
            if (hasMilestone("sa", 1)) return (hasMilestone("sa", 1)?1:0)
            },
        buyables: {
            11: {
              title: "<h3>Eightteenth Buyable<h3>",
              cost(x) {return new EN(1e7).pow(new EN(10).pow(x)).floor()},
              canAfford() { return player.su.stones.gte(this.cost()) && getBuyableAmount('su', 11) < 1},
              buy() {
                 player.su.stones = player.su.stones.sub(this.cost())
                 setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
              },
              display() {return `<h3>Mine coal!<h3>\nLevel: `+ formatWhole(player.su.buyables[11]) + `/1 \nCost: ${format(this.cost())}\n Stone<br>Effect: +${format(this.effect())} coal/s`},
              effect(x) { 
                mult2 = new EN(x)
                mult2 = mult2.mul(hasUpgrade("su",111)?upgradeEffect("su",111):1)
                mult2 = mult2.mul(hasUpgrade("su",112)?upgradeEffect("su",112):1)
                mult2 = mult2.mul(hasUpgrade("su",121)?upgradeEffect("su",121):1)
                mult2 = mult2.mul(hasUpgrade("su",122)?upgradeEffect("su",122):1)
                mult2 = mult2.pow(hasUpgrade("su",182)?1.25:1)
                mult2 = mult2.pow(hasUpgrade("su",231)?1.3:1)
                mult2 = mult2.pow(hasUpgrade("su",281)?1.3:1)
                mult2 = mult2.pow(hasUpgrade("su",341)?1.3:1)
                mult2 = mult2.pow(hasUpgrade("su",385)?1.3:1)
                mult2 = mult2.pow(hasUpgrade("su",441)?upgradeEffect("su",441):1)
            if (player.su.iron.gte(1)) mult2 = mult2.times(player.su.iron.max(1).pow(0.1))
            if (player.su.gold.gte(1)) mult2 = mult2.times(player.su.gold.max(1).pow(0.16))
            if (player.su.diamond.gte(1)) mult2 = mult2.times(player.su.diamond.max(1).pow(0.25))
            if (player.su.ruby.gte(1)) mult2 = mult2.times(player.su.ruby.max(1).pow(0.36))
            if (player.su.emerald.gte(1)) mult2 = mult2.times(player.su.emerald.max(1).pow(0.5))
            if (player.su.amethyst.gte(1)) mult2 = mult2.times(player.su.amethyst.max(1).pow(0.64))
            if (player.su.cobalt.gte(1)) mult2 = mult2.times(player.su.cobalt.max(1).pow(0.81))
            if (player.su.crystal.gte(1)) mult2 = mult2.pow(player.su.crystal.max(1).pow(1))

                return new EN(mult2)}
            },
            12: {
                title: "<h3>Nineteenth Buyable<h3>",
                cost(x) {return new EN(1e9).pow(new EN(10).pow(x)).floor()},
                canAfford() { return player.su.coal.gte(this.cost()) && getBuyableAmount('su', 12) < 1},
                buy() {
                   player.su.coal = player.su.coal.sub(this.cost())
                   setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                },
                unlocked(){return hasUpgrade("su",141)},
                display() {return `<h3>Mine iron!<h3>\nLevel: `+ formatWhole(player.su.buyables[12]) + `/1 \nCost: ${format(this.cost())}\n Coal<br>Effect: +${format(this.effect())} iron/s`},
                effect(x) { 
                  mult2 = new EN(x)
                  mult2 = mult2.mul(hasUpgrade("su",151)?upgradeEffect("su",151):1)
                mult2 = mult2.mul(hasUpgrade("su",152)?upgradeEffect("su",152):1)
                mult2 = mult2.mul(hasUpgrade("su",161)?upgradeEffect("su",161):1)
                mult2 = mult2.mul(hasUpgrade("su",162)?upgradeEffect("su",162):1)
                mult2 = mult2.mul(hasUpgrade("su",171)?upgradeEffect("su",171):1)
                mult2 = mult2.pow(hasUpgrade("su",231)?1.25:1)
                mult2 = mult2.pow(hasUpgrade("su",281)?1.25:1)
                mult2 = mult2.pow(hasUpgrade("su",341)?1.3:1)
                mult2 = mult2.pow(hasUpgrade("su",385)?1.25:1)
                mult2 = mult2.pow(hasUpgrade("su",441)?upgradeEffect("su",441):1)

                if (player.su.gold.gte(1)) mult2 = mult2.times(player.su.gold.max(1).pow(0.16))
                if (player.su.diamond.gte(1)) mult2 = mult2.times(player.su.diamond.max(1).pow(0.25))
                if (player.su.ruby.gte(1)) mult2 = mult2.times(player.su.ruby.max(1).pow(0.36))
                if (player.su.emerald.gte(1)) mult2 = mult2.times(player.su.emerald.max(1).pow(0.5))
            if (player.su.amethyst.gte(1)) mult2 = mult2.times(player.su.amethyst.max(1).pow(0.64))
            if (player.su.cobalt.gte(1)) mult2 = mult2.times(player.su.cobalt.max(1).pow(0.81))
            if (player.su.crystal.gte(1)) mult2 = mult2.pow(player.su.crystal.max(1).pow(1))

                return new EN(mult2)}
              },
              13: {
                title: "<h3>Twentieth Buyable<h3>",
                cost(x) {return new EN(1e13).pow(new EN(10).pow(x)).floor()},
                canAfford() { return player.su.iron.gte(this.cost()) && getBuyableAmount('su', 13) < 1},
                buy() {
                   player.su.iron = player.su.iron.sub(this.cost())
                   setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                },
                unlocked(){return hasUpgrade("su",191)},
                display() {return `<h3>Mine gold!<h3>\nLevel: `+ formatWhole(player.su.buyables[13]) + `/1 \nCost: ${format(this.cost())}\n Iron<br>Effect: +${format(this.effect())} gold/s`},
                effect(x) { 
                  mult2 = new EN(x)
                  mult2 = mult2.mul(hasUpgrade("su",201)?upgradeEffect("su",201):1)
                mult2 = mult2.mul(hasUpgrade("su",202)?upgradeEffect("su",202):1)
                mult2 = mult2.mul(hasUpgrade("su",203)?upgradeEffect("su",203):1)
                mult2 = mult2.mul(hasUpgrade("su",204)?upgradeEffect("su",204):1)
                mult2 = mult2.mul(hasUpgrade("su",205)?upgradeEffect("su",205):1)
                mult2 = mult2.mul(hasUpgrade("su",211)?upgradeEffect("su",211):1)
                mult2 = mult2.pow(hasUpgrade("su",281)?1.2:1)
                mult2 = mult2.pow(hasUpgrade("su",341)?1.3:1)
                mult2 = mult2.pow(hasUpgrade("su",385)?1.25:1)
                mult2 = mult2.pow(hasUpgrade("su",441)?upgradeEffect("su",441):1)

                if (player.su.diamond.gte(1)) mult2 = mult2.times(player.su.diamond.max(1).pow(0.25))
                if (player.su.ruby.gte(1)) mult2 = mult2.times(player.su.ruby.max(1).pow(0.36))
                if (player.su.emerald.gte(1)) mult2 = mult2.times(player.su.emerald.max(1).pow(0.5))
                if (player.su.amethyst.gte(1)) mult2 = mult2.times(player.su.amethyst.max(1).pow(0.64))
                if (player.su.cobalt.gte(1)) mult2 = mult2.times(player.su.cobalt.max(1).pow(0.81))
                if (player.su.crystal.gte(1)) mult2 = mult2.pow(player.su.crystal.max(1).pow(1))

                  return new EN(mult2)}
              },
              14: {
                title: "<h3>Twenty-First Buyable<h3>",
                cost(x) {return new EN(1e25).pow(new EN(10).pow(x)).floor()},
                canAfford() { return player.su.gold.gte(this.cost()) && getBuyableAmount('su', 14) < 1},
                buy() {
                   player.su.gold = player.su.gold.sub(this.cost())
                   setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                },
                unlocked(){return hasUpgrade("su",241)},
                display() {return `<h3>Mine diamond!<h3>\nLevel: `+ formatWhole(player.su.buyables[14]) + `/1 \nCost: ${format(this.cost())}\n Gold<br>Effect: +${format(this.effect())} diamond/s`},
                effect(x) { 
                  mult2 = new EN(x)
                  mult2 = mult2.mul(hasUpgrade("su",251)?upgradeEffect("su",251):1)
                mult2 = mult2.mul(hasUpgrade("su",252)?upgradeEffect("su",252):1)
                mult2 = mult2.mul(hasUpgrade("su",253)?upgradeEffect("su",253):1)
                mult2 = mult2.mul(hasUpgrade("su",254)?upgradeEffect("su",254):1)
                mult2 = mult2.mul(hasUpgrade("su",261)?upgradeEffect("su",261):1)
                mult2 = mult2.mul(hasUpgrade("su",272)?upgradeEffect("su",272):1)
                mult2 = mult2.mul(hasUpgrade("su",273)?upgradeEffect("su",273):1)
                mult2 = mult2.pow(hasUpgrade("su",341)?1.2:1)
                mult2 = mult2.pow(hasUpgrade("su",385)?1.2:1)
                mult2 = mult2.pow(hasUpgrade("su",441)?upgradeEffect("su",441):1)

                if (player.su.ruby.gte(1)) mult2 = mult2.times(player.su.ruby.max(1).pow(0.36))
                if (player.su.emerald.gte(1)) mult2 = mult2.times(player.su.emerald.max(1).pow(0.5))
                if (player.su.amethyst.gte(1)) mult2 = mult2.times(player.su.amethyst.max(1).pow(0.64))
                if (player.su.cobalt.gte(1)) mult2 = mult2.times(player.su.cobalt.max(1).pow(0.81))
                if (player.su.crystal.gte(1)) mult2 = mult2.pow(player.su.crystal.max(1).pow(1))

                  return new EN(mult2)}
              },
              15: {
                title: "<h3>Twenty-Second Buyable<h3>",
                cost(x) {return new EN(1e50).pow(new EN(10).pow(x)).floor()},
                canAfford() { return player.su.diamond.gte(this.cost()) && getBuyableAmount('su', 15) < 1},
                buy() {
                   player.su.diamond = player.su.diamond.sub(this.cost())
                   setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                },
                unlocked(){return hasUpgrade("su",291)},
                display() {return `<h3>Mine Ruby!<h3>\nLevel: `+ formatWhole(player.su.buyables[15]) + `/1 \nCost: ${format(this.cost())}\n Diamond<br>Effect: +${format(this.effect())} ruby/s`},
                effect(x) { 
                  mult2 = new EN(x)
                  mult2 = mult2.mul(hasUpgrade("su",301)?upgradeEffect("su",301):1)
                mult2 = mult2.mul(hasUpgrade("su",302)?upgradeEffect("su",302):1)
                mult2 = mult2.mul(hasUpgrade("su",303)?upgradeEffect("su",303):1)
                mult2 = mult2.mul(hasUpgrade("su",304)?upgradeEffect("su",304):1)
                mult2 = mult2.mul(hasUpgrade("su",305)?upgradeEffect("su",305):1)
                mult2 = mult2.mul(hasUpgrade("su",311)?upgradeEffect("su",311):1)
                mult2 = mult2.mul(hasUpgrade("su",322)?upgradeEffect("su",322):1)
                mult2 = mult2.mul(hasUpgrade("su",331)?upgradeEffect("su",331):1)
                mult2 = mult2.pow(hasUpgrade("su",385)?1.25:1)
                mult2 = mult2.pow(hasUpgrade("su",441)?upgradeEffect("su",441):1)

                if (player.su.emerald.gte(1)) mult2 = mult2.times(player.su.emerald.max(1).pow(0.5))
                if (player.su.amethyst.gte(1)) mult2 = mult2.times(player.su.amethyst.max(1).pow(0.64))
                if (player.su.cobalt.gte(1)) mult2 = mult2.times(player.su.cobalt.max(1).pow(0.81))
                if (player.su.crystal.gte(1)) mult2 = mult2.pow(player.su.crystal.max(1).pow(1))

                  return new EN(mult2)}
              },
              16: {
                title: "<h3>Twenty-Third Buyable<h3>",
                cost(x) {return new EN(1e74).pow(new EN(10).pow(x)).floor()},
                canAfford() { return player.su.ruby.gte(this.cost()) && getBuyableAmount('su', 16) < 1},
                buy() {
                   player.su.ruby = player.su.ruby.sub(this.cost())
                   setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                },
                unlocked(){return hasUpgrade("su",351)},
                display() {return `<h3>Mine Emerald!<h3>\nLevel: `+ formatWhole(player.su.buyables[16]) + `/1 \nCost: ${format(this.cost())}\n Ruby<br>Effect: +${format(this.effect())} emerald/s`},
                effect(x) { 
                  mult2 = new EN(x)
                  mult2 = mult2.mul(hasUpgrade("su",361)?upgradeEffect("su",361):1)
                mult2 = mult2.mul(hasUpgrade("su",362)?upgradeEffect("su",362):1)
                mult2 = mult2.mul(hasUpgrade("su",363)?upgradeEffect("su",363):1)
                mult2 = mult2.mul(hasUpgrade("su",364)?upgradeEffect("su",364):1)
                mult2 = mult2.mul(hasUpgrade("su",365)?upgradeEffect("su",365):1)
                mult2 = mult2.mul(hasUpgrade("su",371)?upgradeEffect("su",371):1)
                mult2 = mult2.mul(hasUpgrade("su",381)?upgradeEffect("su",381):1)
                mult2 = mult2.mul(hasUpgrade("su",383)?upgradeEffect("su",383):1)
                mult2 = mult2.mul(hasUpgrade("su",384)?upgradeEffect("su",384):1)
                mult2 = mult2.pow(hasUpgrade("su",441)?upgradeEffect("su",441):1)

                if (player.su.amethyst.gte(1)) mult2 = mult2.times(player.su.amethyst.max(1).pow(0.64))
                if (player.su.cobalt.gte(1)) mult2 = mult2.times(player.su.cobalt.max(1).pow(0.81))
                if (player.su.crystal.gte(1)) mult2 = mult2.pow(player.su.crystal.max(1).pow(1))

                  return new EN(mult2)}
              },
              17: {
                title: "<h3>Twenty-Fourth Buyable<h3>",
                cost(x) {return new EN(1e75).pow(new EN(10).pow(x)).floor()},
                canAfford() { return player.su.emerald.gte(this.cost()) && getBuyableAmount('su', 17) < 1},
                buy() {
                   player.su.emerald = player.su.emerald.sub(this.cost())
                   setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                },
                unlocked(){return hasUpgrade("su",391)},
                display() {return `<h3>Mine Amethyst!<h3>\nLevel: `+ formatWhole(player.su.buyables[17]) + `/1 \nCost: ${format(this.cost())}\n Emerald<br>Effect: +${format(this.effect())} amethyst/s`},
                effect(x) { 
                  mult2 = new EN(x)
                  mult2 = mult2.mul(hasUpgrade("su",401)?upgradeEffect("su",401):1)
                  mult2 = mult2.mul(hasUpgrade("su",402)?upgradeEffect("su",402):1)
                  mult2 = mult2.mul(hasUpgrade("su",404)?upgradeEffect("su",404):1)
                  mult2 = mult2.pow(hasUpgrade("su",441)?upgradeEffect("su",441):1)

                  if (player.su.cobalt.gte(1)) mult2 = mult2.times(player.su.cobalt.max(1).pow(0.81))
                  if (player.su.crystal.gte(1)) mult2 = mult2.pow(player.su.crystal.max(1).pow(1))

                  return new EN(mult2)}
              },
              18: {
                title: "<h3>Twenty-Fifth Buyable<h3>",
                cost(x) {return new EN(1e60).pow(new EN(10).pow(x)).floor()},
                canAfford() { return player.su.amethyst.gte(this.cost()) && getBuyableAmount('su', 18) < 1},
                buy() {
                   player.su.amethyst = player.su.amethyst.sub(this.cost())
                   setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                },
                unlocked(){return hasUpgrade("su",405)},
                display() {return `<h3>Mine Cobalt!<h3>\nLevel: `+ formatWhole(player.su.buyables[18]) + `/1 \nCost: ${format(this.cost())}\n Amethyst<br>Effect: +${format(this.effect())} cobalt/s`},
                effect(x) { 
                  mult2 = new EN(x)
                  mult2 = mult2.mul(hasUpgrade("su",411)?upgradeEffect("su",411):1)
                  mult2 = mult2.mul(hasUpgrade("su",421)?upgradeEffect("su",421):1)
                  mult2 = mult2.pow(hasUpgrade("su",441)?upgradeEffect("su",441):1)

                  if (player.su.crystal.gte(1)) mult2 = mult2.pow(player.su.crystal.max(1).pow(1))
                  return new EN(mult2)}
              },
              21: {
                title: "<h3>First Sub-Prestige-Layer<h3>",
                cost() {
                  let n = getBuyableAmount(this.layer,this.id)
                  return new EN(1e69).pow(EN.pow(1.01,n.pow(1.01))) },
                display() { return "<h3>Reset upgrades and all of your ores including neutron stars, but you will gain 1 crystal per second!</h3>"+ "<h3><br>Currently: +"+format(this.effect())+ "/s</h3>" + "\n<h3>Requires: "+format(this.cost())+" Cobalt</h3>\n\n<h3>You have done "+formatWhole(getBuyableAmount(this.layer,this.id))+" crystal resets.<h/3>" },
              effect(){return new EN(0).add(getBuyableAmount(this.layer,this.id))},
                canAfford() { return player[this.layer].cobalt.gte(this.cost()) },
              unlocked(){return hasUpgrade(this.layer,11)||getBuyableAmount(this.layer,this.id).gte(1)},
              effect(x) { 
                mult2 = new EN(x)
                mult2 = mult2.mul(hasUpgrade("su",451)?upgradeEffect("su",451):1)
                mult2 = mult2.mul(hasUpgrade("su",461)?upgradeEffect("su",461):1)
                mult2 = mult2.mul(hasUpgrade("su",471)?upgradeEffect("su",471):1)
                mult2 = mult2.pow(hasUpgrade("su",435)?upgradeEffect("su",435):1)
                mult2 = mult2.pow(hasUpgrade("su",491)?upgradeEffect("su",491):1)
                mult2 = mult2.pow(hasUpgrade("su",493)?upgradeEffect("su",493):1)
                mult2 = mult2.pow(hasUpgrade("su",495)?upgradeEffect("su",495):1)
                mult2 = mult2.pow(hasMilestone("su",9)?2:1)
                if (player.su.crystaltiers.gte(1)) mult2 = mult2.pow(player.su.crystaltiers.max(1).pow(1))
                if (player.su.crystallevels.gte(1)) mult2 = mult2.tetr(player.su.crystallevels.max(1).pow(1))
                if (player.su.crystalstages.gte(1)) mult2 = mult2.pent(player.su.crystalstages.max(1).pow(1))
                return new EN(mult2)},
              buy() {
                    if(!hasMilestone("su",6)){
                player[this.layer].points = new EN(0)
                  player.su.stones=new EN(0)
                  player.su.coal=new EN(0)
                  player.su.iron=new EN(0)
                  player.su.gold=new EN(0)
                  player.su.diamond=new EN(0)
                  player.su.ruby=new EN(0)
                  player.su.emerald=new EN(0)
                  player.su.amethyst=new EN(0)
                  player.su.cobalt=new EN(0)
                    player.su.upgrades=[]
                    }
                    setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                },
                
        },
        22: {
            title: "<h3>Second Sub-Prestige-Layer<h3>",
            cost() {
              let n = getBuyableAmount(this.layer,this.id)
              return new EN(1e10).pow(EN.pow(Infinity,n.pow(Infinity))) },
            display() { return "<h3>Reset upgrades and all of your ores including neutron stars, but you will earn Crystal tier!</h3>"+ "<h3><br>Currently: +"+format(this.effect())+ "/s</h3>" + "\n<h3>Requires: "+format(this.cost())+" Crystal</h3>\n\n<h3>You have done "+formatWhole(getBuyableAmount(this.layer,this.id))+" crystal tiers resets.<h/3>" },
          effect(){return new EN(0).add(getBuyableAmount(this.layer,this.id))},
            canAfford() { return player[this.layer].crystal.gte(this.cost()) },
          unlocked(){return hasUpgrade(this.layer,11)||getBuyableAmount(this.layer,this.id).gte(1)},
          effect(x) { 
            mult2 = new EN(0.01)
            mult2 = mult2.mul(hasUpgrade("su",434)?100:1)
            mult2 = mult2.mul(hasMilestone("su",9)?10:1)
            mult2 = mult2.mul(hasUpgrade("su",493)?100:1)
            mult2 = mult2.pow(hasUpgrade("su",494)?3:1)
            mult2 = mult2.mul(hasUpgrade("su",501)?upgradeEffect("su",501):1)
            mult2 = mult2.pow(hasUpgrade("su",502)?upgradeEffect("su",502):1)
            mult2 = mult2.mul(hasUpgrade("su",503)?upgradeEffect("su",503):1)
            mult2 = mult2.pow(hasUpgrade("su",504)?upgradeEffect("su",504):1)
            mult2 = mult2.pow(hasUpgrade("su",505)?upgradeEffect("su",505):1)
            if (player.su.crystallevels.gte(1)) mult2 = mult2.tetr(player.su.crystallevels.max(1).pow(1))
            if (player.su.crystalstages.gte(1)) mult2 = mult2.pent(player.su.crystalstages.max(1).pow(1))

            return new EN(mult2)},
          buy() {
                if(!hasMilestone("su",9)){
            player[this.layer].points = new EN(0)
              player.su.stones=new EN(0)
              player.su.coal=new EN(0)
              player.su.iron=new EN(0)
              player.su.gold=new EN(0)
              player.su.diamond=new EN(0)
              player.su.ruby=new EN(0)
              player.su.emerald=new EN(0)
              player.su.amethyst=new EN(0)
              player.su.cobalt=new EN(0)
              player.su.crystal=new EN(0)
                player.su.upgrades=[]
                }
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        23: {
            title: "<h3>Third Sub-Prestige-Layer<h3>",
            cost() {
              let n = getBuyableAmount(this.layer,this.id)
              return new EN("10^^1000").pow(EN.pow(Infinity,n.pow(Infinity))) },
            display() { return "<h3>Reset upgrades and all of your ores including neutron stars, but you will earn Crystal level!</h3>"+ "<h3><br>Currently: +"+format(this.effect())+ "/s</h3>" + "\n<h3>Requires: "+format(this.cost())+" Crystal</h3>\n\n<h3>You have done "+formatWhole(getBuyableAmount(this.layer,this.id))+" crystal levels resets.<h/3>" },
          effect(){return new EN(0).add(getBuyableAmount(this.layer,this.id))},
            canAfford() { return player[this.layer].crystal.gte(this.cost()) },
          unlocked(){return hasUpgrade(this.layer,11)||getBuyableAmount(this.layer,this.id).gte(1)},
          effect(x) { 
            mult2 = new EN(1)
            mult2 = mult2.mul(hasUpgrade("su",511)?upgradeEffect("su",511):1)
            mult2 = mult2.mul(hasUpgrade("su",512)?upgradeEffect("su",512):1)
            mult2 = mult2.mul(hasUpgrade("su",513)?upgradeEffect("su",513):1)
            mult2 = mult2.pow(hasUpgrade("su",514)?upgradeEffect("su",514):1)
            mult2 = mult2.pow(hasUpgrade("su",515)?upgradeEffect("su",515):1)
            mult2 = mult2.tetr(hasUpgrade("su",521)?upgradeEffect("su",521):1)
            if (player.su.crystalstages.gte(1)) mult2 = mult2.pent(player.su.crystalstages.max(1).pow(1))
            return new EN(mult2)},
          buy() {
            player[this.layer].points = new EN(0)
              player.su.stones=new EN(0)
              player.su.coal=new EN(0)
              player.su.iron=new EN(0)
              player.su.gold=new EN(0)
              player.su.diamond=new EN(0)
              player.su.ruby=new EN(0)
              player.su.emerald=new EN(0)
              player.su.amethyst=new EN(0)
              player.su.cobalt=new EN(0)
              player.su.crystal=new EN(0)
                player.su.crystaltiers=new EN(0)
                player.su.upgrades=[]
                
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        24: {
            title: "<h3>Fourth Sub-Prestige-Layer<h3>",
            cost() {
              let n = getBuyableAmount(this.layer,this.id)
              return new EN("10^^^1000").pow(EN.pow(Infinity,n.pow(Infinity))) },
            display() { return "<h3>Reset upgrades and all of your ores including neutron stars, but you will earn Crystal stage!</h3>"+ "<h3><br>Currently: +"+format(this.effect())+ "/s</h3>" + "\n<h3>Requires: "+format(this.cost())+" Crystal</h3>\n\n<h3>You have done "+formatWhole(getBuyableAmount(this.layer,this.id))+" crystal stages resets.<h/3>" },
          effect(){return new EN(0).add(getBuyableAmount(this.layer,this.id))},
            canAfford() { return player[this.layer].crystal.gte(this.cost()) },
          unlocked(){return hasUpgrade(this.layer,11)||getBuyableAmount(this.layer,this.id).gte(1)},
          effect(x) { 
            mult2 = new EN(1)
            mult2 = mult2.mul(hasUpgrade("su",531)?upgradeEffect("su",531):1)
            mult2 = mult2.mul(hasUpgrade("su",532)?upgradeEffect("su",532):1)
            mult2 = mult2.mul(hasUpgrade("su",533)?upgradeEffect("su",533):1)
            mult2 = mult2.pow(hasUpgrade("su",534)?upgradeEffect("su",534):1)
            mult2 = mult2.pow(hasUpgrade("sa",12)?upgradeEffect("sa",12):1)
            mult2 = mult2.tetr(hasUpgrade("sa",13)?upgradeEffect("sa",13):1)
            mult2 = mult2.mul(hasUpgrade("sa",14)?upgradeEffect("sa",14):1)
            mult2 = mult2.mul(hasUpgrade("sa",21)?upgradeEffect("sa",21):1)
            mult2 = mult2.mul(hasUpgrade("sa",41)?upgradeEffect("sa",41):1)
            if (player.sa.challengeexp.gte(1)) mult2 = mult2.pent(player.sa.challengeexp.max(1).pow(4))
            if (player.sa.challengetet.gte(1)) mult2 = mult2.pent(player.sa.challengetet.max(1).pow(5))
            if (player.sa.challengepent.gte(1)) mult2 = mult2.pent(player.sa.challengepent.max(1).tetr(6))

            return new EN(mult2)},
          buy() {
            player[this.layer].points = new EN(0)
              player.su.stones=new EN(0)
              player.su.coal=new EN(0)
              player.su.iron=new EN(0)
              player.su.gold=new EN(0)
              player.su.diamond=new EN(0)
              player.su.ruby=new EN(0)
              player.su.emerald=new EN(0)
              player.su.amethyst=new EN(0)
              player.su.cobalt=new EN(0)
              player.su.crystal=new EN(0)
                player.su.crystaltiers=new EN(0)
                player.su.crystallevels=new EN(0)
                player.su.upgrades=[]
                
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        25: {
            title: "<h3>Fifth Sub-Prestige-Layer<h3>",
            cost() {
              let n = getBuyableAmount(this.layer,this.id)
              return new EN("1e255").pow(EN.pow(Infinity,n.pow(Infinity))) },
            display() { return "<h3>Reset upgrades and all of your ores including neutron stars and SP, but you will earn Challenge Points</h3>"+ "<h3><br>Currently: +"+format(this.effect())+ "/s</h3>" + "\n<h3>Requires: "+format(this.cost())+" SP</h3>\n\n<h3>You have done "+formatWhole(getBuyableAmount(this.layer,this.id))+" CP resets.<h/3>" },
          effect(){return new EN(0).add(getBuyableAmount(this.layer,this.id))},
            canAfford() { return player.sa.points.gte(this.cost()) },
          unlocked(){return hasUpgrade(this.layer,535)||getBuyableAmount(this.layer,this.id).gte(1)},
          effect(x) { 
            mult2 = new EN(1)
            mult2 = mult2.mul(hasChallenge("sa",12)?3:1)
            mult2 = mult2.mul(hasChallenge("sa",13)?2:1)
            mult2 = mult2.mul(hasMilestone("sa",4)?milestoneEffect("sa",4):1)
            mult2 = mult2.mul(hasChallenge("sa",21)?6.9420:1)
            mult2 = mult2.mul(hasMilestone("sa",5)?milestoneEffect("sa",5):1)
            mult2 = mult2.mul(hasChallenge("sa",22)?10:1)
            mult2 = mult2.mul(hasChallenge("sa",23)?4:1)
            mult2 = mult2.mul(hasChallenge("sa",31)?7.77777777777777:1)
            mult2 = mult2.mul(hasChallenge("sa",32)?1000:1)
            mult2 = mult2.mul(hasChallenge("sa",33)?69:1)
            mult2 = mult2.mul(hasChallenge("sa",41)?420:1)
            if (player.sa.challengepower.gte(1)) mult2 = mult2.tetr(player.sa.challengepower.max(1).pow(3))
            if (player.sa.challengeexp.gte(1)) mult2 = mult2.pent(player.sa.challengeexp.max(1).pow(4))
            if (player.sa.challengetet.gte(1)) mult2 = mult2.pent(player.sa.challengetet.max(1).pow(5))
            if (player.sa.challengepent.gte(1)) mult2 = mult2.pent(player.sa.challengepent.max(1).tetr(6))

            return new EN(mult2)},
          buy() {
            player[this.layer].points = new EN(0)
              player.su.stones=new EN(0)
              player.su.coal=new EN(0)
              player.su.iron=new EN(0)
              player.su.gold=new EN(0)
              player.su.diamond=new EN(0)
              player.su.ruby=new EN(0)
              player.su.emerald=new EN(0)
              player.su.amethyst=new EN(0)
              player.su.cobalt=new EN(0)
              player.su.crystal=new EN(0)
                player.su.crystaltiers=new EN(0)
                player.su.crystallevels=new EN(0)
                player.sa.points = new EN(0)
                player.su.upgrades=[]
                player.sa.upgrades=[]
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        26: {
            title: "<h3>Sixth Sub-Prestige-Layer<h3>",
            cost() {
              let n = getBuyableAmount(this.layer,this.id)
              return new EN("10^^1000").pow(EN.pow(Infinity,n.pow(Infinity))) },
            display() { return "<h3>Reset upgrades and all of your ores including neutron stars and SP, but you will earn Challenge Power</h3>"+ "<h3><br>Currently: +"+format(this.effect())+ "/s</h3>" + "\n<h3>Requires: "+format(this.cost())+" SP</h3>\n\n<h3>You have done "+formatWhole(getBuyableAmount(this.layer,this.id))+" CP^2 resets.<h/3>" },
          effect(){return new EN(0).add(getBuyableAmount(this.layer,this.id))},
            canAfford() { return player.sa.points.gte(this.cost()) },
          unlocked(){return hasUpgrade(this.layer,535)||getBuyableAmount(this.layer,this.id).gte(1)},
          effect(x) { 
            mult2 = new EN(1)
            mult2 = mult2.mul(hasMilestone("sa",6)?milestoneEffect("sa",6):1)
            mult2 = mult2.pow(hasMilestone("sa",7)?milestoneEffect("sa",7):1)
            mult2 = mult2.tetr(hasMilestone("sa",8)?milestoneEffect("sa",8):1)
            
            if (player.sa.challengeexp.gte(1)) mult2 = mult2.pent(player.sa.challengeexp.max(1).pow(4))
            if (player.sa.challengetet.gte(1)) mult2 = mult2.pent(player.sa.challengetet.max(1).pow(5))
            if (player.sa.challengepent.gte(1)) mult2 = mult2.pent(player.sa.challengepent.max(1).tetr(6))

            return new EN(mult2)},
          buy() {
            player[this.layer].points = new EN(0)
              player.su.stones=new EN(0)
              player.su.coal=new EN(0)
              player.su.iron=new EN(0)
              player.su.gold=new EN(0)
              player.su.diamond=new EN(0)
              player.su.ruby=new EN(0)
              player.su.emerald=new EN(0)
              player.su.amethyst=new EN(0)
              player.su.cobalt=new EN(0)
              player.su.crystal=new EN(0)
                player.su.crystaltiers=new EN(0)
                player.su.crystallevels=new EN(0)
                player.sa.points = new EN(0)
                player.sa.challengepoint = new EN(0)
                player.su.upgrades=[]
                player.sa.upgrades=[]
                player.sa.challenges=[]
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        27: {
            title: "<h3>Seventh Sub-Prestige-Layer<h3>",
            cost() {
              let n = getBuyableAmount(this.layer,this.id)
              return new EN("10^^^5000").pow(EN.pow(Infinity,n.pow(Infinity))) },
            display() { return "<h3>Reset upgrades and all of your ores including neutron stars and SP, but you will earn Challenge Exponential</h3>"+ "<h3><br>Currently: +"+format(this.effect())+ "/s</h3>" + "\n<h3>Requires: "+format(this.cost())+" SP</h3>\n\n<h3>You have done "+formatWhole(getBuyableAmount(this.layer,this.id))+" CE resets.<h/3>" },
          effect(){return new EN(0).add(getBuyableAmount(this.layer,this.id))},
            canAfford() { return player.sa.points.gte(this.cost()) },
          unlocked(){return hasUpgrade(this.layer,535)||getBuyableAmount(this.layer,this.id).gte(1)},
          effect(x) { 
            mult2 = new EN(1)
            mult2 = mult2.mul(hasMilestone("sa",9)?milestoneEffect("sa",9):1)
            mult2 = mult2.pow(hasMilestone("sa",10)?milestoneEffect("sa",10):1)
            mult2 = mult2.tetr(hasMilestone("sa",11)?milestoneEffect("sa",11):1)
            mult2 = mult2.tetr(hasUpgrade("sa",61)?upgradeEffect("sa",61):1)
            if (player.sa.challengetet.gte(1)) mult2 = mult2.pent(player.sa.challengetet.max(1).pow(5))
            if (player.sa.challengepent.gte(1)) mult2 = mult2.pent(player.sa.challengepent.max(1).tetr(6))
            return new EN(mult2)},
          buy() {
            player[this.layer].points = new EN(0)
              player.su.stones=new EN(0)
              player.su.coal=new EN(0)
              player.su.iron=new EN(0)
              player.su.gold=new EN(0)
              player.su.diamond=new EN(0)
              player.su.ruby=new EN(0)
              player.su.emerald=new EN(0)
              player.su.amethyst=new EN(0)
              player.su.cobalt=new EN(0)
              player.su.crystal=new EN(0)
                player.su.crystaltiers=new EN(0)
                player.su.crystallevels=new EN(0)
                player.sa.points = new EN(0)
                player.sa.challengepoint = new EN(0)
                player.sa.challengepower = new EN(0)
                player.su.upgrades=[]
                player.sa.upgrades=[]
                player.sa.challenges=[]
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        28: {
            title: "<h3>Eighth Sub-Prestige-Layer<h3>",
            cost() {
              let n = getBuyableAmount(this.layer,this.id)
              return new EN("10^^^10^^^1e20").pow(EN.pow(Infinity,n.pow(Infinity))) },
            display() { return "<h3>Reset sacrifice upgrades & challenges and all of your ores including neutron stars and SP, but you will earn Challenge Tetrational</h3>"+ "<h3><br>Currently: +"+format(this.effect())+ "/s</h3>" + "\n<h3>Requires: "+format(this.cost())+" SP</h3>\n\n<h3>You have done "+formatWhole(getBuyableAmount(this.layer,this.id))+" CT resets.<h/3>" },
          effect(){return new EN(0).add(getBuyableAmount(this.layer,this.id))},
            canAfford() { return player.sa.points.gte(this.cost()) },
          unlocked(){return hasUpgrade(this.layer,535)||getBuyableAmount(this.layer,this.id).gte(1)},
          effect(x) { 
            mult2 = new EN(2)
            mult2 = mult2.tetr(hasUpgrade("sa",62)?upgradeEffect("sa",62):1)
            if (player.sa.challengepent.gte(1)) mult2 = mult2.pent(player.sa.challengepent.max(1).tetr(6))
            return new EN(mult2)},
          buy() {
            player[this.layer].points = new EN(0)
              player.su.stones=new EN(0)
              player.su.coal=new EN(0)
              player.su.iron=new EN(0)
              player.su.gold=new EN(0)
              player.su.diamond=new EN(0)
              player.su.ruby=new EN(0)
              player.su.emerald=new EN(0)
              player.su.amethyst=new EN(0)
              player.su.cobalt=new EN(0)
              player.su.crystal=new EN(0)
                player.su.crystaltiers=new EN(0)
                player.su.crystallevels=new EN(0)
                player.sa.points = new EN(0)
                player.sa.challengepoint = new EN(0)
                player.sa.challengepower = new EN(0)
                player.sa.challengeexp = new EN(0)
                player.sa.upgrades=[]
                player.sa.challenges=[]
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        29: {
            title: "<h3>Ninth Sub-Prestige-Layer<h3>",
            cost() {
              let n = getBuyableAmount(this.layer,this.id)
              return new EN("10^^^10^^^10^^10^^2").pow(EN.pow(Infinity,n.pow(Infinity))) },
            display() { return "<h3>Reset sacrifice upgrades & challenges and all of your ores including neutron stars and SP, but you will earn Challenge Pentational</h3>"+ "<h3><br>Currently: +"+format(this.effect())+ "/s</h3>" + "\n<h3>Requires: "+format(this.cost())+" SP</h3>\n\n<h3>You have done "+formatWhole(getBuyableAmount(this.layer,this.id))+" CP^3 resets.<h/3>" },
          effect(){return new EN(0).add(getBuyableAmount(this.layer,this.id))},
            canAfford() { return player.sa.points.gte(this.cost()) },
          unlocked(){return hasUpgrade(this.layer,535)||getBuyableAmount(this.layer,this.id).gte(1)},
          effect(x) { 
            mult2 = new EN(1)
            mult2 = mult2.mul(hasUpgrade("ap",11)?69:1)
            mult2 = mult2.mul(hasUpgrade("ap",12)?420:1)
            mult2 = mult2.mul(hasMilestone("sa",12)?milestoneEffect("sa",12):1)
            mult2 = mult2.pow(hasMilestone("sa",13)?milestoneEffect("sa",13):1)
            mult2 = mult2.tetr(hasMilestone("sa",14)?milestoneEffect("sa",14):1)
            mult2 = mult2.pent(hasUpgrade("sa",63)?upgradeEffect("sa",63):1)
            mult2 = mult2.tetr(hasUpgrade("sa",64)?upgradeEffect("sa",64):1)
            mult2 = mult2.mul(hasUpgrade("ap",15)?upgradeEffect("ap",15):1)
            mult2 = mult2.mul(hasUpgrade("ap",25)?upgradeEffect("ap",25):1)
            return new EN(mult2)},
          buy() {
            player[this.layer].points = new EN(0)
              player.su.stones=new EN(0)
              player.su.coal=new EN(0)
              player.su.iron=new EN(0)
              player.su.gold=new EN(0)
              player.su.diamond=new EN(0)
              player.su.ruby=new EN(0)
              player.su.emerald=new EN(0)
              player.su.amethyst=new EN(0)
              player.su.cobalt=new EN(0)
              player.su.crystal=new EN(0)
                player.su.crystaltiers=new EN(0)
                player.su.crystallevels=new EN(0)
                player.sa.points = new EN(0)
                player.sa.challengepoint = new EN(0)
                player.sa.challengepower = new EN(0)
                player.sa.challengeexp = new EN(0)
                player.sa.challengetet = new EN(0)
                player.sa.upgrades=[]
                player.sa.challenges=[]
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
    },
    upgrades: {
        11: { title: "951",
        description: "Gain more lights.",
        cost: new EN("0"),
        unlocked() {
            return hasAchievement("a", 111)
        }
        },
        12: { title: "952",
        description: "Onion Upgrade 71 is x1,000,000 more powerful.",
        cost: new EN("1"),
        unlocked() {
            return hasUpgrade("su", 11)
        }
        },
        13: { title: "953",
        description: "Reincarnation Upgrade 105 and 155 is cubed.",
        cost: new EN("1"),
        unlocked() {
            return hasUpgrade("su", 12)
        }
        },
        14: { title: "954",
        description: "Gain x100 Ducks - Juices.",
        cost: new EN("1"),
        unlocked() {
            return hasUpgrade("su", 13)
        }
        },
        15: { title: "955",
        description: "Reincarnation Upgrade 171 is 10x faster and gain 10% neutron stars.",
        cost: new EN("2"),
        unlocked() {
            return hasUpgrade("su", 14)
        }
        },
        21: { title: "956",
        description: "Raise medal gain by 1.01.",
        cost: new EN("4"),
        unlocked() {
            return hasUpgrade("su", 15)
        }
        },
        22: { title: "957",
        description: "Reincarnation Upgrade 181 is 10x faster.",
        cost: new EN("4"),
        unlocked() {
            return hasUpgrade("su", 21)
        }
        },
        23: { title: "958",
        description: "Reincarnation Buyable 11 is 2x stronger.",
        cost: new EN("4"),
        unlocked() {
            return hasUpgrade("su", 22)
        }
        },
        24: { title: "959",
        description: "Reincarnation Buyable 12 is 50% stronger.",
        cost: new EN("8"),
        unlocked() {
            return hasUpgrade("su", 23)
        }
        },
        25: { title: "960",
        description: "Reincarnation Buyable 21 is 3x stronger and gain 20% neutron stars.",
        cost: new EN("8"),
        unlocked() {
            return hasUpgrade("su", 24)
        }
        },
        31: { title: "961",
        description: "Reincarnation Buyable 22 is 75% stronger.",
        cost: new EN("8"),
        unlocked() {
            return hasUpgrade("su", 25)
        }
        },
        32: { title: "962",
        description: "Unlock a new reincarnation tree upgrade.",
        cost: new EN("16"),
        unlocked() {
            return hasUpgrade("su", 31)
        }
        },
        33: { title: "963",
        description: "Raise medal gain by 1.025.",
        cost: new EN("16"),
        unlocked() {
            return hasUpgrade("su", 32)
        }
        },
        34: { title: "964",
        description: "Raise medal gain by 1.01 again.",
        cost: new EN("16"),
        unlocked() {
            return hasUpgrade("su", 33)
        }
        },
        35: { title: "965",
        description: "Gain 50% more Neutron Stars.",
        cost: new EN("32"),
        unlocked() {
            return hasUpgrade("su", 34)
        }
        },
        41: { title: "966",
        description: "Unlock another tree upgrade and first 2 reincarnation buyables are 10% stronger.",
        cost: new EN("32"),
        unlocked() {
            return hasUpgrade("su", 35)
        }
        },
        42: { title: "967",
        description: "Neutron Stars boosts itself.",
        cost: new EN("64"),
        unlocked() {
            return hasUpgrade("su", 41)
        },
        effect(){return player.su.total.root(13).max(1).gte("1.79769e308") ? new EN("1.79769e308") : player.su.total.root(13).max(1)},
        
        effectDisplay(){return `${format(this.effect())}x`}
        },
        43: { title: "968",
        description: "Neutron Stars raises medal gain at a reduced rate.",
        cost: new EN("64"),
        unlocked() {
            return hasUpgrade("su", 42)
        },
        effect(){return player.su.total.root(69).max(1).gte("2") ? new EN("2") : player.su.total.root(69).max(1)},
        
        effectDisplay(){return `^${format(this.effect())}`}
        },
        44: { title: "969",
        description: "Last 2 Reincarnation Buyables are 25% stronger.",
        cost: new EN("128"),
        unlocked() {
            return hasUpgrade("su", 43)
        }
        },
        45: { title: "970",
        description: "Double Neutron Star Gain.",
        cost: new EN("128"),
        unlocked() {
            return hasUpgrade("su", 44)
        }
        },
        51: { title: "971",
        description: "Raise medal gain by 1.05.",
        cost: new EN("256"),
        unlocked() {
            return hasUpgrade("su", 45)
        }
        },
        52: { title: "972",
        description: "All Reincarnation Buyables are 2x stronger.",
        cost: new EN("512"),
        unlocked() {
            return hasUpgrade("su", 51)
        }
        },
        53: { title: "973",
        description: "Every supernova upgrade, you get 5% more neutron stars (compounding)",
        cost: new EN("512"),
        unlocked() {
            return hasUpgrade("su", 52)
        },
        effect() {
            let effect = ExpantaNum.pow(1.05, player.su.upgrades.length)
            return effect
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect      
        },
        54: { title: "974",
        description: "Unlock 2 new reincarnation tree upgrades.",
        cost: new EN("1024"),
        unlocked() {
            return hasUpgrade("su", 53)
        }
        },
        55: { title: "975 (25 more to 1K!)",
        description: "Unlock a new sub-tab, RU155 does nothing and gain more points based on your supernova time spent on this reset.",
        cost: new EN("65536"),
        unlocked() {
            return hasUpgrade("su", 54)
        },
        effect() {
            let time = EN(player.su.resetTime)
            return EN.pent(1e300, time.pent(3).pent(3), time)
        },
        effectDisplay() { return "^" + format(this.effect()) },
        },
        61: { title: "Eighteenth Tree Upgrade",
        description: "Gain more stone based on your neutron stars (Hardcaps at 1.80e308x)",
        currencyDisplayName: "Stone",
        currencyInternalName: "stones",
        currencyLayer: "su",
        cost:("100"),
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.total.add(1).pow(0.1).min("1.79769e308")
        },
    },
    71: { title: "Nineteenth Tree Upgrade",
        description: "Raise Stone gain by 1.5.",
        currencyDisplayName: "Stone",
        currencyInternalName: "stones",
        currencyLayer: "su",
        cost() {
            let cost = EN("200")
            let ugs = EN("2")
            for (let a = 71; a <= 72; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [61],
        unlocked() {
            return hasUpgrade("su", 61)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    72: { title: "Twentieth Tree Upgrade",
        description: "Raise Neutron Star and medal gain by 1.5.",
        currencyDisplayName: "Stone",
        currencyInternalName: "stones",
        currencyLayer: "su",
        cost() {
            let cost = EN("150")
            let ugs = EN("5")
            for (let a = 71; a <= 72; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },        req: [61],
        unlocked() {
            return hasUpgrade("su", 61)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    81: { title: "Twenty-First Tree Upgrade",
        description: "Each Supernova Upgrade, raises stone gain by 1.01.",
        currencyDisplayName: "Stone",
        currencyInternalName: "stones",
        currencyLayer: "su",
        cost:("2e3"),
        effect() {
            let effect = ExpantaNum.pow(1.01, player.su.upgrades.length)
            return effect
        },
        effectDisplay() { return "^" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        req: [71, 72],
        unlocked() {
            return hasUpgrade("su", 71, 72)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    91: { title: "Twenty-Second Tree Upgrade",
        description: "Raise Stone gain by 1.5 again.",
        currencyDisplayName: "Stone",
        currencyInternalName: "stones",
        currencyLayer: "su",
        cost() {
            let cost = EN("5000")
            let ugs = EN("2")
            for (let a = 91; a <= 92; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [81],
        unlocked() {
            return hasUpgrade("su", 81)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    92: { title: "Twenty-Third Tree Upgrade",
        description: "Stone boosts itself (Hardcaps at 1,000x)",
        currencyDisplayName: "Stone",
        currencyInternalName: "stones",
        currencyLayer: "su",
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.stones.add(1).pow(0.36).min("1000")
        },
        cost() {
            let cost = EN("5000")
            let ugs = EN("10")
            for (let a = 91; a <= 92; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [81],
        unlocked() {
            return hasUpgrade("su", 81)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    101: { title: "Twenty-Fourth Tree Upgrade",
        description: "Unlock a buyable.",
        currencyDisplayName: "Stone",
        currencyInternalName: "stones",
        currencyLayer: "su",
        cost: ("1e7"),
        req: [91, 92],
        unlocked() {
            return hasUpgrade("su", 91, 92)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    111: { title: "Twenty-Fifth Tree Upgrade",
        description: "Stone boosts coal gain.",
        currencyDisplayName: "Stone",
        currencyInternalName: "stones",
        currencyLayer: "su",
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.stones.add(1).pow(0.13).min("1000000")
        },
        cost() {
            let cost = EN("1e8")
            let ugs = EN("2")
            for (let a = 111; a <= 112; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [101],
        unlocked() {
            return hasUpgrade("su", 101)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    112: { title: "Twenty-Sixth Tree Upgrade",
        description: "Each Supernova upgrade, adds +2x to coal gain.",
        currencyDisplayName: "Coal",
        currencyInternalName: "coal",
        currencyLayer: "su",
        effect() {
            let effect = ExpantaNum.mul(2, player.su.upgrades.length)
            return effect
        },
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        cost() {
            let cost = EN("100")
            let ugs = EN("10")
            for (let a = 111; a <= 112; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [101],
        unlocked() {
            return hasUpgrade("su", 101)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    121: { title: "Twenty-Seventh Tree Upgrade",
        description: "Gain more coal based on your neutron stars.",
        currencyDisplayName: "Coal",
        currencyInternalName: "coal",
        currencyLayer: "su",
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.total.add(1).pow(0.16).min("1e12")
        },
        cost() {
            let cost = EN("100000")
            let ugs = EN("10")
            for (let a = 121; a <= 122; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [111, 112],
        unlocked() {
            return hasUpgrade("su", 111, 112)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    122: { title: "Twenty-Eighth Tree Upgrade",
    description: "Coal boosts itself.",
    currencyDisplayName: "Coal",
    currencyInternalName: "coal",
    currencyLayer: "su",
    effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.coal.add(1).pow(0.1296).min("1000")
        },
    cost() {
        let cost = EN("100000")
        let ugs = EN("10")
        for (let a = 121; a <= 122; a++) if (hasUpgrade("su", a)) {
            cost = cost.mul(ugs)
            ugs = ugs.mul("1")
        }
        return cost
     },
     
    req: [111, 112],
    unlocked() {
        return hasUpgrade("su", 111, 112)
    },
    branches() { 
        let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
        return this.req.map(x => [x, col]) 
    },
    style: { margin: "10px" }
},
131: { title: "Twenty-Eighth Tree Upgrade",
    description: "Coal boosts neutron star gain.",
    currencyDisplayName: "Coal",
    currencyInternalName: "coal",
    currencyLayer: "su",
    effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.coal.add(1).pow(0.2).min("10000")
        },
    cost() {
        let cost = EN("10000000")
        let ugs = EN("10")
        for (let a = 131; a <= 132; a++) if (hasUpgrade("su", a)) {
            cost = cost.mul(ugs)
            ugs = ugs.mul("1")
        }
        return cost
     },
    req: [121, 122],
    unlocked() {
        return hasUpgrade("su", 121, 122)
    },
    branches() { 
        let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
        return this.req.map(x => [x, col]) 
    },
    style: { margin: "10px" }
},
132: { title: "Twenty-Ninth Tree Upgrade",
    description: "Raise Stone gain by 1.25.",
    currencyDisplayName: "Coal",
    currencyInternalName: "coal",
    currencyLayer: "su",
    cost() {
        let cost = EN("10000000")
        let ugs = EN("10")
        for (let a = 131; a <= 132; a++) if (hasUpgrade("su", a)) {
            cost = cost.mul(ugs)
            ugs = ugs.mul("1")
        }
        return cost
     },
    req: [121, 122],
    unlocked() {
        return hasUpgrade("su", 121, 122)
    },
    branches() { 
        let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
        return this.req.map(x => [x, col]) 
    },
    style: { margin: "10px" }
},
141: { title: "Thirtieth Tree Upgrade",
        description: "Unlock another buyable.",
        currencyDisplayName: "Coal",
        currencyInternalName: "coal",
        currencyLayer: "su",
        cost: ("1e9"),
        req: [131, 132],
        unlocked() {
            return hasUpgrade("su", 131, 132)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
151: { title: "Thirty-First Tree Upgrade",
        description: "Stone boosts iron gain.",
        currencyDisplayName: "Stone",
        currencyInternalName: "stones",
        currencyLayer: "su",
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.stones.add(1).pow(0.12345678).min("1000000")
        },
        cost() {
            let cost = EN("1e16")
            let ugs = EN("2")
            for (let a = 151; a <= 152; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [141],
        unlocked() {
            return hasUpgrade("su", 141)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
        152: { title: "Thirty-Second Tree Upgrade",
        description: "Coal boosts iron gain.",
        currencyDisplayName: "Coal",
        currencyInternalName: "coal",
        currencyLayer: "su",
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.coal.add(1).pow(0.14285714285).min("1000000")
        },
        cost() {
            let cost = EN("4e9")
            let ugs = EN("2")
            for (let a = 151; a <= 152; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [141],
        unlocked() {
            return hasUpgrade("su", 141)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    161: { title: "Thirty-Third Tree Upgrade",
        description: "Gain more iron based on your neutron stars.",
        currencyDisplayName: "Iron",
        currencyInternalName: "iron",
        currencyLayer: "su",
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.total.add(1).pow(0.16).min("1000000")
        },
        cost() {
            let cost = EN("1e6")
            let ugs = EN("10")
            for (let a = 161; a <= 162; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [151, 152],
        unlocked() {
            return hasUpgrade("su", 151, 152)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
        162: { title: "Thirty-Fourth Tree Upgrade",
        description: "Each Supernova upgrade, increase 10% to iron gain (compounding)",
        currencyDisplayName: "Iron",
        currencyInternalName: "iron",
        currencyLayer: "su",
        effect() {
            let effect = ExpantaNum.pow(1.1, player.su.upgrades.length)
            return effect
        },
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        cost() {
            let cost = EN("1e6")
            let ugs = EN("10")
            for (let a = 161; a <= 162; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [151, 152],
        unlocked() {
            return hasUpgrade("su", 151, 152)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    171: { title: "Thirty-Fifth Tree Upgrade",
        description: "Iron boosts itself.",
        currencyDisplayName: "Iron",
        currencyInternalName: "iron",
        currencyLayer: "su",
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.iron.add(1).pow(0.1).min("1000")
        },
        cost() {
            let cost = EN("1e9")
            let ugs = EN("10")
            for (let a = 171; a <= 172; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [161,162],
        unlocked() {
            return hasUpgrade("su", 161, 162)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
        172: { title: "Thirty-Sixth Tree Upgrade",
        description: "Iron boosts neutron star gain.",
        currencyDisplayName: "Iron",
        currencyInternalName: "iron",
        currencyLayer: "su",
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.iron.add(1).pow(0.333333333333333333333333333).min("1000000")
        },
        cost() {
            let cost = EN("1e9")
            let ugs = EN("10")
            for (let a = 171; a <= 172; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [161, 162],
        unlocked() {
            return hasUpgrade("su", 161, 162)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    181: { title: "Thirty-Seventh Tree Upgrade",
        description: "Raise Stone gain by 1.2.",
        currencyDisplayName: "Coal",
        currencyInternalName: "coal",
        currencyLayer: "su",
        cost() {
            let cost = EN("1e13")
            let ugs = EN("10")
            for (let a = 181; a <= 182; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [171,172],
        unlocked() {
            return hasUpgrade("su", 171, 172)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
        182: { title: "Thirty-Eighth Tree Upgrade",
        description: "Raise Coal gain by 1.25.",
        currencyDisplayName: "Iron",
        currencyInternalName: "iron",
        currencyLayer: "su",
        cost() {
            let cost = EN("1e12")
            let ugs = EN("10")
            for (let a = 181; a <= 182; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [171, 172],
        unlocked() {
            return hasUpgrade("su", 171, 172)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    191: { title: "Thirty-Ninth Tree Upgrade",
        description: "Unlock another buyable.",
        currencyDisplayName: "Iron",
        currencyInternalName: "iron",
        currencyLayer: "su",
        cost: ("1e14"),
        req: [181, 182],
        unlocked() {
            return hasUpgrade("su", 181, 182)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    201: { title: "Fortieth Tree Upgrade",
        description: "Stone boosts gold gain.",
        currencyDisplayName: "Stone",
        currencyInternalName: "stones",
        currencyLayer: "su",
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.stones.add(1).pow(0.1).min("1000000")
        },
        cost() {
            let cost = EN("1e27")
            let ugs = EN("10")
            for (let a = 201; a <= 205; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [191],
        unlocked() {
            return hasUpgrade("su", 191)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    202: { title: "Forty-First Tree Upgrade",
        description: "Coal boosts gold gain.",
        currencyDisplayName: "Coal",
        currencyInternalName: "coal",
        currencyLayer: "su",
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.coal.add(1).pow(0.1111111111111111111111111111).min("1000000")
        },
        cost() {
            let cost = EN("1e17")
            let ugs = EN("10")
            for (let a = 201; a <= 205; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [191],
        unlocked() {
            return hasUpgrade("su", 191)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    203: { title: "Forty-Second Tree Upgrade",
        description: "Iron boosts gold gain.",
        currencyDisplayName: "Iron",
        currencyInternalName: "iron",
        currencyLayer: "su",
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.iron.add(1).pow(0.123456789).min("1000000")
        },
        cost() {
            let cost = EN("1e14")
            let ugs = EN("10")
            for (let a = 201; a <= 205; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [191],
        unlocked() {
            return hasUpgrade("su", 191)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    204: { title: "Forty-Third Tree Upgrade",
        description: "Gain more gold based on your neutron stars.",
        currencyDisplayName: "Gold",
        currencyInternalName: "gold",
        currencyLayer: "su",
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.total.add(1).pow(0.123456789).min("1000000")
        },
        cost() {
            let cost = EN("1e6")
            let ugs = EN("10")
            for (let a = 201; a <= 205; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [191],
        unlocked() {
            return hasUpgrade("su", 191)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    205: { title: "Forty-Fourth Tree Upgrade",
        description: "Each Supernova upgrade, increase 12.5% to gold gain (compounding).",
        currencyDisplayName: "Gold",
        currencyInternalName: "gold",
        currencyLayer: "su",
        effect() {
            let effect = ExpantaNum.pow(1.125, player.su.upgrades.length)
            return effect
        },
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        cost() {
            let cost = EN("1e8")
            let ugs = EN("10")
            for (let a = 201; a <= 205; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [191],
        unlocked() {
            return hasUpgrade("su", 191)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    211: { title: "Forty-Fifth Tree Upgrade",
        description: "Gold boosts itself.",
        currencyDisplayName: "Gold",
        currencyInternalName: "gold",
        currencyLayer: "su",
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.gold.add(1).pow(0.14285714285).min("1000000")
        },
        cost() {
            let cost = EN("1e16")
            let ugs = EN("10")
            for (let a = 211; a <= 212; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [201, 202, 203, 204, 205],
        unlocked() {
            return hasUpgrade("su", 201, 202, 203, 204, 205)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    221: { title: "Forty-Sixth Tree Upgrade",
        description: "Gold boosts neutron star gain.",
        currencyDisplayName: "Gold",
        currencyInternalName: "gold",
        currencyLayer: "su",
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.gold.add(1).pow(0.25).min("1e10")
        },
        cost() {
            let cost = EN("1e18")
            let ugs = EN("10")
            for (let a = 221; a <= 223; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [211],
        unlocked() {
            return hasUpgrade("su", 211)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    231: { title: "Forty-Seventh Tree Upgrade",
        description: "Raise Stone gain by 1.2, coal by 1.3 and iron by 1.25.",
        currencyDisplayName: "Gold",
        currencyInternalName: "gold",
        currencyLayer: "su",
        cost: ("2e20"),
        req: [221],
        unlocked() {
            return hasUpgrade("su", 221)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    241: { title: "Forty-Eighth Tree Upgrade",
        description: "Unlock another new buyable.",
        currencyDisplayName: "Gold",
        currencyInternalName: "gold",
        currencyLayer: "su",
        cost: ("1e25"),
        req: [231],
        unlocked() {
            return hasUpgrade("su", 231)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    251: { title: "Forty-Ninth Tree Upgrade",
        description: "Stone boosts diamond gain.",
        currencyDisplayName: "Stone",
        currencyInternalName: "stones",
        currencyLayer: "su",
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.stones.add(1).pow(0.0625).min("1e9")
        },
        cost() {
            let cost = EN("1e55")
            let ugs = EN("10")
            for (let a = 251; a <= 254; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [241],
        unlocked() {
            return hasUpgrade("su", 241)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    252: { title: "Fiftieth Tree Upgrade!",
        description: "Coal boosts diamond gain.",
        currencyDisplayName: "Coal",
        currencyInternalName: "coal",
        currencyLayer: "su",
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.coal.add(1).pow(0.1).min("1e9")
        },
        cost() {
            let cost = EN("1e36")
            let ugs = EN("10")
            for (let a = 251; a <= 254; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [241],
        unlocked() {
            return hasUpgrade("su", 241)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    253: { title: "Fifty-First Tree Upgrade",
        description: "Iron boosts diamond gain.",
        currencyDisplayName: "Iron",
        currencyInternalName: "iron",
        currencyLayer: "su",
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.iron.add(1).pow(0.0909090909).min("1e9")
        },
        cost() {
            let cost = EN("1e34")
            let ugs = EN("10")
            for (let a = 251; a <= 254; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [241],
        unlocked() {
            return hasUpgrade("su", 241)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    254: { title: "Fifty-Second Tree Upgrade",
        description: "Gold boosts diamond gain.",
        currencyDisplayName: "Gold",
        currencyInternalName: "gold",
        currencyLayer: "su",
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.gold.add(1).pow(0.1).min("1e9")
        },
        cost() {
            let cost = EN("1e29")
            let ugs = EN("10")
            for (let a = 251; a <= 254; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [241],
        unlocked() {
            return hasUpgrade("su", 241)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    261: { title: "Fifty-Third Tree Upgrade",
        description: "Neutron stars boosts diamond gain.",
        currencyDisplayName: "Diamond",
        currencyInternalName: "diamond",
        currencyLayer: "su",
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.total.add(1).pow(0.11111111111111111111).min("1e9")
        },
        cost() {
            let cost = EN("1e17")
            let ugs = EN("10")
            for (let a = 261; a <= 262; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [251, 252, 253, 254],
        unlocked() {
            return hasUpgrade("su", 251, 252, 253, 254)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    271: { title: "Fifty-Fourth Tree Upgrade",
        description: "Diamond boosts neutron star gain.",
        currencyDisplayName: "Diamond",
        currencyInternalName: "diamond",
        currencyLayer: "su",
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.diamond.add(1).pow(0.2222222222222222).min("1e9")
        },
        cost() {
            let cost = EN("2.222e22")
            let ugs = EN("10")
            for (let a = 271; a <= 273; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [261],
        unlocked() {
            return hasUpgrade("su", 261)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    272: { title: "Fifty-Fifth Tree Upgrade",
        description: "Each supernova upgrade, increase 20% to diamond gain.",
        currencyDisplayName: "Diamond",
        currencyInternalName: "diamond",
        currencyLayer: "su",
        effect() {
            let effect = ExpantaNum.pow(1.2, player.su.upgrades.length).min("1e9")
            return effect
        },
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        cost() {
            let cost = EN("2.323e22")
            let ugs = EN("10")
            for (let a = 271; a <= 273; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [261],
        unlocked() {
            return hasUpgrade("su", 261)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    273: { title: "Fifty-Sixth Tree Upgrade",
        description: "Diamond boosts itself.",
        currencyDisplayName: "Diamond",
        currencyInternalName: "diamond",
        currencyLayer: "su",
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.diamond.add(1).pow(0.14285714285).min("1e9")
        },
        cost() {
            let cost = EN("1e26")
            let ugs = EN("10")
            for (let a = 271; a <= 273; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [261],
        unlocked() {
            return hasUpgrade("su", 261)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    281: { title: "Fifty-Seventh Tree Upgrade",
        description: "Raise Neutron Star gain by 1.5 again, stone by 1.1, coal by 1.3 again, iron by 1.25 and gold by 1.2.",
        currencyDisplayName: "Diamond",
        currencyInternalName: "diamond",
        currencyLayer: "su",
        cost: ("1e35"),
        req: [271, 272, 273],
        unlocked() {
            return hasUpgrade("su", 271, 272, 273)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    291: { title: "Fifty-Eighth Tree Upgrade",
        description: "Unlock a new buyable.",
        currencyDisplayName: "Diamond",
        currencyInternalName: "diamond",
        currencyLayer: "su",
        cost: ("1e50"),
        req: [281],
        unlocked() {
            return hasUpgrade("su", 281)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    301: { title: "Fifty-Ninth Tree Upgrade",
        description: "Stone boosts ruby gain.",
        currencyDisplayName: "Stone",
        currencyInternalName: "stones",
        currencyLayer: "su",
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.stones.add(1).pow(0.04).min("1e10")
        },
        cost() {
            let cost = EN("1e144")
            let ugs = EN("1000")
            for (let a = 301; a <= 305; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [291],
        unlocked() {
            return hasUpgrade("su", 291)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    302: { title: "Sixtieth Tree Upgrade",
        description: "Coal boosts ruby gain.",
        currencyDisplayName: "Coal",
        currencyInternalName: "coal",
        currencyLayer: "su",
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.coal.add(1).pow(0.077777777777777777777777777).min("1e10")
        },
        cost() {
            let cost = EN("7.777e77")
            let ugs = EN("100")
            for (let a = 301; a <= 305; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [291],
        unlocked() {
            return hasUpgrade("su", 291)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    303: { title: "Sixty-First Tree Upgrade",
        description: "Iron boosts ruby gain.",
        currencyDisplayName: "Iron",
        currencyInternalName: "iron",
        currencyLayer: "su",
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.iron.add(1).pow(0.1).min("1e10")
        },
        cost() {
            let cost = EN("1e63")
            let ugs = EN("100")
            for (let a = 301; a <= 305; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [291],
        unlocked() {
            return hasUpgrade("su", 291)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    304: { title: "Sixty-Second Tree Upgrade",
        description: "Gold boosts ruby gain.",
        currencyDisplayName: "Gold",
        currencyInternalName: "gold",
        currencyLayer: "su",
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.gold.add(1).pow(0.11111111111111).min("1e10")
        },
        cost() {
            let cost = EN("5.555e55")
            let ugs = EN("10")
            for (let a = 301; a <= 305; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [291],
        unlocked() {
            return hasUpgrade("su", 291)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    305: { title: "Sixty-Third Tree Upgrade",
        description: "Diamond boosts ruby gain.",
        currencyDisplayName: "Diamond",
        currencyInternalName: "diamond",
        currencyLayer: "su",
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.diamond.add(1).pow(0.123456789).min("1e10")
        },
        cost() {
            let cost = EN("5.555e55")
            let ugs = EN("10")
            for (let a = 301; a <= 305; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [291],
        unlocked() {
            return hasUpgrade("su", 291)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    311: { title: "Sixty-Fourth Tree Upgrade",
        description: "Neutron stars boosts ruby gain.",
        currencyDisplayName: "Ruby",
        currencyInternalName: "ruby",
        currencyLayer: "su",
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.total.add(1).pow(0.123456789).min("1e10")
        },
        cost: ("1e44"),
        req: [301, 302, 303, 304, 305],
        unlocked() {
            return hasUpgrade("su", 301, 302, 303, 304, 305)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    321: { title: "Sixty-Fifth Tree Upgrade",
        description: "Ruby boosts neutron star gain.",
        currencyDisplayName: "Ruby",
        currencyInternalName: "ruby",
        currencyLayer: "su",
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.ruby.add(1).pow(0.11111111111111).min("1e12")
        },
        cost() {
            let cost = EN("5.555e55")
            let ugs = EN("1e9")
            for (let a = 321; a <= 322; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [311],
        unlocked() {
            return hasUpgrade("su", 311)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    322: { title: "Sixty-Sixth Tree Upgrade",
        description: "Ruby boosts itself.",
        currencyDisplayName: "Ruby",
        currencyInternalName: "ruby",
        currencyLayer: "su",
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.ruby.add(1).pow(0.1).min("1e10")
        },
        cost() {
            let cost = EN("5.555e55")
            let ugs = EN("1e9")
            for (let a = 321; a <= 322; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [311],
        unlocked() {
            return hasUpgrade("su", 311)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    331: { title: "Sixty-Seventh Tree Upgrade",
        description: "Each Supernova Upgrade, increases ruby gain by 15%.",
        currencyDisplayName: "Ruby",
        currencyInternalName: "ruby",
        currencyLayer: "su",
        effect() {
            let effect = ExpantaNum.pow(1.15, player.su.upgrades.length).min("1e10")
            return effect
        },
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        cost() {
            let cost = EN("1e66")
            let ugs = EN("1e9")
            for (let a = 331; a <= 332; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [321, 322],
        unlocked() {
            return hasUpgrade("su", 321, 322)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    341: { title: "Sixty-Eighth Tree Upgrade",
        description: "Raise Coal, Iron, Gold gain by 1.25 and diamond by 1.2.",
        currencyDisplayName: "Ruby",
        currencyInternalName: "ruby",
        currencyLayer: "su",
        cost: ("6.969e69"),
        req: [331],
        unlocked() {
            return hasUpgrade("su", 331)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    351: { title: "Sixty-Ninth Tree Upgrade (nice)",
        description: "Unlock a new buyable.",
        currencyDisplayName: "Ruby",
        currencyInternalName: "ruby",
        currencyLayer: "su",
        cost: ("1e74"),
        req: [341],
        unlocked() {
            return hasUpgrade("su", 341)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    361: { title: "Seventieth Tree Upgrade",
        description: "Stone boosts emerald gain.",
        currencyDisplayName: "Stone",
        currencyInternalName: "stones",
        currencyLayer: "su",
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.stones.add(1).pow(0.01).min("1e10")
        },
        cost() {
            let cost = EN("1e250")
            let ugs = EN("e5")
            for (let a = 361; a <= 365; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [351],
        unlocked() {
            return hasUpgrade("su", 351)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    362: { title: "Seventy-First Tree Upgrade",
        description: "Coal boosts emerald gain.",
        currencyDisplayName: "Coal",
        currencyInternalName: "coal",
        currencyLayer: "su",
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.coal.add(1).pow(0.04).min("1e10")
        },
        cost() {
            let cost = EN("1e150")
            let ugs = EN("e5")
            for (let a = 361; a <= 365; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [351],
        unlocked() {
            return hasUpgrade("su", 351)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    363: { title: "Seventy-Second Tree Upgrade",
        description: "Iron boosts emerald gain.",
        currencyDisplayName: "Iron",
        currencyInternalName: "iron",
        currencyLayer: "su",
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.iron.add(1).pow(0.042).min("1e10")
        },
        cost() {
            let cost = EN("1e125")
            let ugs = EN("e5")
            for (let a = 361; a <= 365; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [351],
        unlocked() {
            return hasUpgrade("su", 351)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    364: { title: "Seventy-Third Tree Upgrade",
        description: "Gold boosts emerald gain.",
        currencyDisplayName: "Gold",
        currencyInternalName: "gold",
        currencyLayer: "su",
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.gold.add(1).pow(0.05).min("1e10")
        },
        cost() {
            let cost = EN("e110")
            let ugs = EN("e5")
            for (let a = 361; a <= 365; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [351],
        unlocked() {
            return hasUpgrade("su", 351)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    365: { title: "Seventy-Fourth Tree Upgrade",
        description: "Diamond boosts emerald gain.",
        currencyDisplayName: "Diamond",
        currencyInternalName: "diamond",
        currencyLayer: "su",
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.diamond.add(1).pow(0.06).min("1e10")
        },
        cost() {
            let cost = EN("e100")
            let ugs = EN("e5")
            for (let a = 361; a <= 365; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [351],
        unlocked() {
            return hasUpgrade("su", 351)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    371: { title: "Seventy-Fifth Tree Upgrade",
        description: "Ruby boosts emerald gain.",
        currencyDisplayName: "Ruby",
        currencyInternalName: "ruby",
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.ruby.add(1).pow(0.064).min("1e10")
        },
        currencyLayer: "su",
        cost: ("1e93"),
        req: [361,362, 363, 364, 365],
        unlocked() {
            return hasUpgrade("su", 361, 362, 363, 364, 365)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    381: { title: "Seventy-Sixth Tree Upgrade",
        description: "Neutron star boosts emerald gain.",
        currencyDisplayName: "Emerald",
        currencyInternalName: "emerald",
        currencyLayer: "su",
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.total.add(1).pow(0.05).min("1e10")
        },
        cost() {
            let cost = EN("1e40")
            let ugs = EN("e5")
            for (let a = 381; a <= 385; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [371],
        unlocked() {
            return hasUpgrade("su", 371)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    382: { title: "Seventy-Seventh Tree Upgrade (nice)",
        description: "Emerald boosts neutron star gain.",
        currencyDisplayName: "Emerald",
        currencyInternalName: "emerald",
        currencyLayer: "su",
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.emerald.add(1).pow(0.1111111).min("1e10")
        },
        cost() {
            let cost = EN("1e42")
            let ugs = EN("e3")
            for (let a = 381; a <= 385; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [371],
        unlocked() {
            return hasUpgrade("su", 371)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    383: { title: "Seventy-Eighth Tree Upgrade",
        description: "Emerald boosts itself.",
        currencyDisplayName: "Emerald",
        currencyInternalName: "emerald",
        currencyLayer: "su",
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.emerald.add(1).pow(0.090909090909).min("1e10")
        },
        cost() {
            let cost = EN("1e45")
            let ugs = EN("e1")
            for (let a = 381; a <= 385; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [371],
        unlocked() {
            return hasUpgrade("su", 371)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    384: { title: "Seventy-Ninth Tree Upgrade",
        description: "Each Supernova upgrade, increases emerald gain by 25%.",
        currencyDisplayName: "Emerald",
        currencyInternalName: "emerald",
        currencyLayer: "su",
        effect() {
            let effect = ExpantaNum.pow(1.25, player.su.upgrades.length).min("1e10")
            return effect
        },
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        cost() {
            let cost = EN("e45")
            let ugs = EN("e3")
            for (let a = 381; a <= 385; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [371],
        unlocked() {
            return hasUpgrade("su", 371)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    385: { title: "Eightieth Tree Upgrade",
        description: "Raise Coal gain by 1.3, iron, gold, ruby by 1.25 and diamond by 1.2.",
        currencyDisplayName: "Emerald",
        currencyInternalName: "emerald",
        currencyLayer: "su",
        cost() {
            let cost = EN("e54")
            let ugs = EN("e3")
            for (let a = 381; a <= 385; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [371],
        unlocked() {
            return hasUpgrade("su", 371)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    391: { title: "Eighty-First Tree Upgrade",
        description: "Unlock a new buyable.",
        currencyDisplayName: "Emerald",
        currencyInternalName: "emerald",
        currencyLayer: "su",
        cost: ("1e75"),
        req: [381, 382, 383, 384, 385],
        unlocked() {
            return hasUpgrade("su", 381, 382, 383, 384, 385)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    401: { title: "Eighty-Second Tree Upgrade",
        description: "Stone boosts amethyst gain.",
        currencyDisplayName: "Stone",
        currencyInternalName: "stones",
        currencyLayer: "su",
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.stones.add(1).pow(0.0625).min("1e100")
        },
        cost() {
            let cost = EN("1e420")
            let ugs = EN("e10")
            for (let a = 401; a <= 405; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [391],
        unlocked() {
            return hasUpgrade("su", 391)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    402: { title: "Eighty-Third Tree Upgrade",
        description: "Neutron Star boosts amethyst gain.",
        currencyDisplayName: "Amethyst",
        currencyInternalName: "amethyst",
        currencyLayer: "su",
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.total.add(1).pow(0.06666666666666).min("1e15")
        },
        cost() {
            let cost = EN("1e24")
            let ugs = EN("e10")
            for (let a = 401; a <= 405; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [391],
        unlocked() {
            return hasUpgrade("su", 391)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    403: { title: "Eighty-Fourth Tree Upgrade",
        description: "Amethyst boosts neutron star gain.",
        currencyDisplayName: "Amethyst",
        currencyInternalName: "amethyst",
        currencyLayer: "su",
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.amethyst.add(1).pow(0.15).min("1e15")
        },
        cost() {
            let cost = EN("1e24")
            let ugs = EN("e10")
            for (let a = 401; a <= 405; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [391],
        unlocked() {
            return hasUpgrade("su", 391)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    404: { title: "Eighty-Fifth Tree Upgrade",
        description: "Amethyst boosts itself.",
        currencyDisplayName: "Amethyst",
        currencyInternalName: "amethyst",
        currencyLayer: "su",
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.amethyst.add(1).pow(0.2).min("1e30")
        },
        cost() {
            let cost = EN("1e30")
            let ugs = EN("e5")
            for (let a = 401; a <= 405; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [391],
        unlocked() {
            return hasUpgrade("su", 391)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    405: { title: "Eighty-Sixth Tree Upgrade",
        description: "Unlock the final buyable.",
        currencyDisplayName: "Amethyst",
        currencyInternalName: "amethyst",
        currencyLayer: "su",
        cost() {
            let cost = EN("1e40")
            let ugs = EN("e5")
            for (let a = 401; a <= 405; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [391],
        unlocked() {
            return hasUpgrade("su", 391)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    411: { title: "Eighty-Seventh Tree Upgrade",
        description: "Stone boosts Cobalt gain.",
        currencyDisplayName: "Stone",
        currencyInternalName: "stones",
        currencyLayer: "su",
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.stones.add(1).pow(0.05).min("1e100")
        },
        cost:("1e650"),
        req: [401, 402, 403, 404, 405],
        unlocked() {
            return hasUpgrade("su", 401, 402, 403, 404, 405)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    421: { title: "Eighty-Eighth Tree Upgrade",
        description: "Neutron Star boosts cobalt gain.",
        currencyDisplayName: "Cobalt",
        currencyInternalName: "cobalt",
        currencyLayer: "su",
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.total.add(1).pow(0.05).min("1e20")
        },
        cost() {
            let cost = EN("1e54")
            let ugs = EN("e10")
            for (let a = 421; a <= 422; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [411],
        unlocked() {
            return hasUpgrade("su", 411)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    422: { title: "Eighty-Ninth Tree Upgrade",
        description: "Cobalt boosts neutron star gain.",
        currencyDisplayName: "Cobalt",
        currencyInternalName: "cobalt",
        currencyLayer: "su",
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.cobalt.add(1).pow(0.111111111111111).min("1e20")
        },
        cost() {
            let cost = EN("1e60")
            let ugs = EN("e5")
            for (let a = 421; a <= 422; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [411],
        unlocked() {
            return hasUpgrade("su", 411)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    431: { title: "976",
        description: "Gain more points based on your supernova time spent on this reset. (Stronger+)",
        cost: new EN("e1e47"),
        unlocked() {
            return hasUpgrade("su", 422)
        },
        effect() {
            let time = EN(player.su.resetTime)
            return EN.pent(10, time.pent("9.3").pent(1), time)
        },
        effectDisplay() { return "^" + format(this.effect()) },
        },
        432: { title: "977",
        description: "Raise Neutron star gain based on your supernova time spent on this reset.",
        cost: new EN("e1e50"),
        unlocked() {
            return hasUpgrade("su", 431)
        },
        effect() {
            let time = EN(player.su.resetTime)
            return EN.pow(10, time.pow("1").pow(1), time)
        },
        effectDisplay() { return "^" + format(this.effect()) },
        },
        433: { title: "978",
        description: "Unlock more tree upgrades.",
        cost: new EN("e1e308"),
        unlocked() {
            return hasUpgrade("su", 432)
        },
        },
        434: { title: "979",
        description: "Speed up Crystal Tier!",
        cost: new EN("e2e22222"),
        unlocked() {
            return hasUpgrade("su", 481)
        },
        },
        435: { title: "980",
        description: "Crystal Tiers raises crystal gain.",
        cost: new EN("ee3e6"),
        effectDisplay() { return "^" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.crystaltiers.add(1).pow("0.1").min("1e8")
        },
        unlocked() {
            return hasUpgrade("su", 434)
        },
        },
        441: { title: "Ninty Tree Upgrade",
        description: "Raise all ores gains based on supernova time spent on this reset. (Excluding Crystal)",
        currencyDisplayName: "Crystal",
        currencyInternalName: "crystal",
        currencyLayer: "su",
        effect() {
            let time = EN(player.su.resetTime)
            return EN.mul(10, time.mul("10").mul(10), time)
        },
        effectDisplay() { return "^" + format(this.effect()) },
        cost() {
            let cost = EN("1e6")
            let ugs = EN("e1")
            for (let a = 441; a <= 442; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [421, 422],
        unlocked() {
            return hasUpgrade("su", 433)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    451: { title: "Ninty-First Tree Upgrade",
        description: "Cobalt boosts Crystal gain.",
        currencyDisplayName: "Crystal",
        currencyInternalName: "crystal",
        currencyLayer: "su",
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.cobalt.add(1).pow("0.0000000000000001").min("1000")
        },
        cost() {
            let cost = EN("2e6")
            let ugs = EN("e1")
            for (let a = 451; a <= 452; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [441],
        unlocked() {
            return hasUpgrade("su", 441)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    461: { title: "Ninty-Second Tree Upgrade",
        description: "Crystal boosts itself.",
        currencyDisplayName: "Crystal",
        currencyInternalName: "crystal",
        currencyLayer: "su",
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.crystal.add(1).pow("0.1").min("1e100")
        },
        cost() {
            let cost = EN("5e6")
            let ugs = EN("e1")
            for (let a = 461; a <= 462; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [451],
        unlocked() {
            return hasUpgrade("su", 451)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    471: { title: "Ninty-Third Tree Upgrade",
        description: "Crystal gain is boosted based on supernova time spent on this reset.",
        currencyDisplayName: "Crystal",
        currencyInternalName: "crystal",
        currencyLayer: "su",
        effect() {
            let time = EN(player.su.resetTime)
            return EN.mul(1, time.mul("0.1").mul(0.1), time)
        },
        effectDisplay() { return "x" + format(this.effect()) },
        cost() {
            let cost = EN("1e7")
            let ugs = EN("e1")
            for (let a = 471; a <= 472; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [461],
        unlocked() {
            return hasUpgrade("su", 461)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    481: { title: "Ninty-Fourth Tree Upgrade",
        description: "Unlock Crystal Tiers.",
        currencyDisplayName: "Crystal",
        currencyInternalName: "crystal",
        currencyLayer: "su",

        cost() {
            let cost = EN("1e10")
            let ugs = EN("e1")
            for (let a = 481; a <= 482; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [471],
        unlocked() {
            return hasUpgrade("su", 471)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    491: { title: "981",
        description: "Raise Crystal based on supernova time spent on this reset.",
        cost: new EN("ee2.5e7"),
        unlocked() {
            return hasUpgrade("su", 435)
        },
        effect() {
            let time = EN(player.su.resetTime)
            return EN.pow(2, time.mul("0.1").mul(1), time).min("1000")
        },
        effectDisplay() { return "^" + format(this.effect()) },
        },
        492: { title: "982",
        description: "Gain more points based on your supernova time spent on this reset.",
        cost: new EN("eee10"),
        unlocked() {
            return hasUpgrade("su", 491)
        },
        effect() {
            let time = EN(player.su.resetTime)
            return EN.pent("1e308", time.pent("1e308").pent("1e308"), time)
        },
        effectDisplay() { return "^" + format(this.effect()) },
        },
        493: { title: "983",
        description: "Gain 100x Crystal Tier and per supernova upgrade, raise crystal gain by 1.2.",
        cost: new EN("ee2e10"),
        unlocked() {
            return hasUpgrade("su", 492)
        },
        effect() {
            let effect = ExpantaNum.pow(1.2, player.su.upgrades.length)
            return effect
        },
        effectDisplay() { return "^" + format(upgradeEffect(this.layer, this.id))}, // Add formatting to the effect      ,
        },
        494: { title: "984",
        description: "Cube Crystal Tier gain..",
        cost: new EN("ee1e21"),
        unlocked() {
            return hasUpgrade("su", 493)
        },
        },
        495: { title: "985",
        description: "Raise Crystal based on supernova time spent on this reset (Stronger).",
        cost: new EN("ee1e28"),
        unlocked() {
            return hasUpgrade("su", 494)
        },
        effect() {
            let time = EN(player.su.resetTime)
            return EN.pow(10, time.mul("1").mul(1), time)
        },
        effectDisplay() { return "^" + format(this.effect()) },
        },
        501: { title: "986",
        description: "Gain more Crystal Tiers based on supernova time spent on this reset.",
        cost: new EN("ee1.79e308"),
        unlocked() {
            return hasUpgrade("su", 495)
        },
        effect() {
            let time = EN(player.su.resetTime)
            return EN.pow(2, time.mul("1").mul(1), time)
        },
        effectDisplay() { return "x" + format(this.effect()) },
        },
        502: { title: "987",
        description: "Raise Crystal Tier gain based on your supernova time spent on this reset.",
        cost: new EN("eee420"),
        unlocked() {
            return hasUpgrade("su", 501)
        },
        effect() {
            let time = EN(player.su.resetTime)
            return EN.mul(1, time.mul("0.1").mul(1), time)
        },
        effectDisplay() { return "^" + format(this.effect()) },
        },
        503: { title: "988",
        description: "Crystal Tiers boosts itself.",
        cost: new EN("eeee3"),
        unlocked() {
            return hasUpgrade("su", 502)
        },
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.crystaltiers.add(1).pow("0.090909090909")
        },
        },
        504: { title: "989",
        description: "Crystal Tiers raises itself.",
        cost: new EN("ee1e3003"),
        unlocked() {
            return hasUpgrade("su", 503)
        },
        effectDisplay() { return "^" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.crystaltiers.add(1).pow("0.0001").min("1000")
        },
        },
        505: { title: "990 (10 More to 1K)",
        description: "Unlock Crystal Levels and crystal tiers raises itself by even more.",
        cost: new EN("eeeee3"),
        unlocked() {
            return hasUpgrade("su", 504)
        },
        effectDisplay() { return "^" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.crystaltiers.add(1).pow("1")
        },
    },
    511: { title: "991",
        description: "Crystal levels boosts itself.",
        cost: new EN("10^^1e6"),
        unlocked() {
            return hasUpgrade("su", 505)
        },
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.crystallevels.add(1).pow("0.5")
        },
    },
    512: { title: "992",
        description: "Crystal levels is boosted based on supernova time spent on this reset.",
        cost: new EN("10^^1e7"),
        unlocked() {
            return hasUpgrade("su", 511)
        },
        effect() {
            let time = EN(player.su.resetTime)
            return EN.mul(1, time.mul("1").mul(1), time)
        },
        effectDisplay() { return "x" + format(this.effect()) },
    },
    513: { title: "993",
        description: "Every Supernova Upgrade = 10% more Crystal Levels.",
        cost: new EN("10^^1e11"),
        unlocked() {
            return hasUpgrade("su", 512)
        },
        effect() {
            let effect = ExpantaNum.pow(1.1, player.su.upgrades.length)
            return effect
        },
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id))}, // Add formatting to the effect      ,
        },
        514: { title: "994",
        description: "Crystal levels is raised based on supernova time spent on this reset.",
        cost: new EN("10^^1e20"),
        unlocked() {
            return hasUpgrade("su", 513)
        },
        effect() {
            let time = EN(player.su.resetTime)
            return EN.mul(1, time.mul("0.1").mul(1), time)
        },
        effectDisplay() { return "^" + format(this.effect()) },
    },
    515: { title: "995",
        description: "Crystal levels raises itself, unlock more tree upgrades.",
        cost: new EN("10^^10^1e308"),
        unlocked() {
            return hasUpgrade("su", 514)
        },
        effectDisplay() { return "^" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.crystallevels.add(1).tetr("1")
        },
    },
    521: { title: "Ninty-Fifth Tree Upgrade",
        description: "Crystal levels tetrates itself and unlock Crystal Stages.",
        currencyDisplayName: "Crystal Levels",
        currencyInternalName: "crystallevels",
        currencyLayer: "su",
        effectDisplay() { return "^^" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.crystallevels.add(1).pow("0.1")
        },
        cost() {
            let cost = EN("10^^1000")
            let ugs = EN("e1")
            for (let a = 521; a <= 522; a++) if (hasUpgrade("su", a)) {
                cost = cost.mul(ugs)
                ugs = ugs.mul("1")
            }
            return cost
         },
        req: [481],
        unlocked() {
            return hasUpgrade("su", 515)
        },
        branches() { 
            let col = hasUpgrade(this.layer, this.id) ? "#77df5f" : "#9c7575"
            return this.req.map(x => [x, col]) 
        },
        style: { margin: "10px" }
    },
    531: { title: "996",
        description: "Crystal stages boosts itself.",
        cost: new EN("10^^^300"),
        unlocked() {
            return hasUpgrade("su", 521)
        },
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        effect() {
            return player.su.crystalstages.add(1).pow("0.5")
        },
    },
    532: { title: "997",
        description: "Crystal stages is boosted based on supernova time spent on this reset.",
        cost: new EN("10^^^10000"),
        unlocked() {
            return hasUpgrade("su", 531)
        },
        effect() {
            let time = EN(player.su.resetTime)
            return EN.mul(1, time.mul("1").mul(1), time)
        },
        effectDisplay() { return "x" + format(this.effect()) },
    },
    533: { title: "998",
        description: "Every Supernova Upgrade = 5% more Crystal Stages.",
        cost: new EN("10^^^2e7"),
        unlocked() {
            return hasUpgrade("su", 532)
        },
        effect() {
            let effect = ExpantaNum.pow(1.05, player.su.upgrades.length)
            return effect
        },
        effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id))}, // Add formatting to the effect      ,
        },
        534: { title: "999",
        description: "Crystal stages is raised based on supernova time spent on this reset.",
        cost: new EN("10^^^1e13"),
        unlocked() {
            return hasUpgrade("su", 533)
        },
        effect() {
            let time = EN(player.su.resetTime)
            return EN.mul(1, time.mul("0.1").mul(1), time)
        },
        effectDisplay() { return "^" + format(this.effect()) },
    },
    535: { title: "1,000!",
        description: "Unlock a new prestige layer but remove row 6-7 layers (Excluding Void).",
        cost: new EN("10^^^10^1e308"),
        unlocked() {
            return hasUpgrade("su", 534)
        },
    },
},
    clickables: {
        11: {
            display() {
                return "Respec upgrades, but you do not get all the ores back."
            },
            unlocked() {
                return hasUpgrade("su", 55)
            },
            canClick() {
                return hasUpgrade("su", 61)
            },
            onClick() {
                player.su.upgrades.length
                for(let i = 0; i < player.su.upgrades.length; i++) { 
                    if (+player.su.upgrades[i] > 55) { 
                        player.su.upgrades.splice(i, 1); 
                        i--; 
                    }
                }
            },
            onHold() {
            },
            style: { ...smallClickable }
},
    },
    name: "Supernova", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "SN", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        stones: new EN(0),
        coal: new EN(0),
        iron: new EN(0),
        gold: new EN(0),
        diamond: new EN(0),
        ruby: new EN(0),
        emerald: new EN(0),
        amethyst: new EN(0),
        cobalt: new EN(0),
        crystal: new EN(0),
        crystaltiers: new EN(0),
        crystallevels: new EN(0),
        crystalstages: new EN(0),
        auto: false,
    }},
    color: "#FFB437",
    requires: new EN("3.333e33333"), // Can be a function that takes requirement increases into account
    resource: "Neutron Stars", // Name of prestige currency
    baseResource: "Medals", // Name of resource prestige is based on
    branches: ["re"],
    baseAmount() {return player.re.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN("10")
        if (hasAchievement('a', 237)) mult = mult.times(1.5)
        if (hasUpgrade('su', 15)) mult = mult.times(1.1)
        if (hasUpgrade('su', 25)) mult = mult.times(1.2)
        if (hasMilestone('su', 3)) mult = mult.times(1.25)
        if (hasUpgrade('re', 241)) mult = mult.times(2)
        if (hasUpgrade('su', 35)) mult = mult.times(1.5)
        if (hasUpgrade('re', 251)) mult = mult.times(3)
        if (hasUpgrade('su', 42)) mult = mult.times(upgradeEffect('su', 42))
        if (hasUpgrade('su', 45)) mult = mult.times(2)
        if (hasUpgrade('su', 53)) mult = mult.times(upgradeEffect('su', 53))
        if (hasUpgrade('re', 261)) mult = mult.times(4)
        if (hasUpgrade('re', 262)) mult = mult.times(5)
        if (player.su.stones.gte(1)) mult = mult.times(player.su.stones.max(1).pow(0.01))
        if (hasUpgrade('su', 72)) mult = mult.pow(1.5)
        if (hasUpgrade('su', 131)) mult = mult.times(upgradeEffect('su', 131))
        if (hasUpgrade('su', 172)) mult = mult.times(upgradeEffect('su', 172))
        if (hasUpgrade('su', 221)) mult = mult.times(upgradeEffect('su', 221))
        if (hasUpgrade('su', 271)) mult = mult.times(upgradeEffect('su', 271))
        if (hasUpgrade('su', 281)) mult = mult.pow(1.5)
        if (hasUpgrade('su', 321)) mult = mult.times(upgradeEffect('su', 321))
        if (hasUpgrade('su', 382)) mult = mult.times(upgradeEffect('su', 382))
        if (hasUpgrade('su', 403)) mult = mult.times(upgradeEffect('su', 403))
        if (hasUpgrade('su', 422)) mult = mult.times(upgradeEffect('su', 422))
        if (hasUpgrade('su', 432)) mult = mult.pow(upgradeEffect('su', 432))
        if (hasMilestone('su', 8)) mult = mult.pow(milestoneEffect('su', 8))
        return mult
    },
    
    effect2() {
        if (!hasUpgrade("su", 55))
            return new EN(1)
        let eff2 = EN.pow(1)
        if (hasUpgrade("su", 61)) eff2 = eff2.times(upgradeEffect("su", 61))
        if (hasUpgrade("su", 71)) eff2 = eff2.pow("1.5")
        if (hasUpgrade("su", 81)) eff2 = eff2.pow(upgradeEffect("su", 81))
        if (hasUpgrade("su", 91)) eff2 = eff2.pow("1.5")
        if (hasUpgrade("su", 92)) eff2 = eff2.times(upgradeEffect("su", 92))
        if (hasUpgrade("su", 91)) eff2 = eff2.pow("1.5")
        if (player.su.coal.gte(1)) eff2 = eff2.times(player.su.coal.max(1).pow(0.04))
        if (hasUpgrade("su", 132)) eff2 = eff2.pow("1.25")
        if (player.su.iron.gte(1)) eff2 = eff2.times(player.su.iron.max(1).pow(0.1))
        if (hasUpgrade("su", 181)) eff2 = eff2.pow("1.2")
        if (player.su.gold.gte(1)) eff2 = eff2.times(player.su.gold.max(1).pow(0.16))
        if (hasUpgrade("su", 231)) eff2 = eff2.pow("1.2")
        if (player.su.diamond.gte(1)) eff2 = eff2.times(player.su.diamond.max(1).pow(0.25))
        if (hasUpgrade("su", 281)) eff2 = eff2.pow("1.1")
        if (player.su.ruby.gte(1)) eff2 = eff2.times(player.su.ruby.max(1).pow(0.36))
        if (player.su.emerald.gte(1)) eff2 = eff2.times(player.su.emerald.max(1).pow(0.5))
        if (player.su.amethyst.gte(1)) eff2 = eff2.times(player.su.amethyst.max(1).pow(0.64))
        if (player.su.cobalt.gte(1)) eff2 = eff2.times(player.su.cobalt.max(1).pow(0.81))
        if (player.su.crystal.gte(1)) eff2 = eff2.pow(player.su.crystal.max(1).pow(1))
        return eff2;
    },
    update(diff) {
        if (player.su.buyables[29].gte(1)) {
            player.sa.challengepent = player.sa.challengepent.add(buyableEffect("su", 29).times(diff))}
        if (player.su.buyables[28].gte(1)) {
            player.sa.challengetet = player.sa.challengetet.add(buyableEffect("su", 28).times(diff))}
        if (player.su.buyables[27].gte(1)) {
            player.sa.challengeexp = player.sa.challengeexp.add(buyableEffect("su", 27).times(diff))}
        if (player.su.buyables[26].gte(1)) {
            player.sa.challengepower = player.sa.challengepower.add(buyableEffect("su", 26).times(diff))}
        if (player.su.buyables[25].gte(1)) {
            player.sa.challengepoint = player.sa.challengepoint.add(buyableEffect("su", 25).times(diff))}
        if (player.su.buyables[24].gte(1)) {
            player.su.crystalstages = player.su.crystalstages.add(buyableEffect("su", 24).times(diff))}
        if (player.su.buyables[23].gte(1)) {
            player.su.crystallevels = player.su.crystallevels.add(buyableEffect("su", 23).times(diff))}
        if (player.su.buyables[22].gte(1)) {
            player.su.crystaltiers = player.su.crystaltiers.add(buyableEffect("su", 22).times(diff))}
        if (player.su.buyables[21].gte(1)) {
            player.su.crystal = player.su.crystal.add(buyableEffect("su", 21).times(diff))}
        if (player.su.buyables[18].gte(1)) {
            player.su.cobalt = player.su.cobalt.add(buyableEffect("su", 18).times(diff))}
        if (player.su.buyables[17].gte(1)) {
            player.su.amethyst = player.su.amethyst.add(buyableEffect("su", 17).times(diff))}
        if (player.su.buyables[16].gte(1)) {
            player.su.emerald = player.su.emerald.add(buyableEffect("su", 16).times(diff))}
        if (player.su.buyables[15].gte(1)) {
            player.su.ruby = player.su.ruby.add(buyableEffect("su", 15).times(diff))}
        if (player.su.buyables[14].gte(1)) {
            player.su.diamond = player.su.diamond.add(buyableEffect("su", 14).times(diff))}
        if (player.su.buyables[13].gte(1)) {
            player.su.gold = player.su.gold.add(buyableEffect("su", 13).times(diff))}
        if (player.su.buyables[12].gte(1)) {
            player.su.iron = player.su.iron.add(buyableEffect("su", 12).times(diff))}
        if (player.su.buyables[11].gte(1)) {
            player.su.coal = player.su.coal.add(buyableEffect("su", 11).times(diff))}
        if (hasUpgrade("su", 55)) return player.su.stones = player.su.stones.add(tmp.su.effect2.times(diff))
        },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    hotkeys: [
        {key: "@", description: "Shift+@: Reset for supernova", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
layerShown(){return (hasUpgrade("re", 231) || player[this.layer].unlocked)},
    automate() {},
    milestones: {
        1: {
            requirementDescription: "1 Neutron Star",
            effectDescription: "Gain 100% of Medals on reset per second.",
            done() { return player.su.points.gte(1) }
    },
    2: {
        requirementDescription: "25 Total Neutron Stars",
        effectDescription: "Keep Reincarnation Milestones on reset.",
        done() { return player.su.total.gte(25) }
},
3: {
    requirementDescription: "100 Total Neutron Stars",
    effectDescription: "Gain 25% more Neutron Stars and autobuy juice upgrades.",
    done() { return player.su.total.gte(100) }
},
4: {
    requirementDescription: "500 Total Neutron Stars",
    effectDescription: "Keep Reincarnation Challenges on reset.",
    done() { return player.su.total.gte(500) }
},
5: {
    requirementDescription: "100,000 Total Neutron Stars",
    effectDescription: "Keep Reincarnation Upgrades on reset.",
    done() { return player.su.total.gte(1e5) }
},
6: {
    requirementDescription: "5 Crystal Resets",
    effectDescription: "Crystal Resets reset nothing.",
    done() { return getBuyableAmount("su", 21).gte("5")},
},
7: {
    requirementDescription: "e1.797e308 Total Neutron Stars",
    effectDescription: "Reincarnation Buyables are cubed!",
    done() { return player.su.total.gte("e1.797e308") }
},
8: {
    requirementDescription: "e1e9,000 Total Neutron Stars",
    effect() {
        let eff = player.su.crystal.pow(3)
        return eff
    },
    effectDescription() {
        return "Crystal also raises neutron star gain at a reduced rate.<br>Currently: ^"+format(milestoneEffect("su",8))+""}
        ,    done() { return player.su.total.gte("ee9000") }
        
    },
    9: {
        requirementDescription: "e1e1,000,000 Total Neutron Stars",
        effectDescription: "Crystal Tier is faster again and square crystal gain.",
        done() { return player.su.total.gte("eee6") }
    },
    },
})