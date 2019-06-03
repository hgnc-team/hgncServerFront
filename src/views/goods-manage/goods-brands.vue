<template>
  <el-main class="contentwrapper">
    <div>
      <h3 class="heading">商品品牌
        <span style="float:right;margin-top:-3px;">
          <router-link to="/goodsBrands/goodsBrandsEdit">
            <el-button type="default" size="mini" style="">
              <font-awesome-icon :icon="['fas', 'plus']" />
              添加商品
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
            <router-link to="" @click.native="getSubClass(scope.row)">
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
            <router-link to="/goodsCates/goodsCateEdit">
              <el-button size="medium" type="text" title="编辑">
                <font-awesome-icon :icon="['fas', 'edit']" size="lg" fixed-width/>
              </el-button>
            </router-link>
            <el-button size="medium" type="text" title="删除">
              <font-awesome-icon :icon="['fas', 'trash-alt']" size="lg" fixed-width class="py-text-danger"/>
            </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <router-view />
  </el-main>
</template>

<script>
import tableSheme from './goods-brands-table-sheme'
import goodsTableCustomTd from '../../components/pyTableCustomTd/goodsTableCustomTd'

export default {
  name: 'GoodsBrands',
  components: {
    goodsTableCustomTd
  },
  data() {
    return {
      tableSheme: tableSheme
    }
  },
  methods: {}
}
</script>

<style rel="stylesheet/scss" lang="scss">
</style>
