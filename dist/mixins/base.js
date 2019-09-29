'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseMixin = function (_wepy$mixin) {
  _inherits(baseMixin, _wepy$mixin);

  function baseMixin() {
    _classCallCheck(this, baseMixin);

    return _possibleConstructorReturn(this, (baseMixin.__proto__ || Object.getPrototypeOf(baseMixin)).apply(this, arguments));
  }

  _createClass(baseMixin, [{
    key: 'noop',

    /**
     * [公共方法]
     * @param  {[type]}  item [description]
     * @return {Boolean}      [description]
     */
    value: function noop() {
      return null;
    }
  }, {
    key: 'hasOwn',
    value: function hasOwn(obj, type) {
      return Object.prototype.hasOwnProperty.call(obj, type);
    }

    /**
     * [isXXX 基础方法]
     * @param  {[type]}  item [description]
     * @return {Boolean}      [description]
     */

  }, {
    key: 'isUndefined',
    value: function isUndefined(item) {
      return typeof item === 'undefined';
    }
  }, {
    key: 'isDefined',
    value: function isDefined(item) {
      return !this.isUndefined(item);
    }
  }, {
    key: 'isString',
    value: function isString(item) {
      return typeof item === 'string';
    }
  }, {
    key: 'isNumber',
    value: function isNumber(item) {
      return typeof item === 'number';
    }
  }, {
    key: 'isArray',
    value: function isArray(item) {
      return Object.prototype.toString.apply(item) === '[object Array]';
    }
  }, {
    key: 'isObject',
    value: function isObject(item) {
      return (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' && !this.isArray(item);
    }
  }, {
    key: 'isFunction',
    value: function isFunction(item) {
      return typeof item === 'function';
    }

    /**
     * [getXXX 增强方法]
     * @param  {[type]}  item [description]
     * @return {Boolean}      [description]
     */

  }, {
    key: 'getString',
    value: function getString(item, defaultStr) {
      if (this.isString(item)) return item.trim();
      if (this.isNumber(item)) return ('' + item).trim();
      return defaultStr || '';
    }
  }, {
    key: 'getNumber',
    value: function getNumber(item, defaultNum) {
      var matches = this.getString(item).match(/\d+/);
      return this.isNumber(matches && +matches[0]) ? +matches[0] : defaultNum;
    }
  }, {
    key: 'getArray',
    value: function getArray(item, defaultArr) {
      return this.isArray(item) ? item : defaultArr || [];
    }
  }, {
    key: 'getObject',
    value: function getObject(item, defaultObj) {
      return this.isObject(item) ? item : defaultObj || {};
    }
  }, {
    key: 'getFunction',
    value: function getFunction(item) {
      return this.isFunction(item) ? item : noop;
    }

    /**
     * [JSON方法]
     * @param  {[type]}  item [description]
     * @return {Boolean}      [description]
     */

  }, {
    key: '$json',
    value: function $json(item) {
      var str = { type: Object.prototype.toString.call(item) };
      try {
        str = JSON.stringify(item);
      } catch (e) {
        str.error = e && e.stack || '';
      }
      return this.isString(str) ? str : this.$json(str);
    }
  }, {
    key: '$parse',
    value: function $parse(item) {
      var obj = { type: Object.prototype.toString.call(item) };
      try {
        obj = JSON.parse(item);
      } catch (e) {
        obj.error = e && e.stack || '';
      }
      return this.isObject(obj) ? obj : this.$parse(obj);
    }

    /**
     * [功能方法]
     * @param  {[type]}  item [description]
     * @return {Boolean}      [description]
     */

  }, {
    key: 'isPhone',
    value: function isPhone(str) {
      return (/^1\d{10}$/.test(str)
      );
    }
  }, {
    key: '$alert',
    value: function $alert() {
      var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '标题';
      var item2 = arguments[1];

      var param = this.isObject(item) ? Object.assign({
        // 首参数为obj
        title: 'title', content: 'content'
      }, item) : this.isString(item) ? this.isString(item2) ? {
        // 俩参数均为字符串
        title: item, content: item2
      } : {
        // 只有首参为字符串
        title: '', content: item
      } : {
        // 尝试转换字符串
        title: item.toString ? item.toString() : '参数异常'
      };
      wx.showModal(Object.assign({
        showCancel: false
      }, param));
    }
  }]);

  return baseMixin;
}(_wepy2.default.mixin);

exports.default = baseMixin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UuanMiXSwibmFtZXMiOlsiYmFzZU1peGluIiwib2JqIiwidHlwZSIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIml0ZW0iLCJpc1VuZGVmaW5lZCIsInRvU3RyaW5nIiwiYXBwbHkiLCJpc0FycmF5IiwiZGVmYXVsdFN0ciIsImlzU3RyaW5nIiwidHJpbSIsImlzTnVtYmVyIiwiZGVmYXVsdE51bSIsIm1hdGNoZXMiLCJnZXRTdHJpbmciLCJtYXRjaCIsImRlZmF1bHRBcnIiLCJkZWZhdWx0T2JqIiwiaXNPYmplY3QiLCJpc0Z1bmN0aW9uIiwibm9vcCIsInN0ciIsIkpTT04iLCJzdHJpbmdpZnkiLCJlIiwiZXJyb3IiLCJzdGFjayIsIiRqc29uIiwicGFyc2UiLCIkcGFyc2UiLCJ0ZXN0IiwiaXRlbTIiLCJwYXJhbSIsImFzc2lnbiIsInRpdGxlIiwiY29udGVudCIsInd4Iiwic2hvd01vZGFsIiwic2hvd0NhbmNlbCIsIm1peGluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7OztBQUNuQjs7Ozs7MkJBS087QUFDTCxhQUFPLElBQVA7QUFDRDs7OzJCQUNNQyxHLEVBQUtDLEksRUFBTTtBQUNoQixhQUFPQyxPQUFPQyxTQUFQLENBQWlCQyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUNMLEdBQXJDLEVBQTBDQyxJQUExQyxDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7O2dDQUtZSyxJLEVBQU07QUFDaEIsYUFBTyxPQUFPQSxJQUFQLEtBQWdCLFdBQXZCO0FBQ0Q7Ozs4QkFDU0EsSSxFQUFNO0FBQ2QsYUFBTyxDQUFDLEtBQUtDLFdBQUwsQ0FBaUJELElBQWpCLENBQVI7QUFDRDs7OzZCQUNRQSxJLEVBQU07QUFDYixhQUFPLE9BQU9BLElBQVAsS0FBZ0IsUUFBdkI7QUFDRDs7OzZCQUNRQSxJLEVBQU07QUFDYixhQUFPLE9BQU9BLElBQVAsS0FBZ0IsUUFB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QUFDaEQ7QUFDQUMsZUFBTyxPQUZ5QyxFQUVoQ0MsU0FBUztBQUZ1QixPQUFkLEVBR2pDaEMsSUFIaUMsQ0FBdEIsR0FHSCxLQUFLTSxRQUFMLENBQWNOLElBQWQsSUFBc0IsS0FBS00sUUFBTCxDQUFjc0IsS0FBZCxJQUF1QjtBQUN0RDtBQUNBRyxlQUFPL0IsSUFGK0MsRUFFekNnQyxTQUFTSjtBQUZnQyxPQUF2QixHQUc3QjtBQUNGO0FBQ0FHLGVBQU8sRUFGTCxFQUVTQyxTQUFTaEM7QUFGbEIsT0FITyxHQU1QO0FBQ0Y7QUFDQStCLGVBQU8vQixLQUFLRSxRQUFMLEdBQWdCRixLQUFLRSxRQUFMLEVBQWhCLEdBQWtDO0FBRnZDLE9BVEo7QUFhQStCLFNBQUdDLFNBQUgsQ0FBYXRDLE9BQU9rQyxNQUFQLENBQWM7QUFDekJLLG9CQUFZO0FBRGEsT0FBZCxFQUVWTixLQUZVLENBQWI7QUFHRDs7OztFQWpIb0MsZUFBS08sSzs7a0JBQXZCM0MsUyIsImZpbGUiOiJiYXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGJhc2VNaXhpbiBleHRlbmRzIHdlcHkubWl4aW4ge1xyXG4gIC8qKlxyXG4gICAqIFvlhazlhbHmlrnms5VdXHJcbiAgICogQHBhcmFtICB7W3R5cGVdfSAgaXRlbSBbZGVzY3JpcHRpb25dXHJcbiAgICogQHJldHVybiB7Qm9vbGVhbn0gICAgICBbZGVzY3JpcHRpb25dXHJcbiAgICovXHJcbiAgbm9vcCgpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuICBoYXNPd24ob2JqLCB0eXBlKSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgdHlwZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBbaXNYWFgg5Z+656GA5pa55rOVXVxyXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gIGl0ZW0gW2Rlc2NyaXB0aW9uXVxyXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICAgW2Rlc2NyaXB0aW9uXVxyXG4gICAqL1xyXG4gIGlzVW5kZWZpbmVkKGl0ZW0pIHtcclxuICAgIHJldHVybiB0eXBlb2YgaXRlbSA9PT0gJ3VuZGVmaW5lZCc7XHJcbiAgfVxyXG4gIGlzRGVmaW5lZChpdGVtKSB7XHJcbiAgICByZXR1cm4gIXRoaXMuaXNVbmRlZmluZWQoaXRlbSk7XHJcbiAgfVxyXG4gIGlzU3RyaW5nKGl0ZW0pIHtcclxuICAgIHJldHVybiB0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZyc7XHJcbiAgfVxyXG4gIGlzTnVtYmVyKGl0ZW0pIHtcclxuICAgIHJldHVybiB0eXBlb2YgaXRlbSA9PT0gJ251bWJlcic7XHJcbiAgfVxyXG4gIGlzQXJyYXkoaXRlbSkge1xyXG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuYXBwbHkoaXRlbSkgPT09ICdbb2JqZWN0IEFycmF5XSc7XHJcbiAgfVxyXG4gIGlzT2JqZWN0KGl0ZW0pIHtcclxuICAgIHJldHVybiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiYgIXRoaXMuaXNBcnJheShpdGVtKTtcclxuICB9XHJcbiAgaXNGdW5jdGlvbihpdGVtKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIGl0ZW0gPT09ICdmdW5jdGlvbic7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBbZ2V0WFhYIOWinuW8uuaWueazlV1cclxuICAgKiBAcGFyYW0gIHtbdHlwZV19ICBpdGVtIFtkZXNjcmlwdGlvbl1cclxuICAgKiBAcmV0dXJuIHtCb29sZWFufSAgICAgIFtkZXNjcmlwdGlvbl1cclxuICAgKi9cclxuICBnZXRTdHJpbmcoaXRlbSwgZGVmYXVsdFN0cikge1xyXG4gICAgaWYgKHRoaXMuaXNTdHJpbmcoaXRlbSkpIHJldHVybiBpdGVtLnRyaW0oKTtcclxuICAgIGlmICh0aGlzLmlzTnVtYmVyKGl0ZW0pKSByZXR1cm4gYCR7aXRlbX1gLnRyaW0oKTtcclxuICAgIHJldHVybiBkZWZhdWx0U3RyIHx8ICcnO1xyXG4gIH1cclxuICBnZXROdW1iZXIoaXRlbSwgZGVmYXVsdE51bSkge1xyXG4gICAgdmFyIG1hdGNoZXMgPSB0aGlzLmdldFN0cmluZyhpdGVtKS5tYXRjaCgvXFxkKy8pO1xyXG4gICAgcmV0dXJuIHRoaXMuaXNOdW1iZXIobWF0Y2hlcyAmJiArbWF0Y2hlc1swXSkgPyArbWF0Y2hlc1swXSA6IGRlZmF1bHROdW07XHJcbiAgfVxyXG4gIGdldEFycmF5KGl0ZW0sIGRlZmF1bHRBcnIpIHtcclxuICAgIHJldHVybiB0aGlzLmlzQXJyYXkoaXRlbSkgPyBpdGVtIDogKGRlZmF1bHRBcnIgfHwgW10pO1xyXG4gIH1cclxuICBnZXRPYmplY3QoaXRlbSwgZGVmYXVsdE9iaikge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNPYmplY3QoaXRlbSkgPyBpdGVtIDogKGRlZmF1bHRPYmogfHwge30pO1xyXG4gIH1cclxuICBnZXRGdW5jdGlvbihpdGVtKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0Z1bmN0aW9uKGl0ZW0pID8gaXRlbSA6IG5vb3A7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBbSlNPTuaWueazlV1cclxuICAgKiBAcGFyYW0gIHtbdHlwZV19ICBpdGVtIFtkZXNjcmlwdGlvbl1cclxuICAgKiBAcmV0dXJuIHtCb29sZWFufSAgICAgIFtkZXNjcmlwdGlvbl1cclxuICAgKi9cclxuICAkanNvbihpdGVtKSB7XHJcbiAgICBsZXQgc3RyID0ge3R5cGU6IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVtKX1cclxuICAgIHRyeSB7XHJcbiAgICAgIHN0ciA9IEpTT04uc3RyaW5naWZ5KGl0ZW0pXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHN0ci5lcnJvciA9IGUgJiYgZS5zdGFjayB8fCAnJ1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaXNTdHJpbmcoc3RyKSA/IHN0ciA6IHRoaXMuJGpzb24oc3RyKVxyXG4gIH1cclxuICAkcGFyc2UoaXRlbSkge1xyXG4gICAgbGV0IG9iaiA9IHt0eXBlOiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlbSl9XHJcbiAgICB0cnkge1xyXG4gICAgICBvYmogPSBKU09OLnBhcnNlKGl0ZW0pXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIG9iai5lcnJvciA9IGUgJiYgZS5zdGFjayB8fCAnJ1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaXNPYmplY3Qob2JqKSA/IG9iaiA6IHRoaXMuJHBhcnNlKG9iailcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFvlip/og73mlrnms5VdXHJcbiAgICogQHBhcmFtICB7W3R5cGVdfSAgaXRlbSBbZGVzY3JpcHRpb25dXHJcbiAgICogQHJldHVybiB7Qm9vbGVhbn0gICAgICBbZGVzY3JpcHRpb25dXHJcbiAgICovXHJcbiAgaXNQaG9uZShzdHIpIHtcclxuICAgIHJldHVybiAvXjFcXGR7MTB9JC8udGVzdChzdHIpXHJcbiAgfVxyXG4gICRhbGVydChpdGVtID0gJ+agh+mimCcsIGl0ZW0yKSB7XHJcbiAgICBjb25zdCBwYXJhbSA9IHRoaXMuaXNPYmplY3QoaXRlbSkgPyBPYmplY3QuYXNzaWduKHtcclxuICAgICAgLy8g6aaW5Y+C5pWw5Li6b2JqXHJcbiAgICAgIHRpdGxlOiAndGl0bGUnLCBjb250ZW50OiAnY29udGVudCdcclxuICAgIH0sIGl0ZW0pIDogdGhpcy5pc1N0cmluZyhpdGVtKSA/IHRoaXMuaXNTdHJpbmcoaXRlbTIpID8ge1xyXG4gICAgICAvLyDkv6nlj4LmlbDlnYfkuLrlrZfnrKbkuLJcclxuICAgICAgdGl0bGU6IGl0ZW0sIGNvbnRlbnQ6IGl0ZW0yXHJcbiAgICB9IDoge1xyXG4gICAgICAvLyDlj6rmnInpppblj4LkuLrlrZfnrKbkuLJcclxuICAgICAgdGl0bGU6ICcnLCBjb250ZW50OiBpdGVtXHJcbiAgICB9IDoge1xyXG4gICAgICAvLyDlsJ3or5XovazmjaLlrZfnrKbkuLJcclxuICAgICAgdGl0bGU6IGl0ZW0udG9TdHJpbmcgPyBpdGVtLnRvU3RyaW5nKCkgOiAn5Y+C5pWw5byC5bi4J1xyXG4gICAgfVxyXG4gICAgd3guc2hvd01vZGFsKE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICBzaG93Q2FuY2VsOiBmYWxzZVxyXG4gICAgfSwgcGFyYW0pKVxyXG4gIH1cclxufVxyXG4iXX0=