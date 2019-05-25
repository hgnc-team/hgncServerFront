<template>
  <div class="pics-manage-wrap">
    <el-dialog
      :visible="dialogVisible"
      title="">
      <span>test</span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'PicsManagement',
  props: {},
  data() {
    return {
      dialogVisible: false
    }
  }
}
</script>

<style lang="scss" scoped></style>
