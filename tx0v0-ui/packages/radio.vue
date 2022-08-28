<!--  -->
<template>
  <label class="tx-radio" :class="{'is-checked':label == model}">
    <span class="tx-radio_input">
      <span class="tx-radio_inner"></span>
      <input type="radio" class="tx-radio_original" :value="label" :name="name" v-model="model">
    </span>
    <span class="tx-radio_label">
      <slot></slot>
      <!-- 如果没有传值，就把label作为文本显示 -->
      <template v-if="!$slots.default">
        {{label}}
      </template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'TxRadio',
  inject:{
    RadioGroup: {
      default: ''
    }
  },
  props: {
    value: null,
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    model: {
      get () {
        return this.isGroup ? this.RadioGroup.value : this.value
      },
      set (value) {
         //  触发父组件的input事件
        // this.$emit('input', value)
        //判断如果包裹就触发自己父组件的事件，否则触发包裹组件的事件
        this.isGroup ? this.RadioGroup.$emit('input',value) : this.$emit('input',value)
      }
    },
    isGroup () {
      // 用于判断radio组件是否被radiogroup包裹
      return !!this.RadioGroup
    }
  }
}
</script>
<style scoped lang = 'scss'>
  .tx-radio{
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    margin-right: 30px;
    -moz-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    .tx-radio_input{
      white-space: nowrap;
      cursor: pointer;
      outline: none;
      display: inline-block;
      line-height: 1;
      position: relative;
      vertical-align: middle;
      .tx-radio_inner{
        border:1px solid #dcdfe6;
        border-radius: 100%;
        width: 14px;
        height: 14px;
        background-color: #fff;
        position: relative;
        cursor: pointer;
        display: inline-block;
        box-sizing: border-box;
        &:after{
          width: 4px;
          height: 4px;
          border-radius: 100%;
          background-color: #fff;
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%) scale();
          transition: transform .15s ease-in;
        }
      }
      .tx-radio_original{
        opacity: 0;
        outline: none;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0;
      }
    }
    .tx-radio_label{
      font-size: 14px;
      padding-left: 10px;
    }
  }
  /* 选中的样式 */
  .tx-radio.is-checked{
    .tx-radio_input{
      .tx-radio_inner{
        border-color: #409eff;
        background-color: #409eff;
        &:after{
          transform: translate(-50%,-50%) scale(1);
        }
      }
    }
    .tx-radio_label{
      color: #409eff;
    }
  }
</style>
