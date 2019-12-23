// otherService.js
;(function(global, factory){
    factory()
})(this, function () {
    var args = {
        a: 1,
        b: 2
    }
    var fn = {
        foo: function () {},
        bar: function () {}
    }

    /**
     * @returns { typeof args & typeof fn }
     */
    function someFactoryFn () {
        // ...
    }

    var newObj = someFactoryFn()

    return newObj

    module && (module.exports = newObj) // 这里是 TS 暴露模块的语法
})