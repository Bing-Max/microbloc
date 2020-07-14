<!-- 
    description: 登录界面
    author: bing
    date: 2020-07-14 22:05
 -->
<template>
  <div id="login-bg-panel" class="panel">
    <div id="login-form" class="panel">
      <div id="form-img">

      </div>
      <div id="main-form" class="panel col">
        <div style="height: 20%; width: 80%;">
          <span style="font-family: 微软雅黑 ; font-size: 20px">MicroBloc</span>
        </div>
        <div style="width: 80%;">
          <el-form ref="form" :model="form">
            <el-form-item>
              <el-input prefix-icon="el-icon-user-solid" v-model="form.name" placeholder="account"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input prefix-icon="el-icon-lock" v-model="form.passwd" placeholder="password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">验证</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import axios from 'axios'
  import Qs from 'qs'

  export default {
    name: 'Login',
    data() {
      return {
        form: {
          name: '',
          passwd: ''
        }
      }
    },
    methods: {
      onSubmit() {
        //http://localhost:8080
        axios.post("/ssm_demo/login", {
          name: this.form.name,
          passwd: this.form.passwd
        }, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          transformRequest: [function (data) {
            return Qs.stringify(data)
          }]
        }).then(res => {
          if(res.data.code == 0){
            this.$message({
              message: res.data.msg,
              type: 'success'
            })
          }
        })
      }
    }
  }
</script>

<style scoped>
  #login-bg-panel {
    background-image: url('../assets/bac01.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    height: 100%;
    width: 100%;
  }

  #login-form {
    height: 400px;
    width: 750px;
    background-color: whitesmoke;
    box-shadow: 10px 10px 20px #888888;
  }

  #form-img {
    /* background-color: blueviolet; */
    background-image: url('../assets/bac03.png');
    height: 100%;
    width: 50%;
  }

  #main-form {
    /* background-color: burlywood; */
    height: 100%;
    width: 50%;
  }

  .panel {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .col {
    flex-direction: column;
  }
</style>