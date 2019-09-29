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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(pageUser , 'pages/borrow'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvcnJvdy5qcyJdLCJuYW1lcyI6WyJwYWdlVXNlciIsIm1peGlucyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJkYXRhIiwic3R1ZGVudCIsImNsYXNzIiwibWV0aG9kcyIsImNvbXBvbmVudHMiLCJvcHRpb24iLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ3eCIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJoZWFkZXIiLCJzdWNjZXNzIiwicmVzIiwiJGFwcGx5IiwiZmFpbCIsImluaXRQYWdlRGF0YSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7OztBQUhBOzs7SUFLcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUNuQkMsTSxHQUFTLGdELFFBQ1RDLE0sR0FBUztBQUNQQyw4QkFBd0IsSUFEakI7QUFFUEMsNkJBQXVCO0FBRmhCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLGVBQVMsRUFESjtBQUVMQyxhQUFPO0FBRkYsSyxRQW1EUEMsTyxHQUFVLEUsUUFHVkMsVSxHQUFhLEU7Ozs7OzJCQWpETkMsTSxFQUFRO0FBQUE7O0FBQ2IsV0FBS0gsS0FBTCxHQUFhLEtBQUtJLE9BQUwsQ0FBYUMsVUFBYixDQUF3Qk4sT0FBeEIsQ0FBZ0NDLEtBQTdDO0FBQ0FNLGNBQVFDLEdBQVIsQ0FBWSxLQUFLUCxLQUFqQjtBQUNBTSxjQUFRQyxHQUFSLENBQVlKLE1BQVo7QUFDQTtBQUNBSyxTQUFHQyxPQUFILENBQVc7QUFDVEMsYUFBSyxxREFBcUQsS0FBS1YsS0FEdEQ7QUFFVDtBQUNBVyxnQkFBUSxLQUhDO0FBSVRDLGdCQUFRO0FBQ04sMEJBQWdCO0FBRFYsU0FKQztBQU9UQyxpQkFBUyxpQkFBQ0MsR0FBRCxFQUFTO0FBQ2hCUixrQkFBUUMsR0FBUixDQUFZTyxJQUFJaEIsSUFBaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQUtDLE9BQUwsR0FBZWUsSUFBSWhCLElBQW5CO0FBQ0EsaUJBQUtpQixNQUFMO0FBQ0E7QUFDQTtBQUNELFNBbEJRO0FBbUJUQyxjQUFNLGNBQUNGLEdBQUQsRUFBUztBQUNiUixrQkFBUUMsR0FBUixDQUFZLGNBQVosRUFBNEJPLEdBQTVCO0FBQ0Q7QUFyQlEsT0FBWDtBQXVCRDs7OzZCQUVRLENBQ1I7Ozt3Q0FFbUI7QUFDbEIsV0FBS0csWUFBTDtBQUNEOztBQUVEOzs7O21DQUNlO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOzs7O0VBdkRtQyxlQUFLQyxJOztrQkFBdEJ6QixRIiwiZmlsZSI6ImJvcnJvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgLy8gaW1wb3J0IHsgc2VydmljZSB9IGZyb20gJy4uL2NvbmZpZy5qcydcclxuICBpbXBvcnQgaHR0cCBmcm9tICcuLi9taXhpbnMvaHR0cCdcclxuICBpbXBvcnQgYmFzZSBmcm9tICcuLi9taXhpbnMvYmFzZSdcclxuICBpbXBvcnQgdXNlciBmcm9tICcuLi9taXhpbnMvdXNlcidcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgcGFnZVVzZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgbWl4aW5zID0gW2Jhc2UsIGh0dHAsIHVzZXJdXHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfor4Tku7cnLFxyXG4gICAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IGZhbHNlXHJcbiAgICB9XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBzdHVkZW50OiBbIF0sXHJcbiAgICAgIGNsYXNzOiBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKG9wdGlvbikge1xyXG4gICAgICB0aGlzLmNsYXNzID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuc3R1ZGVudC5jbGFzc1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmNsYXNzKVxyXG4gICAgICBjb25zb2xlLmxvZyhvcHRpb24pXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKG9wdGlvbi5wYXJhbXMpXHJcbiAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vZG91eWFlci5hcHBsaW56aS5jb20vZXZhbHVhdGUucGhwP2NsYXNzPScgKyB0aGlzLmNsYXNzLFxyXG4gICAgICAgIC8vIHVybDogJ2h0dHBzOi8vd3d3LnYyZXguY29tL2FwaS90b3BpY3Mvc2hvdy5qc29uP2lkPTUyMCcsXHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKVxyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2codHlwZW9mIChyZXMuZGF0YSkpXHJcbiAgICAgICAgICAvLyB2YXIgc2VydmVyZGF0YSA9IHJlcy5kYXRhXHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzZXJ2ZXJkYXRhWzBdLnNtYWxsTmFtZSlcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHR5cGVvZiAoc2VydmVyZGF0YSkpXHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMuZGF0YVsxXSlcclxuICAgICAgICAgIHRoaXMuc3R1ZGVudCA9IHJlcy5kYXRhXHJcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNtYWxsY2xhc3MpXHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnd2ViZGF0YTonLCB0aGlzLndlYmRhdGEpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnZGVuZ2x1LmZhaWw6JywgcmVzKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvblNob3coKSB7XHJcbiAgICB9XHJcblxyXG4gICAgb25QdWxsRG93blJlZnJlc2goKSB7XHJcbiAgICAgIHRoaXMuaW5pdFBhZ2VEYXRhKClcclxuICAgIH1cclxuXHJcbiAgICAvLyDliJ3lp4vljJbpobXpnaLmlbDmja5cclxuICAgIGluaXRQYWdlRGF0YSgpIHtcclxuICAgICAgLy8g5qC55o2u5Lia5Yqh5o6l5Y+j5aSE55CGOuiOt+WPluacgOaWsOS4quS6uuS/oeaBr+W5tuabtOaWsFxyXG4gICAgICAvLyB0aGlzLiRnZXQoe3VybDogc2VydmljZS51c2VyfSwge1xyXG4gICAgICAvLyAgIHN1Y2Nlc3M6ICh7Y29kZSwgZGF0YX0pID0+IHt9LFxyXG4gICAgICAvLyAgIGZhaWw6ICh7Y29kZSwgZGF0YX0pID0+IHt9XHJcbiAgICAgIC8vIH0pXHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRzID0ge1xyXG4gICAgfVxyXG4gIH1cclxuIl19