<template>
  <view class="page-user">
    <view class="weui-panel">
      <view class="weui-cells weui-cells_after-title">
        <view class="weui-cell weui-cell_input">
          <view class="weui-cell__hd">
            <view class="weui-label reset-label-left">学号</view>
          </view>
          <view class="weui-cell__bd">
            <input type="text" class="weui-input" placeholder="请输入学号" @input="numberInput" value="{{student.number}}"/>
          </view>
        </view>
        <view class="weui-cell weui-cell_input weui-cell_vcode">
          <view class="weui-cell__hd">
            <view class="weui-label reset-label-left">密码</view>
          </view>
            <view class="weui-cell__bd">
              <input type="password" class="weui-input" placeholder="请输入密码" @input="passwordInput" value="{{student.password}}"/>
            </view>
        </view>
      </view>
    </view>
    <button @tap="denglu" class="weui-btn btn-primary" type="primary">登录</button>
  </view>
</template>

<script>
  import wepy from 'wepy'
  // import { service } from '../config.js'
  import http from '../mixins/http'
  import base from '../mixins/base'
  import user from '../mixins/user'
  
  export default class pageUser extends wepy.page {
    mixins = [base, http, user]
    config = {
      navigationBarTitleText: '豆芽儿',
      enablePullDownRefresh: false
    }

    data = {
      student: {
        number: '',
        password: ''
      }
      // webdata: [
      // ]
    }

    denglu(student) {
      // this.$parent.student == null
      if (this.student.number === '' || this.student.password === '') {
        return this.$alert('请输入学号和密码')
      } else {
        // console.log(this.data)
        wx.request({
          url: 'http://localhost/douyalocal2019.4.9/login.php?number=' + this.student.number,
          // url: 'https://grdouyaer.applinzi.com/',
          // url: 'https://news-at.zhihu.com/api/4/news/latest',
          // url: service.login,
          method: 'GET',
          header: {
            'content-type': 'application/json'
          },
          success: (res) => {
            console.log('denglu.success:')
            console.log(res.data)
            // console.log(res.data[0].username)
            // this.webdata = res.data[0]
            var serverdata = res.data
            if (this.student.number === serverdata.number && this.student.password === serverdata.password) {
              // return this.$alert('登录成功')
              this.$parent.globalData.student = serverdata
              this.$apply()   // 在异步函数中更新数据的时候，必须手动调用$apply方法，才会触发脏数据检查流程的运行
              console.log('globalData', this.$parent.globalData.student)
              wx.switchTab({
                url: './index'
              })
              return this.$alert('登录成功')
            } else {
              return this.$alert('学号或密码错误')
            }
          },
          fail: (res) => {
            console.log('denglu.fail:', res)
          }
        })
      }
    }

    computed = {
    }

    methods = {
      numberInput (e) {
        this.student.number = e.detail.value
      },
      passwordInput (e) {
        this.student.password = e.detail.value
      }
    }
}
</script>

<style lang="less">
@import "../styles/custom/fn.less";

.reset-label-left{
    margin-right:1em;
    padding-right: 1em;
    border-right: 1rpx;
}
</style>
