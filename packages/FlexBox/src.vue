<template>
    <div class="ld-flex-box__main">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "FlexBox"
    }
</script>

<style scoped>
    .ld-flex-box__main {
        display: inline-flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }

</style>
