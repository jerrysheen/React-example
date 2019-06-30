import{
    Dashboard,
    Login,
    NotFound,
    Settings,
    ArticleList,
    ArticleEdit
} from '../views'

// 配置路由，分别配置子路由和父路由，差别就是有一些需要登陆之后才能使用
// 这里还有App不用再这里导出，只要到主画面里面去导出就好了
export const mainRouter = [{
    pathname:'/login',
    component:Login
},{
    pathname:'/404',
    component:NotFound
}]

export const adminRouter = [{
    pathname:'/admin/dashboard',
    component:Dashboard,
    title:"仪表盘",
    isNav:true,
    icon:"dashboard"
},{
    pathname:'/admin/article',
    component:ArticleList,
    title:"文章列表",
    exact:false
},{
    pathname:'/admin/article/edit/:id',
    component:ArticleEdit,
    title:"文章",
    type:"edit",
    isNav:true,
    icon:"edit"
},{
    pathname:'/admin/settings',
    component:Settings,
    title:"设置",
    isNav:true,
    icon:"setting"
}]