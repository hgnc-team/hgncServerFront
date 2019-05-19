<template>
  <el-container class="contentwrapper">
    <el-main>
      <div>
        <h3 class="heading">添加商品库商品
          <span style="float:right;margin-top:-3px;">
            <router-link to="/goodsRepo/list">
              <el-button type="default" size="mini" style="">
                <font-awesome-icon :icon="['fas', 'reply']" />
                转移商品
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
  name: 'GoodsRepoAdd'
}
</script>

<style>

</style>
