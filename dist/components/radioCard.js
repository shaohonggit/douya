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

var radioCard = function (_wepy$component) {
  _inherits(radioCard, _wepy$component);

  function radioCard() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, radioCard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = radioCard.__proto__ || Object.getPrototypeOf(radioCard)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default], _this.props = {
      list: {
        twoWay: true,
        type: Object,
        default: []
      },
      value: {
        twoWay: true,
        type: [String, Number],
        default: ''
      },
      key: {
        type: String,
        default: 'value'
      }
    }, _this.data = {
      unique: Math.random().toString(36).substring(2)
    }, _this.computed = {
      lists: function lists() {
        // 初始化已选项
        /* ============== 此处做法并不适合，但目前找不到拿到真正list的地方了 ============== */
        var value = this.getString(this.value);
        for (var i = 0; i < this.list.length; i++) {
          if (this.isValueEqual(value, this.list[i][this.key])) {
            this.list[i].checked = true;
          }
        }
      }
    }, _this.methods = {
      radioChange: function radioChange(e) {
        console.log('radio发生change事件，携带value值为：', e.detail.value);
        var value = e.detail.value;
        for (var i = 0; i < this.list.length; i++) {
          if (this.isValueEqual(value, this.list[i][this.key])) {
            this.list[i].checked = true;
            this.value = this.list[i][this.key];
          } else {
            this.list[i].checked = false;
          }
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(radioCard, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'isValueEqual',
    value: function isValueEqual(a, b) {
      return this.getString(a) === this.getString(b);
    }
  }]);

  return radioCard;
}(_wepy2.default.component);

