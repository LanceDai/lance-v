<template>
    <div class="typing-text">
        <span id="type-text" ref="text">{{text}}</span>
        <span class="blinking-cursor">_</span>
    </div>
</template>

<script>

    export default {
        name: "TypingText",
        props: {
            prefixStr: {
                type: String,
                require: false,
                default: "",
                description: "前缀字符串"
            }, textOne: {
                type: String,
                require: true,
                description: "字符串 -- 1"
            }, textTwo: {
                type: String,
                require: true,
                description: "字符串 -- 2"
            }, pauseTime: {
                type: Number,
                require: false,
                default: 2000,
                description: "停顿时间"
            }
        }, data() {
            return {
                text: ""
            }
        }, methods: {
            init() {
                this.wait(1000).then(() => {
                    this.clearText()
                    this.initType()
                })
            }, initType() {
                if (this.prefixStr !== "" && this.prefixStr !== undefined)
                    this.typeText(this.prefixStr).then(this.typeLoop)
                else this.typeLoop()
            },typeLoop() {
                this.typeText(this.textOne)
                    .then(() => this.wait(this.pauseTime))
                    .then(() => this.removeText(this.textOne.length))
                    .then(() => this.typeText(this.textTwo))
                    .then(() => this.wait(this.pauseTime))
                    .then(() => this.removeText(this.textTwo.length))
                    .then(this.typeLoop)
            }, wait(time) {
                return new Promise(resolve => {
                    setTimeout(resolve, time)
                })
            }, genRandomInterval() {
                const randomMsInterval = 100 * Math.random()
                return randomMsInterval < 50 ? 10 : randomMsInterval
            }, removeText(amount) {
                const self = this
                return new Promise(resolve => {
                    (function _remove(index) {
                        self.removeCharacter().then(() => {
                            if (index + 1 < amount) {
                                _remove(index + 1)
                            } else {
                                resolve()
                            }
                        })
                    })(0)
                })
            }, clearText() {
                this.text = ""
            }, typeText(text) {
                const self = this
                return new Promise(resolve => {
                    (function _type(index) {
                        self.typeCharacter(text[index], self).then(() => {
                            if (index + 1 < text.length) {
                                _type(index + 1)
                            } else {
                                resolve()
                            }
                        })
                    })(0)
                })
            }, typeCharacter(character) {
                return new Promise(resolve => {
                    const msInterval = this.genRandomInterval()
                    this.pushCharacter(character, self)
                    this.wait(msInterval).then(resolve)
                })
            }, pushCharacter(character) {
                this.text += character
            }, popCharacter() {
                this.text = this.text.slice(0, this.text.length - 1)
            }, removeCharacter() {
                return new Promise(resolve => {
                    const msInterval = this.genRandomInterval()
                    this.popCharacter()
                    this.wait(msInterval).then(resolve)
                })
            }
        }, mounted() {
            this.init()
        }
    }
</script>

<style scoped lang="scss">
    .typing-text {
        color: #FFF;
        font-size: 30px;

        .blinking-cursor {
            animation: blink 1s steps(2, start) infinite;
        }

        @keyframes blink {
            to {
                visibility: hidden;
            }
        }
    }
</style>