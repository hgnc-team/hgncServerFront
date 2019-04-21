<template>
  <div>
    <!--显示缩略图-->
    <span v-if="type === 'image'" class="thumb-img-wrap">
      <el-popover
        placement="right"
        popper-class="editablePopper"
        trigger="click">
        <img :src="data.thumb" style="width:180px;height:180px;z-index:11">
        <span slot="reference" class="editable-click cursor_pointer" ><img :src="data.thumb"></span>
      </el-popover>
    </span>
    <!--带编辑功能文本字段-->
    <span v-else-if="type === 'input'">
      <el-popover
        placement="top"
        popper-class="editablePopper"
        trigger="click"
        @hide="resetData">
        <div class="editable-container">
          <h3 class="popover-title">请输入{{ name }}</h3>
          <div class="popover-content">
            <el-form :inline="true" :model="data" class="editable-form-inline">
              <el-form-item label="">
                <el-input v-model="data[prop]" size="mini" clearable/>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" size="mini">确定</el-button>
              </el-form-item>
              <el-form-item>
                <el-button type="default" size="mini">取消</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <span slot="reference" class="editable-click cursor_pointer">{{ copyData[prop] }}</span>
      </el-popover>
      <br>
      <!--特殊的文本下面 展示一行操作按钮 ecjia的设计-->
      <span v-if="isRowMenuWrapCell && data.id === currentId">
        <ul class="goodsOpMenu">
          <li><router-link to="/goodsManage/index/prodEdit">编辑</router-link></li>
          <li><a href="jvascript:void(0)">商品属性</a></li>
          <li><a href="jvascript:void(0)">商品相册</a></li>
          <li><a href="jvascript:void(0)">关联商品</a></li>
          <li><a href="jvascript:void(0)">关联文章</a></li>
          <li><a href="jvascript:void(0)">预览</a></li>
          <li><a href="jvascript:void(0)">导入商品库</a></li>
          <li><a href="jvascript:void(0)" class="py-text-danger">删除</a></li>
        </ul>
      </span>
    </span>
    <!--开关式字段-->
    <span v-else-if="type === 'switch'">
      <el-form :inline="true" :model="data">
        <el-switch v-model="data[prop]" />
      </el-form>
    </span>
    <!--普通文本字段-->
    <span v-else-if="type === 'text'">
      <span class="py-text-danger">{{ data[prop] }}</span>
    </span>
    <!--下拉列表字段-->
    <span v-else-if="type === 'select'">
      <el-popover
        placement="top"
        popper-class="editablePopper"
        trigger="click"
        @hide="resetData">
        <div class="editable-container">
          <h3 class="popover-title">请输入{{ name }}</h3>
          <div class="popover-content">
            <el-form :inline="true" :model="data" class="editable-form-inline">
              <el-form-item label="">
                <el-select v-model="data.reviewStatus" size="mini" placeholder="请选择审核状态" value-key="value">
                  <el-option v-for="item in preList.reviewStatusList" :key="item.value" :label="item.label" :value="item" />
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" size="mini">确定</el-button>
              </el-form-item>
              <el-form-item>
                <el-button type="default" size="mini">取消</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <span slot="reference" class="editable-click cursor_pointer">{{ copyData[prop] }}</span>
      </el-popover>
    </span>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'GoodsTableCustomTd',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    data: {
      type: Object,
      default: null
    },
    currentId: {
      type: String,
      default: ''
    },
    isRowMenuWrapCell: {
      type: Boolean,
      default: false
    },
    prop: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      // 表单模型
      formModel: {},
      // data副本
      copyData: _.clone(this.data),
      // 以下内容在src\views\goods-manage\index.vue中有重复
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
        ]
      }
    }
  },
  methods: {
    resetData() {}
  }
}
</script>

<style lang="scss" scoped>
.thumb-img-wrap{
  display:inline-block;
  img{
    display:block;
    width: 60px;
    height: 60px;
    border:1px solid #ddd;
    border-radius:4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.055);
    transition: all .2s ease-in-out;
  }
}

ul.goodsOpMenu{
    list-style:none;
    display: inline-block;
    margin:0;
    padding-left: 0;
    word-break: keep-all;
    width: 40em;
    position: absolute;
    z-index: 10;
  li{
    float:left;
    a{
      padding:0 0.5em;
      border-right:1px solid #ddd;
    }
     &:last-child{
        a{
          border-right:none;
        }
      }
  }
}

.editable-click{
  text-decoration: none;
  border-bottom: 1px dotted #0088cc;
}
.cursor_pointer{
  cursor: pointer;
}

.editable-form-inline{
  .el-form-item{
    margin-bottom:0;
  }
}
</style>
