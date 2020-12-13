<template>
    <div>
        <div id="tab-bar">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="">
    #tab-bar{
        display:flex;
        background: #f6f6f6;
        height: 39px;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        box-shadow:0 -1px 1px rgba(100,100,100,0.1)
  }

</style>