'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _base = require('./../mixins/base.js');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Screen = function (_wepy$component) {
  _inherits(Screen, _wepy$component);

  function Screen() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Screen);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Screen.__proto__ || Object.getPrototypeOf(Screen)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default], _this.props = {
      position: {
        type: String,
        default: 'bottom'
      }
    }, _this.computed = {
      style_position: function style_position() {
        return ['bottom', 'top'].indexOf(this.position) > -1 ? this.position : 'bottom';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Screen;
}(_wepy2.default.component);

exports.default = Screen;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmVlbi5qcyJdLCJuYW1lcyI6WyJTY3JlZW4iLCJtaXhpbnMiLCJwcm9wcyIsInBvc2l0aW9uIiwidHlwZSIsIlN0cmluZyIsImRlZmF1bHQiLCJjb21wdXRlZCIsInN0eWxlX3Bvc2l0aW9uIiwiaW5kZXhPZiIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxNLEdBQVMsZ0IsUUFDVEMsSyxHQUFRO0FBQ05DLGdCQUFVO0FBQ1JDLGNBQU1DLE1BREU7QUFFUkMsaUJBQVM7QUFGRDtBQURKLEssUUFPUkMsUSxHQUFXO0FBQ1RDLG9CQURTLDRCQUNRO0FBQ2YsZUFBTyxDQUFDLFFBQUQsRUFBVyxLQUFYLEVBQWtCQyxPQUFsQixDQUEwQixLQUFLTixRQUEvQixJQUEyQyxDQUFDLENBQTVDLEdBQWdELEtBQUtBLFFBQXJELEdBQWdFLFFBQXZFO0FBQ0Q7QUFIUSxLOzs7O0VBVHVCLGVBQUtPLFM7O2tCQUFwQlYsTSIsImZpbGUiOiJzY3JlZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBiYXNlIGZyb20gJy4uL21peGlucy9iYXNlLmpzJ1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JlZW4gZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgICBtaXhpbnMgPSBbYmFzZV1cclxuICAgIHByb3BzID0ge1xyXG4gICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICBkZWZhdWx0OiAnYm90dG9tJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcHV0ZWQgPSB7XHJcbiAgICAgIHN0eWxlX3Bvc2l0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBbJ2JvdHRvbScsICd0b3AnXS5pbmRleE9mKHRoaXMucG9zaXRpb24pID4gLTEgPyB0aGlzLnBvc2l0aW9uIDogJ2JvdHRvbSdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuIl19