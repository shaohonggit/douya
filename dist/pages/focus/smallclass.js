'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _base = require('./../../mixins/base.js');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SmallClass = function (_wepy$page) {
  _inherits(SmallClass, _wepy$page);

  function SmallClass() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SmallClass);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SmallClass.__proto__ || Object.getPrototypeOf(SmallClass)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default], _this.config = {
      navigationBarTitleText: '小类'
    }, _this.data = {
      smallclass: []
    }, _this.methods = {}, _this.components = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SmallClass, [{
    key: 'onLoad',
    value: function onLoad(option) {
      var _this2 = this;

      console.log(option);
      // console.log(option.params)
      wx.request({
        url: 'https://douyaer.applinzi.com/smallclass.php?broadHeading=' + option.params,
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
          _this2.smallclass = res.data;
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
    key: 'onReady',
    value: function onReady() {}
    // initPageData() {

    // }

  }]);

  return SmallClass;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(SmallClass , 'pages/focus/smallclass'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYWxsY2xhc3MuanMiXSwibmFtZXMiOlsiU21hbGxDbGFzcyIsIm1peGlucyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic21hbGxjbGFzcyIsIm1ldGhvZHMiLCJjb21wb25lbnRzIiwib3B0aW9uIiwiY29uc29sZSIsImxvZyIsInd4IiwicmVxdWVzdCIsInVybCIsInBhcmFtcyIsIm1ldGhvZCIsImhlYWRlciIsInN1Y2Nlc3MiLCJyZXMiLCIkYXBwbHkiLCJmYWlsIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxVOzs7Ozs7Ozs7Ozs7Ozs4TEFDbkJDLE0sR0FBUyxnQixRQUNUQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGtCQUFZO0FBRFAsSyxRQTBDUEMsTyxHQUFVLEUsUUFHVkMsVSxHQUFhLEU7Ozs7OzJCQXpDTkMsTSxFQUFRO0FBQUE7O0FBQ2JDLGNBQVFDLEdBQVIsQ0FBWUYsTUFBWjtBQUNBO0FBQ0FHLFNBQUdDLE9BQUgsQ0FBVztBQUNUQyxhQUFLLDhEQUE4REwsT0FBT00sTUFEakU7QUFFVDtBQUNBQyxnQkFBUSxLQUhDO0FBSVRDLGdCQUFRO0FBQ04sMEJBQWdCO0FBRFYsU0FKQztBQU9UQyxpQkFBUyxpQkFBQ0MsR0FBRCxFQUFTO0FBQ2hCVCxrQkFBUUMsR0FBUixDQUFZUSxJQUFJZCxJQUFoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBS0MsVUFBTCxHQUFrQmEsSUFBSWQsSUFBdEI7QUFDQSxpQkFBS2UsTUFBTDtBQUNBO0FBQ0E7QUFDRCxTQWxCUTtBQW1CVEMsY0FBTSxjQUFDRixHQUFELEVBQVM7QUFDYlQsa0JBQVFDLEdBQVIsQ0FBWSxjQUFaLEVBQTRCUSxHQUE1QjtBQUNEO0FBckJRLE9BQVg7QUF1QkQ7Ozs2QkFFUSxDQUVSOzs7OEJBQ1MsQ0FFVDtBQUNEOztBQUVBOzs7OztFQTdDc0MsZUFBS0csSTs7a0JBQXhCckIsVSIsImZpbGUiOiJzbWFsbGNsYXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgYmFzZSBmcm9tICcuLi8uLi9taXhpbnMvYmFzZSdcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU21hbGxDbGFzcyBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBtaXhpbnMgPSBbYmFzZV1cclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+Wwj+exuydcclxuICAgIH1cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIHNtYWxsY2xhc3M6IFsgXVxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZChvcHRpb24pIHtcclxuICAgICAgY29uc29sZS5sb2cob3B0aW9uKVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhvcHRpb24ucGFyYW1zKVxyXG4gICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICdodHRwczovL2RvdXlhZXIuYXBwbGluemkuY29tL3NtYWxsY2xhc3MucGhwP2Jyb2FkSGVhZGluZz0nICsgb3B0aW9uLnBhcmFtcyxcclxuICAgICAgICAvLyB1cmw6ICdodHRwczovL3d3dy52MmV4LmNvbS9hcGkvdG9waWNzL3Nob3cuanNvbj9pZD01MjAnLFxyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHR5cGVvZiAocmVzLmRhdGEpKVxyXG4gICAgICAgICAgLy8gdmFyIHNlcnZlcmRhdGEgPSByZXMuZGF0YVxyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coc2VydmVyZGF0YVswXS5zbWFsbE5hbWUpXHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0eXBlb2YgKHNlcnZlcmRhdGEpKVxyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzLmRhdGFbMV0pXHJcbiAgICAgICAgICB0aGlzLnNtYWxsY2xhc3MgPSByZXMuZGF0YVxyXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zbWFsbGNsYXNzKVxyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ3dlYmRhdGE6JywgdGhpcy53ZWJkYXRhKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbDogKHJlcykgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2RlbmdsdS5mYWlsOicsIHJlcylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25TaG93KCkge1xyXG5cclxuICAgIH1cclxuICAgIG9uUmVhZHkoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgLy8gaW5pdFBhZ2VEYXRhKCkge1xyXG5cclxuICAgIC8vIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudHMgPSB7XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=