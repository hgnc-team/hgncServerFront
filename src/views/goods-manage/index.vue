<template>
  <el-container class="goods-manage-wrap contentwrapper">
    <el-main>
      <div>
        <h3 class="heading">商品管理</h3>
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
                <a href="javascript:void(0)">已上架
                  <span class="badge badge-info use-plugins-num">18</span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">未上架
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

        <el-row :gutter="0" class="main-form-row">
          <el-col :span="12">
            <el-form-item>
              <el-dropdown @command="handleCommand">
                <el-button type="default" size="mini">
                  批量操作<i class="el-icon-arrow-down el-icon--right" />
                </el-button>
                <el-dropdown-menu slot="dropdown" size="mini">
                  <el-dropdown-item v-for="item in preList.batchOpList" :command="item" :key="item.value">{{ item.label }}</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-form-item>
            <el-form-item>
              <el-select v-model="mainForm.reviewStatus" size="mini" placeholder="请选择审核状态" value-key="value">
                <el-option v-for="item in preList.reviewStatusList" :key="item.value" :label="item.label" :value="item" />
              </el-select>
            </el-form-item>

            <el-form-item>
              <el-select v-model="mainForm.seller" size="mini" placeholder="请选商家" value-key="value">
                <el-option v-for="item in preList.sellerList" :key="item.value" :label="item.label" :value="item" />
              </el-select>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" size="mini">筛选</el-button>
            </el-form-item>
          </el-col>

          <el-col :span="12">placeholder</el-col>
        </el-row>
      </el-form>

      <el-table
        :data="tableData"
        style="width:100%;"
        header-row-class-name="py-table-header"
        stripe
        @cell-mouse-enter="handleCellMouseEnter"
        @cell-mouse-leave="handleCellMouseLeave">
        <el-table-column type="selection" />
        <el-table-column v-for="item in tableSheme" :key="item.prop" :prop="item.prop" :label="item.name" :sortable="item.sortable">
          <template slot-scope="scope">
            <goods-table-custom-td :current-id="currentId" :prop="item.prop" :name="item.name" :type="item.type" :data="scope.row" :is-row-menu-wrap-cell="item.isRowMenuWrapCell || false"/>
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
import tableSheme from './goods-list-table-sheme'
import tableDataForTest from './goods-list-table-test-data'
import goodsTableCustomTd from '../../components/pyTableCustomTd/goodsTableCustomTd'
import _ from 'lodash'

export default {
  name: 'GoodsManageIndex',
  components: {
    goodsTableCustomTd
  },
  data() {
    return {
      // 商品列表sheme
      tableSheme: tableSheme,
      // 当前选中商品的id
      currentId: '',
      // 表格数据
      tableData: [],
      mainForm: {
        // 审核状态
        reviewStatus: {
          value: '-1',
          label: '请选择审核状态'
        },
        // 商家
        seller: {
          value: '-1',
          label: '请选择商家'
        },
        // 批量操作
        batchOp: {
          value: '-1',
          label: '批量操作',
          icon: ''
        },
        // 商家关键字
        sellerKeyWord: '',
        // 商品关键字
        goodsKeyWord: ''
      },
      preList: {
        // 选择审核状态预置选项
        reviewStatusList: [
          {
            value: '-1',
            label: '请选择审核状态'
          },
          {
            value: '0',
            label: '未审核'
          },
          {
            value: '1',
            label: '审核未通过'
          },
          {
            value: '2',
            label: '已审核'
          },
          {
            value: '3',
            label: '无需审核'
          }
        ],
        // 选择商家预置选项
        sellerList: [
          {
            value: '-1',
            label: '请选择商家'
          },
          {
            value: '0',
            label: '天天果园'
          },
          {
            value: '1',
            label: '测试入住店铺'
          }
        ],
        // 批量操作列表（可用）
        batchOpList: [
          {
            value: '0',
            label: '移至回收站',
            icon: ''
          },
          {
            value: '1',
            label: '上架',
            icon: ''
          },
          {
            value: '2',
            label: '下架',
            icon: ''
          },
          {
            value: '3',
            label: '精品',
            icon: ''
          },
          {
            value: '4',
            label: '取消精品',
            icon: ''
          },
          {
            value: '5',
            label: '新品',
            icon: ''
          },
          {
            value: '6',
            label: '取消新品',
            icon: ''
          },
          {
            value: '7',
            label: '热销',
            icon: ''
          },
          {
            value: '8',
            label: '取消热销',
            icon: ''
          },
          {
            value: '9',
            label: '转移到分类',
            icon: ''
          },
          {
            value: '10',
            label: '审核通过',
            icon: ''
          },
          {
            value: '11',
            label: '审核未通过',
            icon: ''
          },
          {
            value: '12',
            label: '设为未审核',
            icon: ''
          },
          {
            value: '13',
            label: '无需审核',
            icon: ''
          }
        ]
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.tableData = tableDataForTest
    }, 0)
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
    },
    // 鼠标经过单元格
    handleCellMouseEnter(row, column, cell, event) {
      _.forEach(this.tableSheme, (value, index) => {
        if ('isRowMenuWrapCell' in value) {
          value.isRowMenuWrapCell = true
          this.currentId = row.id
        }
      })
    },
    handleCellMouseLeave(row, column, cell, event) {
      _.forEach(this.tableSheme, (value, index) => {
        if ('isRowMenuWrapCell' in value) {
          value.isRowMenuWrapCell = false
        }
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
</style>
