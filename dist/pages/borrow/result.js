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

var borrowResult = function (_wepy$page) {
  _inherits(borrowResult, _wepy$page);

  function borrowResult() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, borrowResult);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = borrowResult.__proto__ || Object.getPrototypeOf(borrowResult)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default], _this.config = {
      navigationBarTitleText: '提示',
      enablePullDownRefresh: false
    }, _this.data = {
      // type: 0成功, 失败 > 0
      type: 0,
      message: '',

      // 错误提示的文案
      buttonText: '重新借阅'
    }, _this.methods = {
      jump: function jump() {
        wx.redirectTo({ url: '/pages/user/borrow' });
      },
      back: function back() {
        wx.navigateBack({ delta: 1 });
      }
    }, _this.components = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(borrowResult, [{
    key: 'onLoad',
    value: function onLoad(query) {
      var type = query && +query.type;
      var message = query && query.message;
      this.type = this.getNumber(type);
      this.message = message || '发生了一些异常，再试一次！';
    }
  }]);

  return borrowResult;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(borrowResult , 'pages/borrow/result'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3VsdC5qcyJdLCJuYW1lcyI6WyJib3Jyb3dSZXN1bHQiLCJtaXhpbnMiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiZGF0YSIsInR5cGUiLCJtZXNzYWdlIiwiYnV0dG9uVGV4dCIsIm1ldGhvZHMiLCJqdW1wIiwid3giLCJyZWRpcmVjdFRvIiwidXJsIiwiYmFjayIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwiY29tcG9uZW50cyIsInF1ZXJ5IiwiZ2V0TnVtYmVyIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxZOzs7Ozs7Ozs7Ozs7OztrTUFDbkJDLE0sR0FBUyxnQixRQUNUQyxNLEdBQVM7QUFDUEMsOEJBQXdCLElBRGpCO0FBRVBDLDZCQUF1QjtBQUZoQixLLFFBSVRDLEksR0FBTztBQUNMO0FBQ0FDLFlBQU0sQ0FGRDtBQUdMQyxlQUFTLEVBSEo7O0FBS0w7QUFDQUMsa0JBQVk7QUFOUCxLLFFBZ0JQQyxPLEdBQVU7QUFDUkMsVUFEUSxrQkFDRDtBQUNMQyxXQUFHQyxVQUFILENBQWMsRUFBQ0MsS0FBSyxvQkFBTixFQUFkO0FBQ0QsT0FITztBQUlSQyxVQUpRLGtCQUlEO0FBQ0xILFdBQUdJLFlBQUgsQ0FBZ0IsRUFBQ0MsT0FBTyxDQUFSLEVBQWhCO0FBQ0Q7QUFOTyxLLFFBU1ZDLFUsR0FBYSxFOzs7OzsyQkFoQk5DLEssRUFBTztBQUNaLFVBQU1aLE9BQU9ZLFNBQVMsQ0FBQ0EsTUFBTVosSUFBN0I7QUFDQSxVQUFNQyxVQUFVVyxTQUFTQSxNQUFNWCxPQUEvQjtBQUNBLFdBQUtELElBQUwsR0FBWSxLQUFLYSxTQUFMLENBQWViLElBQWYsQ0FBWjtBQUNBLFdBQUtDLE9BQUwsR0FBZUEsV0FBVyxlQUExQjtBQUNEOzs7O0VBcEJ1QyxlQUFLYSxJOztrQkFBMUJwQixZIiwiZmlsZSI6InJlc3VsdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IGJhc2UgZnJvbSAnLi4vLi4vbWl4aW5zL2Jhc2UnXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGJvcnJvd1Jlc3VsdCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBtaXhpbnMgPSBbYmFzZV1cclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aPkOekuicsXHJcbiAgICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogZmFsc2VcclxuICAgIH1cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIC8vIHR5cGU6IDDmiJDlip8sIOWksei0pSA+IDBcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgbWVzc2FnZTogJycsXHJcblxyXG4gICAgICAvLyDplJnor6/mj5DnpLrnmoTmlofmoYhcclxuICAgICAgYnV0dG9uVGV4dDogJ+mHjeaWsOWAn+mYhSdcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQocXVlcnkpIHtcclxuICAgICAgY29uc3QgdHlwZSA9IHF1ZXJ5ICYmICtxdWVyeS50eXBlXHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBxdWVyeSAmJiBxdWVyeS5tZXNzYWdlXHJcbiAgICAgIHRoaXMudHlwZSA9IHRoaXMuZ2V0TnVtYmVyKHR5cGUpXHJcbiAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2UgfHwgJ+WPkeeUn+S6huS4gOS6m+W8guW4uO+8jOWGjeivleS4gOasoe+8gSdcclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBqdW1wKCkge1xyXG4gICAgICAgIHd4LnJlZGlyZWN0VG8oe3VybDogJy9wYWdlcy91c2VyL2JvcnJvdyd9KVxyXG4gICAgICB9LFxyXG4gICAgICBiYWNrKCkge1xyXG4gICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7ZGVsdGE6IDF9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50cyA9IHtcclxuICAgIH1cclxuICB9XHJcbiJdfQ==