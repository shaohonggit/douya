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

var SmallClass = function (_wepy$page) {
    _inherits(SmallClass, _wepy$page);

    function SmallClass() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, SmallClass);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SmallClass.__proto__ || Object.getPrototypeOf(SmallClass)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default], _this.config = {
            navigationBarTitleText: '成长值排名'
        }, _this.data = {
            items: [{ name: '品德素质', id: 'moral' }, { name: '专业素质', id: 'major' }, { name: '身心素质', id: 'physical' }, { name: '综合能力', id: 'integrative' }]

            // computed = {
            //   smallclass() {
            //     return this.getObject(this.smallclass)
            //   }
            // }

            // watch = {
            //   smallclass (newValue, oldValue) {
            //       // console.log(`sm: ${oldValue} -> ${newValue}`)
            //   }
            // }

            // onReady() {
            //   this.initPageData()
            // }

        }, _this.methods = {}, _this.components = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SmallClass, [{
        key: 'onLoad',
        value: function onLoad(option) {
            console.log(option);
            // console.log(option.params)
            // wx.request({
            //   url: 'http://localhost/douyalocal2019.4.9/smallclass.php?broadHeading=' + option.params,
            //   // url: 'https://www.v2ex.com/api/topics/show.json?id=520',
            //   method: 'GET',
            //   header: {
            //     'content-type': 'application/json'
            //   },
            //   success: (res) => {
            //     console.log(res.data)
            //     // console.log(typeof (res.data))
            //     // var serverdata = res.data
            //     // console.log(serverdata[0].smallName)
            //     // console.log(typeof (serverdata))
            //     // console.log(res.data[1])
            //     this.smallclass = res.data
            //     this.$apply()
            //     // console.log(this.smallclass)
            //     // console.log('webdata:', this.webdata)
            //   },
            //   fail: (res) => {
            //     console.log('denglu.fail:', res)
            //   }
            // })
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }, {
        key: 'onReady',
        value: function onReady() {}
        // initPageData() {

        // }

    }]);

    return SmallClass;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(SmallClass , 'pages/user/developRank'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldmVsb3BSYW5rLmpzIl0sIm5hbWVzIjpbIlNtYWxsQ2xhc3MiLCJtaXhpbnMiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsIml0ZW1zIiwibmFtZSIsImlkIiwibWV0aG9kcyIsImNvbXBvbmVudHMiLCJvcHRpb24iLCJjb25zb2xlIiwibG9nIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxVOzs7Ozs7Ozs7Ozs7OztrTUFDbkJDLE0sR0FBUyxnQixRQUNUQyxNLEdBQVM7QUFDUEMsb0NBQXdCO0FBRGpCLFMsUUFHVEMsSSxHQUFPO0FBQ0xDLG1CQUFPLENBQ0wsRUFBQ0MsTUFBTSxNQUFQLEVBQWVDLElBQUksT0FBbkIsRUFESyxFQUVMLEVBQUNELE1BQU0sTUFBUCxFQUFlQyxJQUFJLE9BQW5CLEVBRkssRUFHTCxFQUFDRCxNQUFNLE1BQVAsRUFBZUMsSUFBSSxVQUFuQixFQUhLLEVBSUwsRUFBQ0QsTUFBTSxNQUFQLEVBQWVDLElBQUksYUFBbkIsRUFKSzs7QUFRVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQXZCTyxTLFFBK0RQQyxPLEdBQVUsRSxRQUdWQyxVLEdBQWEsRTs7Ozs7K0JBekNOQyxNLEVBQVE7QUFDYkMsb0JBQVFDLEdBQVIsQ0FBWUYsTUFBWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOzs7aUNBRVEsQ0FFUjs7O2tDQUNTLENBRVQ7QUFDRDs7QUFFQTs7Ozs7RUFsRXNDLGVBQUtHLEk7O2tCQUF4QmIsVSIsImZpbGUiOiJkZXZlbG9wUmFuay5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IGJhc2UgZnJvbSAnLi4vLi4vbWl4aW5zL2Jhc2UnXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNtYWxsQ2xhc3MgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgbWl4aW5zID0gW2Jhc2VdXHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJDplb/lgLzmjpLlkI0nXHJcbiAgICB9XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBpdGVtczogW1xyXG4gICAgICAgIHtuYW1lOiAn5ZOB5b6357Sg6LSoJywgaWQ6ICdtb3JhbCd9LFxyXG4gICAgICAgIHtuYW1lOiAn5LiT5Lia57Sg6LSoJywgaWQ6ICdtYWpvcid9LFxyXG4gICAgICAgIHtuYW1lOiAn6Lqr5b+D57Sg6LSoJywgaWQ6ICdwaHlzaWNhbCd9LFxyXG4gICAgICAgIHtuYW1lOiAn57u85ZCI6IO95YqbJywgaWQ6ICdpbnRlZ3JhdGl2ZSd9XHJcbiAgICAgIF1cclxuICAgIH1cclxuXHJcbiAgICAvLyBjb21wdXRlZCA9IHtcclxuICAgIC8vICAgc21hbGxjbGFzcygpIHtcclxuICAgIC8vICAgICByZXR1cm4gdGhpcy5nZXRPYmplY3QodGhpcy5zbWFsbGNsYXNzKVxyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gd2F0Y2ggPSB7XHJcbiAgICAvLyAgIHNtYWxsY2xhc3MgKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgLy8gICAgICAgLy8gY29uc29sZS5sb2coYHNtOiAke29sZFZhbHVlfSAtPiAke25ld1ZhbHVlfWApXHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBvblJlYWR5KCkge1xyXG4gICAgLy8gICB0aGlzLmluaXRQYWdlRGF0YSgpXHJcbiAgICAvLyB9XHJcblxyXG4gICAgb25Mb2FkKG9wdGlvbikge1xyXG4gICAgICBjb25zb2xlLmxvZyhvcHRpb24pXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKG9wdGlvbi5wYXJhbXMpXHJcbiAgICAgIC8vIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAvLyAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3QvZG91eWFsb2NhbDIwMTkuNC45L3NtYWxsY2xhc3MucGhwP2Jyb2FkSGVhZGluZz0nICsgb3B0aW9uLnBhcmFtcyxcclxuICAgICAgLy8gICAvLyB1cmw6ICdodHRwczovL3d3dy52MmV4LmNvbS9hcGkvdG9waWNzL3Nob3cuanNvbj9pZD01MjAnLFxyXG4gICAgICAvLyAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIC8vICAgaGVhZGVyOiB7XHJcbiAgICAgIC8vICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgIC8vICAgfSxcclxuICAgICAgLy8gICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcclxuICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHR5cGVvZiAocmVzLmRhdGEpKVxyXG4gICAgICAvLyAgICAgLy8gdmFyIHNlcnZlcmRhdGEgPSByZXMuZGF0YVxyXG4gICAgICAvLyAgICAgLy8gY29uc29sZS5sb2coc2VydmVyZGF0YVswXS5zbWFsbE5hbWUpXHJcbiAgICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyh0eXBlb2YgKHNlcnZlcmRhdGEpKVxyXG4gICAgICAvLyAgICAgLy8gY29uc29sZS5sb2cocmVzLmRhdGFbMV0pXHJcbiAgICAgIC8vICAgICB0aGlzLnNtYWxsY2xhc3MgPSByZXMuZGF0YVxyXG4gICAgICAvLyAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAvLyAgICAgLy8gY29uc29sZS5sb2codGhpcy5zbWFsbGNsYXNzKVxyXG4gICAgICAvLyAgICAgLy8gY29uc29sZS5sb2coJ3dlYmRhdGE6JywgdGhpcy53ZWJkYXRhKVxyXG4gICAgICAvLyAgIH0sXHJcbiAgICAgIC8vICAgZmFpbDogKHJlcykgPT4ge1xyXG4gICAgICAvLyAgICAgY29uc29sZS5sb2coJ2RlbmdsdS5mYWlsOicsIHJlcylcclxuICAgICAgLy8gICB9XHJcbiAgICAgIC8vIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25TaG93KCkge1xyXG5cclxuICAgIH1cclxuICAgIG9uUmVhZHkoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgLy8gaW5pdFBhZ2VEYXRhKCkge1xyXG5cclxuICAgIC8vIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudHMgPSB7XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=