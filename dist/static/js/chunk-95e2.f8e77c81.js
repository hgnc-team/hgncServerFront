(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-95e2"],{HGfo:function(e,t,a){"use strict";var l=a("LvDl"),i=a.n(l),r={name:"GoodsTableCustomTd",props:{type:{type:String,default:"text"},linkColor:{type:String,default:"normal"},data:{type:Object,default:null},currentId:{type:String,default:""},isRowMenuWrapCell:{type:Boolean,default:!1},prop:{type:String,default:""},name:{type:String,default:""}},data:function(){return{formModel:{},copyData:i.a.clone(this.data),preList:{reviewStatusList:[{value:"-1",label:"请选择审核状态"},{value:"0",label:"未审核"},{value:"1",label:"审核未通过"},{value:"2",label:"已审核"},{value:"3",label:"无需审核"}]}}},methods:{resetData:function(){}}},s=(a("tSoF"),a("KHd+")),o=Object(s.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",["image"===e.type?a("span",{staticClass:"thumb-img-wrap"},[a("el-popover",{attrs:{placement:"right","popper-class":"editablePopper",trigger:"click"}},[a("img",{staticStyle:{width:"180px",height:"180px","z-index":"11"},attrs:{src:e.data.thumb}}),e._v(" "),a("span",{staticClass:"editable-click cursor_pointer",attrs:{slot:"reference"},slot:"reference"},[a("img",{attrs:{src:e.data.thumb}})])])],1):"input"===e.type?a("span",[a("el-popover",{attrs:{placement:"top","popper-class":"editablePopper",trigger:"click"},on:{hide:e.resetData}},[a("div",{staticClass:"editable-container"},[a("h3",{staticClass:"popover-title"},[e._v("请输入"+e._s(e.name))]),e._v(" "),a("div",{staticClass:"popover-content"},[a("el-form",{staticClass:"editable-form-inline",attrs:{inline:!0,model:e.data}},[a("el-form-item",{attrs:{label:""}},[a("el-input",{attrs:{size:"mini",clearable:""},model:{value:e.data[e.prop],callback:function(t){e.$set(e.data,e.prop,t)},expression:"data[prop]"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("确定")])],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"default",size:"mini"}},[e._v("取消")])],1)],1)],1)]),e._v(" "),a("span",{staticClass:"editable-click cursor_pointer",attrs:{slot:"reference"},slot:"reference"},[e._v(e._s(e.copyData[e.prop]))])]),e._v(" "),a("br"),e._v(" "),e.isRowMenuWrapCell&&e.data.id===e.currentId?a("span",[a("ul",{staticClass:"goodsOpMenu"},[a("li",[a("router-link",{attrs:{to:"/goodsManage/index/prodEdit"}},[e._v("编辑")])],1),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6)])]):e._e()],1):"switch"===e.type?a("span",[a("el-form",{attrs:{inline:!0,model:e.data}},[a("el-switch",{model:{value:e.data[e.prop],callback:function(t){e.$set(e.data,e.prop,t)},expression:"data[prop]"}})],1)],1):"text"===e.type?a("span",[a("span",{class:{"py-text-danger":"danger"===e.linkColor}},[e._v(e._s(e.data[e.prop]))])]):"select"===e.type?a("span",[a("el-popover",{attrs:{placement:"top","popper-class":"editablePopper",trigger:"click"},on:{hide:e.resetData}},[a("div",{staticClass:"editable-container"},[a("h3",{staticClass:"popover-title"},[e._v("请输入"+e._s(e.name))]),e._v(" "),a("div",{staticClass:"popover-content"},[a("el-form",{staticClass:"editable-form-inline",attrs:{inline:!0,model:e.data}},[a("el-form-item",{attrs:{label:""}},[a("el-select",{attrs:{size:"mini",placeholder:"请选择审核状态","value-key":"value"},model:{value:e.data.reviewStatus,callback:function(t){e.$set(e.data,"reviewStatus",t)},expression:"data.reviewStatus"}},e._l(e.preList.reviewStatusList,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e}})}))],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("确定")])],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"default",size:"mini"}},[e._v("取消")])],1)],1)],1)]),e._v(" "),a("span",{staticClass:"editable-click cursor_pointer",attrs:{slot:"reference"},slot:"reference"},[e._v(e._s(e.copyData[e.prop]))])])],1):e._e()])},[function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("a",{attrs:{href:"jvascript:void(0)"}},[this._v("商品属性")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("a",{attrs:{href:"jvascript:void(0)"}},[this._v("商品相册")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("a",{attrs:{href:"jvascript:void(0)"}},[this._v("关联商品")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("a",{attrs:{href:"jvascript:void(0)"}},[this._v("关联文章")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("a",{attrs:{href:"jvascript:void(0)"}},[this._v("预览")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("a",{attrs:{href:"jvascript:void(0)"}},[this._v("导入商品库")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("a",{staticClass:"py-text-danger",attrs:{href:"jvascript:void(0)"}},[this._v("删除")])])}],!1,null,"172a4b5c",null);o.options.__file="goodsTableCustomTd.vue";t.a=o.exports},"Os/B":function(e,t,a){},X2y1:function(e,t,a){},"lbq+":function(e,t,a){"use strict";a.r(t);var l=[{prop:"thumb",name:"缩略图",type:"image",editable:!1,sortable:!1},{prop:"goodName",name:"商品名称",type:"input",editable:!0,sortable:!0,isRowMenuWrapCell:!1},{prop:"sellerName",name:"商家名称",type:"text",linkColor:"danger",editable:!1,sortable:!1},{prop:"reviewStatus",name:"审核",type:"select",editable:!0,sortable:!1},{prop:"goodsNo",name:"货号",type:"input",editable:!0,sortable:!0},{prop:"price",name:"价格",type:"input",editable:!0,sortable:!0},{prop:"onSale",name:"上架",type:"switch",editable:!0,sortable:!1},{prop:"prime",name:"精品",type:"switch",editable:!0,sortable:!1},{prop:"new",name:"新品",type:"switch",editable:!0,sortable:!1},{prop:"hot",name:"热销",type:"switch",editable:!0,sortable:!1},{prop:"inventory",name:"库存",type:"input",editable:!0,sortable:!0},{prop:"sort",name:"排序",type:"input",editable:!0,sortable:!0}],i=a("HGfo"),r=a("LvDl"),s=a.n(r),o=a("t3Un");function n(e){return Object(o.a)({url:"/v1/api/goods/list",method:"post",data:e})}var p={name:"GoodsManageIndex",components:{goodsTableCustomTd:i.a},data:function(){return{pageNav:{total:0,pageNo:1,pageSize:10},goodsManageMapApi:{query:n},currentLevel:0,tableSheme:l,currentId:"",tableData:[],mainForm:{reviewStatus:{value:"-1",label:"请选择审核状态"},seller:{value:"-1",label:"请选择商家"},batchOp:{value:"-1",label:"批量操作",icon:""},sellerKeyWord:"",goodsKeyWord:""},preList:{reviewStatusList:[{value:"-1",label:"请选择审核状态"},{value:"0",label:"未审核"},{value:"1",label:"审核未通过"},{value:"2",label:"已审核"},{value:"3",label:"无需审核"}],sellerList:[{value:"-1",label:"请选择商家"},{value:"0",label:"天天果园"},{value:"1",label:"测试入住店铺"}],batchOpList:[{value:"0",label:"移至回收站",iconType:"fas",icon:"archive"},{value:"1",label:"上架",iconType:"fas",icon:"arrow-alt-circle-up"},{value:"2",label:"下架",iconType:"fas",icon:"arrow-alt-circle-down"},{value:"3",label:"精品",iconType:"fas",icon:"star"},{value:"4",label:"取消精品",iconType:"far",icon:"star"},{value:"5",label:"新品",iconType:"fas",icon:"flag"},{value:"6",label:"取消新品",iconType:"far",icon:"flag"},{value:"7",label:"热销",iconType:"fas",icon:"thumbs-up"},{value:"8",label:"取消热销",iconType:"far",icon:"thumbs-up"},{value:"9",label:"转移到分类",iconType:"fas",icon:"share"},{value:"10",label:"审核通过",iconType:"fas",icon:"check-circle"},{value:"11",label:"审核未通过",iconType:"fas",icon:"times-circle"},{value:"12",label:"设为未审核",iconType:"fas",icon:"question-circle"},{value:"13",label:"无需审核",iconType:"fas",icon:"dot-circle"}]}}},mounted:function(){this.getProdsListByPageNo()},methods:{getProdsListByPageNo:function(){var e=this;this.goodsManageMapApi.query({page:this.pageNav.pageNo,pageSize:this.pageNav.pageSize,orderBy:[["price","desc"]]}).then(function(t){var a=[];200===t.status&&(t.data.data.forEach(function(l){e.pageNav.total=t.data.total,a.push({id:l.id,thumb:l.imageUrl,goodName:l.title,sellerName:"后台无此列数据",reviewStatus:1,goodsNo:l.id,price:l.price,onSale:1===l.alive,prime:1,new:1,hot:1,inventory:l.inventory,sort:0})}),e.tableData=a)})},handleSizeChange:function(e){this.pageNav.pageSize=e,this.getProdsListByPageNo()},handleCurrentChange:function(e){this.pageNav.pageNo=e,this.getProdsListByPageNo()},handleCommand:function(e){console.log(e),this.mainForm.batchOp=e},handleCellMouseEnter:function(e,t,a,l){var i=this;s.a.forEach(this.tableSheme,function(t,a){"isRowMenuWrapCell"in t&&(t.isRowMenuWrapCell=!0,i.currentId=e.id)})},handleCellMouseLeave:function(e,t,a,l){s.a.forEach(this.tableSheme,function(e,t){"isRowMenuWrapCell"in e&&(e.isRowMenuWrapCell=!1)})}}},c=(a("sEso"),a("KHd+")),u=Object(c.a)(p,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",{staticClass:"goods-manage-wrap contentwrapper"},[a("el-main",[a("div",[a("h3",{staticClass:"heading"},[e._v("商品管理")])]),e._v(" "),a("el-form",{ref:"mainSearchForm",attrs:{inline:!0,model:e.mainForm,"label-width":"0"}},[a("el-row",{staticClass:"main-form-row",attrs:{gutter:0}},[a("el-col",{attrs:{span:12}},[a("ul",{staticClass:"nav nav-pills py-nav"},[a("li",{staticClass:"active"},[a("a",{attrs:{href:"javascript:void(0)"}},[e._v("全部\n                "),a("span",{staticClass:"badge badge-info use-plugins-num"},[e._v("18")])])]),e._v(" "),a("li",[a("a",{attrs:{href:"javascript:void(0)"}},[e._v("已上架\n                "),a("span",{staticClass:"badge badge-info use-plugins-num"},[e._v("18")])])]),e._v(" "),a("li",[a("a",{attrs:{href:"javascript:void(0)"}},[e._v("未上架\n                "),a("span",{staticClass:"badge badge-info use-plugins-num"},[e._v("18")])])]),e._v(" "),a("li",[a("a",{attrs:{href:"javascript:void(0)"}},[e._v("自营\n                "),a("span",{staticClass:"badge badge-info use-plugins-num"},[e._v("18")])])])])]),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"请输入商家关键字",size:"mini"},model:{value:e.mainForm.sellerKeyWord,callback:function(t){e.$set(e.mainForm,"sellerKeyWord",t)},expression:"mainForm.sellerKeyWord"}})],1),e._v(" "),a("el-form-item",[a("el-input",{attrs:{placeholder:"请输入商品关键字",size:"mini"},model:{value:e.mainForm.goodsKeyWord,callback:function(t){e.$set(e.mainForm,"goodsKeyWord",t)},expression:"mainForm.goodsKeyWord"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("搜索")])],1)],1)],1),e._v(" "),a("el-row",{staticClass:"main-form-row",attrs:{gutter:0}},[a("el-col",{attrs:{span:12}},[a("el-form-item",[a("el-dropdown",{on:{command:e.handleCommand}},[a("el-button",{attrs:{type:"default",size:"mini"}},[a("font-awesome-icon",{attrs:{icon:["fas","cog"],"fixed-width":""}}),e._v("批量操作"),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})],1),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown",size:"mini"},slot:"dropdown"},e._l(e.preList.batchOpList,function(t){return a("el-dropdown-item",{key:t.value,attrs:{command:t}},[a("font-awesome-icon",{attrs:{icon:[t.iconType,t.icon],"fixed-width":""}}),e._v("\n                  "+e._s(t.label)+"\n                ")],1)}))],1)],1),e._v(" "),a("el-form-item",[a("el-select",{attrs:{size:"mini",placeholder:"请选择审核状态","value-key":"value"},model:{value:e.mainForm.reviewStatus,callback:function(t){e.$set(e.mainForm,"reviewStatus",t)},expression:"mainForm.reviewStatus"}},e._l(e.preList.reviewStatusList,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e}})}))],1),e._v(" "),a("el-form-item",[a("el-select",{attrs:{size:"mini",placeholder:"请选商家","value-key":"value"},model:{value:e.mainForm.seller,callback:function(t){e.$set(e.mainForm,"seller",t)},expression:"mainForm.seller"}},e._l(e.preList.sellerList,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e}})}))],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("筛选")])],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[e._v("placeholder")])],1)],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"header-row-class-name":"py-table-header",stripe:""},on:{"cell-mouse-enter":e.handleCellMouseEnter,"cell-mouse-leave":e.handleCellMouseLeave}},[a("el-table-column",{attrs:{type:"selection"}}),e._v(" "),e._l(e.tableSheme,function(t){return a("el-table-column",{key:t.prop,attrs:{prop:t.prop,label:t.name,sortable:t.sortable},scopedSlots:e._u([{key:"default",fn:function(l){return[a("goods-table-custom-td",{attrs:{"current-id":e.currentId,prop:t.prop,name:t.name,"link-color":t.linkColor,type:t.type,data:l.row,"is-row-menu-wrap-cell":t.isRowMenuWrapCell||!1}})]}}])})})],2),e._v(" "),a("div",{staticClass:"pageNavWrap"},[a("el-pagination",{attrs:{"current-page":e.pageNav.pageNo,"page-sizes":[10,20,50,100],"page-size":e.pageNav.pageSize,total:e.pageNav.total,layout:"total, sizes, prev, pager, next, jumper",background:""},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1),e._v(" "),a("router-view")],1)},[],!1,null,null,null);u.options.__file="index.vue";t.default=u.exports},sEso:function(e,t,a){"use strict";var l=a("Os/B");a.n(l).a},tSoF:function(e,t,a){"use strict";var l=a("X2y1");a.n(l).a}}]);