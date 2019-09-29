'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import { service } from '../config.js'

var userMixin = function (_wepy$mixin) {
  _inherits(userMixin, _wepy$mixin);

  function userMixin() {
    _classCallCheck(this, userMixin);

    return _possibleConstructorReturn(this, (userMixin.__proto__ || Object.getPrototypeOf(userMixin)).apply(this, arguments));
  }

  _createClass(userMixin, [{
    key: 'isFunction',

    /* ============= 工具方法（mixins没法复写，就再写一遍了） ============= */
    value: function isFunction(item) {
      return typeof item === 'function';
    }

    /* ========================== 用户方法 ========================== */
    // 获取用户信息

  }, {
    key: '$getUserInfo',
    value: function $getUserInfo(callback) {
      var _this2 = this;

      // 顶级容错
      if (!this.$parent || !this.$parent.$updateGlobalData) return;
      // 取缓存信息
      var user = this.$parent.$updateGlobalData('user');
      // 不重复获取用户信息
      if (user && user.nickName) {
        this.isFunction(callback) && callback(user);
        this.$apply();
        return user;
      }
      // 首次获取用户信息
      this.$login(function () {
        // 再获取用户信息
        _this2._wxUserInfo(callback);
      });
    }

    // 进行微信登陆

  }, {
    key: '$login',
    value: function $login() {
      var _this3 = this;

      var _success = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

      var noAutoLogin = arguments[1];

      // 先登录
      _wepy2.default.login({
        success: function success(res) {
          // console.log('wepy.login.success:', res)

          // 如果不需要自动登录，就return
          if (noAutoLogin) {
            // 串行回调
            _this3.isFunction(_success) && _success(res);
            _this3.$apply();
            return;
          }

          // 根据业务接口处理:业务登陆:异步
          // this.$post({ url: service.login, data: {code: res.code} }, {
          //   success: ({code, data}) => {},
          //   fail: ({code, data}) => {}
          // })

          // ===== 以下随机示例 =====
          setTimeout(function () {
            _this3.$parent.$updateGlobalData('user', {
              session: Math.random().toString(36).substring(2),
              packages: {
                times: 0,
                quantity: 0,
                status: '未借阅'
              },
              identity: {
                collection: 20,
                type: '未订阅用户',
                mobile: '1234567890',
                address: '在那遥远的地方 有一位美丽的姑娘'
              }
            });
            // 串行回调
            _this3.isFunction(_success) && _success(res);
            _this3.$apply();
          }, 100);
        },
        fail: function fail(res) {
          console.log('wepy.login.fail:', res);
        }
      });
    }

    /* ========================= 其他方法 ========================= */
    // 获取用户公开信息（微信）

  }, {
    key: '_wxUserInfo',
    value: function _wxUserInfo(callback) {
      var _this4 = this;

      _wepy2.default.getUserInfo({
        success: function success(res) {
          console.log('wepy.getUserInfo.success:', res);
          // 缓存用户信息
          var user = _this4.$parent.$updateGlobalData('user', res.userInfo);
          _this4.isFunction(callback) && callback(user);
          _this4.$apply();
        },
        fail: function fail(res) {
          console.log('wepy.getUserInfo.fail:', res);
          // 用户拒绝授权:填充默认数据
          var user = _this4.$parent.$updateGlobalData('user', {
            nickName: '未授权',
            avatarUrl: '/images/icon/icon-avatar@2x.png'
          });

          // 串行回调
          _this4.isFunction(callback) && callback(user);
          _this4.$apply();

          // 尝试授权
          _this4._wxAuthModal(callback);
        }
      });
    }

    // 提示用户开启授权

  }, {
    key: '_wxAuthModal',
    value: function _wxAuthModal(callback) {
      var _this5 = this;

      // 先判断是否支持开启授权页的API
      wx.openSetting && wx.showModal({
        title: '授权提示',
        content: '豆芽儿希望获得以下权限：\n · 获取您的公开信息（昵称、头像等）',
        confirmText: '去授权',
        cancelText: '先不授权',
        success: function success(res) {
          if (res.confirm) {
            console.log('_wxAuthModal.showModal: 用户点击确定', res);
            _this5._wxOpenSetting(callback);
          }
        }
      });
    }

    // 打开授权页

  }, {
    key: '_wxOpenSetting',
    value: function _wxOpenSetting(callback) {
      var _this6 = this;

      wx.openSetting && wx.openSetting({
        success: function success(_ref) {
          var authSetting = _ref.authSetting;

          console.log('wx.openSetting.success', authSetting);
          if (authSetting['scope.userInfo']) {
            // 用户打开设置，重新获取信息
            _this6._wxUserInfo(callback);
          }
        }
      });
    }
  }]);

  return userMixin;
}(_wepy2.default.mixin);

