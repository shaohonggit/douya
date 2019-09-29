<template>
  <view class="weui-panel">
      <view class="weui-cells weui-cells_after-title" wx:for="{{event}}" wx:key="{{item.eventID}}">
        <navigator url="/pages/focus/detail?index={{item.eventID}}" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <view class="weui-cell__bd">{{item.eventName}}</view>
          <!-- 下面的view里是列表的说明内容 居右 -->
          <view class="weui-cell__ft weui-cell__ft_in-access">
            <!-- <text>{{smallclass}}</text>
            <text class="color-green">{{packages.times}}</text>
            <text>次</text> -->
          </view>
        </navigator>
      </view>
  </view>
</template>

<script>
  import wepy from 'wepy'
  import base from '../../mixins/base'

  export default class Event extends wepy.page {
    mixins = [base]
    config = {
      navigationBarTitleText: '事项'
    }
    data = {
      event: [ ]
    }

    onLoad(option) {
      console.log(option)
      wx.request({
        url: 'http://localhost/douyalocal2019.4.9/event.php?smallclassID=' + option.index,
        // url: 'https://www.v2ex.com/api/topics/show.json?id=520',
        method: 'GET',
        header: {
          'content-type': 'application/json'
        },
        success: (res) => {
          console.log(res.data)
          this.event = res.data
          this.$apply()
          // console.log(this.smallclass)
          // console.log('webdata:', this.webdata)
        },
        fail: (res) => {
          console.log('denglu.fail:', res)
        }
      })
    }

    onShow() {

    }
    onReady() {

    }
    // initPageData() {

    // }

    methods = {
    }

    components = {
    }
  }
</script>

<style type="less">
@import "../../styles/custom/fn.less";
@import "../../styles/weui/base/fn.wxss";
</style>
