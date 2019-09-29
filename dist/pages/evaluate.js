'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _http = require('./../mixins/http.js');

var _http2 = _interopRequireDefault(_http);

var _base = require('./../mixins/base.js');

var _base2 = _interopRequireDefault(_base);

var _user = require('./../mixins/user.js');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { service } from '../config.js'


var pageUser = function (_wepy$page) {
  _inherits(pageUser, _wepy$page);

  function pageUser() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, pageUser);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = pageUser.__proto__ || Object.getPrototypeOf(pageUser)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default, _http2.default, _user2.default], _this.config = {
      navigationBarTitleText: '评价',
      enablePullDownRefresh: false
    }, _this.data = {
      student: [],
      class: null
    }, _this.methods = {}, _this.components = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(pageUser, [{
    key: 'onLoad',
    value: function onLoad(option) {
      var _this2 = this;

      this.class = this.$parent.globalData.student.class;
      console.log(this.class);
      console.log(option);
      // console.log(option.params)
      wx.request({
        url: 'https://douyaer.applinzi.com/evaluate.php?class=' + this.class,
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
          _this2.student = res.data;
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
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      this.initPageData();
    }

    // 初始化页面数据

  }, {
    key: 'initPageData',
    value: function initPageData() {
      // 根据业务接口处理:获取最新个人信息并更新
      // this.$get({url: service.user}, {
      //   success: ({code, data}) => {},
      //   fail: ({code, data}) => {}
      // })
    }
  }]);

  return pageUser;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(pageUser , 'pages/evaluate'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2YWx1YXRlLmpzIl0sIm5hbWVzIjpbInBhZ2VVc2VyIiwibWl4aW5zIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImRhdGEiLCJzdHVkZW50IiwiY2xhc3MiLCJtZXRob2RzIiwiY29tcG9uZW50cyIsIm9wdGlvbiIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwiY29uc29sZSIsImxvZyIsInd4IiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImhlYWRlciIsInN1Y2Nlc3MiLCJyZXMiLCIkYXBwbHkiLCJmYWlsIiwiaW5pdFBhZ2VEYXRhIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBSEE7OztJQUtxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxNLEdBQVMsZ0QsUUFDVEMsTSxHQUFTO0FBQ1BDLDhCQUF3QixJQURqQjtBQUVQQyw2QkFBdUI7QUFGaEIsSyxRQUlUQyxJLEdBQU87QUFDTEMsZUFBUyxFQURKO0FBRUxDLGFBQU87QUFGRixLLFFBbURQQyxPLEdBQVUsRSxRQUdWQyxVLEdBQWEsRTs7Ozs7MkJBakROQyxNLEVBQVE7QUFBQTs7QUFDYixXQUFLSCxLQUFMLEdBQWEsS0FBS0ksT0FBTCxDQUFhQyxVQUFiLENBQXdCTixPQUF4QixDQUFnQ0MsS0FBN0M7QUFDQU0sY0FBUUMsR0FBUixDQUFZLEtBQUtQLEtBQWpCO0FBQ0FNLGNBQVFDLEdBQVIsQ0FBWUosTUFBWjtBQUNBO0FBQ0FLLFNBQUdDLE9BQUgsQ0FBVztBQUNUQyxhQUFLLHFEQUFxRCxLQUFLVixLQUR0RDtBQUVUO0FBQ0FXLGdCQUFRLEtBSEM7QUFJVEMsZ0JBQVE7QUFDTiwwQkFBZ0I7QUFEVixTQUpDO0FBT1RDLGlCQUFTLGlCQUFDQyxHQUFELEVBQVM7QUFDaEJSLGtCQUFRQyxHQUFSLENBQVlPLElBQUloQixJQUFoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBS0MsT0FBTCxHQUFlZSxJQUFJaEIsSUFBbkI7QUFDQSxpQkFBS2lCLE1BQUw7QUFDQTtBQUNBO0FBQ0QsU0FsQlE7QUFtQlRDLGNBQU0sY0FBQ0YsR0FBRCxFQUFTO0FBQ2JSLGtCQUFRQyxHQUFSLENBQVksY0FBWixFQUE0Qk8sR0FBNUI7QUFDRDtBQXJCUSxPQUFYO0FBdUJEOzs7NkJBRVEsQ0FDUjs7O3dDQUVtQjtBQUNsQixXQUFLRyxZQUFMO0FBQ0Q7O0FBRUQ7Ozs7bUNBQ2U7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7Ozs7RUF2RG1DLGVBQUtDLEk7O2tCQUF0QnpCLFEiLCJmaWxlIjoiZXZhbHVhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIC8vIGltcG9ydCB7IHNlcnZpY2UgfSBmcm9tICcuLi9jb25maWcuanMnXHJcbiAgaW1wb3J0IGh0dHAgZnJvbSAnLi4vbWl4aW5zL2h0dHAnXHJcbiAgaW1wb3J0IGJhc2UgZnJvbSAnLi4vbWl4aW5zL2Jhc2UnXHJcbiAgaW1wb3J0IHVzZXIgZnJvbSAnLi4vbWl4aW5zL3VzZXInXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHBhZ2VVc2VyIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIG1peGlucyA9IFtiYXNlLCBodHRwLCB1c2VyXVxyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6K+E5Lu3JyxcclxuICAgICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiBmYWxzZVxyXG4gICAgfVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgc3R1ZGVudDogWyBdLFxyXG4gICAgICBjbGFzczogbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZChvcHRpb24pIHtcclxuICAgICAgdGhpcy5jbGFzcyA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnN0dWRlbnQuY2xhc3NcclxuICAgICAgY29uc29sZS5sb2codGhpcy5jbGFzcylcclxuICAgICAgY29uc29sZS5sb2cob3B0aW9uKVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhvcHRpb24ucGFyYW1zKVxyXG4gICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICdodHRwczovL2RvdXlhZXIuYXBwbGluemkuY29tL2V2YWx1YXRlLnBocD9jbGFzcz0nICsgdGhpcy5jbGFzcyxcclxuICAgICAgICAvLyB1cmw6ICdodHRwczovL3d3dy52MmV4LmNvbS9hcGkvdG9waWNzL3Nob3cuanNvbj9pZD01MjAnLFxyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHR5cGVvZiAocmVzLmRhdGEpKVxyXG4gICAgICAgICAgLy8gdmFyIHNlcnZlcmRhdGEgPSByZXMuZGF0YVxyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coc2VydmVyZGF0YVswXS5zbWFsbE5hbWUpXHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0eXBlb2YgKHNlcnZlcmRhdGEpKVxyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzLmRhdGFbMV0pXHJcbiAgICAgICAgICB0aGlzLnN0dWRlbnQgPSByZXMuZGF0YVxyXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zbWFsbGNsYXNzKVxyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ3dlYmRhdGE6JywgdGhpcy53ZWJkYXRhKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbDogKHJlcykgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2RlbmdsdS5mYWlsOicsIHJlcylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25TaG93KCkge1xyXG4gICAgfVxyXG5cclxuICAgIG9uUHVsbERvd25SZWZyZXNoKCkge1xyXG4gICAgICB0aGlzLmluaXRQYWdlRGF0YSgpXHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Yid5aeL5YyW6aG16Z2i5pWw5o2uXHJcbiAgICBpbml0UGFnZURhdGEoKSB7XHJcbiAgICAgIC8vIOagueaNruS4muWKoeaOpeWPo+WkhOeQhjrojrflj5bmnIDmlrDkuKrkurrkv6Hmga/lubbmm7TmlrBcclxuICAgICAgLy8gdGhpcy4kZ2V0KHt1cmw6IHNlcnZpY2UudXNlcn0sIHtcclxuICAgICAgLy8gICBzdWNjZXNzOiAoe2NvZGUsIGRhdGF9KSA9PiB7fSxcclxuICAgICAgLy8gICBmYWlsOiAoe2NvZGUsIGRhdGF9KSA9PiB7fVxyXG4gICAgICAvLyB9KVxyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50cyA9IHtcclxuICAgIH1cclxuICB9XHJcbiJdfQ==