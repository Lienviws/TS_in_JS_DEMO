/**
 * 方法：foo
 * @param {string} name
 */
function foo (name) {
    console.log(name)
    name.includes('') // 拥有 string 的能力
    return name
}

/**
 * 方法：bar
 */
function bar (name) {
    console.log(name)
    return name
}

var _foo = foo('name') // _foo 为 string
var _bar = bar('name') // _bar 为 any

/**
 * 方法：foo_d1
 * @param {{firstname: string, nameLength: number}} name
 */
function foo_d1 (name) {
    console.log(name)
    name.firstname // 拥有 firstname 的属性
    return name
}

/**
 * webpack配置自动提示
 * 
 * 先安装对应的types包： `npm i @types/webpack -D`
 * 
 * @type {import('webpack').Configuration}
 */
const config = {
    resolve: {
        alias: ''
    }
}

// 传统注释 vs JSDoc 注释

// 这是bar
var bar_comment = 1 // 这是也是bar
/** 这是foo */
var foo_comment = 2

console.log(bar_comment)
console.log(foo_comment)

// 常见的错误 JSDoc 注释方式

/**
 * ajax 请求
 * @example `ajax('url', options)`
 * @param url 请求链接
 * @param options ajax控制参数
 *               .jsonp 登录模式。'common'常规模式；'silent'静默模式；'forced'强制模式；'backendSilent'后台静默
 *               .async 强制登录标志，会忽略当前登录态再跑一次登录 // TODO 待废弃
 *               .methods 跳过三秒内拒绝授权限制
 *               .success 是否忽略本地缓存的登录态，设为true会重新发起登录请求
 * @returns { Promise } 返回一个promise实例
 */
function ajaxOld (url, options) {}

/**
 * ajax方法
 * 
 * @example
 * ```js
 * ajax('url', options)
 * ```
 * 
 * @typedef {Object} IAjaxOptions
 * @property {boolean} [jsonp] 是否jsonp
 * @property {boolean} [async] 是否async
 * @property {'GET'|'POST'} [methods] 请求方法
 * @property {(options: any)=>void} [success] 成功回调函数
 * 
 * @param {string} url url
 * @param {IAjaxOptions} [options] 参数
 * @param { Promise }
 */
function ajaxNew (url, options) {}

// 使用 typeof 注重本身的数据

var foo2 = {
    a: 2,
    b: 2
}

/**
 * @param {typeof foo2} obj
 */
function bar (obj) {
    obj.a // "ctrl + 单击"，IDE 找到 foo2 里定义的 a
}
