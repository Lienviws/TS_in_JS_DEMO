// @ts-check

var foo_checkJs = {
    a: 2,
    b: 2
}

/** @type { typeof foo_checkJs } */
var bar_checkJs = {} // 飘红报错

bar_checkJs.a // ide可以关联到foo里面的a，但是bar并不包含这个属性
