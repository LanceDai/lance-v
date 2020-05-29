<template>
    <div id="app">
        <!--navigate 侧边导航栏-->
        <nav class="nav">

        </nav>
    </div>
</template>

<script>

    export default {
        name: 'app',
        components: {
        }, data() {
            return {
                debug: true
            }
        }, computed: {
            fontStyle() {
                return {
                    // 'width': '100px',
                    'font-size': '2em'
                }
            }
        }, mounted() {
            const $app = document.querySelector("#app")
            const count = $app.childNodes.length
            $app.style.height = 100 * count + "vh"
        }
    }
</script>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
    }

    #app {
        .nav {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
</style>
