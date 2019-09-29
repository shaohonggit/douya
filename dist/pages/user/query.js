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
      queryInfo: {
        year: '',
        term: ''
      },
      scoreList: []
      // webdata: [
      // ]
    }, _this.computed = {}, _this.methods = {
      yearInput: function yearInput(e) {
        this.queryInfo.year = e.detail.value;
      },
      termInput: function termInput(e) {
        this.queryInfo.term = e.detail.value;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(pageUser, [{
    key: 'scoreQuery',
    value: function scoreQuery(query) {
      var _this2 = this;

      // this.$parent.student == null
      if (this.queryInfo.year === '' || this.queryInfo.term === '') {
        return this.$alert('请输入学期和学年');
      } else {
        // console.log(this.data)
        wx.request({
          url: 'https://douyaer.applinzi.com/query.php',
          data: {
            class: this.$parent.globalData.student.class,
            number: this.$parent.globalData.student.number,
            yearInfo: this.queryInfo.year,
            termInfo: this.queryInfo.term
          },
          method: 'GET',
          header: {
            'content-type': 'application/json'
          },
          success: function success(res) {
            console.log('denglu.success:');
            console.log(res.data);
            _this2.scoreList = res.data;
            _this2.$apply();
          },
          fail: function fail(res) {
            console.log('fail to query:', res);
          }
        });
      }
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onShow',
    value: function onShow() {}
  }, {
    key: 'onReady',
    value: function onReady() {}
  }]);

  return pageUser;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(pageUser , 'pages/user/query'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXJ5LmpzIl0sIm5hbWVzIjpbInBhZ2VVc2VyIiwibWl4aW5zIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImRhdGEiLCJxdWVyeUluZm8iLCJ5ZWFyIiwidGVybSIsInNjb3JlTGlzdCIsImNvbXB1dGVkIiwibWV0aG9kcyIsInllYXJJbnB1dCIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsInRlcm1JbnB1dCIsInF1ZXJ5IiwiJGFsZXJ0Iiwid3giLCJyZXF1ZXN0IiwidXJsIiwiY2xhc3MiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsInN0dWRlbnQiLCJudW1iZXIiLCJ5ZWFySW5mbyIsInRlcm1JbmZvIiwibWV0aG9kIiwiaGVhZGVyIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCIkYXBwbHkiLCJmYWlsIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBSEE7OztJQUtxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxNLEdBQVMsZ0QsUUFDVEMsTSxHQUFTO0FBQ1BDLDhCQUF3QixLQURqQjtBQUVQQyw2QkFBdUI7QUFGaEIsSyxRQUtUQyxJLEdBQU87QUFDTEMsaUJBQVc7QUFDVEMsY0FBTSxFQURHO0FBRVRDLGNBQU07QUFGRyxPQUROO0FBS0xDLGlCQUFXO0FBQ1g7QUFDQTtBQVBLLEssUUFrRFBDLFEsR0FBVyxFLFFBR1hDLE8sR0FBVTtBQUNSQyxlQURRLHFCQUNHQyxDQURILEVBQ007QUFDWixhQUFLUCxTQUFMLENBQWVDLElBQWYsR0FBc0JNLEVBQUVDLE1BQUYsQ0FBU0MsS0FBL0I7QUFDRCxPQUhPO0FBSVJDLGVBSlEscUJBSUdILENBSkgsRUFJTTtBQUNaLGFBQUtQLFNBQUwsQ0FBZUUsSUFBZixHQUFzQkssRUFBRUMsTUFBRixDQUFTQyxLQUEvQjtBQUNEO0FBTk8sSzs7Ozs7K0JBM0NDRSxLLEVBQU87QUFBQTs7QUFDaEI7QUFDQSxVQUFJLEtBQUtYLFNBQUwsQ0FBZUMsSUFBZixLQUF3QixFQUF4QixJQUE4QixLQUFLRCxTQUFMLENBQWVFLElBQWYsS0FBd0IsRUFBMUQsRUFBOEQ7QUFDNUQsZUFBTyxLQUFLVSxNQUFMLENBQVksVUFBWixDQUFQO0FBQ0QsT0FGRCxNQUVPO0FBQ0w7QUFDQUMsV0FBR0MsT0FBSCxDQUFXO0FBQ1RDLGVBQUssd0NBREk7QUFFVGhCLGdCQUFNO0FBQ0ppQixtQkFBTyxLQUFLQyxPQUFMLENBQWFDLFVBQWIsQ0FBd0JDLE9BQXhCLENBQWdDSCxLQURuQztBQUVKSSxvQkFBUSxLQUFLSCxPQUFMLENBQWFDLFVBQWIsQ0FBd0JDLE9BQXhCLENBQWdDQyxNQUZwQztBQUdKQyxzQkFBVSxLQUFLckIsU0FBTCxDQUFlQyxJQUhyQjtBQUlKcUIsc0JBQVUsS0FBS3RCLFNBQUwsQ0FBZUU7QUFKckIsV0FGRztBQVFUcUIsa0JBQVEsS0FSQztBQVNUQyxrQkFBUTtBQUNOLDRCQUFnQjtBQURWLFdBVEM7QUFZVEMsbUJBQVMsaUJBQUNDLEdBQUQsRUFBUztBQUNoQkMsb0JBQVFDLEdBQVIsQ0FBWSxpQkFBWjtBQUNBRCxvQkFBUUMsR0FBUixDQUFZRixJQUFJM0IsSUFBaEI7QUFDQSxtQkFBS0ksU0FBTCxHQUFpQnVCLElBQUkzQixJQUFyQjtBQUNBLG1CQUFLOEIsTUFBTDtBQUNELFdBakJRO0FBa0JUQyxnQkFBTSxjQUFDSixHQUFELEVBQVM7QUFDYkMsb0JBQVFDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QkYsR0FBOUI7QUFDRDtBQXBCUSxTQUFYO0FBc0JEO0FBQ0Y7Ozs2QkFFUSxDQUNSOzs7NkJBRVEsQ0FDUjs7OzhCQUVTLENBQ1Q7Ozs7RUF2RG1DLGVBQUtLLEk7O2tCQUF0QnJDLFEiLCJmaWxlIjoicXVlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIC8vIGltcG9ydCB7IHNlcnZpY2UgfSBmcm9tICcuLi9jb25maWcuanMnXHJcbiAgaW1wb3J0IGh0dHAgZnJvbSAnLi4vLi4vbWl4aW5zL2h0dHAnXHJcbiAgaW1wb3J0IGJhc2UgZnJvbSAnLi4vLi4vbWl4aW5zL2Jhc2UnXHJcbiAgaW1wb3J0IHVzZXIgZnJvbSAnLi4vLi4vbWl4aW5zL3VzZXInXHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgcGFnZVVzZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgbWl4aW5zID0gW2Jhc2UsIGh0dHAsIHVzZXJdXHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfosYboir3lhL8nLFxyXG4gICAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgcXVlcnlJbmZvOiB7XHJcbiAgICAgICAgeWVhcjogJycsXHJcbiAgICAgICAgdGVybTogJydcclxuICAgICAgfSxcclxuICAgICAgc2NvcmVMaXN0OiBbIF1cclxuICAgICAgLy8gd2ViZGF0YTogW1xyXG4gICAgICAvLyBdXHJcbiAgICB9XHJcblxyXG4gICAgc2NvcmVRdWVyeShxdWVyeSkge1xyXG4gICAgICAvLyB0aGlzLiRwYXJlbnQuc3R1ZGVudCA9PSBudWxsXHJcbiAgICAgIGlmICh0aGlzLnF1ZXJ5SW5mby55ZWFyID09PSAnJyB8fCB0aGlzLnF1ZXJ5SW5mby50ZXJtID09PSAnJykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRhbGVydCgn6K+36L6T5YWl5a2m5pyf5ZKM5a2m5bm0JylcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRhdGEpXHJcbiAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6ICdodHRwczovL2RvdXlhZXIuYXBwbGluemkuY29tL3F1ZXJ5LnBocCcsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGNsYXNzOiB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5zdHVkZW50LmNsYXNzLFxyXG4gICAgICAgICAgICBudW1iZXI6IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnN0dWRlbnQubnVtYmVyLFxyXG4gICAgICAgICAgICB5ZWFySW5mbzogdGhpcy5xdWVyeUluZm8ueWVhcixcclxuICAgICAgICAgICAgdGVybUluZm86IHRoaXMucXVlcnlJbmZvLnRlcm1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZW5nbHUuc3VjY2VzczonKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcclxuICAgICAgICAgICAgdGhpcy5zY29yZUxpc3QgPSByZXMuZGF0YVxyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbDogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZmFpbCB0byBxdWVyeTonLCByZXMpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBvblNob3coKSB7XHJcbiAgICB9XHJcblxyXG4gICAgb25SZWFkeSgpIHtcclxuICAgIH1cclxuXHJcbiAgICBjb21wdXRlZCA9IHtcclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICB5ZWFySW5wdXQgKGUpIHtcclxuICAgICAgICB0aGlzLnF1ZXJ5SW5mby55ZWFyID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSxcclxuICAgICAgdGVybUlucHV0IChlKSB7XHJcbiAgICAgICAgdGhpcy5xdWVyeUluZm8udGVybSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=