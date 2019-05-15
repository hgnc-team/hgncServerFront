<template>
  <el-main class="contentwrapper">
    <div>
      <h3 class="heading">商品品牌
        <span style="float:right;margin-top:-3px;">
          <router-link to="/goodsCates/goodsCateEdit">
            <el-button type="default" size="mini" style="">
              <font-awesome-icon :icon="['fas', 'plus']" />
              添加商品
            </el-button>
          </router-link>
        </span>
      </h3>
    </div>
  </el-main>
</template>

<script>

export default {
  name: 'GoodsBrands',
  components: {

  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style rel="stylesheet/scss" lang="scss">
</style>
