'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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
      navigationBarTitleText: '豆芽儿',
      enablePullDownRefresh: false
    }, _this.data = {
      student: {
        number: '',
        password: ''
        // webdata: [
        // ]
      } }, _this.computed = {}, _this.methods = {
      numberInput: function numberInput(e) {
        this.student.number = e.detail.value;
      },
      passwordInput: function passwordInput(e) {
        this.student.password = e.detail.value;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(pageUser, [{
    key: 'denglu',
    value: function denglu(student) {
      var _this2 = this;

      // this.$parent.student == null
      if (this.student.number === '' || this.student.password === '') {
        return this.$alert('请输入学号和密码');
      } else {
        // console.log(this.data)
        wx.request({
          url: 'http://localhost/douyalocal2019.4.9/login.php?number=' + this.student.number,
          // url: 'https://grdouyaer.applinzi.com/',
          // url: 'https://news-at.zhihu.com/api/4/news/latest',
          // url: service.login,
          method: 'GET',
          header: {
            'content-type': 'application/json'
          },
          success: function success(res) {
            console.log('denglu.success:');
            console.log(res.data);
            // console.log(res.data[0].username)
            // this.webdata = res.data[0]
            var serverdata = res.data;
            if (_this2.student.number === serverdata.number && _this2.student.password === serverdata.password) {
              // return this.$alert('登录成功')
              _this2.$parent.globalData.student = serverdata;
              _this2.$apply(); // 在异步函数中更新数据的时候，必须手动调用$apply方法，才会触发脏数据检查流程的运行
              console.log('globalData', _this2.$parent.globalData.student);
              wx.switchTab({
                url: './index'
              });
              return _this2.$alert('登录成功');
            } else {
              return _this2.$alert('学号或密码错误');
            }
          },
          fail: function fail(res) {
            console.log('denglu.fail:', res);
          }
        });
      }
    }
  }]);

  return pageUser;
}(_wepy2.default.page);

exports.default = pageUser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2YWx1YXRlUGVvcGxlLmpzIl0sIm5hbWVzIjpbInBhZ2VVc2VyIiwibWl4aW5zIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImRhdGEiLCJzdHVkZW50IiwibnVtYmVyIiwicGFzc3dvcmQiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJudW1iZXJJbnB1dCIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsInBhc3N3b3JkSW5wdXQiLCIkYWxlcnQiLCJ3eCIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJoZWFkZXIiLCJzdWNjZXNzIiwicmVzIiwiY29uc29sZSIsImxvZyIsInNlcnZlcmRhdGEiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsIiRhcHBseSIsInN3aXRjaFRhYiIsImZhaWwiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFIQTs7O0lBS3FCQSxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLE0sR0FBUyxnRCxRQUNUQyxNLEdBQVM7QUFDUEMsOEJBQXdCLEtBRGpCO0FBRVBDLDZCQUF1QjtBQUZoQixLLFFBS1RDLEksR0FBTztBQUNMQyxlQUFTO0FBQ1BDLGdCQUFRLEVBREQ7QUFFUEMsa0JBQVU7QUFFWjtBQUNBO0FBTFMsT0FESixFLFFBa0RQQyxRLEdBQVcsRSxRQUdYQyxPLEdBQVU7QUFDUkMsaUJBRFEsdUJBQ0tDLENBREwsRUFDUTtBQUNkLGFBQUtOLE9BQUwsQ0FBYUMsTUFBYixHQUFzQkssRUFBRUMsTUFBRixDQUFTQyxLQUEvQjtBQUNELE9BSE87QUFJUkMsbUJBSlEseUJBSU9ILENBSlAsRUFJVTtBQUNoQixhQUFLTixPQUFMLENBQWFFLFFBQWIsR0FBd0JJLEVBQUVDLE1BQUYsQ0FBU0MsS0FBakM7QUFDRDtBQU5PLEs7Ozs7OzJCQTVDSFIsTyxFQUFTO0FBQUE7O0FBQ2Q7QUFDQSxVQUFJLEtBQUtBLE9BQUwsQ0FBYUMsTUFBYixLQUF3QixFQUF4QixJQUE4QixLQUFLRCxPQUFMLENBQWFFLFFBQWIsS0FBMEIsRUFBNUQsRUFBZ0U7QUFDOUQsZUFBTyxLQUFLUSxNQUFMLENBQVksVUFBWixDQUFQO0FBQ0QsT0FGRCxNQUVPO0FBQ0w7QUFDQUMsV0FBR0MsT0FBSCxDQUFXO0FBQ1RDLGVBQUssMERBQTBELEtBQUtiLE9BQUwsQ0FBYUMsTUFEbkU7QUFFVDtBQUNBO0FBQ0E7QUFDQWEsa0JBQVEsS0FMQztBQU1UQyxrQkFBUTtBQUNOLDRCQUFnQjtBQURWLFdBTkM7QUFTVEMsbUJBQVMsaUJBQUNDLEdBQUQsRUFBUztBQUNoQkMsb0JBQVFDLEdBQVIsQ0FBWSxpQkFBWjtBQUNBRCxvQkFBUUMsR0FBUixDQUFZRixJQUFJbEIsSUFBaEI7QUFDQTtBQUNBO0FBQ0EsZ0JBQUlxQixhQUFhSCxJQUFJbEIsSUFBckI7QUFDQSxnQkFBSSxPQUFLQyxPQUFMLENBQWFDLE1BQWIsS0FBd0JtQixXQUFXbkIsTUFBbkMsSUFBNkMsT0FBS0QsT0FBTCxDQUFhRSxRQUFiLEtBQTBCa0IsV0FBV2xCLFFBQXRGLEVBQWdHO0FBQzlGO0FBQ0EscUJBQUttQixPQUFMLENBQWFDLFVBQWIsQ0FBd0J0QixPQUF4QixHQUFrQ29CLFVBQWxDO0FBQ0EscUJBQUtHLE1BQUwsR0FIOEYsQ0FHOUU7QUFDaEJMLHNCQUFRQyxHQUFSLENBQVksWUFBWixFQUEwQixPQUFLRSxPQUFMLENBQWFDLFVBQWIsQ0FBd0J0QixPQUFsRDtBQUNBVyxpQkFBR2EsU0FBSCxDQUFhO0FBQ1hYLHFCQUFLO0FBRE0sZUFBYjtBQUdBLHFCQUFPLE9BQUtILE1BQUwsQ0FBWSxNQUFaLENBQVA7QUFDRCxhQVRELE1BU087QUFDTCxxQkFBTyxPQUFLQSxNQUFMLENBQVksU0FBWixDQUFQO0FBQ0Q7QUFDRixXQTNCUTtBQTRCVGUsZ0JBQU0sY0FBQ1IsR0FBRCxFQUFTO0FBQ2JDLG9CQUFRQyxHQUFSLENBQVksY0FBWixFQUE0QkYsR0FBNUI7QUFDRDtBQTlCUSxTQUFYO0FBZ0NEO0FBQ0Y7Ozs7RUF2RG1DLGVBQUtTLEk7O2tCQUF0QmhDLFEiLCJmaWxlIjoiZXZhbHVhdGVQZW9wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIC8vIGltcG9ydCB7IHNlcnZpY2UgfSBmcm9tICcuLi9jb25maWcuanMnXHJcbiAgaW1wb3J0IGh0dHAgZnJvbSAnLi4vbWl4aW5zL2h0dHAnXHJcbiAgaW1wb3J0IGJhc2UgZnJvbSAnLi4vbWl4aW5zL2Jhc2UnXHJcbiAgaW1wb3J0IHVzZXIgZnJvbSAnLi4vbWl4aW5zL3VzZXInXHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgcGFnZVVzZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgbWl4aW5zID0gW2Jhc2UsIGh0dHAsIHVzZXJdXHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfosYboir3lhL8nLFxyXG4gICAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgc3R1ZGVudDoge1xyXG4gICAgICAgIG51bWJlcjogJycsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICcnXHJcbiAgICAgIH1cclxuICAgICAgLy8gd2ViZGF0YTogW1xyXG4gICAgICAvLyBdXHJcbiAgICB9XHJcblxyXG4gICAgZGVuZ2x1KHN0dWRlbnQpIHtcclxuICAgICAgLy8gdGhpcy4kcGFyZW50LnN0dWRlbnQgPT0gbnVsbFxyXG4gICAgICBpZiAodGhpcy5zdHVkZW50Lm51bWJlciA9PT0gJycgfHwgdGhpcy5zdHVkZW50LnBhc3N3b3JkID09PSAnJykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRhbGVydCgn6K+36L6T5YWl5a2m5Y+35ZKM5a+G56CBJylcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRhdGEpXHJcbiAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0L2RvdXlhbG9jYWwyMDE5LjQuOS9sb2dpbi5waHA/bnVtYmVyPScgKyB0aGlzLnN0dWRlbnQubnVtYmVyLFxyXG4gICAgICAgICAgLy8gdXJsOiAnaHR0cHM6Ly9ncmRvdXlhZXIuYXBwbGluemkuY29tLycsXHJcbiAgICAgICAgICAvLyB1cmw6ICdodHRwczovL25ld3MtYXQuemhpaHUuY29tL2FwaS80L25ld3MvbGF0ZXN0JyxcclxuICAgICAgICAgIC8vIHVybDogc2VydmljZS5sb2dpbixcclxuICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RlbmdsdS5zdWNjZXNzOicpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMuZGF0YVswXS51c2VybmFtZSlcclxuICAgICAgICAgICAgLy8gdGhpcy53ZWJkYXRhID0gcmVzLmRhdGFbMF1cclxuICAgICAgICAgICAgdmFyIHNlcnZlcmRhdGEgPSByZXMuZGF0YVxyXG4gICAgICAgICAgICBpZiAodGhpcy5zdHVkZW50Lm51bWJlciA9PT0gc2VydmVyZGF0YS5udW1iZXIgJiYgdGhpcy5zdHVkZW50LnBhc3N3b3JkID09PSBzZXJ2ZXJkYXRhLnBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgICAgLy8gcmV0dXJuIHRoaXMuJGFsZXJ0KCfnmbvlvZXmiJDlip8nKVxyXG4gICAgICAgICAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnN0dWRlbnQgPSBzZXJ2ZXJkYXRhXHJcbiAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKSAgIC8vIOWcqOW8guatpeWHveaVsOS4reabtOaWsOaVsOaNrueahOaXtuWAme+8jOW/hemhu+aJi+WKqOiwg+eUqCRhcHBseeaWueazle+8jOaJjeS8muinpuWPkeiEj+aVsOaNruajgOafpea1geeoi+eahOi/kOihjFxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnbG9iYWxEYXRhJywgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuc3R1ZGVudClcclxuICAgICAgICAgICAgICB3eC5zd2l0Y2hUYWIoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnLi9pbmRleCdcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLiRhbGVydCgn55m75b2V5oiQ5YqfJylcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kYWxlcnQoJ+WtpuWPt+aIluWvhueggemUmeivrycpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmYWlsOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZW5nbHUuZmFpbDonLCByZXMpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXB1dGVkID0ge1xyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIG51bWJlcklucHV0IChlKSB7XHJcbiAgICAgICAgdGhpcy5zdHVkZW50Lm51bWJlciA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHBhc3N3b3JkSW5wdXQgKGUpIHtcclxuICAgICAgICB0aGlzLnN0dWRlbnQucGFzc3dvcmQgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19