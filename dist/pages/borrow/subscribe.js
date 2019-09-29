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

var _demo = require('./../../mixins/demo.js');

var _radioCard = require('./../../components/radioCard.js');

var _radioCard2 = _interopRequireDefault(_radioCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { service } from '../../config.js'


var borrowSubscribe = function (_wepy$page) {
  _inherits(borrowSubscribe, _wepy$page);

  function borrowSubscribe() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, borrowSubscribe);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = borrowSubscribe.__proto__ || Object.getPrototypeOf(borrowSubscribe)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default, _http2.default, _user2.default], _this.config = {
      navigationBarTitleText: '订阅套餐',
      enablePullDownRefresh: false
    }, _this.data = {
      // 手机号/验证码
      phone: '',
      code: '',

      loading: false,
      timer: null,
      time: 0,

      // 套餐值
      value: '1',
      // 套餐列表
      list: undefined
    }, _this.computed = {
      listIndex: function listIndex() {
        var _this2 = this;

        var arr = this.getArray((this.list || []).filter(function (item, index) {
          item.TEMPINDEX = index;
          return _this2.getString(_this2.value) === _this2.getString(item.id);
        }));
        var index = arr[0] && arr[0].TEMPINDEX;
        return this.getNumber(index);
      },
      realPrice: function realPrice() {
        var item = this.list && this.list[this.listIndex];
        var price = item && item.price;
        return price || 0;
      },
      btnText: function btnText() {
        return +this.time > 0 ? this.time + 's\u540E\u91CD\u65B0\u83B7\u53D6' : '获取验证码';
      }
    }, _this.methods = {
      pay: function pay() {
        var _this3 = this;

        // 防抖
        if (this.loading) return;
        if (!this.isPhone(this.phone)) {
          return this.$alert('温馨提示', '请输入正确的手机号码');
        }
        if (!this.getString(this.code)) {
          return this.$alert('温馨提示', '请输入验证码');
        }
        if (!this.getString(this.value)) {
          return this.$alert('温馨提示', '请选择订阅时长');
        }
        var data = {
          mobile: this.getString(this.phone),
          code: this.getString(this.code),
          pid: this.getString(this.value)
          // 开防抖
        };this.loading = true;
        // 调用登录
        this.$login(function (_ref2) {
          var code = _ref2.code;

          // 获取微信登录code，再提交套餐订单
          _this3.requestPayment(Object.assign({}, data, { weixin_code: code }));
        }, 'noAutoLogin');
      },
      typing: function typing(type, e) {
        if (this.isDefined(this[type])) {
          this[type] = e.detail.value;
        }
      },
      verify: function verify() {
        // 防抖
        if (this.loading || this.time > 0) return;
        if (!this.isPhone(this.phone)) {
          return this.$alert('温馨提示', '请输入正确的手机号码');
        }
        // 开防抖
        // this.loading = true
        // 开倒计时
        this.timing(60);

        // 根据业务接口处理:发送验证码
        // this.$post({url: service.sendCode, data}, {
        //   success: (res) => {},
        //   fail: (res) => {
        //     clearTimeout(this.timer)
        //     this.timing(0)
        //   },
        //   complete: () => {this.loading = false}
        // })
      }
    }, _this.$repeat = {}, _this.$props = { "radioCard": { "xmlns:v-bind": "", "v-bind:list.sync": "list", "v-bind:value.sync": "value", "key": "id" } }, _this.$events = {}, _this.components = {
      radioCard: _radioCard2.default
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(borrowSubscribe, [{
    key: 'onLoad',
    value: function onLoad() {
      // 初始化页面数据
      this.initPageData();
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      // 清空code
      this.code = '';
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
      var _this4 = this;

      // 根据业务接口处理数据:请求套餐详情
      // this.$get({url: service.packages}, {
      //   success: ({code, data}) => {},
      //   fail: ({code, data}) => {}
      // })

      // ===== 以下随机示例 =====
      setTimeout(function () {
        _this4.list = _this4.getArray(_demo.packages);
        _this4.$getUserInfo(function (user) {
          _this4.phone = _this4.getString(_this4.getObject(user.identity).mobile);
        });
      }, 200);
    }
  }, {
    key: 'requestPayment',
    value: function requestPayment(data) {
      var _this5 = this;

      // 根据业务接口处理:创建交易单
      // this.loading = true
      // this.$post({url: service.pay, data}, {
      //   success: ({code, data}) => {},
      //   fail: ({code, data}) => {},
      //   complete: () => {this.loading = false}
      // })

      // ===================== 以下为success随机示例 =====================
      setTimeout(function () {
        var params = _this5.getObject({
          timeStamp: '',
          nonceStr: '',
          package: '',
          signType: '',
          paySign: ''
        });
        // 成功需要唤起支付
        wx.requestPayment(Object.assign({}, params, {
          success: function success(res) {
            wx.showModal({
              title: '支付提示',
              content: '支付成功！',
              showCancel: false,
              success: function success(res) {
                wx.switchTab({ url: '/pages/borrow' });
              }
            });
          },
          fail: function fail(res) {
            wx.showModal({
              title: '支付提示',
              // content: '支付失败，请重新尝试！',
              content: '示例没法做支付,就当成功了吧~',
              showCancel: false,
              success: function success(res) {
                // ============ 假装支付成功:需要更新状态 ============
                _this5.$parent.$updateGlobalData('user', {
                  packages: {
                    times: _this5.list[_this5.listIndex].times,
                    remain: _this5.list[_this5.listIndex].times,
                    quantity: _this5.list[_this5.listIndex].quantity,
                    status: '未借阅'
                  }
                });
                wx.navigateBack();
              }
            });
          },
          complete: function complete() {
            _this5.loading = false;
          }
        }));
      }, 100);
    }
  }, {
    key: 'timing',
    value: function timing(time) {
      var _this6 = this;

      this.time = this.getNumber(time);
      this.$apply();
      this.timer = setTimeout(function () {
        if (time > 0) {
          _this6.timing(time - 1);
        }
      }, 1000);
    }
  }]);

  return borrowSubscribe;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(borrowSubscribe , 'pages/borrow/subscribe'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnNjcmliZS5qcyJdLCJuYW1lcyI6WyJib3Jyb3dTdWJzY3JpYmUiLCJtaXhpbnMiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiZGF0YSIsInBob25lIiwiY29kZSIsImxvYWRpbmciLCJ0aW1lciIsInRpbWUiLCJ2YWx1ZSIsImxpc3QiLCJ1bmRlZmluZWQiLCJjb21wdXRlZCIsImxpc3RJbmRleCIsImFyciIsImdldEFycmF5IiwiZmlsdGVyIiwiaXRlbSIsImluZGV4IiwiVEVNUElOREVYIiwiZ2V0U3RyaW5nIiwiaWQiLCJnZXROdW1iZXIiLCJyZWFsUHJpY2UiLCJwcmljZSIsImJ0blRleHQiLCJtZXRob2RzIiwicGF5IiwiaXNQaG9uZSIsIiRhbGVydCIsIm1vYmlsZSIsInBpZCIsIiRsb2dpbiIsInJlcXVlc3RQYXltZW50IiwiT2JqZWN0IiwiYXNzaWduIiwid2VpeGluX2NvZGUiLCJ0eXBpbmciLCJ0eXBlIiwiZSIsImlzRGVmaW5lZCIsImRldGFpbCIsInZlcmlmeSIsInRpbWluZyIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInJhZGlvQ2FyZCIsImluaXRQYWdlRGF0YSIsInNldFRpbWVvdXQiLCIkZ2V0VXNlckluZm8iLCJ1c2VyIiwiZ2V0T2JqZWN0IiwiaWRlbnRpdHkiLCJwYXJhbXMiLCJ0aW1lU3RhbXAiLCJub25jZVN0ciIsInBhY2thZ2UiLCJzaWduVHlwZSIsInBheVNpZ24iLCJ3eCIsInN1Y2Nlc3MiLCJyZXMiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwic3dpdGNoVGFiIiwidXJsIiwiZmFpbCIsIiRwYXJlbnQiLCIkdXBkYXRlR2xvYmFsRGF0YSIsInBhY2thZ2VzIiwidGltZXMiLCJyZW1haW4iLCJxdWFudGl0eSIsInN0YXR1cyIsIm5hdmlnYXRlQmFjayIsImNvbXBsZXRlIiwiJGFwcGx5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UUFINUI7QUFJUkMsNEJBQVE7QUFKQTtBQUQyQixpQkFBdkM7QUFRQWhCLG1CQUFHaUIsWUFBSDtBQUNEO0FBaEJVLGFBQWI7QUFrQkQsV0E1QnlDO0FBNkIxQ0Msb0JBQVUsb0JBQU07QUFBRSxtQkFBS3pFLE9BQUwsR0FBZSxLQUFmO0FBQXNCO0FBN0JFLFNBQTFCLENBQWxCO0FBK0JELE9BeENELEVBd0NHLEdBeENIO0FBeUNEOzs7MkJBRU1FLEksRUFBTTtBQUFBOztBQUNYLFdBQUtBLElBQUwsR0FBWSxLQUFLYyxTQUFMLENBQWVkLElBQWYsQ0FBWjtBQUNBLFdBQUt3RSxNQUFMO0FBQ0EsV0FBS3pFLEtBQUwsR0FBYTJDLFdBQVcsWUFBTTtBQUM1QixZQUFJMUMsT0FBTyxDQUFYLEVBQWM7QUFDWixpQkFBS21DLE1BQUwsQ0FBWW5DLE9BQU8sQ0FBbkI7QUFDRDtBQUNGLE9BSlksRUFJVixJQUpVLENBQWI7QUFLRDs7OztFQTFMMEMsZUFBS3lFLEk7O2tCQUE3Qm5GLGUiLCJmaWxlIjoic3Vic2NyaWJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICAvLyBpbXBvcnQgeyBzZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29uZmlnLmpzJ1xyXG4gIGltcG9ydCBodHRwIGZyb20gJy4uLy4uL21peGlucy9odHRwJ1xyXG4gIGltcG9ydCBiYXNlIGZyb20gJy4uLy4uL21peGlucy9iYXNlJ1xyXG4gIGltcG9ydCB1c2VyIGZyb20gJy4uLy4uL21peGlucy91c2VyJ1xyXG4gIGltcG9ydCB7IHBhY2thZ2VzIH0gZnJvbSAnLi4vLi4vbWl4aW5zL2RlbW8nXHJcbiAgaW1wb3J0IHJhZGlvQ2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3JhZGlvQ2FyZCdcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgYm9ycm93U3Vic2NyaWJlIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIG1peGlucyA9IFtiYXNlLCBodHRwLCB1c2VyXVxyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6K6i6ZiF5aWX6aSQJyxcclxuICAgICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiBmYWxzZVxyXG4gICAgfVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgLy8g5omL5py65Y+3L+mqjOivgeeggVxyXG4gICAgICBwaG9uZTogJycsXHJcbiAgICAgIGNvZGU6ICcnLFxyXG5cclxuICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgIHRpbWVyOiBudWxsLFxyXG4gICAgICB0aW1lOiAwLFxyXG5cclxuICAgICAgLy8g5aWX6aSQ5YC8XHJcbiAgICAgIHZhbHVlOiAnMScsXHJcbiAgICAgIC8vIOWll+mkkOWIl+ihqFxyXG4gICAgICBsaXN0OiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBjb21wdXRlZCA9IHtcclxuICAgICAgbGlzdEluZGV4KCkge1xyXG4gICAgICAgIGNvbnN0IGFyciA9IHRoaXMuZ2V0QXJyYXkoKHRoaXMubGlzdCB8fCBbXSkuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgaXRlbS5URU1QSU5ERVggPSBpbmRleFxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nKHRoaXMudmFsdWUpID09PSB0aGlzLmdldFN0cmluZyhpdGVtLmlkKVxyXG4gICAgICAgIH0pKVxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gYXJyWzBdICYmIGFyclswXS5URU1QSU5ERVhcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXROdW1iZXIoaW5kZXgpXHJcbiAgICAgIH0sXHJcbiAgICAgIHJlYWxQcmljZSgpIHtcclxuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5saXN0ICYmIHRoaXMubGlzdFt0aGlzLmxpc3RJbmRleF1cclxuICAgICAgICBjb25zdCBwcmljZSA9IGl0ZW0gJiYgaXRlbS5wcmljZVxyXG4gICAgICAgIHJldHVybiBwcmljZSB8fCAwXHJcbiAgICAgIH0sXHJcbiAgICAgIGJ0blRleHQoKSB7XHJcbiAgICAgICAgcmV0dXJuICt0aGlzLnRpbWUgPiAwID8gYCR7dGhpcy50aW1lfXPlkI7ph43mlrDojrflj5ZgIDogJ+iOt+WPlumqjOivgeeggSdcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgLy8g5Yid5aeL5YyW6aG16Z2i5pWw5o2uXHJcbiAgICAgIHRoaXMuaW5pdFBhZ2VEYXRhKClcclxuICAgIH1cclxuXHJcbiAgICBvblNob3coKSB7XHJcbiAgICAgIC8vIOa4heepumNvZGVcclxuICAgICAgdGhpcy5jb2RlID0gJydcclxuICAgIH1cclxuXHJcbiAgICBvblB1bGxEb3duUmVmcmVzaCgpIHtcclxuICAgICAgdGhpcy5pbml0UGFnZURhdGEoKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOWIneWni+WMlumhtemdouaVsOaNrlxyXG4gICAgaW5pdFBhZ2VEYXRhKCkge1xyXG4gICAgICAvLyDmoLnmja7kuJrliqHmjqXlj6PlpITnkIbmlbDmja466K+35rGC5aWX6aSQ6K+m5oOFXHJcbiAgICAgIC8vIHRoaXMuJGdldCh7dXJsOiBzZXJ2aWNlLnBhY2thZ2VzfSwge1xyXG4gICAgICAvLyAgIHN1Y2Nlc3M6ICh7Y29kZSwgZGF0YX0pID0+IHt9LFxyXG4gICAgICAvLyAgIGZhaWw6ICh7Y29kZSwgZGF0YX0pID0+IHt9XHJcbiAgICAgIC8vIH0pXHJcblxyXG4gICAgICAvLyA9PT09PSDku6XkuIvpmo/mnLrnpLrkvosgPT09PT1cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5saXN0ID0gdGhpcy5nZXRBcnJheShwYWNrYWdlcylcclxuICAgICAgICB0aGlzLiRnZXRVc2VySW5mbygodXNlcikgPT4ge1xyXG4gICAgICAgICAgdGhpcy5waG9uZSA9IHRoaXMuZ2V0U3RyaW5nKHRoaXMuZ2V0T2JqZWN0KHVzZXIuaWRlbnRpdHkpLm1vYmlsZSlcclxuICAgICAgICB9KVxyXG4gICAgICB9LCAyMDApXHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgcGF5KCkge1xyXG4gICAgICAgIC8vIOmYsuaKllxyXG4gICAgICAgIGlmICh0aGlzLmxvYWRpbmcpIHJldHVyblxyXG4gICAgICAgIGlmICghdGhpcy5pc1Bob25lKHRoaXMucGhvbmUpKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy4kYWxlcnQoJ+a4qemmqOaPkOekuicsICfor7fovpPlhaXmraPnoa7nmoTmiYvmnLrlj7fnoIEnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuZ2V0U3RyaW5nKHRoaXMuY29kZSkpIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLiRhbGVydCgn5rip6aao5o+Q56S6JywgJ+ivt+i+k+WFpemqjOivgeeggScpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5nZXRTdHJpbmcodGhpcy52YWx1ZSkpIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLiRhbGVydCgn5rip6aao5o+Q56S6JywgJ+ivt+mAieaLqeiuoumYheaXtumVvycpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICBtb2JpbGU6IHRoaXMuZ2V0U3RyaW5nKHRoaXMucGhvbmUpLFxyXG4gICAgICAgICAgY29kZTogdGhpcy5nZXRTdHJpbmcodGhpcy5jb2RlKSxcclxuICAgICAgICAgIHBpZDogdGhpcy5nZXRTdHJpbmcodGhpcy52YWx1ZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5byA6Ziy5oqWXHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxyXG4gICAgICAgIC8vIOiwg+eUqOeZu+W9lVxyXG4gICAgICAgIHRoaXMuJGxvZ2luKCh7Y29kZX0pID0+IHtcclxuICAgICAgICAgIC8vIOiOt+WPluW+ruS/oeeZu+W9lWNvZGXvvIzlho3mj5DkuqTlpZfppJDorqLljZVcclxuICAgICAgICAgIHRoaXMucmVxdWVzdFBheW1lbnQoT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge3dlaXhpbl9jb2RlOiBjb2RlfSkpXHJcbiAgICAgICAgfSwgJ25vQXV0b0xvZ2luJylcclxuICAgICAgfSxcclxuICAgICAgdHlwaW5nICh0eXBlLCBlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEZWZpbmVkKHRoaXNbdHlwZV0pKSB7XHJcbiAgICAgICAgICB0aGlzW3R5cGVdID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHZlcmlmeSgpIHtcclxuICAgICAgICAvLyDpmLLmipZcclxuICAgICAgICBpZiAodGhpcy5sb2FkaW5nIHx8IHRoaXMudGltZSA+IDApIHJldHVyblxyXG4gICAgICAgIGlmICghdGhpcy5pc1Bob25lKHRoaXMucGhvbmUpKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy4kYWxlcnQoJ+a4qemmqOaPkOekuicsICfor7fovpPlhaXmraPnoa7nmoTmiYvmnLrlj7fnoIEnKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlvIDpmLLmipZcclxuICAgICAgICAvLyB0aGlzLmxvYWRpbmcgPSB0cnVlXHJcbiAgICAgICAgLy8g5byA5YCS6K6h5pe2XHJcbiAgICAgICAgdGhpcy50aW1pbmcoNjApXHJcblxyXG4gICAgICAgIC8vIOagueaNruS4muWKoeaOpeWPo+WkhOeQhjrlj5HpgIHpqozor4HnoIFcclxuICAgICAgICAvLyB0aGlzLiRwb3N0KHt1cmw6IHNlcnZpY2Uuc2VuZENvZGUsIGRhdGF9LCB7XHJcbiAgICAgICAgLy8gICBzdWNjZXNzOiAocmVzKSA9PiB7fSxcclxuICAgICAgICAvLyAgIGZhaWw6IChyZXMpID0+IHtcclxuICAgICAgICAvLyAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpXHJcbiAgICAgICAgLy8gICAgIHRoaXMudGltaW5nKDApXHJcbiAgICAgICAgLy8gICB9LFxyXG4gICAgICAgIC8vICAgY29tcGxldGU6ICgpID0+IHt0aGlzLmxvYWRpbmcgPSBmYWxzZX1cclxuICAgICAgICAvLyB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVxdWVzdFBheW1lbnQgKGRhdGEpIHtcclxuICAgICAgLy8g5qC55o2u5Lia5Yqh5o6l5Y+j5aSE55CGOuWIm+W7uuS6pOaYk+WNlVxyXG4gICAgICAvLyB0aGlzLmxvYWRpbmcgPSB0cnVlXHJcbiAgICAgIC8vIHRoaXMuJHBvc3Qoe3VybDogc2VydmljZS5wYXksIGRhdGF9LCB7XHJcbiAgICAgIC8vICAgc3VjY2VzczogKHtjb2RlLCBkYXRhfSkgPT4ge30sXHJcbiAgICAgIC8vICAgZmFpbDogKHtjb2RlLCBkYXRhfSkgPT4ge30sXHJcbiAgICAgIC8vICAgY29tcGxldGU6ICgpID0+IHt0aGlzLmxvYWRpbmcgPSBmYWxzZX1cclxuICAgICAgLy8gfSlcclxuXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PSDku6XkuIvkuLpzdWNjZXNz6ZqP5py656S65L6LID09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBwYXJhbXMgPSB0aGlzLmdldE9iamVjdCh7XHJcbiAgICAgICAgICB0aW1lU3RhbXA6ICcnLFxyXG4gICAgICAgICAgbm9uY2VTdHI6ICcnLFxyXG4gICAgICAgICAgcGFja2FnZTogJycsXHJcbiAgICAgICAgICBzaWduVHlwZTogJycsXHJcbiAgICAgICAgICBwYXlTaWduOiAnJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8g5oiQ5Yqf6ZyA6KaB5ZSk6LW35pSv5LuYXHJcbiAgICAgICAgd3gucmVxdWVzdFBheW1lbnQoT2JqZWN0LmFzc2lnbih7fSwgcGFyYW1zLCB7XHJcbiAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6ICfmlK/ku5jmj5DnpLonLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICfmlK/ku5jmiJDlip/vvIEnLFxyXG4gICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHsgd3guc3dpdGNoVGFiKHt1cmw6ICcvcGFnZXMvYm9ycm93J30pIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmYWlsOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6ICfmlK/ku5jmj5DnpLonLFxyXG4gICAgICAgICAgICAgIC8vIGNvbnRlbnQ6ICfmlK/ku5jlpLHotKXvvIzor7fph43mlrDlsJ3or5XvvIEnLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICfnpLrkvovmsqHms5XlgZrmlK/ku5gs5bCx5b2T5oiQ5Yqf5LqG5ZCnficsXHJcbiAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gPT09PT09PT09PT09IOWBh+ijheaUr+S7mOaIkOWKnzrpnIDopoHmm7TmlrDnirbmgIEgPT09PT09PT09PT09XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuJHVwZGF0ZUdsb2JhbERhdGEoJ3VzZXInLCB7XHJcbiAgICAgICAgICAgICAgICAgIHBhY2thZ2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZXM6IHRoaXMubGlzdFt0aGlzLmxpc3RJbmRleF0udGltZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVtYWluOiB0aGlzLmxpc3RbdGhpcy5saXN0SW5kZXhdLnRpbWVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiB0aGlzLmxpc3RbdGhpcy5saXN0SW5kZXhdLnF1YW50aXR5LFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ+acquWAn+mYhSdcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjaygpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7IHRoaXMubG9hZGluZyA9IGZhbHNlIH1cclxuICAgICAgICB9KSlcclxuICAgICAgfSwgMTAwKVxyXG4gICAgfVxyXG5cclxuICAgIHRpbWluZyh0aW1lKSB7XHJcbiAgICAgIHRoaXMudGltZSA9IHRoaXMuZ2V0TnVtYmVyKHRpbWUpXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aW1lID4gMCkge1xyXG4gICAgICAgICAgdGhpcy50aW1pbmcodGltZSAtIDEpXHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAxMDAwKVxyXG4gICAgfVxyXG5cclxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJyYWRpb0NhcmRcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmxpc3Quc3luY1wiOlwibGlzdFwiLFwidi1iaW5kOnZhbHVlLnN5bmNcIjpcInZhbHVlXCIsXCJrZXlcIjpcImlkXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgcmFkaW9DYXJkXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=