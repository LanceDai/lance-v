<template>
    <div class="wavy">
        <span class="hidden" ref="hidden"><slot></slot></span>
        <span v-for="(word, i) in this.words" :key="i" :style="{'--i': i}" class="wavy-word">
        {{word}}
    </span>
    </div>
</template>

<script>
    export default {
        name: "WavyFont",
        props: {}, data() {
            return {
                words: []
            }
        }, methods: {
            getWords() {
                const $hidden = this.$refs.hidden
                const words = $hidden.textContent.trim()
                console.log("words" + words)
                this.words = [...words]
            }
        }, mounted() {
            // 等待加载完成
            this.$nextTick(() => {
                this.getWords()
            })
        }
    }
</script>

<style scoped lang="scss">
    .wavy {
        .hidden {
            display: none;
        }

        position: relative;
        -webkit-box-reflect: below -12px linear-gradient(transparent, rgba(0, 0, 0, 0.2));

        .wavy-word {
            text-transform: uppercase;
            letter-spacing: 5px;
            position: relative;
            display: inline-block;
            color: white;
            font-size: 2em;
            animation: float 1s ease-in-out infinite;
            animation-delay: calc(0.1s * var(--i));
        }

        @keyframes float {
            0% {
                transform: translateY(0px);
            }
            20% {
                transform: translateY(-20px);
            }
            40%, 100% {
                transform: translateY(0px);
            }
        }
    }
</style>