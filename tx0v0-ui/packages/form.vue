<!--  -->
<template>
<div class='tx-form'>
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'TxForm',
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: '80px'
    }
  },
  provide () {
    return {
      Form: this
    }
  }
}
</script>
<style scoped lang = 'scss'>
</style>
