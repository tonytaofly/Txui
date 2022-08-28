# 组件库

###### 1.安装包代码：

npm i tx0v0-ui(可能会存在npm版本问题，向旧版本兼容代码：npm config set legacy-peer-deps true)

###### 2.在mian.js中代码：

​                 

```js
import TxUI from 'tx0v0-ui'//名字可以自己取
import 'tx0v0-ui/dist/tx0v0-ui.css'//样式
Vue.use(TxUI)
```



###### 按钮:

  

```vue
<tx-button></tx-button>
```

  提供属性： 1.type：primary，success，info，warning，danger对应不同的颜色
             

```vue
<tx-button>默认按钮</tx-button>
<tx-button  type="primary">primary按钮</tx-button>
<tx-button  type="success">success按钮</tx-button>
<tx-button  type="info">info按钮</tx-button>
<tx-button  type="warning">warning按钮</tx-button>
<tx-button  type="danger">danger按钮</tx-button>
```

​             2.plain ：是否为朴素按钮

```vue
<tx-button plain>朴素按钮</tx-button>
```

​             3.round ： 边框圆角按钮

```vue
<tx-button round>按钮</tx-button>      
```

​	 4.circl ： 圆角按钮

```vue
<tx-button circle  @click="事件函数"></tx-button>
```

​             5.icon ： 可以定义按钮的图标

```vue
<tx-button circle icon="字体/图标" @click="自定义事件函数"></tx-button>
```

​             6.disabled：可以禁用按钮

```vue
<tx-button disabled >禁用按钮</tx-button>
```

######        对话框组件 ：

```vue
<tx-dialog :visible.sync="visible" width="60%" top="200px">/*可以定义dialog 的宽度，以及距离页面顶部的距离*/
          <template v-slot:title>/*可以自己定义dialog的顶部标题*/
            <h3>自定义的标题</h3>
          </template>
          <ul>/*内容*/
            <li>123</li>
            <li>123</li>
            <li>123</li>
          </ul>
          <template v-slot:footer>/*可以自己定义dialog的底部需要什么组件或者是自己定义的东西*/
            <tx-button @click="switchDialog">取消</tx-button>
            <tx-button type="primary">确定</tx-button>
          </template>
        </tx-dialog>
        <script>
        export default {
 			 data () {
   				 return {
     				 visible: false,
             //传递给子组件的可见属性，让子组件也可以控制父组件里面的值，用的是一个sync语法糖。
     			}
     		}
       	</script>
```

###### 输入框组件：

```vue
<tx-input placeholder="请输入数据" name="name" v-model="username" clearable></tx-input><br>
<tx-input placeholder="请输入密码" type="password" v-model="password" show-password></tx-input>
```

![1661697122891](C:\Users\xin'xin\AppData\Roaming\Typora\typora-user-images\1661697122891.png)

###### switch组件：

```vue
<tx-switch v-model="active" :name="activeName"></tx-switch>
<tx-switch v-model="active" active-color="skyblue" inactive-color="red"></tx-switch>
```

![1661697197113](C:\Users\xin'xin\AppData\Roaming\Typora\typora-user-images\1661697197113.png)

###### radio组件：

```vue
<tx-radio v-model="gender" label="0">男</tx-radio>
<tx-radio v-model="gender" label="1">女</tx-radio>
```

| 参数名称 |   参数描述    |        参数类型         | 默认值 |
| :------: | :-----------: | :---------------------: | :----: |
| v-model  |   双向绑定    |         Boolean         | false  |
|  label   | 单选框和value | string，number，boolean |   ''   |
|   name   |   name属性    |         string          |   ''   |

由于需要使用radio组件就得给每个radio组件绑定v-model值所以我们使用radio-group批量使用radio组件

###### radio-group组件：

```vue
<tx-radio-group v-model="自己定义的数据" >
        <tx-radio label="0">大</tx-radio>
        <tx-radio label="1">小</tx-radio>
        <tx-radio label="3">相等</tx-radio>
</tx-radio-group>
```

| 参数名称 |   参数描述    |        参数类型         | 默认值 |
| :------: | :-----------: | :---------------------: | :----: |
| v-model  |   双向绑定    |         Boolean         | false  |
|  label   | 单选框和value | string，number，boolean |   ''   |
|   name   |   name属性    |         string          |   ''   |

###### checkbox组件：

```vue
<tx-checkbox label="勾选" v-model="checkout"></tx-checkbox>
```

| 参数名称 | 参数描述      | 参数类型                | 默认值 |
| -------- | ------------- | ----------------------- | ------ |
| v-model  | 双向绑定      | Boolean                 | false  |
| label    | 单选框和value | string，number，boolean | ''     |
| name     | name属性      | string                  | ''     |

###### checkboxgroup组件：

```vue
<tx-checkbox-group v-model="hobby">
          <tx-checkbox label="篮球" ></tx-checkbox>
          <tx-checkbox label="羽毛球" ></tx-checkbox>
          <tx-checkbox label="足球"></tx-checkbox>
</tx-checkbox-group>
```

| 参数名称 | 参数描述      | 参数类型                | 默认值 |
| -------- | ------------- | ----------------------- | ------ |
| v-model  | 双向绑定      | Boolean                 | false  |
| label    | 单选框和value | string，number，boolean | ''     |
| name     | name属性      | string                  | ''     |

###### form组件：

```vue
<tx-form :model="model" label-width="80px">
          <tx-form-item label="用户名">
            <tx-input placeholder="请输入数据" v-model="model.username"></tx-input>
          </tx-form-item>
          <tx-form-item label="选择">
            <tx-switch v-model="model.active"></tx-switch>
          </tx-form-item>
</tx-form>
```

| 参数名称    | 参数描述   | 参数类型 | 默认值 |
| ----------- | ---------- | -------- | ------ |
| v-model     | 双向绑定   | object   | false  |
| label       | item的文本 | string   | ''     |
| label-width | 表单的宽度 | string   | '80px' |

