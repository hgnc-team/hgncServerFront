<template>
  <div class="">
    <el-cascader
      :options="firstClass"
      :props="props"
      @active-item-change="handleItemChange" />
  </div>
</template>

<script>
import { getTopClass, getSecondClass } from '@/api/goodsManage'
// import _ from 'lodash'

export default {
  name: 'CateCasecader',
  data() {
    return {
      firstClass: [],
      props: {
        value: 'id',
        children: 'children',
        label: 'name'
      },
      // api接口
      cateCasecaderMapApi: {
        // 顶级分类
        firstClass: getTopClass,
        // 二级分类
        secondClass: getSecondClass
      }
    }
  },
  mounted() {
    // 获取顶级分类
    this.cateCasecaderMapApi.firstClass({
      classScheme: 'cat1'
    })
      .then(res => {
        console.log(res)
        if (res.status === 200) {
          const tempArr = []
          res.data.forEach(o => {
            tempArr.push({
              id: o.id,
              name: o.name,
              children: []
            })
          })
          this.firstClass = tempArr
        }
      })
  },
  methods: {
    handleItemChange(val) {
      console.log('active item:', val)
      this.cateCasecaderMapApi.secondClass({
        topClass: val
      })
        .then(res => {
          if (res.status === 200) {
            res.data.forEach(o => {
              this.firstClass.forEach(o1 => {
                if (o.pid === o1.id) {
                  o1.children.push({
                    id: o.id,
                    name: o.name,
                    children: null
                  })
                }
              })
            })
          }
        })
    }
  }
}
</script>

<style lang="scss">
</style>
