<template>
  <view class="page-index">
    <view class="navbar">  
      <text wx:for="{{navbar}}" data-idx="{{index}}" class="item {{currentTab==index ? 'active' : ''}}" wx:key="unique" @tap="navbarTap">{{item}}</text>  
    </view>  
    <Swiper :list.sync="swipers" height="280"></Swiper>
<!--首页-->  
    <view hidden="{{currentTab!==0}}">  
      <Category :list.sync="categorys" col="6"></Category>  
    </view>  
  
<!--搜索-->  
    <view hidden="{{currentTab!==1}}">  
      <view class="weui-cells weui-cells_after-title" wx:for="{{items}}" wx:key="{{item.id}}">
        <navigator url="/pages/focus/rank?index={{item.id}}" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <view class="weui-cell__bd">{{item.name}}</view>
          <!-- 下面的view里是列表的说明内容 居右 -->
          <view class="weui-cell__ft weui-cell__ft_in-access">
            <!-- <text>{{smallclass}}</text>
            <text class="color-green">{{packages.times}}</text>
            <text>次</text> -->
          </view>
        </navigator>
      </view> 
    </view>  
  
<!--我-->  
    <view hidden="{{currentTab!==2}}">  
      tab_03  
    </view>  

    <!-- <SearchBar :placeholder="searchText"></SearchBar> -->
    <!-- <Swiper :list.sync="swipers" height="280"></Swiper> -->
    <!-- <Category :list.sync="categorys" col="4"></Category> -->
    <BookList :list.sync="list" title="关注列表"
     :loading.sync="loading" :noMore.sync="noMoreList"></BookList>
  </view>
</template>

<script>
  import wepy from 'wepy'
  import { service } from '../config.js'
  import base from '../mixins/base'
  import http from '../mixins/http'
  import { funImages } from '../mixins/demo'
  import Swiper from '../components/swiper'
  import SearchBar from '../components/searchbar'
  import Category from '../components/category'
  import BookList from '../components/bookList'

  export default class pageIndex extends wepy.page {
    mixins = [base, http]
    config = {
      navigationBarTitleText: '豆芽儿',
      navigationBarTextStyle: 'white',
      navigationBarBackgroundColor: ''
    }
    data = {
      searchText: 'book',
      swipers: [
        // 占位图，防止请求错误无图显示
        {image: '/images/swiper1.png', url: '/pages/main/search'}
      ],
      categorys: [
        {title: '科研创新', image: '/images/category/img0.ico'},
        {title: '品德纪实', image: '/images/category/img1.ico'},
        {title: '考研考证', image: '/images/category/img2.ico'},
        {title: '文体特长', image: '/images/category/img3.ico'},
        {title: '学习实践', image: '/images/category/img4.ico'},
        {title: '组织领导', image: '/images/category/img5.ico'}
      ],
      items: [
        {name: '品德素质', id: 'moral'},
        {name: '专业素质', id: 'major'},
        {name: '身心素质', id: 'physical'},
        {name: '综合能力', id: 'integrative'}
      ],

      noMoreList: false,
      loading: false,
      list: [],
      page: 0,
      size: 5,
      navbar: ['我要关注', '谁是大神', '统计预测'],
      currentTab: 0
    }

    // onLoad() {
    //   console.log('globalData', this.$parent.$updateGlobalData.student)
    // }
    onReady() {
      this.initPageData()
    }

    onPullDownRefresh() {
      this.initPageData()
    }

    onReachBottom() {
      setTimeout(() => {
        this.updateBookList(this.page)
        this.$apply()
      }, 200)
    }

    // 初始化页面数据
    initPageData() {
      // 初始化参数
      this.page = 0

      // 请求列表
      this.updateBookList(this.page)

      // 处理轮播图
      this.swipers.push({image: '/images/swiper1.png'})
      // 处理菜单栏
      this.categorys.map((cate, index) => {
        // const xnum = Math.min(Math.max(index, 1), 6)
        // cate.url = `/pages/main/search?params=${this.$json({
        //   value: [xnum, 6 - xnum].map(item => this.getString(item)),
        //   index: index + 1,
        //   title: cate.title
        // })}`
        // 取数字作为数组的变量值要用this.$json,如params=${this.$json(index + 1)}取汉字不需要
        cate.url = `/pages/focus/smallclass?params=${cate.title}`
      })
    }

    // 更新图书列表
    updateBookList(page) {
      if (this.loading || this.noMoreList) return
      this.loading = true
      // 请求列表
      this.$post({
        url: service.list,
        data: {
          // 默认从0开始为第一页
          page: page,
          size: this.size
        }
      }, {
        success: ({code, data}) => {
          // 示例规则：最多20本
          if (this.list.length >= 20) {
            this.noMoreList = true
            return
          }
          // 请求到空列表后就认为没有更多了
          if (this.isArray(data) && data.length === 0) {
            this.noMoreList = true
            return
          }
          if (!this.page || +this.page === 0) {
            this.list = this.getBooks(data)
          } else {
            // 添加到列表中
            this.list = [
              ...this.list,
              ...this.getBooks(data)
            ]
          }
          // 成功了就增加一页
          this.page += 1
        },
        fail: ({code, data}) => {
          // 失败了什么也不做
        },
        complete: () => {
          this.loading = false
        }
      })
    }

    // 处理图书列表
    getBooks(data) {
      const len = this.list.length
      return this.getArray(data).map((book, index) => {
        const xlen = len + index
        // 拼接示例数据
        return {
          id: xlen,
          title: book.title,
          content: `简介: 大吉大利，今晚吃鸡。${book.title}；${book.title}。`,
          image: funImages[(xlen + 4) % 8],
          tags: ['tag1', 'tag2'],
          status: xlen % 2
        }
      })
    }

    navbarTap(e) {
      this.currentTab = e.currentTarget.dataset.idx
    }

    methods = {
    }

    components = {
      SearchBar,
      Category,
      BookList,
      Swiper
    }
  }
</script>

<style lang="less">

.page-index{
  // some style
  display: flex;  
  flex-direction: column;  
  height: 100%; 
}
.navbar{  
  flex: none;  
  display: flex;  
  background: #fff;  
}  
.navbar .item{  
  position: relative;  
  flex: auto;  
  text-align: center;  
  line-height: 80rpx;  
}  
.navbar .item.active{  
  color: #049BFF;  
}  
.navbar .item.active:after{  
  content: "";  
  display: block;  
  position: absolute;  
  bottom: 0;  
  left: 0;  
  right: 0;  
  height: 4rpx;  
  background: #049BFF;  
}  
</style>
