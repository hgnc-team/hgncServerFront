(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-a6e3"],{"1YlP":function(e,t,a){"use strict";var s=a("hpA0");a.n(s).a},"3V2L":function(e,t,a){"use strict";var s=a("k/oa");a.n(s).a},"6jJE":function(e,t,a){},"9G9v":function(e,t,a){"use strict";var s=a("oU4k"),l=a("t3Un"),i={name:"PicsManagement",props:{dialogVisible:{type:Boolean,default:!1}},data:function(){return{userId:this.$store.getters.id,picsManagementMapApi:{upload:s.j,query:s.d},imagesList:[],postUrl:l.a+"/user/images/upload"}},mounted:function(){this.visible=this.dialogVisible,this.refreshImageList()},methods:{togglePicsCenter:function(){this.$root.eventHub.$emit("togglePicsCenterEvent")},refreshImageList:function(){var e=this;this.picsManagementMapApi.query().then(function(t){if(200===t.status){var a=[];t.data.forEach(function(t){a.push("https://images.maiyidesan.cn/users/"+e.userId+"/"+t.path)}),e.imagesList=a}})},upload:function(e){var t=this,a=new FormData;a.append("images",e.file),this.picsManagementMapApi.upload(a).then(function(e){200===e.status&&(t.$message({type:"success",message:"图片上传成功！"}),t.refreshImageList())})}}},o=(a("ger1"),a("KHd+")),n=Object(o.a)(i,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pics-manage-wrap"},[a("el-dialog",{attrs:{visible:e.dialogVisible,"show-close":!1,"append-to-body":!0,"custom-class":"pics-manage-compontent-dialog",title:""}},[a("el-container",{staticClass:"left-side",staticStyle:{height:"500px"}},[a("el-aside",{staticStyle:{"background-color":"#212121",position:"relative"},attrs:{width:"120px"}},[a("div",{staticClass:"title-wrap"},[a("h2",[e._v("素材中心")])]),e._v(" "),a("div",{staticClass:"left-side-inner"},[a("ul",{staticClass:"left-menu-wrap"},[a("li",{staticClass:"selected"},[a("span",[e._v("图片库")])]),e._v(" "),a("li",[a("span",[e._v("视频库")])]),e._v(" "),a("li",[a("span",[e._v("音乐库")])]),e._v(" "),a("li",[a("span",[e._v("动图库")])])])]),e._v(" "),a("div",{staticClass:"upload-btn-wrap"},[a("el-upload",{staticClass:"upload-btn-inner",attrs:{action:e.postUrl,"http-request":e.upload}},[a("el-button",{attrs:{size:"mini"}},[a("font-awesome-icon",{attrs:{icon:["fas","cloud-upload-alt"]}}),e._v("\n              本地上传\n            ")],1)],1)],1)]),e._v(" "),a("el-container",{staticClass:"right-main"},[a("el-header",{staticClass:"category-hd-wrap",staticStyle:{height:"40px"}},[a("ul",{staticClass:"category"},[a("li",{staticClass:"item active"},[e._v("上传")])]),e._v(" "),a("div",{staticClass:"close pull-right",on:{click:function(t){e.togglePicsCenter()}}},[a("font-awesome-icon",{attrs:{icon:["fas","times"]}})],1)]),e._v(" "),a("el-main",{staticClass:"category-bd-wrap"},[a("ul",{staticClass:"images-list"},e._l(e.imagesList,function(t,s){return a("li",{key:s,staticClass:"image-item"},[a("div",{staticClass:"cover",style:{"background-image":"url('"+t+"')"}},[a("div",{staticClass:"mask"}),e._v(" "),a("span",{staticClass:"icon preview",attrs:{"data-hint":"预览"}},[a("img",{directives:[{name:"preview",rawName:"v-preview",value:t,expression:"item"}],key:s,staticClass:"placeholder-img",attrs:{src:t,alt:t,"preview-title-enable":"true","preview-nav-enable":"true"}}),e._v(" "),a("font-awesome-icon",{attrs:{icon:["fas","eye"]}})],1)])])}))])],1)],1)],1)],1)},[],!1,null,null,null);n.options.__file="index.vue";t.a=n.exports},AkxC:function(e,t,a){"use strict";var s=a("Ndzd");a.n(s).a},B7sB:function(e,t,a){},E2xy:function(e,t,a){},Ndzd:function(e,t,a){},Psoh:function(e,t,a){"use strict";var s=a("E2xy");a.n(s).a},RFwu:function(e,t,a){},YMGU:function(e,t,a){"use strict";var s=a("e54B");a.n(s).a},dg2B:function(e,t,a){"use strict";var s=a("6jJE");a.n(s).a},e54B:function(e,t,a){},ger1:function(e,t,a){"use strict";var s=a("B7sB");a.n(s).a},"h24+":function(e,t,a){},hpA0:function(e,t,a){},"k/oa":function(e,t,a){},oU4k:function(e,t,a){"use strict";a.d(t,"e",function(){return l}),a.d(t,"g",function(){return i}),a.d(t,"f",function(){return o}),a.d(t,"a",function(){return n}),a.d(t,"c",function(){return r}),a.d(t,"h",function(){return c}),a.d(t,"j",function(){return m}),a.d(t,"d",function(){return u}),a.d(t,"b",function(){return p}),a.d(t,"i",function(){return d});var s=a("t3Un");function l(e){return Object(s.b)({url:"/v1/api/goods/list",method:"post",data:e})}function i(e){return Object(s.b)({url:"/v1/api/goods/topClass",method:"post",data:e})}function o(e){return Object(s.b)({url:"/v1/api/goods/secondClass",method:"post",data:e})}function n(e){return Object(s.b)({url:"/v1/api/goods/add",method:"post",data:e,headers:{"Content-Type":"multipart/form-data"}})}function r(e){return Object(s.b)({url:"/v1/api/goods/recycle/list",method:"post",data:e})}function c(e){return Object(s.b)({url:"/v1/api/goods/del",method:"post",data:{ids:e}})}function m(e){return Object(s.b)({url:"/v1/api/user/images/upload",method:"post",data:e,headers:{"Content-Type":"multipart/form-data"}})}function u(){return Object(s.b)({url:"/v1/api/user/images/myImages",method:"post"})}function p(e){return Object(s.b)({url:"/v1/api/goods/recycle/clear",method:"post",data:{ids:e}})}function d(e){return Object(s.b)({url:"/v1/api/goods/recycle/recover",method:"post",data:{ids:e}})}},p28X:function(e,t,a){"use strict";var s=a("RFwu");a.n(s).a},v6z9:function(e,t,a){"use strict";var s=a("h24+");a.n(s).a},wRSh:function(e,t,a){"use strict";a.r(t);var s={name:"Articles"},l=(a("Psoh"),a("KHd+")),i=Object(l.a)(s,function(){var e=this.$createElement;return(this._self._c||e)("h3",[this._v("关联文章")])},[],!1,null,null,null);i.options.__file="articles.vue";var o=i.exports,n={name:"CommonInfo",props:{goodName:{type:String,default:""},goodsNo:{type:String,default:""},id:{type:String,default:""},inventory:{type:Number,default:0},price:{type:Number,default:0},sort:{type:Number,default:0},thumb:{type:String,default:""},sellerName:{type:String,default:""},onSale:{type:Boolean,default:!0},prime:{type:Boolean,default:!1},new:{type:Boolean,default:!1},hot:{type:Boolean,default:!1},reviewStatus:{type:Number,default:1}},data:function(){return{activeNames:[["1"],["1"],["1"],["1"],["1"],["1"],["1"],["0"]],form:{prodName:"",prodNo:"",price:0,marketPrice:0,stock:0,stockWarnNum:1,weight:"",unit:"g",forSale:!0,onSale:!0,freeShip:!1,seoKeywords:"",seoDescrib:"",remarks:"",addSuggestList:[],selectedBrand:null,bounds:-1,growthValue:-1,buyUseBounds:0,memberPrice:0,discountPrice:[{id:"0",total:0,price:0}]},preSetData:{brandList:[{value:"0",label:"尤妮佳"},{value:"1",label:"香奈儿"},{value:"2",label:"SKII"},{value:"3",label:"华为"},{value:"4",label:"海尔"}]}}},mounted:function(){var e=this;this.$nextTick(function(){e.initForm()})},methods:{togglePicsCenter:function(){this.$root.eventHub.$emit("togglePicsCenterEvent")},initForm:function(){this.form.prodName=this.goodName,this.form.price=this.price,this.form.stock=this.inventory,this.form.prodNo=this.goodsNo,this.form.onSale=this.onSale,this.form.imageUrl=this.thumb,this.prime?this.addSuggestList.push("0"):this.new?this.addSuggestList.push("1"):this.hot&&this.addSuggestList.push("2")}}},r=(a("v6z9"),Object(l.a)(n,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"commonInfoForm",staticClass:"commonForm",attrs:{model:e.form,"label-position":"left","label-width":"100px;"}},[a("el-container",[a("el-main",{staticStyle:{padding:"20px"}},[a("el-form-item",{attrs:{label:"商品名称"}},[a("el-input",{staticStyle:{width:"50em"},model:{value:e.form.prodName,callback:function(t){e.$set(e.form,"prodName",t)},expression:"form.prodName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品货号"}},[a("el-input",{model:{value:e.form.prodNo,callback:function(t){e.$set(e.form,"prodNo",t)},expression:"form.prodNo"}}),e._v(" "),a("small",[e._v("\n          如果您不输入商品货号，系统将自动生成一个唯一的货号。\n        ")])],1),e._v(" "),a("el-form-item",{attrs:{label:"本店售价"}},[a("div",{staticStyle:{display:"flex"}},[a("el-input",{model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}}),e._v(" "),a("el-button",{staticClass:"inline-block right-beside-btn",attrs:{type:"default"}},[e._v("按市场价计算")])],1)]),e._v(" "),a("el-form-item",{attrs:{label:"市场售价"}},[a("div",{staticStyle:{display:"flex"}},[a("el-input",{model:{value:e.form.marketPrice,callback:function(t){e.$set(e.form,"marketPrice",t)},expression:"form.marketPrice"}}),e._v(" "),a("el-button",{staticClass:"inline-block right-beside-btn",attrs:{type:"default"}},[e._v("取整数")])],1)]),e._v(" "),a("el-form-item",{attrs:{label:"库存数量"}},[a("el-input",{model:{value:e.form.stock,callback:function(t){e.$set(e.form,"stock",t)},expression:"form.stock"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"警告数量"}},[a("el-input",{model:{value:e.form.stockWarnNum,callback:function(t){e.$set(e.form,"stockWarnNum",t)},expression:"form.stockWarnNum"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品重量"}},[a("div",{staticStyle:{display:"flex"}},[a("el-input",{staticClass:"input-with-select",model:{value:e.form.weight,callback:function(t){e.$set(e.form,"weight",t)},expression:"form.weight"}}),e._v(" "),a("el-select",{staticClass:"right-beside-btn",attrs:{slot:"append",placeholder:"请选择单位"},slot:"append",model:{value:e.form.unit,callback:function(t){e.$set(e.form,"unit",t)},expression:"form.unit"}},[a("el-option",{attrs:{label:"克",value:"g"}}),e._v(" "),a("el-option",{attrs:{label:"千克",value:"kg"}})],1)],1)]),e._v(" "),a("el-form-item",{attrs:{label:"作为商品"}},[a("el-checkbox",{model:{value:e.form.forSale,callback:function(t){e.$set(e.form,"forSale",t)},expression:"form.forSale"}},[e._v("\n          打勾表示能作为普通商品销售，否则只能作为配件或赠品销售。\n        ")])],1),e._v(" "),a("el-form-item",{attrs:{label:"是否包邮"}},[a("el-checkbox",{model:{value:e.form.freeShip,callback:function(t){e.$set(e.form,"freeShip",t)},expression:"form.freeShip"}},[e._v("\n          打勾表示此商品不会产生运费花销，否则按照正常运费计算。\n        ")])],1),e._v(" "),a("el-collapse",{staticClass:"custom-collapse",model:{value:e.activeNames[0],callback:function(t){e.$set(e.activeNames,0,t)},expression:"activeNames[0]"}},[a("el-collapse-item",{attrs:{title:"SEO优化",name:"1"}},[a("el-form-item",{attrs:{label:"关键字"}},[a("el-input",{model:{value:e.form.seoKeywords,callback:function(t){e.$set(e.form,"seoKeywords",t)},expression:"form.seoKeywords"}}),e._v(" "),a("small",[e._v("用英文逗号分隔")])],1),e._v(" "),a("el-form-item",{attrs:{label:"简单描述"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.form.seoDescrib,callback:function(t){e.$set(e.form,"seoDescrib",t)},expression:"form.seoDescrib"}})],1)],1)],1),e._v(" "),a("el-collapse",{staticClass:"custom-collapse",model:{value:e.activeNames[1],callback:function(t){e.$set(e.activeNames,1,t)},expression:"activeNames[1]"}},[a("el-collapse-item",{attrs:{title:"备注信息",name:"1"}},[a("el-form-item",{attrs:{label:"商家备注"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.form.remarks,callback:function(t){e.$set(e.form,"remarks",t)},expression:"form.remarks"}})],1)],1)],1)],1),e._v(" "),a("el-aside",{staticStyle:{width:"350px"}},[a("el-collapse",{staticClass:"custom-collapse",model:{value:e.activeNames[2],callback:function(t){e.$set(e.activeNames,2,t)},expression:"activeNames[2]"}},[a("el-collapse-item",{attrs:{title:"发布",name:"1"}},[a("el-form-item",{attrs:{label:"上架："}},[a("el-checkbox",{model:{value:e.form.onSale,callback:function(t){e.$set(e.form,"onSale",t)},expression:"form.onSale"}},[e._v("\n              打勾表示允许销售，否则不允许销售。\n            ")])],1),e._v(" "),a("el-form-item",{attrs:{label:"加入推荐："}},[a("el-checkbox-group",{model:{value:e.form.addSuggestList,callback:function(t){e.$set(e.form,"addSuggestList",t)},expression:"form.addSuggestList"}},[a("el-checkbox",{attrs:{label:"精品",value:"0"}}),e._v(" "),a("el-checkbox",{attrs:{label:"新品",value:"1"}}),e._v(" "),a("el-checkbox",{attrs:{label:"热销",value:"2"}})],1)],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("更新")])],1)],1)],1),e._v(" "),a("el-collapse",{staticClass:"custom-collapse",model:{value:e.activeNames[3],callback:function(t){e.$set(e.activeNames,3,t)},expression:"activeNames[3]"}},[a("el-collapse-item",{attrs:{title:"商品分类",name:"1"}},[a("el-form-item",{staticClass:"custom-form-item-label-top",attrs:{label:"选择商品分类"}},[e._v("\n            123\n          ")]),e._v(" "),a("el-form-item",{staticClass:"custom-form-item-label-top",attrs:{label:"选择扩展分类"}},[e._v("\n            123\n          ")])],1)],1),e._v(" "),a("el-collapse",{staticClass:"custom-collapse",model:{value:e.activeNames[4],callback:function(t){e.$set(e.activeNames,4,t)},expression:"activeNames[4]"}},[a("el-collapse-item",{attrs:{title:"商品品牌",name:"1"}},[a("el-form-item",{staticClass:"custom-form-item-label-top",attrs:{label:"选择商品品牌"}},[a("el-select",{attrs:{placeholder:"请选择..."},model:{value:e.form.selectedBrand,callback:function(t){e.$set(e.form,"selectedBrand",t)},expression:"form.selectedBrand"}},e._l(e.preSetData.brandList,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"text"}},[e._v("添加商品品牌")])],1)],1)],1),e._v(" "),a("el-collapse",{staticClass:"custom-collapse",model:{value:e.activeNames[5],callback:function(t){e.$set(e.activeNames,5,t)},expression:"activeNames[5]"}},[a("el-collapse-item",{attrs:{title:"商品图片",name:"1"}},[a("el-form-item",{staticClass:"custom-form-item-label-top",attrs:{label:"上传商品图片"}},[a("div",{staticClass:"upload-pic-wrap",on:{click:e.togglePicsCenter}},[e.form.imageUrl?e._e():a("span",{staticClass:"add-icon"},[a("font-awesome-icon",{staticStyle:{"font-size":"45px","margin-top":"17px"},attrs:{icon:["fas","plus"]}})],1),e._v(" "),e.form.imageUrl?a("img",{attrs:{src:e.form.imageUrl}}):e._e()])]),e._v(" "),e.form.imageUrl?a("el-form-item",{staticClass:"custom-form-item-label-top",attrs:{label:"商品缩略图"}},[a("div",{staticClass:"upload-pic-wrap",staticStyle:{width:"80px",height:"80px"},on:{click:e.togglePicsCenter}},[e.form.imageUrl?a("img",{attrs:{src:e.form.imageUrl}}):e._e()])]):e._e(),e._v(" "),a("small",[e._v("点击更换商品图片或商品缩略图")])],1)],1),e._v(" "),a("el-collapse",{staticClass:"custom-collapse",model:{value:e.activeNames[6],callback:function(t){e.$set(e.activeNames,6,t)},expression:"activeNames[6]"}},[a("el-collapse-item",{attrs:{title:"积分相关",name:"1"}},[a("el-form-item",{attrs:{label:"赠送消费积分数："}},[a("el-input",{staticStyle:{width:"100px"},model:{value:e.form.bounds,callback:function(t){e.$set(e.form,"bounds",t)},expression:"form.bounds"}}),e._v(" "),a("div",[a("small",[e._v("购买该商品时赠送消费积分数,-1表示按商品价格赠送")])])],1),e._v(" "),a("el-form-item",{attrs:{label:"赠送成长值："}},[a("el-input",{staticStyle:{width:"100px"},model:{value:e.form.growthValue,callback:function(t){e.$set(e.form,"growthValue",t)},expression:"form.growthValue"}}),e._v(" "),a("div",[a("small",[e._v("购买该商品时赠送成长值数,-1表示按商品价格赠送")])])],1),e._v(" "),a("el-form-item",{attrs:{label:"积分购买金额："}},[a("el-input",{staticStyle:{width:"100px"},model:{value:e.form.buyUseBounds,callback:function(t){e.$set(e.form,"buyUseBounds",t)},expression:"form.buyUseBounds"}}),e._v(" "),a("div",[a("small",[e._v("(此处需填写金额)购买该商品时最多可以使用积分的金额")])])],1)],1)],1),e._v(" "),a("el-collapse",{staticClass:"custom-collapse",model:{value:e.activeNames[7],callback:function(t){e.$set(e.activeNames,7,t)},expression:"activeNames[7]"}},[a("el-collapse-item",{attrs:{title:"折扣、促销价格",name:"1"}},[a("el-form-item",{attrs:{label:"会员价格"}},[e._v("\n            注册用户 "),a("el-input",{staticStyle:{width:"100px"},model:{value:e.form.memberPrice,callback:function(t){e.$set(e.form,"memberPrice",t)},expression:"form.memberPrice"}}),e._v("(50)\n            "),a("div",{staticStyle:{"line-height":"1.2","margin-top":"10px"}},[a("small",[e._v("会员价格为-1时表示会员价格按会员等级折扣率计算。你也可以为每个等级指定一个固定价格")])])],1),e._v(" "),a("el-form-item",{attrs:{label:"优惠价格"}},[e._l(e.form.discountPrice,function(t){return a("div",{key:t.id,staticClass:"discount-set-item"},[a("label",[e._v("优惠数量")]),e._v(" "),a("el-input",{staticStyle:{width:"5em","margin-right":"10px"},model:{value:t.total,callback:function(a){e.$set(t,"total",a)},expression:"item.total"}}),e._v(" "),a("label",[e._v("优惠价格")]),e._v(" "),a("el-input",{staticStyle:{width:"5em"},model:{value:t.price,callback:function(a){e.$set(t,"price",a)},expression:"item.price"}})],1)}),e._v(" "),a("el-button",{attrs:{type:"text"}},[e._v("添加优惠价格")]),e._v(" "),a("div",[a("small",[e._v("购买数量达到优惠数量时享受的优惠价格")])])],2)],1)],1)],1)],1)],1)},[],!1,null,null,null));r.options.__file="commonInfo.vue";var c=r.exports,m={name:"GoodsManage"},u=(a("1YlP"),Object(l.a)(m,function(){var e=this.$createElement;return(this._self._c||e)("h3",[this._v("货品管理")])},[],!1,null,null,null));u.options.__file="goodsManage.vue";var p=u.exports,d={name:"ProdDescrib",data:function(){return{ue:"",content:"",config:{imageUrl:"//localhost:3000/server-test/upload",imagePath:"",imageFieldName:"file"}}},mounted:function(){var e=this;setTimeout(function(){e.content="初始化内容"},0)},methods:{ueditorReady:function(e){this.ue=e},ueditorChange:function(e){},getContent:function(){}}},f=(a("dg2B"),Object(l.a)(d,function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("v-ueditor",{attrs:{id:"ueditor",config:this.config,content:this.content,"use-custom-upload":!0},on:{ready:this.ueditorReady,change:this.ueditorChange}})],1)},[],!1,null,null,null));f.options.__file="prodDescrib.vue";var v=f.exports,b={name:"ProdPhotos",components:{}},h=(a("3V2L"),Object(l.a)(b,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{},[t("h3",[this._v("商品相册")])])}],!1,null,null,null));h.options.__file="prodPhotos.vue";var g=h.exports,_={name:"ProdProperty"},y=(a("YMGU"),Object(l.a)(_,function(){var e=this.$createElement;return(this._self._c||e)("h3",[this._v("商品属性")])},[],!1,null,null,null));y.options.__file="prodProperty.vue";var x=y.exports,k={name:"AssociateProd"},C=(a("AkxC"),Object(l.a)(k,function(){var e=this.$createElement;return(this._self._c||e)("h3",[this._v("关联商品")])},[],!1,null,null,null));C.options.__file="associateProd.vue";var w=C.exports,N={name:"ProdEditIndex",components:{PicsManagement:a("9G9v").a},data:function(){return{currentTabVal:"1",prodData:null,visible:!1,prodEditTabs:[{title:"通用信息",name:"1",component:c},{title:"商品描述",name:"2",component:v},{title:"商品属性",name:"3",component:x},{title:"商品相册",name:"4",component:g},{title:"关联商品",name:"5",component:w},{title:"关联文章",name:"6",component:o},{title:"货品管理",name:"7",component:p}]}},mounted:function(){var e=this;this.$root.eventHub.$on("togglePicsCenterEvent",function(){e.visible=!e.visible}),this.prodData=this.$route.params,this.currentTabVal=this.$route.query.tabIndex+1+""}},S=(a("p28X"),Object(l.a)(N,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-main",{staticClass:"prod-edit-wrap"},[a("div",[a("h3",{staticClass:"heading"},[e._v("编辑商品\n      "),a("router-link",{attrs:{to:"/goodsManage/index"}},[a("el-button",{staticStyle:{float:"right","margin-top":"-3px"},attrs:{type:"default",size:"mini"}},[a("font-awesome-icon",{attrs:{icon:["fas","reply"]}}),e._v("\n          返回商品列表\n        ")],1)],1)],1)]),e._v(" "),a("el-tabs",{attrs:{type:"card"},model:{value:e.currentTabVal,callback:function(t){e.currentTabVal=t},expression:"currentTabVal"}},e._l(e.prodEditTabs,function(t){return a("el-tab-pane",{key:t.name,attrs:{label:t.title,name:t.name}},[a(t.component,e._b({tag:"component"},"component",e.prodData,!1))],1)})),e._v(" "),a("pics-management",{attrs:{"dialog-visible":e.visible}})],1)},[],!1,null,null,null));S.options.__file="index.vue";t.default=S.exports}}]);