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

var Card = function (_wepy$component) {
  _inherits(Card, _wepy$component);

  function Card() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Card);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Card.__proto__ || Object.getPrototypeOf(Card)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default], _this.props = {
      title: String,
      content: String,
      grade: String,
      words: Number,
      reviews: Number,
      thumbnail: String
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Card;
}(_wepy2.default.component);

exports.default = Card;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuanMiXSwibmFtZXMiOlsiQ2FyZCIsIm1peGlucyIsInByb3BzIiwidGl0bGUiLCJTdHJpbmciLCJjb250ZW50IiwiZ3JhZGUiLCJ3b3JkcyIsIk51bWJlciIsInJldmlld3MiLCJ0aHVtYm5haWwiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTLGdCLFFBQ1RDLEssR0FBUTtBQUNOQyxhQUFPQyxNQUREO0FBRU5DLGVBQVNELE1BRkg7QUFHTkUsYUFBT0YsTUFIRDtBQUlORyxhQUFPQyxNQUpEO0FBS05DLGVBQVNELE1BTEg7QUFNTkUsaUJBQVdOO0FBTkwsSzs7OztFQUZ3QixlQUFLTyxTOztrQkFBbEJYLEkiLCJmaWxlIjoiY2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IGJhc2UgZnJvbSAnLi4vbWl4aW5zL2Jhc2UuanMnXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgICBtaXhpbnMgPSBbYmFzZV1cclxuICAgIHByb3BzID0ge1xyXG4gICAgICB0aXRsZTogU3RyaW5nLFxyXG4gICAgICBjb250ZW50OiBTdHJpbmcsXHJcbiAgICAgIGdyYWRlOiBTdHJpbmcsXHJcbiAgICAgIHdvcmRzOiBOdW1iZXIsXHJcbiAgICAgIHJldmlld3M6IE51bWJlcixcclxuICAgICAgdGh1bWJuYWlsOiBTdHJpbmdcclxuICAgIH1cclxuICB9XHJcbiJdfQ==