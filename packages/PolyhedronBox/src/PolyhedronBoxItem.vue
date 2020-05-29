<template>
    <div class="ld-polyhedron-item__side" :style="baseStyle" :class="{'debug-mode':debug}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "PolyhedronBoxItem"
        , props: {
            debug: {
                type: Boolean,
                default: false
            }
        }
        , data() {
            return {
                originDistance: 0,
                rotationAngle: 0
            }
        }, mounted() {

        }, computed: {
            baseStyle() {
                return {
                    transformOrigin: 'center center ' + -this.originDistance + 'px',
                    transform: 'rotateX(' + this.rotationAngle + 'deg)'
                }
            }
        },
        methods: {
            updateStyle(ra) {
                this.rotationAngle = ra;
            }, setBaseStyle(od, ra) {
                // 原点距离、旋转角度
                this.originDistance = od;
                this.rotationAngle = ra;
            }
        }
    }
</script>

<style scoped>
    .ld-polyhedron-item__side {
        width: 100%;
        height: 100%;
        position: absolute;
        transition: transform .5s linear;
        backface-visibility: hidden;
    }

    .debug-mode {
        /*perspective: 150px;*/
        /*perspective-origin: 10% 10%;*/
        box-sizing: border-box;
        /*阴影*/
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    }
</style>
