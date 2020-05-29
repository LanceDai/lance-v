<template>
    <div class="ld-polyhedron__scene">
        <div class="ld-polyhedron__cube">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    /* eslint-disable */
    // 实现三种模式, 滚轮旋转, 按键旋转, 自动旋转
    // 先实现滚轮控制
    const maxOverflow = 360000;
    const minOverflow = -360000;
    export default {
        name: "PolyhedronBox"
        , props: {
            startIndex: {
                type: Number,
                default: 0
            }, index: {
                type: Number,
                default: 0,
                require: false,
                description: '用于外部控制'
            }, autoPlay: {
                type: Boolean,
                default: true,
                description: '表示是否自动展示, 若禁止外部控制, 则会根据传入的index值, 表示旋转面'
            }, time: {
                type: Number,
                default: 3000,
                description: '当自动展示生效的时候, 会根据此数字建立一定时器'
            }, direction: {
                type: Number,
                default: 1,
                description: '自动展示的滚动方向及步长, 正负代表下上, 值代表步长, 默认为1, 即每次向下滚动一个面'
            }
        },
        watch: {
            autoPlay(val) {
                console.log("val = " + val)
                debugger
                //如果原来是定时的, 要消除定时器
                val ? this.startTimer() : this.pauseTimer()
            }, index(val) {
                let des = val - this.activeIndex;
                this.playSlides(des)
            }
        }, data() {
            return {
                items: [],
                ras: [], // 记录每个子组件当前旋转的角度
                activeIndex: this.startIndex,
                height: 0,
                width: 0,
                eachRa: 0, // 每次旋转的角度
                topHookStart: false,
                bottomHookStart: false,
                timer: null // 定时器
            }
        }, mounted() {
            // 获取元素的宽和高
            this.height = this.$el.offsetHeight;
            this.width = this.$el.offsetWidth;
            // 更新子组件
            this.updateItems();
            // 设定基础样式
            this.setItemBaseStyle();
            // 注册滚动监听
            // window.addEventListener('mousewheel', this.scrollHandle, false);
        },
        methods: {
            // scrollHandle(e) {
            //     // debugger
            //     //该语句可以用来判断滚轮是向上滑动还是向下, 1代表向下， -1代表向上
            //     let direction = e.deltaY > 0 ? -1 : 1;
            // },
            updateItems() {
                this.items = this.$children.filter(child => child.$options.name === "PolyhedronBoxItem");
            }, updateItemsStyle(direction) {
                if (this.ras[0] >= maxOverflow) {
                    this.ras = this.ras.map(value => value - maxOverflow);
                } else if (this.ras[this.items.length] <= minOverflow) {
                    this.ras = this.ras.map(value => value + minOverflow)
                }
                let main = this;
                this.items.map((child, idx) => {
                    main.ras[idx] += main.eachRa * direction;
                    child.updateStyle(main.ras[idx]);
                });
            }, setItemBaseStyle() {
                let main = this;
                this.eachRa = 360 / this.items.length;
                let ra; //旋转角度
                // 为item设定基础的样式, 包括旋转中心, 自身idx, 旋转角度
                this.items.map((child, idx) => {
                    ra = -main.eachRa * idx;
                    child.setBaseStyle(main.height / (2 * Math.tan(Math.PI / main.items.length)), ra);
                    main.ras[idx] = ra;
                })
            }, pauseTimer() {
                if (this.timer) {
                    clearInterval(this.timer);
                    this.timer = null;
                }
            }, startTimer() {
                // 如果 未开启自动模式 或者 定时器已存在
                if (this.time <= 0 || !this.autoPlay || this.timer) return;
                console.log("timer create")
                this.timer = setInterval(() => this.playSlides(this.direction), this.time);
            }, playSlides(direction) {
                let newIdx = this.index + direction;
                if (newIdx === this.items.length) {
                    // 当原位置已为底, 且运动方向仍向上时, 根据bottomHookStart参数判断是否需要抛出自定义事件
                    if (this.bottomHookStart) {
                        this.$emit("scrollToBottom")
                    } else {
                        this.index = 0;
                        this.updateItemsStyle(direction);
                    }
                } else if (newIdx === -1) {
                    // 当原位置已为顶, 且运动方向仍向下时, 根据topHookStart参数判断是否需要抛出自定义事件
                    if (this.bottomHookStart) {
                        this.$emit("scrollToTop")
                    } else {
                        this.index = this.items.length - 1;
                        this.updateItemsStyle(direction);
                    }
                } else {
                    this.index = newIdx;
                    this.updateItemsStyle(direction);
                }
                // 注册自定义事件
                this.$emit('indexChange', this.index, direction);
            },

        }
    }
</script>

<style scoped>

    * {
        transition: transform .5s linear;
    }

    .ld-polyhedron__scene {
        width: 100%;
        height: 100%;
        perspective: 1200px;
    }

    .ld-polyhedron__cube {
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
    }
</style>