exports.default = userMixin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuanMiXSwibmFtZXMiOlsidXNlck1peGluIiwiaXRlbSIsImNhbGxiYWNrIiwiJHBhcmVudCIsIiR1cGRhdGVHbG9iYWxEYXRhIiwidXNlciIsIm5pY2tOYW1lIiwiaXNGdW5jdGlvbiIsIiRhcHBseSIsIiRsb2dpbiIsIl93eFVzZXJJbmZvIiwic3VjY2VzcyIsIm5vQXV0b0xvZ2luIiwibG9naW4iLCJyZXMiLCJzZXRUaW1lb3V0Iiwic2Vzc2lvbiIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsInBhY2thZ2VzIiwidGltZXMiLCJxdWFudGl0eSIsInN0YXR1cyIsImlkZW50aXR5IiwiY29sbGVjdGlvbiIsInR5cGUiLCJtb2JpbGUiLCJhZGRyZXNzIiwiZmFpbCIsImNvbnNvbGUiLCJsb2ciLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwiYXZhdGFyVXJsIiwiX3d4QXV0aE1vZGFsIiwid3giLCJvcGVuU2V0dGluZyIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsImNvbmZpcm1UZXh0IiwiY2FuY2VsVGV4dCIsImNvbmZpcm0iLCJfd3hPcGVuU2V0dGluZyIsImF1dGhTZXR0aW5nIiwibWl4aW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFDQTs7SUFFcUJBLFM7Ozs7Ozs7Ozs7OztBQUNuQjsrQkFDV0MsSSxFQUFNO0FBQ2YsYUFBTyxPQUFPQSxJQUFQLEtBQWdCLFVBQXZCO0FBQ0Q7O0FBRUQ7QUFDQTs7OztpQ0FDYUMsUSxFQUFVO0FBQUE7O0FBQ3JCO0FBQ0EsVUFBSSxDQUFDLEtBQUtDLE9BQU4sSUFBaUIsQ0FBQyxLQUFLQSxPQUFMLENBQWFDLGlCQUFuQyxFQUFzRDtBQUN0RDtBQUNBLFVBQU1DLE9BQU8sS0FBS0YsT0FBTCxDQUFhQyxpQkFBYixDQUErQixNQUEvQixDQUFiO0FBQ0E7QUFDQSxVQUFJQyxRQUFRQSxLQUFLQyxRQUFqQixFQUEyQjtBQUN6QixhQUFLQyxV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YixvQkFBUUMsR0FBUixDQUFZLGdDQUFaLEVBQThDbEIsR0FBOUM7QUFDQSxtQkFBSytCLGNBQUwsQ0FBb0IzQyxRQUFwQjtBQUNEO0FBQ0Y7QUFWNEIsT0FBYixDQUFsQjtBQVlEOztBQUVEOzs7O21DQUNlQSxRLEVBQVU7QUFBQTs7QUFDdkJtQyxTQUFHQyxXQUFILElBQWtCRCxHQUFHQyxXQUFILENBQWU7QUFDL0IzQixpQkFBUyx1QkFBbUI7QUFBQSxjQUFqQm1DLFdBQWlCLFFBQWpCQSxXQUFpQjs7QUFDMUJmLGtCQUFRQyxHQUFSLENBQVksd0JBQVosRUFBc0NjLFdBQXRDO0FBQ0EsY0FBSUEsWUFBWSxnQkFBWixDQUFKLEVBQW1DO0FBQ2pDO0FBQ0EsbUJBQUtwQyxXQUFMLENBQWlCUixRQUFqQjtBQUNEO0FBQ0Y7QUFQOEIsT0FBZixDQUFsQjtBQVNEOzs7O0VBbklvQyxlQUFLNkMsSzs7a0JBQXZCL0MsUyIsImZpbGUiOiJ1c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuLy8gaW1wb3J0IHsgc2VydmljZSB9IGZyb20gJy4uL2NvbmZpZy5qcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHVzZXJNaXhpbiBleHRlbmRzIHdlcHkubWl4aW4ge1xyXG4gIC8qID09PT09PT09PT09PT0g5bel5YW35pa55rOV77yIbWl4aW5z5rKh5rOV5aSN5YaZ77yM5bCx5YaN5YaZ5LiA6YGN5LqG77yJID09PT09PT09PT09PT0gKi9cclxuICBpc0Z1bmN0aW9uKGl0ZW0pIHtcclxuICAgIHJldHVybiB0eXBlb2YgaXRlbSA9PT0gJ2Z1bmN0aW9uJ1xyXG4gIH1cclxuXHJcbiAgLyogPT09PT09PT09PT09PT09PT09PT09PT09PT0g55So5oi35pa55rOVID09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbiAgLy8g6I635Y+W55So5oi35L+h5oGvXHJcbiAgJGdldFVzZXJJbmZvKGNhbGxiYWNrKSB7XHJcbiAgICAvLyDpobbnuqflrrnplJlcclxuICAgIGlmICghdGhpcy4kcGFyZW50IHx8ICF0aGlzLiRwYXJlbnQuJHVwZGF0ZUdsb2JhbERhdGEpIHJldHVyblxyXG4gICAgLy8g5Y+W57yT5a2Y5L+h5oGvXHJcbiAgICBjb25zdCB1c2VyID0gdGhpcy4kcGFyZW50LiR1cGRhdGVHbG9iYWxEYXRhKCd1c2VyJylcclxuICAgIC8vIOS4jemHjeWkjeiOt+WPlueUqOaIt+S/oeaBr1xyXG4gICAgaWYgKHVzZXIgJiYgdXNlci5uaWNrTmFtZSkge1xyXG4gICAgICB0aGlzLmlzRnVuY3Rpb24oY2FsbGJhY2spICYmIGNhbGxiYWNrKHVzZXIpXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgcmV0dXJuIHVzZXJcclxuICAgIH1cclxuICAgIC8vIOmmluasoeiOt+WPlueUqOaIt+S/oeaBr1xyXG4gICAgdGhpcy4kbG9naW4oKCkgPT4ge1xyXG4gICAgICAvLyDlho3ojrflj5bnlKjmiLfkv6Hmga9cclxuICAgICAgdGhpcy5fd3hVc2VySW5mbyhjYWxsYmFjaylcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvLyDov5vooYzlvq7kv6HnmbvpmYZcclxuICAkbG9naW4oc3VjY2VzcyA9ICgpID0+IHt9LCBub0F1dG9Mb2dpbikge1xyXG4gICAgLy8g5YWI55m75b2VXHJcbiAgICB3ZXB5LmxvZ2luKHtcclxuICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd3ZXB5LmxvZ2luLnN1Y2Nlc3M6JywgcmVzKVxyXG5cclxuICAgICAgICAvLyDlpoLmnpzkuI3pnIDopoHoh6rliqjnmbvlvZXvvIzlsLFyZXR1cm5cclxuICAgICAgICBpZiAobm9BdXRvTG9naW4pIHtcclxuICAgICAgICAgIC8vIOS4suihjOWbnuiwg1xyXG4gICAgICAgICAgdGhpcy5pc0Z1bmN0aW9uKHN1Y2Nlc3MpICYmIHN1Y2Nlc3MocmVzKVxyXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDmoLnmja7kuJrliqHmjqXlj6PlpITnkIY65Lia5Yqh55m76ZmGOuW8guatpVxyXG4gICAgICAgIC8vIHRoaXMuJHBvc3QoeyB1cmw6IHNlcnZpY2UubG9naW4sIGRhdGE6IHtjb2RlOiByZXMuY29kZX0gfSwge1xyXG4gICAgICAgIC8vICAgc3VjY2VzczogKHtjb2RlLCBkYXRhfSkgPT4ge30sXHJcbiAgICAgICAgLy8gICBmYWlsOiAoe2NvZGUsIGRhdGF9KSA9PiB7fVxyXG4gICAgICAgIC8vIH0pXHJcblxyXG4gICAgICAgIC8vID09PT09IOS7peS4i+maj+acuuekuuS+iyA9PT09PVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy4kcGFyZW50LiR1cGRhdGVHbG9iYWxEYXRhKCd1c2VyJywge1xyXG4gICAgICAgICAgICBzZXNzaW9uOiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiksXHJcbiAgICAgICAgICAgIHBhY2thZ2VzOiB7XHJcbiAgICAgICAgICAgICAgdGltZXM6IDAsXHJcbiAgICAgICAgICAgICAgcXVhbnRpdHk6IDAsXHJcbiAgICAgICAgICAgICAgc3RhdHVzOiAn5pyq5YCf6ZiFJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpZGVudGl0eToge1xyXG4gICAgICAgICAgICAgIGNvbGxlY3Rpb246IDIwLFxyXG4gICAgICAgICAgICAgIHR5cGU6ICfmnKrorqLpmIXnlKjmiLcnLFxyXG4gICAgICAgICAgICAgIG1vYmlsZTogJzEyMzQ1Njc4OTAnLFxyXG4gICAgICAgICAgICAgIGFkZHJlc3M6ICflnKjpgqPpgaXov5znmoTlnLDmlrkg5pyJ5LiA5L2N576O5Li955qE5aeR5aiYJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC8vIOS4suihjOWbnuiwg1xyXG4gICAgICAgICAgdGhpcy5pc0Z1bmN0aW9uKHN1Y2Nlc3MpICYmIHN1Y2Nlc3MocmVzKVxyXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIH0sIDEwMClcclxuICAgICAgfSxcclxuICAgICAgZmFpbDogKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd3ZXB5LmxvZ2luLmZhaWw6JywgcmVzKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyogPT09PT09PT09PT09PT09PT09PT09PT09PSDlhbbku5bmlrnms5UgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4gIC8vIOiOt+WPlueUqOaIt+WFrOW8gOS/oeaBr++8iOW+ruS/oe+8iVxyXG4gIF93eFVzZXJJbmZvKGNhbGxiYWNrKSB7XHJcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcclxuICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd3ZXB5LmdldFVzZXJJbmZvLnN1Y2Nlc3M6JywgcmVzKVxyXG4gICAgICAgIC8vIOe8k+WtmOeUqOaIt+S/oeaBr1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSB0aGlzLiRwYXJlbnQuJHVwZGF0ZUdsb2JhbERhdGEoJ3VzZXInLCByZXMudXNlckluZm8pXHJcbiAgICAgICAgdGhpcy5pc0Z1bmN0aW9uKGNhbGxiYWNrKSAmJiBjYWxsYmFjayh1c2VyKVxyXG4gICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgfSxcclxuICAgICAgZmFpbDogKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd3ZXB5LmdldFVzZXJJbmZvLmZhaWw6JywgcmVzKVxyXG4gICAgICAgIC8vIOeUqOaIt+aLkue7neaOiOadgzrloavlhYXpu5jorqTmlbDmja5cclxuICAgICAgICBjb25zdCB1c2VyID0gdGhpcy4kcGFyZW50LiR1cGRhdGVHbG9iYWxEYXRhKCd1c2VyJywge1xyXG4gICAgICAgICAgbmlja05hbWU6ICfmnKrmjojmnYMnLFxyXG4gICAgICAgICAgYXZhdGFyVXJsOiAnL2ltYWdlcy9pY29uL2ljb24tYXZhdGFyQDJ4LnBuZydcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyDkuLLooYzlm57osINcclxuICAgICAgICB0aGlzLmlzRnVuY3Rpb24oY2FsbGJhY2spICYmIGNhbGxiYWNrKHVzZXIpXHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG5cclxuICAgICAgICAvLyDlsJ3or5XmjojmnYNcclxuICAgICAgICB0aGlzLl93eEF1dGhNb2RhbChjYWxsYmFjaylcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8vIOaPkOekuueUqOaIt+W8gOWQr+aOiOadg1xyXG4gIF93eEF1dGhNb2RhbChjYWxsYmFjaykge1xyXG4gICAgLy8g5YWI5Yik5pat5piv5ZCm5pSv5oyB5byA5ZCv5o6I5p2D6aG155qEQVBJXHJcbiAgICB3eC5vcGVuU2V0dGluZyAmJiB3eC5zaG93TW9kYWwoe1xyXG4gICAgICB0aXRsZTogJ+aOiOadg+aPkOekuicsXHJcbiAgICAgIGNvbnRlbnQ6ICfosYboir3lhL/luIzmnJvojrflvpfku6XkuIvmnYPpmZDvvJpcXG4gwrcg6I635Y+W5oKo55qE5YWs5byA5L+h5oGv77yI5pi156ew44CB5aS05YOP562J77yJJyxcclxuICAgICAgY29uZmlybVRleHQ6ICfljrvmjojmnYMnLFxyXG4gICAgICBjYW5jZWxUZXh0OiAn5YWI5LiN5o6I5p2DJyxcclxuICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ193eEF1dGhNb2RhbC5zaG93TW9kYWw6IOeUqOaIt+eCueWHu+ehruWumicsIHJlcylcclxuICAgICAgICAgIHRoaXMuX3d4T3BlblNldHRpbmcoY2FsbGJhY2spXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLy8g5omT5byA5o6I5p2D6aG1XHJcbiAgX3d4T3BlblNldHRpbmcoY2FsbGJhY2spIHtcclxuICAgIHd4Lm9wZW5TZXR0aW5nICYmIHd4Lm9wZW5TZXR0aW5nKHtcclxuICAgICAgc3VjY2VzczogKHthdXRoU2V0dGluZ30pID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnd3gub3BlblNldHRpbmcuc3VjY2VzcycsIGF1dGhTZXR0aW5nKVxyXG4gICAgICAgIGlmIChhdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xyXG4gICAgICAgICAgLy8g55So5oi35omT5byA6K6+572u77yM6YeN5paw6I635Y+W5L+h5oGvXHJcbiAgICAgICAgICB0aGlzLl93eFVzZXJJbmZvKGNhbGxiYWNrKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIl19