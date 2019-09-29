'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../../config.js');

var _base = require('./../../mixins/base.js');

var _base2 = _interopRequireDefault(_base);

var _http = require('./../../mixins/http.js');

var _http2 = _interopRequireDefault(_http);

var _checkboxButton = require('./../../components/checkboxButton.js');

var _checkboxButton2 = _interopRequireDefault(_checkboxButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mainSearch = function (_wepy$page) {
  _inherits(mainSearch, _wepy$page);

  function mainSearch() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, mainSearch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = mainSearch.__proto__ || Object.getPrototypeOf(mainSearch)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default, _http2.default], _this.config = {
      navigationBarTitleText: '分类选择'
    }, _this.data = {
      key1: '',
      key2: '',
      key3: '',
      key4: '',
      title1: '',
      title2: '',
      title3: '',
      title4: '',
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      items1: undefined,
      items2: undefined,
      items3: undefined,
      items4: undefined,
      lists: [
        // {
        //   key: 'age',
        //   title: 'name',
        //   value: '',
        //   list: [
        //     {name: 'xxx', value: '1'},
        //     {name: 'yyy', value: '2'}
        //   ]
        // }
      ]
    }, _this.methods = {
      search: function search() {
        var _this2 = this;

        var params = { title: [] };[1, 2, 3, 4].map(function (i) {
          var items = 'items' + i;
          var value = 'value' + i;
          var key = 'key' + i;
          if (_this2[value] && _this2[key]) {
            params['' + _this2[key]] = _this2.isArray(_this2[value]) ? _this2[value] : [_this2[value]];
          }
          // 整理条件对应的文案信息
          if (_this2[items]) {
            var titleArr = _this2.getArray(_this2[items]).filter(function (item) {
              return _this2.getArray(params['' + _this2[key]]).indexOf(_this2.getString(item.value)) > -1;
            }).map(function (item) {
              return item.name;
            });
            if (titleArr && titleArr.length) {
              params.title = [].concat(_toConsumableArray(params.title), _toConsumableArray(titleArr));
            }
          }
        });
        params.title = params.title.join(' ');
        wx.redirectTo({
          url: '/pages/main/list?params=' + JSON.stringify(params)
        });
      }
    }, _this.$repeat = {}, _this.$props = { "checkboxButton1": { "xmlns:v-bind": "", "v-bind:title.sync": "title1", "v-bind:list.sync": "items1", "v-bind:value.sync": "value1" }, "checkboxButton2": { "v-bind:title.sync": "title2", "v-bind:list.sync": "items2", "v-bind:value.sync": "value2" }, "checkboxButton3": { "v-bind:title.sync": "title3", "v-bind:list.sync": "items3", "v-bind:value.sync": "value3" }, "checkboxButton4": { "v-bind:title.sync": "title4", "v-bind:list.sync": "items4", "v-bind:value.sync": "value4" } }, _this.$events = {}, _this.components = {
      checkboxButton1: _checkboxButton2.default,
      checkboxButton2: _checkboxButton2.default,
      checkboxButton3: _checkboxButton2.default,
      checkboxButton4: _checkboxButton2.default
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(mainSearch, [{
    key: 'onLoad',
    value: function onLoad(query) {
      var _$parse = this.$parse(query && query.params),
          index = _$parse.index,
          value = _$parse.value;

      if (index && value) {
        // 多选时，预置对应value为对应数组
        this['value' + index] = [].concat(_toConsumableArray(this.getArray(value, [this.getString(value, '1')])));
      }
    }
  }, {
    key: 'onReady',
    value: function onReady() {
      // 初始化页面数据
      this.initPageData();
    }
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      wx.stopPullDownRefresh();
    }

    // 初始化页面数据

  }, {
    key: 'initPageData',
    value: function initPageData() {
      var _this3 = this;

      // 获取tag列表
      this.$get({ url: _config.service.tags }, {
        success: function success(_ref2) {
          var code = _ref2.code,
              data = _ref2.data;

          // data = [{
          //   code: 'demo',
          //   name: 'title',
          //   list: [
          //     {name: 'xxx', value: '1'},
          //     {name: 'yyy', value: '2'}
          //   ]
          // }]
          var arr = _this3.getArray(data);
          var lists = arr.map(function (_ref3, i) {
            var code = _ref3.code,
                name = _ref3.name,
                list = _ref3.list;

            return {
              key: code,
              title: name,
              list: list && list.map(function (item, index) {
                return {
                  name: item && item.name,
                  value: item && item.value,
                  checked: function () {
                    // 由于组件内不方便实现检测list变化及时初始化预算项
                    // 故在此hack，预处理checked属性
                    var value = _this3['value' + (i + 1)];
                    return value && value.indexOf ? value.indexOf(_this3.getString(index + 1)) > -1 : false;
                  }()
                };
              })
            };
          });
          _this3.lists = lists;

          for (var i = lists.length - 1; i >= 0; i--) {
            _this3['key' + (i + 1)] = lists[i].key;
            _this3['items' + (i + 1)] = lists[i].list;
            _this3['title' + (i + 1)] = lists[i].title;
          }
        },
        fail: function fail(_ref4) {
          var code = _ref4.code,
              data = _ref4.data;

          // 如果获取失败，就直接跳转到列表页
          wx.redirectTo({
            url: '/pages/main/list'
          });
        }
      });
    }
  }]);

  return mainSearch;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(mainSearch , 'pages/main/search'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5qcyJdLCJuYW1lcyI6WyJtYWluU2VhcmNoIiwibWl4aW5zIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJrZXkxIiwia2V5MiIsImtleTMiLCJrZXk0IiwidGl0bGUxIiwidGl0bGUyIiwidGl0bGUzIiwidGl0bGU0IiwidmFsdWUxIiwidmFsdWUyIiwidmFsdWUzIiwidmFsdWU0IiwiaXRlbXMxIiwidW5kZWZpbmVkIiwiaXRlbXMyIiwiaXRlbXMzIiwiaXRlbXM0IiwibGlzdHMiLCJtZXRob2RzIiwic2VhcmNoIiwicGFyYW1zIiwidGl0bGUiLCJtYXAiLCJpIiwiaXRlbXMiLCJ2YWx1ZSIsImtleSIsImlzQXJyYXkiLCJ0aXRsZUFyciIsImdldEFycmF5IiwiZmlsdGVyIiwiaXRlbSIsImluZGV4T2YiLCJnZXRTdHJpbmciLCJuYW1lIiwibGVuZ3RoIiwiam9pbiIsInd4IiwicmVkaXJlY3RUbyIsInVybCIsIkpTT04iLCJzdHJpbmdpZnkiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjaGVja2JveEJ1dHRvbjEiLCJjaGVja2JveEJ1dHRvbjIiLCJjaGVja2JveEJ1dHRvbjMiLCJjaGVja2JveEJ1dHRvbjQiLCJxdWVyeSIsIiRwYXJzZSIsImluZGV4IiwiaW5pdFBhZ2VEYXRhIiwic3RvcFB1bGxEb3duUmVmcmVzaCIsIiRnZXQiLCJ0YWdzIiwic3VjY2VzcyIsImNvZGUiLCJhcnIiLCJsaXN0IiwiY2hlY2tlZCIsImZhaWwiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFU7Ozs7Ozs7Ozs7Ozs7OzhMQUNuQkMsTSxHQUFTLGdDLFFBQ1RDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsWUFBTSxFQUREO0FBRUxDLFlBQU0sRUFGRDtBQUdMQyxZQUFNLEVBSEQ7QUFJTEMsWUFBTSxFQUpEO0FBS0xDLGNBQVEsRUFMSDtBQU1MQyxjQUFRLEVBTkg7QUFPTEMsY0FBUSxFQVBIO0FBUUxDLGNBQVEsRUFSSDtBQVNMQyxjQUFRLEVBVEg7QUFVTEMsY0FBUSxFQVZIO0FBV0xDLGNBQVEsRUFYSDtBQVlMQyxjQUFRLEVBWkg7QUFhTEMsY0FBUUMsU0FiSDtBQWNMQyxjQUFRRCxTQWRIO0FBZUxFLGNBQVFGLFNBZkg7QUFnQkxHLGNBQVFILFNBaEJIO0FBaUJMSSxhQUFPO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEs7QUFqQkYsSyxRQWdHUEMsTyxHQUFVO0FBQ1JDLFlBRFEsb0JBQ0M7QUFBQTs7QUFDUCxZQUFNQyxTQUFTLEVBQUNDLE9BQU8sRUFBUixFQUFmLENBQ0MsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWFDLEdBQWIsQ0FBaUIsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3ZCLGNBQU1DLGtCQUFnQkQsQ0FBdEI7QUFDQSxjQUFNRSxrQkFBZ0JGLENBQXRCO0FBQ0EsY0FBTUcsY0FBWUgsQ0FBbEI7QUFDQSxjQUFJLE9BQUtFLEtBQUwsS0FBZSxPQUFLQyxHQUFMLENBQW5CLEVBQThCO0FBQzVCTix3QkFBVSxPQUFLTSxHQUFMLENBQVYsSUFBeUIsT0FBS0MsT0FBTCxDQUFhLE9BQUtGLEtBQUwsQ0FBYixJQUE0QixPQUFLQSxLQUFMLENBQTVCLEdBQTBDLENBQUMsT0FBS0EsS0FBTCxDQUFELENBQW5FO0FBQ0Q7QUFDRDtBQUNBLGNBQUksT0FBS0QsS0FBTCxDQUFKLEVBQWlCO0FBQ2YsZ0JBQU1JLFdBQVcsT0FBS0MsUUFBTCxDQUFjLE9BQUtMLEtBQUwsQ0FBZCxFQUEyQk0sTUFBM0IsQ0FBa0MsVUFBQ0MsSUFBRCxFQUFVO0FBQzNELHFCQUFPLE9BQUtGLFFBQUwsQ0FBY1QsWUFBVSxPQUFLTSxHQUFMLENBQVYsQ0FBZCxFQUFzQ00sT0FBdEMsQ0FBOEMsT0FBS0MsU0FBTCxDQUFlRixLQUFLTixLQUFwQixDQUE5QyxJQUE0RSxDQUFDLENBQXBGO0FBQ0QsYUFGZ0IsRUFFZEgsR0FGYyxDQUVWLFVBQUNTLElBQUQsRUFBVTtBQUNmLHFCQUFPQSxLQUFLRyxJQUFaO0FBQ0QsYUFKZ0IsQ0FBakI7QUFLQSxnQkFBSU4sWUFBWUEsU0FBU08sTUFBekIsRUFBaUM7QUFDL0JmLHFCQUFPQyxLQUFQLGdDQUFtQkQsT0FBT0MsS0FBMUIsc0JBQW9DTyxRQUFwQztBQUNEO0FBQ0Y7QUFDRixTQWxCQTtBQW1CRFIsZUFBT0MsS0FBUCxHQUFlRCxPQUFPQyxLQUFQLENBQWFlLElBQWIsQ0FBa0IsR0FBbEIsQ0FBZjtBQUNBQyxXQUFHQyxVQUFILENBQWM7QUFDWkMsNENBQWdDQyxLQUFLQyxTQUFMLENBQWVyQixNQUFmO0FBRHBCLFNBQWQ7QUFHRDtBQTFCTyxLLFFBNkJYc0IsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsbUJBQWtCLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLFFBQXZDLEVBQWdELG9CQUFtQixRQUFuRSxFQUE0RSxxQkFBb0IsUUFBaEcsRUFBbkIsRUFBNkgsbUJBQWtCLEVBQUMscUJBQW9CLFFBQXJCLEVBQThCLG9CQUFtQixRQUFqRCxFQUEwRCxxQkFBb0IsUUFBOUUsRUFBL0ksRUFBdU8sbUJBQWtCLEVBQUMscUJBQW9CLFFBQXJCLEVBQThCLG9CQUFtQixRQUFqRCxFQUEwRCxxQkFBb0IsUUFBOUUsRUFBelAsRUFBaVYsbUJBQWtCLEVBQUMscUJBQW9CLFFBQXJCLEVBQThCLG9CQUFtQixRQUFqRCxFQUEwRCxxQkFBb0IsUUFBOUUsRUFBblcsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkMsK0NBRFE7QUFFUkMsK0NBRlE7QUFHUkMsK0NBSFE7QUFJUkM7QUFKUSxLOzs7OzsyQkFsR0hDLEssRUFBTztBQUFBLG9CQUNXLEtBQUtDLE1BQUwsQ0FBWUQsU0FBU0EsTUFBTTlCLE1BQTNCLENBRFg7QUFBQSxVQUNMZ0MsS0FESyxXQUNMQSxLQURLO0FBQUEsVUFDRTNCLEtBREYsV0FDRUEsS0FERjs7QUFFWixVQUFJMkIsU0FBUzNCLEtBQWIsRUFBb0I7QUFDbEI7QUFDQSx1QkFBYTJCLEtBQWIsaUNBQTRCLEtBQUt2QixRQUFMLENBQWNKLEtBQWQsRUFBcUIsQ0FBQyxLQUFLUSxTQUFMLENBQWVSLEtBQWYsRUFBc0IsR0FBdEIsQ0FBRCxDQUFyQixDQUE1QjtBQUNEO0FBQ0Y7Ozs4QkFFUztBQUNSO0FBQ0EsV0FBSzRCLFlBQUw7QUFDRDs7O3dDQUVtQjtBQUNsQmhCLFNBQUdpQixtQkFBSDtBQUNEOztBQUVEOzs7O21DQUNlO0FBQUE7O0FBQ2I7QUFDQSxXQUFLQyxJQUFMLENBQVUsRUFBQ2hCLEtBQUssZ0JBQVFpQixJQUFkLEVBQVYsRUFBK0I7QUFDN0JDLGlCQUFTLHdCQUFrQjtBQUFBLGNBQWhCQyxJQUFnQixTQUFoQkEsSUFBZ0I7QUFBQSxjQUFWM0QsSUFBVSxTQUFWQSxJQUFVOztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBTTRELE1BQU0sT0FBSzlCLFFBQUwsQ0FBYzlCLElBQWQsQ0FBWjtBQUNBLGNBQU1rQixRQUFRMEMsSUFBSXJDLEdBQUosQ0FBUSxpQkFBcUJDLENBQXJCLEVBQTJCO0FBQUEsZ0JBQXpCbUMsSUFBeUIsU0FBekJBLElBQXlCO0FBQUEsZ0JBQW5CeEIsSUFBbUIsU0FBbkJBLElBQW1CO0FBQUEsZ0JBQWIwQixJQUFhLFNBQWJBLElBQWE7O0FBQy9DLG1CQUFPO0FBQ0xsQyxtQkFBS2dDLElBREE7QUFFTHJDLHFCQUFPYSxJQUZGO0FBR0wwQixvQkFBTUEsUUFBUUEsS0FBS3RDLEdBQUwsQ0FBUyxVQUFDUyxJQUFELEVBQU9xQixLQUFQLEVBQWlCO0FBQ3RDLHVCQUFPO0FBQ0xsQix3QkFBTUgsUUFBUUEsS0FBS0csSUFEZDtBQUVMVCx5QkFBT00sUUFBUUEsS0FBS04sS0FGZjtBQUdMb0MsMkJBQVUsWUFBTTtBQUNkO0FBQ0E7QUFDQSx3QkFBTXBDLFFBQVEsa0JBQWFGLElBQUksQ0FBakIsRUFBZDtBQUNBLDJCQUFPRSxTQUFTQSxNQUFNTyxPQUFmLEdBQXlCUCxNQUFNTyxPQUFOLENBQWMsT0FBS0MsU0FBTCxDQUFlbUIsUUFBUSxDQUF2QixDQUFkLElBQTJDLENBQUMsQ0FBckUsR0FBeUUsS0FBaEY7QUFDRCxtQkFMUTtBQUhKLGlCQUFQO0FBVUQsZUFYYTtBQUhULGFBQVA7QUFnQkQsV0FqQmEsQ0FBZDtBQWtCQSxpQkFBS25DLEtBQUwsR0FBYUEsS0FBYjs7QUFFQSxlQUFLLElBQUlNLElBQUlOLE1BQU1rQixNQUFOLEdBQWUsQ0FBNUIsRUFBK0JaLEtBQUssQ0FBcEMsRUFBdUNBLEdBQXZDLEVBQTRDO0FBQzFDLDRCQUFXQSxJQUFJLENBQWYsS0FBc0JOLE1BQU1NLENBQU4sRUFBU0csR0FBL0I7QUFDQSw4QkFBYUgsSUFBSSxDQUFqQixLQUF3Qk4sTUFBTU0sQ0FBTixFQUFTcUMsSUFBakM7QUFDQSw4QkFBYXJDLElBQUksQ0FBakIsS0FBd0JOLE1BQU1NLENBQU4sRUFBU0YsS0FBakM7QUFDRDtBQUNGLFNBcEM0QjtBQXFDN0J5QyxjQUFNLHFCQUFrQjtBQUFBLGNBQWhCSixJQUFnQixTQUFoQkEsSUFBZ0I7QUFBQSxjQUFWM0QsSUFBVSxTQUFWQSxJQUFVOztBQUN0QjtBQUNBc0MsYUFBR0MsVUFBSCxDQUFjO0FBQ1pDO0FBRFksV0FBZDtBQUdEO0FBMUM0QixPQUEvQjtBQTRDRDs7OztFQW5HcUMsZUFBS3dCLEk7O2tCQUF4QnBFLFUiLCJmaWxlIjoic2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgeyBzZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29uZmlnLmpzJ1xyXG4gIGltcG9ydCBiYXNlIGZyb20gJy4uLy4uL21peGlucy9iYXNlJ1xyXG4gIGltcG9ydCBodHRwIGZyb20gJy4uLy4uL21peGlucy9odHRwJ1xyXG4gIGltcG9ydCBjaGVja2JveEJ1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NoZWNrYm94QnV0dG9uJ1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBtYWluU2VhcmNoIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIG1peGlucyA9IFtiYXNlLCBodHRwXVxyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5YiG57G76YCJ5oupJ1xyXG4gICAgfVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAga2V5MTogJycsXHJcbiAgICAgIGtleTI6ICcnLFxyXG4gICAgICBrZXkzOiAnJyxcclxuICAgICAga2V5NDogJycsXHJcbiAgICAgIHRpdGxlMTogJycsXHJcbiAgICAgIHRpdGxlMjogJycsXHJcbiAgICAgIHRpdGxlMzogJycsXHJcbiAgICAgIHRpdGxlNDogJycsXHJcbiAgICAgIHZhbHVlMTogJycsXHJcbiAgICAgIHZhbHVlMjogJycsXHJcbiAgICAgIHZhbHVlMzogJycsXHJcbiAgICAgIHZhbHVlNDogJycsXHJcbiAgICAgIGl0ZW1zMTogdW5kZWZpbmVkLFxyXG4gICAgICBpdGVtczI6IHVuZGVmaW5lZCxcclxuICAgICAgaXRlbXMzOiB1bmRlZmluZWQsXHJcbiAgICAgIGl0ZW1zNDogdW5kZWZpbmVkLFxyXG4gICAgICBsaXN0czogW1xyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgIGtleTogJ2FnZScsXHJcbiAgICAgICAgLy8gICB0aXRsZTogJ25hbWUnLFxyXG4gICAgICAgIC8vICAgdmFsdWU6ICcnLFxyXG4gICAgICAgIC8vICAgbGlzdDogW1xyXG4gICAgICAgIC8vICAgICB7bmFtZTogJ3h4eCcsIHZhbHVlOiAnMSd9LFxyXG4gICAgICAgIC8vICAgICB7bmFtZTogJ3l5eScsIHZhbHVlOiAnMid9XHJcbiAgICAgICAgLy8gICBdXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICBdXHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKHF1ZXJ5KSB7XHJcbiAgICAgIGNvbnN0IHtpbmRleCwgdmFsdWV9ID0gdGhpcy4kcGFyc2UocXVlcnkgJiYgcXVlcnkucGFyYW1zKVxyXG4gICAgICBpZiAoaW5kZXggJiYgdmFsdWUpIHtcclxuICAgICAgICAvLyDlpJrpgInml7bvvIzpooTnva7lr7nlupR2YWx1ZeS4uuWvueW6lOaVsOe7hFxyXG4gICAgICAgIHRoaXNbYHZhbHVlJHtpbmRleH1gXSA9IFsuLi50aGlzLmdldEFycmF5KHZhbHVlLCBbdGhpcy5nZXRTdHJpbmcodmFsdWUsICcxJyldKV1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uUmVhZHkoKSB7XHJcbiAgICAgIC8vIOWIneWni+WMlumhtemdouaVsOaNrlxyXG4gICAgICB0aGlzLmluaXRQYWdlRGF0YSgpXHJcbiAgICB9XHJcblxyXG4gICAgb25QdWxsRG93blJlZnJlc2goKSB7XHJcbiAgICAgIHd4LnN0b3BQdWxsRG93blJlZnJlc2goKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOWIneWni+WMlumhtemdouaVsOaNrlxyXG4gICAgaW5pdFBhZ2VEYXRhKCkge1xyXG4gICAgICAvLyDojrflj5Z0YWfliJfooahcclxuICAgICAgdGhpcy4kZ2V0KHt1cmw6IHNlcnZpY2UudGFnc30sIHtcclxuICAgICAgICBzdWNjZXNzOiAoe2NvZGUsIGRhdGF9KSA9PiB7XHJcbiAgICAgICAgICAvLyBkYXRhID0gW3tcclxuICAgICAgICAgIC8vICAgY29kZTogJ2RlbW8nLFxyXG4gICAgICAgICAgLy8gICBuYW1lOiAndGl0bGUnLFxyXG4gICAgICAgICAgLy8gICBsaXN0OiBbXHJcbiAgICAgICAgICAvLyAgICAge25hbWU6ICd4eHgnLCB2YWx1ZTogJzEnfSxcclxuICAgICAgICAgIC8vICAgICB7bmFtZTogJ3l5eScsIHZhbHVlOiAnMid9XHJcbiAgICAgICAgICAvLyAgIF1cclxuICAgICAgICAgIC8vIH1dXHJcbiAgICAgICAgICBjb25zdCBhcnIgPSB0aGlzLmdldEFycmF5KGRhdGEpXHJcbiAgICAgICAgICBjb25zdCBsaXN0cyA9IGFyci5tYXAoKHtjb2RlLCBuYW1lLCBsaXN0fSwgaSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIGtleTogY29kZSxcclxuICAgICAgICAgICAgICB0aXRsZTogbmFtZSxcclxuICAgICAgICAgICAgICBsaXN0OiBsaXN0ICYmIGxpc3QubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgbmFtZTogaXRlbSAmJiBpdGVtLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBpdGVtICYmIGl0ZW0udmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6ICgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g55Sx5LqO57uE5Lu25YaF5LiN5pa55L6/5a6e546w5qOA5rWLbGlzdOWPmOWMluWPiuaXtuWIneWni+WMlumihOeul+mhuVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOaVheWcqOatpGhhY2vvvIzpooTlpITnkIZjaGVja2Vk5bGe5oCnXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzW2B2YWx1ZSR7aSArIDF9YF1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUuaW5kZXhPZiA/IHZhbHVlLmluZGV4T2YodGhpcy5nZXRTdHJpbmcoaW5kZXggKyAxKSkgPiAtMSA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgIH0pKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgdGhpcy5saXN0cyA9IGxpc3RzXHJcblxyXG4gICAgICAgICAgZm9yICh2YXIgaSA9IGxpc3RzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIHRoaXNbYGtleSR7aSArIDF9YF0gPSBsaXN0c1tpXS5rZXlcclxuICAgICAgICAgICAgdGhpc1tgaXRlbXMke2kgKyAxfWBdID0gbGlzdHNbaV0ubGlzdFxyXG4gICAgICAgICAgICB0aGlzW2B0aXRsZSR7aSArIDF9YF0gPSBsaXN0c1tpXS50aXRsZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbDogKHtjb2RlLCBkYXRhfSkgPT4ge1xyXG4gICAgICAgICAgLy8g5aaC5p6c6I635Y+W5aSx6LSl77yM5bCx55u05o6l6Lez6L2s5Yiw5YiX6KGo6aG1XHJcbiAgICAgICAgICB3eC5yZWRpcmVjdFRvKHtcclxuICAgICAgICAgICAgdXJsOiBgL3BhZ2VzL21haW4vbGlzdGBcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIHNlYXJjaCgpIHtcclxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7dGl0bGU6IFtdfVxyXG4gICAgICAgIDtbMSwgMiwgMywgNF0ubWFwKChpKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBpdGVtcyA9IGBpdGVtcyR7aX1gXHJcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IGB2YWx1ZSR7aX1gXHJcbiAgICAgICAgICBjb25zdCBrZXkgPSBga2V5JHtpfWBcclxuICAgICAgICAgIGlmICh0aGlzW3ZhbHVlXSAmJiB0aGlzW2tleV0pIHtcclxuICAgICAgICAgICAgcGFyYW1zW2Ake3RoaXNba2V5XX1gXSA9IHRoaXMuaXNBcnJheSh0aGlzW3ZhbHVlXSkgPyB0aGlzW3ZhbHVlXSA6IFt0aGlzW3ZhbHVlXV1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIOaVtOeQhuadoeS7tuWvueW6lOeahOaWh+ahiOS/oeaBr1xyXG4gICAgICAgICAgaWYgKHRoaXNbaXRlbXNdKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlQXJyID0gdGhpcy5nZXRBcnJheSh0aGlzW2l0ZW1zXSkuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXJyYXkocGFyYW1zW2Ake3RoaXNba2V5XX1gXSkuaW5kZXhPZih0aGlzLmdldFN0cmluZyhpdGVtLnZhbHVlKSkgPiAtMVxyXG4gICAgICAgICAgICB9KS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gaXRlbS5uYW1lXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGlmICh0aXRsZUFyciAmJiB0aXRsZUFyci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICBwYXJhbXMudGl0bGUgPSBbLi4ucGFyYW1zLnRpdGxlLCAuLi50aXRsZUFycl1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcGFyYW1zLnRpdGxlID0gcGFyYW1zLnRpdGxlLmpvaW4oJyAnKVxyXG4gICAgICAgIHd4LnJlZGlyZWN0VG8oe1xyXG4gICAgICAgICAgdXJsOiBgL3BhZ2VzL21haW4vbGlzdD9wYXJhbXM9JHtKU09OLnN0cmluZ2lmeShwYXJhbXMpfWBcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImNoZWNrYm94QnV0dG9uMVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGl0bGUuc3luY1wiOlwidGl0bGUxXCIsXCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJpdGVtczFcIixcInYtYmluZDp2YWx1ZS5zeW5jXCI6XCJ2YWx1ZTFcIn0sXCJjaGVja2JveEJ1dHRvbjJcIjp7XCJ2LWJpbmQ6dGl0bGUuc3luY1wiOlwidGl0bGUyXCIsXCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJpdGVtczJcIixcInYtYmluZDp2YWx1ZS5zeW5jXCI6XCJ2YWx1ZTJcIn0sXCJjaGVja2JveEJ1dHRvbjNcIjp7XCJ2LWJpbmQ6dGl0bGUuc3luY1wiOlwidGl0bGUzXCIsXCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJpdGVtczNcIixcInYtYmluZDp2YWx1ZS5zeW5jXCI6XCJ2YWx1ZTNcIn0sXCJjaGVja2JveEJ1dHRvbjRcIjp7XCJ2LWJpbmQ6dGl0bGUuc3luY1wiOlwidGl0bGU0XCIsXCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJpdGVtczRcIixcInYtYmluZDp2YWx1ZS5zeW5jXCI6XCJ2YWx1ZTRcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICBjaGVja2JveEJ1dHRvbjE6IGNoZWNrYm94QnV0dG9uLFxyXG4gICAgICBjaGVja2JveEJ1dHRvbjI6IGNoZWNrYm94QnV0dG9uLFxyXG4gICAgICBjaGVja2JveEJ1dHRvbjM6IGNoZWNrYm94QnV0dG9uLFxyXG4gICAgICBjaGVja2JveEJ1dHRvbjQ6IGNoZWNrYm94QnV0dG9uXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=