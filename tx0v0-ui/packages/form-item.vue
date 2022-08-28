<!--  -->
<template>
<div class='tx-form-item'>
  <label class="tx-form-item_label" :style="{width:this.Form.labelWidth}">{{label}}</label>
  <div class="tx-form-item_content"></div>
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'TxFormItem', 
  props: {
    label: {
      type: String,
      default: ''
    },
  },
  inject: ['Form']
}
</script>
<style scoped lang = 'scss'>
  .tx-form-item{
    margin-bottom: 25px;
    .tx-form-item_label{
      text-align: right;
      vertical-align: middle;
      float: left;
      font-size: 14px;
      color: #606266;
      line-height: 40px;
      padding: 0 12px 0 0;
      box-sizing: border-box;
    }
    .tx-form-item_content{
      line-height: 40px;
      position: relative;
      font-size: 14px;
      overflow: hidden;
    }
  }
</style>
