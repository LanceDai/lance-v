<template>
    <div style="position: relative; display: inline-block;">
        <p class="ld-magic-fold-font__letter__before" :style="letterBefore">
            <slot></slot>
        </p>
        <p class="ld-magic-fold-font__letter">
            <slot></slot>
        </p>
        <p class="ld-magic-fold-font__letter__after" :style="letterAfter">
            <slot></slot>
        </p>
    </div>
</template>

<script>
    export default {
        name: "MagicFoldFont",
        props: {
            frontColor: {
                type: String,
                default: '#ffffff'
            },
            backgroundColor: {
                type: String,
                default: '#00B4F1'
            }
        },
        computed: {
            letterBefore() {
                return {
                    color: this.frontColor
                }
            },
            letterAfter() {
                return {
                    color: this.backgroundColor
                }
            }
        }
    }
</script>

<style scoped>
    .ld-magic-fold-font__letter__before, .ld-magic-fold-font__letter, .ld-magic-fold-font__letter__after {
        margin: 0;
        font-size: 5.2em;
        transition: all 0.3s ease-in-out;
        display: inline-block;
    }

    .ld-magic-fold-font__letter__after {
        font-weight: 900;
        transform-style: preserve-3d;
        perspective: 400px;
        z-index: 1;
    }

    .ld-magic-fold-font__letter__before, .ld-magic-fold-font__letter {
        position: absolute;
        transform-origin: top left;
        top: 0;
        left: 0;
    }

    .ld-magic-fold-font__letter__before {
        text-shadow: -1px 0 1px rgba(255, 255, 255, .8), 1px 0 1px rgba(0, 0, 0, .8);
        z-index: 3;
        transform: rotateX(0deg) rotateY(-15deg) rotateZ(0deg);
    }

    .ld-magic-fold-font__letter {
        color: rgba(0, 0, 0, .11);
        z-index: 2;
        transform: scale(1.08, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 1deg);
    }

    .ld-magic-fold-font__letter__before:hover {
        color: #fafafa;
        transform: rotateX(0deg) rotateY(-40deg) rotateZ(0deg);
    }

    .ld-magic-fold-font__letter__before:hover ~ .ld-magic-fold-font__letter {
        transform: scale(1.08, 1) rotateX(0deg) rotateY(40deg) rotateZ(0deg) skew(0deg, 22deg);
    }
</style>