exports.default = radioCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhZGlvQ2FyZC5qcyJdLCJuYW1lcyI6WyJyYWRpb0NhcmQiLCJtaXhpbnMiLCJwcm9wcyIsImxpc3QiLCJ0d29XYXkiLCJ0eXBlIiwiT2JqZWN0IiwiZGVmYXVsdCIsInZhbHVlIiwiU3RyaW5nIiwiTnVtYmVyIiwia2V5IiwiZGF0YSIsInVuaXF1ZSIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsImNvbXB1dGVkIiwibGlzdHMiLCJnZXRTdHJpbmciLCJpIiwibGVuZ3RoIiwiaXNWYWx1ZUVxdWFsIiwiY2hlY2tlZCIsIm1ldGhvZHMiLCJyYWRpb0NoYW5nZSIsImUiLCJjb25zb2xlIiwibG9nIiwiZGV0YWlsIiwiYSIsImIiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxNLEdBQVMsZ0IsUUFDVEMsSyxHQUFRO0FBQ05DLFlBQU07QUFDSkMsZ0JBQVEsSUFESjtBQUVKQyxjQUFNQyxNQUZGO0FBR0pDLGlCQUFTO0FBSEwsT0FEQTtBQU1OQyxhQUFPO0FBQ0xKLGdCQUFRLElBREg7QUFFTEMsY0FBTSxDQUFDSSxNQUFELEVBQVNDLE1BQVQsQ0FGRDtBQUdMSCxpQkFBUztBQUhKLE9BTkQ7QUFXTkksV0FBSztBQUNITixjQUFNSSxNQURIO0FBRUhGLGlCQUFTO0FBRk47QUFYQyxLLFFBaUJSSyxJLEdBQU87QUFDTEMsY0FBUUMsS0FBS0MsTUFBTCxHQUFjQyxRQUFkLENBQXVCLEVBQXZCLEVBQTJCQyxTQUEzQixDQUFxQyxDQUFyQztBQURILEssUUFPUEMsUSxHQUFXO0FBQ1RDLFdBRFMsbUJBQ0Q7QUFDTjtBQUNBO0FBQ0EsWUFBTVgsUUFBUSxLQUFLWSxTQUFMLENBQWUsS0FBS1osS0FBcEIsQ0FBZDtBQUNBLGFBQUssSUFBSWEsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUtsQixJQUFMLENBQVVtQixNQUE5QixFQUFzQ0QsR0FBdEMsRUFBMkM7QUFDekMsY0FBSSxLQUFLRSxZQUFMLENBQWtCZixLQUFsQixFQUF5QixLQUFLTCxJQUFMLENBQVVrQixDQUFWLEVBQWEsS0FBS1YsR0FBbEIsQ0FBekIsQ0FBSixFQUFzRDtBQUNwRCxpQkFBS1IsSUFBTCxDQUFVa0IsQ0FBVixFQUFhRyxPQUFiLEdBQXVCLElBQXZCO0FBQ0Q7QUFDRjtBQUNGO0FBVlEsSyxRQWFYQyxPLEdBQVU7QUFDUkMsaUJBRFEsdUJBQ0lDLENBREosRUFDTztBQUNiQyxnQkFBUUMsR0FBUixDQUFZLDRCQUFaLEVBQTBDRixFQUFFRyxNQUFGLENBQVN0QixLQUFuRDtBQUNBLFlBQUlBLFFBQVFtQixFQUFFRyxNQUFGLENBQVN0QixLQUFyQjtBQUNBLGFBQUssSUFBSWEsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUtsQixJQUFMLENBQVVtQixNQUE5QixFQUFzQ0QsR0FBdEMsRUFBMkM7QUFDekMsY0FBSSxLQUFLRSxZQUFMLENBQWtCZixLQUFsQixFQUF5QixLQUFLTCxJQUFMLENBQVVrQixDQUFWLEVBQWEsS0FBS1YsR0FBbEIsQ0FBekIsQ0FBSixFQUFzRDtBQUNwRCxpQkFBS1IsSUFBTCxDQUFVa0IsQ0FBVixFQUFhRyxPQUFiLEdBQXVCLElBQXZCO0FBQ0EsaUJBQUtoQixLQUFMLEdBQWEsS0FBS0wsSUFBTCxDQUFVa0IsQ0FBVixFQUFhLEtBQUtWLEdBQWxCLENBQWI7QUFDRCxXQUhELE1BR087QUFDTCxpQkFBS1IsSUFBTCxDQUFVa0IsQ0FBVixFQUFhRyxPQUFiLEdBQXVCLEtBQXZCO0FBQ0Q7QUFDRjtBQUNGO0FBWk8sSzs7Ozs7NkJBaEJELENBQ1I7OztpQ0E4QllPLEMsRUFBR0MsQyxFQUFHO0FBQ2pCLGFBQU8sS0FBS1osU0FBTCxDQUFlVyxDQUFmLE1BQXNCLEtBQUtYLFNBQUwsQ0FBZVksQ0FBZixDQUE3QjtBQUNEOzs7O0VBeERvQyxlQUFLQyxTOztrQkFBdkJqQyxTIiwiZmlsZSI6InJhZGlvQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IGJhc2UgZnJvbSAnLi4vbWl4aW5zL2Jhc2UuanMnXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHJhZGlvQ2FyZCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgIG1peGlucyA9IFtiYXNlXVxyXG4gICAgcHJvcHMgPSB7XHJcbiAgICAgIGxpc3Q6IHtcclxuICAgICAgICB0d29XYXk6IHRydWUsXHJcbiAgICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICAgIGRlZmF1bHQ6IFtdXHJcbiAgICAgIH0sXHJcbiAgICAgIHZhbHVlOiB7XHJcbiAgICAgICAgdHdvV2F5OiB0cnVlLFxyXG4gICAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXHJcbiAgICAgICAgZGVmYXVsdDogJydcclxuICAgICAgfSxcclxuICAgICAga2V5OiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHQ6ICd2YWx1ZSdcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIHVuaXF1ZTogTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIpXHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXB1dGVkID0ge1xyXG4gICAgICBsaXN0cygpIHtcclxuICAgICAgICAvLyDliJ3lp4vljJblt7LpgInpoblcclxuICAgICAgICAvKiA9PT09PT09PT09PT09PSDmraTlpITlgZrms5XlubbkuI3pgILlkIjvvIzkvYbnm67liY3mib7kuI3liLDmi7/liLDnnJ/mraNsaXN055qE5Zyw5pa55LqGID09PT09PT09PT09PT09ICovXHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFN0cmluZyh0aGlzLnZhbHVlKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5saXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5pc1ZhbHVlRXF1YWwodmFsdWUsIHRoaXMubGlzdFtpXVt0aGlzLmtleV0pKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdFtpXS5jaGVja2VkID0gdHJ1ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIHJhZGlvQ2hhbmdlKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygncmFkaW/lj5HnlJ9jaGFuZ2Xkuovku7bvvIzmkLrluKZ2YWx1ZeWAvOS4uu+8micsIGUuZGV0YWlsLnZhbHVlKVxyXG4gICAgICAgIHZhciB2YWx1ZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGlmICh0aGlzLmlzVmFsdWVFcXVhbCh2YWx1ZSwgdGhpcy5saXN0W2ldW3RoaXMua2V5XSkpIHtcclxuICAgICAgICAgICAgdGhpcy5saXN0W2ldLmNoZWNrZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmxpc3RbaV1bdGhpcy5rZXldXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RbaV0uY2hlY2tlZCA9IGZhbHNlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaXNWYWx1ZUVxdWFsKGEsIGIpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nKGEpID09PSB0aGlzLmdldFN0cmluZyhiKVxyXG4gICAgfVxyXG4gIH1cclxuIl19