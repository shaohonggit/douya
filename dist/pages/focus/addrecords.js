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
      navigationBarTitleText: '添加纪实'
    }, _this.data = {
      recordName: [],
      date: '2018-5-1',
      recordNote: [],
      recordScore: [],
      recordHeading: [], // 项目所属大类类别，上层获取
      // reEventID: [ ],   // 项目所属事项ID，上层获取
      // reEventName: [ ],  // 项目所属事项名称，上层获取
      level: ['国家级', '省级', '市级', '校级', '院级', '其他'],
      grade: ['一等', '二等', '三等', '其他'],
      // score: [[50, 35, 30], [30, 20, 15], [18, 12, 8], [12, 8, 5], [5, 3, 2]],
      levelIndex: 0,
      gradeIndex: 0
      // type: 0
    }, _this.methods = {
      nameInput: function nameInput(e) {
        this.recordName = e.detail.value;
      },
      noteInput: function noteInput(e) {
        this.recordNote = e.detail.value;
      },
      scoreInput: function scoreInput(e) {
        this.recordScore = e.detail.value;
      }
    }, _this.components = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SmallClass, [{
    key: 'bindDateChange',
    value: function bindDateChange(e) {
      this.date = e.detail.value;
    }
  }, {
    key: 'bindlevelChange',
    value: function bindlevelChange(e) {
      console.log('picker发生选择改变，携带值为', e.detail.value);
      this.levelIndex = e.detail.value;
      console.log('picker发生选择改变，携带值为', this.level[this.levelIndex]);
    }
  }, {
    key: 'bindgradeChange',
    value: function bindgradeChange(e) {
      console.log('picker发生选择改变，携带值为', e.detail.value);
      this.gradeIndex = e.detail.value;
      console.log('picker发生选择改变，携带值为', this.grade[this.gradeIndex]);
    }
  }, {
    key: 'onLoad',
    value: function onLoad(option) {
      console.log('option:', option);
      this.recordHeading = option.broadHeading;
      // this.reEventID = option.eventID
      // this.reEventName = option.eventName
    }
  }, {
    key: 'focus',
    value: function focus(option) {
      var _this2 = this;

      // console.log(option.params)
      wx.request({
        url: 'https://douyaer.applinzi.com/addrecords.php?',
        // url: 'https://www.v2ex.com/api/topics/show.json?id=520',
        data: {
          username: this.$parent.globalData.student.username,
          number: this.$parent.globalData.student.number,
          class: this.$parent.globalData.student.class,
          // eventID: this.reEventID,
          // eventName: this.reEventName,
          reHeading: this.recordHeading,
          reName: this.recordName,
          time: this.date,
          note: this.recordNote,
          score: this.recordScore,
          level: this.level[this.levelIndex],
          grade: this.grade[this.gradeIndex]
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


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(SmallClass , 'pages/focus/addrecords'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZHJlY29yZHMuanMiXSwibmFtZXMiOlsiU21hbGxDbGFzcyIsIm1peGlucyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwicmVjb3JkTmFtZSIsImRhdGUiLCJyZWNvcmROb3RlIiwicmVjb3JkU2NvcmUiLCJyZWNvcmRIZWFkaW5nIiwibGV2ZWwiLCJncmFkZSIsImxldmVsSW5kZXgiLCJncmFkZUluZGV4IiwibWV0aG9kcyIsIm5hbWVJbnB1dCIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsIm5vdGVJbnB1dCIsInNjb3JlSW5wdXQiLCJjb21wb25lbnRzIiwiY29uc29sZSIsImxvZyIsIm9wdGlvbiIsImJyb2FkSGVhZGluZyIsInd4IiwicmVxdWVzdCIsInVybCIsInVzZXJuYW1lIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJzdHVkZW50IiwibnVtYmVyIiwiY2xhc3MiLCJyZUhlYWRpbmciLCJyZU5hbWUiLCJ0aW1lIiwibm90ZSIsInNjb3JlIiwibWV0aG9kIiwiaGVhZGVyIiwic3VjY2VzcyIsInJlcyIsIiRhcHBseSIsIiRhbGVydCIsImZhaWwiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFU7Ozs7Ozs7Ozs7Ozs7OzhMQUNuQkMsTSxHQUFTLGdCLFFBQ1RDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsa0JBQVksRUFEUDtBQUVMQyxZQUFNLFVBRkQ7QUFHTEMsa0JBQVksRUFIUDtBQUlMQyxtQkFBYSxFQUpSO0FBS0xDLHFCQUFlLEVBTFYsRUFLa0I7QUFDdkI7QUFDQTtBQUNBQyxhQUFPLENBQUMsS0FBRCxFQUFRLElBQVIsRUFBYyxJQUFkLEVBQW9CLElBQXBCLEVBQTBCLElBQTFCLEVBQWdDLElBQWhDLENBUkY7QUFTTEMsYUFBTyxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQixDQVRGO0FBVUw7QUFDQUMsa0JBQVksQ0FYUDtBQVlMQyxrQkFBWTtBQUNaO0FBYkssSyxRQWlGUEMsTyxHQUFVO0FBQ1JDLGVBRFEscUJBQ0dDLENBREgsRUFDTTtBQUNaLGFBQUtYLFVBQUwsR0FBa0JXLEVBQUVDLE1BQUYsQ0FBU0MsS0FBM0I7QUFDRCxPQUhPO0FBSVJDLGVBSlEscUJBSUVILENBSkYsRUFJSztBQUNYLGFBQUtULFVBQUwsR0FBa0JTLEVBQUVDLE1BQUYsQ0FBU0MsS0FBM0I7QUFDRCxPQU5PO0FBT1JFLGdCQVBRLHNCQU9HSixDQVBILEVBT007QUFDWixhQUFLUixXQUFMLEdBQW1CUSxFQUFFQyxNQUFGLENBQVNDLEtBQTVCO0FBQ0Q7QUFUTyxLLFFBWVZHLFUsR0FBYSxFOzs7OzttQ0E3RUVMLEMsRUFBRztBQUNoQixXQUFLVixJQUFMLEdBQVlVLEVBQUVDLE1BQUYsQ0FBU0MsS0FBckI7QUFDRDs7O29DQUNlRixDLEVBQUc7QUFDakJNLGNBQVFDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQ1AsRUFBRUMsTUFBRixDQUFTQyxLQUExQztBQUNBLFdBQUtOLFVBQUwsR0FBa0JJLEVBQUVDLE1BQUYsQ0FBU0MsS0FBM0I7QUFDQUksY0FBUUMsR0FBUixDQUFZLG1CQUFaLEVBQWlDLEtBQUtiLEtBQUwsQ0FBVyxLQUFLRSxVQUFoQixDQUFqQztBQUNEOzs7b0NBQ2VJLEMsRUFBRztBQUNqQk0sY0FBUUMsR0FBUixDQUFZLG1CQUFaLEVBQWlDUCxFQUFFQyxNQUFGLENBQVNDLEtBQTFDO0FBQ0EsV0FBS0wsVUFBTCxHQUFrQkcsRUFBRUMsTUFBRixDQUFTQyxLQUEzQjtBQUNBSSxjQUFRQyxHQUFSLENBQVksbUJBQVosRUFBaUMsS0FBS1osS0FBTCxDQUFXLEtBQUtFLFVBQWhCLENBQWpDO0FBQ0Q7OzsyQkFFTVcsTSxFQUFRO0FBQ2JGLGNBQVFDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCQyxNQUF2QjtBQUNBLFdBQUtmLGFBQUwsR0FBcUJlLE9BQU9DLFlBQTVCO0FBQ0E7QUFDQTtBQUNEOzs7MEJBRUtELE0sRUFBUTtBQUFBOztBQUNaO0FBQ0FFLFNBQUdDLE9BQUgsQ0FBVztBQUNUQyxhQUFLLDhDQURJO0FBRVQ7QUFDQXhCLGNBQU07QUFDSnlCLG9CQUFVLEtBQUtDLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkMsT0FBeEIsQ0FBZ0NILFFBRHRDO0FBRUpJLGtCQUFRLEtBQUtILE9BQUwsQ0FBYUMsVUFBYixDQUF3QkMsT0FBeEIsQ0FBZ0NDLE1BRnBDO0FBR0pDLGlCQUFPLEtBQUtKLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkMsT0FBeEIsQ0FBZ0NFLEtBSG5DO0FBSUo7QUFDQTtBQUNBQyxxQkFBVyxLQUFLMUIsYUFOWjtBQU9KMkIsa0JBQVEsS0FBSy9CLFVBUFQ7QUFRSmdDLGdCQUFNLEtBQUsvQixJQVJQO0FBU0pnQyxnQkFBTSxLQUFLL0IsVUFUUDtBQVVKZ0MsaUJBQU8sS0FBSy9CLFdBVlI7QUFXSkUsaUJBQU8sS0FBS0EsS0FBTCxDQUFXLEtBQUtFLFVBQWhCLENBWEg7QUFZSkQsaUJBQU8sS0FBS0EsS0FBTCxDQUFXLEtBQUtFLFVBQWhCO0FBWkgsU0FIRztBQWlCVDJCLGdCQUFRLEtBakJDO0FBa0JUQyxnQkFBUTtBQUNOLDBCQUFnQjtBQURWLFNBbEJDO0FBcUJUQyxpQkFBUyxpQkFBQ0MsR0FBRCxFQUFTO0FBQ2hCLGlCQUFLQyxNQUFMO0FBQ0EsaUJBQUtDLE1BQUwsQ0FBWSxNQUFaO0FBQ0QsU0F4QlE7QUF5QlRDLGNBQU0sY0FBQ0gsR0FBRCxFQUFTO0FBQ2IsaUJBQUtFLE1BQUwsQ0FBWSxNQUFaO0FBQ0F2QixrQkFBUUMsR0FBUixDQUFZLGNBQVosRUFBNEJvQixHQUE1QjtBQUNEO0FBNUJRLE9BQVg7QUE4QkQ7Ozs2QkFFUSxDQUVSOzs7OEJBQ1MsQ0FFVDtBQUNEOztBQUVBOzs7OztFQXBGc0MsZUFBS0ksSTs7a0JBQXhCL0MsVSIsImZpbGUiOiJhZGRyZWNvcmRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgYmFzZSBmcm9tICcuLi8uLi9taXhpbnMvYmFzZSdcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU21hbGxDbGFzcyBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBtaXhpbnMgPSBbYmFzZV1cclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+a3u+WKoOe6quWunidcclxuICAgIH1cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIHJlY29yZE5hbWU6IFsgXSxcclxuICAgICAgZGF0ZTogJzIwMTgtNS0xJyxcclxuICAgICAgcmVjb3JkTm90ZTogWyBdLFxyXG4gICAgICByZWNvcmRTY29yZTogWyBdLFxyXG4gICAgICByZWNvcmRIZWFkaW5nOiBbIF0sICAgIC8vIOmhueebruaJgOWxnuWkp+exu+exu+WIq++8jOS4iuWxguiOt+WPllxyXG4gICAgICAvLyByZUV2ZW50SUQ6IFsgXSwgICAvLyDpobnnm67miYDlsZ7kuovpoblJRO+8jOS4iuWxguiOt+WPllxyXG4gICAgICAvLyByZUV2ZW50TmFtZTogWyBdLCAgLy8g6aG555uu5omA5bGe5LqL6aG55ZCN56ew77yM5LiK5bGC6I635Y+WXHJcbiAgICAgIGxldmVsOiBbJ+WbveWutue6pycsICfnnIHnuqcnLCAn5biC57qnJywgJ+agoee6pycsICfpmaLnuqcnLCAn5YW25LuWJ10sXHJcbiAgICAgIGdyYWRlOiBbJ+S4gOetiScsICfkuoznrYknLCAn5LiJ562JJywgJ+WFtuS7liddLFxyXG4gICAgICAvLyBzY29yZTogW1s1MCwgMzUsIDMwXSwgWzMwLCAyMCwgMTVdLCBbMTgsIDEyLCA4XSwgWzEyLCA4LCA1XSwgWzUsIDMsIDJdXSxcclxuICAgICAgbGV2ZWxJbmRleDogMCxcclxuICAgICAgZ3JhZGVJbmRleDogMFxyXG4gICAgICAvLyB0eXBlOiAwXHJcbiAgICB9XHJcblxyXG4gICAgYmluZERhdGVDaGFuZ2UoZSkge1xyXG4gICAgICB0aGlzLmRhdGUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgfVxyXG4gICAgYmluZGxldmVsQ2hhbmdlKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coJ3BpY2tlcuWPkeeUn+mAieaLqeaUueWPmO+8jOaQuuW4puWAvOS4uicsIGUuZGV0YWlsLnZhbHVlKVxyXG4gICAgICB0aGlzLmxldmVsSW5kZXggPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICBjb25zb2xlLmxvZygncGlja2Vy5Y+R55Sf6YCJ5oup5pS55Y+Y77yM5pC65bim5YC85Li6JywgdGhpcy5sZXZlbFt0aGlzLmxldmVsSW5kZXhdKVxyXG4gICAgfVxyXG4gICAgYmluZGdyYWRlQ2hhbmdlKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coJ3BpY2tlcuWPkeeUn+mAieaLqeaUueWPmO+8jOaQuuW4puWAvOS4uicsIGUuZGV0YWlsLnZhbHVlKVxyXG4gICAgICB0aGlzLmdyYWRlSW5kZXggPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICBjb25zb2xlLmxvZygncGlja2Vy5Y+R55Sf6YCJ5oup5pS55Y+Y77yM5pC65bim5YC85Li6JywgdGhpcy5ncmFkZVt0aGlzLmdyYWRlSW5kZXhdKVxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZChvcHRpb24pIHtcclxuICAgICAgY29uc29sZS5sb2coJ29wdGlvbjonLCBvcHRpb24pXHJcbiAgICAgIHRoaXMucmVjb3JkSGVhZGluZyA9IG9wdGlvbi5icm9hZEhlYWRpbmdcclxuICAgICAgLy8gdGhpcy5yZUV2ZW50SUQgPSBvcHRpb24uZXZlbnRJRFxyXG4gICAgICAvLyB0aGlzLnJlRXZlbnROYW1lID0gb3B0aW9uLmV2ZW50TmFtZVxyXG4gICAgfVxyXG5cclxuICAgIGZvY3VzKG9wdGlvbikge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhvcHRpb24ucGFyYW1zKVxyXG4gICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICdodHRwczovL2RvdXlhZXIuYXBwbGluemkuY29tL2FkZHJlY29yZHMucGhwPycsXHJcbiAgICAgICAgLy8gdXJsOiAnaHR0cHM6Ly93d3cudjJleC5jb20vYXBpL3RvcGljcy9zaG93Lmpzb24/aWQ9NTIwJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICB1c2VybmFtZTogdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuc3R1ZGVudC51c2VybmFtZSxcclxuICAgICAgICAgIG51bWJlcjogdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuc3R1ZGVudC5udW1iZXIsXHJcbiAgICAgICAgICBjbGFzczogdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuc3R1ZGVudC5jbGFzcyxcclxuICAgICAgICAgIC8vIGV2ZW50SUQ6IHRoaXMucmVFdmVudElELFxyXG4gICAgICAgICAgLy8gZXZlbnROYW1lOiB0aGlzLnJlRXZlbnROYW1lLFxyXG4gICAgICAgICAgcmVIZWFkaW5nOiB0aGlzLnJlY29yZEhlYWRpbmcsXHJcbiAgICAgICAgICByZU5hbWU6IHRoaXMucmVjb3JkTmFtZSxcclxuICAgICAgICAgIHRpbWU6IHRoaXMuZGF0ZSxcclxuICAgICAgICAgIG5vdGU6IHRoaXMucmVjb3JkTm90ZSxcclxuICAgICAgICAgIHNjb3JlOiB0aGlzLnJlY29yZFNjb3JlLFxyXG4gICAgICAgICAgbGV2ZWw6IHRoaXMubGV2ZWxbdGhpcy5sZXZlbEluZGV4XSxcclxuICAgICAgICAgIGdyYWRlOiB0aGlzLmdyYWRlW3RoaXMuZ3JhZGVJbmRleF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgICB0aGlzLiRhbGVydCgn5re75Yqg5oiQ5YqfJylcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWw6IChyZXMpID0+IHtcclxuICAgICAgICAgIHRoaXMuJGFsZXJ0KCfmt7vliqDlpLHotKUnKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2RlbmdsdS5mYWlsOicsIHJlcylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25TaG93KCkge1xyXG5cclxuICAgIH1cclxuICAgIG9uUmVhZHkoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgLy8gaW5pdFBhZ2VEYXRhKCkge1xyXG5cclxuICAgIC8vIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBuYW1lSW5wdXQgKGUpIHtcclxuICAgICAgICB0aGlzLnJlY29yZE5hbWUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB9LFxyXG4gICAgICBub3RlSW5wdXQoZSkge1xyXG4gICAgICAgIHRoaXMucmVjb3JkTm90ZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHNjb3JlSW5wdXQoZSkge1xyXG4gICAgICAgIHRoaXMucmVjb3JkU2NvcmUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50cyA9IHtcclxuICAgIH1cclxuICB9XHJcbiJdfQ==