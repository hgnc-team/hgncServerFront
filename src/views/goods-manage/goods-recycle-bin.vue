<template>
  <el-container class="goods-recycle-bin-wrap contentwrapper">
    <el-main>
      <div>
        <h3 class="heading">商品管理
          <span style="float:right;margin-top:-3px;">
            <router-link to="/goodsManage/index">
              <el-button type="default" size="mini" style="">
                <font-awesome-icon :icon="['fas', 'reply']" />
                返回商品列表
              </el-button>
            </router-link>
          </span>
        </h3>
      </div>

      <el-form ref="mainSearchForm" :inline="true" :model="mainForm" label-width="0">
        <el-row :gutter="0" class="main-form-row">
          <el-col :span="12">
            <!--全部/已上架/未上架/自营 begin-->
            <ul class="nav nav-pills py-nav">
              <li class="active">
                <a href="javascript:void(0)">全部
                  <span class="badge badge-info use-plugins-num">18</span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">自营
                  <span class="badge badge-info use-plugins-num">18</span>
                </a>
              </li>
            </ul>
            <!--全部/已上架/未上架/自营 end-->
          </el-col>
          <el-col :span="12">
            &nbsp;
          </el-col>
        </el-row>

        <el-row :gutter="0" class="main-form-row">
          <el-col :span="12">
            <el-form-item>
              <el-dropdown @command="handleCommand">
                <el-button type="default" size="mini">
                  <font-awesome-icon :icon="['fas', 'cog']" fixed-width />批量操作<i class="el-icon-arrow-down el-icon--right" />
                </el-button>
                <el-dropdown-menu slot="dropdown" size="mini">
                  <el-dropdown-item v-for="item in preList.batchOpList" :command="item" :key="item.value">
                    <font-awesome-icon :icon="[item.iconType, item.icon]" fixed-width />
                    {{ item.label }}
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-form-item>
          </el-col>

          <el-col :span="12">placeholder
            <el-form-item>
              <el-input v-model="mainForm.sellerKeyWord" placeholder="请输入商家关键字" size="mini"/>
            </el-form-item>
            <el-form-item>
              <el-input v-model="mainForm.goodsKeyWord" placeholder="请输入商品关键字" size="mini"/>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" size="mini">搜索</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <el-table
        :data="tableData"
        style="width:100%;"
        header-row-class-name="py-table-header"
        stripe>
        <el-table-column type="selection" />
        <el-table-column v-for="item in tableSheme" :key="item.prop" :prop="item.prop" :label="item.name" :sortable="item.sortable" :width="item.width">
          <template slot-scope="scope">
            {{ scope.row[item.prop] }}
          </template>
        </el-table-column>
        <el-table-column prop="operate" label="操作" width="90">
          <template slot-scope="scope">
            <div>
              <el-button size="medium" type="text">
                <font-awesome-icon :icon="['fas', 'share-square']" size="lg" fixed-width/>
              </el-button>
              <el-button size="medium" type="text">
                <font-awesome-icon :icon="['fas', 'trash-alt']" size="lg" fixed-width class="py-text-danger"/>
              </el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>

      <div class="pageNavWrap">
        <el-pagination
          :current-page="1"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          :total="400"
          layout="total, sizes, prev, pager, next, jumper"
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange" />
      </div>

    </el-main>
  </el-container>
</template>

<script>
import tableSheme from '@/views/goods-manage/goods-recycle-bin-table-sheme'
import tableData from '@/views/goods-manage/goods-recycle-bin-table-test-data'

export default {
  name: 'GoodsRecycleBin',
  components: {

  },
  data() {
    return {
      // 表头字段
      tableSheme: tableSheme,
      // 表格数据
      tableData: tableData,
      preList: {
        batchOpList: [
          {
            value: '0',
            label: '还原',
            iconType: 'fas',
            icon: 'share-square'
          },
          {
            value: '1',
            label: '删除',
            iconType: 'far',
            icon: 'trash-alt'
          }
        ]
      },
      mainForm: {
        // 商家关键字
        sellerKeyWord: '',
        // 商品关键字
        goodsKeyWord: ''
      }
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    handleCommand(command) {
      console.log(command)
      this.mainForm.batchOp = command
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.goods-recycle-bin-wrap{}
</style>
