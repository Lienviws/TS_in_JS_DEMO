// 丢失出参类型的时候

const args = {
    a: 1,
    b: 2
}

const fn = {
    foo: function () {},
    bar: function () {}
}

/**
 * 合并两个作用域
 * 
 * @returns { typeof args & typeof fn } // 这里用 returns 指定了返回类型
 */
function someMergeFn (args, fn) {
    // ...
}

const newObj = someMergeFn(args, fn)

newObj.a // 直跳到上面 args.a
newObj.bar // 直跳到上面 fn.bar
