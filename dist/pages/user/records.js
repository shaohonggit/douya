'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _base = require('./../../mixins/base.js');

var _base2 = _interopRequireDefault(_base);

var _http = require('./../../mixins/http.js');

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Records = function (_wepy$page) {
  _inherits(Records, _wepy$page);

  function Records() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Records);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Records.__proto__ || Object.getPrototypeOf(Records)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default, _http2.default], _this.config = {
      navigationBarTitleText: '豆芽儿',
      navigationBarTextStyle: 'white',
      navigationBarBackgroundColor: ''
    }, _this.data = {
      // navbar: ['关注列表', '成果查询'],
      // currentTab: 0,
      event: []
      // achievements: [ ]
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Records, [{
    key: 'onLoad',
    value: function onLoad(option) {
      var _this2 = this;

      wx.request({
        url: 'https://douyaer.applinzi.com/records.php',
        data: {
          number: this.$parent.globalData.student.number
        },
        method: 'GET',
        header: {
          'content-type': 'application/json'
        },
        success: function success(res) {
          console.log(res.data);
          // console.log(typeof (res.data[0]))
          _this2.event = res.data;
          // this.achievements = res.data[1]
          _this2.$apply();
        },
        fail: function fail(res) {
          console.log('fail to fetch list:', res);
        }
      });
    }
  }, {
    key: 'onReady',
    value: function onReady() {}
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {}
  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {}

    // navbarTap(e) {
    //   this.currentTab = e.currentTarget.dataset.idx
    // }

  }]);

  return Records;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Records , 'pages/user/records'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29yZHMuanMiXSwibmFtZXMiOlsiUmVjb3JkcyIsIm1peGlucyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsImRhdGEiLCJldmVudCIsIm1ldGhvZHMiLCJvcHRpb24iLCJ3eCIsInJlcXVlc3QiLCJ1cmwiLCJudW1iZXIiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsInN0dWRlbnQiLCJtZXRob2QiLCJoZWFkZXIiLCJzdWNjZXNzIiwicmVzIiwiY29uc29sZSIsImxvZyIsIiRhcHBseSIsImZhaWwiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxNLEdBQVMsZ0MsUUFDVEMsTSxHQUFTO0FBQ1BDLDhCQUF3QixLQURqQjtBQUVQQyw4QkFBd0IsT0FGakI7QUFHUEMsb0NBQThCO0FBSHZCLEssUUFLVEMsSSxHQUFPO0FBQ0w7QUFDQTtBQUNBQyxhQUFPO0FBQ1A7QUFKSyxLLFFBMENQQyxPLEdBQVUsRTs7Ozs7MkJBbkNIQyxNLEVBQVE7QUFBQTs7QUFDYkMsU0FBR0MsT0FBSCxDQUFXO0FBQ1RDLGFBQUssMENBREk7QUFFVE4sY0FBTTtBQUNKTyxrQkFBUSxLQUFLQyxPQUFMLENBQWFDLFVBQWIsQ0FBd0JDLE9BQXhCLENBQWdDSDtBQURwQyxTQUZHO0FBS1RJLGdCQUFRLEtBTEM7QUFNVEMsZ0JBQVE7QUFDTiwwQkFBZ0I7QUFEVixTQU5DO0FBU1RDLGlCQUFTLGlCQUFDQyxHQUFELEVBQVM7QUFDaEJDLGtCQUFRQyxHQUFSLENBQVlGLElBQUlkLElBQWhCO0FBQ0E7QUFDQSxpQkFBS0MsS0FBTCxHQUFhYSxJQUFJZCxJQUFqQjtBQUNBO0FBQ0EsaUJBQUtpQixNQUFMO0FBQ0QsU0FmUTtBQWdCVEMsY0FBTSxjQUFDSixHQUFELEVBQVM7QUFDYkMsa0JBQVFDLEdBQVIsQ0FBWSxxQkFBWixFQUFtQ0YsR0FBbkM7QUFDRDtBQWxCUSxPQUFYO0FBb0JEOzs7OEJBQ1MsQ0FDVDs7O3dDQUVtQixDQUNuQjs7O29DQUVlLENBQ2Y7O0FBRUQ7QUFDQTtBQUNBOzs7OztFQS9DbUMsZUFBS0ssSTs7a0JBQXJCekIsTyIsImZpbGUiOiJyZWNvcmRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgYmFzZSBmcm9tICcuLi8uLi9taXhpbnMvYmFzZSdcclxuICBpbXBvcnQgaHR0cCBmcm9tICcuLi8uLi9taXhpbnMvaHR0cCdcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjb3JkcyBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBtaXhpbnMgPSBbYmFzZSwgaHR0cF1cclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+ixhuiKveWEvycsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICd3aGl0ZScsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcnXHJcbiAgICB9XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAvLyBuYXZiYXI6IFsn5YWz5rOo5YiX6KGoJywgJ+aIkOaenOafpeivoiddLFxyXG4gICAgICAvLyBjdXJyZW50VGFiOiAwLFxyXG4gICAgICBldmVudDogWyBdXHJcbiAgICAgIC8vIGFjaGlldmVtZW50czogWyBdXHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKG9wdGlvbikge1xyXG4gICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICdodHRwczovL2RvdXlhZXIuYXBwbGluemkuY29tL3JlY29yZHMucGhwJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBudW1iZXI6IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnN0dWRlbnQubnVtYmVyXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0eXBlb2YgKHJlcy5kYXRhWzBdKSlcclxuICAgICAgICAgIHRoaXMuZXZlbnQgPSByZXMuZGF0YVxyXG4gICAgICAgICAgLy8gdGhpcy5hY2hpZXZlbWVudHMgPSByZXMuZGF0YVsxXVxyXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbDogKHJlcykgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2ZhaWwgdG8gZmV0Y2ggbGlzdDonLCByZXMpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgb25SZWFkeSgpIHtcclxuICAgIH1cclxuXHJcbiAgICBvblB1bGxEb3duUmVmcmVzaCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBvblJlYWNoQm90dG9tKCkge1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG5hdmJhclRhcChlKSB7XHJcbiAgICAvLyAgIHRoaXMuY3VycmVudFRhYiA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkeFxyXG4gICAgLy8gfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=