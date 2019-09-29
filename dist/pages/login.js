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
      navigationBarTitleText: '豆芽儿',
      enablePullDownRefresh: false
    }, _this.data = {
      student: {
        number: '',
        password: ''
      },
      isRemember: false
      // webdata: [
      // ]
    }, _this.computed = {}, _this.methods = {
      numberInput: function numberInput(e) {
        this.student.number = e.detail.value;
      },
      passwordInput: function passwordInput(e) {
        this.student.password = e.detail.value;
      },
      rememberPwd: function rememberPwd(e) {
        this.isRemember = !!e.detail.value.length;
        if (this.isRemember) {
          console.log(this.isRemember);
          wx.setStorage({
            key: 'rememberInfo',
            data: this.student
          });
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(pageUser, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log(this.isRemember);
      var self = this;
      wx.getStorage({
        key: 'rememberInfo',
        success: function success(res) {
          console.log(res.data);
          console.log('wx.getStorage.success--this:', this);
          self.student = res.data;
          console.log(self);
          console.log(self.student);
        }
      });
    }
  }, {
    key: 'denglu',
    value: function denglu(student) {
      var _this2 = this;

      // this.$parent.student == null
      if (this.student.number === '' || this.student.password === '') {
        return this.$alert('请输入学号和密码');
      } else {
        // console.log(this.data)
        wx.request({
          url: 'http://localhost/douyalocal/login.php?number=' + this.student.number,
          // url: 'https://douyaer.applinzi.com/login.php?number=' + this.student.number,
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(pageUser , 'pages/login'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbInBhZ2VVc2VyIiwibWl4aW5zIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImRhdGEiLCJzdHVkZW50IiwibnVtYmVyIiwicGFzc3dvcmQiLCJpc1JlbWVtYmVyIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwibnVtYmVySW5wdXQiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJwYXNzd29yZElucHV0IiwicmVtZW1iZXJQd2QiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwid3giLCJzZXRTdG9yYWdlIiwia2V5Iiwic2VsZiIsImdldFN0b3JhZ2UiLCJzdWNjZXNzIiwicmVzIiwiJGFsZXJ0IiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImhlYWRlciIsInNlcnZlcmRhdGEiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsIiRhcHBseSIsInN3aXRjaFRhYiIsImZhaWwiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFIQTs7O0lBS3FCQSxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLE0sR0FBUyxnRCxRQUNUQyxNLEdBQVM7QUFDUEMsOEJBQXdCLEtBRGpCO0FBRVBDLDZCQUF1QjtBQUZoQixLLFFBS1RDLEksR0FBTztBQUNMQyxlQUFTO0FBQ1BDLGdCQUFRLEVBREQ7QUFFUEMsa0JBQVU7QUFGSCxPQURKO0FBS0xDLGtCQUFZO0FBQ1o7QUFDQTtBQVBLLEssUUFpRVBDLFEsR0FBVyxFLFFBR1hDLE8sR0FBVTtBQUNSQyxpQkFEUSx1QkFDS0MsQ0FETCxFQUNRO0FBQ2QsYUFBS1AsT0FBTCxDQUFhQyxNQUFiLEdBQXNCTSxFQUFFQyxNQUFGLENBQVNDLEtBQS9CO0FBQ0QsT0FITztBQUlSQyxtQkFKUSx5QkFJT0gsQ0FKUCxFQUlVO0FBQ2hCLGFBQUtQLE9BQUwsQ0FBYUUsUUFBYixHQUF3QkssRUFBRUMsTUFBRixDQUFTQyxLQUFqQztBQUNELE9BTk87QUFPUkUsaUJBUFEsdUJBT0tKLENBUEwsRUFPUTtBQUNkLGFBQUtKLFVBQUwsR0FBa0IsQ0FBQyxDQUFDSSxFQUFFQyxNQUFGLENBQVNDLEtBQVQsQ0FBZUcsTUFBbkM7QUFDQSxZQUFJLEtBQUtULFVBQVQsRUFBcUI7QUFDbkJVLGtCQUFRQyxHQUFSLENBQVksS0FBS1gsVUFBakI7QUFDQVksYUFBR0MsVUFBSCxDQUFjO0FBQ1pDLGlCQUFLLGNBRE87QUFFWmxCLGtCQUFNLEtBQUtDO0FBRkMsV0FBZDtBQUlEO0FBQ0Y7QUFoQk8sSzs7Ozs7NkJBMUREO0FBQ1BhLGNBQVFDLEdBQVIsQ0FBWSxLQUFLWCxVQUFqQjtBQUNBLFVBQUllLE9BQU8sSUFBWDtBQUNBSCxTQUFHSSxVQUFILENBQWM7QUFDWkYsYUFBSyxjQURPO0FBRVpHLGVBRlksbUJBRUhDLEdBRkcsRUFFRTtBQUNaUixrQkFBUUMsR0FBUixDQUFZTyxJQUFJdEIsSUFBaEI7QUFDQWMsa0JBQVFDLEdBQVIsQ0FBWSw4QkFBWixFQUE0QyxJQUE1QztBQUNBSSxlQUFLbEIsT0FBTCxHQUFlcUIsSUFBSXRCLElBQW5CO0FBQ0FjLGtCQUFRQyxHQUFSLENBQVlJLElBQVo7QUFDQUwsa0JBQVFDLEdBQVIsQ0FBWUksS0FBS2xCLE9BQWpCO0FBQ0Q7QUFSVyxPQUFkO0FBVUQ7OzsyQkFFTUEsTyxFQUFTO0FBQUE7O0FBQ2Q7QUFDQSxVQUFJLEtBQUtBLE9BQUwsQ0FBYUMsTUFBYixLQUF3QixFQUF4QixJQUE4QixLQUFLRCxPQUFMLENBQWFFLFFBQWIsS0FBMEIsRUFBNUQsRUFBZ0U7QUFDOUQsZUFBTyxLQUFLb0IsTUFBTCxDQUFZLFVBQVosQ0FBUDtBQUNELE9BRkQsTUFFTztBQUNMO0FBQ0FQLFdBQUdRLE9BQUgsQ0FBVztBQUNUQyxlQUFLLGtEQUFrRCxLQUFLeEIsT0FBTCxDQUFhQyxNQUQzRDtBQUVUO0FBQ0E7QUFDQXdCLGtCQUFRLEtBSkM7QUFLVEMsa0JBQVE7QUFDTiw0QkFBZ0I7QUFEVixXQUxDO0FBUVROLG1CQUFTLGlCQUFDQyxHQUFELEVBQVM7QUFDaEJSLG9CQUFRQyxHQUFSLENBQVksaUJBQVo7QUFDQUQsb0JBQVFDLEdBQVIsQ0FBWU8sSUFBSXRCLElBQWhCO0FBQ0E7QUFDQTtBQUNBLGdCQUFJNEIsYUFBYU4sSUFBSXRCLElBQXJCO0FBQ0EsZ0JBQUksT0FBS0MsT0FBTCxDQUFhQyxNQUFiLEtBQXdCMEIsV0FBVzFCLE1BQW5DLElBQTZDLE9BQUtELE9BQUwsQ0FBYUUsUUFBYixLQUEwQnlCLFdBQVd6QixRQUF0RixFQUFnRztBQUM5RjtBQUNBLHFCQUFLMEIsT0FBTCxDQUFhQyxVQUFiLENBQXdCN0IsT0FBeEIsR0FBa0MyQixVQUFsQztBQUNBLHFCQUFLRyxNQUFMLEdBSDhGLENBRzlFO0FBQ2hCakIsc0JBQVFDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCLE9BQUtjLE9BQUwsQ0FBYUMsVUFBYixDQUF3QjdCLE9BQWxEO0FBQ0FlLGlCQUFHZ0IsU0FBSCxDQUFhO0FBQ1hQLHFCQUFLO0FBRE0sZUFBYjtBQUdBLHFCQUFPLE9BQUtGLE1BQUwsQ0FBWSxNQUFaLENBQVA7QUFDRCxhQVRELE1BU087QUFDTCxxQkFBTyxPQUFLQSxNQUFMLENBQVksU0FBWixDQUFQO0FBQ0Q7QUFDRixXQTFCUTtBQTJCVFUsZ0JBQU0sY0FBQ1gsR0FBRCxFQUFTO0FBQ2JSLG9CQUFRQyxHQUFSLENBQVksY0FBWixFQUE0Qk8sR0FBNUI7QUFDRDtBQTdCUSxTQUFYO0FBK0JEO0FBQ0Y7Ozs7RUF0RW1DLGVBQUtZLEk7O2tCQUF0QnZDLFEiLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIC8vIGltcG9ydCB7IHNlcnZpY2UgfSBmcm9tICcuLi9jb25maWcuanMnXHJcbiAgaW1wb3J0IGh0dHAgZnJvbSAnLi4vbWl4aW5zL2h0dHAnXHJcbiAgaW1wb3J0IGJhc2UgZnJvbSAnLi4vbWl4aW5zL2Jhc2UnXHJcbiAgaW1wb3J0IHVzZXIgZnJvbSAnLi4vbWl4aW5zL3VzZXInXHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgcGFnZVVzZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgbWl4aW5zID0gW2Jhc2UsIGh0dHAsIHVzZXJdXHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfosYboir3lhL8nLFxyXG4gICAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgc3R1ZGVudDoge1xyXG4gICAgICAgIG51bWJlcjogJycsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICcnXHJcbiAgICAgIH0sXHJcbiAgICAgIGlzUmVtZW1iZXI6IGZhbHNlXHJcbiAgICAgIC8vIHdlYmRhdGE6IFtcclxuICAgICAgLy8gXVxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5pc1JlbWVtYmVyKVxyXG4gICAgICB2YXIgc2VsZiA9IHRoaXNcclxuICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAga2V5OiAncmVtZW1iZXJJbmZvJyxcclxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ3d4LmdldFN0b3JhZ2Uuc3VjY2Vzcy0tdGhpczonLCB0aGlzKVxyXG4gICAgICAgICAgc2VsZi5zdHVkZW50ID0gcmVzLmRhdGFcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGYpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhzZWxmLnN0dWRlbnQpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGRlbmdsdShzdHVkZW50KSB7XHJcbiAgICAgIC8vIHRoaXMuJHBhcmVudC5zdHVkZW50ID09IG51bGxcclxuICAgICAgaWYgKHRoaXMuc3R1ZGVudC5udW1iZXIgPT09ICcnIHx8IHRoaXMuc3R1ZGVudC5wYXNzd29yZCA9PT0gJycpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kYWxlcnQoJ+ivt+i+k+WFpeWtpuWPt+WSjOWvhueggScpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5kYXRhKVxyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdC9kb3V5YWxvY2FsL2xvZ2luLnBocD9udW1iZXI9JyArIHRoaXMuc3R1ZGVudC5udW1iZXIsXHJcbiAgICAgICAgICAvLyB1cmw6ICdodHRwczovL2RvdXlhZXIuYXBwbGluemkuY29tL2xvZ2luLnBocD9udW1iZXI9JyArIHRoaXMuc3R1ZGVudC5udW1iZXIsXHJcbiAgICAgICAgICAvLyB1cmw6IHNlcnZpY2UubG9naW4sXHJcbiAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZW5nbHUuc3VjY2VzczonKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzLmRhdGFbMF0udXNlcm5hbWUpXHJcbiAgICAgICAgICAgIC8vIHRoaXMud2ViZGF0YSA9IHJlcy5kYXRhWzBdXHJcbiAgICAgICAgICAgIHZhciBzZXJ2ZXJkYXRhID0gcmVzLmRhdGFcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3R1ZGVudC5udW1iZXIgPT09IHNlcnZlcmRhdGEubnVtYmVyICYmIHRoaXMuc3R1ZGVudC5wYXNzd29yZCA9PT0gc2VydmVyZGF0YS5wYXNzd29yZCkge1xyXG4gICAgICAgICAgICAgIC8vIHJldHVybiB0aGlzLiRhbGVydCgn55m75b2V5oiQ5YqfJylcclxuICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5zdHVkZW50ID0gc2VydmVyZGF0YVxyXG4gICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCkgICAvLyDlnKjlvILmraXlh73mlbDkuK3mm7TmlrDmlbDmja7nmoTml7blgJnvvIzlv4XpobvmiYvliqjosIPnlKgkYXBwbHnmlrnms5XvvIzmiY3kvJrop6blj5HohI/mlbDmja7mo4Dmn6XmtYHnqIvnmoTov5DooYxcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ2xvYmFsRGF0YScsIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnN0dWRlbnQpXHJcbiAgICAgICAgICAgICAgd3guc3dpdGNoVGFiKHtcclxuICAgICAgICAgICAgICAgIHVybDogJy4vaW5kZXgnXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kYWxlcnQoJ+eZu+W9leaIkOWKnycpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGFsZXJ0KCflrablj7fmiJblr4bnoIHplJnor68nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbDogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGVuZ2x1LmZhaWw6JywgcmVzKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wdXRlZCA9IHtcclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBudW1iZXJJbnB1dCAoZSkge1xyXG4gICAgICAgIHRoaXMuc3R1ZGVudC5udW1iZXIgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB9LFxyXG4gICAgICBwYXNzd29yZElucHV0IChlKSB7XHJcbiAgICAgICAgdGhpcy5zdHVkZW50LnBhc3N3b3JkID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSxcclxuICAgICAgcmVtZW1iZXJQd2QgKGUpIHtcclxuICAgICAgICB0aGlzLmlzUmVtZW1iZXIgPSAhIWUuZGV0YWlsLnZhbHVlLmxlbmd0aFxyXG4gICAgICAgIGlmICh0aGlzLmlzUmVtZW1iZXIpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaXNSZW1lbWJlcilcclxuICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICBrZXk6ICdyZW1lbWJlckluZm8nLFxyXG4gICAgICAgICAgICBkYXRhOiB0aGlzLnN0dWRlbnRcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19