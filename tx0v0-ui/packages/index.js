// 整个包的入口
// 统一导出
// 导出颜色选择器组件
import Button from './button.vue'
import Dialog from './dialog.vue'
import Input from './input.vue'
import Checkbox from './checkbox.vue'
import Radio from './radio.vue'
import RadioGroup from './radio-group.vue'
import Switch from './switch.vue'
import CheckboxGroup from './checkboxgroup.vue'
import Form from './form.vue'
import FormItem from './form-item.vue'
import './fonts/iconfont.css'


const components = [
  Button,
  Dialog,
  Input,
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  CheckboxGroup,
  Form,
  FormItem
]

// 定义install方法
const install = function (Vue) {
  // 注册所有组件
  components.forEach(item => {
    Vue.component(item.name, item)
  })
}

// 判断是不是直接引入文件，如果是，就不用调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// 导出install方法
export default {
  install
}
