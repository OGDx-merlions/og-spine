(function() {
  Polymer({
    is: 'og-spine',
    properties: {
      spineDefaults: {
          type: Object,
          value: {
              "wellcount": 208,
              "liquid": "289488",
              "oil": "144636",
              "gas": "30008",
              "water": "144852"
          }
      },
      wellCountDef: {
          type: String,
          value: function() {
              return this.properties.spineDefaults.value.wellcount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          }
      },
      liquidDef: {
          type: String,
          value: function() {
              return this.properties.spineDefaults.value.liquid.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          }
      },
      oilDef: {
          type: String,
          value: function() {
              return this.properties.spineDefaults.value.oil.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          }
      },
      gasDef: {
          type: String,
          value: function() {
              return this.properties.spineDefaults.value.gas.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          }
      },
      waterDef: {
          type: String,
          value: function() {
              return this.properties.spineDefaults.value.water.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          }
      },
      oilData: {
        type: Object,
        value: function() {
          return {
            "points": [[1,1], [2,3], [3,2], [4,3], [5,8]]
          }
        }
      },
      waterData: {
        type: Object,
        value: function() {
          return {
            "points": [[1,3], [2,1], [3,3], [4,4], [5,3]]
          }
        }
      },
      gasData: {
        type: Object,
        value: function() {
          return {
            "points": [[1,2], [2,4], [3,1], [4,2], [5,8]]
          }
        }
      },
      liquidData: {
        type: Object,
        value: function() {
          return {
            "points": [[1,1], [2,2], [3,4], [4,2], [5,5]]
          }
        }
      },
      toggleGasRep: {
        type: Boolean,
        value: false
      },
      toggleOilRep: {
        type: Boolean,
        value: false
      },
      toggleWaterRep: {
        type: Boolean,
        value: false
      },
      toggleLiquidRep: {
        type: Boolean,
        value: false
      },
      spineTopDefaults: {
          type: Object,
          value: {
              "liquid": {"default": "15009", "group": "1400", "item": 120},
              "oil": {"default": "2302", "group": 320, "item": 18},
              "gas": {"default": "3003", "group": 445, "item": 55},
              "water": {"default": "1305", "group": 150, "item": 25},
              "alerts": {"default": {"low": 10, "high": 76}, "group": {"low": 8, "high": 10}, "item": {"low": 2, "high": 7}},
              "cases": {"default": {"low": 75, "high": 98}, "group": {"low": 53, "high": 72}, "item": {"low": 27, "high": 49}}
          }
      },
      liqTopDef: {
          type: String,
          value: function() {
              return this.properties.spineTopDefaults.value.liquid.default.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          }
      },
      oilTopDef: {
          type: String,
          value: function() {
              return this.properties.spineTopDefaults.value.oil.default.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          }
      },
      gasTopDef: {
          type: String,
          value: function() {
              return this.properties.spineTopDefaults.value.gas.default.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          }
      },
      waterTopDef: {
          type: String,
          value: function() {
              return this.properties.spineTopDefaults.value.water.default.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          }
      },
      alerTopLowDef: {
          type: String,
          value: function() {
              return this.properties.spineTopDefaults.value.alerts.default.low.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          }
      },
      alerTopHigDef: {
          type: String,
          value: function() {
              return this.properties.spineTopDefaults.value.alerts.default.high.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          }
      },
      casesTopLowDef: {
          type: String,
          value: function() {
              return this.properties.spineTopDefaults.value.cases.default.low.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          }
      },
      casesTopHigDef: {
          type: String,
          value: function() {
              return this.properties.spineTopDefaults.value.cases.default.high.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          }
      }
    },
    ready: function() {
    },
    handleGasRepHover: function() {
      if(!this.isGasRepPinned) {
        this.set('toggleGasRep', !this.toggleGasRep);
      }
    },
    pinGasRep: function() {
      this.set('isGasRepPinned', !this.isGasRepPinned);
    },
    handleOilRepHover: function() {
      if(!this.isOilRepPinned) {
        this.set('toggleOilRep', !this.toggleOilRep);
      }
    },
    pinOilRep: function() {
      this.set('isOilRepPinned', !this.isOilRepPinned);
    },
    handleWaterRepHover: function() {
      if(!this.isWaterRepPinned) {
        this.set('toggleWaterRep', !this.toggleWaterRep);
      }
    },
    pinWaterRep: function() {
      this.set('isWaterRepPinned', !this.isWaterRepPinned);
    },
    handleLiquidRepHover: function() {
      if(!this.isLiquidRepPinned) {
        this.set('toggleLiquidRep', !this.toggleLiquidRep);
      }
    },
    pinLiquidRep: function() {
      this.set('isLiquidRepPinned', !this.isLiquidRepPinned);
    },
    updateSpineTopValues: function(type) {
        this.set('liqTopDef', this.properties.spineTopDefaults.value.liquid[type].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        this.set('oilTopDef', this.properties.spineTopDefaults.value.oil[type].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        this.set('gasTopDef', this.properties.spineTopDefaults.value.gas[type].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        this.set('waterTopDef', this.properties.spineTopDefaults.value.water[type].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        this.set('alerTopLowDef', this.properties.spineTopDefaults.value.alerts[type].low.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        this.set('alerTopHigDef', this.properties.spineTopDefaults.value.alerts[type].high.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        this.set('casesTopLowDef', this.properties.spineTopDefaults.value.cases[type].low.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        this.set('casesTopHigDef', this.properties.spineTopDefaults.value.cases[type].high.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    },
    _gotoHome: function() {
      this.fire('refresh-page');
    }
  });
})();
