'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../config.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cartMixin = function (_wepy$mixin) {
  _inherits(cartMixin, _wepy$mixin);

  function cartMixin() {
    _classCallCheck(this, cartMixin);

    return _possibleConstructorReturn(this, (cartMixin.__proto__ || Object.getPrototypeOf(cartMixin)).apply(this, arguments));
  }

  _createClass(cartMixin, [{
    key: 'getCartList',

    /**
     * 提供购物车总列表
     * 框架耦合
     */
    value: function getCartList(callback) {
      // 容错
      if (!this.$parent || !this.$parent.globalData) return false;
      // 回调提供商品列表
      var list = this.getArray(this.$parent.$updateGlobalData('cart'));
      // 优先执行回调
      if (this.isFunction(callback)) {
        var result = callback(list);
        // 更新返回的列表
        this.isArray(result) && this.$parent.$updateGlobalData('cart', result);
      }
      return list;
    }

    /**
     * 判断商品是否一致
     * 业务耦合
     */

  }, {
    key: 'isGoodEqual',
    value: function isGoodEqual(GA, GB) {
      return GA.id == GB.id;
    }

    // 加入购物车

  }, {
    key: 'addCart',
    value: function addCart(item, callback) {
      var _this2 = this;

      var list = this.getCartList();

      // 根据用户套餐信息处理购物车数量问题
      this.$getUserInfo(function (_ref) {
        var packages = _ref.packages;

        if (_this2.isDefined(packages)) {
          // 解构: 可借数量/次数
          var quantity = packages.quantity,
              times = packages.times;
          // 如果没有可借次数

          if (!+times) {
            return _this2.isFunction(callback) && callback({ code: 4001, message: '您当前不可借阅图书，请购买订阅套餐' });
          }
          // 判断是否已超出
          if (list.length >= +quantity) {
            // 超出提示
            _this2.isFunction(callback) && callback({ code: 1001, message: '您的订阅图书的数量已达到上限，请删除某本再借阅' });
          } else {
            // 真去加车
            try {
              _this2.realAddCart(item);
              _this2.isFunction(callback) && callback({ code: 0, message: '借阅成功' });
            } catch (e) {
              _this2.isFunction(callback) && callback({ code: 9001, message: '数据异常，请重新借阅' });
            }
          }
        } else {
          _this2.isFunction(callback) && callback({ code: 9002, message: '您暂无可用套餐,请先购买套餐' });
        }
      });
    }
  }, {
    key: 'realAddCart',
    value: function realAddCart(item) {
      this.updateCart({
        arr: item,
        isRemove: false
      }, {
        getList: this.getCartList,
        isEqual: this.isGoodEqual
      });
    }

    // 从购物车移除

  }, {
    key: 'removeCart',
    value: function removeCart(item, callback) {
      this.updateCart({
        arr: item,
        isRemove: true
      }, {
        getList: this.getCartList,
        isEqual: this.isGoodEqual,
        callback: callback
      });
      this.isFunction(callback) && callback({ code: 0, message: '删除成功' });
    }

    /**
     * 更新购物车数据
     * 1、购物车维护总列表ARR与传入列表arr的关系
     * 2、对ARR只有增和减
     * 3、增减逻辑支持传入函数判断
     * 4、返回操作后的列表
     * 业务/框架无关
     */

  }, {
    key: 'updateCart',
    value: function updateCart(_ref2, _ref3) {
      var _this3 = this;

      var arr = _ref2.arr,
          isRemove = _ref2.isRemove;
      var getList = _ref3.getList,
          isEqual = _ref3.isEqual;

      // 整理数据
      var itemArr = this.isArray(arr) ? arr : [arr];

      // 循环处理
      itemArr.map(function (good) {
        // 构造数据
        var tempData = {
          good: good,
          amount: 1
        };

        _this3.isFunction(getList) && getList.bind(_this3)(function (list) {
          // 对比去重
          var existIndex = undefined;
          if (_this3.isFunction(isEqual)) {
            for (var i = list.length - 1; i >= 0; i--) {
              if (isEqual(list[i].good, tempData.good)) {
                // 取出存在的序号
                existIndex = i;
                break;
              }
            }
          }

          // 存在时，add增加数量，remove直接删除
          // 不存在时，add直接增加
          if (isRemove) {
            // remove只在存在时操作删除
            _this3.isDefined(existIndex) && list.splice(existIndex, 1);
          } else {
            // add: 存在加数量，不存在push
            _this3.isDefined(existIndex) ? list[existIndex].amount++ : list.push(tempData);
          }
          return list;
        });
      });
    }
  }]);

  return cartMixin;
}(_wepy2.default.mixin);

