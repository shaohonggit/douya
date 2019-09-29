'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../config.js');

var _base = require('./../mixins/base.js');

var _base2 = _interopRequireDefault(_base);

var _http = require('./../mixins/http.js');

var _http2 = _interopRequireDefault(_http);

var _demo = require('./../mixins/demo.js');

var _swiper = require('./../components/swiper.js');

var _swiper2 = _interopRequireDefault(_swiper);

var _searchbar = require('./../components/searchbar.js');

var _searchbar2 = _interopRequireDefault(_searchbar);

var _category = require('./../components/category.js');

var _category2 = _interopRequireDefault(_category);

var _bookList = require('./../components/bookList.js');

var _bookList2 = _interopRequireDefault(_bookList);

var _card = require('./../components/card.js');

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var pageIndex = function (_wepy$page) {
  _inherits(pageIndex, _wepy$page);

  function pageIndex() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, pageIndex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = pageIndex.__proto__ || Object.getPrototypeOf(pageIndex)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default, _http2.default], _this.config = {
      navigationBarTitleText: '豆芽儿',
      navigationBarTextStyle: 'white',
      navigationBarBackgroundColor: ''
    }, _this.$repeat = { "articleList": { "com": "Card", "props": "" } }, _this.$props = { "Card": { "v-bind:title.once": { "value": "item.title", "for": "articleList", "item": "item", "index": "index", "key": "key" }, "v-bind:content.once": { "value": "item.content", "for": "articleList", "item": "item", "index": "index", "key": "key" }, "v-bind:thumbnail.once": { "value": "item.image", "for": "articleList", "item": "item", "index": "index", "key": "key" } }, "Category": { "v-bind:list.sync": "categorys", "col": "6" }, "Swiper": { "xmlns:v-bind": "", "v-bind:list.sync": "swipers", "height": "280" } }, _this.$events = {}, _this.components = {
      SearchBar: _searchbar2.default,
      Category: _category2.default,
      BookList: _bookList2.default,
      Swiper: _swiper2.default,
      Card: _card2.default
    }, _this.data = {
      searchText: 'book',
      swipers: [
      // 占位图，防止请求错误无图显示
      { image: '/images/swiper1.png'
        // {image: '/images/swiper1.png', url: '/pages/main/search'}
      }],
      categorys: [{ title: '科研创新', image: '/images/category/keyan.png' }, { title: '品德纪实', image: '/images/category/pinde.png' }, { title: '考研考证', image: '/images/category/kaoyan.png' }, { title: '文体特长', image: '/images/category/wenti.png' }, { title: '实习实践', image: '/images/category/xuexi.png' }, { title: '组织领导', image: '/images/category/zuzhi.png' }],
      items: [{ name: '品德素质', id: 'moral' }, { name: '专业素质', id: 'major' }, { name: '身心素质', id: 'physical' }, { name: '综合能力', id: 'integrative' }],

      noMoreList: false,
      loading: false,
      list: [],
      page: 0,
      size: 5,
      navbar: ['我要关注', '谁是大神', '统计预测'],
      currentTab: 0,
      articleList: [],
      isLoadingMore: false,
      currentPage: 1
      // info: ''
    }, _this.methods = {
      read: function read(articleID) {
        console.log(articleID);
        wx.navigateTo({
          url: '/pages/statistics?id=' + articleID
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(pageIndex, [{
    key: 'onLoad',
    value: function onLoad() {
      var _this2 = this;

      wx.showLoading({
        title: '加载中'
      });
      wx.request({
        url: 'https://douyaer.applinzi.com/statistics.php',
        success: function success(res) {
          _this2.articleList = res.data;
          // console.log('this.articleList:', this.articleList)
          // console.log(typeof (this.articleList))
          _this2.$apply();
          wx.hideLoading();
        }
      });
    }
  }, {
    key: 'onReady',
    value: function onReady() {
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
      var _this3 = this;

      setTimeout(function () {
        _this3.updateBookList(_this3.page);
        _this3.$apply();
      }, 200);
    }

    // 初始化页面数据

  }, {
    key: 'initPageData',
    value: function initPageData() {
      // 初始化参数
      this.page = 0;

      // 请求列表
      this.updateBookList(this.page);

      // 处理轮播图
      this.swipers.push({ image: '/images/swiper1.png' });
      // 处理菜单栏
      this.categorys.map(function (cate, index) {
        // const xnum = Math.min(Math.max(index, 1), 6)
        // cate.url = `/pages/main/search?params=${this.$json({
        //   value: [xnum, 6 - xnum].map(item => this.getString(item)),
        //   index: index + 1,
        //   title: cate.title
        // })}`
        // 取数字作为数组的变量值要用this.$json,如params=${this.$json(index + 1)}取汉字不需要
        cate.url = '/pages/focus/smallclass?params=' + cate.title;
      });
    }

    // 更新图书列表

  }, {
    key: 'updateBookList',
    value: function updateBookList(page) {
      var _this4 = this;

      if (this.loading || this.noMoreList) return;
      this.loading = true;
      // 请求列表
      this.$post({
        url: _config.service.list,
        data: {
          // 默认从0开始为第一页
          page: page,
          size: this.size
        }
      }, {
        success: function success(_ref2) {
          var code = _ref2.code,
              data = _ref2.data;

          // 示例规则：最多20本
          if (_this4.list.length >= 20) {
            _this4.noMoreList = true;
            return;
          }
          // 请求到空列表后就认为没有更多了
          if (_this4.isArray(data) && data.length === 0) {
            _this4.noMoreList = true;
            return;
          }
          if (!_this4.page || +_this4.page === 0) {
            _this4.list = _this4.getBooks(data);
          } else {
            // 添加到列表中
            _this4.list = [].concat(_toConsumableArray(_this4.list), _toConsumableArray(_this4.getBooks(data)));
          }
          // 成功了就增加一页
          _this4.page += 1;
        },
        fail: function fail(_ref3) {
          // 失败了什么也不做

          var code = _ref3.code,
              data = _ref3.data;
        },
        complete: function complete() {
          _this4.loading = false;
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
  }, {
    key: 'navbarTap',
    value: function navbarTap(e) {
      this.currentTab = e.currentTarget.dataset.idx;
    }
  }]);

  return pageIndex;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(pageIndex , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInBhZ2VJbmRleCIsIm1peGlucyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIlNlYXJjaEJhciIsIkNhdGVnb3J5IiwiQm9va0xpc3QiLCJTd2lwZXIiLCJDYXJkIiwiZGF0YSIsInNlYXJjaFRleHQiLCJzd2lwZXJzIiwiaW1hZ2UiLCJjYXRlZ29yeXMiLCJ0aXRsZSIsIml0ZW1zIiwibmFtZSIsImlkIiwibm9Nb3JlTGlzdCIsImxvYWRpbmciLCJsaXN0IiwicGFnZSIsInNpemUiLCJuYXZiYXIiLCJjdXJyZW50VGFiIiwiYXJ0aWNsZUxpc3QiLCJpc0xvYWRpbmdNb3JlIiwiY3VycmVudFBhZ2UiLCJtZXRob2RzIiwicmVhZCIsImFydGljbGVJRCIsImNvbnNvbGUiLCJsb2ciLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJzaG93TG9hZGluZyIsInJlcXVlc3QiLCJzdWNjZXNzIiwicmVzIiwiJGFwcGx5IiwiaGlkZUxvYWRpbmciLCJpbml0UGFnZURhdGEiLCJzZXRUaW1lb3V0IiwidXBkYXRlQm9va0xpc3QiLCJwdXNoIiwibWFwIiwiY2F0ZSIsImluZGV4IiwiJHBvc3QiLCJjb2RlIiwibGVuZ3RoIiwiaXNBcnJheSIsImdldEJvb2tzIiwiZmFpbCIsImNvbXBsZXRlIiwibGVuIiwiZ2V0QXJyYXkiLCJib29rIiwieGxlbiIsImNvbnRlbnQiLCJ0YWdzIiwic3RhdHVzIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaWR4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxNLEdBQVMsZ0MsUUFDVEMsTSxHQUFTO0FBQ1BDLDhCQUF3QixLQURqQjtBQUVQQyw4QkFBd0IsT0FGakI7QUFHUEMsb0NBQThCO0FBSHZCLEssUUFLVkMsTyxHQUFVLEVBQUMsZUFBYyxFQUFDLE9BQU0sTUFBUCxFQUFjLFNBQVEsRUFBdEIsRUFBZixFLFFBQ2JDLE0sR0FBUyxFQUFDLFFBQU8sRUFBQyxxQkFBb0IsRUFBQyxTQUFRLFlBQVQsRUFBc0IsT0FBTSxhQUE1QixFQUEwQyxRQUFPLE1BQWpELEVBQXdELFNBQVEsT0FBaEUsRUFBd0UsT0FBTSxLQUE5RSxFQUFyQixFQUEwRyx1QkFBc0IsRUFBQyxTQUFRLGNBQVQsRUFBd0IsT0FBTSxhQUE5QixFQUE0QyxRQUFPLE1BQW5ELEVBQTBELFNBQVEsT0FBbEUsRUFBMEUsT0FBTSxLQUFoRixFQUFoSSxFQUF1Tix5QkFBd0IsRUFBQyxTQUFRLFlBQVQsRUFBc0IsT0FBTSxhQUE1QixFQUEwQyxRQUFPLE1BQWpELEVBQXdELFNBQVEsT0FBaEUsRUFBd0UsT0FBTSxLQUE5RSxFQUEvTyxFQUFSLEVBQTZVLFlBQVcsRUFBQyxvQkFBbUIsV0FBcEIsRUFBZ0MsT0FBTSxHQUF0QyxFQUF4VixFQUFtWSxVQUFTLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsb0JBQW1CLFNBQXRDLEVBQWdELFVBQVMsS0FBekQsRUFBNVksRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkMsb0NBRFE7QUFFUkMsa0NBRlE7QUFHUkMsa0NBSFE7QUFJUkMsOEJBSlE7QUFLUkM7QUFMUSxLLFFBT1ZDLEksR0FBTztBQUNMQyxrQkFBWSxNQURQO0FBRUxDLGVBQVM7QUFDUDtBQUNBLFFBQUNDLE9BQU87QUFDUjtBQURBLE9BRk8sQ0FGSjtBQU9MQyxpQkFBVyxDQUNULEVBQUNDLE9BQU8sTUFBUixFQUFnQkYsT0FBTyw0QkFBdkIsRUFEUyxFQUVULEVBQUNFLE9BQU8sTUFBUixFQUFnQkYsT0FBTyw0QkFBdkIsRUFGUyxFQUdULEVBQUNFLE9BQU8sTUFBUixFQUFnQkYsT0FBTyw2QkFBdkIsRUFIUyxFQUlULEVBQUNFLE9BQU8sTUFBUixFQUFnQkYsT0FBTyw0QkFBdkIsRUFKUyxFQUtULEVBQUNFLE9BQU8sTUFBUixFQUFnQkYsT0FBTyw0QkFBdkIsRUFMUyxFQU1ULEVBQUNFLE9BQU8sTUFBUixFQUFnQkYsT0FBTyw0QkFBdkIsRUFOUyxDQVBOO0FBZUxHLGFBQU8sQ0FDTCxFQUFDQyxNQUFNLE1BQVAsRUFBZUMsSUFBSSxPQUFuQixFQURLLEVBRUwsRUFBQ0QsTUFBTSxNQUFQLEVBQWVDLElBQUksT0FBbkIsRUFGSyxFQUdMLEVBQUNELE1BQU0sTUFBUCxFQUFlQyxJQUFJLFVBQW5CLEVBSEssRUFJTCxFQUFDRCxNQUFNLE1BQVAsRUFBZUMsSUFBSSxhQUFuQixFQUpLLENBZkY7O0FBc0JMQyxrQkFBWSxLQXRCUDtBQXVCTEMsZUFBUyxLQXZCSjtBQXdCTEMsWUFBTSxFQXhCRDtBQXlCTEMsWUFBTSxDQXpCRDtBQTBCTEMsWUFBTSxDQTFCRDtBQTJCTEMsY0FBUSxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLE1BQWpCLENBM0JIO0FBNEJMQyxrQkFBWSxDQTVCUDtBQTZCTEMsbUJBQWEsRUE3QlI7QUE4QkxDLHFCQUFlLEtBOUJWO0FBK0JMQyxtQkFBYTtBQUNiO0FBaENLLEssUUFrQ1BDLE8sR0FBUTtBQUNOQyxVQURNLGdCQUNEQyxTQURDLEVBQ1U7QUFDZEMsZ0JBQVFDLEdBQVIsQ0FBWUYsU0FBWjtBQUNBRyxXQUFHQyxVQUFILENBQWM7QUFDWkMsZUFBSywwQkFBMEJMO0FBRG5CLFNBQWQ7QUFHRDtBQU5LLEs7Ozs7OzZCQVFDO0FBQUE7O0FBQ1BHLFNBQUdHLFdBQUgsQ0FBZTtBQUNidEIsZUFBTztBQURNLE9BQWY7QUFHQW1CLFNBQUdJLE9BQUgsQ0FBVztBQUNURixhQUFLLDZDQURJO0FBRVRHLGlCQUFTLGlCQUFDQyxHQUFELEVBQVM7QUFDaEIsaUJBQUtkLFdBQUwsR0FBbUJjLElBQUk5QixJQUF2QjtBQUNBO0FBQ0E7QUFDQSxpQkFBSytCLE1BQUw7QUFDQVAsYUFBR1EsV0FBSDtBQUNEO0FBUlEsT0FBWDtBQVVEOzs7OEJBQ1M7QUFDUixXQUFLQyxZQUFMO0FBQ0Q7Ozt3Q0FFbUI7QUFDbEIsV0FBS0EsWUFBTDtBQUNEOzs7b0NBRWU7QUFBQTs7QUFDZEMsaUJBQVcsWUFBTTtBQUNmLGVBQUtDLGNBQUwsQ0FBb0IsT0FBS3ZCLElBQXpCO0FBQ0EsZUFBS21CLE1BQUw7QUFDRCxPQUhELEVBR0csR0FISDtBQUlEOztBQUVEOzs7O21DQUNlO0FBQ2I7QUFDQSxXQUFLbkIsSUFBTCxHQUFZLENBQVo7O0FBRUE7QUFDQSxXQUFLdUIsY0FBTCxDQUFvQixLQUFLdkIsSUFBekI7O0FBRUE7QUFDQSxXQUFLVixPQUFMLENBQWFrQyxJQUFiLENBQWtCLEVBQUNqQyxPQUFPLHFCQUFSLEVBQWxCO0FBQ0E7QUFDQSxXQUFLQyxTQUFMLENBQWVpQyxHQUFmLENBQW1CLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBRCxhQUFLWixHQUFMLHVDQUE2Q1ksS0FBS2pDLEtBQWxEO0FBQ0QsT0FURDtBQVVEOztBQUVEOzs7O21DQUNlTyxJLEVBQU07QUFBQTs7QUFDbkIsVUFBSSxLQUFLRixPQUFMLElBQWdCLEtBQUtELFVBQXpCLEVBQXFDO0FBQ3JDLFdBQUtDLE9BQUwsR0FBZSxJQUFmO0FBQ0E7QUFDQSxXQUFLOEIsS0FBTCxDQUFXO0FBQ1RkLGFBQUssZ0JBQVFmLElBREo7QUFFVFgsY0FBTTtBQUNKO0FBQ0FZLGdCQUFNQSxJQUZGO0FBR0pDLGdCQUFNLEtBQUtBO0FBSFA7QUFGRyxPQUFYLEVBT0c7QUFDRGdCLGlCQUFTLHdCQUFrQjtBQUFBLGNBQWhCWSxJQUFnQixTQUFoQkEsSUFBZ0I7QUFBQSxjQUFWekMsSUFBVSxTQUFWQSxJQUFVOztBQUN6QjtBQUNBLGNBQUksT0FBS1csSUFBTCxDQUFVK0IsTUFBVixJQUFvQixFQUF4QixFQUE0QjtBQUMxQixtQkFBS2pDLFVBQUwsR0FBa0IsSUFBbEI7QUFDQTtBQUNEO0FBQ0Q7QUFDQSxjQUFJLE9BQUtrQyxPQUFMLENBQWEzQyxJQUFiLEtBQXNCQSxLQUFLMEMsTUFBTCxLQUFnQixDQUExQyxFQUE2QztBQUMzQyxtQkFBS2pDLFVBQUwsR0FBa0IsSUFBbEI7QUFDQTtBQUNEO0FBQ0QsY0FBSSxDQUFDLE9BQUtHLElBQU4sSUFBYyxDQUFDLE9BQUtBLElBQU4sS0FBZSxDQUFqQyxFQUFvQztBQUNsQyxtQkFBS0QsSUFBTCxHQUFZLE9BQUtpQyxRQUFMLENBQWM1QyxJQUFkLENBQVo7QUFDRCxXQUZELE1BRU87QUFDTDtBQUNBLG1CQUFLVyxJQUFMLGdDQUNLLE9BQUtBLElBRFYsc0JBRUssT0FBS2lDLFFBQUwsQ0FBYzVDLElBQWQsQ0FGTDtBQUlEO0FBQ0Q7QUFDQSxpQkFBS1ksSUFBTCxJQUFhLENBQWI7QUFDRCxTQXZCQTtBQXdCRGlDLGNBQU0scUJBQWtCO0FBQ3RCOztBQURzQixjQUFoQkosSUFBZ0IsU0FBaEJBLElBQWdCO0FBQUEsY0FBVnpDLElBQVUsU0FBVkEsSUFBVTtBQUV2QixTQTFCQTtBQTJCRDhDLGtCQUFVLG9CQUFNO0FBQ2QsaUJBQUtwQyxPQUFMLEdBQWUsS0FBZjtBQUNEO0FBN0JBLE9BUEg7QUFzQ0Q7O0FBRUQ7Ozs7NkJBQ1NWLEksRUFBTTtBQUNiLFVBQU0rQyxNQUFNLEtBQUtwQyxJQUFMLENBQVUrQixNQUF0QjtBQUNBLGFBQU8sS0FBS00sUUFBTCxDQUFjaEQsSUFBZCxFQUFvQnFDLEdBQXBCLENBQXdCLFVBQUNZLElBQUQsRUFBT1YsS0FBUCxFQUFpQjtBQUM5QyxZQUFNVyxPQUFPSCxNQUFNUixLQUFuQjtBQUNBO0FBQ0EsZUFBTztBQUNML0IsY0FBSTBDLElBREM7QUFFTDdDLGlCQUFPNEMsS0FBSzVDLEtBRlA7QUFHTDhDLGtHQUEwQkYsS0FBSzVDLEtBQS9CLGNBQXdDNEMsS0FBSzVDLEtBQTdDLFdBSEs7QUFJTEYsaUJBQU8sZ0JBQVUsQ0FBQytDLE9BQU8sQ0FBUixJQUFhLENBQXZCLENBSkY7QUFLTEUsZ0JBQU0sQ0FBQyxNQUFELEVBQVMsTUFBVCxDQUxEO0FBTUxDLGtCQUFRSCxPQUFPO0FBTlYsU0FBUDtBQVFELE9BWE0sQ0FBUDtBQVlEOzs7OEJBRVNJLEMsRUFBRztBQUNYLFdBQUt2QyxVQUFMLEdBQWtCdUMsRUFBRUMsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JDLEdBQTFDO0FBQ0Q7Ozs7RUFoTG9DLGVBQUs3QyxJOztrQkFBdkIzQixTIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgeyBzZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlnLmpzJ1xyXG4gIGltcG9ydCBiYXNlIGZyb20gJy4uL21peGlucy9iYXNlJ1xyXG4gIGltcG9ydCBodHRwIGZyb20gJy4uL21peGlucy9odHRwJ1xyXG4gIGltcG9ydCB7IGZ1bkltYWdlcyB9IGZyb20gJy4uL21peGlucy9kZW1vJ1xyXG4gIGltcG9ydCBTd2lwZXIgZnJvbSAnLi4vY29tcG9uZW50cy9zd2lwZXInXHJcbiAgaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuLi9jb21wb25lbnRzL3NlYXJjaGJhcidcclxuICBpbXBvcnQgQ2F0ZWdvcnkgZnJvbSAnLi4vY29tcG9uZW50cy9jYXRlZ29yeSdcclxuICBpbXBvcnQgQm9va0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9ib29rTGlzdCdcclxuICBpbXBvcnQgQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL2NhcmQnXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHBhZ2VJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBtaXhpbnMgPSBbYmFzZSwgaHR0cF1cclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+ixhuiKveWEvycsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICd3aGl0ZScsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcnXHJcbiAgICB9XHJcbiAgICRyZXBlYXQgPSB7XCJhcnRpY2xlTGlzdFwiOntcImNvbVwiOlwiQ2FyZFwiLFwicHJvcHNcIjpcIlwifX07XHJcbiRwcm9wcyA9IHtcIkNhcmRcIjp7XCJ2LWJpbmQ6dGl0bGUub25jZVwiOntcInZhbHVlXCI6XCJpdGVtLnRpdGxlXCIsXCJmb3JcIjpcImFydGljbGVMaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwia2V5XCJ9LFwidi1iaW5kOmNvbnRlbnQub25jZVwiOntcInZhbHVlXCI6XCJpdGVtLmNvbnRlbnRcIixcImZvclwiOlwiYXJ0aWNsZUxpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJrZXlcIn0sXCJ2LWJpbmQ6dGh1bWJuYWlsLm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaXRlbS5pbWFnZVwiLFwiZm9yXCI6XCJhcnRpY2xlTGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwifX0sXCJDYXRlZ29yeVwiOntcInYtYmluZDpsaXN0LnN5bmNcIjpcImNhdGVnb3J5c1wiLFwiY29sXCI6XCI2XCJ9LFwiU3dpcGVyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpsaXN0LnN5bmNcIjpcInN3aXBlcnNcIixcImhlaWdodFwiOlwiMjgwXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgU2VhcmNoQmFyLFxyXG4gICAgICBDYXRlZ29yeSxcclxuICAgICAgQm9va0xpc3QsXHJcbiAgICAgIFN3aXBlcixcclxuICAgICAgQ2FyZFxyXG4gICAgfVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgc2VhcmNoVGV4dDogJ2Jvb2snLFxyXG4gICAgICBzd2lwZXJzOiBbXHJcbiAgICAgICAgLy8g5Y2g5L2N5Zu+77yM6Ziy5q2i6K+35rGC6ZSZ6K+v5peg5Zu+5pi+56S6XHJcbiAgICAgICAge2ltYWdlOiAnL2ltYWdlcy9zd2lwZXIxLnBuZyd9XHJcbiAgICAgICAgLy8ge2ltYWdlOiAnL2ltYWdlcy9zd2lwZXIxLnBuZycsIHVybDogJy9wYWdlcy9tYWluL3NlYXJjaCd9XHJcbiAgICAgIF0sXHJcbiAgICAgIGNhdGVnb3J5czogW1xyXG4gICAgICAgIHt0aXRsZTogJ+enkeeglOWIm+aWsCcsIGltYWdlOiAnL2ltYWdlcy9jYXRlZ29yeS9rZXlhbi5wbmcnfSxcclxuICAgICAgICB7dGl0bGU6ICflk4Hlvrfnuqrlrp4nLCBpbWFnZTogJy9pbWFnZXMvY2F0ZWdvcnkvcGluZGUucG5nJ30sXHJcbiAgICAgICAge3RpdGxlOiAn6ICD56CU6ICD6K+BJywgaW1hZ2U6ICcvaW1hZ2VzL2NhdGVnb3J5L2thb3lhbi5wbmcnfSxcclxuICAgICAgICB7dGl0bGU6ICfmlofkvZPnibnplb8nLCBpbWFnZTogJy9pbWFnZXMvY2F0ZWdvcnkvd2VudGkucG5nJ30sXHJcbiAgICAgICAge3RpdGxlOiAn5a6e5Lmg5a6e6Le1JywgaW1hZ2U6ICcvaW1hZ2VzL2NhdGVnb3J5L3h1ZXhpLnBuZyd9LFxyXG4gICAgICAgIHt0aXRsZTogJ+e7hOe7h+mihuWvvCcsIGltYWdlOiAnL2ltYWdlcy9jYXRlZ29yeS96dXpoaS5wbmcnfVxyXG4gICAgICBdLFxyXG4gICAgICBpdGVtczogW1xyXG4gICAgICAgIHtuYW1lOiAn5ZOB5b6357Sg6LSoJywgaWQ6ICdtb3JhbCd9LFxyXG4gICAgICAgIHtuYW1lOiAn5LiT5Lia57Sg6LSoJywgaWQ6ICdtYWpvcid9LFxyXG4gICAgICAgIHtuYW1lOiAn6Lqr5b+D57Sg6LSoJywgaWQ6ICdwaHlzaWNhbCd9LFxyXG4gICAgICAgIHtuYW1lOiAn57u85ZCI6IO95YqbJywgaWQ6ICdpbnRlZ3JhdGl2ZSd9XHJcbiAgICAgIF0sXHJcblxyXG4gICAgICBub01vcmVMaXN0OiBmYWxzZSxcclxuICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgIGxpc3Q6IFtdLFxyXG4gICAgICBwYWdlOiAwLFxyXG4gICAgICBzaXplOiA1LFxyXG4gICAgICBuYXZiYXI6IFsn5oiR6KaB5YWz5rOoJywgJ+iwgeaYr+Wkp+elnicsICfnu5/orqHpooTmtYsnXSxcclxuICAgICAgY3VycmVudFRhYjogMCxcclxuICAgICAgYXJ0aWNsZUxpc3Q6IFsgXSxcclxuICAgICAgaXNMb2FkaW5nTW9yZTogZmFsc2UsXHJcbiAgICAgIGN1cnJlbnRQYWdlOiAxXHJcbiAgICAgIC8vIGluZm86ICcnXHJcbiAgICB9XHJcbiAgICBtZXRob2RzPXtcclxuICAgICAgcmVhZChhcnRpY2xlSUQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhhcnRpY2xlSUQpXHJcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvc3RhdGlzdGljcz9pZD0nICsgYXJ0aWNsZUlEXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgdGl0bGU6ICfliqDovb3kuK0nXHJcbiAgICAgIH0pXHJcbiAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vZG91eWFlci5hcHBsaW56aS5jb20vc3RhdGlzdGljcy5waHAnLFxyXG4gICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgIHRoaXMuYXJ0aWNsZUxpc3QgPSByZXMuZGF0YVxyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoaXMuYXJ0aWNsZUxpc3Q6JywgdGhpcy5hcnRpY2xlTGlzdClcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHR5cGVvZiAodGhpcy5hcnRpY2xlTGlzdCkpXHJcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgICB3eC5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgb25SZWFkeSgpIHtcclxuICAgICAgdGhpcy5pbml0UGFnZURhdGEoKVxyXG4gICAgfVxyXG5cclxuICAgIG9uUHVsbERvd25SZWZyZXNoKCkge1xyXG4gICAgICB0aGlzLmluaXRQYWdlRGF0YSgpXHJcbiAgICB9XHJcblxyXG4gICAgb25SZWFjaEJvdHRvbSgpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVCb29rTGlzdCh0aGlzLnBhZ2UpXHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICB9LCAyMDApXHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Yid5aeL5YyW6aG16Z2i5pWw5o2uXHJcbiAgICBpbml0UGFnZURhdGEoKSB7XHJcbiAgICAgIC8vIOWIneWni+WMluWPguaVsFxyXG4gICAgICB0aGlzLnBhZ2UgPSAwXHJcblxyXG4gICAgICAvLyDor7fmsYLliJfooahcclxuICAgICAgdGhpcy51cGRhdGVCb29rTGlzdCh0aGlzLnBhZ2UpXHJcblxyXG4gICAgICAvLyDlpITnkIbova7mkq3lm75cclxuICAgICAgdGhpcy5zd2lwZXJzLnB1c2goe2ltYWdlOiAnL2ltYWdlcy9zd2lwZXIxLnBuZyd9KVxyXG4gICAgICAvLyDlpITnkIboj5zljZXmoI9cclxuICAgICAgdGhpcy5jYXRlZ29yeXMubWFwKChjYXRlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnN0IHhudW0gPSBNYXRoLm1pbihNYXRoLm1heChpbmRleCwgMSksIDYpXHJcbiAgICAgICAgLy8gY2F0ZS51cmwgPSBgL3BhZ2VzL21haW4vc2VhcmNoP3BhcmFtcz0ke3RoaXMuJGpzb24oe1xyXG4gICAgICAgIC8vICAgdmFsdWU6IFt4bnVtLCA2IC0geG51bV0ubWFwKGl0ZW0gPT4gdGhpcy5nZXRTdHJpbmcoaXRlbSkpLFxyXG4gICAgICAgIC8vICAgaW5kZXg6IGluZGV4ICsgMSxcclxuICAgICAgICAvLyAgIHRpdGxlOiBjYXRlLnRpdGxlXHJcbiAgICAgICAgLy8gfSl9YFxyXG4gICAgICAgIC8vIOWPluaVsOWtl+S9nOS4uuaVsOe7hOeahOWPmOmHj+WAvOimgeeUqHRoaXMuJGpzb24s5aaCcGFyYW1zPSR7dGhpcy4kanNvbihpbmRleCArIDEpfeWPluaxieWtl+S4jemcgOimgVxyXG4gICAgICAgIGNhdGUudXJsID0gYC9wYWdlcy9mb2N1cy9zbWFsbGNsYXNzP3BhcmFtcz0ke2NhdGUudGl0bGV9YFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOabtOaWsOWbvuS5puWIl+ihqFxyXG4gICAgdXBkYXRlQm9va0xpc3QocGFnZSkge1xyXG4gICAgICBpZiAodGhpcy5sb2FkaW5nIHx8IHRoaXMubm9Nb3JlTGlzdCkgcmV0dXJuXHJcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcclxuICAgICAgLy8g6K+35rGC5YiX6KGoXHJcbiAgICAgIHRoaXMuJHBvc3Qoe1xyXG4gICAgICAgIHVybDogc2VydmljZS5saXN0LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIC8vIOm7mOiupOS7jjDlvIDlp4vkuLrnrKzkuIDpobVcclxuICAgICAgICAgIHBhZ2U6IHBhZ2UsXHJcbiAgICAgICAgICBzaXplOiB0aGlzLnNpemVcclxuICAgICAgICB9XHJcbiAgICAgIH0sIHtcclxuICAgICAgICBzdWNjZXNzOiAoe2NvZGUsIGRhdGF9KSA9PiB7XHJcbiAgICAgICAgICAvLyDnpLrkvovop4TliJnvvJrmnIDlpJoyMOacrFxyXG4gICAgICAgICAgaWYgKHRoaXMubGlzdC5sZW5ndGggPj0gMjApIHtcclxuICAgICAgICAgICAgdGhpcy5ub01vcmVMaXN0ID0gdHJ1ZVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIOivt+axguWIsOepuuWIl+ihqOWQjuWwseiupOS4uuayoeacieabtOWkmuS6hlxyXG4gICAgICAgICAgaWYgKHRoaXMuaXNBcnJheShkYXRhKSAmJiBkYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vTW9yZUxpc3QgPSB0cnVlXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKCF0aGlzLnBhZ2UgfHwgK3RoaXMucGFnZSA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3QgPSB0aGlzLmdldEJvb2tzKGRhdGEpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyDmt7vliqDliLDliJfooajkuK1cclxuICAgICAgICAgICAgdGhpcy5saXN0ID0gW1xyXG4gICAgICAgICAgICAgIC4uLnRoaXMubGlzdCxcclxuICAgICAgICAgICAgICAuLi50aGlzLmdldEJvb2tzKGRhdGEpXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIOaIkOWKn+S6huWwseWinuWKoOS4gOmhtVxyXG4gICAgICAgICAgdGhpcy5wYWdlICs9IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWw6ICh7Y29kZSwgZGF0YX0pID0+IHtcclxuICAgICAgICAgIC8vIOWksei0peS6huS7gOS5iOS5n+S4jeWBmlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcGxldGU6ICgpID0+IHtcclxuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOWkhOeQhuWbvuS5puWIl+ihqFxyXG4gICAgZ2V0Qm9va3MoZGF0YSkge1xyXG4gICAgICBjb25zdCBsZW4gPSB0aGlzLmxpc3QubGVuZ3RoXHJcbiAgICAgIHJldHVybiB0aGlzLmdldEFycmF5KGRhdGEpLm1hcCgoYm9vaywgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCB4bGVuID0gbGVuICsgaW5kZXhcclxuICAgICAgICAvLyDmi7zmjqXnpLrkvovmlbDmja5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgaWQ6IHhsZW4sXHJcbiAgICAgICAgICB0aXRsZTogYm9vay50aXRsZSxcclxuICAgICAgICAgIGNvbnRlbnQ6IGDnroDku4s6IOWkp+WQieWkp+WIqe+8jOS7iuaZmuWQg+m4oeOAgiR7Ym9vay50aXRsZX3vvJske2Jvb2sudGl0bGV944CCYCxcclxuICAgICAgICAgIGltYWdlOiBmdW5JbWFnZXNbKHhsZW4gKyA0KSAlIDhdLFxyXG4gICAgICAgICAgdGFnczogWyd0YWcxJywgJ3RhZzInXSxcclxuICAgICAgICAgIHN0YXR1czogeGxlbiAlIDJcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgbmF2YmFyVGFwKGUpIHtcclxuICAgICAgdGhpcy5jdXJyZW50VGFiID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWR4XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=