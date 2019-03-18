<template>
  <div class="dashboard-editor-container">
    <el-row :gutter="12">
      <el-col :span="2">
        <router-link to="/data-model">
          <el-card shadow="hover">
            数据模型
          </el-card>
        </router-link>
      </el-col>
      <el-col :span="2">
        <router-link to="/handwriting">
          <el-card shadow="hover">
            笔记识别
          </el-card>
        </router-link>
      </el-col>
      <el-col :span="2">
        <router-link to="/stamp">
          <el-card shadow="hover">
            印章鉴定
          </el-card>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'DashboardAdmin',
  components: {

  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}
</style>
