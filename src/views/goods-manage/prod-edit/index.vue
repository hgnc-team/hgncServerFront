<template>
  <el-main class="prod-edit-wrap">
    <div>
      <h3 class="heading">编辑商品
        <router-link to="/goodsManage/index">
          <el-button type="default" size="mini" style="float:right;margin-top:-3px;">返回商品列表</el-button>
        </router-link>
      </h3>
    </div>

    <el-tabs v-model="currentTabVal" type="card">
      <el-tab-pane
        v-for="item in prodEditTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name">
        <component :is="item.component" />
      </el-tab-pane>
    </el-tabs>
  </el-main>
</template>

<script>
import articles from './tab-components/articles.vue'
import commonInfo from './tab-components/commonInfo.vue'
import goodsManage from './tab-components/goodsManage.vue'
import prodDescrib from './tab-components/prodDescrib.vue'
import prodPhotos from './tab-components/prodPhotos.vue'
import prodProperty from './tab-components/prodProperty.vue'
import associateProd from './tab-components/associateProd.vue'

export default {
  name: 'ProdEditIndex',
  data() {
    return {
      // 当前选中tab
      currentTabVal: '1',
      prodEditTabs: [
        {
          title: '通用信息',
          name: '1',
          component: commonInfo
        },
        {
          title: '商品描述',
          name: '2',
          component: prodDescrib
        },
        {
          title: '商品属性',
          name: '3',
          component: prodProperty
        },
        {
          title: '商品相册',
          name: '4',
          component: prodPhotos
        },
        {
          title: '关联商品',
          name: '5',
          component: associateProd
        },
        {
          title: '关联文章',
          name: '6',
          component: articles
        },
        {
          title: '货品管理',
          name: '7',
          component: goodsManage
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.prod-edit-wrap{
  position:absolute;
  left:0;
  top:0;
  width:100%;
  height:100%;
  background-color:#fff;
  // 为什么是10，魔术数字
  z-index:10;
}
</style>
