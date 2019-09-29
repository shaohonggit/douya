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

var Detail = function (_wepy$page) {
  _inherits(Detail, _wepy$page);

  function Detail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Detail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Detail.__proto__ || Object.getPrototypeOf(Detail)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default], _this.config = {
      navigationBarTitleText: '事项内容'
    }, _this.data = {
      detail: []
      // hasFocused: ''  // 用来判断btn是关注还是取消关注
      // statusJudgement: false   // 中间变量,通过取反使btn在两种状态之间转换
    }, _this.methods = {}, _this.components = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Detail, [{
    key: 'addRecords',
    value: function addRecords(detail) {
      wx.navigateTo({
        url: '/pages/focus/addrecords?broadHeading=' + this.detail.broadHeading
      });
      // console.log(option)
      // console.log(this.detail)
      // console.log(this.$parent.globalData.student)
    }
  }, {
    key: 'onLoad',
    value: function onLoad(option) {
      var _this2 = this;

      console.log('这是事项的index', option);
      // console.log(option.index)
      wx.request({
        url: 'https://douyaer.applinzi.com/detail.php?eventID=' + option.index,
        data: {
          number: this.$parent.globalData.student.number
        },
        // url: 'https://www.v2ex.com/api/topics/show.json?id=520',
        method: 'GET',
        header: {
          'content-type': 'application/json'
        },
        success: function success(res) {
          console.log(res.data);
          _this2.detail = res.data[0];
          _this2.hasFocused = res.data[1]; // 服务端在focuslist里查询某事项,获取查询结果
          _this2.$apply();
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

  return Detail;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Detail , 'pages/focus/detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qcyJdLCJuYW1lcyI6WyJEZXRhaWwiLCJtaXhpbnMiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImRldGFpbCIsIm1ldGhvZHMiLCJjb21wb25lbnRzIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwiYnJvYWRIZWFkaW5nIiwib3B0aW9uIiwiY29uc29sZSIsImxvZyIsInJlcXVlc3QiLCJpbmRleCIsIm51bWJlciIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwic3R1ZGVudCIsIm1ldGhvZCIsImhlYWRlciIsInN1Y2Nlc3MiLCJyZXMiLCJoYXNGb2N1c2VkIiwiJGFwcGx5IiwiZmFpbCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxNLEdBQVMsZ0IsUUFDVEMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxjQUFRO0FBQ1I7QUFDQTtBQUhLLEssUUFnRFBDLE8sR0FBVSxFLFFBR1ZDLFUsR0FBYSxFOzs7OzsrQkE3Q0ZGLE0sRUFBUTtBQUNqQkcsU0FBR0MsVUFBSCxDQUFjO0FBQ1pDLGFBQUssMENBQTBDLEtBQUtMLE1BQUwsQ0FBWU07QUFEL0MsT0FBZDtBQUdBO0FBQ0E7QUFDQTtBQUNEOzs7MkJBQ01DLE0sRUFBUTtBQUFBOztBQUNiQyxjQUFRQyxHQUFSLENBQVksWUFBWixFQUEwQkYsTUFBMUI7QUFDQTtBQUNBSixTQUFHTyxPQUFILENBQVc7QUFDVEwsYUFBSyxxREFBcURFLE9BQU9JLEtBRHhEO0FBRVRaLGNBQU07QUFDSmEsa0JBQVEsS0FBS0MsT0FBTCxDQUFhQyxVQUFiLENBQXdCQyxPQUF4QixDQUFnQ0g7QUFEcEMsU0FGRztBQUtUO0FBQ0FJLGdCQUFRLEtBTkM7QUFPVEMsZ0JBQVE7QUFDTiwwQkFBZ0I7QUFEVixTQVBDO0FBVVRDLGlCQUFTLGlCQUFDQyxHQUFELEVBQVM7QUFDaEJYLGtCQUFRQyxHQUFSLENBQVlVLElBQUlwQixJQUFoQjtBQUNBLGlCQUFLQyxNQUFMLEdBQWNtQixJQUFJcEIsSUFBSixDQUFTLENBQVQsQ0FBZDtBQUNBLGlCQUFLcUIsVUFBTCxHQUFrQkQsSUFBSXBCLElBQUosQ0FBUyxDQUFULENBQWxCLENBSGdCLENBR2lCO0FBQ2pDLGlCQUFLc0IsTUFBTDtBQUNELFNBZlE7QUFnQlRDLGNBQU0sY0FBQ0gsR0FBRCxFQUFTO0FBQ2JYLGtCQUFRQyxHQUFSLENBQVksY0FBWixFQUE0QlUsR0FBNUI7QUFDRDtBQWxCUSxPQUFYO0FBb0JEOzs7NkJBRVEsQ0FFUjs7OzhCQUNTLENBQ1Q7QUFDRDs7QUFFQTs7Ozs7RUFuRGtDLGVBQUtJLEk7O2tCQUFwQjVCLE0iLCJmaWxlIjoiZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgYmFzZSBmcm9tICcuLi8uLi9taXhpbnMvYmFzZSdcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGV0YWlsIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIG1peGlucyA9IFtiYXNlXVxyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5LqL6aG55YaF5a65J1xyXG4gICAgfVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgZGV0YWlsOiBbIF1cclxuICAgICAgLy8gaGFzRm9jdXNlZDogJycgIC8vIOeUqOadpeWIpOaWrWJ0buaYr+WFs+azqOi/mOaYr+WPlua2iOWFs+azqFxyXG4gICAgICAvLyBzdGF0dXNKdWRnZW1lbnQ6IGZhbHNlICAgLy8g5Lit6Ze05Y+Y6YePLOmAmui/h+WPluWPjeS9v2J0buWcqOS4pOenjeeKtuaAgeS5i+mXtOi9rOaNolxyXG4gICAgfVxyXG5cclxuICAgIGFkZFJlY29yZHMoZGV0YWlsKSB7XHJcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogJy9wYWdlcy9mb2N1cy9hZGRyZWNvcmRzP2Jyb2FkSGVhZGluZz0nICsgdGhpcy5kZXRhaWwuYnJvYWRIZWFkaW5nXHJcbiAgICAgIH0pXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKG9wdGlvbilcclxuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5kZXRhaWwpXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnN0dWRlbnQpXHJcbiAgICB9XHJcbiAgICBvbkxvYWQob3B0aW9uKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfov5nmmK/kuovpobnnmoRpbmRleCcsIG9wdGlvbilcclxuICAgICAgLy8gY29uc29sZS5sb2cob3B0aW9uLmluZGV4KVxyXG4gICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICdodHRwczovL2RvdXlhZXIuYXBwbGluemkuY29tL2RldGFpbC5waHA/ZXZlbnRJRD0nICsgb3B0aW9uLmluZGV4LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIG51bWJlcjogdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuc3R1ZGVudC5udW1iZXJcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIHVybDogJ2h0dHBzOi8vd3d3LnYyZXguY29tL2FwaS90b3BpY3Mvc2hvdy5qc29uP2lkPTUyMCcsXHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKVxyXG4gICAgICAgICAgdGhpcy5kZXRhaWwgPSByZXMuZGF0YVswXVxyXG4gICAgICAgICAgdGhpcy5oYXNGb2N1c2VkID0gcmVzLmRhdGFbMV0gICAgLy8g5pyN5Yqh56uv5ZyoZm9jdXNsaXN06YeM5p+l6K+i5p+Q5LqL6aG5LOiOt+WPluafpeivoue7k+aenFxyXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbDogKHJlcykgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2RlbmdsdS5mYWlsOicsIHJlcylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25TaG93KCkge1xyXG5cclxuICAgIH1cclxuICAgIG9uUmVhZHkoKSB7XHJcbiAgICB9XHJcbiAgICAvLyBpbml0UGFnZURhdGEoKSB7XHJcblxyXG4gICAgLy8gfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50cyA9IHtcclxuICAgIH1cclxuICB9XHJcbiJdfQ==