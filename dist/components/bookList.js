'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../config.js');

var _http = require('./../mixins/http.js');

var _http2 = _interopRequireDefault(_http);

var _base = require('./../mixins/base.js');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BookList = function (_wepy$component) {
  _inherits(BookList, _wepy$component);

  function BookList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BookList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BookList.__proto__ || Object.getPrototypeOf(BookList)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default, _http2.default], _this.props = {
      list: {
        type: Object,
        default: []
      },
      title: {
        type: String,
        default: null
      },
      loading: {
        type: Boolean,
        default: false
      },
      noMore: {
        type: Boolean,
        default: false
      },
      /**
       * [type 列表类型：常规列表/收藏列表]
       * @type {list/collect}
       */
      type: {
        type: String,
        default: 'list'
      }
    }, _this.data = {
      icon_eye: '/images/icon/icon-eye@2x.png',
      icon_eye_active: '/images/icon/icon-eye-active@2x.png',
      icon_star: '/images/icon/icon-star@2x.png',
      icon_star_active: '/images/icon/icon-star-active@2x.png'
    }, _this.computed = {
      isCollectList: function isCollectList() {
        return this.type === 'collect';
      }
    }, _this.methods = {
      toStar: function toStar(book, index) {
        var _this2 = this;

        // 将要发生的收藏动作
        var isCollect = Boolean(book && +book.collected);
        var newType = isCollect ? 0 : 1;
        var newTypeText = newType ? '添加' : '取消';
        // 收藏本书
        this.$post({
          url: _config.service.collect,
          data: {
            book_ids: [book.id],
            type: newType
          }
        }, {
          success: function success(_ref2) {
            var code = _ref2.code,
                data = _ref2.data;

            // 重置本书收藏状态
            if (_this2.isObject(_this2.list[index])) {
              _this2.list[index].collected = newType;
            }
            wx.showToast({
              title: newTypeText + '\u6536\u85CF\uFF01',
              icon: 'success',
              duration: 1000
            });
          },
          fail: function fail(_ref3) {
            var code = _ref3.code,
                data = _ref3.data;

            // =============================== 调试代码 ===============================
            // this.book.collected = newType
            // =============================== 调试代码 ===============================
            wx.showToast({
              title: newTypeText + '\u6536\u85CF\u5931\u8D25\uFF01',
              icon: 'loading',
              image: '/images/icon/icon-cancel.png',
              duration: 1000
            });
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return BookList;
}(_wepy2.default.component);

exports.default = BookList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tMaXN0LmpzIl0sIm5hbWVzIjpbIkJvb2tMaXN0IiwibWl4aW5zIiwicHJvcHMiLCJsaXN0IiwidHlwZSIsIk9iamVjdCIsImRlZmF1bHQiLCJ0aXRsZSIsIlN0cmluZyIsImxvYWRpbmciLCJCb29sZWFuIiwibm9Nb3JlIiwiZGF0YSIsImljb25fZXllIiwiaWNvbl9leWVfYWN0aXZlIiwiaWNvbl9zdGFyIiwiaWNvbl9zdGFyX2FjdGl2ZSIsImNvbXB1dGVkIiwiaXNDb2xsZWN0TGlzdCIsIm1ldGhvZHMiLCJ0b1N0YXIiLCJib29rIiwiaW5kZXgiLCJpc0NvbGxlY3QiLCJjb2xsZWN0ZWQiLCJuZXdUeXBlIiwibmV3VHlwZVRleHQiLCIkcG9zdCIsInVybCIsImNvbGxlY3QiLCJib29rX2lkcyIsImlkIiwic3VjY2VzcyIsImNvZGUiLCJpc09iamVjdCIsInd4Iiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwiZmFpbCIsImltYWdlIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUNuQkMsTSxHQUFTLGdDLFFBQ1RDLEssR0FBUTtBQUNOQyxZQUFNO0FBQ0pDLGNBQU1DLE1BREY7QUFFSkMsaUJBQVM7QUFGTCxPQURBO0FBS05DLGFBQU87QUFDTEgsY0FBTUksTUFERDtBQUVMRixpQkFBUztBQUZKLE9BTEQ7QUFTTkcsZUFBUztBQUNQTCxjQUFNTSxPQURDO0FBRVBKLGlCQUFTO0FBRkYsT0FUSDtBQWFOSyxjQUFRO0FBQ05QLGNBQU1NLE9BREE7QUFFTkosaUJBQVM7QUFGSCxPQWJGO0FBaUJOOzs7O0FBSUFGLFlBQU07QUFDSkEsY0FBTUksTUFERjtBQUVKRixpQkFBUztBQUZMO0FBckJBLEssUUEyQlJNLEksR0FBTztBQUNMQyxnQkFBVSw4QkFETDtBQUVMQyx1QkFBaUIscUNBRlo7QUFHTEMsaUJBQVcsK0JBSE47QUFJTEMsd0JBQWtCO0FBSmIsSyxRQU9QQyxRLEdBQVc7QUFDVEMsbUJBRFMsMkJBQ087QUFDZCxlQUFPLEtBQUtkLElBQUwsS0FBYyxTQUFyQjtBQUNEO0FBSFEsSyxRQU1YZSxPLEdBQVU7QUFDUkMsWUFEUSxrQkFDREMsSUFEQyxFQUNLQyxLQURMLEVBQ1k7QUFBQTs7QUFDbEI7QUFDQSxZQUFNQyxZQUFZYixRQUFRVyxRQUFRLENBQUNBLEtBQUtHLFNBQXRCLENBQWxCO0FBQ0EsWUFBTUMsVUFBVUYsWUFBWSxDQUFaLEdBQWdCLENBQWhDO0FBQ0EsWUFBTUcsY0FBY0QsVUFBVSxJQUFWLEdBQWlCLElBQXJDO0FBQ0E7QUFDQSxhQUFLRSxLQUFMLENBQVc7QUFDVEMsZUFBSyxnQkFBUUMsT0FESjtBQUVUakIsZ0JBQU07QUFDSmtCLHNCQUFVLENBQUNULEtBQUtVLEVBQU4sQ0FETjtBQUVKM0Isa0JBQU1xQjtBQUZGO0FBRkcsU0FBWCxFQU1HO0FBQ0RPLG1CQUFTLHdCQUFrQjtBQUFBLGdCQUFoQkMsSUFBZ0IsU0FBaEJBLElBQWdCO0FBQUEsZ0JBQVZyQixJQUFVLFNBQVZBLElBQVU7O0FBQ3pCO0FBQ0EsZ0JBQUksT0FBS3NCLFFBQUwsQ0FBYyxPQUFLL0IsSUFBTCxDQUFVbUIsS0FBVixDQUFkLENBQUosRUFBcUM7QUFDbkMscUJBQUtuQixJQUFMLENBQVVtQixLQUFWLEVBQWlCRSxTQUFqQixHQUE2QkMsT0FBN0I7QUFDRDtBQUNEVSxlQUFHQyxTQUFILENBQWE7QUFDWDdCLHFCQUFVbUIsV0FBVix1QkFEVztBQUVYVyxvQkFBTSxTQUZLO0FBR1hDLHdCQUFVO0FBSEMsYUFBYjtBQUtELFdBWEE7QUFZREMsZ0JBQU0scUJBQWtCO0FBQUEsZ0JBQWhCTixJQUFnQixTQUFoQkEsSUFBZ0I7QUFBQSxnQkFBVnJCLElBQVUsU0FBVkEsSUFBVTs7QUFDdEI7QUFDQTtBQUNBO0FBQ0F1QixlQUFHQyxTQUFILENBQWE7QUFDWDdCLHFCQUFVbUIsV0FBVixtQ0FEVztBQUVYVyxvQkFBTSxTQUZLO0FBR1hHLHFCQUFPLDhCQUhJO0FBSVhGLHdCQUFVO0FBSkMsYUFBYjtBQU1EO0FBdEJBLFNBTkg7QUE4QkQ7QUFyQ08sSzs7OztFQTFDMEIsZUFBS0csUzs7a0JBQXRCekMsUSIsImZpbGUiOiJib29rTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IHsgc2VydmljZSB9IGZyb20gJy4uL2NvbmZpZy5qcydcclxuICBpbXBvcnQgaHR0cCBmcm9tICcuLi9taXhpbnMvaHR0cCdcclxuICBpbXBvcnQgYmFzZSBmcm9tICcuLi9taXhpbnMvYmFzZSdcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9va0xpc3QgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgICBtaXhpbnMgPSBbYmFzZSwgaHR0cF1cclxuICAgIHByb3BzID0ge1xyXG4gICAgICBsaXN0OiB7XHJcbiAgICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICAgIGRlZmF1bHQ6IFtdXHJcbiAgICAgIH0sXHJcbiAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHQ6IG51bGxcclxuICAgICAgfSxcclxuICAgICAgbG9hZGluZzoge1xyXG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcclxuICAgICAgfSxcclxuICAgICAgbm9Nb3JlOiB7XHJcbiAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICBkZWZhdWx0OiBmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgICAvKipcclxuICAgICAgICogW3R5cGUg5YiX6KGo57G75Z6L77ya5bi46KeE5YiX6KGoL+aUtuiXj+WIl+ihqF1cclxuICAgICAgICogQHR5cGUge2xpc3QvY29sbGVjdH1cclxuICAgICAgICovXHJcbiAgICAgIHR5cGU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgZGVmYXVsdDogJ2xpc3QnXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBpY29uX2V5ZTogJy9pbWFnZXMvaWNvbi9pY29uLWV5ZUAyeC5wbmcnLFxyXG4gICAgICBpY29uX2V5ZV9hY3RpdmU6ICcvaW1hZ2VzL2ljb24vaWNvbi1leWUtYWN0aXZlQDJ4LnBuZycsXHJcbiAgICAgIGljb25fc3RhcjogJy9pbWFnZXMvaWNvbi9pY29uLXN0YXJAMngucG5nJyxcclxuICAgICAgaWNvbl9zdGFyX2FjdGl2ZTogJy9pbWFnZXMvaWNvbi9pY29uLXN0YXItYWN0aXZlQDJ4LnBuZydcclxuICAgIH1cclxuXHJcbiAgICBjb21wdXRlZCA9IHtcclxuICAgICAgaXNDb2xsZWN0TGlzdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSAnY29sbGVjdCdcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIHRvU3Rhcihib29rLCBpbmRleCkge1xyXG4gICAgICAgIC8vIOWwhuimgeWPkeeUn+eahOaUtuiXj+WKqOS9nFxyXG4gICAgICAgIGNvbnN0IGlzQ29sbGVjdCA9IEJvb2xlYW4oYm9vayAmJiArYm9vay5jb2xsZWN0ZWQpXHJcbiAgICAgICAgY29uc3QgbmV3VHlwZSA9IGlzQ29sbGVjdCA/IDAgOiAxXHJcbiAgICAgICAgY29uc3QgbmV3VHlwZVRleHQgPSBuZXdUeXBlID8gJ+a3u+WKoCcgOiAn5Y+W5raIJ1xyXG4gICAgICAgIC8vIOaUtuiXj+acrOS5plxyXG4gICAgICAgIHRoaXMuJHBvc3Qoe1xyXG4gICAgICAgICAgdXJsOiBzZXJ2aWNlLmNvbGxlY3QsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGJvb2tfaWRzOiBbYm9vay5pZF0sXHJcbiAgICAgICAgICAgIHR5cGU6IG5ld1R5cGVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICBzdWNjZXNzOiAoe2NvZGUsIGRhdGF9KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIOmHjee9ruacrOS5puaUtuiXj+eKtuaAgVxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc09iamVjdCh0aGlzLmxpc3RbaW5kZXhdKSkge1xyXG4gICAgICAgICAgICAgIHRoaXMubGlzdFtpbmRleF0uY29sbGVjdGVkID0gbmV3VHlwZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6IGAke25ld1R5cGVUZXh0feaUtuiXj++8gWAsXHJcbiAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbDogKHtjb2RlLCBkYXRhfSkgPT4ge1xyXG4gICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IOiwg+ivleS7o+eggSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgIC8vIHRoaXMuYm9vay5jb2xsZWN0ZWQgPSBuZXdUeXBlXHJcbiAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0g6LCD6K+V5Luj56CBID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICB0aXRsZTogYCR7bmV3VHlwZVRleHR95pS26JeP5aSx6LSl77yBYCxcclxuICAgICAgICAgICAgICBpY29uOiAnbG9hZGluZycsXHJcbiAgICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2ljb24vaWNvbi1jYW5jZWwucG5nJyxcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwMFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiJdfQ==