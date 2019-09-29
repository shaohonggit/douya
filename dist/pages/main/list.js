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

var mainList = function (_wepy$page) {
  _inherits(mainList, _wepy$page);

  function mainList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, mainList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = mainList.__proto__ || Object.getPrototypeOf(mainList)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default, _http2.default], _this.config = {
      navigationBarTitleText: '找书'
    }, _this.data = {
      params: {},

      noMoreList: false,
      loading: false,
      list: [],
      page: 0,
      size: 5
    }, _this.methods = {
      clearSearch: function clearSearch() {
        // 清空参数
        this.params = {};
        // 初始化页面
        this.initPageData();
      }
    }, _this.computed = {
      keywords: function keywords() {
        var title = this.params && this.params.title;
        var words = this.params && this.params.key_word;
        var keywords = this.getString(words || title).split(/\s+/g);
        return keywords.filter(function (item) {
          return item;
        }) || [];
      }
    }, _this.$repeat = {}, _this.$props = { "BookList": { "xmlns:v-bind": "", "v-bind:list.sync": "list", "v-bind:loading.sync": "loading", "v-bind:noMore.sync": "noMoreList" } }, _this.$events = {}, _this.components = {
      BookList: _bookList2.default
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(mainList, [{
    key: 'onLoad',
    value: function onLoad(query) {
      var params = query && query.params;
      try {
        params = JSON.parse(params);
      } catch (e) {
        params = {};
      }
      this.params = params;
    }
  }, {
    key: 'onReady',
    value: function onReady() {
      this.initPageData(this.page);
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
  }, {
    key: 'initPageData',


    // 初始化页面数据
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
          // 默认从0开始为第一页
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
          status: xlen % 2
        };
      });
    }
  }]);

  return mainList;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(mainList , 'pages/main/list'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuanMiXSwibmFtZXMiOlsibWFpbkxpc3QiLCJtaXhpbnMiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInBhcmFtcyIsIm5vTW9yZUxpc3QiLCJsb2FkaW5nIiwibGlzdCIsInBhZ2UiLCJzaXplIiwibWV0aG9kcyIsImNsZWFyU2VhcmNoIiwiaW5pdFBhZ2VEYXRhIiwiY29tcHV0ZWQiLCJrZXl3b3JkcyIsInRpdGxlIiwid29yZHMiLCJrZXlfd29yZCIsImdldFN0cmluZyIsInNwbGl0IiwiZmlsdGVyIiwiaXRlbSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIkJvb2tMaXN0IiwicXVlcnkiLCJKU09OIiwicGFyc2UiLCJlIiwic2V0VGltZW91dCIsInVwZGF0ZUJvb2tMaXN0IiwiJGFwcGx5IiwiJHBvc3QiLCJ1cmwiLCJPYmplY3QiLCJhc3NpZ24iLCJnZXRPYmplY3QiLCJzdWNjZXNzIiwiY29kZSIsImxlbmd0aCIsImlzQXJyYXkiLCJnZXRCb29rcyIsImZhaWwiLCJjb25zb2xlIiwibG9nIiwiY29tcGxldGUiLCJsZW4iLCJnZXRBcnJheSIsIm1hcCIsImJvb2siLCJpbmRleCIsInhsZW4iLCJpZCIsImNvbnRlbnQiLCJpbWFnZSIsInRhZ3MiLCJzdGF0dXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxNLEdBQVMsZ0MsUUFDVEMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxjQUFRLEVBREg7O0FBR0xDLGtCQUFZLEtBSFA7QUFJTEMsZUFBUyxLQUpKO0FBS0xDLFlBQU0sRUFMRDtBQU1MQyxZQUFNLENBTkQ7QUFPTEMsWUFBTTtBQVBELEssUUFtQ1BDLE8sR0FBVTtBQUNSQyxpQkFEUSx5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O0FBQ0EsbUJBQUtJLElBQUwsZ0NBQ0ssT0FBS0EsSUFEVixzQkFFSyxPQUFLb0MsUUFBTCxDQUFjeEMsSUFBZCxDQUZMO0FBSUQ7QUFDRDtBQUNBLGlCQUFLSyxJQUFMLElBQWEsQ0FBYjtBQUNELFNBdkJBO0FBd0JEb0MsY0FBTSxxQkFBa0I7QUFBQSxjQUFoQkosSUFBZ0IsU0FBaEJBLElBQWdCO0FBQUEsY0FBVnJDLElBQVUsU0FBVkEsSUFBVTs7QUFDdEIwQyxrQkFBUUMsR0FBUixDQUFZLHVCQUFaLEVBQXFDTixJQUFyQyxFQUEyQ3JDLElBQTNDO0FBQ0QsU0ExQkE7QUEyQkQ0QyxrQkFBVSxvQkFBTTtBQUNkLGlCQUFLekMsT0FBTCxHQUFlLEtBQWY7QUFDRDtBQTdCQSxPQVBIO0FBc0NEOztBQUVEOzs7OzZCQUNTSCxJLEVBQU07QUFDYixVQUFNNkMsTUFBTSxLQUFLekMsSUFBTCxDQUFVa0MsTUFBdEI7QUFDQSxhQUFPLEtBQUtRLFFBQUwsQ0FBYzlDLElBQWQsRUFBb0IrQyxHQUFwQixDQUF3QixVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDOUMsWUFBTUMsT0FBT0wsTUFBTUksS0FBbkI7QUFDQTtBQUNBLGVBQU87QUFDTEUsY0FBSUQsSUFEQztBQUVMdEMsaUJBQU9vQyxLQUFLcEMsS0FGUDtBQUdMd0Msa0dBQTBCSixLQUFLcEMsS0FBL0IsY0FBd0NvQyxLQUFLcEMsS0FBN0MsV0FISztBQUlMeUMsaUJBQU8sZ0JBQVUsQ0FBQ0gsT0FBTyxDQUFSLElBQWEsQ0FBdkIsQ0FKRjtBQUtMSSxnQkFBTSxDQUFDLE1BQUQsRUFBUyxNQUFULENBTEQ7QUFNTEMsa0JBQVFMLE9BQU87QUFOVixTQUFQO0FBUUQsT0FYTSxDQUFQO0FBWUQ7Ozs7RUFqSW1DLGVBQUs3QyxJOztrQkFBdEJULFEiLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IHsgc2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZy5qcydcclxuICBpbXBvcnQgYmFzZSBmcm9tICcuLi8uLi9taXhpbnMvYmFzZSdcclxuICBpbXBvcnQgaHR0cCBmcm9tICcuLi8uLi9taXhpbnMvaHR0cCdcclxuICBpbXBvcnQgeyBmdW5JbWFnZXMgfSBmcm9tICcuLi8uLi9taXhpbnMvZGVtbydcclxuICBpbXBvcnQgQm9va0xpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ib29rTGlzdCdcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgbWFpbkxpc3QgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgbWl4aW5zID0gW2Jhc2UsIGh0dHBdXHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmib7kuaYnXHJcbiAgICB9XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBwYXJhbXM6IHt9LFxyXG5cclxuICAgICAgbm9Nb3JlTGlzdDogZmFsc2UsXHJcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICBsaXN0OiBbXSxcclxuICAgICAgcGFnZTogMCxcclxuICAgICAgc2l6ZTogNVxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZChxdWVyeSkge1xyXG4gICAgICBsZXQgcGFyYW1zID0gcXVlcnkgJiYgcXVlcnkucGFyYW1zXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgcGFyYW1zID0gSlNPTi5wYXJzZShwYXJhbXMpXHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBwYXJhbXMgPSB7fVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucGFyYW1zID0gcGFyYW1zXHJcbiAgICB9XHJcblxyXG4gICAgb25SZWFkeSgpIHtcclxuICAgICAgdGhpcy5pbml0UGFnZURhdGEodGhpcy5wYWdlKVxyXG4gICAgfVxyXG5cclxuICAgIG9uUHVsbERvd25SZWZyZXNoKCkge1xyXG4gICAgICB0aGlzLmluaXRQYWdlRGF0YSgpXHJcbiAgICB9XHJcblxyXG4gICAgb25SZWFjaEJvdHRvbSgpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVCb29rTGlzdCh0aGlzLnBhZ2UpXHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICB9LCAyMDApXHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgY2xlYXJTZWFyY2goKSB7XHJcbiAgICAgICAgLy8g5riF56m65Y+C5pWwXHJcbiAgICAgICAgdGhpcy5wYXJhbXMgPSB7fVxyXG4gICAgICAgIC8vIOWIneWni+WMlumhtemdolxyXG4gICAgICAgIHRoaXMuaW5pdFBhZ2VEYXRhKClcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXB1dGVkID0ge1xyXG4gICAgICBrZXl3b3JkcygpIHtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IHRoaXMucGFyYW1zICYmIHRoaXMucGFyYW1zLnRpdGxlXHJcbiAgICAgICAgY29uc3Qgd29yZHMgPSB0aGlzLnBhcmFtcyAmJiB0aGlzLnBhcmFtcy5rZXlfd29yZFxyXG4gICAgICAgIGNvbnN0IGtleXdvcmRzID0gdGhpcy5nZXRTdHJpbmcod29yZHMgfHwgdGl0bGUpLnNwbGl0KC9cXHMrL2cpXHJcbiAgICAgICAgcmV0dXJuIGtleXdvcmRzLmZpbHRlcigoaXRlbSkgPT4gaXRlbSkgfHwgW11cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOWIneWni+WMlumhtemdouaVsOaNrlxyXG4gICAgaW5pdFBhZ2VEYXRhKCkge1xyXG4gICAgICAvLyDliJ3lp4vljJblj4LmlbBcclxuICAgICAgdGhpcy5wYWdlID0gMFxyXG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICB0aGlzLm5vTW9yZUxpc3QgPSBmYWxzZVxyXG5cclxuICAgICAgLy8g6K+35rGC5o6o6I2Q5YiX6KGoXHJcbiAgICAgIHRoaXMudXBkYXRlQm9va0xpc3QodGhpcy5wYWdlKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOabtOaWsOWbvuS5puWIl+ihqFxyXG4gICAgdXBkYXRlQm9va0xpc3QocGFnZSkge1xyXG4gICAgICBpZiAodGhpcy5sb2FkaW5nIHx8IHRoaXMubm9Nb3JlTGlzdCkgcmV0dXJuXHJcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcclxuICAgICAgLy8g5o6o6I2Q5YiX6KGoXHJcbiAgICAgIHRoaXMuJHBvc3Qoe1xyXG4gICAgICAgIHVybDogc2VydmljZS5saXN0LFxyXG4gICAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZ2V0T2JqZWN0KHRoaXMucGFyYW1zKSwge1xyXG4gICAgICAgICAgLy8g6buY6K6k5LuOMOW8gOWni+S4uuesrOS4gOmhtVxyXG4gICAgICAgICAgcGFnZTogcGFnZSxcclxuICAgICAgICAgIHNpemU6IHRoaXMuc2l6ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBzdWNjZXNzOiAoe2NvZGUsIGRhdGF9KSA9PiB7XHJcbiAgICAgICAgICAvLyDnpLrkvovop4TliJnvvJrmnIDlpJoyMOacrFxyXG4gICAgICAgICAgaWYgKHRoaXMubGlzdC5sZW5ndGggPj0gMjApIHtcclxuICAgICAgICAgICAgdGhpcy5ub01vcmVMaXN0ID0gdHJ1ZVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyDor7fmsYLliLDnqbrliJfooajlkI7lsLHorqTkuLrmsqHmnInmm7TlpJrkuoZcclxuICAgICAgICAgIGlmICh0aGlzLmlzQXJyYXkoZGF0YSkgJiYgZGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5ub01vcmVMaXN0ID0gdHJ1ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKCF0aGlzLnBhZ2UgfHwgK3RoaXMucGFnZSA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3QgPSB0aGlzLmdldEJvb2tzKGRhdGEpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyDmt7vliqDliLDliJfooajkuK1cclxuICAgICAgICAgICAgdGhpcy5saXN0ID0gW1xyXG4gICAgICAgICAgICAgIC4uLnRoaXMubGlzdCxcclxuICAgICAgICAgICAgICAuLi50aGlzLmdldEJvb2tzKGRhdGEpXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIOaIkOWKn+S6huWwseWinuWKoOS4gOmhtVxyXG4gICAgICAgICAgdGhpcy5wYWdlICs9IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWw6ICh7Y29kZSwgZGF0YX0pID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdbdXBkYXRlQm9va0xpc3QgZmFpbF0nLCBjb2RlLCBkYXRhKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcGxldGU6ICgpID0+IHtcclxuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOWkhOeQhuWbvuS5puWIl+ihqFxyXG4gICAgZ2V0Qm9va3MoZGF0YSkge1xyXG4gICAgICBjb25zdCBsZW4gPSB0aGlzLmxpc3QubGVuZ3RoXHJcbiAgICAgIHJldHVybiB0aGlzLmdldEFycmF5KGRhdGEpLm1hcCgoYm9vaywgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCB4bGVuID0gbGVuICsgaW5kZXhcclxuICAgICAgICAvLyDmi7zmjqXnpLrkvovmlbDmja5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgaWQ6IHhsZW4sXHJcbiAgICAgICAgICB0aXRsZTogYm9vay50aXRsZSxcclxuICAgICAgICAgIGNvbnRlbnQ6IGDnroDku4s6IOWkp+WQieWkp+WIqe+8jOS7iuaZmuWQg+m4oeOAgiR7Ym9vay50aXRsZX3vvJske2Jvb2sudGl0bGV944CCYCxcclxuICAgICAgICAgIGltYWdlOiBmdW5JbWFnZXNbKHhsZW4gKyA0KSAlIDhdLFxyXG4gICAgICAgICAgdGFnczogWyd0YWcxJywgJ3RhZzInXSxcclxuICAgICAgICAgIHN0YXR1czogeGxlbiAlIDJcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIkJvb2tMaXN0XCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpsaXN0LnN5bmNcIjpcImxpc3RcIixcInYtYmluZDpsb2FkaW5nLnN5bmNcIjpcImxvYWRpbmdcIixcInYtYmluZDpub01vcmUuc3luY1wiOlwibm9Nb3JlTGlzdFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgIEJvb2tMaXN0XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=