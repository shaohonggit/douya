'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* ========================================================
                        小程序配置文件
======================================================== */

// 域名
// var host = 'http://localhost:8081';
// var host = 'https://wxapp.thunf.cn';
var host = 'https://grdouyaer.applinzi.com';
// var mysql = require('./npm/mysql/index.js');
// 下面的地址配合云端 Demo 工作
var service = exports.service = {

  login: '' + host,
  // 列表接口 GET
  list: host + '/bookmall/list',

  // 筛选页接口 GET 
  tags: host + '/bookmall/tags',

  // 假装有收藏接口 POST
  collect: host + '/bookmall/list',
  // 主域
  host: host
  // host: 'localhost',
  // port: 3306,
  // user: 'root',
  // password: 'wxaa0f42e07ab64cdc',
  // database: 'douyaer',
};

exports.default = {
  service: service
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6WyJob3N0Iiwic2VydmljZSIsImxvZ2luIiwibGlzdCIsInRhZ3MiLCJjb2xsZWN0Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0EsSUFBSUEsT0FBTyxnQ0FBWDtBQUNBO0FBQ0E7QUFDTyxJQUFNQyw0QkFBVzs7QUFFdEJDLGNBQVNGLElBRmE7QUFHdEI7QUFDQUcsUUFBU0gsSUFBVCxtQkFKc0I7O0FBTXRCO0FBQ0FJLFFBQVNKLElBQVQsbUJBUHNCOztBQVN0QjtBQUNBSyxXQUFZTCxJQUFaLG1CQVZzQjtBQVd0QjtBQUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqQnNCLENBQWpCOztrQkFvQlE7QUFDYkM7QUFEYSxDIiwiZmlsZSI6ImNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOWwj+eoi+W6j+mFjee9ruaWh+S7tlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLy8g5Z+f5ZCNXHJcbi8vIHZhciBob3N0ID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MSc7XHJcbi8vIHZhciBob3N0ID0gJ2h0dHBzOi8vd3hhcHAudGh1bmYuY24nO1xyXG52YXIgaG9zdCA9ICdodHRwczovL2dyZG91eWFlci5hcHBsaW56aS5jb20nO1xyXG4vLyB2YXIgbXlzcWwgPSByZXF1aXJlKCdteXNxbCcpO1xyXG4vLyDkuIvpnaLnmoTlnLDlnYDphY3lkIjkupHnq68gRGVtbyDlt6XkvZxcclxuZXhwb3J0IGNvbnN0IHNlcnZpY2UgPSAoe1xyXG5cclxuICBsb2dpbjpgJHtob3N0fWAsXHJcbiAgLy8g5YiX6KGo5o6l5Y+jIEdFVFxyXG4gIGxpc3Q6IGAke2hvc3R9L2Jvb2ttYWxsL2xpc3RgLFxyXG5cclxuICAvLyDnrZvpgInpobXmjqXlj6MgR0VUIFxyXG4gIHRhZ3M6IGAke2hvc3R9L2Jvb2ttYWxsL3RhZ3NgLFxyXG5cclxuICAvLyDlgYfoo4XmnInmlLbol4/mjqXlj6MgUE9TVFxyXG4gIGNvbGxlY3Q6IGAke2hvc3R9L2Jvb2ttYWxsL2xpc3RgLFxyXG4gIC8vIOS4u+Wfn1xyXG4gIGhvc3RcclxuICAvLyBob3N0OiAnbG9jYWxob3N0JyxcclxuICAvLyBwb3J0OiAzMzA2LFxyXG4gIC8vIHVzZXI6ICdyb290JyxcclxuICAvLyBwYXNzd29yZDogJ3d4YWEwZjQyZTA3YWI2NGNkYycsXHJcbiAgLy8gZGF0YWJhc2U6ICdkb3V5YWVyJyxcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBzZXJ2aWNlXHJcbn1cclxuIl19