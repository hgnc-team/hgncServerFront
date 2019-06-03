<template>
  <el-main class="brands-edit-wrap contentwrapper">
    <div>
      <h3 class="heading">添加品牌
        <span style="float:right;margin-top:-3px;">
          <router-link to="/goodsBrands">
            <el-button type="default" size="mini" style="">
              <font-awesome-icon :icon="['fas', 'reply']" />
              返回商品品牌
            </el-button>
          </router-link>
        </span>
      </h3>
    </div>
  </el-main>
</template>

<script>
export default {
  name: 'GoodsBrandsEdit',
  components: {
  },
  data() {
    return {
    }
  },
  methods: {}
}
</script>

<style lang="scss">
.brands-edit-wrap{
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
