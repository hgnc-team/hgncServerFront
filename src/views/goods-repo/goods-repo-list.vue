<template>
  <el-container class="contentwrapper">
    <el-main>
      <div>
        <h3 class="heading">商品库商品(SPU)
          <span style="float:right;margin-top:-3px;">
            <router-link to="/goodsRepo/list">
              <el-button type="default" size="mini" style="">
                <font-awesome-icon :icon="['fas', 'file-download']" />
                导出结果
              </el-button>
            </router-link>
            <router-link to="/goodsRepo/list">
              <el-button type="default" size="mini" style="">
                <font-awesome-icon :icon="['fas', 'file-upload']" />
                批量导入
              </el-button>
            </router-link>
            <router-link to="/goodsRepo/list">
              <el-button type="default" size="mini" style="">
                <font-awesome-icon :icon="['fas', 'plus']" />
                添加商品
              </el-button>
            </router-link>
          </span>
        </h3>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'GoodsRepoList'
}
</script>

<style>

</style>
