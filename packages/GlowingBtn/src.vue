<template>
    <div class="glowing-btn">
        <slot>BUTTON</slot>
    </div>
</template>

<script>
    export default {
        name: "GlowingBtn"
    }
</script>

<style scoped>
    .glowing-btn {
        position: relative;
        width: 200px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        color: #fff;
        font-size: 24px;
        text-transform: uppercase;
        font-family: sans-serif;
        font-weight: 700;
        box-sizing: border-box;
        background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
        background-size: 400%;
        border-radius: 30px;
        cursor: pointer;
        z-index: 1;
    }

    .glowing-btn:before {
        content: '';
        position: absolute;
        top: -5px;
        left: -5px;
        right: -5px;
        bottom: -5px;
        z-index: -1;
        background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
        background-size: 400%;
        border-radius: 40px;
        opacity: 0;
        transition: 1.5s;
    }

    .glowing-btn:hover:before {
        filter: blur(20px);
        opacity: 1;
        animation: glowing-btn-animate 8s ease-out infinite;
    }


    @keyframes glowing-btn-animate {
        0% {
            background-position: 0;
        }
        100% {
            background-position: 400%;
        }
    }

</style>