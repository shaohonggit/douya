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

var checkboxButton = function (_wepy$component) {
  _inherits(checkboxButton, _wepy$component);

  function checkboxButton() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, checkboxButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = checkboxButton.__proto__ || Object.getPrototypeOf(checkboxButton)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default], _this.props = {
      list: {
        twoWay: true,
        type: Object,
        default: []
      },
      value: {
        twoWay: true,
        type: [Array, String, Number],
        default: ''
      },
      col: {
        type: [String, Number],
        default: 4
      },
      gutter: {
        type: [String, Number],
        default: 16
      },
      unit: {
        type: String,
        default: 'rpx'
      },
      title: {
        type: String,
        default: ''
      }
    }, _this.data = {
      unique: Math.random().toString(36).substring(2)
    }, _this.computed = {
      hasTitle: function hasTitle() {
        return this.isDefined(this.title);
      },
      style_width: function style_width() {
        var col = this.col;
        return this.getPercent(1 / this.getNumber(col, 4));
      },
      style_gutter: function style_gutter() {
        var gutter = this.gutter;
        return this.getGutter(this.getNumber(gutter, 16), this.unit);
      },
      style_gutter_edge: function style_gutter_edge() {
        var gutter = this.gutter;
        var col = this.getNumber(this.col, 4);
        var edge = (col - 1) * this.getNumber(gutter, 16) / col;
        return this.getGutter(-edge, this.unit);
      }
    }, _this.methods = {
      checkboxChange: function checkboxChange(e) {
        var valueArr = e.detail.value;
        for (var i = 0; i < this.list.length; i++) {
          if (this.isValueEqual(valueArr, this.list[i].value)) {
            this.list[i].checked = true;
            this.value = valueArr;
          } else {
            this.list[i].checked = false;
          }
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(checkboxButton, [{
    key: 'onLoad',
    value: function onLoad() {
      var _this2 = this;

      // 使组件在父组件之后lond
      setTimeout(function () {
        _this2.initCheckBox();
      });
    }
  }, {
    key: 'initCheckBox',
    value: function initCheckBox() {
      // 初始化已选项
      var value = this.getString(this.value);
      for (var i = 0; i < this.list.length; i++) {
        if (this.isValueEqual(value, this.list[i].value)) {
          this.list[i].checked = true;
        }
      }
    }
  }, {
    key: 'isValueEqual',
    value: function isValueEqual(a, b) {
      return this.getArray(a).indexOf(this.getString(b)) > -1;
    }
  }, {
    key: 'getPercent',
    value: function getPercent(num) {
      return this.isNumber(num) ? num * 100 + '%' : '0%';
    }
  }, {
    key: 'getGutter',
    value: function getGutter(num, unit) {
      return this.isNumber(num) ? '' + num + (unit || 'rpx') : '16rpx';
    }
  }]);

  return checkboxButton;
}(_wepy2.default.component);

exports.default = checkboxButton;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrYm94QnV0dG9uLmpzIl0sIm5hbWVzIjpbImNoZWNrYm94QnV0dG9uIiwibWl4aW5zIiwicHJvcHMiLCJsaXN0IiwidHdvV2F5IiwidHlwZSIsIk9iamVjdCIsImRlZmF1bHQiLCJ2YWx1ZSIsIkFycmF5IiwiU3RyaW5nIiwiTnVtYmVyIiwiY29sIiwiZ3V0dGVyIiwidW5pdCIsInRpdGxlIiwiZGF0YSIsInVuaXF1ZSIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsImNvbXB1dGVkIiwiaGFzVGl0bGUiLCJpc0RlZmluZWQiLCJzdHlsZV93aWR0aCIsImdldFBlcmNlbnQiLCJnZXROdW1iZXIiLCJzdHlsZV9ndXR0ZXIiLCJnZXRHdXR0ZXIiLCJzdHlsZV9ndXR0ZXJfZWRnZSIsImVkZ2UiLCJtZXRob2RzIiwiY2hlY2tib3hDaGFuZ2UiLCJlIiwidmFsdWVBcnIiLCJkZXRhaWwiLCJpIiwibGVuZ3RoIiwiaXNWYWx1ZUVxdWFsIiwiY2hlY2tlZCIsInNldFRpbWVvdXQiLCJpbml0Q2hlY2tCb3giLCJnZXRTdHJpbmciLCJhIiwiYiIsImdldEFycmF5IiwiaW5kZXhPZiIsIm51bSIsImlzTnVtYmVyIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLGM7Ozs7Ozs7Ozs7Ozs7O3NNQUNuQkMsTSxHQUFTLGdCLFFBQ1RDLEssR0FBUTtBQUNOQyxZQUFNO0FBQ0pDLGdCQUFRLElBREo7QUFFSkMsY0FBTUMsTUFGRjtBQUdKQyxpQkFBUztBQUhMLE9BREE7QUFNTkMsYUFBTztBQUNMSixnQkFBUSxJQURIO0FBRUxDLGNBQU0sQ0FBQ0ksS0FBRCxFQUFRQyxNQUFSLEVBQWdCQyxNQUFoQixDQUZEO0FBR0xKLGlCQUFTO0FBSEosT0FORDtBQVdOSyxXQUFLO0FBQ0hQLGNBQU0sQ0FBQ0ssTUFBRCxFQUFTQyxNQUFULENBREg7QUFFSEosaUJBQVM7QUFGTixPQVhD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TCxDQUFlRSxDQUFmLENBQXpCLElBQThDLENBQUMsQ0FBdEQ7QUFDRDs7OytCQUVVRyxHLEVBQUs7QUFDZCxhQUFPLEtBQUtDLFFBQUwsQ0FBY0QsR0FBZCxJQUF3QkEsTUFBTSxHQUE5QixTQUF1QyxJQUE5QztBQUNEOzs7OEJBQ1NBLEcsRUFBS2xDLEksRUFBTTtBQUNuQixhQUFPLEtBQUttQyxRQUFMLENBQWNELEdBQWQsU0FBd0JBLEdBQXhCLElBQThCbEMsUUFBUSxLQUF0QyxJQUFnRCxPQUF2RDtBQUNEOzs7O0VBL0Z5QyxlQUFLb0MsUzs7a0JBQTVCbEQsYyIsImZpbGUiOiJjaGVja2JveEJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IGJhc2UgZnJvbSAnLi4vbWl4aW5zL2Jhc2UuanMnXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGNoZWNrYm94QnV0dG9uIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gICAgbWl4aW5zID0gW2Jhc2VdXHJcbiAgICBwcm9wcyA9IHtcclxuICAgICAgbGlzdDoge1xyXG4gICAgICAgIHR3b1dheTogdHJ1ZSxcclxuICAgICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgICAgZGVmYXVsdDogW11cclxuICAgICAgfSxcclxuICAgICAgdmFsdWU6IHtcclxuICAgICAgICB0d29XYXk6IHRydWUsXHJcbiAgICAgICAgdHlwZTogW0FycmF5LCBTdHJpbmcsIE51bWJlcl0sXHJcbiAgICAgICAgZGVmYXVsdDogJydcclxuICAgICAgfSxcclxuICAgICAgY29sOiB7XHJcbiAgICAgICAgdHlwZTogW1N0cmluZywgTnVtYmVyXSxcclxuICAgICAgICBkZWZhdWx0OiA0XHJcbiAgICAgIH0sXHJcbiAgICAgIGd1dHRlcjoge1xyXG4gICAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXHJcbiAgICAgICAgZGVmYXVsdDogMTZcclxuICAgICAgfSxcclxuICAgICAgdW5pdDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICBkZWZhdWx0OiAncnB4J1xyXG4gICAgICB9LFxyXG4gICAgICB0aXRsZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICBkZWZhdWx0OiAnJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgdW5pcXVlOiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMilcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgIC8vIOS9v+e7hOS7tuWcqOeItue7hOS7tuS5i+WQjmxvbmRcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbml0Q2hlY2tCb3goKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXB1dGVkID0ge1xyXG4gICAgICBoYXNUaXRsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0RlZmluZWQodGhpcy50aXRsZSlcclxuICAgICAgfSxcclxuICAgICAgc3R5bGVfd2lkdGgoKSB7XHJcbiAgICAgICAgY29uc3QgY29sID0gdGhpcy5jb2xcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQZXJjZW50KDEgLyB0aGlzLmdldE51bWJlcihjb2wsIDQpKVxyXG4gICAgICB9LFxyXG4gICAgICBzdHlsZV9ndXR0ZXIoKSB7XHJcbiAgICAgICAgY29uc3QgZ3V0dGVyID0gdGhpcy5ndXR0ZXJcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRHdXR0ZXIodGhpcy5nZXROdW1iZXIoZ3V0dGVyLCAxNiksIHRoaXMudW5pdClcclxuICAgICAgfSxcclxuICAgICAgc3R5bGVfZ3V0dGVyX2VkZ2UoKSB7XHJcbiAgICAgICAgY29uc3QgZ3V0dGVyID0gdGhpcy5ndXR0ZXJcclxuICAgICAgICBjb25zdCBjb2wgPSB0aGlzLmdldE51bWJlcih0aGlzLmNvbCwgNClcclxuICAgICAgICBjb25zdCBlZGdlID0gKGNvbCAtIDEpICogdGhpcy5nZXROdW1iZXIoZ3V0dGVyLCAxNikgLyBjb2xcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRHdXR0ZXIoLWVkZ2UsIHRoaXMudW5pdClcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIGNoZWNrYm94Q2hhbmdlKGUpIHtcclxuICAgICAgICB2YXIgdmFsdWVBcnIgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5saXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5pc1ZhbHVlRXF1YWwodmFsdWVBcnIsIHRoaXMubGlzdFtpXS52YWx1ZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5saXN0W2ldLmNoZWNrZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZUFyclxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5saXN0W2ldLmNoZWNrZWQgPSBmYWxzZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRDaGVja0JveCgpIHtcclxuICAgICAgLy8g5Yid5aeL5YyW5bey6YCJ6aG5XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRTdHJpbmcodGhpcy52YWx1ZSlcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAodGhpcy5pc1ZhbHVlRXF1YWwodmFsdWUsIHRoaXMubGlzdFtpXS52YWx1ZSkpIHtcclxuICAgICAgICAgIHRoaXMubGlzdFtpXS5jaGVja2VkID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlzVmFsdWVFcXVhbChhLCBiKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldEFycmF5KGEpLmluZGV4T2YodGhpcy5nZXRTdHJpbmcoYikpID4gLTFcclxuICAgIH1cclxuXHJcbiAgICBnZXRQZXJjZW50KG51bSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5pc051bWJlcihudW0pID8gYCR7bnVtICogMTAwfSVgIDogJzAlJ1xyXG4gICAgfVxyXG4gICAgZ2V0R3V0dGVyKG51bSwgdW5pdCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5pc051bWJlcihudW0pID8gYCR7bnVtfSR7dW5pdCB8fCAncnB4J31gIDogJzE2cnB4J1xyXG4gICAgfVxyXG4gIH1cclxuIl19