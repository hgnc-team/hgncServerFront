<template>
  <el-main class="order-detail-wrap">
    <div>
      <h3 class="heading">配送订单信息</h3>
    </div>
  </el-main>
</template>

<script>
export default {
  name: 'OnlineOrderDetail',
  data() {
    return {}
  }
}
</script>

<style lang="scss">
.order-detail-wrap {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  // 为什么是10，魔术数字
  z-index: 10;
}
</style>

