'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _base = require('./../../mixins/base.js');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SmallClass = function (_wepy$page) {
  _inherits(SmallClass, _wepy$page);

  function SmallClass() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SmallClass);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SmallClass.__proto__ || Object.getPrototypeOf(SmallClass)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default], _this.config = {
      navigationBarTitleText: '前三名'
    }, _this.data = {
      rank: [],
      type: 0

      // computed = {
      //   smallclass() {
      //     return this.getObject(this.smallclass)
      //   }
      // }

      // watch = {
      //   smallclass (newValue, oldValue) {
      //       // console.log(`sm: ${oldValue} -> ${newValue}`)
      //   }
      // }

      // onReady() {
      //   this.initPageData()
      // }

    }, _this.methods = {}, _this.components = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SmallClass, [{
    key: 'onLoad',
    value: function onLoad(option) {
      var _this2 = this;

      console.log(option);
      this.type = option.index;
      console.log('hello', this.type);
      // console.log(option.params)
      wx.request({
        url: 'https://douyaer.applinzi.com/rank.php?rankName=' + option.index,
        // url: 'https://www.v2ex.com/api/topics/show.json?id=520',
        method: 'GET',
        header: {
          'content-type': 'application/json'
        },
        success: function success(res) {
          console.log(res.data);
          // console.log(typeof (res.data))
          // var serverdata = res.data
          // console.log(serverdata[0].smallName)
          // console.log(typeof (serverdata))
          // console.log(res.data[1])
          _this2.rank = res.data;
          // console.log(this.rank[1][this.type])
          _this2.$apply();
          // console.log(this.smallclass)
          // console.log('webdata:', this.webdata)
        },
        fail: function fail(res) {
          console.log('denglu.fail:', res);
        }
      });
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }, {
    key: 'onReady',
    value: function onReady() {}
    // initPageData() {

    // }

  }]);

  return SmallClass;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(SmallClass , 'pages/focus/rank'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhbmsuanMiXSwibmFtZXMiOlsiU21hbGxDbGFzcyIsIm1peGlucyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwicmFuayIsInR5cGUiLCJtZXRob2RzIiwiY29tcG9uZW50cyIsIm9wdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJpbmRleCIsInd4IiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImhlYWRlciIsInN1Y2Nlc3MiLCJyZXMiLCIkYXBwbHkiLCJmYWlsIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxVOzs7Ozs7Ozs7Ozs7Ozs4TEFDbkJDLE0sR0FBUyxnQixRQUNUQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFlBQU0sRUFERDtBQUVMQyxZQUFNOztBQUdSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBbkJPLEssUUE4RFBDLE8sR0FBVSxFLFFBR1ZDLFUsR0FBYSxFOzs7OzsyQkE1Q05DLE0sRUFBUTtBQUFBOztBQUNiQyxjQUFRQyxHQUFSLENBQVlGLE1BQVo7QUFDQSxXQUFLSCxJQUFMLEdBQVlHLE9BQU9HLEtBQW5CO0FBQ0FGLGNBQVFDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCLEtBQUtMLElBQTFCO0FBQ0E7QUFDQU8sU0FBR0MsT0FBSCxDQUFXO0FBQ1RDLGFBQUssb0RBQW9ETixPQUFPRyxLQUR2RDtBQUVUO0FBQ0FJLGdCQUFRLEtBSEM7QUFJVEMsZ0JBQVE7QUFDTiwwQkFBZ0I7QUFEVixTQUpDO0FBT1RDLGlCQUFTLGlCQUFDQyxHQUFELEVBQVM7QUFDaEJULGtCQUFRQyxHQUFSLENBQVlRLElBQUlmLElBQWhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFLQyxJQUFMLEdBQVljLElBQUlmLElBQWhCO0FBQ0E7QUFDQSxpQkFBS2dCLE1BQUw7QUFDQTtBQUNBO0FBQ0QsU0FuQlE7QUFvQlRDLGNBQU0sY0FBQ0YsR0FBRCxFQUFTO0FBQ2JULGtCQUFRQyxHQUFSLENBQVksY0FBWixFQUE0QlEsR0FBNUI7QUFDRDtBQXRCUSxPQUFYO0FBd0JEOzs7NkJBRVEsQ0FFUjs7OzhCQUNTLENBRVQ7QUFDRDs7QUFFQTs7Ozs7RUFqRXNDLGVBQUtHLEk7O2tCQUF4QnRCLFUiLCJmaWxlIjoicmFuay5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IGJhc2UgZnJvbSAnLi4vLi4vbWl4aW5zL2Jhc2UnXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNtYWxsQ2xhc3MgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgbWl4aW5zID0gW2Jhc2VdXHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfliY3kuInlkI0nXHJcbiAgICB9XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICByYW5rOiBbIF0sXHJcbiAgICAgIHR5cGU6IDBcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb21wdXRlZCA9IHtcclxuICAgIC8vICAgc21hbGxjbGFzcygpIHtcclxuICAgIC8vICAgICByZXR1cm4gdGhpcy5nZXRPYmplY3QodGhpcy5zbWFsbGNsYXNzKVxyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gd2F0Y2ggPSB7XHJcbiAgICAvLyAgIHNtYWxsY2xhc3MgKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgLy8gICAgICAgLy8gY29uc29sZS5sb2coYHNtOiAke29sZFZhbHVlfSAtPiAke25ld1ZhbHVlfWApXHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBvblJlYWR5KCkge1xyXG4gICAgLy8gICB0aGlzLmluaXRQYWdlRGF0YSgpXHJcbiAgICAvLyB9XHJcblxyXG4gICAgb25Mb2FkKG9wdGlvbikge1xyXG4gICAgICBjb25zb2xlLmxvZyhvcHRpb24pXHJcbiAgICAgIHRoaXMudHlwZSA9IG9wdGlvbi5pbmRleFxyXG4gICAgICBjb25zb2xlLmxvZygnaGVsbG8nLCB0aGlzLnR5cGUpXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKG9wdGlvbi5wYXJhbXMpXHJcbiAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vZG91eWFlci5hcHBsaW56aS5jb20vcmFuay5waHA/cmFua05hbWU9JyArIG9wdGlvbi5pbmRleCxcclxuICAgICAgICAvLyB1cmw6ICdodHRwczovL3d3dy52MmV4LmNvbS9hcGkvdG9waWNzL3Nob3cuanNvbj9pZD01MjAnLFxyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHR5cGVvZiAocmVzLmRhdGEpKVxyXG4gICAgICAgICAgLy8gdmFyIHNlcnZlcmRhdGEgPSByZXMuZGF0YVxyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coc2VydmVyZGF0YVswXS5zbWFsbE5hbWUpXHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0eXBlb2YgKHNlcnZlcmRhdGEpKVxyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzLmRhdGFbMV0pXHJcbiAgICAgICAgICB0aGlzLnJhbmsgPSByZXMuZGF0YVxyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5yYW5rWzFdW3RoaXMudHlwZV0pXHJcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNtYWxsY2xhc3MpXHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnd2ViZGF0YTonLCB0aGlzLndlYmRhdGEpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnZGVuZ2x1LmZhaWw6JywgcmVzKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvblNob3coKSB7XHJcblxyXG4gICAgfVxyXG4gICAgb25SZWFkeSgpIHtcclxuXHJcbiAgICB9XHJcbiAgICAvLyBpbml0UGFnZURhdGEoKSB7XHJcblxyXG4gICAgLy8gfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50cyA9IHtcclxuICAgIH1cclxuICB9XHJcbiJdfQ==