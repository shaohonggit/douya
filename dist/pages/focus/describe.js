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

var Event = function (_wepy$page) {
  _inherits(Event, _wepy$page);

  function Event() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Event);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Event.__proto__ || Object.getPrototypeOf(Event)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default], _this.config = {
      navigationBarTitleText: '成果列表'
    }, _this.data = {
      describe: []
    }, _this.methods = {}, _this.components = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Event, [{
    key: 'onLoad',
    value: function onLoad(option) {
      var _this2 = this;

      console.log(option);
      wx.request({
        url: 'https://douyaer.applinzi.com/describe.php?number=' + option.index,
        // url: 'https://www.v2ex.com/api/topics/show.json?id=520',
        method: 'GET',
        header: {
          'content-type': 'application/json'
        },
        success: function success(res) {
          console.log(res.data);
          _this2.describe = res.data;
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

  return Event;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Event , 'pages/focus/describe'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2NyaWJlLmpzIl0sIm5hbWVzIjpbIkV2ZW50IiwibWl4aW5zIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJkZXNjcmliZSIsIm1ldGhvZHMiLCJjb21wb25lbnRzIiwib3B0aW9uIiwiY29uc29sZSIsImxvZyIsInd4IiwicmVxdWVzdCIsInVybCIsImluZGV4IiwibWV0aG9kIiwiaGVhZGVyIiwic3VjY2VzcyIsInJlcyIsIiRhcHBseSIsImZhaWwiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTLGdCLFFBQ1RDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsZ0JBQVU7QUFETCxLLFFBb0NQQyxPLEdBQVUsRSxRQUdWQyxVLEdBQWEsRTs7Ozs7MkJBbkNOQyxNLEVBQVE7QUFBQTs7QUFDYkMsY0FBUUMsR0FBUixDQUFZRixNQUFaO0FBQ0FHLFNBQUdDLE9BQUgsQ0FBVztBQUNUQyxhQUFLLHNEQUFzREwsT0FBT00sS0FEekQ7QUFFVDtBQUNBQyxnQkFBUSxLQUhDO0FBSVRDLGdCQUFRO0FBQ04sMEJBQWdCO0FBRFYsU0FKQztBQU9UQyxpQkFBUyxpQkFBQ0MsR0FBRCxFQUFTO0FBQ2hCVCxrQkFBUUMsR0FBUixDQUFZUSxJQUFJZCxJQUFoQjtBQUNBLGlCQUFLQyxRQUFMLEdBQWdCYSxJQUFJZCxJQUFwQjtBQUNBLGlCQUFLZSxNQUFMO0FBQ0E7QUFDQTtBQUNELFNBYlE7QUFjVEMsY0FBTSxjQUFDRixHQUFELEVBQVM7QUFDYlQsa0JBQVFDLEdBQVIsQ0FBWSxjQUFaLEVBQTRCUSxHQUE1QjtBQUNEO0FBaEJRLE9BQVg7QUFrQkQ7Ozs2QkFFUSxDQUVSOzs7OEJBQ1MsQ0FFVDtBQUNEOztBQUVBOzs7OztFQXZDaUMsZUFBS0csSTs7a0JBQW5CckIsSyIsImZpbGUiOiJkZXNjcmliZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IGJhc2UgZnJvbSAnLi4vLi4vbWl4aW5zL2Jhc2UnXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIG1peGlucyA9IFtiYXNlXVxyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiQ5p6c5YiX6KGoJ1xyXG4gICAgfVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgZGVzY3JpYmU6IFsgXVxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZChvcHRpb24pIHtcclxuICAgICAgY29uc29sZS5sb2cob3B0aW9uKVxyXG4gICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICdodHRwczovL2RvdXlhZXIuYXBwbGluemkuY29tL2Rlc2NyaWJlLnBocD9udW1iZXI9JyArIG9wdGlvbi5pbmRleCxcclxuICAgICAgICAvLyB1cmw6ICdodHRwczovL3d3dy52MmV4LmNvbS9hcGkvdG9waWNzL3Nob3cuanNvbj9pZD01MjAnLFxyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcclxuICAgICAgICAgIHRoaXMuZGVzY3JpYmUgPSByZXMuZGF0YVxyXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zbWFsbGNsYXNzKVxyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ3dlYmRhdGE6JywgdGhpcy53ZWJkYXRhKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbDogKHJlcykgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2RlbmdsdS5mYWlsOicsIHJlcylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25TaG93KCkge1xyXG5cclxuICAgIH1cclxuICAgIG9uUmVhZHkoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgLy8gaW5pdFBhZ2VEYXRhKCkge1xyXG5cclxuICAgIC8vIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudHMgPSB7XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=