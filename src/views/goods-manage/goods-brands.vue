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
          <goods-table-custom-td :prop="item.prop" :name="item.name" :link-color="item.linkColor" :type="item.type" :data="scope.row" :is-row-menu-wrap-cell="item.isRowMenuWrapCell || false"/>
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
    <div class="pageNavWrap">
      <el-pagination
        :current-page="pageNav.pageNo"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="pageNav.pageSize"
        :total="pageNav.total"
        layout="total, sizes, prev, pager, next, jumper"
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange" />
    </div>
    <router-view />
  </el-main>
</template>

<script>
import tableSheme from './goods-brands-table-sheme'
import goodsTableCustomTd from '../../components/pyTableCustomTd/goodsTableCustomTd'
import { getBrandsList } from '@/api/goodsManage'
import { BASE_IMAGE_URL } from '@/utils/request'
import _ from 'lodash'

export default {
  name: 'GoodsBrands',
  components: {
    goodsTableCustomTd
  },
  data() {
    return {
      // 分页导航
      pageNav: {
        pageNo: 1,
        pageSize: 10,
        total: 0
      },
      // 表格字段
      tableSheme: tableSheme,
      // 接口api
      brandsListMapApi: {
        list: getBrandsList
      },
      // 表格数据
      tableData: []
    }
  },
  mounted() {
    this.getBrandsList()
  },
  methods: {
    getBrandsList() {
      this.brandsListMapApi.list({
        page: this.pageNav.pageNo,
        pageSize: this.pageNav.pageSize
      })
        .then(res => {
          console.log(res)
          if (res.status === 200) {
            this.tableData = _.map(res.data.data, value => {
              return {
                id: value.id,
                brandLogo: `${BASE_IMAGE_URL}brands/${value.logo}`,
                brandName: value.name,
                brandWebsiteAddress: value.site,
                brandDescrib: value.description,
                sort: value.order,
                visible: !!value.active
              }
            })
            this.pageNav.pageNo = res.data.page
            this.pageNav.pageSize = res.data.pageSize
            this.pageNav.total = res.data.total
          }
        })
    },
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`)
      this.pageNav.pageSize = val
      this.getBrandsList()
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`)
      this.pageNav.pageNo = val
      this.getBrandsList()
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
</style>
