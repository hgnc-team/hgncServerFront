<template>
  <el-main class="contentwrapper">
    <div>
      <h3 class="heading">商品分类
        <span style="float:right;margin-top:-3px;">
          <router-link to="/goodsManage/index">
            <el-button type="default" size="mini" style="">转移商品</el-button>
          </router-link>
          <router-link to="/goodsManage/index">
            <el-button type="default" size="mini" style="">添加商品分类</el-button>
          </router-link>
        </span>
      </h3>
    </div>
    <el-table
      :data="tableData"
      style="width:100%;"
      header-row-class-name="py-table-header"
      stripe>
      <el-table-column v-for="item in tableSheme" :key="item.prop" :prop="item.prop" :label="item.name" :sortable="item.sortable" :width="item.width">
        <template slot-scope="scope">
          {{ scope.row[item.prop] }}
        </template>
      </el-table-column>
    </el-table>
  </el-main>
</template>

<script>
import tableSheme from './goods-cate-table-sheme'
import tableDataForTest from './goods-cate-table-test-data'

export default {
  name: 'GoodsCates',
  components: {

  },
  data() {
    return {
      tableData: [

      ],
      tableSheme: tableSheme
    }
  },
  mounted() {
    setTimeout(() => {
      this.tableData = tableDataForTest
    }, 0)
  },
  methods: {}
}
</script>

<style rel="stylesheet/scss" lang="scss">
</style>
