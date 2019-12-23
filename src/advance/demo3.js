/**
 * @type { import ('./InterfaceJs.d').INewObj } // 手动引入外部的 .d.ts 声明文件
 */
var newObj_3 = someRequireFn('./otherService')

newObj_3.a // 直跳到InterfaceJs.d.ts定义的args.a
newObj_3.bar // 直跳到InterfaceJs.d.ts定义的fn.bar