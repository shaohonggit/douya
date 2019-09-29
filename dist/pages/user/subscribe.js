'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _http = require('./../../mixins/http.js');

var _http2 = _interopRequireDefault(_http);

var _base = require('./../../mixins/base.js');

var _base2 = _interopRequireDefault(_base);

var _user = require('./../../mixins/user.js');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { service } from '../../config.js'


var userSubscribe = function (_wepy$page) {
  _inherits(userSubscribe, _wepy$page);

  function userSubscribe() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, userSubscribe);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = userSubscribe.__proto__ || Object.getPrototypeOf(userSubscribe)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default, _http2.default, _user2.default], _this.config = {
      navigationBarTitleText: '我的订阅'
    }, _this.data = {
      // 后置显示按钮
      loaded: false,
      // 面板数据
      list: [{
        key: 'remain',
        unit: '天',
        value: 0,
        title: '0天',
        subtitle: '剩余天数'
      }, {
        key: 'times',
        unit: '次',
        value: 0,
        title: '0次',
        subtitle: '可借'
      }, {
        key: 'quantity',
        unit: '本',
        value: 0,
        title: '0本',
        subtitle: '每次可借'
      }]
    }, _this.computed = {
      isShowBtn: function isShowBtn() {
        var _this2 = this;

        return !this.list.reduce(function (pre, post) {
          return (_this2.isObject(pre) ? pre.value : pre) && !!post.value;
        });
      }
    }, _this.methods = {
      change: function change() {
        wx.navigateTo({
          url: '/pages/borrow/subscribe'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(userSubscribe, [{
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
      var _this3 = this;

      // 根据业务接口处理:请求套餐详情
      // this.$get({url: service.package}, {
      //   success: ({code, data}) => {},
      //   fail: ({code, data}) => {},
      //   complete: () => {this.loaded = false}
      // })

      // =============== 随机示例 ===============
      this.$getUserInfo(function (_ref2) {
        var packages = _ref2.packages;

        var list = _this3.getArray(_this3.list);
        list.map(function (obj) {
          var item = _this3.getObject(obj);
          var unit = _this3.getString(item.unit);
          var value = _this3.getNumber(packages[item.key], null);
          value && Object.assign(item, {
            title: '' + value + unit,
            value: value
          });
          return item;
        });
        _this3.list = list;
        _this3.loaded = true;
      });
    }
  }]);

  return userSubscribe;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(userSubscribe , 'pages/user/subscribe'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnNjcmliZS5qcyJdLCJuYW1lcyI6WyJ1c2VyU3Vic2NyaWJlIiwibWl4aW5zIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJsb2FkZWQiLCJsaXN0Iiwia2V5IiwidW5pdCIsInZhbHVlIiwidGl0bGUiLCJzdWJ0aXRsZSIsImNvbXB1dGVkIiwiaXNTaG93QnRuIiwicmVkdWNlIiwicHJlIiwicG9zdCIsImlzT2JqZWN0IiwibWV0aG9kcyIsImNoYW5nZSIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsImluaXRQYWdlRGF0YSIsIiRnZXRVc2VySW5mbyIsInBhY2thZ2VzIiwiZ2V0QXJyYXkiLCJtYXAiLCJvYmoiLCJpdGVtIiwiZ2V0T2JqZWN0IiwiZ2V0U3RyaW5nIiwiZ2V0TnVtYmVyIiwiT2JqZWN0IiwiYXNzaWduIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBSEE7OztJQUtxQkEsYTs7Ozs7Ozs7Ozs7Ozs7b01BQ25CQyxNLEdBQVMsZ0QsUUFDVEMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMO0FBQ0FDLGNBQVEsS0FGSDtBQUdMO0FBQ0FDLFlBQU0sQ0FBQztBQUNMQyxhQUFLLFFBREE7QUFFTEMsY0FBTSxHQUZEO0FBR0xDLGVBQU8sQ0FIRjtBQUlMQyxlQUFPLElBSkY7QUFLTEMsa0JBQVU7QUFMTCxPQUFELEVBTUg7QUFDREosYUFBSyxPQURKO0FBRURDLGNBQU0sR0FGTDtBQUdEQyxlQUFPLENBSE47QUFJREMsZUFBTyxJQUpOO0FBS0RDLGtCQUFVO0FBTFQsT0FORyxFQVlIO0FBQ0RKLGFBQUssVUFESjtBQUVEQyxjQUFNLEdBRkw7QUFHREMsZUFBTyxDQUhOO0FBSURDLGVBQU8sSUFKTjtBQUtEQyxrQkFBVTtBQUxULE9BWkc7QUFKRCxLLFFBeUJQQyxRLEdBQVc7QUFDVEMsZUFEUyx1QkFDRztBQUFBOztBQUNWLGVBQU8sQ0FBQyxLQUFLUCxJQUFMLENBQVVRLE1BQVYsQ0FBaUIsVUFBQ0MsR0FBRCxFQUFNQyxJQUFOLEVBQWU7QUFDdEMsaUJBQU8sQ0FBQyxPQUFLQyxRQUFMLENBQWNGLEdBQWQsSUFBcUJBLElBQUlOLEtBQXpCLEdBQWlDTSxHQUFsQyxLQUEwQyxDQUFDLENBQUNDLEtBQUtQLEtBQXhEO0FBQ0QsU0FGTyxDQUFSO0FBR0Q7QUFMUSxLLFFBNENYUyxPLEdBQVU7QUFDUkMsWUFEUSxvQkFDQztBQUNQQyxXQUFHQyxVQUFILENBQWM7QUFDWkMsZUFBSztBQURPLFNBQWQ7QUFHRDtBQUxPLEs7Ozs7OzZCQXBDRDtBQUNQO0FBQ0EsV0FBS0MsWUFBTDtBQUNEOzs7d0NBRW1CO0FBQ2xCLFdBQUtBLFlBQUw7QUFDRDs7QUFFRDs7OzttQ0FDZTtBQUFBOztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQUtDLFlBQUwsQ0FBa0IsaUJBQWdCO0FBQUEsWUFBZEMsUUFBYyxTQUFkQSxRQUFjOztBQUNoQyxZQUFNbkIsT0FBTyxPQUFLb0IsUUFBTCxDQUFjLE9BQUtwQixJQUFuQixDQUFiO0FBQ0FBLGFBQUtxQixHQUFMLENBQVMsVUFBQ0MsR0FBRCxFQUFTO0FBQ2hCLGNBQU1DLE9BQU8sT0FBS0MsU0FBTCxDQUFlRixHQUFmLENBQWI7QUFDQSxjQUFNcEIsT0FBTyxPQUFLdUIsU0FBTCxDQUFlRixLQUFLckIsSUFBcEIsQ0FBYjtBQUNBLGNBQU1DLFFBQVEsT0FBS3VCLFNBQUwsQ0FBZVAsU0FBU0ksS0FBS3RCLEdBQWQsQ0FBZixFQUFtQyxJQUFuQyxDQUFkO0FBQ0FFLG1CQUFTd0IsT0FBT0MsTUFBUCxDQUFjTCxJQUFkLEVBQW9CO0FBQzNCbkIsd0JBQVVELEtBQVYsR0FBa0JELElBRFM7QUFFM0JDLG1CQUFPQTtBQUZvQixXQUFwQixDQUFUO0FBSUEsaUJBQU9vQixJQUFQO0FBQ0QsU0FURDtBQVVBLGVBQUt2QixJQUFMLEdBQVlBLElBQVo7QUFDQSxlQUFLRCxNQUFMLEdBQWMsSUFBZDtBQUNELE9BZEQ7QUFlRDs7OztFQXhFd0MsZUFBSzhCLEk7O2tCQUEzQm5DLGEiLCJmaWxlIjoic3Vic2NyaWJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICAvLyBpbXBvcnQgeyBzZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29uZmlnLmpzJ1xyXG4gIGltcG9ydCBodHRwIGZyb20gJy4uLy4uL21peGlucy9odHRwJ1xyXG4gIGltcG9ydCBiYXNlIGZyb20gJy4uLy4uL21peGlucy9iYXNlJ1xyXG4gIGltcG9ydCB1c2VyIGZyb20gJy4uLy4uL21peGlucy91c2VyJ1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyB1c2VyU3Vic2NyaWJlIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIG1peGlucyA9IFtiYXNlLCBodHRwLCB1c2VyXVxyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qE6K6i6ZiFJ1xyXG4gICAgfVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgLy8g5ZCO572u5pi+56S65oyJ6ZKuXHJcbiAgICAgIGxvYWRlZDogZmFsc2UsXHJcbiAgICAgIC8vIOmdouadv+aVsOaNrlxyXG4gICAgICBsaXN0OiBbe1xyXG4gICAgICAgIGtleTogJ3JlbWFpbicsXHJcbiAgICAgICAgdW5pdDogJ+WkqScsXHJcbiAgICAgICAgdmFsdWU6IDAsXHJcbiAgICAgICAgdGl0bGU6ICcw5aSpJyxcclxuICAgICAgICBzdWJ0aXRsZTogJ+WJqeS9meWkqeaVsCdcclxuICAgICAgfSwge1xyXG4gICAgICAgIGtleTogJ3RpbWVzJyxcclxuICAgICAgICB1bml0OiAn5qyhJyxcclxuICAgICAgICB2YWx1ZTogMCxcclxuICAgICAgICB0aXRsZTogJzDmrKEnLFxyXG4gICAgICAgIHN1YnRpdGxlOiAn5Y+v5YCfJ1xyXG4gICAgICB9LCB7XHJcbiAgICAgICAga2V5OiAncXVhbnRpdHknLFxyXG4gICAgICAgIHVuaXQ6ICfmnKwnLFxyXG4gICAgICAgIHZhbHVlOiAwLFxyXG4gICAgICAgIHRpdGxlOiAnMOacrCcsXHJcbiAgICAgICAgc3VidGl0bGU6ICfmr4/mrKHlj6/lgJ8nXHJcbiAgICAgIH1dXHJcbiAgICB9XHJcblxyXG4gICAgY29tcHV0ZWQgPSB7XHJcbiAgICAgIGlzU2hvd0J0bigpIHtcclxuICAgICAgICByZXR1cm4gIXRoaXMubGlzdC5yZWR1Y2UoKHByZSwgcG9zdCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuICh0aGlzLmlzT2JqZWN0KHByZSkgPyBwcmUudmFsdWUgOiBwcmUpICYmICEhcG9zdC52YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblNob3coKSB7XHJcbiAgICAgIC8vIOWIneWni+WMlumhtemdouaVsOaNrlxyXG4gICAgICB0aGlzLmluaXRQYWdlRGF0YSgpXHJcbiAgICB9XHJcblxyXG4gICAgb25QdWxsRG93blJlZnJlc2goKSB7XHJcbiAgICAgIHRoaXMuaW5pdFBhZ2VEYXRhKClcclxuICAgIH1cclxuXHJcbiAgICAvLyDliJ3lp4vljJbpobXpnaLmlbDmja5cclxuICAgIGluaXRQYWdlRGF0YSgpIHtcclxuICAgICAgLy8g5qC55o2u5Lia5Yqh5o6l5Y+j5aSE55CGOuivt+axguWll+mkkOivpuaDhVxyXG4gICAgICAvLyB0aGlzLiRnZXQoe3VybDogc2VydmljZS5wYWNrYWdlfSwge1xyXG4gICAgICAvLyAgIHN1Y2Nlc3M6ICh7Y29kZSwgZGF0YX0pID0+IHt9LFxyXG4gICAgICAvLyAgIGZhaWw6ICh7Y29kZSwgZGF0YX0pID0+IHt9LFxyXG4gICAgICAvLyAgIGNvbXBsZXRlOiAoKSA9PiB7dGhpcy5sb2FkZWQgPSBmYWxzZX1cclxuICAgICAgLy8gfSlcclxuXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PSDpmo/mnLrnpLrkvosgPT09PT09PT09PT09PT09XHJcbiAgICAgIHRoaXMuJGdldFVzZXJJbmZvKCh7cGFja2FnZXN9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGlzdCA9IHRoaXMuZ2V0QXJyYXkodGhpcy5saXN0KVxyXG4gICAgICAgIGxpc3QubWFwKChvYmopID0+IHtcclxuICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmdldE9iamVjdChvYmopXHJcbiAgICAgICAgICBjb25zdCB1bml0ID0gdGhpcy5nZXRTdHJpbmcoaXRlbS51bml0KVxyXG4gICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldE51bWJlcihwYWNrYWdlc1tpdGVtLmtleV0sIG51bGwpXHJcbiAgICAgICAgICB2YWx1ZSAmJiBPYmplY3QuYXNzaWduKGl0ZW0sIHtcclxuICAgICAgICAgICAgdGl0bGU6IGAke3ZhbHVlfSR7dW5pdH1gLFxyXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm4gaXRlbVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5saXN0ID0gbGlzdFxyXG4gICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIGNoYW5nZSgpIHtcclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVybDogJy9wYWdlcy9ib3Jyb3cvc3Vic2NyaWJlJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiJdfQ==