'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import { service } from './config.js'

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/login', 'pages/index', 'pages/evaluate', 'pages/evaluatePage', 'pages/statistics', 'pages/focus/smallclass', 'pages/focus/event', 'pages/focus/detail', 'pages/focus/addrecords', 'pages/focus/rank', 'pages/focus/describe', 'pages/main/search', 'pages/main/list', 'pages/main/detail', 'pages/borrow', 'pages/borrow/subscribe', 'pages/borrow/result', 'pages/user',
      // 'pages/login',
      'pages/user/records', 'pages/user/query', 'pages/user/return', 'pages/user/collect', 'pages/user/subscribe', 'pages/user/develop', 'pages/user/developRank', 'pages/user/rankDetail'],
      window: {
        navigationBarTitleText: '',
        navigationBarTextStyle: 'white',
        navigationBarBackgroundColor: '',
        backgroundColor: '#eaeaea',
        backgroundTextStyle: 'light',
        enablePullDownRefresh: true
      },
      tabBar: {
        color: '#AEADAD',
        selectedColor: '#049BFF',
        backgroundColor: '#fff',
        borderStyle: 'black',
        list: [{
          pagePath: 'pages/index',
          selectedIconPath: './images/tabbars/icon-mark-active@2x.png',
          iconPath: './images/tabbars/icon-mark@2x.png',
          text: '豆芽'
        }, {
          pagePath: 'pages/evaluate',
          selectedIconPath: './images/tabbars/icon-shelf-active@2x.png',
          iconPath: './images/tabbars/icon-shelf@2x.png',
          text: '评价'
        }, {
          pagePath: 'pages/user',
          selectedIconPath: './images/tabbars/icon-smile-active@2x.png',
          iconPath: './images/tabbars/icon-smile@2x.png',
          text: '我的'
        }]
      },
      networkTimeout: {
        request: 5000,
        downloadFile: 10000
      },
      debug: true
    };
    _this.globalData = {
      user: null,
      student: null, // 存放学生学号、密码
      cart: null
    };

    _this.use('requestfix');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {}
  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onShow',
    value: function onShow(options) {}

    /* ============= 工具方法（app没法用mixins，就再写一遍了） ============= */

  }, {
    key: 'isObject',
    value: function isObject(item) {
      return (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' && !this.isArray(item);
    }
  }, {
    key: 'isArray',
    value: function isArray(item) {
      return Object.prototype.toString.apply(item) === '[object Array]';
    }
  }, {
    key: 'isUndefined',
    value: function isUndefined(item) {
      return typeof item === 'undefined';
    }

    /* ========================= 更新缓存信息 ======================== */

  }, {
    key: '$updateGlobalData',
    value: function $updateGlobalData(name, obj) {
      // 校验: globalData
      if (!this.globalData) return;
      // 校验: 操作字段
      if (typeof name !== 'string' || name === '') return {};
      // 取已有信息
      var info = this.globalData[name] || {};
      // 更新缓存
      if (obj && this.isObject(obj)) {
        // Object合并第一层
        this.globalData[name] = Object.assign({}, info, obj);
      } else if (!this.isUndefined(obj)) {
        // 其他非undefined数据直接覆盖
        this.globalData[name] = obj;
      }
      this.$apply && this.$apply();
      console.info('[' + (obj ? 'UPDATE' : 'GET') + ' GlobalData ' + name + ']:', this.globalData[name]);
      return this.globalData[name];
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJ0YWJCYXIiLCJjb2xvciIsInNlbGVjdGVkQ29sb3IiLCJib3JkZXJTdHlsZSIsImxpc3QiLCJwYWdlUGF0aCIsInNlbGVjdGVkSWNvblBhdGgiLCJpY29uUGF0aCIsInRleHQiLCJuZXR3b3JrVGltZW91dCIsInJlcXVlc3QiLCJkb3dubG9hZEZpbGUiLCJkZWJ1ZyIsImdsb2JhbERhdGEiLCJ1c2VyIiwic3R1ZGVudCIsImNhcnQiLCJ1c2UiLCJvcHRpb25zIiwiaXRlbSIsImlzQXJyYXkiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImFwcGx5IiwibmFtZSIsIm9iaiIsImluZm8iLCJpc09iamVjdCIsImFzc2lnbiIsImlzVW5kZWZpbmVkIiwiJGFwcGx5IiwiY29uc29sZSIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBQ0E7Ozs7O0FBaUZFLHNCQUFlO0FBQUE7O0FBQUE7O0FBQUEsVUE5RWZBLE1BOEVlLEdBOUVOO0FBQ1BDLGFBQU8sQ0FDTCxhQURLLEVBRUwsYUFGSyxFQUdMLGdCQUhLLEVBSUwsb0JBSkssRUFLTCxrQkFMSyxFQU9MLHdCQVBLLEVBUUwsbUJBUkssRUFTTCxvQkFUSyxFQVVMLHdCQVZLLEVBV0wsa0JBWEssRUFZTCxzQkFaSyxFQWNMLG1CQWRLLEVBZUwsaUJBZkssRUFnQkwsbUJBaEJLLEVBa0JMLGNBbEJLLEVBbUJMLHdCQW5CSyxFQW9CTCxxQkFwQkssRUFzQkwsWUF0Qks7QUF1Qkw7QUFDQSwwQkF4QkssRUF5Qkwsa0JBekJLLEVBMEJMLG1CQTFCSyxFQTJCTCxvQkEzQkssRUE0Qkwsc0JBNUJLLEVBNkJMLG9CQTdCSyxFQThCTCx3QkE5QkssRUErQkwsdUJBL0JLLENBREE7QUFtQ1BDLGNBQVE7QUFDTkMsZ0NBQXdCLEVBRGxCO0FBRU5DLGdDQUF3QixPQUZsQjtBQUdOQyxzQ0FBOEIsRUFIeEI7QUFJTkMseUJBQWlCLFNBSlg7QUFLTkMsNkJBQXFCLE9BTGY7QUFNTkMsK0JBQXVCO0FBTmpCLE9BbkNEO0FBMkNQQyxjQUFRO0FBQ05DLGVBQU8sU0FERDtBQUVOQyx1QkFBZSxTQUZUO0FBR05MLHlCQUFpQixNQUhYO0FBSU5NLHFCQUFhLE9BSlA7QUFLTkMsY0FBTSxDQUFDO0FBQ0xDLG9CQUFVLGFBREw7QUFFTEMsNEJBQWtCLDBDQUZiO0FBR0xDLG9CQUFVLG1DQUhMO0FBSUxDLGdCQUFNO0FBSkQsU0FBRCxFQUtIO0FBQ0RILG9CQUFVLGdCQURUO0FBRURDLDRCQUFrQiwyQ0FGakI7QUFHREMsb0JBQVUsb0NBSFQ7QUFJREMsZ0JBQU07QUFKTCxTQUxHLEVBVUg7QUFDREgsb0JBQVUsWUFEVDtBQUVEQyw0QkFBa0IsMkNBRmpCO0FBR0RDLG9CQUFVLG9DQUhUO0FBSURDLGdCQUFNO0FBSkwsU0FWRztBQUxBLE9BM0NEO0FBaUVQQyxzQkFBZ0I7QUFDZEMsaUJBQVMsSUFESztBQUVkQyxzQkFBYztBQUZBLE9BakVUO0FBcUVQQyxhQUFPO0FBckVBLEtBOEVNO0FBQUEsVUFOZkMsVUFNZSxHQU5GO0FBQ1hDLFlBQU0sSUFESztBQUVYQyxlQUFTLElBRkUsRUFFSTtBQUNmQyxZQUFNO0FBSEssS0FNRTs7QUFFYixVQUFLQyxHQUFMLENBQVMsWUFBVDtBQUZhO0FBR2Q7Ozs7K0JBRVUsQ0FDVjs7OzZCQUVRLENBRVI7OzsyQkFFTUMsTyxFQUFTLENBQ2Y7O0FBRUQ7Ozs7NkJBQ1NDLEksRUFBTTtBQUNiLGFBQU8sUUFBT0EsSUFBUCx5Q0FBT0EsSUFBUCxPQUFnQixRQUFoQixJQUE0QixDQUFDLEtBQUtDLE9BQUwsQ0FBYUQsSUFBYixDQUFwQztBQUNEOzs7NEJBQ09BLEksRUFBTTtBQUNaLGFBQU9FLE9BQU9DLFNBQVAsQ0FBaUJDLFFBQWpCLENBQTBCQyxLQUExQixDQUFnQ0wsSUFBaEMsTUFBMEMsZ0JBQWpEO0FBQ0Q7OztnQ0FDV0EsSSxFQUFNO0FBQ2hCLGFBQU8sT0FBT0EsSUFBUCxLQUFnQixXQUF2QjtBQUNEOztBQUVEOzs7O3NDQUNrQk0sSSxFQUFNQyxHLEVBQUs7QUFDM0I7QUFDQSxVQUFJLENBQUMsS0FBS2IsVUFBVixFQUFzQjtBQUN0QjtBQUNBLFVBQUksT0FBT1ksSUFBUCxLQUFnQixRQUFoQixJQUE0QkEsU0FBUyxFQUF6QyxFQUE2QyxPQUFPLEVBQVA7QUFDN0M7QUFDQSxVQUFNRSxPQUFPLEtBQUtkLFVBQUwsQ0FBZ0JZLElBQWhCLEtBQXlCLEVBQXRDO0FBQ0E7QUFDQSxVQUFJQyxPQUFPLEtBQUtFLFFBQUwsQ0FBY0YsR0FBZCxDQUFYLEVBQStCO0FBQzdCO0FBQ0EsYUFBS2IsVUFBTCxDQUFnQlksSUFBaEIsSUFBd0JKLE9BQU9RLE1BQVAsQ0FBYyxFQUFkLEVBQWtCRixJQUFsQixFQUF3QkQsR0FBeEIsQ0FBeEI7QUFDRCxPQUhELE1BR08sSUFBSSxDQUFDLEtBQUtJLFdBQUwsQ0FBaUJKLEdBQWpCLENBQUwsRUFBNEI7QUFDakM7QUFDQSxhQUFLYixVQUFMLENBQWdCWSxJQUFoQixJQUF3QkMsR0FBeEI7QUFDRDtBQUNELFdBQUtLLE1BQUwsSUFBZSxLQUFLQSxNQUFMLEVBQWY7QUFDQUMsY0FBUUwsSUFBUixRQUFpQkQsTUFBTSxRQUFOLEdBQWlCLEtBQWxDLHFCQUFzREQsSUFBdEQsU0FBZ0UsS0FBS1osVUFBTCxDQUFnQlksSUFBaEIsQ0FBaEU7QUFDQSxhQUFPLEtBQUtaLFVBQUwsQ0FBZ0JZLElBQWhCLENBQVA7QUFDRDs7OztFQTVIMEIsZUFBS1EsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xyXG4vLyBpbXBvcnQgeyBzZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcuanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBwYWdlczogW1xyXG4gICAgICAncGFnZXMvbG9naW4nLFxyXG4gICAgICAncGFnZXMvaW5kZXgnLFxyXG4gICAgICAncGFnZXMvZXZhbHVhdGUnLFxyXG4gICAgICAncGFnZXMvZXZhbHVhdGVQYWdlJyxcclxuICAgICAgJ3BhZ2VzL3N0YXRpc3RpY3MnLFxyXG5cclxuICAgICAgJ3BhZ2VzL2ZvY3VzL3NtYWxsY2xhc3MnLFxyXG4gICAgICAncGFnZXMvZm9jdXMvZXZlbnQnLFxyXG4gICAgICAncGFnZXMvZm9jdXMvZGV0YWlsJyxcclxuICAgICAgJ3BhZ2VzL2ZvY3VzL2FkZHJlY29yZHMnLFxyXG4gICAgICAncGFnZXMvZm9jdXMvcmFuaycsXHJcbiAgICAgICdwYWdlcy9mb2N1cy9kZXNjcmliZScsXHJcblxyXG4gICAgICAncGFnZXMvbWFpbi9zZWFyY2gnLFxyXG4gICAgICAncGFnZXMvbWFpbi9saXN0JyxcclxuICAgICAgJ3BhZ2VzL21haW4vZGV0YWlsJyxcclxuXHJcbiAgICAgICdwYWdlcy9ib3Jyb3cnLFxyXG4gICAgICAncGFnZXMvYm9ycm93L3N1YnNjcmliZScsXHJcbiAgICAgICdwYWdlcy9ib3Jyb3cvcmVzdWx0JyxcclxuXHJcbiAgICAgICdwYWdlcy91c2VyJyxcclxuICAgICAgLy8gJ3BhZ2VzL2xvZ2luJyxcclxuICAgICAgJ3BhZ2VzL3VzZXIvcmVjb3JkcycsXHJcbiAgICAgICdwYWdlcy91c2VyL3F1ZXJ5JyxcclxuICAgICAgJ3BhZ2VzL3VzZXIvcmV0dXJuJyxcclxuICAgICAgJ3BhZ2VzL3VzZXIvY29sbGVjdCcsXHJcbiAgICAgICdwYWdlcy91c2VyL3N1YnNjcmliZScsXHJcbiAgICAgICdwYWdlcy91c2VyL2RldmVsb3AnLFxyXG4gICAgICAncGFnZXMvdXNlci9kZXZlbG9wUmFuaycsXHJcbiAgICAgICdwYWdlcy91c2VyL3JhbmtEZXRhaWwnXHJcblxyXG4gICAgXSxcclxuICAgIHdpbmRvdzoge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnJyxcclxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ3doaXRlJyxcclxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJycsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlYWVhZWEnLFxyXG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxyXG4gICAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IHRydWVcclxuICAgIH0sXHJcbiAgICB0YWJCYXI6IHtcclxuICAgICAgY29sb3I6ICcjQUVBREFEJyxcclxuICAgICAgc2VsZWN0ZWRDb2xvcjogJyMwNDlCRkYnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgYm9yZGVyU3R5bGU6ICdibGFjaycsXHJcbiAgICAgIGxpc3Q6IFt7XHJcbiAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9pbmRleCcsXHJcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJy4vaW1hZ2VzL3RhYmJhcnMvaWNvbi1tYXJrLWFjdGl2ZUAyeC5wbmcnLFxyXG4gICAgICAgIGljb25QYXRoOiAnLi9pbWFnZXMvdGFiYmFycy9pY29uLW1hcmtAMngucG5nJyxcclxuICAgICAgICB0ZXh0OiAn6LGG6Iq9J1xyXG4gICAgICB9LCB7XHJcbiAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9ldmFsdWF0ZScsXHJcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJy4vaW1hZ2VzL3RhYmJhcnMvaWNvbi1zaGVsZi1hY3RpdmVAMngucG5nJyxcclxuICAgICAgICBpY29uUGF0aDogJy4vaW1hZ2VzL3RhYmJhcnMvaWNvbi1zaGVsZkAyeC5wbmcnLFxyXG4gICAgICAgIHRleHQ6ICfor4Tku7cnXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL3VzZXInLFxyXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICcuL2ltYWdlcy90YWJiYXJzL2ljb24tc21pbGUtYWN0aXZlQDJ4LnBuZycsXHJcbiAgICAgICAgaWNvblBhdGg6ICcuL2ltYWdlcy90YWJiYXJzL2ljb24tc21pbGVAMngucG5nJyxcclxuICAgICAgICB0ZXh0OiAn5oiR55qEJ1xyXG4gICAgICB9XVxyXG4gICAgfSxcclxuICAgIG5ldHdvcmtUaW1lb3V0OiB7XHJcbiAgICAgIHJlcXVlc3Q6IDUwMDAsXHJcbiAgICAgIGRvd25sb2FkRmlsZTogMTAwMDBcclxuICAgIH0sXHJcbiAgICBkZWJ1ZzogdHJ1ZVxyXG4gIH1cclxuXHJcbiAgZ2xvYmFsRGF0YSA9IHtcclxuICAgIHVzZXI6IG51bGwsXHJcbiAgICBzdHVkZW50OiBudWxsLCAvLyDlrZjmlL7lrabnlJ/lrablj7fjgIHlr4bnoIFcclxuICAgIGNhcnQ6IG51bGxcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcclxuICB9XHJcblxyXG4gIG9uTGF1bmNoKCkge1xyXG4gIH1cclxuXHJcbiAgb25Mb2FkKCkge1xyXG5cclxuICB9XHJcblxyXG4gIG9uU2hvdyhvcHRpb25zKSB7XHJcbiAgfVxyXG5cclxuICAvKiA9PT09PT09PT09PT09IOW3peWFt+aWueazle+8iGFwcOayoeazleeUqG1peGluc++8jOWwseWGjeWGmeS4gOmBjeS6hu+8iSA9PT09PT09PT09PT09ICovXHJcbiAgaXNPYmplY3QoaXRlbSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiAhdGhpcy5pc0FycmF5KGl0ZW0pXHJcbiAgfVxyXG4gIGlzQXJyYXkoaXRlbSkge1xyXG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuYXBwbHkoaXRlbSkgPT09ICdbb2JqZWN0IEFycmF5XSdcclxuICB9XHJcbiAgaXNVbmRlZmluZWQoaXRlbSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBpdGVtID09PSAndW5kZWZpbmVkJ1xyXG4gIH1cclxuXHJcbiAgLyogPT09PT09PT09PT09PT09PT09PT09PT09PSDmm7TmlrDnvJPlrZjkv6Hmga8gPT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbiAgJHVwZGF0ZUdsb2JhbERhdGEobmFtZSwgb2JqKSB7XHJcbiAgICAvLyDmoKHpqow6IGdsb2JhbERhdGFcclxuICAgIGlmICghdGhpcy5nbG9iYWxEYXRhKSByZXR1cm5cclxuICAgIC8vIOagoemqjDog5pON5L2c5a2X5q61XHJcbiAgICBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnIHx8IG5hbWUgPT09ICcnKSByZXR1cm4ge31cclxuICAgIC8vIOWPluW3suacieS/oeaBr1xyXG4gICAgY29uc3QgaW5mbyA9IHRoaXMuZ2xvYmFsRGF0YVtuYW1lXSB8fCB7fVxyXG4gICAgLy8g5pu05paw57yT5a2YXHJcbiAgICBpZiAob2JqICYmIHRoaXMuaXNPYmplY3Qob2JqKSkge1xyXG4gICAgICAvLyBPYmplY3TlkIjlubbnrKzkuIDlsYJcclxuICAgICAgdGhpcy5nbG9iYWxEYXRhW25hbWVdID0gT2JqZWN0LmFzc2lnbih7fSwgaW5mbywgb2JqKVxyXG4gICAgfSBlbHNlIGlmICghdGhpcy5pc1VuZGVmaW5lZChvYmopKSB7XHJcbiAgICAgIC8vIOWFtuS7lumdnnVuZGVmaW5lZOaVsOaNruebtOaOpeimhuebllxyXG4gICAgICB0aGlzLmdsb2JhbERhdGFbbmFtZV0gPSBvYmpcclxuICAgIH1cclxuICAgIHRoaXMuJGFwcGx5ICYmIHRoaXMuJGFwcGx5KClcclxuICAgIGNvbnNvbGUuaW5mbyhgWyR7b2JqID8gJ1VQREFURScgOiAnR0VUJ30gR2xvYmFsRGF0YSAke25hbWV9XTpgLCB0aGlzLmdsb2JhbERhdGFbbmFtZV0pXHJcbiAgICByZXR1cm4gdGhpcy5nbG9iYWxEYXRhW25hbWVdXHJcbiAgfVxyXG59XHJcbiJdfQ==