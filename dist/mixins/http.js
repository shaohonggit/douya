'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var httpMixin = function (_wepy$mixin) {
  _inherits(httpMixin, _wepy$mixin);

  function httpMixin() {
    _classCallCheck(this, httpMixin);

    return _possibleConstructorReturn(this, (httpMixin.__proto__ || Object.getPrototypeOf(httpMixin)).apply(this, arguments));
  }

  _createClass(httpMixin, [{
    key: '$get',

    /* =================== [$get 发起GET请求] =================== */
    value: function $get(_ref, _ref2) {
      var _ref$url = _ref.url,
          url = _ref$url === undefined ? '' : _ref$url,
          _ref$headers = _ref.headers,
          headers = _ref$headers === undefined ? {} : _ref$headers,
          _ref$data = _ref.data,
          data = _ref$data === undefined ? {} : _ref$data;
      var _ref2$success = _ref2.success,
          success = _ref2$success === undefined ? function () {} : _ref2$success,
          _ref2$fail = _ref2.fail,
          fail = _ref2$fail === undefined ? function () {} : _ref2$fail,
          _ref2$complete = _ref2.complete,
          complete = _ref2$complete === undefined ? function () {} : _ref2$complete;

      var methods = 'GET';
      this.$ajax({ url: url, headers: headers, methods: methods, data: data }, { success: success, fail: fail, complete: complete });
    }

    /* =================== [$post 发起POST请求] =================== */

  }, {
    key: '$post',
    value: function $post(_ref3, _ref4) {
      var _ref3$url = _ref3.url,
          url = _ref3$url === undefined ? '' : _ref3$url,
          _ref3$headers = _ref3.headers,
          headers = _ref3$headers === undefined ? {} : _ref3$headers,
          _ref3$data = _ref3.data,
          data = _ref3$data === undefined ? {} : _ref3$data;
      var _ref4$success = _ref4.success,
          success = _ref4$success === undefined ? function () {} : _ref4$success,
          _ref4$fail = _ref4.fail,
          fail = _ref4$fail === undefined ? function () {} : _ref4$fail,
          _ref4$complete = _ref4.complete,
          complete = _ref4$complete === undefined ? function () {} : _ref4$complete;

      var methods = 'POST';
      this.$ajax({ url: url, headers: headers, methods: methods, data: data }, { success: success, fail: fail, complete: complete });
    }

    /**
     * [ajax 统一请求方法]
     * @param  {[type]}  item [description]
     * @return {Boolean}      [description]
     */

  }, {
    key: '$ajax',
    value: function $ajax(_ref5, _ref6) {
      var _this2 = this;

      var _ref5$url = _ref5.url,
          url = _ref5$url === undefined ? '' : _ref5$url,
          _ref5$headers = _ref5.headers,
          headers = _ref5$headers === undefined ? {} : _ref5$headers,
          _ref5$methods = _ref5.methods,
          methods = _ref5$methods === undefined ? 'GET' : _ref5$methods,
          _ref5$data = _ref5.data,
          data = _ref5$data === undefined ? {} : _ref5$data;

      var _ref6$success = _ref6.success,
          _success = _ref6$success === undefined ? function () {} : _ref6$success,
          _ref6$fail = _ref6.fail,
          _fail = _ref6$fail === undefined ? function () {} : _ref6$fail,
          _ref6$complete = _ref6.complete,
          _complete = _ref6$complete === undefined ? function () {} : _ref6$complete;

      // 增强体验：加载中
      wx.showNavigationBarLoading();

      // 构造请求体
      var request = {
        url: url,
        method: ['GET', 'POST'].indexOf(methods) > -1 ? methods : 'GET',
        header: Object.assign({
          // set something global
        }, headers),
        data: Object.assign({
          // set something global
        }, data)

        // 控制台调试日志
      };console.table(request);

      // 发起请求
      _wepy2.default.request(Object.assign(request, {
        success: function success(_ref7) {
          var statusCode = _ref7.statusCode,
              data = _ref7.data;

          // 控制台调试日志
          console.log('[SUCCESS]', statusCode, (typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object' ? data : data.toString().substring(0, 100));

          // 状态码正常 & 确认有数据
          if (0 === +data.code && data.data) {
            // 成功回调
            return setTimeout(function () {
              _this2.isFunction(_success) && _success(_extends({ statusCode: statusCode }, data));
              _this2.$apply();
            });
          }

          // 失败回调：其他情况
          return setTimeout(function () {
            _this2.isFunction(_fail) && _fail(_extends({ statusCode: statusCode }, data));
            _this2.$apply();
          });
        },
        fail: function fail(_ref8) {
          var statusCode = _ref8.statusCode,
              data = _ref8.data;

          // 控制台调试日志
          console.log('[FAIL]', statusCode, data);
          // 失败回调
          return setTimeout(function () {
            _this2.isFunction(_fail) && _fail(_extends({ statusCode: statusCode }, data));
            _this2.$apply();
          });
        },
        complete: function complete(res) {
          // 控制台调试日志
          console.log('[COMPLETE]', res);
          // 隐藏加载提示
          wx.hideNavigationBarLoading();
          // 停止下拉状态
          wx.stopPullDownRefresh();
          // 完成回调
          return function () {
            _this2.isFunction(_complete) && _complete(res);
            _this2.$apply();
          }();
        }
      }));
    }
  }]);

  return httpMixin;
}(_wepy2.default.mixin);

exports.default = httpMixin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHAuanMiXSwibmFtZXMiOlsiaHR0cE1peGluIiwidXJsIiwiaGVhZGVycyIsImRhdGEiLCJzdWNjZXNzIiwiZmFpbCIsImNvbXBsZXRlIiwibWV0aG9kcyIsIiRhamF4Iiwid3giLCJzaG93TmF2aWdhdGlvbkJhckxvYWRpbmciLCJyZXF1ZXN0IiwibWV0aG9kIiwiaW5kZXhPZiIsImhlYWRlciIsIk9iamVjdCIsImFzc2lnbiIsImNvbnNvbGUiLCJ0YWJsZSIsInN0YXR1c0NvZGUiLCJsb2ciLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsImNvZGUiLCJzZXRUaW1lb3V0IiwiaXNGdW5jdGlvbiIsIiRhcHBseSIsInJlcyIsImhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZyIsInN0b3BQdWxsRG93blJlZnJlc2giLCJtaXhpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7OztBQUNuQjtzQ0FJRTtBQUFBLDBCQUZDQyxHQUVEO0FBQUEsVUFGQ0EsR0FFRCw0QkFGTyxFQUVQO0FBQUEsOEJBRldDLE9BRVg7QUFBQSxVQUZXQSxPQUVYLGdDQUZxQixFQUVyQjtBQUFBLDJCQUZ5QkMsSUFFekI7QUFBQSxVQUZ5QkEsSUFFekIsNkJBRmdDLEVBRWhDO0FBQUEsZ0NBRENDLE9BQ0Q7QUFBQSxVQURDQSxPQUNELGlDQURXLFlBQU0sQ0FBRSxDQUNuQjtBQUFBLDZCQURxQkMsSUFDckI7QUFBQSxVQURxQkEsSUFDckIsOEJBRDRCLFlBQU0sQ0FBRSxDQUNwQztBQUFBLGlDQURzQ0MsUUFDdEM7QUFBQSxVQURzQ0EsUUFDdEMsa0NBRGlELFlBQU0sQ0FBRSxDQUN6RDs7QUFDQSxVQUFNQyxVQUFVLEtBQWhCO0FBQ0EsV0FBS0MsS0FBTCxDQUNFLEVBQUNQLFFBQUQsRUFBTUMsZ0JBQU4sRUFBZUssZ0JBQWYsRUFBd0JKLFVBQXhCLEVBREYsRUFFRSxFQUFDQyxnQkFBRCxFQUFVQyxVQUFWLEVBQWdCQyxr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QixJQUFyQixFQUF6QjtBQUNBLG1CQUFLdUIsTUFBTDtBQUNELFdBSE0sQ0FBUDtBQUlELFNBbkJpQztBQW9CbENyQixjQUFNLHFCQUEwQjtBQUFBLGNBQXZCYyxVQUF1QixTQUF2QkEsVUFBdUI7QUFBQSxjQUFYaEIsSUFBVyxTQUFYQSxJQUFXOztBQUM5QjtBQUNBYyxrQkFBUUcsR0FBUixDQUFZLFFBQVosRUFBc0JELFVBQXRCLEVBQWtDaEIsSUFBbEM7QUFDQTtBQUNBLGlCQUFPcUIsV0FBVyxZQUFNO0FBQ3RCLG1CQUFLQyxVQUFMLENBQWdCcEIsS0FBaEIsS0FBeUJBLGlCQUFNYyxzQkFBTixJQUFxQmhCLElBQXJCLEVBQXpCO0FBQ0EsbUJBQUt1QixNQUFMO0FBQ0QsV0FITSxDQUFQO0FBSUQsU0E1QmlDO0FBNkJsQ3BCLGtCQUFVLGtCQUFDcUIsR0FBRCxFQUFTO0FBQ2pCO0FBQ0FWLGtCQUFRRyxHQUFSLENBQVksWUFBWixFQUEwQk8sR0FBMUI7QUFDQTtBQUNBbEIsYUFBR21CLHdCQUFIO0FBQ0E7QUFDQW5CLGFBQUdvQixtQkFBSDtBQUNBO0FBQ0EsaUJBQVEsWUFBTTtBQUNaLG1CQUFLSixVQUFMLENBQWdCbkIsU0FBaEIsS0FBNkJBLFVBQVNxQixHQUFULENBQTdCO0FBQ0EsbUJBQUtELE1BQUw7QUFDRCxXQUhNLEVBQVA7QUFJRDtBQXpDaUMsT0FBdkIsQ0FBYjtBQTJDRDs7OztFQWhHb0MsZUFBS0ksSzs7a0JBQXZCOUIsUyIsImZpbGUiOiJodHRwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGh0dHBNaXhpbiBleHRlbmRzIHdlcHkubWl4aW4ge1xyXG4gIC8qID09PT09PT09PT09PT09PT09PT0gWyRnZXQg5Y+R6LW3R0VU6K+35rGCXSA9PT09PT09PT09PT09PT09PT09ICovXHJcbiAgJGdldChcclxuICAgIHt1cmwgPSAnJywgaGVhZGVycyA9IHt9LCBkYXRhID0ge30gfSwgXHJcbiAgICB7c3VjY2VzcyA9ICgpID0+IHt9LCBmYWlsID0gKCkgPT4ge30sIGNvbXBsZXRlID0gKCkgPT4ge30gfVxyXG4gICkge1xyXG4gICAgY29uc3QgbWV0aG9kcyA9ICdHRVQnXHJcbiAgICB0aGlzLiRhamF4KFxyXG4gICAgICB7dXJsLCBoZWFkZXJzLCBtZXRob2RzLCBkYXRhfSwgXHJcbiAgICAgIHtzdWNjZXNzLCBmYWlsLCBjb21wbGV0ZSB9XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICAvKiA9PT09PT09PT09PT09PT09PT09IFskcG9zdCDlj5HotbdQT1NU6K+35rGCXSA9PT09PT09PT09PT09PT09PT09ICovXHJcbiAgJHBvc3QoXHJcbiAgICB7dXJsID0gJycsIGhlYWRlcnMgPSB7fSwgZGF0YSA9IHt9IH0sIFxyXG4gICAge3N1Y2Nlc3MgPSAoKSA9PiB7fSwgZmFpbCA9ICgpID0+IHt9LCBjb21wbGV0ZSA9ICgpID0+IHt9IH1cclxuICApIHtcclxuICAgIGNvbnN0IG1ldGhvZHMgPSAnUE9TVCdcclxuICAgIHRoaXMuJGFqYXgoXHJcbiAgICAgIHt1cmwsIGhlYWRlcnMsIG1ldGhvZHMsIGRhdGF9LCBcclxuICAgICAge3N1Y2Nlc3MsIGZhaWwsIGNvbXBsZXRlIH1cclxuICAgIClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFthamF4IOe7n+S4gOivt+axguaWueazlV1cclxuICAgKiBAcGFyYW0gIHtbdHlwZV19ICBpdGVtIFtkZXNjcmlwdGlvbl1cclxuICAgKiBAcmV0dXJuIHtCb29sZWFufSAgICAgIFtkZXNjcmlwdGlvbl1cclxuICAgKi9cclxuICAkYWpheChcclxuICAgIHt1cmwgPSAnJywgaGVhZGVycyA9IHt9LCBtZXRob2RzID0gJ0dFVCcsIGRhdGEgPSB7fSB9LCBcclxuICAgIHtzdWNjZXNzID0gKCkgPT4ge30sIGZhaWwgPSAoKSA9PiB7fSwgY29tcGxldGUgPSAoKSA9PiB7fSB9XHJcbiAgKSB7XHJcbiAgICAvLyDlop7lvLrkvZPpqozvvJrliqDovb3kuK1cclxuICAgIHd4LnNob3dOYXZpZ2F0aW9uQmFyTG9hZGluZygpXHJcblxyXG4gICAgLy8g5p6E6YCg6K+35rGC5L2TXHJcbiAgICBjb25zdCByZXF1ZXN0ID0ge1xyXG4gICAgICB1cmwsXHJcbiAgICAgIG1ldGhvZDogWydHRVQnLCAnUE9TVCddLmluZGV4T2YobWV0aG9kcykgPiAtMSA/IG1ldGhvZHMgOiAnR0VUJyxcclxuICAgICAgaGVhZGVyOiBPYmplY3QuYXNzaWduKHtcclxuICAgICAgICAvLyBzZXQgc29tZXRoaW5nIGdsb2JhbFxyXG4gICAgICB9LCBoZWFkZXJzKSxcclxuICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgLy8gc2V0IHNvbWV0aGluZyBnbG9iYWxcclxuICAgICAgfSwgZGF0YSlcclxuICAgIH1cclxuXHJcbiAgICAvLyDmjqfliLblj7DosIPor5Xml6Xlv5dcclxuICAgIGNvbnNvbGUudGFibGUocmVxdWVzdClcclxuXHJcbiAgICAvLyDlj5Hotbfor7fmsYJcclxuICAgIHdlcHkucmVxdWVzdChPYmplY3QuYXNzaWduKHJlcXVlc3QsIHtcclxuICAgICAgc3VjY2VzczogKHsgc3RhdHVzQ29kZSwgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgLy8g5o6n5Yi25Y+w6LCD6K+V5pel5b+XXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1tTVUNDRVNTXScsIHN0YXR1c0NvZGUsIHR5cGVvZiBkYXRhID09PSAnb2JqZWN0JyA/IGRhdGEgOiBkYXRhLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEwMCkpXHJcblxyXG4gICAgICAgIC8vIOeKtuaAgeeggeato+W4uCAmIOehruiupOacieaVsOaNrlxyXG4gICAgICAgIGlmICgwID09PSArZGF0YS5jb2RlICYmIGRhdGEuZGF0YSkge1xyXG4gICAgICAgICAgLy8g5oiQ5Yqf5Zue6LCDXHJcbiAgICAgICAgICByZXR1cm4gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGdW5jdGlvbihzdWNjZXNzKSAmJiBzdWNjZXNzKHtzdGF0dXNDb2RlLCAuLi5kYXRhfSlcclxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOWksei0peWbnuiwg++8muWFtuS7luaDheWGtVxyXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuaXNGdW5jdGlvbihmYWlsKSAmJiBmYWlsKHtzdGF0dXNDb2RlLCAuLi5kYXRhfSlcclxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiAoeyBzdGF0dXNDb2RlLCBkYXRhIH0pID0+IHtcclxuICAgICAgICAvLyDmjqfliLblj7DosIPor5Xml6Xlv5dcclxuICAgICAgICBjb25zb2xlLmxvZygnW0ZBSUxdJywgc3RhdHVzQ29kZSwgZGF0YSlcclxuICAgICAgICAvLyDlpLHotKXlm57osINcclxuICAgICAgICByZXR1cm4gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmlzRnVuY3Rpb24oZmFpbCkgJiYgZmFpbCh7c3RhdHVzQ29kZSwgLi4uZGF0YX0pXHJcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgY29tcGxldGU6IChyZXMpID0+IHtcclxuICAgICAgICAvLyDmjqfliLblj7DosIPor5Xml6Xlv5dcclxuICAgICAgICBjb25zb2xlLmxvZygnW0NPTVBMRVRFXScsIHJlcylcclxuICAgICAgICAvLyDpmpDol4/liqDovb3mj5DnpLpcclxuICAgICAgICB3eC5oaWRlTmF2aWdhdGlvbkJhckxvYWRpbmcoKVxyXG4gICAgICAgIC8vIOWBnOatouS4i+aLieeKtuaAgVxyXG4gICAgICAgIHd4LnN0b3BQdWxsRG93blJlZnJlc2goKVxyXG4gICAgICAgIC8vIOWujOaIkOWbnuiwg1xyXG4gICAgICAgIHJldHVybiAoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pc0Z1bmN0aW9uKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpXHJcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgfSkoKVxyXG4gICAgICB9XHJcbiAgICB9KSlcclxuICB9XHJcbn1cclxuXHJcbiJdfQ==