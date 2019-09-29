'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _http = require('./../mixins/http.js');

var _http2 = _interopRequireDefault(_http);

var _base = require('./../mixins/base.js');

var _base2 = _interopRequireDefault(_base);

var _user = require('./../mixins/user.js');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { service } from '../config.js'


var pageUser = function (_wepy$page) {
  _inherits(pageUser, _wepy$page);

  function pageUser() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, pageUser);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = pageUser.__proto__ || Object.getPrototypeOf(pageUser)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default, _http2.default, _user2.default], _this.config = {
      navigationBarTitleText: '豆芽儿',
      enablePullDownRefresh: false
    }, _this.data = {
      moralScore: [],
      mentalScore: [],
      mateNumber: [],
      username: [],
      usernumber: [],
      class: []
    }, _this.computed = {}, _this.methods = {
      moralInput: function moralInput(e) {
        this.moralScore = e.detail.value;
      },
      mentalInput: function mentalInput(e) {
        this.mentalScore = e.detail.value;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(pageUser, [{
    key: 'onLoad',
    value: function onLoad(option) {
      console.log('option:', option.lable);
      this.mateNumber = option.lable;
      console.log('matenumber', this.mateNumber);
      this.username = this.$parent.globalData.student.username;
      this.usernumber = this.$parent.globalData.student.number;
      this.class = this.$parent.globalData.student.class;
      console.log('username', this.username);
      // this.recordHeading = option.broadHeading
      // this.reEventID = option.eventID
      // this.reEventName = option.eventName
    }
  }, {
    key: 'addScore',
    value: function addScore(option) {
      var _this2 = this;

      // console.log(option.params)
      wx.request({
        url: 'http://localhost/douyalocal2019.4.9/evaluatePage.php?',
        // url: 'https://www.v2ex.com/api/topics/show.json?id=520',
        data: {
          matenum: this.mateNumber,
          usname: this.$parent.globalData.student.username,
          usnumber: this.$parent.globalData.student.number,
          usclass: this.$parent.globalData.student.class,
          moral: this.moralScore,
          mental: this.mentalScore
        },
        method: 'GET',
        header: {
          'content-type': 'application/json'
        },
        success: function success(res) {
          _this2.$apply();
          _this2.$alert('添加成功');
        },
        fail: function fail(res) {
          _this2.$alert('添加失败');
          console.log('denglu.fail:', res);
        }
      });
    }
  }]);

  return pageUser;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(pageUser , 'pages/evaluatePage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2YWx1YXRlUGFnZS5qcyJdLCJuYW1lcyI6WyJwYWdlVXNlciIsIm1peGlucyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJkYXRhIiwibW9yYWxTY29yZSIsIm1lbnRhbFNjb3JlIiwibWF0ZU51bWJlciIsInVzZXJuYW1lIiwidXNlcm51bWJlciIsImNsYXNzIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwibW9yYWxJbnB1dCIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsIm1lbnRhbElucHV0Iiwib3B0aW9uIiwiY29uc29sZSIsImxvZyIsImxhYmxlIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJzdHVkZW50IiwibnVtYmVyIiwid3giLCJyZXF1ZXN0IiwidXJsIiwibWF0ZW51bSIsInVzbmFtZSIsInVzbnVtYmVyIiwidXNjbGFzcyIsIm1vcmFsIiwibWVudGFsIiwibWV0aG9kIiwiaGVhZGVyIiwic3VjY2VzcyIsInJlcyIsIiRhcHBseSIsIiRhbGVydCIsImZhaWwiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFIQTs7O0lBS3FCQSxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLE0sR0FBUyxnRCxRQUNUQyxNLEdBQVM7QUFDUEMsOEJBQXdCLEtBRGpCO0FBRVBDLDZCQUF1QjtBQUZoQixLLFFBSVRDLEksR0FBTztBQUNMQyxrQkFBWSxFQURQO0FBRUxDLG1CQUFhLEVBRlI7QUFHTEMsa0JBQVksRUFIUDtBQUlMQyxnQkFBVSxFQUpMO0FBS0xDLGtCQUFZLEVBTFA7QUFNTEMsYUFBTztBQU5GLEssUUFrRFBDLFEsR0FBVyxFLFFBR1hDLE8sR0FBVTtBQUNSQyxnQkFEUSxzQkFDSUMsQ0FESixFQUNPO0FBQ2IsYUFBS1QsVUFBTCxHQUFrQlMsRUFBRUMsTUFBRixDQUFTQyxLQUEzQjtBQUNELE9BSE87QUFJUkMsaUJBSlEsdUJBSUtILENBSkwsRUFJUTtBQUNkLGFBQUtSLFdBQUwsR0FBbUJRLEVBQUVDLE1BQUYsQ0FBU0MsS0FBNUI7QUFDRDtBQU5PLEs7Ozs7OzJCQTVDSEUsTSxFQUFRO0FBQ2JDLGNBQVFDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCRixPQUFPRyxLQUE5QjtBQUNBLFdBQUtkLFVBQUwsR0FBa0JXLE9BQU9HLEtBQXpCO0FBQ0FGLGNBQVFDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCLEtBQUtiLFVBQS9CO0FBQ0EsV0FBS0MsUUFBTCxHQUFnQixLQUFLYyxPQUFMLENBQWFDLFVBQWIsQ0FBd0JDLE9BQXhCLENBQWdDaEIsUUFBaEQ7QUFDQSxXQUFLQyxVQUFMLEdBQWtCLEtBQUthLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkMsT0FBeEIsQ0FBZ0NDLE1BQWxEO0FBQ0EsV0FBS2YsS0FBTCxHQUFhLEtBQUtZLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkMsT0FBeEIsQ0FBZ0NkLEtBQTdDO0FBQ0FTLGNBQVFDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCLEtBQUtaLFFBQTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7Ozs2QkFFUVUsTSxFQUFRO0FBQUE7O0FBQ2Y7QUFDQVEsU0FBR0MsT0FBSCxDQUFXO0FBQ1RDLGFBQUssdURBREk7QUFFVDtBQUNBeEIsY0FBTTtBQUNKeUIsbUJBQVMsS0FBS3RCLFVBRFY7QUFFSnVCLGtCQUFRLEtBQUtSLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkMsT0FBeEIsQ0FBZ0NoQixRQUZwQztBQUdKdUIsb0JBQVUsS0FBS1QsT0FBTCxDQUFhQyxVQUFiLENBQXdCQyxPQUF4QixDQUFnQ0MsTUFIdEM7QUFJSk8sbUJBQVMsS0FBS1YsT0FBTCxDQUFhQyxVQUFiLENBQXdCQyxPQUF4QixDQUFnQ2QsS0FKckM7QUFLSnVCLGlCQUFPLEtBQUs1QixVQUxSO0FBTUo2QixrQkFBUSxLQUFLNUI7QUFOVCxTQUhHO0FBV1Q2QixnQkFBUSxLQVhDO0FBWVRDLGdCQUFRO0FBQ04sMEJBQWdCO0FBRFYsU0FaQztBQWVUQyxpQkFBUyxpQkFBQ0MsR0FBRCxFQUFTO0FBQ2hCLGlCQUFLQyxNQUFMO0FBQ0EsaUJBQUtDLE1BQUwsQ0FBWSxNQUFaO0FBQ0QsU0FsQlE7QUFtQlRDLGNBQU0sY0FBQ0gsR0FBRCxFQUFTO0FBQ2IsaUJBQUtFLE1BQUwsQ0FBWSxNQUFaO0FBQ0FyQixrQkFBUUMsR0FBUixDQUFZLGNBQVosRUFBNEJrQixHQUE1QjtBQUNEO0FBdEJRLE9BQVg7QUF3QkQ7Ozs7RUF0RG1DLGVBQUtJLEk7O2tCQUF0QjNDLFEiLCJmaWxlIjoiZXZhbHVhdGVQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICAvLyBpbXBvcnQgeyBzZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlnLmpzJ1xyXG4gIGltcG9ydCBodHRwIGZyb20gJy4uL21peGlucy9odHRwJ1xyXG4gIGltcG9ydCBiYXNlIGZyb20gJy4uL21peGlucy9iYXNlJ1xyXG4gIGltcG9ydCB1c2VyIGZyb20gJy4uL21peGlucy91c2VyJ1xyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHBhZ2VVc2VyIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIG1peGlucyA9IFtiYXNlLCBodHRwLCB1c2VyXVxyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6LGG6Iq95YS/JyxcclxuICAgICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiBmYWxzZVxyXG4gICAgfVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgbW9yYWxTY29yZTogW10sXHJcbiAgICAgIG1lbnRhbFNjb3JlOiBbXSxcclxuICAgICAgbWF0ZU51bWJlcjogW10sXHJcbiAgICAgIHVzZXJuYW1lOiBbXSxcclxuICAgICAgdXNlcm51bWJlcjogW10sXHJcbiAgICAgIGNsYXNzOiBbXVxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZChvcHRpb24pIHtcclxuICAgICAgY29uc29sZS5sb2coJ29wdGlvbjonLCBvcHRpb24ubGFibGUpXHJcbiAgICAgIHRoaXMubWF0ZU51bWJlciA9IG9wdGlvbi5sYWJsZVxyXG4gICAgICBjb25zb2xlLmxvZygnbWF0ZW51bWJlcicsIHRoaXMubWF0ZU51bWJlcilcclxuICAgICAgdGhpcy51c2VybmFtZSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnN0dWRlbnQudXNlcm5hbWVcclxuICAgICAgdGhpcy51c2VybnVtYmVyID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuc3R1ZGVudC5udW1iZXJcclxuICAgICAgdGhpcy5jbGFzcyA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnN0dWRlbnQuY2xhc3NcclxuICAgICAgY29uc29sZS5sb2coJ3VzZXJuYW1lJywgdGhpcy51c2VybmFtZSlcclxuICAgICAgLy8gdGhpcy5yZWNvcmRIZWFkaW5nID0gb3B0aW9uLmJyb2FkSGVhZGluZ1xyXG4gICAgICAvLyB0aGlzLnJlRXZlbnRJRCA9IG9wdGlvbi5ldmVudElEXHJcbiAgICAgIC8vIHRoaXMucmVFdmVudE5hbWUgPSBvcHRpb24uZXZlbnROYW1lXHJcbiAgICB9XHJcblxyXG4gICAgYWRkU2NvcmUob3B0aW9uKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKG9wdGlvbi5wYXJhbXMpXHJcbiAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3QvZG91eWFsb2NhbDIwMTkuNC45L2V2YWx1YXRlUGFnZS5waHA/JyxcclxuICAgICAgICAvLyB1cmw6ICdodHRwczovL3d3dy52MmV4LmNvbS9hcGkvdG9waWNzL3Nob3cuanNvbj9pZD01MjAnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIG1hdGVudW06IHRoaXMubWF0ZU51bWJlcixcclxuICAgICAgICAgIHVzbmFtZTogdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuc3R1ZGVudC51c2VybmFtZSxcclxuICAgICAgICAgIHVzbnVtYmVyOiB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5zdHVkZW50Lm51bWJlcixcclxuICAgICAgICAgIHVzY2xhc3M6IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnN0dWRlbnQuY2xhc3MsXHJcbiAgICAgICAgICBtb3JhbDogdGhpcy5tb3JhbFNjb3JlLFxyXG4gICAgICAgICAgbWVudGFsOiB0aGlzLm1lbnRhbFNjb3JlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgICAgdGhpcy4kYWxlcnQoJ+a3u+WKoOaIkOWKnycpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLiRhbGVydCgn5re75Yqg5aSx6LSlJylcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdkZW5nbHUuZmFpbDonLCByZXMpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXB1dGVkID0ge1xyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIG1vcmFsSW5wdXQgKGUpIHtcclxuICAgICAgICB0aGlzLm1vcmFsU2NvcmUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB9LFxyXG4gICAgICBtZW50YWxJbnB1dCAoZSkge1xyXG4gICAgICAgIHRoaXMubWVudGFsU2NvcmUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19