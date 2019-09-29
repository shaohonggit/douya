'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _base = require('./../mixins/base.js');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Statistics = function (_wepy$page) {
  _inherits(Statistics, _wepy$page);

  function Statistics() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Statistics);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Statistics.__proto__ || Object.getPrototypeOf(Statistics)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default], _this.config = {
      navigationBarTitleText: '豆芽儿'
    }, _this.data = {
      article: []
    }, _this.methods = {}, _this.components = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Statistics, [{
    key: 'onLoad',
    value: function onLoad(option) {
      var _this2 = this;

      console.log('option', option);
      // // console.log(option.params)
      wx.request({
        url: 'https://douyaer.applinzi.com/statistics.php?id=' + option.id,
        // url: 'https://www.v2ex.com/api/topics/show.json?id=520',
        method: 'GET',
        header: {
          'content-type': 'application/json'
        },
        success: function success(res) {
          console.log('res.data:', res.data);
          console.log(_typeof(res.data));
          _this2.article = res.data;
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

  return Statistics;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Statistics , 'pages/statistics'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpc3RpY3MuanMiXSwibmFtZXMiOlsiU3RhdGlzdGljcyIsIm1peGlucyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiYXJ0aWNsZSIsIm1ldGhvZHMiLCJjb21wb25lbnRzIiwib3B0aW9uIiwiY29uc29sZSIsImxvZyIsInd4IiwicmVxdWVzdCIsInVybCIsImlkIiwibWV0aG9kIiwiaGVhZGVyIiwic3VjY2VzcyIsInJlcyIsIiRhcHBseSIsImZhaWwiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxNLEdBQVMsZ0IsUUFDVEMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxlQUFTO0FBREosSyxRQXNDUEMsTyxHQUFVLEUsUUFHVkMsVSxHQUFhLEU7Ozs7OzJCQXJDTkMsTSxFQUFRO0FBQUE7O0FBQ2JDLGNBQVFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCRixNQUF0QjtBQUNBO0FBQ0FHLFNBQUdDLE9BQUgsQ0FBVztBQUNUQyxhQUFLLG9EQUFvREwsT0FBT00sRUFEdkQ7QUFFVDtBQUNBQyxnQkFBUSxLQUhDO0FBSVRDLGdCQUFRO0FBQ04sMEJBQWdCO0FBRFYsU0FKQztBQU9UQyxpQkFBUyxpQkFBQ0MsR0FBRCxFQUFTO0FBQ2hCVCxrQkFBUUMsR0FBUixDQUFZLFdBQVosRUFBeUJRLElBQUlkLElBQTdCO0FBQ0FLLGtCQUFRQyxHQUFSLFNBQW9CUSxJQUFJZCxJQUF4QjtBQUNBLGlCQUFLQyxPQUFMLEdBQWVhLElBQUlkLElBQW5CO0FBQ0EsaUJBQUtlLE1BQUw7QUFDQTtBQUNBO0FBQ0QsU0FkUTtBQWVUQyxjQUFNLGNBQUNGLEdBQUQsRUFBUztBQUNiVCxrQkFBUUMsR0FBUixDQUFZLGNBQVosRUFBNEJRLEdBQTVCO0FBQ0Q7QUFqQlEsT0FBWDtBQW1CRDs7OzZCQUVRLENBRVI7Ozs4QkFDUyxDQUVUO0FBQ0Q7O0FBRUE7Ozs7O0VBekNzQyxlQUFLRyxJOztrQkFBeEJyQixVIiwiZmlsZSI6InN0YXRpc3RpY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBiYXNlIGZyb20gJy4uL21peGlucy9iYXNlJ1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0aXN0aWNzIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIG1peGlucyA9IFtiYXNlXVxyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6LGG6Iq95YS/J1xyXG4gICAgfVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgYXJ0aWNsZTogWyBdXHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKG9wdGlvbikge1xyXG4gICAgICBjb25zb2xlLmxvZygnb3B0aW9uJywgb3B0aW9uKVxyXG4gICAgICAvLyAvLyBjb25zb2xlLmxvZyhvcHRpb24ucGFyYW1zKVxyXG4gICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICdodHRwczovL2RvdXlhZXIuYXBwbGluemkuY29tL3N0YXRpc3RpY3MucGhwP2lkPScgKyBvcHRpb24uaWQsXHJcbiAgICAgICAgLy8gdXJsOiAnaHR0cHM6Ly93d3cudjJleC5jb20vYXBpL3RvcGljcy9zaG93Lmpzb24/aWQ9NTIwJyxcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ3Jlcy5kYXRhOicsIHJlcy5kYXRhKVxyXG4gICAgICAgICAgY29uc29sZS5sb2codHlwZW9mIChyZXMuZGF0YSkpXHJcbiAgICAgICAgICB0aGlzLmFydGljbGUgPSByZXMuZGF0YVxyXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zbWFsbGNsYXNzKVxyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ3dlYmRhdGE6JywgdGhpcy53ZWJkYXRhKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbDogKHJlcykgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2RlbmdsdS5mYWlsOicsIHJlcylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25TaG93KCkge1xyXG5cclxuICAgIH1cclxuICAgIG9uUmVhZHkoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgLy8gaW5pdFBhZ2VEYXRhKCkge1xyXG5cclxuICAgIC8vIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudHMgPSB7XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=