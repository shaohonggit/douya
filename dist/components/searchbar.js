'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchBar = function (_wepy$component) {
  _inherits(SearchBar, _wepy$component);

  function SearchBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SearchBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      placeholder: {
        type: String,
        default: '搜索'
      }
    }, _this.data = {
      inputShowed: false,
      inputVal: ''
    }, _this.computed = {
      computedPlaceholder: function computedPlaceholder() {
        return this.inputVal || this.placeholder;
      }
    }, _this.methods = {
      showInput: function showInput(isShow) {
        this.inputShowed = isShow === 'true';
        this.$apply();
      },
      search: function search() {
        var params = {
          key_word: this.inputVal || this.placeholder
        };
        wx.navigateTo({
          url: '/pages/main/list?params=' + JSON.stringify(params)
        });
      },
      clearInput: function clearInput(cb) {
        var _this2 = this;

        setTimeout(function () {
          _this2.inputVal = '';
          _this2.$apply();
        });
      },
      inputTyping: function inputTyping(e) {
        this.inputVal = e.detail.value;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return SearchBar;
}(_wepy2.default.component);

exports.default = SearchBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaGJhci5qcyJdLCJuYW1lcyI6WyJTZWFyY2hCYXIiLCJwcm9wcyIsInBsYWNlaG9sZGVyIiwidHlwZSIsIlN0cmluZyIsImRlZmF1bHQiLCJkYXRhIiwiaW5wdXRTaG93ZWQiLCJpbnB1dFZhbCIsImNvbXB1dGVkIiwiY29tcHV0ZWRQbGFjZWhvbGRlciIsIm1ldGhvZHMiLCJzaG93SW5wdXQiLCJpc1Nob3ciLCIkYXBwbHkiLCJzZWFyY2giLCJwYXJhbXMiLCJrZXlfd29yZCIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsIkpTT04iLCJzdHJpbmdpZnkiLCJjbGVhcklucHV0IiwiY2IiLCJzZXRUaW1lb3V0IiwiaW5wdXRUeXBpbmciLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLEssR0FBUTtBQUNOQyxtQkFBYTtBQUNYQyxjQUFNQyxNQURLO0FBRVhDLGlCQUFTO0FBRkU7QUFEUCxLLFFBT1JDLEksR0FBTztBQUNMQyxtQkFBYSxLQURSO0FBRUxDLGdCQUFVO0FBRkwsSyxRQUtQQyxRLEdBQVc7QUFDVEMseUJBRFMsaUNBQ2E7QUFDcEIsZUFBTyxLQUFLRixRQUFMLElBQWlCLEtBQUtOLFdBQTdCO0FBQ0Q7QUFIUSxLLFFBTVhTLE8sR0FBVTtBQUNSQyxlQURRLHFCQUNHQyxNQURILEVBQ1c7QUFDakIsYUFBS04sV0FBTCxHQUFtQk0sV0FBVyxNQUE5QjtBQUNBLGFBQUtDLE1BQUw7QUFDRCxPQUpPO0FBS1JDLFlBTFEsb0JBS0U7QUFDUixZQUFNQyxTQUFTO0FBQ2JDLG9CQUFVLEtBQUtULFFBQUwsSUFBaUIsS0FBS047QUFEbkIsU0FBZjtBQUdBZ0IsV0FBR0MsVUFBSCxDQUFjO0FBQ1pDLDRDQUFnQ0MsS0FBS0MsU0FBTCxDQUFlTixNQUFmO0FBRHBCLFNBQWQ7QUFHRCxPQVpPO0FBYVJPLGdCQWJRLHNCQWFJQyxFQWJKLEVBYVE7QUFBQTs7QUFDZEMsbUJBQVcsWUFBTTtBQUNmLGlCQUFLakIsUUFBTCxHQUFnQixFQUFoQjtBQUNBLGlCQUFLTSxNQUFMO0FBQ0QsU0FIRDtBQUlELE9BbEJPO0FBbUJSWSxpQkFuQlEsdUJBbUJLQyxDQW5CTCxFQW1CUTtBQUNkLGFBQUtuQixRQUFMLEdBQWdCbUIsRUFBRUMsTUFBRixDQUFTQyxLQUF6QjtBQUNEO0FBckJPLEs7Ozs7RUFuQjJCLGVBQUtDLFM7O2tCQUF2QjlCLFMiLCJmaWxlIjoic2VhcmNoYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoQmFyIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gICAgcHJvcHMgPSB7XHJcbiAgICAgIHBsYWNlaG9sZGVyOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHQ6ICfmkJzntKInXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBpbnB1dFNob3dlZDogZmFsc2UsXHJcbiAgICAgIGlucHV0VmFsOiAnJ1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXB1dGVkID0ge1xyXG4gICAgICBjb21wdXRlZFBsYWNlaG9sZGVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0VmFsIHx8IHRoaXMucGxhY2Vob2xkZXJcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIHNob3dJbnB1dCAoaXNTaG93KSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dFNob3dlZCA9IGlzU2hvdyA9PT0gJ3RydWUnXHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICB9LFxyXG4gICAgICBzZWFyY2ggKCkge1xyXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcclxuICAgICAgICAgIGtleV93b3JkOiB0aGlzLmlucHV0VmFsIHx8IHRoaXMucGxhY2Vob2xkZXJcclxuICAgICAgICB9XHJcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1cmw6IGAvcGFnZXMvbWFpbi9saXN0P3BhcmFtcz0ke0pTT04uc3RyaW5naWZ5KHBhcmFtcyl9YFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGNsZWFySW5wdXQgKGNiKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmlucHV0VmFsID0gJydcclxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBpbnB1dFR5cGluZyAoZSkge1xyXG4gICAgICAgIHRoaXMuaW5wdXRWYWwgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=