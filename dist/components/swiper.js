'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _base = require('./../mixins/base.js');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchBar = function (_wepy$component) {
  _inherits(SearchBar, _wepy$component);

  function SearchBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SearchBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default], _this.props = {
      list: {
        type: Object,
        default: []
      },
      height: {
        type: [String, Number],
        default: '240rpx'
      },
      dots: {
        type: Boolean,
        default: true
      }
    }, _this.data = {
      autoplay: true,
      indicatorColor: 'rgba(255, 255, 255, 0.6)',
      indicatorActiveColor: 'rgba(255, 255, 255, 1)'
    }, _this.computed = {
      indicatorDots: function indicatorDots() {
        return Boolean(this.list.length > 1 && this.dots);
      },
      style_height: function style_height() {
        var h = this.height;
        return this.isNumber(+h) ? h + 'rpx' : this.isMatchHeight(h) ? h : '240rpx';
      }
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SearchBar, [{
    key: 'isMatchHeight',
    value: function isMatchHeight(str) {
      return this.isString(str) ? /\d+(r?px|em)$/.test(str) : false;
    }
  }]);

  return SearchBar;
}(_wepy2.default.component);

exports.default = SearchBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3aXBlci5qcyJdLCJuYW1lcyI6WyJTZWFyY2hCYXIiLCJtaXhpbnMiLCJwcm9wcyIsImxpc3QiLCJ0eXBlIiwiT2JqZWN0IiwiZGVmYXVsdCIsImhlaWdodCIsIlN0cmluZyIsIk51bWJlciIsImRvdHMiLCJCb29sZWFuIiwiZGF0YSIsImF1dG9wbGF5IiwiaW5kaWNhdG9yQ29sb3IiLCJpbmRpY2F0b3JBY3RpdmVDb2xvciIsImNvbXB1dGVkIiwiaW5kaWNhdG9yRG90cyIsImxlbmd0aCIsInN0eWxlX2hlaWdodCIsImgiLCJpc051bWJlciIsImlzTWF0Y2hIZWlnaHQiLCJtZXRob2RzIiwic3RyIiwiaXNTdHJpbmciLCJ0ZXN0IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsTSxHQUFTLGdCLFFBQ1RDLEssR0FBUTtBQUNOQyxZQUFNO0FBQ0pDLGNBQU1DLE1BREY7QUFFSkMsaUJBQVM7QUFGTCxPQURBO0FBS05DLGNBQVE7QUFDTkgsY0FBTSxDQUFDSSxNQUFELEVBQVNDLE1BQVQsQ0FEQTtBQUVOSCxpQkFBUztBQUZILE9BTEY7QUFTTkksWUFBTTtBQUNKTixjQUFNTyxPQURGO0FBRUpMLGlCQUFTO0FBRkw7QUFUQSxLLFFBZVJNLEksR0FBTztBQUNMQyxnQkFBVSxJQURMO0FBRUxDLHNCQUFnQiwwQkFGWDtBQUdMQyw0QkFBc0I7QUFIakIsSyxRQU1QQyxRLEdBQVc7QUFDVEMsbUJBRFMsMkJBQ087QUFDZCxlQUFPTixRQUFRLEtBQUtSLElBQUwsQ0FBVWUsTUFBVixHQUFtQixDQUFuQixJQUF3QixLQUFLUixJQUFyQyxDQUFQO0FBQ0QsT0FIUTtBQUlUUyxrQkFKUywwQkFJTTtBQUNiLFlBQU1DLElBQUksS0FBS2IsTUFBZjtBQUNBLGVBQU8sS0FBS2MsUUFBTCxDQUFjLENBQUNELENBQWYsSUFBdUJBLENBQXZCLFdBQWdDLEtBQUtFLGFBQUwsQ0FBbUJGLENBQW5CLElBQXdCQSxDQUF4QixHQUE0QixRQUFuRTtBQUNEO0FBUFEsSyxRQVVYRyxPLEdBQVUsRTs7Ozs7a0NBR0lDLEcsRUFBSztBQUNqQixhQUFPLEtBQUtDLFFBQUwsQ0FBY0QsR0FBZCxJQUFxQixnQkFBZ0JFLElBQWhCLENBQXFCRixHQUFyQixDQUFyQixHQUFpRCxLQUF4RDtBQUNEOzs7O0VBdENvQyxlQUFLRyxTOztrQkFBdkIzQixTIiwiZmlsZSI6InN3aXBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IGJhc2UgZnJvbSAnLi4vbWl4aW5zL2Jhc2UuanMnXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaEJhciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgIG1peGlucyA9IFtiYXNlXVxyXG4gICAgcHJvcHMgPSB7XHJcbiAgICAgIGxpc3Q6IHtcclxuICAgICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgICAgZGVmYXVsdDogW11cclxuICAgICAgfSxcclxuICAgICAgaGVpZ2h0OiB7XHJcbiAgICAgICAgdHlwZTogW1N0cmluZywgTnVtYmVyXSxcclxuICAgICAgICBkZWZhdWx0OiAnMjQwcnB4J1xyXG4gICAgICB9LFxyXG4gICAgICBkb3RzOiB7XHJcbiAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICBkZWZhdWx0OiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgaW5kaWNhdG9yQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiknLFxyXG4gICAgICBpbmRpY2F0b3JBY3RpdmVDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknXHJcbiAgICB9XHJcblxyXG4gICAgY29tcHV0ZWQgPSB7XHJcbiAgICAgIGluZGljYXRvckRvdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5saXN0Lmxlbmd0aCA+IDEgJiYgdGhpcy5kb3RzKVxyXG4gICAgICB9LFxyXG4gICAgICBzdHlsZV9oZWlnaHQoKSB7XHJcbiAgICAgICAgY29uc3QgaCA9IHRoaXMuaGVpZ2h0XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNOdW1iZXIoK2gpID8gYCR7aH1ycHhgIDogdGhpcy5pc01hdGNoSGVpZ2h0KGgpID8gaCA6ICcyNDBycHgnXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgfVxyXG5cclxuICAgIGlzTWF0Y2hIZWlnaHQoc3RyKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmlzU3RyaW5nKHN0cikgPyAvXFxkKyhyP3B4fGVtKSQvLnRlc3Qoc3RyKSA6IGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=