exports.default = cartMixin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuanMiXSwibmFtZXMiOlsiY2FydE1peGluIiwiY2FsbGJhY2siLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsImxpc3QiLCJnZXRBcnJheSIsIiR1cGRhdGVHbG9iYWxEYXRhIiwiaXNGdW5jdGlvbiIsInJlc3VsdCIsImlzQXJyYXkiLCJHQSIsIkdCIiwiaWQiLCJpdGVtIiwiZ2V0Q2FydExpc3QiLCIkZ2V0VXNlckluZm8iLCJwYWNrYWdlcyIsImlzRGVmaW5lZCIsInF1YW50aXR5IiwidGltZXMiLCJjb2RlIiwibWVzc2FnZSIsImxlbmd0aCIsInJlYWxBZGRDYXJ0IiwiZSIsInVwZGF0ZUNhcnQiLCJhcnIiLCJpc1JlbW92ZSIsImdldExpc3QiLCJpc0VxdWFsIiwiaXNHb29kRXF1YWwiLCJpdGVtQXJyIiwibWFwIiwiZ29vZCIsInRlbXBEYXRhIiwiYW1vdW50IiwiYmluZCIsImV4aXN0SW5kZXgiLCJ1bmRlZmluZWQiLCJpIiwic3BsaWNlIiwicHVzaCIsIm1peGluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozs7QUFDbkI7Ozs7Z0NBSVlDLFEsRUFBVTtBQUNwQjtBQUNBLFVBQUksQ0FBQyxLQUFLQyxPQUFOLElBQWlCLENBQUMsS0FBS0EsT0FBTCxDQUFhQyxVQUFuQyxFQUErQyxPQUFPLEtBQVA7QUFDL0M7QUFDQSxVQUFNQyxPQUFPLEtBQUtDLFFBQUwsQ0FBYyxLQUFLSCxPQUFMLENBQWFJLGlCQUFiLENBQStCLE1BQS9CLENBQWQsQ0FBYjtBQUNBO0FBQ0EsVUFBSSxLQUFLQyxVQUFMLENBQWdCTixRQUFoQixDQUFKLEVBQStCO0FBQzdCLFlBQU1PLFNBQVNQLFNBQVNHLElBQVQsQ0FBZjtBQUNBO0FBQ0EsYUFBS0ssT0FBTCxDQUFhRCxNQUFiLEtBQXdCLEtBQUtOLE9BQUwsQ0FBYUksaUJBQWIsQ0FBK0IsTUFBL0IsRUFBdUNFLE1BQXZDLENBQXhCO0FBQ0Q7QUFD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SzVCLFVBQUwsQ0FBZ0JxQixPQUFoQixLQUE0QkEsUUFBUVEsSUFBUixTQUFtQixVQUFDaEMsSUFBRCxFQUFVO0FBQ3ZEO0FBQ0EsY0FBSWlDLGFBQWFDLFNBQWpCO0FBQ0EsY0FBSSxPQUFLL0IsVUFBTCxDQUFnQnNCLE9BQWhCLENBQUosRUFBOEI7QUFDNUIsaUJBQUssSUFBSVUsSUFBSW5DLEtBQUtrQixNQUFMLEdBQWMsQ0FBM0IsRUFBOEJpQixLQUFLLENBQW5DLEVBQXNDQSxHQUF0QyxFQUEyQztBQUN6QyxrQkFBSVYsUUFBUXpCLEtBQUttQyxDQUFMLEVBQVFOLElBQWhCLEVBQXNCQyxTQUFTRCxJQUEvQixDQUFKLEVBQTBDO0FBQ3hDO0FBQ0FJLDZCQUFhRSxDQUFiO0FBQ0E7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQ7QUFDQTtBQUNBLGNBQUlaLFFBQUosRUFBYztBQUNaO0FBQ0EsbUJBQUtWLFNBQUwsQ0FBZW9CLFVBQWYsS0FBOEJqQyxLQUFLb0MsTUFBTCxDQUFZSCxVQUFaLEVBQXdCLENBQXhCLENBQTlCO0FBQ0QsV0FIRCxNQUdPO0FBQ0w7QUFDQSxtQkFBS3BCLFNBQUwsQ0FBZW9CLFVBQWYsSUFBNkJqQyxLQUFLaUMsVUFBTCxFQUFpQkYsTUFBakIsRUFBN0IsR0FBeUQvQixLQUFLcUMsSUFBTCxDQUFVUCxRQUFWLENBQXpEO0FBQ0Q7QUFDRCxpQkFBTzlCLElBQVA7QUFDRCxTQXZCMkIsQ0FBNUI7QUF3QkQsT0EvQkQ7QUFnQ0Q7Ozs7RUEvSG9DLGVBQUtzQyxLOztrQkFBdkIxQyxTIiwiZmlsZSI6ImNhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgeyBzZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlnLmpzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2FydE1peGluIGV4dGVuZHMgd2VweS5taXhpbiB7XHJcbiAgLyoqXHJcbiAgICog5o+Q5L6b6LSt54mp6L2m5oC75YiX6KGoXHJcbiAgICog5qGG5p626ICm5ZCIXHJcbiAgICovXHJcbiAgZ2V0Q2FydExpc3QoY2FsbGJhY2spIHtcclxuICAgIC8vIOWuuemUmVxyXG4gICAgaWYgKCF0aGlzLiRwYXJlbnQgfHwgIXRoaXMuJHBhcmVudC5nbG9iYWxEYXRhKSByZXR1cm4gZmFsc2VcclxuICAgIC8vIOWbnuiwg+aPkOS+m+WVhuWTgeWIl+ihqFxyXG4gICAgY29uc3QgbGlzdCA9IHRoaXMuZ2V0QXJyYXkodGhpcy4kcGFyZW50LiR1cGRhdGVHbG9iYWxEYXRhKCdjYXJ0JykpXHJcbiAgICAvLyDkvJjlhYjmiafooYzlm57osINcclxuICAgIGlmICh0aGlzLmlzRnVuY3Rpb24oY2FsbGJhY2spKSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGNhbGxiYWNrKGxpc3QpXHJcbiAgICAgIC8vIOabtOaWsOi/lOWbnueahOWIl+ihqFxyXG4gICAgICB0aGlzLmlzQXJyYXkocmVzdWx0KSAmJiB0aGlzLiRwYXJlbnQuJHVwZGF0ZUdsb2JhbERhdGEoJ2NhcnQnLCByZXN1bHQpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGlzdFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5Yik5pat5ZWG5ZOB5piv5ZCm5LiA6Ie0XHJcbiAgICog5Lia5Yqh6ICm5ZCIXHJcbiAgICovXHJcbiAgaXNHb29kRXF1YWwoR0EsIEdCKSB7XHJcbiAgICByZXR1cm4gR0EuaWQgPT0gR0IuaWRcclxuICB9XHJcblxyXG4gIC8vIOWKoOWFpei0reeJqei9plxyXG4gIGFkZENhcnQoaXRlbSwgY2FsbGJhY2spIHtcclxuICAgIGNvbnN0IGxpc3QgPSB0aGlzLmdldENhcnRMaXN0KClcclxuXHJcbiAgICAvLyDmoLnmja7nlKjmiLflpZfppJDkv6Hmga/lpITnkIbotK3nianovabmlbDph4/pl67pophcclxuICAgIHRoaXMuJGdldFVzZXJJbmZvKCh7IHBhY2thZ2VzIH0pID0+IHsgICAgICBcclxuICAgICAgaWYgKHRoaXMuaXNEZWZpbmVkKCBwYWNrYWdlcyApKSB7XHJcbiAgICAgICAgLy8g6Kej5p6EOiDlj6/lgJ/mlbDph48v5qyh5pWwXHJcbiAgICAgICAgY29uc3Qge3F1YW50aXR5LCB0aW1lc30gPSBwYWNrYWdlc1xyXG4gICAgICAgIC8vIOWmguaenOayoeacieWPr+WAn+asoeaVsFxyXG4gICAgICAgIGlmICghK3RpbWVzKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5pc0Z1bmN0aW9uKGNhbGxiYWNrKSAmJiBjYWxsYmFjayh7Y29kZTogNDAwMSwgbWVzc2FnZTogJ+aCqOW9k+WJjeS4jeWPr+WAn+mYheWbvuS5pu+8jOivt+i0reS5sOiuoumYheWll+mkkCd9KVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDliKTmlq3mmK/lkKblt7LotoXlh7pcclxuICAgICAgICBpZiAobGlzdC5sZW5ndGggPj0gK3F1YW50aXR5KSB7XHJcbiAgICAgICAgICAvLyDotoXlh7rmj5DnpLpcclxuICAgICAgICAgIHRoaXMuaXNGdW5jdGlvbihjYWxsYmFjaykgJiYgY2FsbGJhY2soe2NvZGU6IDEwMDEsIG1lc3NhZ2U6ICfmgqjnmoTorqLpmIXlm77kuabnmoTmlbDph4/lt7Lovr7liLDkuIrpmZDvvIzor7fliKDpmaTmn5DmnKzlho3lgJ/pmIUnfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8g55yf5Y675Yqg6L2mXHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWxBZGRDYXJ0KGl0ZW0pXHJcbiAgICAgICAgICAgIHRoaXMuaXNGdW5jdGlvbihjYWxsYmFjaykgJiYgY2FsbGJhY2soe2NvZGU6IDAsIG1lc3NhZ2U6ICflgJ/pmIXmiJDlip8nfSlcclxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0Z1bmN0aW9uKGNhbGxiYWNrKSAmJiBjYWxsYmFjayh7Y29kZTogOTAwMSwgbWVzc2FnZTogJ+aVsOaNruW8guW4uO+8jOivt+mHjeaWsOWAn+mYhSd9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmlzRnVuY3Rpb24oY2FsbGJhY2spICYmIGNhbGxiYWNrKHtjb2RlOiA5MDAyLCBtZXNzYWdlOiAn5oKo5pqC5peg5Y+v55So5aWX6aSQLOivt+WFiOi0reS5sOWll+mkkCd9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmVhbEFkZENhcnQoaXRlbSkge1xyXG4gICAgdGhpcy51cGRhdGVDYXJ0KHtcclxuICAgICAgYXJyOiBpdGVtLFxyXG4gICAgICBpc1JlbW92ZTogZmFsc2VcclxuICAgIH0sIHtcclxuICAgICAgZ2V0TGlzdDogdGhpcy5nZXRDYXJ0TGlzdCxcclxuICAgICAgaXNFcXVhbDogdGhpcy5pc0dvb2RFcXVhbFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8vIOS7jui0reeJqei9puenu+mZpFxyXG4gIHJlbW92ZUNhcnQoaXRlbSwgY2FsbGJhY2spIHtcclxuICAgIHRoaXMudXBkYXRlQ2FydCh7XHJcbiAgICAgIGFycjogaXRlbSxcclxuICAgICAgaXNSZW1vdmU6IHRydWVcclxuICAgIH0sIHtcclxuICAgICAgZ2V0TGlzdDogdGhpcy5nZXRDYXJ0TGlzdCxcclxuICAgICAgaXNFcXVhbDogdGhpcy5pc0dvb2RFcXVhbCxcclxuICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrXHJcbiAgICB9KVxyXG4gICAgdGhpcy5pc0Z1bmN0aW9uKGNhbGxiYWNrKSAmJiBjYWxsYmFjayh7Y29kZTogMCwgbWVzc2FnZTogJ+WIoOmZpOaIkOWKnyd9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5pu05paw6LSt54mp6L2m5pWw5o2uXHJcbiAgICogMeOAgei0reeJqei9pue7tOaKpOaAu+WIl+ihqEFSUuS4juS8oOWFpeWIl+ihqGFycueahOWFs+ezu1xyXG4gICAqIDLjgIHlr7lBUlLlj6rmnInlop7lkozlh49cclxuICAgKiAz44CB5aKe5YeP6YC76L6R5pSv5oyB5Lyg5YWl5Ye95pWw5Yik5patXHJcbiAgICogNOOAgei/lOWbnuaTjeS9nOWQjueahOWIl+ihqFxyXG4gICAqIOS4muWKoS/moYbmnrbml6DlhbNcclxuICAgKi9cclxuICB1cGRhdGVDYXJ0KHthcnIsIGlzUmVtb3ZlfSwge2dldExpc3QsIGlzRXF1YWx9KSB7XHJcbiAgICAvLyDmlbTnkIbmlbDmja5cclxuICAgIGNvbnN0IGl0ZW1BcnIgPSB0aGlzLmlzQXJyYXkoYXJyKSA/IGFyciA6IFthcnJdXHJcblxyXG4gICAgLy8g5b6q546v5aSE55CGXHJcbiAgICBpdGVtQXJyLm1hcCgoZ29vZCkgPT4ge1xyXG4gICAgICAvLyDmnoTpgKDmlbDmja5cclxuICAgICAgY29uc3QgdGVtcERhdGEgPSB7XHJcbiAgICAgICAgZ29vZDogZ29vZCxcclxuICAgICAgICBhbW91bnQ6IDFcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5pc0Z1bmN0aW9uKGdldExpc3QpICYmIGdldExpc3QuYmluZCh0aGlzKSgobGlzdCkgPT4ge1xyXG4gICAgICAgIC8vIOWvueavlOWOu+mHjVxyXG4gICAgICAgIGxldCBleGlzdEluZGV4ID0gdW5kZWZpbmVkXHJcbiAgICAgICAgaWYgKHRoaXMuaXNGdW5jdGlvbihpc0VxdWFsKSkge1xyXG4gICAgICAgICAgZm9yICh2YXIgaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgaWYgKGlzRXF1YWwobGlzdFtpXS5nb29kLCB0ZW1wRGF0YS5nb29kKSkge1xyXG4gICAgICAgICAgICAgIC8vIOWPluWHuuWtmOWcqOeahOW6j+WPt1xyXG4gICAgICAgICAgICAgIGV4aXN0SW5kZXggPSBpXHJcbiAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5a2Y5Zyo5pe277yMYWRk5aKe5Yqg5pWw6YeP77yMcmVtb3Zl55u05o6l5Yig6ZmkXHJcbiAgICAgICAgLy8g5LiN5a2Y5Zyo5pe277yMYWRk55u05o6l5aKe5YqgXHJcbiAgICAgICAgaWYgKGlzUmVtb3ZlKSB7XHJcbiAgICAgICAgICAvLyByZW1vdmXlj6rlnKjlrZjlnKjml7bmk43kvZzliKDpmaRcclxuICAgICAgICAgIHRoaXMuaXNEZWZpbmVkKGV4aXN0SW5kZXgpICYmIGxpc3Quc3BsaWNlKGV4aXN0SW5kZXgsIDEpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIGFkZDog5a2Y5Zyo5Yqg5pWw6YeP77yM5LiN5a2Y5ZyocHVzaFxyXG4gICAgICAgICAgdGhpcy5pc0RlZmluZWQoZXhpc3RJbmRleCkgPyBsaXN0W2V4aXN0SW5kZXhdLmFtb3VudCsrIDogbGlzdC5wdXNoKHRlbXBEYXRhKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGlzdFxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIl19