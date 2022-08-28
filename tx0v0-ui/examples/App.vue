<template>
  <div id="app">
    <span>普通按钮</span>
    <div class="row">
      <tx-button>默认按钮</tx-button>
      <tx-button type="primary">primary按钮</tx-button>
      <tx-button type="success">success按钮</tx-button>
      <tx-button type="info">info按钮</tx-button>
      <tx-button type="warning">warning按钮</tx-button>
      <tx-button type="danger">danger按钮</tx-button>
    </div>
    <span>朴素按钮</span>
    <div class="row">
      <tx-button plain>朴素按钮</tx-button>
      <tx-button plain type="primary">primary按钮</tx-button>
      <tx-button plain type="success">success按钮</tx-button>
      <tx-button plain type="info">info按钮</tx-button>
      <tx-button plain type="warning">warning按钮</tx-button>
      <tx-button plain type="danger">danger按钮</tx-button>
    </div>
    <span>边框圆角按钮</span>
    <div class="row">
      <tx-button round>按钮</tx-button>
      <tx-button round type="primary">primary按钮</tx-button>
      <tx-button round type="success">success按钮</tx-button>
      <tx-button round type="info">info按钮</tx-button>
      <tx-button round type="warning">warning按钮</tx-button>
      <tx-button round type="danger">danger按钮</tx-button>
    </div>
    <span>圆角按钮&&点击事件</span>
    <div class="row">
      <tx-button circle icon="dianzan" @click="getInfo"></tx-button>
      <tx-button
        circle
        icon="lishi"
        type="primary"
        @click="getInfo"
      ></tx-button>
      <tx-button
        circle
        icon="shanchu"
        type="success"
        @click="getInfo"
      ></tx-button>
      <tx-button circle icon="pinglun" type="info" @click="getInfo"></tx-button>
      <tx-button
        circle
        icon="shipin"
        type="warning"
        @click="getInfo"
      ></tx-button>
      <tx-button
        circle
        icon="shoucang"
        type="danger"
        @click="getInfo"
      ></tx-button>
    </div>
    <span>禁用按钮</span>
    <div class="row">
      <tx-button disabled>禁用按钮</tx-button>
      <tx-button disabled type="primary">primary按钮</tx-button>
      <tx-button disabled type="success">success按钮</tx-button>
      <tx-button disabled type="info">info按钮</tx-button>
      <tx-button disabled type="warning">warning按钮</tx-button>
      <tx-button disabled type="danger">danger按钮</tx-button>
    </div>
    <span>对话框组件</span><br />
    <!-- // 默认的标题 -->
    <!-- <tx-dialog title="温馨提示"></tx-dialog> -->
    <!-- // 自定义标题 -->
    <tx-button @click="visible = true" plain type="primary"
      >显示dialog组件</tx-button
    >
    <br />
    <tx-dialog :visible.sync="visible" width="60%" top="200px">
      <template v-slot:title>
        <h3>自定义的标题</h3>
      </template>
      <ul>
        <li>123</li>
        <li>123</li>
        <li>123</li>
      </ul>
      <template v-slot:footer>
        <tx-button @click="switchDialog">取消</tx-button>
        <tx-button type="primary">确定</tx-button>
      </template>
    </tx-dialog>
    <span>input组件</span><br />
    <span>数据绑定input组件&&清空&&密码显示(图标暂时有错)</span><br />
    <tx-input
      placeholder="请输入数据"
      name="name"
      v-model="username"
      clearable
    ></tx-input
    ><br />
    <tx-input
      placeholder="请输入密码"
      type="password"
      v-model="password"
      show-password
    ></tx-input
    ><br />
    <span>switch组件可以自定义颜色(可使用name控制switch)</span><br />
    <tx-switch v-model="active" :name="activeName"></tx-switch>
    <tx-switch
      v-model="active"
      active-color="skyblue"
      inactive-color="red"
    ></tx-switch
    ><br />
    <span>radio组件</span><br />
    <tx-radio v-model="gender" label="0">男</tx-radio>
    <tx-radio v-model="gender" label="1">女</tx-radio><br />
    <span>radio-group组件</span><br />
    <tx-radio-group v-model="debug">
      <tx-radio label="0">大</tx-radio>
      <tx-radio label="1">小</tx-radio>
      <tx-radio label="3">相等</tx-radio> </tx-radio-group
    ><br />
    <span>checkbox组件</span><br />
    <tx-checkbox label="勾选" v-model="checkout"></tx-checkbox><br />
    <span>checkboxgroup组件</span><br />
    <tx-checkbox-group v-model="hobby">
      <tx-checkbox label="篮球"></tx-checkbox>
      <tx-checkbox label="羽毛球"></tx-checkbox>
      <tx-checkbox label="足球"></tx-checkbox> </tx-checkbox-group
    ><br />
    <span>form组件</span><br />
    <tx-form :model="model" label-width="80px">
      <tx-form-item label="用户名">
        <tx-input placeholder="请输入数据" v-model="model.username"></tx-input>
      </tx-form-item>
      <tx-form-item label="选择">
        <tx-switch v-model="model.active"></tx-switch>
      </tx-form-item>
    </tx-form>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      visible: false,
      username: "",
      password: "",
      active: false,
      activeName: "",
      gender: "",
      debug: "",
      checkout: false,
      hobby: ["篮球", "羽毛球"],
      model: {
        username: "",
        active: true,
      },
    };
  },
  methods: {
    getInfo() {
      alert("点击成功！请绑定自己的事件函数吧。");
    },
    switchDialog(value) {
      this.visible = !value;
    },
    showDialog(value) {
      this.visible = !value;
    },
  },
};
</script>

<style lang="scss"></style>
