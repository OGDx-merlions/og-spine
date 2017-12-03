'use strict';(function(){Polymer({is:'og-spine',behaviors:[Polymer.IronResizableBehavior],listeners:{'iron-resize':'_onIronResize'},properties:{/**
       * Path to Logo
       * @property logo
       */logo:String,/**
       * Path to Avatar
       * @property avatar
       */avatar:String,/**
       * Array of Spine items of the format
       * [{
       *  label: "Well Count"
       * }, {
       *  label: "Liquid",
       *  unit: "bbl/day",
       *  hideInDevices: ['min-width:1000px'],
       *  sparklineConfig: {
       *    width: "125"
            height: "75"
            lineWidth: "3"
            lineColor: "#e9a24b"
            axisColor: "#677e8c"
            axisWidth: "1.5"
            curPositionRadius: "4"
            curPositionColor: "red"
       *  },
       *  valueFormatter: function(val) {
       *    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
       *  }
       * }...]
       * @property items
       */items:{type:Array,value:function value(){return[]},observer:'onItemsChange'},/**
       * Array of alerts of the format
       * [{
       *  type: 'high',
       *  label: 'ESP Alert',
       *  subtitle: 'Midland Well 2F'
       * }, {
       *  type: 'medium',
       *  label: 'Pump Alert',
       *  subtitle: 'Goose Creek Well 3B'
       * }...]
       * @property alertsAndCases
       */alertsAndCases:{type:Array,value:function value(){return[]}},/**
       * Array of Spine item data
       * [{
       *   value: '280'
       * }, {
       *   value: '289488'
       *   trend: {
       *    value: '15009'
       *    direction: 'up'
       *   },
       *   sparkline: {
       *     value: [[1,1],[2,2],[3,4],[4,2],[5,5]],
       *     cursorPosition: [2,2] 
       *   }
       * }, {
       *   value: '144344'
       *   trend: {
       *    value: '3229'
       *    direction: 'down'
       *   }
       * }...]
       * @property data
       */data:{type:Array,value:function value(){return[]},observer:'_onDataChange'}},ready:function ready(){},onItemsChange:function onItemsChange(newItems,oldItems){this._processItems(newItems)},_processItems:function _processItems(items){var _this=this;if(items&&items.length){items.forEach(function(_item,idx){if(_item.hideInDevices&&_item.hideInDevices.length){_item.hideInDevices.every(function(_mediaQuery){if(_mediaQuery&&window.matchMedia(_mediaQuery).matches){_this.set('items.'+idx+'.show',false);return false}else{_this.set('items.'+idx+'.show',true);return true}})}else{_this.set('items.'+idx+'.show',true)}});this._onDataChange(this.data)}},_onDataChange:function _onDataChange(newVal,oldVal){var _this2=this;if(newVal&&this.items){newVal.forEach(function(_itemData,idx){var formatter=_this2.items[idx].valueFormatter||_this2.defaultValueFormatter;_itemData.value=formatter(_itemData.value);if(_itemData&&_itemData.trend){_itemData.trend.value=formatter(_itemData.trend.value);if(_itemData.trend.direction==='up'){_itemData.trend.color='#7fae1b'}else{_itemData.trend.color='#d67577'}}});if(this.items){this.items.forEach(function(_item,idx){if(newVal.length>idx){_item.data=newVal[idx]};_item.toggleSparkline=false})}this.notifyPath('items.*')}},getKpiState:function getKpiState(idx){return this.items[idx].toggleSparkline},fireLogoTap:function fireLogoTap(){this.fire('logo-tapped')},fireAlertAvatarTapEvent:function fireAlertAvatarTapEvent(event){this.fire('alert-avatar-section-tapped',event)},handleKpiTap:function handleKpiTap(event){var idx=event.model.get('idx');if(!this.items[idx].sparklineConfig){return}this.set('items.'+idx+'.toggleSparkline',!this.items[idx].toggleSparkline);this.notifyPath('items.'+idx+'.toggleSparkline')},defaultValueFormatter:function defaultValueFormatter(val){if(parseInt(val)){return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')}return val},_hasData:function _hasData(alerts){return alerts.length>0},_isHighProrityAlert:function _isHighProrityAlert(type){return type==='high'},_isMediumProrityAlert:function _isMediumProrityAlert(type){return type==='medium'},_isCase:function _isCase(type){return type==='case'},_onIronResize:function _onIronResize(){if(this.items){var arr=this.splice('items',0);this.set('items',arr)}}})})();
//# sourceMappingURL=og-spine.js.map
