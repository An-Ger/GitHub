# GitHub
GitHub Api &amp;&amp; New
Redis基本使用
set b 1
set a 2
get a 
get b
setex c 10 1 c在十秒之后就会消失
get c  // 1
KEYs * 查询所有已经存储的数据 
set session:sessionID 123
get session:sessionID
redis-server
redis-cli 在新窗口中打开数据库连接
redis-cli中输入shutdown命令关闭数据库连接
DEL a 删除数据

yarn add zeit@nexr-css
创建next.config.js文件引入css的使用
const withCss = require('@zeit/next-css')
if(typeof require !== 'undefined') {
    require.extensions['.css'] = file => {};
}

引用Link组件只能包裹一个React组件
使用Router添加onClick方法函数，然后使用Router.push('./')添加路由

#动态路由
路由信息附带只能通过query
使用withRouter拿到传递的数据

#路由映射
使用Link的as属性
使用Koa2解决路由映射404的问题

路由钩子
routeChangeStart
routeChangeComplete
routeChangeError
beforeHistoryChange
hashChangeStart
hashChangeComplete

nextjs数据获取方式
getInitialProps
A.getInitialProps = () => {
    return {
        name: 'Yzh',
        age: '99'
    }
}
//只有pages文件夹下的组件会调用getInitialProps，components文件下并不会调用
//不需要等到客户端加载完js再进行渲染
自定义app——固定layout，保持一些公用的状态，具体页面传入一些自定义的数据，自定义一些错误的处理
使用MyClass extends App {}，重新定义render方法
自定义document，_document
document只有在服务端渲染的时候才会执行，自定义html

ReactHooks 基本API
useState， useReducer
Hooks闭包陷阱：回调执行的时候，每次拿到的值都是setState中解析出来的count
每次重新渲染之前，都会调用useEffect
useLayoutEffect比useEffect之前执行

yarn create next-app Name
npx create-next-app Name

路由映射一旦刷新就会404，因为并没有真正代表该路由的文件
LazyLoading
异步加载模块，异步加载组件
yarn add momonet


