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
      col: {
        type: [String, Number],
        default: 6
      }
    }, _this.data = {}, _this.computed = {
      style_width: function style_width() {
        var col = this.col;
        return this.getPercent(this.isNumber(+col) ? 1 / +col : 0.25);
      }
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SearchBar, [{
    key: 'getPercent',
    value: function getPercent(num) {
      return this.isNumber(num) ? num * 100 + '%' : '0%';
    }
  }]);

  return SearchBar;
}(_wepy2.default.component);

exports.default = SearchBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LmpzIl0sIm5hbWVzIjpbIlNlYXJjaEJhciIsIm1peGlucyIsInByb3BzIiwibGlzdCIsInR5cGUiLCJPYmplY3QiLCJkZWZhdWx0IiwiY29sIiwiU3RyaW5nIiwiTnVtYmVyIiwiZGF0YSIsImNvbXB1dGVkIiwic3R5bGVfd2lkdGgiLCJnZXRQZXJjZW50IiwiaXNOdW1iZXIiLCJtZXRob2RzIiwibnVtIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsTSxHQUFTLGdCLFFBQ1RDLEssR0FBUTtBQUNOQyxZQUFNO0FBQ0pDLGNBQU1DLE1BREY7QUFFSkMsaUJBQVM7QUFGTCxPQURBO0FBS05DLFdBQUs7QUFDSEgsY0FBTSxDQUFDSSxNQUFELEVBQVNDLE1BQVQsQ0FESDtBQUVISCxpQkFBUztBQUZOO0FBTEMsSyxRQVdSSSxJLEdBQU8sRSxRQUdQQyxRLEdBQVc7QUFDVEMsaUJBRFMseUJBQ0s7QUFDWixZQUFNTCxNQUFNLEtBQUtBLEdBQWpCO0FBQ0EsZUFBTyxLQUFLTSxVQUFMLENBQWdCLEtBQUtDLFFBQUwsQ0FBYyxDQUFDUCxHQUFmLElBQXNCLElBQUssQ0FBQ0EsR0FBNUIsR0FBbUMsSUFBbkQsQ0FBUDtBQUNEO0FBSlEsSyxRQU9YUSxPLEdBQVUsRTs7Ozs7K0JBR0NDLEcsRUFBSztBQUNkLGFBQU8sS0FBS0YsUUFBTCxDQUFjRSxHQUFkLElBQXdCQSxNQUFNLEdBQTlCLFNBQXVDLElBQTlDO0FBQ0Q7Ozs7RUE1Qm9DLGVBQUtDLFM7O2tCQUF2QmpCLFMiLCJmaWxlIjoiY2F0ZWdvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBiYXNlIGZyb20gJy4uL21peGlucy9iYXNlLmpzJ1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hCYXIgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgICBtaXhpbnMgPSBbYmFzZV1cclxuICAgIHByb3BzID0ge1xyXG4gICAgICBsaXN0OiB7XHJcbiAgICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICAgIGRlZmF1bHQ6IFtdXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbDoge1xyXG4gICAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXHJcbiAgICAgICAgZGVmYXVsdDogNlxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgIH1cclxuXHJcbiAgICBjb21wdXRlZCA9IHtcclxuICAgICAgc3R5bGVfd2lkdGgoKSB7XHJcbiAgICAgICAgY29uc3QgY29sID0gdGhpcy5jb2xcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQZXJjZW50KHRoaXMuaXNOdW1iZXIoK2NvbCkgPyAxIC8gKCtjb2wpIDogMC4yNSlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGVyY2VudChudW0pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaXNOdW1iZXIobnVtKSA/IGAke251bSAqIDEwMH0lYCA6ICcwJSdcclxuICAgIH1cclxuICB9XHJcbiJdfQ==