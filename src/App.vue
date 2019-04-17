<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default{
  name: 'App'
}
</script>
<style lang="scss">
// 引入bootstrap;此bootstrap定制过
@import './styles/bootstrap/stylesheets/bootstrap.scss';
@import './styles/main.scss';

// 页面通用样式
.contentwrapper{
  // 列表顶部管总标题
  .heading{
    border-bottom: 1px solid #dcdcdc;
    margin-bottom: 18px;
    padding-bottom: 5px;
  }
}

//列表列可编辑popper弹窗样式
.editablePopper{
  padding:0;
}
.py-text-danger{
  // 区别于bootstrap工具类.text-danger
  color:#c62626
}
</style>
