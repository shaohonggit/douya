'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../../config.js');

var _http = require('./../../mixins/http.js');

var _http2 = _interopRequireDefault(_http);

var _base = require('./../../mixins/base.js');

var _base2 = _interopRequireDefault(_base);

var _demo = require('./../../mixins/demo.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var userBorrow = function (_wepy$page) {
  _inherits(userBorrow, _wepy$page);

  function userBorrow() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, userBorrow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = userBorrow.__proto__ || Object.getPrototypeOf(userBorrow)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default, _http2.default], _this.config = {
      navigationBarTitleText: '我的借阅'
    }, _this.data = {
      loading: false,
      list: []
    }, _this.methods = {
      goReturn: function goReturn(id) {
        var str = this.getString(id);
        wx.navigateTo({ url: '/pages/user/return?id=' + str });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(userBorrow, [{
    key: 'onShow',
    value: function onShow() {
      // 初始化页面数据
      this.initPageData();
    }
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      this.initPageData();
    }

    // 初始化页面数据

  }, {
    key: 'initPageData',
    value: function initPageData() {
      var _this2 = this;

      // 根据业务接口处理:获取最新个人信息并更新
      // if (this.loading) return
      // this.loading = true
      // this.$get({url: service.user}, {
      //   success: ({code, data}) => {},
      //   fail: ({code, data}) => {},
      //   complete: () => {this.loading = false}
      // })

      // =============== 随机示例 ===============
      this.$post({ url: _config.service.list }, {
        success: function success(_ref2) {
          var code = _ref2.code,
              data = _ref2.data;

          _this2.getBorrow(_this2.getArray(data));
        },
        fail: function fail(_ref3) {
          var code = _ref3.code,
              data = _ref3.data;

          console.log('[updateBookList fail]', code, data);
        }
      });
    }
  }, {
    key: 'getBorrow',


    // 处理借阅列表
    value: function getBorrow(books) {
      this.list = [{
        id: 12345,
        remain: 1,
        status: 2,
        statusText: '未发货',
        date: '2017-11-11',
        books: this.getBooks(books)
      }];
    }

    // 处理图书列表

  }, {
    key: 'getBooks',
    value: function getBooks(data) {
      var len = this.list.length;
      return this.getArray(data).map(function (book, index) {
        var xlen = len + index;
        // 拼接示例数据
        return {
          id: xlen,
          title: book.title,
          image: _demo.funImages[(xlen + 4) % 8]
        };
      });
    }
  }]);

  return userBorrow;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(userBorrow , 'pages/user/borrow'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvcnJvdy5qcyJdLCJuYW1lcyI6WyJ1c2VyQm9ycm93IiwibWl4aW5zIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJsb2FkaW5nIiwibGlzdCIsIm1ldGhvZHMiLCJnb1JldHVybiIsImlkIiwic3RyIiwiZ2V0U3RyaW5nIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwiaW5pdFBhZ2VEYXRhIiwiJHBvc3QiLCJzdWNjZXNzIiwiY29kZSIsImdldEJvcnJvdyIsImdldEFycmF5IiwiZmFpbCIsImNvbnNvbGUiLCJsb2ciLCJib29rcyIsInJlbWFpbiIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJkYXRlIiwiZ2V0Qm9va3MiLCJsZW4iLCJsZW5ndGgiLCJtYXAiLCJib29rIiwiaW5kZXgiLCJ4bGVuIiwidGl0bGUiLCJpbWFnZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxVOzs7Ozs7Ozs7Ozs7Ozs4TEFDbkJDLE0sR0FBUyxnQyxRQUNUQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGVBQVMsS0FESjtBQUVMQyxZQUFNO0FBRkQsSyxRQW9DUEMsTyxHQUFVO0FBQ1JDLGNBRFEsb0JBQ0NDLEVBREQsRUFDSztBQUNYLFlBQU1DLE1BQU0sS0FBS0MsU0FBTCxDQUFlRixFQUFmLENBQVo7QUFDQUcsV0FBR0MsVUFBSCxDQUFjLEVBQUNDLGdDQUE4QkosR0FBL0IsRUFBZDtBQUNEO0FBSk8sSzs7Ozs7NkJBL0JEO0FBQ1A7QUFDQSxXQUFLSyxZQUFMO0FBQ0Q7Ozt3Q0FFbUI7QUFDbEIsV0FBS0EsWUFBTDtBQUNEOztBQUVEOzs7O21DQUNlO0FBQUE7O0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQUtDLEtBQUwsQ0FBVyxFQUFDRixLQUFLLGdCQUFRUixJQUFkLEVBQVgsRUFBZ0M7QUFDOUJXLGlCQUFTLHdCQUFrQjtBQUFBLGNBQWhCQyxJQUFnQixTQUFoQkEsSUFBZ0I7QUFBQSxjQUFWZCxJQUFVLFNBQVZBLElBQVU7O0FBQ3pCLGlCQUFLZSxTQUFMLENBQWUsT0FBS0MsUUFBTCxDQUFjaEIsSUFBZCxDQUFmO0FBQ0QsU0FINkI7QUFJOUJpQixjQUFNLHFCQUFrQjtBQUFBLGNBQWhCSCxJQUFnQixTQUFoQkEsSUFBZ0I7QUFBQSxjQUFWZCxJQUFVLFNBQVZBLElBQVU7O0FBQ3RCa0Isa0JBQVFDLEdBQVIsQ0FBWSx1QkFBWixFQUFxQ0wsSUFBckMsRUFBMkNkLElBQTNDO0FBQ0Q7QUFONkIsT0FBaEM7QUFRRDs7Ozs7QUFTRDs4QkFDVW9CLEssRUFBTztBQUNmLFdBQUtsQixJQUFMLEdBQVksQ0FBQztBQUNYRyxZQUFJLEtBRE87QUFFWGdCLGdCQUFRLENBRkc7QUFHWEMsZ0JBQVEsQ0FIRztBQUlYQyxvQkFBWSxLQUpEO0FBS1hDLGNBQU0sWUFMSztBQU1YSixlQUFPLEtBQUtLLFFBQUwsQ0FBY0wsS0FBZDtBQU5JLE9BQUQsQ0FBWjtBQVFEOztBQUVEOzs7OzZCQUNTcEIsSSxFQUFNO0FBQ2IsVUFBTTBCLE1BQU0sS0FBS3hCLElBQUwsQ0FBVXlCLE1BQXRCO0FBQ0EsYUFBTyxLQUFLWCxRQUFMLENBQWNoQixJQUFkLEVBQW9CNEIsR0FBcEIsQ0FBd0IsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQzlDLFlBQU1DLE9BQU9MLE1BQU1JLEtBQW5CO0FBQ0E7QUFDQSxlQUFPO0FBQ0x6QixjQUFJMEIsSUFEQztBQUVMQyxpQkFBT0gsS0FBS0csS0FGUDtBQUdMQyxpQkFBTyxnQkFBVSxDQUFDRixPQUFPLENBQVIsSUFBYSxDQUF2QjtBQUhGLFNBQVA7QUFLRCxPQVJNLENBQVA7QUFTRDs7OztFQXhFcUMsZUFBS0csSTs7a0JBQXhCdEMsVSIsImZpbGUiOiJib3Jyb3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCB7IHNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb25maWcuanMnXHJcbiAgaW1wb3J0IGh0dHAgZnJvbSAnLi4vLi4vbWl4aW5zL2h0dHAnXHJcbiAgaW1wb3J0IGJhc2UgZnJvbSAnLi4vLi4vbWl4aW5zL2Jhc2UnXHJcbiAgaW1wb3J0IHsgZnVuSW1hZ2VzIH0gZnJvbSAnLi4vLi4vbWl4aW5zL2RlbW8nXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHVzZXJCb3Jyb3cgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgbWl4aW5zID0gW2Jhc2UsIGh0dHBdXHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoTlgJ/pmIUnXHJcbiAgICB9XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgbGlzdDogW11cclxuICAgIH1cclxuXHJcbiAgICBvblNob3coKSB7XHJcbiAgICAgIC8vIOWIneWni+WMlumhtemdouaVsOaNrlxyXG4gICAgICB0aGlzLmluaXRQYWdlRGF0YSgpXHJcbiAgICB9XHJcblxyXG4gICAgb25QdWxsRG93blJlZnJlc2goKSB7XHJcbiAgICAgIHRoaXMuaW5pdFBhZ2VEYXRhKClcclxuICAgIH1cclxuXHJcbiAgICAvLyDliJ3lp4vljJbpobXpnaLmlbDmja5cclxuICAgIGluaXRQYWdlRGF0YSgpIHtcclxuICAgICAgLy8g5qC55o2u5Lia5Yqh5o6l5Y+j5aSE55CGOuiOt+WPluacgOaWsOS4quS6uuS/oeaBr+W5tuabtOaWsFxyXG4gICAgICAvLyBpZiAodGhpcy5sb2FkaW5nKSByZXR1cm5cclxuICAgICAgLy8gdGhpcy5sb2FkaW5nID0gdHJ1ZVxyXG4gICAgICAvLyB0aGlzLiRnZXQoe3VybDogc2VydmljZS51c2VyfSwge1xyXG4gICAgICAvLyAgIHN1Y2Nlc3M6ICh7Y29kZSwgZGF0YX0pID0+IHt9LFxyXG4gICAgICAvLyAgIGZhaWw6ICh7Y29kZSwgZGF0YX0pID0+IHt9LFxyXG4gICAgICAvLyAgIGNvbXBsZXRlOiAoKSA9PiB7dGhpcy5sb2FkaW5nID0gZmFsc2V9XHJcbiAgICAgIC8vIH0pXHJcblxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT0g6ZqP5py656S65L6LID09PT09PT09PT09PT09PVxyXG4gICAgICB0aGlzLiRwb3N0KHt1cmw6IHNlcnZpY2UubGlzdH0sIHtcclxuICAgICAgICBzdWNjZXNzOiAoe2NvZGUsIGRhdGF9KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmdldEJvcnJvdyh0aGlzLmdldEFycmF5KGRhdGEpKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbDogKHtjb2RlLCBkYXRhfSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1t1cGRhdGVCb29rTGlzdCBmYWlsXScsIGNvZGUsIGRhdGEpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIGdvUmV0dXJuKGlkKSB7XHJcbiAgICAgICAgY29uc3Qgc3RyID0gdGhpcy5nZXRTdHJpbmcoaWQpXHJcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7dXJsOiBgL3BhZ2VzL3VzZXIvcmV0dXJuP2lkPSR7c3RyfWB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5aSE55CG5YCf6ZiF5YiX6KGoXHJcbiAgICBnZXRCb3Jyb3coYm9va3MpIHtcclxuICAgICAgdGhpcy5saXN0ID0gW3tcclxuICAgICAgICBpZDogMTIzNDUsXHJcbiAgICAgICAgcmVtYWluOiAxLFxyXG4gICAgICAgIHN0YXR1czogMixcclxuICAgICAgICBzdGF0dXNUZXh0OiAn5pyq5Y+R6LSnJyxcclxuICAgICAgICBkYXRlOiAnMjAxNy0xMS0xMScsXHJcbiAgICAgICAgYm9va3M6IHRoaXMuZ2V0Qm9va3MoYm9va3MpXHJcbiAgICAgIH1dXHJcbiAgICB9XHJcblxyXG4gICAgLy8g5aSE55CG5Zu+5Lmm5YiX6KGoXHJcbiAgICBnZXRCb29rcyhkYXRhKSB7XHJcbiAgICAgIGNvbnN0IGxlbiA9IHRoaXMubGlzdC5sZW5ndGhcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0QXJyYXkoZGF0YSkubWFwKChib29rLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHhsZW4gPSBsZW4gKyBpbmRleFxyXG4gICAgICAgIC8vIOaLvOaOpeekuuS+i+aVsOaNrlxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBpZDogeGxlbixcclxuICAgICAgICAgIHRpdGxlOiBib29rLnRpdGxlLFxyXG4gICAgICAgICAgaW1hZ2U6IGZ1bkltYWdlc1soeGxlbiArIDQpICUgOF1cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=