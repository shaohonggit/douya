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
      navigationBarTitleText: '我的',
      enablePullDownRefresh: false
    }, _this.data = {
      stuName: null,
      stuNumber: null,
      userInfo: {
        nickName: '加载中...',
        // 头像占位图
        avatarUrl: '../images/icon/icon-avatar@2x.png',

        packages: {
          times: 0,
          status: '借阅状态'
        },
        identity: {
          type: '订阅状态',
          collection: 0
        }
      }
    }, _this.computed = {
      packages: function packages() {
        return this.getObject(this.getObject(this.userInfo).packages);
      },
      identity: function identity() {
        return this.getObject(this.getObject(this.userInfo).identity);
      },
      nickName: function nickName() {
        var info = this.getObject(this.userInfo);
        // 名称或头像不为空的，才认为是授权用户
        return info.nickName || info.avatarUrl ? info.nickName : '未授权用户';
      }
    }, _this.methods = {}, _this.components = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(pageUser, [{
    key: 'onLoad',
    value: function onLoad() {
      var _this2 = this;

      console.log('user-globalData:', this.$parent.globalData.student);
      this.stuName = this.$parent.globalData.student.username;
      this.stuNumber = this.$parent.globalData.student.number;
      console.log('学生', this.stuName);
      // 初始化页面数据
      this.$getUserInfo(function (info) {
        var uinfo = _this2.getObject(info);
        var userInfo = _this2.getObject(_this2.userInfo);
        _this2.userInfo = Object.assign({}, userInfo, uinfo);
        _this2.initPageData();
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(pageUser , 'pages/user'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuanMiXSwibmFtZXMiOlsicGFnZVVzZXIiLCJtaXhpbnMiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiZGF0YSIsInN0dU5hbWUiLCJzdHVOdW1iZXIiLCJ1c2VySW5mbyIsIm5pY2tOYW1lIiwiYXZhdGFyVXJsIiwicGFja2FnZXMiLCJ0aW1lcyIsInN0YXR1cyIsImlkZW50aXR5IiwidHlwZSIsImNvbGxlY3Rpb24iLCJjb21wdXRlZCIsImdldE9iamVjdCIsImluZm8iLCJtZXRob2RzIiwiY29tcG9uZW50cyIsImNvbnNvbGUiLCJsb2ciLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsInN0dWRlbnQiLCJ1c2VybmFtZSIsIm51bWJlciIsIiRnZXRVc2VySW5mbyIsInVpbmZvIiwiT2JqZWN0IiwiYXNzaWduIiwiaW5pdFBhZ2VEYXRhIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBSEE7OztJQUtxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxNLEdBQVMsZ0QsUUFDVEMsTSxHQUFTO0FBQ1BDLDhCQUF3QixJQURqQjtBQUVQQyw2QkFBdUI7QUFGaEIsSyxRQUlUQyxJLEdBQU87QUFDTEMsZUFBUyxJQURKO0FBRUxDLGlCQUFXLElBRk47QUFHTEMsZ0JBQVU7QUFDUkMsa0JBQVUsUUFERjtBQUVSO0FBQ0FDLG1CQUFXLG1DQUhIOztBQUtSQyxrQkFBVTtBQUNSQyxpQkFBTyxDQURDO0FBRVJDLGtCQUFRO0FBRkEsU0FMRjtBQVNSQyxrQkFBVTtBQUNSQyxnQkFBTSxNQURFO0FBRVJDLHNCQUFZO0FBRko7QUFURjtBQUhMLEssUUFtQlBDLFEsR0FBVztBQUNUTixjQURTLHNCQUNFO0FBQ1QsZUFBTyxLQUFLTyxTQUFMLENBQWUsS0FBS0EsU0FBTCxDQUFlLEtBQUtWLFFBQXBCLEVBQThCRyxRQUE3QyxDQUFQO0FBQ0QsT0FIUTtBQUlURyxjQUpTLHNCQUlFO0FBQ1QsZUFBTyxLQUFLSSxTQUFMLENBQWUsS0FBS0EsU0FBTCxDQUFlLEtBQUtWLFFBQXBCLEVBQThCTSxRQUE3QyxDQUFQO0FBQ0QsT0FOUTtBQU9UTCxjQVBTLHNCQU9FO0FBQ1QsWUFBTVUsT0FBTyxLQUFLRCxTQUFMLENBQWUsS0FBS1YsUUFBcEIsQ0FBYjtBQUNBO0FBQ0EsZUFBUVcsS0FBS1YsUUFBTCxJQUFpQlUsS0FBS1QsU0FBdkIsR0FBb0NTLEtBQUtWLFFBQXpDLEdBQW9ELE9BQTNEO0FBQ0Q7QUFYUSxLLFFBNENYVyxPLEdBQVUsRSxRQUdWQyxVLEdBQWEsRTs7Ozs7NkJBakNKO0FBQUE7O0FBQ1BDLGNBQVFDLEdBQVIsQ0FBWSxrQkFBWixFQUFnQyxLQUFLQyxPQUFMLENBQWFDLFVBQWIsQ0FBd0JDLE9BQXhEO0FBQ0EsV0FBS3BCLE9BQUwsR0FBZSxLQUFLa0IsT0FBTCxDQUFhQyxVQUFiLENBQXdCQyxPQUF4QixDQUFnQ0MsUUFBL0M7QUFDQSxXQUFLcEIsU0FBTCxHQUFpQixLQUFLaUIsT0FBTCxDQUFhQyxVQUFiLENBQXdCQyxPQUF4QixDQUFnQ0UsTUFBakQ7QUFDQU4sY0FBUUMsR0FBUixDQUFZLElBQVosRUFBa0IsS0FBS2pCLE9BQXZCO0FBQ0E7QUFDQSxXQUFLdUIsWUFBTCxDQUFrQixVQUFDVixJQUFELEVBQVU7QUFDMUIsWUFBTVcsUUFBUSxPQUFLWixTQUFMLENBQWVDLElBQWYsQ0FBZDtBQUNBLFlBQU1YLFdBQVcsT0FBS1UsU0FBTCxDQUFlLE9BQUtWLFFBQXBCLENBQWpCO0FBQ0EsZUFBS0EsUUFBTCxHQUFnQnVCLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCeEIsUUFBbEIsRUFBNEJzQixLQUE1QixDQUFoQjtBQUNBLGVBQUtHLFlBQUw7QUFDRCxPQUxEO0FBTUQ7Ozs2QkFFUSxDQUNSOzs7d0NBRW1CO0FBQ2xCLFdBQUtBLFlBQUw7QUFDRDs7QUFFRDs7OzttQ0FDZTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDs7OztFQW5FbUMsZUFBS0MsSTs7a0JBQXRCbEMsUSIsImZpbGUiOiJ1c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICAvLyBpbXBvcnQgeyBzZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlnLmpzJ1xyXG4gIGltcG9ydCBodHRwIGZyb20gJy4uL21peGlucy9odHRwJ1xyXG4gIGltcG9ydCBiYXNlIGZyb20gJy4uL21peGlucy9iYXNlJ1xyXG4gIGltcG9ydCB1c2VyIGZyb20gJy4uL21peGlucy91c2VyJ1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBwYWdlVXNlciBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBtaXhpbnMgPSBbYmFzZSwgaHR0cCwgdXNlcl1cclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahCcsXHJcbiAgICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogZmFsc2VcclxuICAgIH1cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIHN0dU5hbWU6IG51bGwsXHJcbiAgICAgIHN0dU51bWJlcjogbnVsbCxcclxuICAgICAgdXNlckluZm86IHtcclxuICAgICAgICBuaWNrTmFtZTogJ+WKoOi9veS4rS4uLicsXHJcbiAgICAgICAgLy8g5aS05YOP5Y2g5L2N5Zu+XHJcbiAgICAgICAgYXZhdGFyVXJsOiAnLi4vaW1hZ2VzL2ljb24vaWNvbi1hdmF0YXJAMngucG5nJyxcclxuXHJcbiAgICAgICAgcGFja2FnZXM6IHtcclxuICAgICAgICAgIHRpbWVzOiAwLFxyXG4gICAgICAgICAgc3RhdHVzOiAn5YCf6ZiF54q25oCBJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaWRlbnRpdHk6IHtcclxuICAgICAgICAgIHR5cGU6ICforqLpmIXnirbmgIEnLFxyXG4gICAgICAgICAgY29sbGVjdGlvbjogMFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXB1dGVkID0ge1xyXG4gICAgICBwYWNrYWdlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRPYmplY3QodGhpcy5nZXRPYmplY3QodGhpcy51c2VySW5mbykucGFja2FnZXMpXHJcbiAgICAgIH0sXHJcbiAgICAgIGlkZW50aXR5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldE9iamVjdCh0aGlzLmdldE9iamVjdCh0aGlzLnVzZXJJbmZvKS5pZGVudGl0eSlcclxuICAgICAgfSxcclxuICAgICAgbmlja05hbWUoKSB7XHJcbiAgICAgICAgY29uc3QgaW5mbyA9IHRoaXMuZ2V0T2JqZWN0KHRoaXMudXNlckluZm8pXHJcbiAgICAgICAgLy8g5ZCN56ew5oiW5aS05YOP5LiN5Li656m655qE77yM5omN6K6k5Li65piv5o6I5p2D55So5oi3XHJcbiAgICAgICAgcmV0dXJuIChpbmZvLm5pY2tOYW1lIHx8IGluZm8uYXZhdGFyVXJsKSA/IGluZm8ubmlja05hbWUgOiAn5pyq5o6I5p2D55So5oi3J1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygndXNlci1nbG9iYWxEYXRhOicsIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnN0dWRlbnQpXHJcbiAgICAgIHRoaXMuc3R1TmFtZSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnN0dWRlbnQudXNlcm5hbWVcclxuICAgICAgdGhpcy5zdHVOdW1iZXIgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5zdHVkZW50Lm51bWJlclxyXG4gICAgICBjb25zb2xlLmxvZygn5a2m55SfJywgdGhpcy5zdHVOYW1lKVxyXG4gICAgICAvLyDliJ3lp4vljJbpobXpnaLmlbDmja5cclxuICAgICAgdGhpcy4kZ2V0VXNlckluZm8oKGluZm8pID0+IHtcclxuICAgICAgICBjb25zdCB1aW5mbyA9IHRoaXMuZ2V0T2JqZWN0KGluZm8pXHJcbiAgICAgICAgY29uc3QgdXNlckluZm8gPSB0aGlzLmdldE9iamVjdCh0aGlzLnVzZXJJbmZvKVxyXG4gICAgICAgIHRoaXMudXNlckluZm8gPSBPYmplY3QuYXNzaWduKHt9LCB1c2VySW5mbywgdWluZm8pXHJcbiAgICAgICAgdGhpcy5pbml0UGFnZURhdGEoKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2hvdygpIHtcclxuICAgIH1cclxuXHJcbiAgICBvblB1bGxEb3duUmVmcmVzaCgpIHtcclxuICAgICAgdGhpcy5pbml0UGFnZURhdGEoKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOWIneWni+WMlumhtemdouaVsOaNrlxyXG4gICAgaW5pdFBhZ2VEYXRhKCkge1xyXG4gICAgICAvLyDmoLnmja7kuJrliqHmjqXlj6PlpITnkIY66I635Y+W5pyA5paw5Liq5Lq65L+h5oGv5bm25pu05pawXHJcbiAgICAgIC8vIHRoaXMuJGdldCh7dXJsOiBzZXJ2aWNlLnVzZXJ9LCB7XHJcbiAgICAgIC8vICAgc3VjY2VzczogKHtjb2RlLCBkYXRhfSkgPT4ge30sXHJcbiAgICAgIC8vICAgZmFpbDogKHtjb2RlLCBkYXRhfSkgPT4ge31cclxuICAgICAgLy8gfSlcclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudHMgPSB7XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=