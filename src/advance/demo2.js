/**
 * @type { import ('./otherService') } // 这里用 type 指定 newObj 的类型
 */
var newObj_2 = someRequireFn('./otherService')

newObj_2.a // 直跳到otherService.js的args.a
newObj_2.bar // 直跳到otherService.js的fn.bar