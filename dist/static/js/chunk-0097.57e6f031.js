(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0097"],{"3xJN":function(e,t,a){},"4AVS":function(e,t,a){"use strict";var n=a("Sl2t");a.n(n).a},DIUQ:function(e,t,a){"use strict";a.r(t);var n=[{prop:"thumb",name:"缩略图",type:"image",editable:!1,sortable:!1},{prop:"goodName",name:"商品名称",type:"input",editable:!0,sortable:!0,isRowMenuWrapCell:!1},{prop:"goodsNo",name:"货号",type:"input",editable:!0,sortable:!0},{prop:"price",name:"价格",type:"input",editable:!0,sortable:!0},{prop:"onSale",name:"上架",type:"switch",editable:!0,sortable:!1},{prop:"sort",name:"排序",type:"input",editable:!0,sortable:!0}],r=a("HGfo"),i=a("LvDl"),o=a.n(i),s=a("oU4k"),l=a("jNkO"),d={name:"GoodsRepoList",components:{goodsTableCustomTd:r.a,CateCasecader:l.a},data:function(){return{pageNav:{total:0,pageNo:1,pageSize:10},mainForm:{goodsKeyWord:"",selectedBrand:""},tableSheme:n,currentId:"",tableData:[],goodsRepoMapApi:{query:s.f},preList:{batchOpList:[{value:"0",label:"移至回收站",iconType:"fas",icon:"archive"},{value:"1",label:"上架",iconType:"fas",icon:"arrow-alt-circle-up"},{value:"2",label:"下架",iconType:"fas",icon:"arrow-alt-circle-down"}],brandList:[{value:"0",label:"尤妮佳"},{value:"1",label:"香奈儿"},{value:"2",label:"SKII"},{value:"3",label:"华为"},{value:"4",label:"海尔"}]}}},mounted:function(){this.getProdsListByPageNo()},methods:{getProdsListByPageNo:function(){var e=this;this.goodsRepoMapApi.query({page:this.pageNav.pageNo,pageSize:this.pageNav.pageSize}).then(function(t){var a=[];200===t.status&&(t.data.data.forEach(function(n){e.pageNav.total=t.data.total,a.push({id:n.id,thumb:"https://images.maiyidesan.cn/goods/"+n.id+"/"+n.imageUrl,goodName:n.title,type:n.type.split(";"),sellerName:"后台无此列数据",reviewStatus:1,goodsNo:n.id,price:n.price,onSale:1===n.alive,prime:!0,new:!0,hot:!0,inventory:n.inventory,sort:0})}),e.tableData=a)})},handleSizeChange:function(e){this.pageNav.pageSize=e,this.getProdsListByPageNo()},handleCurrentChange:function(e){this.pageNav.pageNo=e,this.getProdsListByPageNo()},handleCommand:function(e){console.log(e)},handleCellMouseEnter:function(e,t,a,n){var r=this;o.a.forEach(this.tableSheme,function(t,a){"isRowMenuWrapCell"in t&&(t.isRowMenuWrapCell=!0,r.currentId=e.id)})},handleCellMouseLeave:function(e,t,a,n){o.a.forEach(this.tableSheme,function(e,t){"isRowMenuWrapCell"in e&&(e.isRowMenuWrapCell=!1)})}}},c=(a("YvC4"),a("KHd+")),p=Object(c.a)(d,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",{staticClass:"contentwrapper"},[a("el-main",[a("div",[a("h3",{staticClass:"heading"},[e._v("商品库商品(SPU)\n        "),a("span",{staticStyle:{float:"right","margin-top":"-3px"}},[a("router-link",{attrs:{to:"/goodsRepo/list"}},[a("el-button",{attrs:{type:"default",size:"mini"}},[a("font-awesome-icon",{attrs:{icon:["fas","file-download"]}}),e._v("\n              导出结果\n            ")],1)],1),e._v(" "),a("router-link",{attrs:{to:"/goodsRepo/list"}},[a("el-button",{attrs:{type:"default",size:"mini"}},[a("font-awesome-icon",{attrs:{icon:["fas","file-upload"]}}),e._v("\n              批量导入\n            ")],1)],1),e._v(" "),a("router-link",{attrs:{to:"/goodsRepo/list"}},[a("el-button",{attrs:{type:"default",size:"mini"}},[a("font-awesome-icon",{attrs:{icon:["fas","plus"]}}),e._v("\n              添加商品\n            ")],1)],1)],1)])]),e._v(" "),a("el-form",{ref:"mainSearchForm",attrs:{inline:!0,model:e.mainForm,"label-width":"0"}},[a("el-row",{staticClass:"main-form-row",attrs:{gutter:0}},[a("el-col",{attrs:{span:12}},[a("el-form-item",[a("el-dropdown",{on:{command:e.handleCommand}},[a("el-button",{attrs:{type:"default",size:"mini"}},[a("font-awesome-icon",{attrs:{icon:["fas","cog"],"fixed-width":""}}),e._v("批量操作"),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})],1),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown",size:"mini"},slot:"dropdown"},e._l(e.preList.batchOpList,function(t){return a("el-dropdown-item",{key:t.value,attrs:{command:t}},[a("font-awesome-icon",{attrs:{icon:[t.iconType,t.icon],"fixed-width":""}}),e._v("\n                  "+e._s(t.label)+"\n                ")],1)}))],1)],1),e._v(" "),a("el-form-item",[a("cate-casecader",{attrs:{size:"mini",clearable:!0}})],1),e._v(" "),a("el-form-item",[a("el-select",{attrs:{placeholder:"请选择",size:"mini",clearable:""},model:{value:e.mainForm.selectedBrand,callback:function(t){e.$set(e.mainForm,"selectedBrand",t)},expression:"mainForm.selectedBrand"}},e._l(e.preList.brandList,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("筛选")])],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",[a("el-form-item",[a("el-input",{attrs:{placeholder:"请输入商品关键字",size:"mini",clearable:""},model:{value:e.mainForm.goodsKeyWord,callback:function(t){e.$set(e.mainForm,"goodsKeyWord",t)},expression:"mainForm.goodsKeyWord"}})],1)],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("搜索")])],1)],1)],1)],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"header-row-class-name":"py-table-header",stripe:""},on:{"cell-mouse-enter":e.handleCellMouseEnter,"cell-mouse-leave":e.handleCellMouseLeave}},[a("el-table-column",{attrs:{type:"selection"}}),e._v(" "),e._l(e.tableSheme,function(t){return a("el-table-column",{key:t.prop,attrs:{prop:t.prop,label:t.name,sortable:t.sortable},scopedSlots:e._u([{key:"default",fn:function(n){return[a("goods-table-custom-td",{attrs:{"table-user-name":"GoodsRepoList","current-id":e.currentId,prop:t.prop,name:t.name,"link-color":t.linkColor,type:t.type,data:n.row,"is-row-menu-wrap-cell":t.isRowMenuWrapCell||!1}})]}}])})})],2),e._v(" "),a("div",{staticClass:"pageNavWrap"},[a("el-pagination",{attrs:{"current-page":e.pageNav.pageNo,"page-sizes":[10,20,50,100],"page-size":e.pageNav.pageSize,total:e.pageNav.total,layout:"total, sizes, prev, pager, next, jumper",background:""},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)],1)},[],!1,null,null,null);p.options.__file="goods-repo-list.vue";t.default=p.exports},HGfo:function(e,t,a){"use strict";var n=a("oU4k"),r=a("LvDl"),i=a.n(r),o={name:"GoodsTableCustomTd",props:{type:{type:String,default:"text"},linkColor:{type:String,default:"normal"},data:{type:Object,default:null},currentId:{type:String,default:""},isRowMenuWrapCell:{type:Boolean,default:!1},prop:{type:String,default:""},name:{type:String,default:""},tableUserName:{type:String,default:"GoodsManageIndex"}},data:function(){return{goodOperMapApi:{fakeDel:n.i},formModel:{},copyData:i.a.clone(this.data),preList:{reviewStatusList:[{value:"-1",label:"请选择审核状态"},{value:"0",label:"未审核"},{value:"1",label:"审核未通过"},{value:"2",label:"已审核"},{value:"3",label:"无需审核"}]}}},methods:{resetData:function(){},fakeDel:function(e){var t=this;this.$confirm("您确定把该商品放入回收站吗？","",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.goodOperMapApi.fakeDel([e.id]).then(function(e){console.log(e),200===e.status&&(t.$message({type:"success",message:"删除成功，已移入回收站"}),t.$root.eventHub.$emit("refreshGoodsListEvent"))})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})}}},s=(a("lS6/"),a("KHd+")),l=Object(s.a)(o,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",["image"===e.type?a("span",{staticClass:"thumb-img-wrap"},[a("el-popover",{attrs:{placement:"right","popper-class":"editablePopper",trigger:"click"}},[a("img",{staticStyle:{width:"180px",height:"180px","z-index":"11"},attrs:{src:e.data.thumb}}),e._v(" "),a("span",{staticClass:"editable-click cursor_pointer",attrs:{slot:"reference"},slot:"reference"},[a("img",{attrs:{src:e.data.thumb}})])])],1):"input"===e.type?a("span",[a("el-popover",{attrs:{placement:"top","popper-class":"editablePopper",trigger:"click"},on:{hide:e.resetData}},[a("div",{staticClass:"editable-container"},[a("h3",{staticClass:"popover-title"},[e._v("请输入"+e._s(e.name))]),e._v(" "),a("div",{staticClass:"popover-content"},[a("el-form",{staticClass:"editable-form-inline",attrs:{inline:!0,model:e.data}},[a("el-form-item",{attrs:{label:""}},[a("el-input",{attrs:{size:"mini",clearable:""},model:{value:e.data[e.prop],callback:function(t){e.$set(e.data,e.prop,t)},expression:"data[prop]"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("确定")])],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"default",size:"mini"}},[e._v("取消")])],1)],1)],1)]),e._v(" "),a("span",{staticClass:"editable-click cursor_pointer",staticStyle:{display:"inline-block","max-width":"15em",height:"2em","text-overflow":"ellipsis",overflow:"hidden","white-space":"nowrap"},attrs:{slot:"reference",title:e.data[e.prop]},slot:"reference"},[e._v(e._s(e.data[e.prop]))])]),e._v(" "),a("br"),e._v(" "),e.isRowMenuWrapCell&&e.data.id===e.currentId?a("span",["GoodsManageIndex"===e.tableUserName?a("ul",{staticClass:"goodsOpMenu"},[a("li",[a("router-link",{attrs:{to:{name:"prodEditIndex",params:e.data,query:{tabIndex:0,prodId:e.data.id}}}},[e._v("编辑")])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:{name:"prodEditIndex",params:e.data,query:{tabIndex:2,prodId:e.data.id}}}},[e._v("商品属性")])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:{name:"prodEditIndex",params:e.data,query:{tabIndex:3,prodId:e.data.id}}}},[e._v("商品相册")])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:{name:"prodEditIndex",params:e.data,query:{tabIndex:4,prodId:e.data.id}}}},[e._v("关联商品")])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:{name:"prodEditIndex",params:e.data,query:{tabIndex:5,prodId:e.data.id}}}},[e._v("关联文章")])],1),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),a("li",[a("a",{staticClass:"py-text-danger",attrs:{href:"jvascript:void(0)"},on:{click:function(t){e.fakeDel(e.data)}}},[e._v("删除")])])]):e._e(),e._v(" "),"GoodsRepoList"===e.tableUserName?a("ul",{staticClass:"goodsOpMenu"},[a("li",[a("router-link",{attrs:{to:{name:"prodEditIndex",params:e.data,query:{tabIndex:0,prodId:e.data.id}}}},[e._v("编辑")])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:{name:"prodEditIndex",params:e.data,query:{tabIndex:2,prodId:e.data.id}}}},[e._v("商品属性")])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:{name:"prodEditIndex",params:e.data,query:{tabIndex:3,prodId:e.data.id}}}},[e._v("商品相册")])],1),e._v(" "),e._m(2),e._v(" "),a("li",[a("a",{staticClass:"py-text-danger",attrs:{href:"jvascript:void(0)"},on:{click:function(t){e.fakeDel(e.data)}}},[e._v("删除")])])]):e._e()]):e._e()],1):"switch"===e.type?a("span",[a("el-form",{attrs:{inline:!0,model:e.data}},[a("el-switch",{model:{value:e.data[e.prop],callback:function(t){e.$set(e.data,e.prop,t)},expression:"data[prop]"}})],1)],1):"text"===e.type?a("span",[a("span",{class:{"py-text-danger":"danger"===e.linkColor}},[e._v(e._s(e.data[e.prop]))])]):"select"===e.type?a("span",[a("el-popover",{attrs:{placement:"top","popper-class":"editablePopper",trigger:"click"},on:{hide:e.resetData}},[a("div",{staticClass:"editable-container"},[a("h3",{staticClass:"popover-title"},[e._v("请输入"+e._s(e.name))]),e._v(" "),a("div",{staticClass:"popover-content"},[a("el-form",{staticClass:"editable-form-inline",attrs:{inline:!0,model:e.data}},[a("el-form-item",{attrs:{label:""}},[a("el-select",{attrs:{size:"mini",placeholder:"请选择审核状态","value-key":"value"},model:{value:e.data.reviewStatus,callback:function(t){e.$set(e.data,"reviewStatus",t)},expression:"data.reviewStatus"}},e._l(e.preList.reviewStatusList,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e}})}))],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("确定")])],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"default",size:"mini"}},[e._v("取消")])],1)],1)],1)]),e._v(" "),a("span",{staticClass:"editable-click cursor_pointer",attrs:{slot:"reference"},slot:"reference"},[e._v(e._s(e.data[e.prop]))])])],1):e._e()])},[function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("a",{attrs:{href:"jvascript:void(0)"}},[this._v("预览")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("a",{attrs:{href:"jvascript:void(0)"}},[this._v("导入商品库")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("a",{attrs:{href:"jvascript:void(0)"}},[this._v("预览")])])}],!1,null,"29893c0f",null);l.options.__file="goodsTableCustomTd.vue";t.a=l.exports},Sl2t:function(e,t,a){},YvC4:function(e,t,a){"use strict";var n=a("nYkQ");a.n(n).a},jNkO:function(e,t,a){"use strict";var n=a("oU4k"),r=a("LvDl"),i=a.n(r),o={name:"CateCasecader",props:{size:{type:String,default:"medium"},placeholder:{type:String,default:"请选择"},cateId:{type:Array,default:function(){return[]}}},data:function(){return{firstClass:[],clearable:!1,props:{value:"id",children:"children",label:"name"},cateCasecaderMapApi:{firstClass:n.h,secondClass:n.g}}},computed:{currentValue:{get:function(){return this.cateId},set:function(e){this.cateId=e}}},mounted:function(){var e=this;this.clearable=this.$attrs.clearable,setTimeout(function(){e.init()},0)},methods:{init:function(){var e=this;i.a.isArray(this.cateId)&&this.cateCasecaderMapApi.firstClass({classScheme:"cat1"}).then(function(t){if(200===t.status){var a=[],n=[];t.data.forEach(function(t){t.id===e.cateId[0]&&e.cateId[1]&&e.cateCasecaderMapApi.secondClass({topClass:[e.cateId[0]]}).then(function(e){200===e.status&&e.data.forEach(function(e){n.push({id:e.id,name:e.name,children:null})})}),a.push({id:t.id,name:t.name,children:n})}),e.firstClass=a}}),this.currentValue=this.cateId},handleValueChange:function(){this.$emit("value-change",this.currentValue)},handleItemChange:function(e){var t=this;this.cateCasecaderMapApi.secondClass({topClass:e}).then(function(a){200===a.status&&(t.firstClass[i.a.findIndex(t.firstClass,function(t){return t.id===e[0]})].children=i.a.map(a.data,function(e){return{id:e.id,name:e.name,children:null}}))})}}},s=(a("4AVS"),a("KHd+")),l=Object(s.a)(o,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[a("el-cascader",{attrs:{clearable:e.clearable,options:e.firstClass,props:e.props,size:e.size,placeholder:e.placeholder},on:{change:e.handleValueChange,"active-item-change":e.handleItemChange},model:{value:e.currentValue,callback:function(t){e.currentValue=t},expression:"currentValue"}})],1)},[],!1,null,null,null);l.options.__file="index.vue";t.a=l.exports},"lS6/":function(e,t,a){"use strict";var n=a("3xJN");a.n(n).a},nYkQ:function(e,t,a){},oU4k:function(e,t,a){"use strict";a.d(t,"f",function(){return r}),a.d(t,"h",function(){return i}),a.d(t,"g",function(){return o}),a.d(t,"a",function(){return s}),a.d(t,"d",function(){return l}),a.d(t,"i",function(){return d}),a.d(t,"k",function(){return c}),a.d(t,"e",function(){return p}),a.d(t,"b",function(){return u}),a.d(t,"j",function(){return m}),a.d(t,"c",function(){return f});var n=a("t3Un");function r(e){return Object(n.b)({url:"/v1/api/goods/list",method:"post",data:e})}function i(e){return Object(n.b)({url:"/v1/api/goods/topClass",method:"post",data:e})}function o(e){return Object(n.b)({url:"/v1/api/goods/secondClass",method:"post",data:e})}function s(e){return Object(n.b)({url:"/v1/api/goods/create",method:"post",data:e})}function l(e){return Object(n.b)({url:"/v1/api/goods/recycle/list",method:"post",data:e})}function d(e){return Object(n.b)({url:"/v1/api/goods/del",method:"post",data:{ids:e}})}function c(e){return Object(n.b)({url:"/v1/api/user/images/upload",method:"post",data:e,headers:{"Content-Type":"multipart/form-data"}})}function p(e){return Object(n.b)({url:"/v1/api/user/images/myImages",method:"post",data:e})}function u(e){return Object(n.b)({url:"/v1/api/goods/recycle/clear",method:"post",data:{ids:e}})}function m(e){return Object(n.b)({url:"/v1/api/goods/recycle/recover",method:"post",data:{ids:e}})}function f(e){return Object(n.b)({url:"/v1/api/goods/edit",method:"post",data:e})}}}]);