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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { service } from '../../config.js'


var userReturn = function (_wepy$page) {
  _inherits(userReturn, _wepy$page);

  function userReturn() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, userReturn);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = userReturn.__proto__ || Object.getPrototypeOf(userReturn)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default, _http2.default], _this.config = {
      navigationBarTitleText: '立即还书',
      enablePullDownRefresh: false
    }, _this.data = {
      id: '',
      express_co: '道是无晴却有晴',
      express_id: '',
      address: '年年岁岁花相似 岁岁年年人不同',
      loading: false
    }, _this.methods = {
      doReturn: function doReturn() {
        if (!this.getString(this.express_co)) {
          return this.$alert('温馨提示', '请输入快递公司');
        }
        if (!this.getString(this.express_id)) {
          return this.$alert('温馨提示', '请输入快递单号');
        }

        // 根据业务接口处理:提交信息
        // if (this.loading) return
        // this.loading = true
        // this.$post({url: service.return, data}, {
        //   success: ({code, data}) => {},
        //   fail: ({code, data}) => {},
        //   complete: () => {this.loading = false}
        // })

        // =============== 随机示例 ===============
        wx.showToast({ title: '提交成功！', icon: 'success', duration: 1000 });
        setTimeout(wx.navigateBack, 1000);
      },
      typing: function typing(type, e) {
        var key = 'express_' + type;
        if (this.isDefined(this[key])) {
          this[key] = e.detail.value;
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(userReturn, [{
    key: 'onLoad',
    value: function onLoad(query) {
      this.id = this.getString(query && +query.id);
    }
  }, {
    key: 'onReady',
    value: function onReady() {
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
      // 根据业务接口处理:请求邮寄地址
      // if (this.loading) return
      // this.loading = true
      // this.$get({url: service.express}, {
      //   success: ({code, data}) => {},
      //   fail: ({code, data}) => {},
      //   complete: () => {this.loading = false}
      // })
    }
  }]);

  return userReturn;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(userReturn , 'pages/user/return'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldHVybi5qcyJdLCJuYW1lcyI6WyJ1c2VyUmV0dXJuIiwibWl4aW5zIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImRhdGEiLCJpZCIsImV4cHJlc3NfY28iLCJleHByZXNzX2lkIiwiYWRkcmVzcyIsImxvYWRpbmciLCJtZXRob2RzIiwiZG9SZXR1cm4iLCJnZXRTdHJpbmciLCIkYWxlcnQiLCJ3eCIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwic2V0VGltZW91dCIsIm5hdmlnYXRlQmFjayIsInR5cGluZyIsInR5cGUiLCJlIiwia2V5IiwiaXNEZWZpbmVkIiwiZGV0YWlsIiwidmFsdWUiLCJxdWVyeSIsImluaXRQYWdlRGF0YSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFGQTs7O0lBSXFCQSxVOzs7Ozs7Ozs7Ozs7Ozs4TEFDbkJDLE0sR0FBUyxnQyxRQUNUQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE1BRGpCO0FBRVBDLDZCQUF1QjtBQUZoQixLLFFBSVRDLEksR0FBTztBQUNMQyxVQUFJLEVBREM7QUFFTEMsa0JBQVksU0FGUDtBQUdMQyxrQkFBWSxFQUhQO0FBSUxDLGVBQVMsaUJBSko7QUFLTEMsZUFBUztBQUxKLEssUUFpQ1BDLE8sR0FBVTtBQUNSQyxjQURRLHNCQUNHO0FBQ1QsWUFBSSxDQUFDLEtBQUtDLFNBQUwsQ0FBZSxLQUFLTixVQUFwQixDQUFMLEVBQXNDO0FBQ3BDLGlCQUFPLEtBQUtPLE1BQUwsQ0FBWSxNQUFaLEVBQW9CLFNBQXBCLENBQVA7QUFDRDtBQUNELFlBQUksQ0FBQyxLQUFLRCxTQUFMLENBQWUsS0FBS0wsVUFBcEIsQ0FBTCxFQUFzQztBQUNwQyxpQkFBTyxLQUFLTSxNQUFMLENBQVksTUFBWixFQUFvQixTQUFwQixDQUFQO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBQyxXQUFHQyxTQUFILENBQWEsRUFBQ0MsT0FBTyxPQUFSLEVBQWlCQyxNQUFNLFNBQXZCLEVBQWtDQyxVQUFVLElBQTVDLEVBQWI7QUFDQUMsbUJBQVdMLEdBQUdNLFlBQWQsRUFBNEIsSUFBNUI7QUFDRCxPQXJCTztBQXNCUkMsWUF0QlEsa0JBc0JBQyxJQXRCQSxFQXNCTUMsQ0F0Qk4sRUFzQlM7QUFDZixZQUFNQyxtQkFBaUJGLElBQXZCO0FBQ0EsWUFBSSxLQUFLRyxTQUFMLENBQWUsS0FBS0QsR0FBTCxDQUFmLENBQUosRUFBK0I7QUFDN0IsZUFBS0EsR0FBTCxJQUFZRCxFQUFFRyxNQUFGLENBQVNDLEtBQXJCO0FBQ0Q7QUFDRjtBQTNCTyxLOzs7OzsyQkF6QkhDLEssRUFBTztBQUNaLFdBQUt2QixFQUFMLEdBQVUsS0FBS08sU0FBTCxDQUFlZ0IsU0FBUyxDQUFDQSxNQUFNdkIsRUFBL0IsQ0FBVjtBQUNEOzs7OEJBRVM7QUFDUjtBQUNBLFdBQUt3QixZQUFMO0FBQ0Q7Ozt3Q0FFbUI7QUFDbEIsV0FBS0EsWUFBTDtBQUNEOztBQUVEOzs7O21DQUNlO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOzs7O0VBckNxQyxlQUFLQyxJOztrQkFBeEIvQixVIiwiZmlsZSI6InJldHVybi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgLy8gaW1wb3J0IHsgc2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZy5qcydcclxuICBpbXBvcnQgaHR0cCBmcm9tICcuLi8uLi9taXhpbnMvaHR0cCdcclxuICBpbXBvcnQgYmFzZSBmcm9tICcuLi8uLi9taXhpbnMvYmFzZSdcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgdXNlclJldHVybiBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBtaXhpbnMgPSBbYmFzZSwgaHR0cF1cclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eri+WNs+i/mOS5picsXHJcbiAgICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogZmFsc2VcclxuICAgIH1cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIGlkOiAnJyxcclxuICAgICAgZXhwcmVzc19jbzogJ+mBk+aYr+aXoOaZtOWNtOacieaZtCcsXHJcbiAgICAgIGV4cHJlc3NfaWQ6ICcnLFxyXG4gICAgICBhZGRyZXNzOiAn5bm05bm05bKB5bKB6Iqx55u45Ly8IOWygeWygeW5tOW5tOS6uuS4jeWQjCcsXHJcbiAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKHF1ZXJ5KSB7XHJcbiAgICAgIHRoaXMuaWQgPSB0aGlzLmdldFN0cmluZyhxdWVyeSAmJiArcXVlcnkuaWQpXHJcbiAgICB9XHJcblxyXG4gICAgb25SZWFkeSgpIHtcclxuICAgICAgLy8g5Yid5aeL5YyW6aG16Z2i5pWw5o2uXHJcbiAgICAgIHRoaXMuaW5pdFBhZ2VEYXRhKClcclxuICAgIH1cclxuXHJcbiAgICBvblB1bGxEb3duUmVmcmVzaCgpIHtcclxuICAgICAgdGhpcy5pbml0UGFnZURhdGEoKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOWIneWni+WMlumhtemdouaVsOaNrlxyXG4gICAgaW5pdFBhZ2VEYXRhKCkge1xyXG4gICAgICAvLyDmoLnmja7kuJrliqHmjqXlj6PlpITnkIY66K+35rGC6YKu5a+E5Zyw5Z2AXHJcbiAgICAgIC8vIGlmICh0aGlzLmxvYWRpbmcpIHJldHVyblxyXG4gICAgICAvLyB0aGlzLmxvYWRpbmcgPSB0cnVlXHJcbiAgICAgIC8vIHRoaXMuJGdldCh7dXJsOiBzZXJ2aWNlLmV4cHJlc3N9LCB7XHJcbiAgICAgIC8vICAgc3VjY2VzczogKHtjb2RlLCBkYXRhfSkgPT4ge30sXHJcbiAgICAgIC8vICAgZmFpbDogKHtjb2RlLCBkYXRhfSkgPT4ge30sXHJcbiAgICAgIC8vICAgY29tcGxldGU6ICgpID0+IHt0aGlzLmxvYWRpbmcgPSBmYWxzZX1cclxuICAgICAgLy8gfSlcclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBkb1JldHVybigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZ2V0U3RyaW5nKHRoaXMuZXhwcmVzc19jbykpIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLiRhbGVydCgn5rip6aao5o+Q56S6JywgJ+ivt+i+k+WFpeW/q+mAkuWFrOWPuCcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5nZXRTdHJpbmcodGhpcy5leHByZXNzX2lkKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuJGFsZXJ0KCfmuKnppqjmj5DnpLonLCAn6K+36L6T5YWl5b+r6YCS5Y2V5Y+3JylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOagueaNruS4muWKoeaOpeWPo+WkhOeQhjrmj5DkuqTkv6Hmga9cclxuICAgICAgICAvLyBpZiAodGhpcy5sb2FkaW5nKSByZXR1cm5cclxuICAgICAgICAvLyB0aGlzLmxvYWRpbmcgPSB0cnVlXHJcbiAgICAgICAgLy8gdGhpcy4kcG9zdCh7dXJsOiBzZXJ2aWNlLnJldHVybiwgZGF0YX0sIHtcclxuICAgICAgICAvLyAgIHN1Y2Nlc3M6ICh7Y29kZSwgZGF0YX0pID0+IHt9LFxyXG4gICAgICAgIC8vICAgZmFpbDogKHtjb2RlLCBkYXRhfSkgPT4ge30sXHJcbiAgICAgICAgLy8gICBjb21wbGV0ZTogKCkgPT4ge3RoaXMubG9hZGluZyA9IGZhbHNlfVxyXG4gICAgICAgIC8vIH0pXHJcblxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PSDpmo/mnLrnpLrkvosgPT09PT09PT09PT09PT09XHJcbiAgICAgICAgd3guc2hvd1RvYXN0KHt0aXRsZTogJ+aPkOS6pOaIkOWKn++8gScsIGljb246ICdzdWNjZXNzJywgZHVyYXRpb246IDEwMDB9KVxyXG4gICAgICAgIHNldFRpbWVvdXQod3gubmF2aWdhdGVCYWNrLCAxMDAwKVxyXG4gICAgICB9LFxyXG4gICAgICB0eXBpbmcgKHR5cGUsIGUpIHtcclxuICAgICAgICBjb25zdCBrZXkgPSBgZXhwcmVzc18ke3R5cGV9YFxyXG4gICAgICAgIGlmICh0aGlzLmlzRGVmaW5lZCh0aGlzW2tleV0pKSB7XHJcbiAgICAgICAgICB0aGlzW2tleV0gPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuIl19