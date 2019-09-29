'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _base = require('./../../mixins/base.js');

var _base2 = _interopRequireDefault(_base);

var _http = require('./../../mixins/http.js');

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Records = function (_wepy$page) {
  _inherits(Records, _wepy$page);

  function Records() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Records);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Records.__proto__ || Object.getPrototypeOf(Records)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default, _http2.default], _this.config = {
      navigationBarTitleText: '豆芽儿',
      navigationBarTextStyle: 'white',
      navigationBarBackgroundColor: ''
    }, _this.data = {
      score: []
      // achievements: [ ]
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Records, [{
    key: 'onLoad',
    value: function onLoad(option) {
      var _this2 = this;

      wx.request({
        url: 'https://douyaer.applinzi.com/develop.php',
        data: {
          number: this.$parent.globalData.student.number
        },
        method: 'GET',
        header: {
          'content-type': 'application/json'
        },
        success: function success(res) {
          console.log(res.data);
          // console.log(typeof (res.data[0]))
          _this2.score = res.data;
          console.log(_this2.score[0].moral);
          // this.achievements = res.data[1]
          _this2.$apply();
        },
        fail: function fail(res) {
          console.log('fail to fetch list:', res);
        }
      });
    }
  }, {
    key: 'onReady',
    value: function onReady() {}
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {}
  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {}

    // navbarTap(e) {
    //   this.currentTab = e.currentTarget.dataset.idx
    // }

  }]);

  return Records;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Records , 'pages/user/develop'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldmVsb3AuanMiXSwibmFtZXMiOlsiUmVjb3JkcyIsIm1peGlucyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsImRhdGEiLCJzY29yZSIsIm1ldGhvZHMiLCJvcHRpb24iLCJ3eCIsInJlcXVlc3QiLCJ1cmwiLCJudW1iZXIiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsInN0dWRlbnQiLCJtZXRob2QiLCJoZWFkZXIiLCJzdWNjZXNzIiwicmVzIiwiY29uc29sZSIsImxvZyIsIm1vcmFsIiwiJGFwcGx5IiwiZmFpbCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLE0sR0FBUyxnQyxRQUNUQyxNLEdBQVM7QUFDUEMsOEJBQXdCLEtBRGpCO0FBRVBDLDhCQUF3QixPQUZqQjtBQUdQQyxvQ0FBOEI7QUFIdkIsSyxRQUtUQyxJLEdBQU87QUFDTEMsYUFBTztBQUNQO0FBRkssSyxRQXlDUEMsTyxHQUFVLEU7Ozs7OzJCQXBDSEMsTSxFQUFRO0FBQUE7O0FBQ2JDLFNBQUdDLE9BQUgsQ0FBVztBQUNUQyxhQUFLLDBDQURJO0FBRVROLGNBQU07QUFDSk8sa0JBQVEsS0FBS0MsT0FBTCxDQUFhQyxVQUFiLENBQXdCQyxPQUF4QixDQUFnQ0g7QUFEcEMsU0FGRztBQUtUSSxnQkFBUSxLQUxDO0FBTVRDLGdCQUFRO0FBQ04sMEJBQWdCO0FBRFYsU0FOQztBQVNUQyxpQkFBUyxpQkFBQ0MsR0FBRCxFQUFTO0FBQ2hCQyxrQkFBUUMsR0FBUixDQUFZRixJQUFJZCxJQUFoQjtBQUNBO0FBQ0EsaUJBQUtDLEtBQUwsR0FBYWEsSUFBSWQsSUFBakI7QUFDQWUsa0JBQVFDLEdBQVIsQ0FBWSxPQUFLZixLQUFMLENBQVcsQ0FBWCxFQUFjZ0IsS0FBMUI7QUFDQTtBQUNBLGlCQUFLQyxNQUFMO0FBQ0QsU0FoQlE7QUFpQlRDLGNBQU0sY0FBQ0wsR0FBRCxFQUFTO0FBQ2JDLGtCQUFRQyxHQUFSLENBQVkscUJBQVosRUFBbUNGLEdBQW5DO0FBQ0Q7QUFuQlEsT0FBWDtBQXFCRDs7OzhCQUNTLENBQ1Q7Ozt3Q0FFbUIsQ0FDbkI7OztvQ0FFZSxDQUNmOztBQUVEO0FBQ0E7QUFDQTs7Ozs7RUE5Q21DLGVBQUtNLEk7O2tCQUFyQjFCLE8iLCJmaWxlIjoiZGV2ZWxvcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IGJhc2UgZnJvbSAnLi4vLi4vbWl4aW5zL2Jhc2UnXHJcbiAgaW1wb3J0IGh0dHAgZnJvbSAnLi4vLi4vbWl4aW5zL2h0dHAnXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY29yZHMgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgbWl4aW5zID0gW2Jhc2UsIGh0dHBdXHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfosYboir3lhL8nLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnd2hpdGUnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnJ1xyXG4gICAgfVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgc2NvcmU6IFsgXVxyXG4gICAgICAvLyBhY2hpZXZlbWVudHM6IFsgXVxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZChvcHRpb24pIHtcclxuICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9kb3V5YWVyLmFwcGxpbnppLmNvbS9kZXZlbG9wLnBocCcsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgbnVtYmVyOiB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5zdHVkZW50Lm51bWJlclxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKVxyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2codHlwZW9mIChyZXMuZGF0YVswXSkpXHJcbiAgICAgICAgICB0aGlzLnNjb3JlID0gcmVzLmRhdGFcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2NvcmVbMF0ubW9yYWwpXHJcbiAgICAgICAgICAvLyB0aGlzLmFjaGlldmVtZW50cyA9IHJlcy5kYXRhWzFdXHJcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnZmFpbCB0byBmZXRjaCBsaXN0OicsIHJlcylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBvblJlYWR5KCkge1xyXG4gICAgfVxyXG5cclxuICAgIG9uUHVsbERvd25SZWZyZXNoKCkge1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVhY2hCb3R0b20oKSB7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbmF2YmFyVGFwKGUpIHtcclxuICAgIC8vICAgdGhpcy5jdXJyZW50VGFiID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWR4XHJcbiAgICAvLyB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgIH1cclxuICB9XHJcbiJdfQ==