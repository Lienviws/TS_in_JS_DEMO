<template>
    <div>
        <div id="header" style="min-height:44px"></div>
        <div class="body">
            <App />
        </div>
    </div>
</template>

<script>
import App from './App'

/**
 * @type { import ('./vue.helper').VueComponentOptions }
 */
const vueOptionsTypeHelper = function (options) {
    return options
}

const options = vueOptionsTypeHelper({
    name: 'app',
    components: {
        App,
    },
    data () {
        return {
            shareDialog: false,
            inWxapp: false,
        }
    },
    methods: {
        methods1 () {
            return true
        },
        methods2 () {
            return false
        },
        onclick () {
            console.log(123)
        }
    },
    created () {
        
    },
    mounted () {
        this.methods1()
    },
})

export default options

</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
