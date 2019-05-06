<template>
  <el-container class="goods-recycle-bin-wrap contentwrapper">
    <el-main>
      <div>
        <h3 class="heading">商品管理
          <span style="float:right;margin-top:-3px;">
            <router-link to="/goodsManage/index">
              <el-button type="default" size="mini" style="">
                <font-awesome-icon :icon="['fas', 'reply']" />
                返回商品列表
              </el-button>
            </router-link>
          </span>
        </h3>
      </div>

      <el-form ref="mainSearchForm" :inline="true" :model="mainForm" label-width="0">
        <el-row :gutter="0" class="main-form-row">
          <el-col :span="12">
            <!--全部/已上架/未上架/自营 begin-->
            <ul class="nav nav-pills py-nav">
              <li class="active">
                <a href="javascript:void(0)">全部
                  <span class="badge badge-info use-plugins-num">18</span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">自营
                  <span class="badge badge-info use-plugins-num">18</span>
                </a>
              </li>
            </ul>
            <!--全部/已上架/未上架/自营 end-->
          </el-col>
          <el-col :span="12">
            &nbsp;
          </el-col>
        </el-row>

        <el-row :gutter="0" class="main-form-row">
          <el-col :span="12">
            <el-form-item>
              <el-dropdown @command="handleCommand">
                <el-button type="default" size="mini">
                  <font-awesome-icon :icon="['fas', 'cog']" fixed-width />批量操作<i class="el-icon-arrow-down el-icon--right" />
                </el-button>
                <el-dropdown-menu slot="dropdown" size="mini">
                  <el-dropdown-item v-for="item in preList.batchOpList" :command="item" :key="item.value">
                    <font-awesome-icon :icon="[item.iconType, item.icon]" fixed-width />
                    {{ item.label }}
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-form-item>
          </el-col>

          <el-col :span="12">placeholder
            <el-form-item>
              <el-input v-model="mainForm.sellerKeyWord" placeholder="请输入商家关键字" size="mini"/>
            </el-form-item>
            <el-form-item>
              <el-input v-model="mainForm.goodsKeyWord" placeholder="请输入商品关键字" size="mini"/>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" size="mini">搜索</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>

export default {
  name: 'GoodsRecycleBin',
  components: {

  },
  data() {
    return {
      preList: {
        batchOpList: [
          {
            value: '0',
            label: '还原',
            iconType: 'fas',
            icon: 'share-square'
          },
          {
            value: '1',
            label: '删除',
            iconType: 'far',
            icon: 'trash-alt'
          }
        ]
      },
      mainForm: {
        // 商家关键字
        sellerKeyWord: '',
        // 商品关键字
        goodsKeyWord: ''
      }
    }
  },
  methods: {}
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.goods-recycle-bin-wrap{}
</style>
