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
      navigationBarTitleText: '事项'
    }, _this.data = {
      event: []
    }, _this.methods = {}, _this.components = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Event, [{
    key: 'onLoad',
    value: function onLoad(option) {
      var _this2 = this;

      console.log(option);
      wx.request({
        url: 'https://douyaer.applinzi.com/event.php?smallclassID=' + option.index,
        // url: 'https://www.v2ex.com/api/topics/show.json?id=520',
        method: 'GET',
        header: {
          'content-type': 'application/json'
        },
        success: function success(res) {
          console.log(res.data);
          _this2.event = res.data;
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


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Event , 'pages/focus/event'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LmpzIl0sIm5hbWVzIjpbIkV2ZW50IiwibWl4aW5zIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJldmVudCIsIm1ldGhvZHMiLCJjb21wb25lbnRzIiwib3B0aW9uIiwiY29uc29sZSIsImxvZyIsInd4IiwicmVxdWVzdCIsInVybCIsImluZGV4IiwibWV0aG9kIiwiaGVhZGVyIiwic3VjY2VzcyIsInJlcyIsIiRhcHBseSIsImZhaWwiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTLGdCLFFBQ1RDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsYUFBTztBQURGLEssUUFvQ1BDLE8sR0FBVSxFLFFBR1ZDLFUsR0FBYSxFOzs7OzsyQkFuQ05DLE0sRUFBUTtBQUFBOztBQUNiQyxjQUFRQyxHQUFSLENBQVlGLE1BQVo7QUFDQUcsU0FBR0MsT0FBSCxDQUFXO0FBQ1RDLGFBQUsseURBQXlETCxPQUFPTSxLQUQ1RDtBQUVUO0FBQ0FDLGdCQUFRLEtBSEM7QUFJVEMsZ0JBQVE7QUFDTiwwQkFBZ0I7QUFEVixTQUpDO0FBT1RDLGlCQUFTLGlCQUFDQyxHQUFELEVBQVM7QUFDaEJULGtCQUFRQyxHQUFSLENBQVlRLElBQUlkLElBQWhCO0FBQ0EsaUJBQUtDLEtBQUwsR0FBYWEsSUFBSWQsSUFBakI7QUFDQSxpQkFBS2UsTUFBTDtBQUNBO0FBQ0E7QUFDRCxTQWJRO0FBY1RDLGNBQU0sY0FBQ0YsR0FBRCxFQUFTO0FBQ2JULGtCQUFRQyxHQUFSLENBQVksY0FBWixFQUE0QlEsR0FBNUI7QUFDRDtBQWhCUSxPQUFYO0FBa0JEOzs7NkJBRVEsQ0FFUjs7OzhCQUNTLENBRVQ7QUFDRDs7QUFFQTs7Ozs7RUF2Q2lDLGVBQUtHLEk7O2tCQUFuQnJCLEsiLCJmaWxlIjoiZXZlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBiYXNlIGZyb20gJy4uLy4uL21peGlucy9iYXNlJ1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBtaXhpbnMgPSBbYmFzZV1cclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S6i+mhuSdcclxuICAgIH1cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIGV2ZW50OiBbIF1cclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQob3B0aW9uKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKG9wdGlvbilcclxuICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9kb3V5YWVyLmFwcGxpbnppLmNvbS9ldmVudC5waHA/c21hbGxjbGFzc0lEPScgKyBvcHRpb24uaW5kZXgsXHJcbiAgICAgICAgLy8gdXJsOiAnaHR0cHM6Ly93d3cudjJleC5jb20vYXBpL3RvcGljcy9zaG93Lmpzb24/aWQ9NTIwJyxcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXHJcbiAgICAgICAgICB0aGlzLmV2ZW50ID0gcmVzLmRhdGFcclxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc21hbGxjbGFzcylcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd3ZWJkYXRhOicsIHRoaXMud2ViZGF0YSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWw6IChyZXMpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdkZW5nbHUuZmFpbDonLCByZXMpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2hvdygpIHtcclxuXHJcbiAgICB9XHJcbiAgICBvblJlYWR5KCkge1xyXG5cclxuICAgIH1cclxuICAgIC8vIGluaXRQYWdlRGF0YSgpIHtcclxuXHJcbiAgICAvLyB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRzID0ge1xyXG4gICAgfVxyXG4gIH1cclxuIl19