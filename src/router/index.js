import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'

/* Router Modules */
// import componentsRouter from './modules/components'
// import chartsRouter from './modules/charts'
// import tableRouter from './modules/table'
// import nestedRouter from './modules/nested'

/** note: sub-menu only appear when children.length>=1
 *  detail see  https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 **/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']    will control the page roles (you can set multiple roles)
    title: 'title'               the name show in sub-menu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if true, the page will no be cached(default is false)
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
    affix: true                  if true, the tag will affix in the tags-view
  }
**/
export const constantRouterMap = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/authredirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/errorPage/401'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'home', noCache: true }
      }
    ]
  },
  {
    // 商家管理
    path: '/vendorsManage',
    component: Layout,
    redirect: '/vendorsManage/index',
    meta: { title: 'vendorsManage', icon: 'store', noCache: true },
    children: [
    // 入住商家
      {
        path: 'index',
        component: () =>
                    import('@/views/vendors-manage/index'),
        name: 'vendorsManageIndex',
        meta: { title: 'checkInBusiness', icon: 'store-alt', noCache: true }
      },
      // 自营店铺
      {
        path: 'selfRunShop',
        component: () =>
                import('@/views/vendors-manage/self-run-shop'),
        name: 'vendorsManageSelfRunShop',
        meta: { title: 'vendorsManageSelfRunShop', icon: 'certificate', noCache: true }
      },
      // 待审核商家
      {
        path: 'businessToBeAudited',
        component: () =>
                import('@/views/vendors-manage/business-to-be-audited'),
        name: 'businessToBeAudited',
        meta: { title: 'businessToBeAudited', icon: 'envelope-open-text', noCache: true }
      },
      // 商家分类
      {
        path: 'businessCateManage',
        component: () =>
                import('@/views/vendors-manage/business-cate-manage'),
        name: 'businessCateManage',
        meta: { title: 'businessCateManage', icon: 'list-alt', noCache: true }
      },
      // 经营城市
      {
        path: 'engageCities',
        component: () =>
                import('@/views/vendors-manage/engage-cities'),
        name: 'engageCities',
        meta: { title: 'engageCities', icon: 'city', noCache: true }
      }
    ]
  },
  {
    // 商品管理
    path: '/goodsManage',
    component: Layout,
    redirect: '/goodsManage/index',
    meta: { title: 'goodsManage', icon: 'cubes', noCache: true },
    children: [
      // 商品列表
      {
        path: 'index',
        component: () =>
                    import('@/views/goods-manage/index'),
        name: 'goodsList',
        meta: { title: 'goodsList', icon: 'list-alt', noCache: true },
        children: [
          { path: 'prodEdit',
            hidden: true,
            component: () =>
                  import('@/views/goods-manage/prod-edit/index'),
            name: 'prodEditIndex',
            meta: { title: 'prodEdit.title', icon: 'list-alt', noCache: true }
          }
        ]
      },
      // 商品回收站
      {
        path: '/goodsRecycleBin',
        component: () =>
                import('@/views/goods-manage/goods-recycle-bin'),
        name: 'goodsRecycleBin',
        meta: { title: 'goodsRecycleBin', icon: 'recycle', noCache: true }
      },
      // 商品分类
      {
        path: '/goodsCates',
        component: () =>
                import('@/views/goods-manage/goods-cates'),
        name: 'goodsCates',
        meta: { title: 'goodsCates', icon: 'list-alt', noCache: true },
        children: [
          // 添加或者编辑分类页面
          { path: 'goodsCateEdit',
            hidden: true,
            component: () => import('@/views/goods-manage/goods-cates-edit/eidt-cate'),
            name: 'goodsCateEdit',
            // to do 如何传递参数 使得 cateEdit.title能显示 添加 和 编辑的 字样区别 ？
            meta: { title: 'cateEdit.title', icon: 'list-alt', noCache: true }
          },
          // 转移商品
          {
            path: 'transferProds',
            hidden: true,
            component: () => import('@/views/goods-manage/goods-cates-edit/transfer-cate'),
            name: 'transferProds',
            meta: { title: 'cateEdit.transfer', icon: 'exchange-alt', noCache: true }
          }
        ]
      },
      // 商品品牌
      {
        path: '/goodsBrands',
        component: () =>
                import('@/views/goods-manage/goods-brands'),
        name: 'goodsBrands',
        meta: { title: 'goodsBrands', icon: 'copyright', noCache: true }
      }
    ]
  },
  // 商品库
  {
    path: '/goodsRepo',
    component: Layout,
    redirect: '/goodsRepo/add',
    meta: { title: 'goodsRepo', icon: 'cubes', noCache: true },
    children: [
      // 添加商品界面
      { path: 'add',
        component: () => import('@/views/goods-repo/goods-repo-add'),
        name: 'goodsRepoAdd',
        meta: { title: 'goodsRepoEdit.add', icon: 'list-alt', noCache: true }
      },
      // 商品库商品
      { path: 'list',
        component: () => import('@/views/goods-repo/goods-repo-list'),
        name: 'goodsRepoList',
        meta: { title: 'goodsRepoEdit.list', icon: 'list-alt', noCache: true }
      },
      // 商品库规格
      { path: 'spec',
        component: () => import('@/views/goods-repo/goods-repo-spec'),
        name: 'goodsRepoSpec',
        meta: { title: 'goodsRepoEdit.spec', icon: 'list-alt', noCache: true }
      }
    ]
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [{ path: '*', redirect: '/404', hidden: true }]
