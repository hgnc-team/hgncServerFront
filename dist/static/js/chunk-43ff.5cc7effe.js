(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-43ff"],{"07wm":function(e,t,a){"use strict";var o=a("EHSX");a.n(o).a},"4AVS":function(e,t,a){"use strict";var o=a("Sl2t");a.n(o).a},EHSX:function(e,t,a){},OdZO:function(e,t,a){"use strict";a.r(t);var o=[{prop:"no",name:"序号",type:"text",editable:!1,sortable:!1},{prop:"storeName",name:"商家名称",type:"text",editable:!1,sortable:!1},{prop:"prodName",name:"商品名称",type:"text",editable:!1,sortable:!1,width:.3*document.body.clientWidth-180},{prop:"prodId",name:"货号",type:"text",editable:!1,sortable:!1},{prop:"price",name:"价格",type:"text",editable:!1,sortable:!1}],n=[{id:"0001",storeName:"测试入驻店铺",prodName:"测试商品",prodId:"699304988",price:55},{id:"0002",storeName:"测试入驻店铺",prodName:"温馨祝福鲜果礼盒",prodId:"699304988",price:139.01},{id:"0003",storeName:"测试入驻店铺",prodName:"温馨祝福鲜果礼盒",prodId:"699304988",price:139.01},{id:"0004",storeName:"测试入驻店铺",prodName:"温馨祝福鲜果礼盒",prodId:"699304988",price:139.01},{id:"0005",storeName:"测试入驻店铺",prodName:"温馨祝福鲜果礼盒",prodId:"699304988",price:139.01},{id:"0006",storeName:"测试入驻店铺",prodName:"温馨祝福鲜果礼盒",prodId:"699304988",price:139.01},{id:"0007",storeName:"测试入驻店铺",prodName:"温馨祝福鲜果礼盒",prodId:"699304988",price:139.01},{id:"0008",storeName:"测试入驻店铺",prodName:"温馨祝福鲜果礼盒",prodId:"699304988",price:139.01},{id:"0009",storeName:"测试入驻店铺",prodName:"温馨祝福鲜果礼盒",prodId:"699304988",price:139.01},{id:"0010",storeName:"测试入驻店铺",prodName:"温馨祝福鲜果礼盒",prodId:"699304988",price:139.01}],i=a("jNkO"),r=a("oU4k"),s=a("LvDl"),c=a.n(s),d={name:"GoodsRecycleBin",components:{CateCasecader:i.a},data:function(){return{multipleSelection:[],pageNav:{total:0,pageNo:1,pageSize:10},tableSheme:o,tableData:n,preList:{batchOpList:[{value:"0",label:"还原",iconType:"fas",icon:"share-square"},{value:"1",label:"删除",iconType:"far",icon:"trash-alt"}]},mainForm:{sellerKeyWord:"",goodsKeyWord:""},goodsRecycleBinMapApi:{query:r.c,del:r.b,recover:r.i}}},mounted:function(){this.renderList()},methods:{handleSelectionChange:function(e){this.multipleSelection=e},recoverGoods:function(e){var t=this,a=[],o=function(e,a){t.$confirm(a,"",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.goodsRecycleBinMapApi.recover(e).then(function(e){200===e.status&&(t.$message({type:"success",message:"恢复成功！"}),t.renderList())})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})};e&&c.a.isObject(e)?(a.push(e.prodId),o(a,"您确定要把该商品还原吗？")):this.multipleSelection.forEach(function(e){a.push(e.prodId),o(a,"您确定要把选中商品还原吗？")})},delGoods:function(e){var t=this,a=[],o=function(e,a){t.$confirm(a,"",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.goodsRecycleBinMapApi.del(e).then(function(e){200===e.status&&(t.$message({type:"success",message:"删除成功！"}),t.renderList())})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})};e&&c.a.isObject(e)?(a.push(e.prodId),o(a,"您确定删除该商品吗？")):this.multipleSelection.forEach(function(e){a.push(e.prodId),o(a,"您确定批量删除选中商品吗？")})},renderList:function(){var e=this;this.goodsRecycleBinMapApi.query({page:this.pageNav.pageNo,pageSize:this.pageNav.pageSize}).then(function(t){if(200===t.status){var a=[];t.data.data.forEach(function(t,o){a.push({no:(e.pageNav.pageNo-1)*e.pageNav.pageSize+o+1,storeName:"后台未提供",prodName:t.title,prodId:t.id,price:t.price})}),e.tableData=a,e.pageNav.total=t.data.total,e.pageNav.pageSize=t.data.pageSize,e.pageNav.pageNo=t.data.page}})},handleSizeChange:function(e){this.pageNav.pageSize=e,this.renderList()},handleCurrentChange:function(e){this.pageNav.pageNo=e,this.renderList()},handleCommand:function(e){this.mainForm.batchOp=e,"0"===e.value?this.recoverGoods():"1"===e.value&&this.delGoods()}}},l=(a("07wm"),a("KHd+")),p=Object(l.a)(d,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",{staticClass:"goods-recycle-bin-wrap contentwrapper"},[a("el-main",[a("div",[a("h3",{staticClass:"heading"},[e._v("商品管理\n        "),a("span",{staticStyle:{float:"right","margin-top":"-3px"}},[a("router-link",{attrs:{to:"/goodsManage/index"}},[a("el-button",{attrs:{type:"default",size:"mini"}},[a("font-awesome-icon",{attrs:{icon:["fas","reply"]}}),e._v("\n              返回商品列表\n            ")],1)],1)],1)])]),e._v(" "),a("el-form",{ref:"mainSearchForm",attrs:{inline:!0,model:e.mainForm,"label-width":"0"}},[a("el-row",{staticClass:"main-form-row",attrs:{gutter:0}},[a("el-col",{attrs:{span:12}},[a("ul",{staticClass:"nav nav-pills py-nav"},[a("li",{staticClass:"active"},[a("a",{attrs:{href:"javascript:void(0)"}},[e._v("全部\n                "),a("span",{staticClass:"badge badge-info use-plugins-num"},[e._v("18")])])]),e._v(" "),a("li",[a("a",{attrs:{href:"javascript:void(0)"}},[e._v("自营\n                "),a("span",{staticClass:"badge badge-info use-plugins-num"},[e._v("18")])])])])]),e._v(" "),a("el-col",{attrs:{span:12}},[e._v("\n           \n        ")])],1),e._v(" "),a("el-row",{staticClass:"main-form-row",attrs:{gutter:0}},[a("el-col",{attrs:{span:12}},[a("el-form-item",[a("el-dropdown",{on:{command:e.handleCommand}},[a("el-button",{attrs:{type:"default",size:"mini"}},[a("font-awesome-icon",{attrs:{icon:["fas","cog"],"fixed-width":""}}),e._v("批量操作"),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})],1),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown",size:"mini"},slot:"dropdown"},e._l(e.preList.batchOpList,function(t){return a("el-dropdown-item",{key:t.value,attrs:{command:t}},[a("font-awesome-icon",{attrs:{icon:[t.iconType,t.icon],"fixed-width":""}}),e._v("\n                  "+e._s(t.label)+"\n                ")],1)}))],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",[a("cate-casecader",{attrs:{size:"mini",placeholder:"所有分类"}})],1),e._v(" "),a("el-form-item",[a("el-input",{attrs:{placeholder:"请输入商家关键字",size:"mini"},model:{value:e.mainForm.sellerKeyWord,callback:function(t){e.$set(e.mainForm,"sellerKeyWord",t)},expression:"mainForm.sellerKeyWord"}})],1),e._v(" "),a("el-form-item",[a("el-input",{attrs:{placeholder:"请输入商品关键字",size:"mini"},model:{value:e.mainForm.goodsKeyWord,callback:function(t){e.$set(e.mainForm,"goodsKeyWord",t)},expression:"mainForm.goodsKeyWord"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("搜索")])],1)],1)],1)],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"header-row-class-name":"py-table-header",stripe:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection"}}),e._v(" "),e._l(e.tableSheme,function(t){return a("el-table-column",{key:t.prop,attrs:{prop:t.prop,label:t.name,sortable:t.sortable,width:t.width},scopedSlots:e._u([{key:"default",fn:function(a){return[e._v("\n          "+e._s(a.row[t.prop])+"\n        ")]}}])})}),e._v(" "),a("el-table-column",{attrs:{prop:"operate",label:"操作",width:"90"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[a("el-button",{attrs:{size:"medium",type:"text",title:"还原"},on:{click:function(a){e.recoverGoods(t.row)}}},[a("font-awesome-icon",{attrs:{icon:["fas","share-square"],size:"lg","fixed-width":""}})],1),e._v(" "),a("el-button",{attrs:{size:"medium",type:"text",title:"删除"},on:{click:function(a){e.delGoods(t.row)}}},[a("font-awesome-icon",{staticClass:"py-text-danger",attrs:{icon:["fas","trash-alt"],size:"lg","fixed-width":""}})],1)],1)]}}])})],2),e._v(" "),a("div",{staticClass:"pageNavWrap"},[a("el-pagination",{attrs:{"current-page":e.pageNav.pageNo,"page-sizes":[10,20,50,100],"page-size":e.pageNav.pageSize,total:e.pageNav.total,layout:"total, sizes, prev, pager, next, jumper",background:""},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)],1)},[],!1,null,"63e227f4",null);p.options.__file="goods-recycle-bin.vue";t.default=p.exports},Sl2t:function(e,t,a){},jNkO:function(e,t,a){"use strict";var o=a("oU4k"),n={name:"CateCasecader",props:{size:{type:String,default:"medium"},placeholder:{type:String,default:"请选择"}},data:function(){return{firstClass:[],props:{value:"id",children:"children",label:"name"},cateCasecaderMapApi:{firstClass:o.g,secondClass:o.f}}},mounted:function(){var e=this;console.log(this.size),this.cateCasecaderMapApi.firstClass({classScheme:"cat1"}).then(function(t){if(console.log(t),200===t.status){var a=[];t.data.forEach(function(e){a.push({id:e.id,name:e.name,children:[]})}),e.firstClass=a}})},methods:{handleItemChange:function(e){var t=this;this.$store.commit("SET_SEL_CATE_ARR",e),this.cateCasecaderMapApi.secondClass({topClass:e}).then(function(e){200===e.status&&e.data.forEach(function(e){t.firstClass.forEach(function(t){e.pid===t.id&&t.children.push({id:e.id,name:e.name,children:null})})})})}}},i=(a("4AVS"),a("KHd+")),r=Object(i.a)(n,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{},[t("el-cascader",{attrs:{options:this.firstClass,props:this.props,size:this.size,placeholder:this.placeholder},on:{"active-item-change":this.handleItemChange}})],1)},[],!1,null,null,null);r.options.__file="index.vue";t.a=r.exports},oU4k:function(e,t,a){"use strict";a.d(t,"e",function(){return n}),a.d(t,"g",function(){return i}),a.d(t,"f",function(){return r}),a.d(t,"a",function(){return s}),a.d(t,"c",function(){return c}),a.d(t,"h",function(){return d}),a.d(t,"j",function(){return l}),a.d(t,"d",function(){return p}),a.d(t,"b",function(){return u}),a.d(t,"i",function(){return m});var o=a("t3Un");function n(e){return Object(o.b)({url:"/v1/api/goods/list",method:"post",data:e})}function i(e){return Object(o.b)({url:"/v1/api/goods/topClass",method:"post",data:e})}function r(e){return Object(o.b)({url:"/v1/api/goods/secondClass",method:"post",data:e})}function s(e){return Object(o.b)({url:"/v1/api/goods/add",method:"post",data:e,headers:{"Content-Type":"multipart/form-data"}})}function c(e){return Object(o.b)({url:"/v1/api/goods/recycle/list",method:"post",data:e})}function d(e){return Object(o.b)({url:"/v1/api/goods/del",method:"post",data:{ids:e}})}function l(e){return Object(o.b)({url:"/v1/api/user/images/upload",method:"post",data:e,headers:{"Content-Type":"multipart/form-data"}})}function p(){return Object(o.b)({url:"/v1/api/user/images/myImages",method:"post"})}function u(e){return Object(o.b)({url:"/v1/api/goods/recycle/clear",method:"post",data:{ids:e}})}function m(e){return Object(o.b)({url:"/v1/api/goods/recycle/recover",method:"post",data:{ids:e}})}}}]);