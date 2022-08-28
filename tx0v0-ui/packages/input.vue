<!-- input组件 -->
<template>
<div class='tx-input' :class="{'tx-input_suffix':showSuffix}">
  <input class="tx-input_inner" :class="{'is-disabled':disabled}" :placeholder="placeholder" :type="showPassword?(passwordVisible ? 'text' : 'password') : type" :name="name" :value="value" @input="handleInput" :disabled="disabled">
  <span class="tx-input_suffix">
    <i class="iconfont icon-shanchu" v-if="clearable && value" @click="clear"></i>
    <i class="iconfont icon-wenda" v-if="showPassword && type=='password' && value" @click="handlePassword"></i>
  </span>
</div>
</template>

<script>
export default {
  name: 'TxInput',

  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: null,
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      // 是否显示密码框
      passwordVisible: false
    }
  },
  computed: {
    showSuffix () {
      return this.clearable || this.showPassword
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    clear () {
      this.$emit('input', '')
    },
    handlePassword () {
      this.passwordVisible = !this.passwordVisible
    }
  }

}
</script>
<style scoped lang = 'scss'>
.tx-input {
  width: 200px;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .tx-input_inner{
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645,045,.355,1);
    width: 200px;

    &:focus{
      outline: none;
      border-color: #409eff;
    }
    /* //input禁用样式 */
    &.is-disabled{
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color:#c0c4cc;
      cursor: not-allowed;
    }
  }
}
.tx-input_suffix{
    .tx-input_inner{
      padding-right: 30px;
    }
    .tx-input_suffix{
      position: absolute;
      right: 10px;
      height: 100%;
      top: 0;
      line-height: 40px;
      text-align: center;
      color: #c0c4cc;
      transition: all .3s;
      z-index: 900;
      i{
        color: #c0c4cc;
        font-size: 5px;
        cursor: pointer;
        transition: color .2s cubic-bezier(.645,.045,.355,1);
      }
    }
  }
</style>
