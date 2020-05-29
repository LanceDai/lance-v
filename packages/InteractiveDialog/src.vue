<!--<template>-->
<!--    <div class="btn" ref="btn">-->
<!--        <div class="btn-back">-->
<!--            <slot name="back">-->
<!--                <p>Are you sure you want to do that?</p>-->
<!--                <button class="yes">Yes</button>-->
<!--                <button class="no">No</button>-->
<!--            </slot>-->
<!--        </div>-->
<!--        <div class="btn-front">-->
<!--            <slot name="front">-->
<!--                Delete-->
<!--            </slot>-->
<!--        </div>-->
<!--    </div>-->
<!--</template>-->

<!--<script>-->
<!--    export default {-->
<!--        name: "InteractiveDialog",-->
<!--        methods: {-->
<!--            distance(x1, y1, x2, y2) {-->
<!--                const dx = x1 - x2;-->
<!--                const dy = y1 - y2;-->
<!--                return Math.sqrt(dx * dx + dy * dy);-->
<!--            }, click(e){-->

<!--            }-->
<!--        }, mounted() {-->
<!--            const btn = this.$refs.btn-->

<!--            var btnFront = btn.querySelector('.btn-front'),-->
<!--                btnYes = btn.querySelector('.btn-back .yes'),-->
<!--                btnNo = btn.querySelector('.btn-back .no');-->

<!--            btnFront.addEventListener('click', function (event) {-->
<!--                var mx = event.clientX - btn.offsetLeft,-->
<!--                    my = event.clientY - btn.offsetTop;-->

<!--                var w = btn.offsetWidth,-->
<!--                    h = btn.offsetHeight;-->

<!--                var directions = [-->
<!--                    {id: 'top', x: w / 2, y: 0},-->
<!--                    {id: 'right', x: w, y: h / 2},-->
<!--                    {id: 'bottom', x: w / 2, y: h},-->
<!--                    {id: 'left', x: 0, y: h / 2}-->
<!--                ];-->

<!--                directions.sort(function (a, b) {-->
<!--                    return distance(mx, my, a.x, a.y) - distance(mx, my, b.x, b.y);-->
<!--                });-->

<!--                btn.setAttribute('data-direction', directions.shift().id);-->
<!--                btn.classList.add('is-open');-->

<!--            });-->

<!--            btnYes.addEventListener('click', function (event) {-->
<!--                btn.classList.remove('is-open');-->
<!--            });-->

<!--            btnNo.addEventListener('click', function (event) {-->
<!--                btn.classList.remove('is-open');-->
<!--            });-->

<!--        }-->
<!--    }-->
<!--</script>-->

<!--<style scoped>-->
<!--    @import url(https://fonts.googleapis.com/css?family=Roboto:400,700);-->

<!--    .btn {-->
<!--        font-family: Roboto, "Helvetica Neue", sans-serif;-->
<!--        display: block;-->
<!--        position: relative;-->
<!--        width: 200px;-->
<!--        height: 80px;-->
<!--        transition: width 0.8s cubic-bezier(0.23, 1, 0.32, 1), height 0.8s cubic-bezier(0.23, 1, 0.32, 1), transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);-->
<!--        transform-style: preserve-3d;-->
<!--        transform-origin: 50% 50%;-->
<!--        text-align: center;-->
<!--    }-->

<!--    .btn-front {-->
<!--        position: absolute;-->
<!--        display: block;-->
<!--        width: 100%;-->
<!--        height: 100%;-->
<!--        line-height: 80px;-->
<!--        background-color: #f44336;-->
<!--        color: #fff;-->
<!--        cursor: pointer;-->
<!--        backface-visibility: hidden;-->
<!--        /*    这个属性只用于iOS (iPhone和iPad)。-->
<!--        当你点击一个链接或者通过Javascript定义的可点击元素的时候，-->
<!--        它就会出现一个半透明的灰色背景。要重设这个表现，-->
<!--        你可以设置-webkit-tap-highlight-color为任何颜色-->
<!--        想要禁用这个高亮，设置颜色的alpha值为0即可。-->
<!--        */-->
<!--        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);-->
<!--        transition: background 0.15s ease, line-height 0.8s cubic-bezier(0.23, 1, 0.32, 1);-->
<!--    }-->

<!--    .btn-front:hover {-->
<!--        background-color: #f77066;-->
<!--    }-->

<!--    .btn.is-open .btn-front {-->
<!--        pointer-events: none;-->
<!--        line-height: 160px;-->
<!--    }-->

<!--    .btn-back {-->
<!--        position: absolute;-->
<!--        width: 100%;-->
<!--        height: 100%;-->
<!--        background-color: #eee;-->
<!--        color: #222;-->
<!--        transform: translateZ(-2px) rotateX(180deg);-->
<!--        overflow: hidden;-->
<!--        transition: box-shadow 0.8s ease;-->
<!--    }-->

<!--    .btn-back p {-->
<!--        margin-top: 27px;-->
<!--        margin-bottom: 25px;-->
<!--    }-->

<!--    .btn-back button {-->
<!--        padding: 12px 20px;-->
<!--        width: 30%;-->
<!--        margin: 0 5px;-->
<!--        background-color: transparent;-->
<!--        border: 0;-->
<!--        border-radius: 2px;-->
<!--        font-size: 1em;-->
<!--        cursor: pointer;-->
<!--        -webkit-appearance: none;-->
<!--        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);-->
<!--        transition: background 0.15s ease;-->
<!--    }-->

<!--    .btn-back button:focus {-->
<!--        outline: 0;-->
<!--    }-->

<!--    .btn-back button.yes {-->
<!--        background-color: #2196f3;-->
<!--        color: #fff;-->
<!--    }-->

<!--    .btn-back button.yes:hover {-->
<!--        background-color: #51adf6;-->
<!--    }-->

<!--    .btn-back button.no {-->
<!--        color: #2196f3;-->
<!--    }-->

<!--    .btn-back button.no:hover {-->
<!--        background-color: #ddd;-->
<!--    }-->

<!--    .btn.is-open .btn-back {-->
<!--        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);-->
<!--    }-->

<!--    .btn[data-direction="left"] .btn-back, .btn[data-direction="right"] .btn-back {-->
<!--        transform: translateZ(-2px) rotateY(180deg);-->
<!--    }-->

<!--    .btn.is-open {-->
<!--        width: 400px;-->
<!--        height: 160px;-->
<!--    }-->

<!--    .btn[data-direction="top"].is-open {-->
<!--        transform: rotateX(180deg);-->
<!--    }-->

<!--    .btn[data-direction="right"].is-open {-->
<!--        transform: rotateY(180deg);-->
<!--    }-->

<!--    .btn[data-direction="bottom"].is-open {-->
<!--        transform: rotateX(-180deg);-->
<!--    }-->

<!--    .btn[data-direction="left"].is-open {-->
<!--        transform: rotateY(-180deg);-->
<!--    }-->
<!--</style>-->