<template>
  <el-container>
    <el-main style="padding:20px;">
      <el-form ref="commonInfoForm" :model="form" :label-position="'left'" label-width="100px;" class="commonForm" >
        <el-form-item label="商品名称">
          <el-input v-model="form.prodName" />
        </el-form-item>
        <el-form-item label="商品货号">
          <el-input v-model="form.prodNo" />
          <!-- <small>
            如果您不输入商品货号，系统将自动生成一个唯一的货号。
          </small> -->
        </el-form-item>

        <el-form-item label="本店售价">
          <div style="display:flex;">
            <el-input v-model="form.price" />
            <el-button type="default" class="inline-block">按市场价计算</el-button>
          </div>
        </el-form-item>

        <el-form-item label="市场售价">
          <div style="display:flex;">
            <el-input v-model="form.marketPrice" />
            <el-button type="default" class="inline-block">取整数</el-button>
          </div>
        </el-form-item>

        <el-form-item label="库存数量">
          <el-input v-model="form.stock" />
        </el-form-item>

        <el-form-item label="警告数量">
          <el-input v-model="form.stockWarnNum" />
        </el-form-item>

        <el-form-item label="商品重量">
          <div style="display:flex">
            <el-input v-model="form.weight" class="input-with-select" />
            <el-select slot="append" v-model="form.unit" placeholder="请选择单位">
              <el-option label="克" value="g" />
              <el-option label="千克" value="kg" />
            </el-select>
          </div>
        </el-form-item>

        <el-form-item label="作为商品">
          <el-checkbox v-model="form.forSale">
            打勾表示能作为普通商品销售，否则只能作为配件或赠品销售。
          </el-checkbox>
        </el-form-item>

        <el-form-item label="是否包邮">
          <el-checkbox v-model="form.freeShip">
            打勾表示此商品不会产生运费花销，否则按照正常运费计算。
          </el-checkbox>
        </el-form-item>

        <el-collapse v-model="activeCollapseName">
          <el-collapse-item title="SEO优化" name="1">
            <el-form-item label="关键字">
              <el-input v-model="form.seoKeywords" />
              <small>用英文逗号分隔</small>
            </el-form-item>

            <el-form-item label="简单描述">
              <el-input v-model="form.seoDescrib" type="textarea" />
            </el-form-item>
          </el-collapse-item>
        </el-collapse>

        <el-collapse v-model="activeCollapseName">
          <el-collapse-item title="备注信息" name="1">
            <el-form-item label="商家备注">
              <el-input v-model="form.remarks" type="textarea" />
            </el-form-item>
          </el-collapse-item>
        </el-collapse>
      </el-form>
    </el-main>

    <el-aside style="width:350px;">132</el-aside>
  </el-container>
</template>

<script>
export default {
  name: 'CommonInfo',
  data() {
    return {
      // 激活面板名称
      activeCollapseName: '',
      form: {
        // 商品名称
        prodName: '',
        // 商品货号
        prodNo: '',
        // 本店售价
        price: 0.00,
        // 市场售价
        marketPrice: 0.00,
        // 库存数量
        stock: 999,
        // 警告数量
        stockWarnNum: 1,
        // 商品重量
        weight: '',
        // 重量单位
        unit: 'g',
        // 作为商品
        forSale: true,
        // 是否包邮
        freeShip: false,
        // seo优化-关键字
        seoKeywords: '',
        // seo优化-简单描述
        seoDescrib: '',
        // 商家备注
        remarks: ''
      }
    }
  }
}
</script>

<style lang="scss">
.commonForm {
  .el-form-item__content{
    display:inline-block;
  }
  .el-select .el-input{
    width:inline-block;
  }
  .input-with-select .el-input-group__append {
    // background-color:red;
  }
}

.inline-block{
  display:inline-block;
}
</style>
