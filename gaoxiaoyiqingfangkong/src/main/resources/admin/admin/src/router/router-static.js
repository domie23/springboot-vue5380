import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import fangkongshenbaoJiaoshi from '@/views/modules/fangkongshenbaoJiaoshi/list'
    import fangkongshenbaoXuesheng from '@/views/modules/fangkongshenbaoXuesheng/list'
    import jiaoshi from '@/views/modules/jiaoshi/list'
    import news from '@/views/modules/news/list'
    import xuexiao from '@/views/modules/xuexiao/list'
    import xueyuan from '@/views/modules/xueyuan/list'
    import yonghu from '@/views/modules/yonghu/list'
    import dictionaryBinghuan from '@/views/modules/dictionaryBinghuan/list'
    import dictionaryGaofengxian from '@/views/modules/dictionaryGaofengxian/list'
    import dictionaryKeshou from '@/views/modules/dictionaryKeshou/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryWuaichu from '@/views/modules/dictionaryWuaichu/list'
    import dictionaryXuanyuan from '@/views/modules/dictionaryXuanyuan/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryBinghuan',
        name: '是否接触病患',
        component: dictionaryBinghuan
    }
    ,{
        path: '/dictionaryGaofengxian',
        name: '是否出入高风险区域',
        component: dictionaryGaofengxian
    }
    ,{
        path: '/dictionaryKeshou',
        name: '有无咳嗽',
        component: dictionaryKeshou
    }
    ,{
        path: '/dictionaryNews',
        name: '公告类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryWuaichu',
        name: '有无外出',
        component: dictionaryWuaichu
    }
    ,{
        path: '/dictionaryXuanyuan',
        name: '学院',
        component: dictionaryXuanyuan
    }


    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/fangkongshenbaoJiaoshi',
        name: '教师防控申报',
        component: fangkongshenbaoJiaoshi
      }
    ,{
        path: '/fangkongshenbaoXuesheng',
        name: '学生防控申报',
        component: fangkongshenbaoXuesheng
      }
    ,{
        path: '/jiaoshi',
        name: '教师',
        component: jiaoshi
      }
    ,{
        path: '/news',
        name: '公告信息',
        component: news
      }
    ,{
        path: '/xuexiao',
        name: '学校管理员',
        component: xuexiao
      }
    ,{
        path: '/xueyuan',
        name: '学院管理员',
        component: xueyuan
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
