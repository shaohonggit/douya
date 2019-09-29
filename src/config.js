/* ========================================================
                        小程序配置文件
======================================================== */

// 域名
// var host = 'http://localhost:8081';
// var host = 'https://wxapp.thunf.cn';
var host = 'https://grdouyaer.applinzi.com';
// var mysql = require('mysql');
// 下面的地址配合云端 Demo 工作
export const service = ({

  login:`${host}`,
  // 列表接口 GET
  list: `${host}/bookmall/list`,

  // 筛选页接口 GET 
  tags: `${host}/bookmall/tags`,

  // 假装有收藏接口 POST
  collect: `${host}/bookmall/list`,
  // 主域
  host
  // host: 'localhost',
  // port: 3306,
  // user: 'root',
  // password: 'wxaa0f42e07ab64cdc',
  // database: 'douyaer',
})

export default {
  service
}
