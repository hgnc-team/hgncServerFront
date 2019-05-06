<template>
  <el-form ref="commonInfoForm" :model="form" :label-position="'left'" label-width="100px;" class="commonForm" >
    <el-container>
      <el-main style="padding:20px;">
        <el-form-item label="商品名称">
          <el-input v-model="form.prodName" />
        </el-form-item>
        <el-form-item label="商品货号">
          <el-input v-model="form.prodNo" />
          <small>
            如果您不输入商品货号，系统将自动生成一个唯一的货号。
          </small>
        </el-form-item>

        <el-form-item label="本店售价">
          <div style="display:flex;">
            <el-input v-model="form.price" />
            <el-button type="default" class="inline-block right-beside-btn">按市场价计算</el-button>
          </div>
        </el-form-item>

        <el-form-item label="市场售价">
          <div style="display:flex;">
            <el-input v-model="form.marketPrice" />
            <el-button type="default" class="inline-block right-beside-btn">取整数</el-button>
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
            <el-select slot="append" v-model="form.unit" placeholder="请选择单位" class="right-beside-btn">
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

        <el-collapse v-model="activeNames[0]" class="custom-collapse">
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

        <el-collapse v-model="activeNames[1]" class="custom-collapse">
          <el-collapse-item title="备注信息" name="1">
            <el-form-item label="商家备注">
              <el-input v-model="form.remarks" type="textarea" />
            </el-form-item>
          </el-collapse-item>
        </el-collapse>
      </el-main>

      <el-aside style="width:350px;">
        <el-collapse v-model="activeNames[2]" class="custom-collapse">
          <el-collapse-item title="发布" name="1">
            <el-form-item label="上架：">
              <el-checkbox v-model="form.onSale">
                打勾表示允许销售，否则不允许销售。
              </el-checkbox>
            </el-form-item>

            <el-form-item label="加入推荐：">
              <!-- {{ form.addSuggestList }} -->
              <el-checkbox-group v-model="form.addSuggestList">
                <el-checkbox label="精品" value="0" />
                <el-checkbox label="新品" value="1" />
                <el-checkbox label="热销" value="2" />
              </el-checkbox-group>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" size="mini">更新</el-button>
            </el-form-item>
          </el-collapse-item>
        </el-collapse>

        <el-collapse v-model="activeNames[3]" class="custom-collapse">
          <el-collapse-item title="商品分类" name="1">
            <el-form-item label="选择商品分类" class="custom-form-item-label-top">
              123
            </el-form-item>

            <el-form-item label="选择扩展分类" class="custom-form-item-label-top">
              123
            </el-form-item>

          </el-collapse-item>
        </el-collapse>

        <el-collapse v-model="activeNames[4]" class="custom-collapse">
          <el-collapse-item title="商品品牌" name="1">
            <el-form-item label="选择商品品牌" class="custom-form-item-label-top">
              <el-select v-model="form.selectedBrand" placeholder="请选择...">
                <el-option v-for="item in preSetData.brandList" :key="item.value" :label="item.label" :value="item.value" />
              </el-select>
            </el-form-item>

            <el-form-item>
              <el-button type="text">添加商品品牌</el-button>
            </el-form-item>

          </el-collapse-item>
        </el-collapse>

        <el-collapse v-model="activeNames[5]" class="custom-collapse">
          <el-collapse-item title="商品图片" name="1">
            <el-form-item label="上传商品图片" class="custom-form-item-label-top">
              <div class="fileupload-btn preview-img">
                <img src="../../../../assets/images/test-goods-img.png">
              </div>
            </el-form-item>

            <el-form-item label="商品缩略图" class="custom-form-item-label-top">
              <div class="fileupload-btn preview-img thumb_img">
                <img src="../../../../assets/images/test-goods-thumb-img.png">
              </div>
            </el-form-item>
            <small>点击更换商品图片或商品缩略图</small>
          </el-collapse-item>
        </el-collapse>

        <el-collapse v-model="activeNames[6]" class="custom-collapse">
          <el-collapse-item title="积分相关" name="1">
            <el-form-item label="赠送消费积分数：">
              <el-input v-model="form.bounds" style="width:100px;"/>
              <div>
                <small>购买该商品时赠送消费积分数,-1表示按商品价格赠送</small>
              </div>
            </el-form-item>

            <el-form-item label="赠送成长值：">
              <el-input v-model="form.growthValue" style="width:100px;"/>
              <div>
                <small>购买该商品时赠送成长值数,-1表示按商品价格赠送</small>
              </div>
            </el-form-item>

            <el-form-item label="积分购买金额：">
              <el-input v-model="form.buyUseBounds" style="width:100px;"/>
              <div>
                <small>(此处需填写金额)购买该商品时最多可以使用积分的金额</small>
              </div>
            </el-form-item>

          </el-collapse-item>
        </el-collapse>

        <el-collapse v-model="activeNames[7]" class="custom-collapse">
          <el-collapse-item title="折扣、促销价格" name="1">
            <el-form-item label="会员价格">
              注册用户 <el-input v-model="form.memberPrice" style="width:100px;"/>(50)
              <div style="line-height:1.2;margin-top:10px;">
                <small>会员价格为-1时表示会员价格按会员等级折扣率计算。你也可以为每个等级指定一个固定价格</small>
              </div>
            </el-form-item>

            <el-form-item label="优惠价格">
              <div v-for="item in form.discountPrice" :key="item.id" class="discount-set-item">
                <label>优惠数量</label>
                <el-input v-model="item.total" style="width:5em;margin-right:10px;" />
                <label>优惠价格</label>
                <el-input v-model="item.price" style="width:5em;" />
              </div>
              <el-button type="text">添加优惠价格</el-button>
              <div>
                <small>购买数量达到优惠数量时享受的优惠价格</small>
              </div>
            </el-form-item>

          </el-collapse-item>
        </el-collapse>
      </el-aside>
    </el-container>
  </el-form>
</template>

<script>
export default {
  name: 'CommonInfo',
  data() {
    return {
      // 激活面板名称
      activeNames: [
        // seo优化
        ['1'],
        // 备注信息
        ['1'],
        // 发布
        ['1'],
        // 商品分类
        ['1'],
        // 商品品牌
        ['1'],
        // 商品图片
        ['1'],
        // 积分相关
        ['1'],
        // 折扣、促销价格
        ['0']
      ],
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
        // 上架
        onSale: true,
        // 是否包邮
        freeShip: false,
        // seo优化-关键字
        seoKeywords: '',
        // seo优化-简单描述
        seoDescrib: '',
        // 商家备注
        remarks: '',
        // 加入推荐数组
        addSuggestList: [],
        // 选择的品牌
        selectedBrand: null,
        // 赠送消费积分数
        bounds: -1,
        // 赠送成长值
        growthValue: -1,
        // 积分购买金额
        buyUseBounds: 0,
        // 会员价格
        memberPrice: 0,
        // 优惠价格
        discountPrice: [
          {
            id: '0',
            total: 0,
            price: 0
          }
        ]
      },
      preSetData: {
        brandList: [
          {
            value: '0',
            label: '尤妮佳'
          },
          {
            value: '1',
            label: '香奈儿'
          },
          {
            value: '2',
            label: 'SKII'
          },
          {
            value: '3',
            label: '华为'
          },
          {
            value: '4',
            label: '海尔'
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss"></style>
