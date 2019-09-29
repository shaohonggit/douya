'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _http = require('./../../mixins/http.js');

var _http2 = _interopRequireDefault(_http);

var _base = require('./../../mixins/base.js');

var _base2 = _interopRequireDefault(_base);

var _cart = require('./../../mixins/cart.js');

var _cart2 = _interopRequireDefault(_cart);

var _user = require('./../../mixins/user.js');

var _user2 = _interopRequireDefault(_user);

var _demo = require('./../../mixins/demo.js');

var _swiper = require('./../../components/swiper.js');

var _swiper2 = _interopRequireDefault(_swiper);

var _screen = require('./../../components/screen.js');

var _screen2 = _interopRequireDefault(_screen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { service } from '../../config.js'


var mainDetail = function (_wepy$page) {
  _inherits(mainDetail, _wepy$page);

  function mainDetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, mainDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = mainDetail.__proto__ || Object.getPrototypeOf(mainDetail)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default, _http2.default, _cart2.default, _user2.default], _this.config = {
      navigationBarTitleText: '图书详情'
    }, _this.data = {
      img_banner: '/images/swiper.png',
      icon_star: '/images/icon/icon-star@2x.png',
      icon_star_active: '/images/icon/icon-star-active@2x.png',
      icon_shelf: '/images/tabbars/icon-shelf@2x.png',
      navigate: false,
      book: {
        id: '1825',
        name: '假如生活欺骗了你',
        author: '普希金',
        tags: ['诗歌', '普希金'],
        pubtime: '1825年',
        pubcompany: '俄国',
        image: '',
        images: _demo.funImages.slice().map(function (item) {
          return { image: item };
        }),
        stock: 1,
        exist: 0,
        desc: [{ type: 'text', value: '示例tip：下拉本页，随机改变状态~' }, { type: 'image', value: '/images/swiper.png' }, { type: 'text', value: '假如生活欺骗了你，' }, { type: 'text', value: '不要悲伤，不要心急！' }, { type: 'text', value: '忧郁的日子里须要镇静：' }, { type: 'text', value: '相信吧，快乐的日子将会来临！' }, { type: 'text', value: '心儿永远向往着未来；' }, { type: 'text', value: '现在却常是忧郁。' }, { type: 'text', value: '一切都是瞬息，一切都将会过去；' }, { type: 'text', value: '而那过去了的，就会成为亲切的怀恋。' }]
      }
    }, _this.computed = {
      banners: function banners() {
        return this.getArray(this.book && this.book.images);
      },
      description: function description() {
        var desc = this.book && this.book.desc;
        return desc || [{
          type: 'text',
          value: '暂无图书简介'
        }];
      },
      isCollect: function isCollect() {
        return Boolean(this.book && +this.book.collected);
      },
      isEnabled: function isEnabled() {
        return Boolean(this.book && +this.book.stock > 0);
      }
    }, _this.methods = {
      toStar: function toStar() {
        // 将要发生的收藏动作
        var newType = this.isCollect ? 0 : 1;
        var newTypeText = newType ? '添加' : '取消';

        // 根据业务接口处理数据
        // this.$post({url: service.collect, data: {}}, {
        //   success: ({code, data}) => {},
        //   fail: ({code, data}) => {}
        // })

        // ===== 以下随机示例 =====
        // 重置本书收藏状态
        this.book.collected = newType;
        wx.showToast({
          title: newTypeText + '\u6536\u85CF\uFF01',
          icon: 'success',
          duration: 1000
        });
      },
      toBorrow: function toBorrow() {
        // 查看书架
        wx.switchTab({ url: '/pages/borrow' });
      },
      toAdd: function toAdd(book) {
        var _this2 = this;

        // 根据业务接口处理数据
        this.addCart({
          id: book.id,
          name: book.name,
          author: book.author
        }, function (_ref2) {
          var code = _ref2.code,
              message = _ref2.message;

          var exist = _this2.getObject(_this2.book).exist;
          // 匹配加车状态
          switch (+code) {
            case 0:
              {
                if (exist) {
                  // 存在本书时，引导查看书架
                  _this2.methods.toBorrow();
                } else {
                  // 不存在则提示添加成功
                  wx.showToast({
                    title: '添加到书架成功！',
                    icon: 'success',
                    duration: 1000
                  });
                  // 临时打标
                  _this2.book.exist = true;
                }
                break;
              }
            // 超出书架可添加的最大值
            case 1001:
              {
                if (message && !exist) {
                  // 不存在本书时，提示去书架删减其他书
                  wx.showModal({
                    title: '温馨提示',
                    content: message,
                    showCancel: false,
                    success: function success() {
                      _this2.methods.toBorrow();
                    }
                  });
                } else {
                  // 存在本书时，直接引导查看书架
                  _this2.methods.toBorrow();
                }
                break;
              }
            case 4001:
              ;
            case 9002:
              {
                // 去购买套餐
                wx.navigateTo({ url: '/pages/borrow/subscribe' });
                break;
              }
            default:
              {
                // 加车失败，提示
                _this2.$alert('异常提示', message || '暂时无法借阅');
              }
          }
        });
      }
    }, _this.$repeat = {}, _this.$props = { "Swiper": { "xmlns:v-bind": "", "v-bind:list.sync": "banners", "height": "200", "v-bind:navigate.once": "navigate" }, "Screen": { "class": "fixed-bottom" } }, _this.$events = {}, _this.components = {
      Swiper: _swiper2.default,
      Screen: _screen2.default
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(mainDetail, [{
    key: 'onLoad',
    value: function onLoad(query) {
      var _this3 = this;

      var id = query && +query.id;
      var title = query && query.title;
      var author = query && query.author;
      var status = query && +query.status;

      // ======== 此处示例代码，方便示例展示 ========
      setTimeout(function () {
        _this3.book = Object.assign({}, _this3.book, {
          id: _this3.getString(id) || _this3.book.id,
          name: title || '假如生活欺骗了你',
          author: author || '普希金',
          stock: Math.abs((status || Math.round(Math.random())) - 1)
        });
        _this3.$apply();
      }, 1000);
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      // 初始化页面数据
      this.initPageData();
    }
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      this.initPageData();
    }

    // 初始化页面数据

  }, {
    key: 'initPageData',
    value: function initPageData() {
      // 请求图书详情
      this.getDetail();
    }

    // 获取图书信息

  }, {
    key: 'getDetail',
    value: function getDetail() {
      var _this4 = this;

      // 根据业务接口处理数据
      // this.$get({url: `${service.detail}?id=${this.id}`}, {
      //   success: ({code, data}) => {},
      //   fail: ({code, data}) => {}
      // })

      // 获取书架状态，优化本页交互
      var ids = this.getCartList().filter(function (_ref3) {
        var good = _ref3.good;
        return good;
      }).map(function (_ref4) {
        var good = _ref4.good;
        return _this4.getString(good.id);
      });
      // 标识本商品已存在书架中
      if (ids.indexOf(this.getString(this.book.id)) > -1) {
        this.book.exist = 1;
      }
      // 切换展示库存: 0/1
      this.book.stock = Math.abs(this.book.stock - 1);

      // ===== 随机示例：借完 -> 已加 -> 可借 -> 借完~ =====
      // const stock = this.book.stock
      // const exist = this.book.exist
      // this.book.stock = exist
      // this.book.exist = (stock + exist) % 2

      // 停止下拉状态
      wx.stopPullDownRefresh();
    }
  }]);

  return mainDetail;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(mainDetail , 'pages/main/detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qcyJdLCJuYW1lcyI6WyJtYWluRGV0YWlsIiwibWl4aW5zIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJpbWdfYmFubmVyIiwiaWNvbl9zdGFyIiwiaWNvbl9zdGFyX2FjdGl2ZSIsImljb25fc2hlbGYiLCJuYXZpZ2F0ZSIsImJvb2siLCJpZCIsIm5hbWUiLCJhdXRob3IiLCJ0YWdzIiwicHVidGltZSIsInB1YmNvbXBhbnkiLCJpbWFnZSIsImltYWdlcyIsInNsaWNlIiwibWFwIiwiaXRlbSIsInN0b2NrIiwiZXhpc3QiLCJkZXNjIiwidHlwZSIsInZhbHVlIiwiY29tcHV0ZWQiLCJiYW5uZXJzIiwiZ2V0QXJyYXkiLCJkZXNjcmlwdGlvbiIsImlzQ29sbGVjdCIsIkJvb2xlYW4iLCJjb2xsZWN0ZWQiLCJpc0VuYWJsZWQiLCJtZXRob2RzIiwidG9TdGFyIiwibmV3VHlwZSIsIm5ld1R5cGVUZXh0Iiwid3giLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsInRvQm9ycm93Iiwic3dpdGNoVGFiIiwidXJsIiwidG9BZGQiLCJhZGRDYXJ0IiwiY29kZSIsIm1lc3NhZ2UiLCJnZXRPYmplY3QiLCJzaG93TW9kYWwiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsInN1Y2Nlc3MiLCJuYXZpZ2F0ZVRvIiwiJGFsZXJ0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiU3dpcGVyIiwiU2NyZWVuIiwicXVlcnkiLCJzdGF0dXMiLCJzZXRUaW1lb3V0IiwiT2JqZWN0IiwiYXNzaWduIiwiZ2V0U3RyaW5nIiwiTWF0aCIsImFicyIsInJvdW5kIiwicmFuZG9tIiwiJGFwcGx5IiwiaW5pdFBhZ2VEYXRhIiwiZ2V0RGV0YWlsIiwiaWRzIiwiZ2V0Q2FydExpc3QiLCJmaWx0ZXIiLCJnb29kIiwiaW5kZXhPZiIsInN0b3BQdWxsRG93blJlZnJlc2giLCJwYWdlIl0sIm1hcHBp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Ukg7QUFTRDs7OzZCQUVRO0FBQ1A7QUFDQSxXQUFLQyxZQUFMO0FBQ0Q7Ozt3Q0FFbUI7QUFDbEIsV0FBS0EsWUFBTDtBQUNEOztBQUVEOzs7O21DQUNlO0FBQ2I7QUFDQSxXQUFLQyxTQUFMO0FBQ0Q7O0FBRUQ7Ozs7Z0NBQ1k7QUFBQTs7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBTUMsTUFBTSxLQUFLQyxXQUFMLEdBQW1CQyxNQUFuQixDQUEwQjtBQUFBLFlBQUVDLElBQUYsU0FBRUEsSUFBRjtBQUFBLGVBQVlBLElBQVo7QUFBQSxPQUExQixFQUE0QzVELEdBQTVDLENBQWdEO0FBQUEsWUFBRTRELElBQUYsU0FBRUEsSUFBRjtBQUFBLGVBQVksT0FBS1gsU0FBTCxDQUFlVyxLQUFLckUsRUFBcEIsQ0FBWjtBQUFBLE9BQWhELENBQVo7QUFDQTtBQUNBLFVBQUlrRSxJQUFJSSxPQUFKLENBQVksS0FBS1osU0FBTCxDQUFlLEtBQUszRCxJQUFMLENBQVVDLEVBQXpCLENBQVosSUFBNEMsQ0FBQyxDQUFqRCxFQUFvRDtBQUNsRCxhQUFLRCxJQUFMLENBQVVhLEtBQVYsR0FBa0IsQ0FBbEI7QUFDRDtBQUNEO0FBQ0EsV0FBS2IsSUFBTCxDQUFVWSxLQUFWLEdBQWtCZ0QsS0FBS0MsR0FBTCxDQUFTLEtBQUs3RCxJQUFMLENBQVVZLEtBQVYsR0FBa0IsQ0FBM0IsQ0FBbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBaUIsU0FBRzJDLG1CQUFIO0FBQ0Q7Ozs7RUFwSHFDLGVBQUtDLEk7O2tCQUF4Qm5GLFUiLCJmaWxlIjoiZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICAvLyBpbXBvcnQgeyBzZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29uZmlnLmpzJ1xyXG4gIGltcG9ydCBodHRwIGZyb20gJy4uLy4uL21peGlucy9odHRwJ1xyXG4gIGltcG9ydCBiYXNlIGZyb20gJy4uLy4uL21peGlucy9iYXNlJ1xyXG4gIGltcG9ydCBjYXJ0IGZyb20gJy4uLy4uL21peGlucy9jYXJ0J1xyXG4gIGltcG9ydCB1c2VyIGZyb20gJy4uLy4uL21peGlucy91c2VyJ1xyXG4gIGltcG9ydCB7IGZ1bkltYWdlcyB9IGZyb20gJy4uLy4uL21peGlucy9kZW1vJ1xyXG4gIGltcG9ydCBTd2lwZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zd2lwZXInXHJcbiAgaW1wb3J0IFNjcmVlbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL3NjcmVlbidcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgbWFpbkRldGFpbCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBtaXhpbnMgPSBbYmFzZSwgaHR0cCwgY2FydCwgdXNlcl1cclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WbvuS5puivpuaDhSdcclxuICAgIH1cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIGltZ19iYW5uZXI6ICcvaW1hZ2VzL3N3aXBlci5wbmcnLFxyXG4gICAgICBpY29uX3N0YXI6ICcvaW1hZ2VzL2ljb24vaWNvbi1zdGFyQDJ4LnBuZycsXHJcbiAgICAgIGljb25fc3Rhcl9hY3RpdmU6ICcvaW1hZ2VzL2ljb24vaWNvbi1zdGFyLWFjdGl2ZUAyeC5wbmcnLFxyXG4gICAgICBpY29uX3NoZWxmOiAnL2ltYWdlcy90YWJiYXJzL2ljb24tc2hlbGZAMngucG5nJyxcclxuICAgICAgbmF2aWdhdGU6IGZhbHNlLFxyXG4gICAgICBib29rOiB7XHJcbiAgICAgICAgaWQ6ICcxODI1JyxcclxuICAgICAgICBuYW1lOiAn5YGH5aaC55Sf5rS75qy66aqX5LqG5L2gJyxcclxuICAgICAgICBhdXRob3I6ICfmma7luIzph5EnLFxyXG4gICAgICAgIHRhZ3M6IFsn6K+X5q2MJywgJ+aZruW4jOmHkSddLFxyXG4gICAgICAgIHB1YnRpbWU6ICcxODI15bm0JyxcclxuICAgICAgICBwdWJjb21wYW55OiAn5L+E5Zu9JyxcclxuICAgICAgICBpbWFnZTogJycsXHJcbiAgICAgICAgaW1hZ2VzOiBmdW5JbWFnZXMuc2xpY2UoKS5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4geyBpbWFnZTogaXRlbSB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgc3RvY2s6IDEsXHJcbiAgICAgICAgZXhpc3Q6IDAsXHJcbiAgICAgICAgZGVzYzogW1xyXG4gICAgICAgICAge3R5cGU6ICd0ZXh0JywgdmFsdWU6ICfnpLrkvot0aXDvvJrkuIvmi4nmnKzpobXvvIzpmo/mnLrmlLnlj5jnirbmgIF+J30sXHJcbiAgICAgICAgICB7dHlwZTogJ2ltYWdlJywgdmFsdWU6ICcvaW1hZ2VzL3N3aXBlci5wbmcnfSxcclxuICAgICAgICAgIHt0eXBlOiAndGV4dCcsIHZhbHVlOiAn5YGH5aaC55Sf5rS75qy66aqX5LqG5L2g77yMJ30sXHJcbiAgICAgICAgICB7dHlwZTogJ3RleHQnLCB2YWx1ZTogJ+S4jeimgeaCsuS8pO+8jOS4jeimgeW/g+aApe+8gSd9LFxyXG4gICAgICAgICAge3R5cGU6ICd0ZXh0JywgdmFsdWU6ICflv6fpg4HnmoTml6XlrZDph4zpobvopoHplYfpnZnvvJonfSxcclxuICAgICAgICAgIHt0eXBlOiAndGV4dCcsIHZhbHVlOiAn55u45L+h5ZCn77yM5b+r5LmQ55qE5pel5a2Q5bCG5Lya5p2l5Li077yBJ30sXHJcbiAgICAgICAgICB7dHlwZTogJ3RleHQnLCB2YWx1ZTogJ+W/g+WEv+awuOi/nOWQkeW+gOedgOacquadpe+8myd9LFxyXG4gICAgICAgICAge3R5cGU6ICd0ZXh0JywgdmFsdWU6ICfnjrDlnKjljbTluLjmmK/lv6fpg4HjgIInfSxcclxuICAgICAgICAgIHt0eXBlOiAndGV4dCcsIHZhbHVlOiAn5LiA5YiH6YO95piv556s5oGv77yM5LiA5YiH6YO95bCG5Lya6L+H5Y6777ybJ30sXHJcbiAgICAgICAgICB7dHlwZTogJ3RleHQnLCB2YWx1ZTogJ+iAjOmCo+i/h+WOu+S6hueahO+8jOWwseS8muaIkOS4uuS6suWIh+eahOaAgOaBi+OAgid9XHJcbiAgICAgICAgXVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcHV0ZWQgPSB7XHJcbiAgICAgIGJhbm5lcnMgKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEFycmF5KHRoaXMuYm9vayAmJiB0aGlzLmJvb2suaW1hZ2VzKVxyXG4gICAgICB9LFxyXG4gICAgICBkZXNjcmlwdGlvbigpIHtcclxuICAgICAgICBjb25zdCBkZXNjID0gdGhpcy5ib29rICYmIHRoaXMuYm9vay5kZXNjXHJcbiAgICAgICAgcmV0dXJuIGRlc2MgfHwgW3tcclxuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgIHZhbHVlOiAn5pqC5peg5Zu+5Lmm566A5LuLJ1xyXG4gICAgICAgIH1dXHJcbiAgICAgIH0sXHJcbiAgICAgIGlzQ29sbGVjdCgpIHtcclxuICAgICAgICByZXR1cm4gQm9vbGVhbih0aGlzLmJvb2sgJiYgK3RoaXMuYm9vay5jb2xsZWN0ZWQpXHJcbiAgICAgIH0sXHJcbiAgICAgIGlzRW5hYmxlZCgpIHtcclxuICAgICAgICByZXR1cm4gQm9vbGVhbih0aGlzLmJvb2sgJiYgK3RoaXMuYm9vay5zdG9jayA+IDApXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQocXVlcnkpIHtcclxuICAgICAgY29uc3QgaWQgPSBxdWVyeSAmJiArcXVlcnkuaWRcclxuICAgICAgY29uc3QgdGl0bGUgPSBxdWVyeSAmJiBxdWVyeS50aXRsZVxyXG4gICAgICBjb25zdCBhdXRob3IgPSBxdWVyeSAmJiBxdWVyeS5hdXRob3JcclxuICAgICAgY29uc3Qgc3RhdHVzID0gcXVlcnkgJiYgK3F1ZXJ5LnN0YXR1c1xyXG5cclxuICAgICAgLy8gPT09PT09PT0g5q2k5aSE56S65L6L5Luj56CB77yM5pa55L6/56S65L6L5bGV56S6ID09PT09PT09XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuYm9vayA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuYm9vaywge1xyXG4gICAgICAgICAgaWQ6IHRoaXMuZ2V0U3RyaW5nKGlkKSB8fCB0aGlzLmJvb2suaWQsXHJcbiAgICAgICAgICBuYW1lOiB0aXRsZSB8fCAn5YGH5aaC55Sf5rS75qy66aqX5LqG5L2gJyxcclxuICAgICAgICAgIGF1dGhvcjogYXV0aG9yIHx8ICfmma7luIzph5EnLFxyXG4gICAgICAgICAgc3RvY2s6IE1hdGguYWJzKChzdGF0dXMgfHwgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKSkgLSAxKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICB9LCAxMDAwKVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2hvdygpIHtcclxuICAgICAgLy8g5Yid5aeL5YyW6aG16Z2i5pWw5o2uXHJcbiAgICAgIHRoaXMuaW5pdFBhZ2VEYXRhKClcclxuICAgIH1cclxuXHJcbiAgICBvblB1bGxEb3duUmVmcmVzaCgpIHtcclxuICAgICAgdGhpcy5pbml0UGFnZURhdGEoKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOWIneWni+WMlumhtemdouaVsOaNrlxyXG4gICAgaW5pdFBhZ2VEYXRhKCkge1xyXG4gICAgICAvLyDor7fmsYLlm77kuabor6bmg4VcclxuICAgICAgdGhpcy5nZXREZXRhaWwoKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOiOt+WPluWbvuS5puS/oeaBr1xyXG4gICAgZ2V0RGV0YWlsKCkge1xyXG4gICAgICAvLyDmoLnmja7kuJrliqHmjqXlj6PlpITnkIbmlbDmja5cclxuICAgICAgLy8gdGhpcy4kZ2V0KHt1cmw6IGAke3NlcnZpY2UuZGV0YWlsfT9pZD0ke3RoaXMuaWR9YH0sIHtcclxuICAgICAgLy8gICBzdWNjZXNzOiAoe2NvZGUsIGRhdGF9KSA9PiB7fSxcclxuICAgICAgLy8gICBmYWlsOiAoe2NvZGUsIGRhdGF9KSA9PiB7fVxyXG4gICAgICAvLyB9KVxyXG5cclxuICAgICAgLy8g6I635Y+W5Lmm5p6254q25oCB77yM5LyY5YyW5pys6aG15Lqk5LqSXHJcbiAgICAgIGNvbnN0IGlkcyA9IHRoaXMuZ2V0Q2FydExpc3QoKS5maWx0ZXIoKHtnb29kfSkgPT4gZ29vZCkubWFwKCh7Z29vZH0pID0+IHRoaXMuZ2V0U3RyaW5nKGdvb2QuaWQpKVxyXG4gICAgICAvLyDmoIfor4bmnKzllYblk4Hlt7LlrZjlnKjkuabmnrbkuK1cclxuICAgICAgaWYgKGlkcy5pbmRleE9mKHRoaXMuZ2V0U3RyaW5nKHRoaXMuYm9vay5pZCkpID4gLTEpIHtcclxuICAgICAgICB0aGlzLmJvb2suZXhpc3QgPSAxXHJcbiAgICAgIH1cclxuICAgICAgLy8g5YiH5o2i5bGV56S65bqT5a2YOiAwLzFcclxuICAgICAgdGhpcy5ib29rLnN0b2NrID0gTWF0aC5hYnModGhpcy5ib29rLnN0b2NrIC0gMSlcclxuXHJcbiAgICAgIC8vID09PT09IOmaj+acuuekuuS+i++8muWAn+WujCAtPiDlt7LliqAgLT4g5Y+v5YCfIC0+IOWAn+WujH4gPT09PT1cclxuICAgICAgLy8gY29uc3Qgc3RvY2sgPSB0aGlzLmJvb2suc3RvY2tcclxuICAgICAgLy8gY29uc3QgZXhpc3QgPSB0aGlzLmJvb2suZXhpc3RcclxuICAgICAgLy8gdGhpcy5ib29rLnN0b2NrID0gZXhpc3RcclxuICAgICAgLy8gdGhpcy5ib29rLmV4aXN0ID0gKHN0b2NrICsgZXhpc3QpICUgMlxyXG5cclxuICAgICAgLy8g5YGc5q2i5LiL5ouJ54q25oCBXHJcbiAgICAgIHd4LnN0b3BQdWxsRG93blJlZnJlc2goKVxyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIHRvU3RhcigpIHtcclxuICAgICAgICAvLyDlsIbopoHlj5HnlJ/nmoTmlLbol4/liqjkvZxcclxuICAgICAgICBjb25zdCBuZXdUeXBlID0gdGhpcy5pc0NvbGxlY3QgPyAwIDogMVxyXG4gICAgICAgIGNvbnN0IG5ld1R5cGVUZXh0ID0gbmV3VHlwZSA/ICfmt7vliqAnIDogJ+WPlua2iCdcclxuXHJcbiAgICAgICAgLy8g5qC55o2u5Lia5Yqh5o6l5Y+j5aSE55CG5pWw5o2uXHJcbiAgICAgICAgLy8gdGhpcy4kcG9zdCh7dXJsOiBzZXJ2aWNlLmNvbGxlY3QsIGRhdGE6IHt9fSwge1xyXG4gICAgICAgIC8vICAgc3VjY2VzczogKHtjb2RlLCBkYXRhfSkgPT4ge30sXHJcbiAgICAgICAgLy8gICBmYWlsOiAoe2NvZGUsIGRhdGF9KSA9PiB7fVxyXG4gICAgICAgIC8vIH0pXHJcblxyXG4gICAgICAgIC8vID09PT09IOS7peS4i+maj+acuuekuuS+iyA9PT09PVxyXG4gICAgICAgIC8vIOmHjee9ruacrOS5puaUtuiXj+eKtuaAgVxyXG4gICAgICAgIHRoaXMuYm9vay5jb2xsZWN0ZWQgPSBuZXdUeXBlXHJcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgIHRpdGxlOiBgJHtuZXdUeXBlVGV4dH3mlLbol4/vvIFgLFxyXG4gICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgZHVyYXRpb246IDEwMDBcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICB0b0JvcnJvdygpIHtcclxuICAgICAgICAvLyDmn6XnnIvkuabmnrZcclxuICAgICAgICB3eC5zd2l0Y2hUYWIoe3VybDogJy9wYWdlcy9ib3Jyb3cnfSlcclxuICAgICAgfSxcclxuICAgICAgdG9BZGQoYm9vaykge1xyXG4gICAgICAgIC8vIOagueaNruS4muWKoeaOpeWPo+WkhOeQhuaVsOaNrlxyXG4gICAgICAgIHRoaXMuYWRkQ2FydCh7XHJcbiAgICAgICAgICBpZDogYm9vay5pZCxcclxuICAgICAgICAgIG5hbWU6IGJvb2submFtZSxcclxuICAgICAgICAgIGF1dGhvcjogYm9vay5hdXRob3JcclxuICAgICAgICB9LCAoe2NvZGUsIG1lc3NhZ2V9KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBleGlzdCA9IHRoaXMuZ2V0T2JqZWN0KHRoaXMuYm9vaykuZXhpc3RcclxuICAgICAgICAgIC8vIOWMuemFjeWKoOi9pueKtuaAgVxyXG4gICAgICAgICAgc3dpdGNoICgrY29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIDA6IHtcclxuICAgICAgICAgICAgICBpZiAoZXhpc3QpIHtcclxuICAgICAgICAgICAgICAgIC8vIOWtmOWcqOacrOS5puaXtu+8jOW8leWvvOafpeeci+S5puaetlxyXG4gICAgICAgICAgICAgICAgdGhpcy5tZXRob2RzLnRvQm9ycm93KClcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8g5LiN5a2Y5Zyo5YiZ5o+Q56S65re75Yqg5oiQ5YqfXHJcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICB0aXRsZTogJ+a3u+WKoOWIsOS5puaetuaIkOWKn++8gScsXHJcbiAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAvLyDkuLTml7bmiZPmoIdcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9vay5leGlzdCA9IHRydWVcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDotoXlh7rkuabmnrblj6/mt7vliqDnmoTmnIDlpKflgLxcclxuICAgICAgICAgICAgY2FzZSAxMDAxOiB7XHJcbiAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UgJiYgIWV4aXN0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyDkuI3lrZjlnKjmnKzkuabml7bvvIzmj5DnpLrljrvkuabmnrbliKDlh4/lhbbku5bkuaZcclxuICAgICAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5rip6aao5o+Q56S6JyxcclxuICAgICAgICAgICAgICAgICAgY29udGVudDogbWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1ldGhvZHMudG9Cb3Jyb3coKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyDlrZjlnKjmnKzkuabml7bvvIznm7TmjqXlvJXlr7zmn6XnnIvkuabmnrZcclxuICAgICAgICAgICAgICAgIHRoaXMubWV0aG9kcy50b0JvcnJvdygpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSA0MDAxOiA7XHJcbiAgICAgICAgICAgIGNhc2UgOTAwMjoge1xyXG4gICAgICAgICAgICAgIC8vIOWOu+i0reS5sOWll+mkkFxyXG4gICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe3VybDogJy9wYWdlcy9ib3Jyb3cvc3Vic2NyaWJlJ30pXHJcbiAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgLy8g5Yqg6L2m5aSx6LSl77yM5o+Q56S6XHJcbiAgICAgICAgICAgICAgdGhpcy4kYWxlcnQoJ+W8guW4uOaPkOekuicsIG1lc3NhZ2UgfHwgJ+aaguaXtuaXoOazleWAn+mYhScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIlN3aXBlclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJiYW5uZXJzXCIsXCJoZWlnaHRcIjpcIjIwMFwiLFwidi1iaW5kOm5hdmlnYXRlLm9uY2VcIjpcIm5hdmlnYXRlXCJ9LFwiU2NyZWVuXCI6e1wiY2xhc3NcIjpcImZpeGVkLWJvdHRvbVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgIFN3aXBlcixcclxuICAgICAgU2NyZWVuXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=