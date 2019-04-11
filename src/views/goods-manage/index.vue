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
              <el-input v-model="mainForm.sellerKeyWord" placeholder="请输入商家关键字" />
            </el-form-item>
            <el-form-item>
              <el-input v-model="mainForm.goodsKeyWord" placeholder="请输入商品关键字" />
            </el-form-item>

            <el-form-item>
              <el-button type="primary">搜索</el-button>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="0" class="main-form-row">
          <el-col :span="12">
            <el-form-item>
              <el-dropdown @command="handleCommand">
                <el-button type="default">
                  批量操作<i class="el-icon-arrow-down el-icon--right" />
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item v-for="item in preList.batchOpList" :command="item" :key="item.value">{{ item.label }}</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-form-item>
            <el-form-item>
              <el-select v-model="mainForm.reviewStatus" placeholder="请选择审核状态" value-key="value">
                <el-option v-for="item in preList.reviewStatusList" :key="item.value" :label="item.label" :value="item" />
              </el-select>
            </el-form-item>

            <el-form-item>
              <el-select v-model="mainForm.seller" placeholder="请选商家" value-key="value">
                <el-option v-for="item in preList.sellerList" :key="item.value" :label="item.label" :value="item" />
              </el-select>
            </el-form-item>

            <el-form-item>
              <el-button type="primary">筛选</el-button>
            </el-form-item>
          </el-col>

          <el-col :span="12">123</el-col>
        </el-row>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>

export default {
  name: 'GoodsManageIndex',
  components: {

  },
  data() {
    return {
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
  methods: {
    handleCommand(command) {
      console.log(command)
      this.mainForm.batchOp = command
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
</style>
