'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../../config.js');

var _base = require('./../../mixins/base.js');

var _base2 = _interopRequireDefault(_base);

var _http = require('./../../mixins/http.js');

var _http2 = _interopRequireDefault(_http);

var _demo = require('./../../mixins/demo.js');

var _bookList = require('./../../components/bookList.js');

var _bookList2 = _interopRequireDefault(_bookList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var userCollect = function (_wepy$page) {
  _inherits(userCollect, _wepy$page);

  function userCollect() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, userCollect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = userCollect.__proto__ || Object.getPrototypeOf(userCollect)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default, _http2.default], _this.config = {
      navigationBarTitleText: '收藏图书',
      enablePullDownRefresh: false
    }, _this.data = {
      icon_star: '/images/icon/icon-star@2x.png',
      page: 0,
      size: 5,
      list: [],
      noMoreList: false,
      loading: false,
      loaded: false
    }, _this.methods = {
      toIndex: function toIndex() {
        wx.switchTab({ url: '/pages/index' });
      }
    }, _this.$repeat = {}, _this.$props = { "BookList": { "xmlns:v-bind": "", "v-bind:list.sync": "list", "v-bind:loading.sync": "loading", "v-bind:noMore.sync": "noMoreList", "type": "collect" } }, _this.$events = {}, _this.components = {
      BookList: _bookList2.default
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(userCollect, [{
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
  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {
      var _this2 = this;

      setTimeout(function () {
        _this2.updateBookList(_this2.page);
        _this2.$apply();
      }, 200);
    }

    // 初始化页面数据

  }, {
    key: 'initPageData',
    value: function initPageData() {
      // 初始化参数
      this.page = 0;
      this.loading = false;
      this.noMoreList = false;

      // 请求推荐列表
      this.updateBookList(this.page);
    }

    // 更新图书列表

  }, {
    key: 'updateBookList',
    value: function updateBookList(page) {
      var _this3 = this;

      if (this.loading || this.noMoreList) return;
      this.loading = true;
      // 推荐列表
      this.$post({
        url: _config.service.list,
        data: Object.assign({}, this.getObject(this.params), {
          type: 'collect',
          page: page,
          size: this.size
        })
      }, {
        success: function success(_ref2) {
          var code = _ref2.code,
              data = _ref2.data;

          // 示例规则：最多20本
          if (_this3.list.length >= 20) {
            _this3.noMoreList = true;
            return;
          }

          // 请求到空列表后就认为没有更多了
          if (_this3.isArray(data) && data.length === 0) {
            _this3.noMoreList = true;
          }
          // 处理列表关系
          if (!_this3.page || +_this3.page === 0) {
            _this3.list = _this3.getBooks(data);
          } else {
            // 添加到列表中
            _this3.list = [].concat(_toConsumableArray(_this3.list), _toConsumableArray(_this3.getBooks(data)));
          }
          // 成功了就增加一页
          _this3.page += 1;
        },
        fail: function fail(_ref3) {
          var code = _ref3.code,
              data = _ref3.data;

          console.log('[updateBookList fail]', code, data);
        },
        complete: function complete() {
          _this3.loading = false;
        }
      });
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
          content: '\u7B80\u4ECB: \u5927\u5409\u5927\u5229\uFF0C\u4ECA\u665A\u5403\u9E21\u3002' + book.title + '\uFF1B' + book.title + '\u3002',
          image: _demo.funImages[(xlen + 4) % 8],
          tags: ['tag1', 'tag2'],
          status: xlen % 2,
          collected: 1
        };
      });
    }
  }]);

  return userCollect;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(userCollect , 'pages/user/collect'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3QuanMiXSwibmFtZXMiOlsidXNlckNvbGxlY3QiLCJtaXhpbnMiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiZGF0YSIsImljb25fc3RhciIsInBhZ2UiLCJzaXplIiwibGlzdCIsIm5vTW9yZUxpc3QiLCJsb2FkaW5nIiwibG9hZGVkIiwibWV0aG9kcyIsInRvSW5kZXgiLCJ3eCIsInN3aXRjaFRhYiIsInVybCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIkJvb2tMaXN0IiwiaW5pdFBhZ2VEYXRhIiwic2V0VGltZW91dCIsInVwZGF0ZUJvb2tMaXN0IiwiJGFwcGx5IiwiJHBvc3QiLCJPYmplY3QiLCJhc3NpZ24iLCJnZXRPYmplY3QiLCJwYXJhbXMiLCJ0eXBlIiwic3VjY2VzcyIsImNvZGUiLCJsZW5ndGgiLCJpc0FycmF5IiwiZ2V0Qm9va3MiLCJmYWlsIiwiY29uc29sZSIsImxvZyIsImNvbXBsZXRlIiwibGVuIiwiZ2V0QXJyYXkiLCJtYXAiLCJib29rIiwiaW5kZXgiLCJ4bGVuIiwiaWQiLCJ0aXRsZSIsImNvbnRlbnQiLCJpbWFnZSIsInRhZ3MiLCJzdGF0dXMiLCJjb2xsZWN0ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsVzs7Ozs7Ozs7Ozs7Ozs7Z01BQ25CQyxNLEdBQVMsZ0MsUUFDVEMsTSxHQUFTO0FBQ1BDLDhCQUF3QixNQURqQjtBQUVQQyw2QkFBdUI7QUFGaEIsSyxRQUlUQyxJLEdBQU87QUFDTEMsaUJBQVcsK0JBRE47QUFFTEMsWUFBTSxDQUZEO0FBR0xDLFlBQU0sQ0FIRDtBQUlMQyxZQUFNLEVBSkQ7QUFLTEMsa0JBQVksS0FMUDtBQU1MQyxlQUFTLEtBTko7QUFPTEMsY0FBUTtBQVBILEssUUFxR1BDLE8sR0FB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RUFBaUI7QUFDOUMsWUFBTUMsT0FBT0wsTUFBTUksS0FBbkI7QUFDQTtBQUNBLGVBQU87QUFDTEUsY0FBSUQsSUFEQztBQUVMRSxpQkFBT0osS0FBS0ksS0FGUDtBQUdMQyxrR0FBMEJMLEtBQUtJLEtBQS9CLGNBQXdDSixLQUFLSSxLQUE3QyxXQUhLO0FBSUxFLGlCQUFPLGdCQUFVLENBQUNKLE9BQU8sQ0FBUixJQUFhLENBQXZCLENBSkY7QUFLTEssZ0JBQU0sQ0FBQyxNQUFELEVBQVMsTUFBVCxDQUxEO0FBTUxDLGtCQUFRTixPQUFPLENBTlY7QUFPTE8scUJBQVc7QUFQTixTQUFQO0FBU0QsT0FaTSxDQUFQO0FBYUQ7Ozs7RUF6R3NDLGVBQUsvQyxJOztrQkFBekJQLFciLCJmaWxlIjoiY29sbGVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IHsgc2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZy5qcydcclxuICBpbXBvcnQgYmFzZSBmcm9tICcuLi8uLi9taXhpbnMvYmFzZSdcclxuICBpbXBvcnQgaHR0cCBmcm9tICcuLi8uLi9taXhpbnMvaHR0cCdcclxuICBpbXBvcnQgeyBmdW5JbWFnZXMgfSBmcm9tICcuLi8uLi9taXhpbnMvZGVtbydcclxuICBpbXBvcnQgQm9va0xpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ib29rTGlzdCdcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgdXNlckNvbGxlY3QgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgbWl4aW5zID0gW2Jhc2UsIGh0dHBdXHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmlLbol4/lm77kuaYnLFxyXG4gICAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IGZhbHNlXHJcbiAgICB9XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBpY29uX3N0YXI6ICcvaW1hZ2VzL2ljb24vaWNvbi1zdGFyQDJ4LnBuZycsXHJcbiAgICAgIHBhZ2U6IDAsXHJcbiAgICAgIHNpemU6IDUsXHJcbiAgICAgIGxpc3Q6IFtdLFxyXG4gICAgICBub01vcmVMaXN0OiBmYWxzZSxcclxuICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgIGxvYWRlZDogZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBvblNob3coKSB7XHJcbiAgICAgIC8vIOWIneWni+WMlumhtemdouaVsOaNrlxyXG4gICAgICB0aGlzLmluaXRQYWdlRGF0YSgpXHJcbiAgICB9XHJcblxyXG4gICAgb25QdWxsRG93blJlZnJlc2goKSB7XHJcbiAgICAgIHRoaXMuaW5pdFBhZ2VEYXRhKClcclxuICAgIH1cclxuXHJcbiAgICBvblJlYWNoQm90dG9tKCkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUJvb2tMaXN0KHRoaXMucGFnZSlcclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgIH0sIDIwMClcclxuICAgIH1cclxuXHJcbiAgICAvLyDliJ3lp4vljJbpobXpnaLmlbDmja5cclxuICAgIGluaXRQYWdlRGF0YSgpIHtcclxuICAgICAgLy8g5Yid5aeL5YyW5Y+C5pWwXHJcbiAgICAgIHRoaXMucGFnZSA9IDBcclxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcclxuICAgICAgdGhpcy5ub01vcmVMaXN0ID0gZmFsc2VcclxuXHJcbiAgICAgIC8vIOivt+axguaOqOiNkOWIl+ihqFxyXG4gICAgICB0aGlzLnVwZGF0ZUJvb2tMaXN0KHRoaXMucGFnZSlcclxuICAgIH1cclxuXHJcbiAgICAvLyDmm7TmlrDlm77kuabliJfooahcclxuICAgIHVwZGF0ZUJvb2tMaXN0KHBhZ2UpIHtcclxuICAgICAgaWYgKHRoaXMubG9hZGluZyB8fCB0aGlzLm5vTW9yZUxpc3QpIHJldHVyblxyXG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXHJcbiAgICAgIC8vIOaOqOiNkOWIl+ihqFxyXG4gICAgICB0aGlzLiRwb3N0KHtcclxuICAgICAgICB1cmw6IHNlcnZpY2UubGlzdCxcclxuICAgICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmdldE9iamVjdCh0aGlzLnBhcmFtcyksIHtcclxuICAgICAgICAgIHR5cGU6ICdjb2xsZWN0JyxcclxuICAgICAgICAgIHBhZ2U6IHBhZ2UsXHJcbiAgICAgICAgICBzaXplOiB0aGlzLnNpemVcclxuICAgICAgICB9KVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgc3VjY2VzczogKHtjb2RlLCBkYXRhfSkgPT4ge1xyXG4gICAgICAgICAgLy8g56S65L6L6KeE5YiZ77ya5pyA5aSaMjDmnKxcclxuICAgICAgICAgIGlmICh0aGlzLmxpc3QubGVuZ3RoID49IDIwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9Nb3JlTGlzdCA9IHRydWVcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8g6K+35rGC5Yiw56m65YiX6KGo5ZCO5bCx6K6k5Li65rKh5pyJ5pu05aSa5LqGXHJcbiAgICAgICAgICBpZiAodGhpcy5pc0FycmF5KGRhdGEpICYmIGRhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9Nb3JlTGlzdCA9IHRydWVcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIOWkhOeQhuWIl+ihqOWFs+ezu1xyXG4gICAgICAgICAgaWYgKCF0aGlzLnBhZ2UgfHwgK3RoaXMucGFnZSA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3QgPSB0aGlzLmdldEJvb2tzKGRhdGEpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyDmt7vliqDliLDliJfooajkuK1cclxuICAgICAgICAgICAgdGhpcy5saXN0ID0gW1xyXG4gICAgICAgICAgICAgIC4uLnRoaXMubGlzdCxcclxuICAgICAgICAgICAgICAuLi50aGlzLmdldEJvb2tzKGRhdGEpXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIOaIkOWKn+S6huWwseWinuWKoOS4gOmhtVxyXG4gICAgICAgICAgdGhpcy5wYWdlICs9IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWw6ICh7Y29kZSwgZGF0YX0pID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdbdXBkYXRlQm9va0xpc3QgZmFpbF0nLCBjb2RlLCBkYXRhKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcGxldGU6ICgpID0+IHtcclxuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOWkhOeQhuWbvuS5puWIl+ihqFxyXG4gICAgZ2V0Qm9va3MoZGF0YSkge1xyXG4gICAgICBjb25zdCBsZW4gPSB0aGlzLmxpc3QubGVuZ3RoXHJcbiAgICAgIHJldHVybiB0aGlzLmdldEFycmF5KGRhdGEpLm1hcCgoYm9vaywgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCB4bGVuID0gbGVuICsgaW5kZXhcclxuICAgICAgICAvLyDmi7zmjqXnpLrkvovmlbDmja5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgaWQ6IHhsZW4sXHJcbiAgICAgICAgICB0aXRsZTogYm9vay50aXRsZSxcclxuICAgICAgICAgIGNvbnRlbnQ6IGDnroDku4s6IOWkp+WQieWkp+WIqe+8jOS7iuaZmuWQg+m4oeOAgiR7Ym9vay50aXRsZX3vvJske2Jvb2sudGl0bGV944CCYCxcclxuICAgICAgICAgIGltYWdlOiBmdW5JbWFnZXNbKHhsZW4gKyA0KSAlIDhdLFxyXG4gICAgICAgICAgdGFnczogWyd0YWcxJywgJ3RhZzInXSxcclxuICAgICAgICAgIHN0YXR1czogeGxlbiAlIDIsXHJcbiAgICAgICAgICBjb2xsZWN0ZWQ6IDFcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgdG9JbmRleCgpIHtcclxuICAgICAgICB3eC5zd2l0Y2hUYWIoe3VybDogJy9wYWdlcy9pbmRleCd9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIkJvb2tMaXN0XCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpsaXN0LnN5bmNcIjpcImxpc3RcIixcInYtYmluZDpsb2FkaW5nLnN5bmNcIjpcImxvYWRpbmdcIixcInYtYmluZDpub01vcmUuc3luY1wiOlwibm9Nb3JlTGlzdFwiLFwidHlwZVwiOlwiY29sbGVjdFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgIEJvb2tMaXN0XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=