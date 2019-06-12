<template>
    <div class="login">
        <h1>登录页面</h1>
        <input type="text" placeholder="请输入用户名" v-model="Username">
        <input type="password" placeholder="请输入密码" v-model="Password">
        <input type="button" value="登录" @click="toLogin">
    </div>
</template>

<script>
import {userLogin} from "../../api/index"

export default {
  name: 'app',
  data() {
    return {
      Username: "",
      Password: ""
    }
  },
  methods: {
    toLogin() {
        let params = {
            username: this.Username,
            password: this.Password
        };
  
        userLogin(params).then(res => {
          console.log(res.retCode)
            if(res.retCode === 0) {
                this.$router.push("/home")
            }
        })
    }
  }
}
</script>

