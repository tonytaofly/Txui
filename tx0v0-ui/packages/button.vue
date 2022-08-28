<template>
    <button class="tx-button" :class="[
    `tx-button-${type}`,
    {'is-plain':plain},
    {'is-round':round},
    {'is-circle':circle},
    {'is-disabled':disabled}
    ]"
    @click="handleClick">
    <i v-if="icon" :class="`iconfont icon-${icon}`"></i>
      <span v-if="$slots.default"><slot></slot></span>
      </button>
</template>
<script>
export default {
  name: 'TxButton',
  // 接受父组件传来的数据，并进行校验
  props: {
    type: {
      // 数据类型字符串
      type: String,
      // 设置默认值：如果不传值，那么使用default
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  created () {
    // console.log(this.round)
  },
  methods: {
    // 讲组件的点击事件上传父组件
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>
<style scoped lang="scss">
  .tx-button{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0 10px 0 0;
    transition: 0.1s;
    font-weight: 500;
    //禁止元素的文字被选中
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    &:hover,
    &:hover{
      color: #409eff;
      border-color: #c6e2ff;
      background-color: #ecf5ff;
    }
  }
  // 按钮得基本样式
  .tx-button-primary{
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    &:hover,
    &:hover{
      background: #66b1ff;
      background-color: #66b1ff;
      color: #fff;
    }
  }
  .tx-button-success{
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
    &:hover,
    &:hover{
      background: #85ce61;
      background-color: #85ce61;
      color: #fff;
    }
  }
  .tx-button-info{
    color: #fff;
    background-color: #909399;
    border-color: #909399;
    &:hover,
    &:hover{
      background: #a6a9ad;
      background-color: #a6a9ad;
      color: #fff;
    }
  }
  .tx-button-warning{
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
    &:hover,
    &:hover{
      background: #ebb563;
      background-color: #ebb563;
      color: #fff;
    }
  }
  .tx-button-danger{
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
    &:hover,
    &:hover{
      background: #f78989;
      background-color: #f78989;
      color: #fff;
    }
  }
  // 朴素按钮样式
.tx-button.is-plain{
  &:hover,
  &:focus{
    background: #fff;
    border-color: #489eff;
    color: #409eff;
  }
}
.tx-button-primary.is-plain{
  color: #409eff;
  background: #ecf5ff;
  &:hover,
  &:focus{
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.tx-button-success.is-plain{
  color: #67c23a;
  background: #c2e7b0;
  &:hover,
  &:focus{
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}
.tx-button-info.is-plain{
  color: #909399;
  background: #d3d4d6;
  &:hover,
  &:focus{
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.tx-button-warning.is-plain{
  color: #e6a23c;
  background: #f5dab1;
  &:hover,
  &:focus{
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.tx-button-danger.is-plain{
  color: #f56c6c;
  background: #fbc4c4;
  &:hover,
  &:focus{
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}
//是否是圆角
.tx-button.is-round{
  border-radius: 20px;
  padding: 12px 12px;
}
//是否使用园
.tx-button.is-circle{
  border-radius: 50%;
  padding: 12px;
}
//禁用的样式
.tx-button.is-disabled{
  cursor: no-drop;//no-allowed
}
</style>
