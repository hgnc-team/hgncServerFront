<template>
  <el-container class="contentwrapper">
    <el-main>
      <div>
        <h3 class="heading">配送订单</h3>
      </div>

      <el-form ref="mainSearchForm" :inline="true" :model="mainForm" label-width="0">
        <el-row :gutter="0" class="main-form-row">
          <el-col :span="12">
            <!--全部/待付款/待接单(to do 针对外卖类)/待发货/待收货/已完成 begin-->
            <ul class="nav nav-pills py-nav">
              <li class="active">
                <a href="javascript:void(0)">
                  全部
                  <span class="badge badge-info use-plugins-num">8</span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  待付款
                  <span class="badge badge-info use-plugins-num">18</span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  待发货
                  <span class="badge badge-info use-plugins-num">18</span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  待收货
                  <span class="badge badge-info use-plugins-num">18</span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  已完成
                  <span class="badge badge-info use-plugins-num">18</span>
                </a>
              </li>
            </ul>
            <!--全部/待付款/待接单(to do 针对外卖类)/待发货/待收货/已完成 end-->
          </el-col>
          <el-col :span="12">&nbsp;</el-col>
        </el-row>

        <el-row :gutter="0" class="main-form-row">
          <el-col :span="12">
            <el-form-item>
              <el-select
                v-model="mainForm.orderStatus"
                size="mini"
                placeholder="请选择订单状态"
                value-key="value"
                clearable
              >
                <el-option
                  v-for="item in preList.orderStatus"
                  :key="item.value"
                  :label="item.label"
                  :value="item"
                />
              </el-select>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" size="mini">筛选</el-button>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item>
              <el-input
                v-model="mainForm.sellerKeyWord"
                placeholder="请输入商家关键字"
                size="mini"
                clearable
              />
            </el-form-item>
            <el-form-item>
              <el-input
                v-model="mainForm.customerKeyWords"
                placeholder="请输入订单编号或购买者信息"
                size="mini"
                clearable
                style="min-width:18em;"
              />
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
        stripe
      >
        <el-table-column
          v-for="item in tableSheme"
          :key="item.prop"
          :prop="item.prop"
          :label="item.name"
          :sortable="item.sortable"
        >
          <template slot-scope="scope">
            <goods-table-custom-td
              :table-user-name="'OnlineOrderDelivery'"
              :current-id="currentId"
              :prop="item.prop"
              :name="item.name"
              :link-color="item.linkColor"
              :type="item.type"
              :data="scope.row"
              :is-row-menu-wrap-cell="item.isRowMenuWrapCell || false"
            />
          </template>
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>

<script>
import tableSheme from './onlineOrder-delivery-table-sheme'
import goodsTableCustomTd from '@/components/pyTableCustomTd/goodsTableCustomTd'

export default {
  name: 'OnlineOrderDelivery',
  components: {
    goodsTableCustomTd
  },
  data() {
    return {
      // 列表数据
      tableData: [],
      // 订单列表sheme
      tableSheme: tableSheme,
      mainForm: {
        orderStatus: {
          value: '-1',
          label: '请选择订单状态'
        },
        // 卖家搜索关键字
        sellerKeyWord: '',
        // 买家搜索关键字
        customerKeyWords: ''
      },
      preList: {
        orderStatus: [
          {
            value: '0',
            label: '待付款'
          },
          {
            value: '1',
            label: '待发货'
          },
          {
            value: '2',
            label: '待收货'
          },
          {
            value: '3',
            label: '已完成'
          },
          {
            value: '4',
            label: '已取消'
          }
        ]
      }
    }
  }
}
</script>

<style>
</style>

