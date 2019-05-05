<template>
  <el-main class="contentwrapper">
    <div>
      <h3 class="heading">商品分类
        <span style="float:right;margin-top:-3px;">
          <router-link to="/goodsManage/index">
            <el-button type="default" size="mini" style="">
              <font-awesome-icon :icon="['fas', 'exchange-alt']" />
              转移商品
            </el-button>
          </router-link>
          <router-link to="/goodsManage/index">
            <el-button type="default" size="mini" style="">
              <font-awesome-icon :icon="['fas', 'plus']" />
              添加商品分类
            </el-button>
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
          <span v-if="item.prop === 'cateName'">
            <router-link to="/goodsManage/index">
              <font-awesome-icon :icon="['far', 'minus-square']" style="margin-right:5px;"/>{{ scope.row[item.prop] }}
            </router-link>
          </span>
          <span v-else-if="item.prop !== 'cateName'">
            <goods-table-custom-td :prop="item.prop" :name="item.name" :link-color="item.linkColor" :type="item.type" :data="scope.row" :is-row-menu-wrap-cell="item.isRowMenuWrapCell || false"/>
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="operate" label="操作" width="130">
        <template slot-scope="scope">
          <div>
            <el-button size="medium" type="text">
              <font-awesome-icon :icon="['fas', 'sign-in-alt']" size="lg" fixed-width/>
            </el-button>
            <el-button size="medium" type="text">
              <font-awesome-icon :icon="['fas', 'edit']" size="lg" fixed-width/>
            </el-button>
            <el-button size="medium" type="text">
              <font-awesome-icon :icon="['fas', 'trash-alt']" size="lg" fixed-width class="py-text-danger"/>
            </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </el-main>
</template>

<script>
import tableSheme from './goods-cate-table-sheme'
import tableDataForTest from './goods-cate-table-test-data'
import goodsTableCustomTd from '../../components/pyTableCustomTd/goodsTableCustomTd'

export default {
  name: 'GoodsCates',
  components: {
    goodsTableCustomTd
  },
  data() {
    return {
      tableData: [],
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
