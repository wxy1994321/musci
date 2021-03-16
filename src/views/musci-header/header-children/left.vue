<template>
  <div class="left">
    <div class="login" v-if="show">
      <el-button class="btn" @click="dialogVisible = true" plain size="small"
        >点击登录</el-button
      >
      <el-dialog :visible.sync="dialogVisible" width="20%" center>
        <span slot="title" class="dialog-title">
          <i class="el-icon-phone-outline"></i>
          <span>请登录</span>
        </span>
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="55px"
          class="demo-ruleForm"
        >
          <el-form-item label="手机号" prop="phone">
            <el-input
              type="text"
              v-model="ruleForm.phone"
              autocomplete="off"
            ></el-input>
          </el-form-item>

          <el-form-item label="密码" prop="password" class="checkPass">
            <el-input
              type="password"
              v-model="ruleForm.password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="referto">确 定</el-button>
        </span>
      </el-dialog>
    </div>
    <div class="loginsuccessful" v-else>
      <div class="avatar">
        <el-avatar :src="src" class="head"></el-avatar>
        <span class="name">{{ name }}</span>
        <el-button size="small" class="signout" @click="signout"
          >退出登录</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { music_login, music_logout, music_userplaylist } from "network/login";
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入11位手机号"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };

    return {
      dialogVisible: false,
      ruleForm: {
        phone: "15114593816",
        password: "wxy19941003",
      },
      rules: {
        phone: [{ validator: validatePass, trigger: "blur" }],
        password: [{ validator: validatePass2, trigger: "blur" }],
      },
      show: true,
      src: "",
      name: "",
      id: "",
    };
  },
  methods: {
    referto() {
      if (this.ruleForm.phone.length < 11) {
        this.$message.error("手机号不能少于11位");
      } else {
        music_login(this.ruleForm).then((res) => {
          //登录
          if (res.data.code == 502) {
            this.$message.error(res.data.message);
          } else {
            this.open1(`登录成功 欢迎 ${res.data.profile.nickname}`);
            this.dialogVisible = false;
            this.show = !this.show;
            this.src = res.data.profile.avatarUrl;
            this.name = res.data.profile.nickname;
            this.id = res.data.profile.userId;

            music_userplaylist(this.id).then((res) => {
              //用户歌单
              let playlist = res.data.playlist;
              this.$store.commit("user_playlist", playlist);
            });
          }
        });
      }
    },
    open1(succes) {
      this.$message({
        message: succes,
        type: "success",
      });
    },
    open2(str) {
      this.$message.error(str);
    },

    signout() {
      music_logout().then(() => {
        this.show = !this.show;
        this.$message.error("已经退出登录");
      });
      this.$store.commit("signout");
    },
  },
};
</script>

<style scoped>
.left {
  line-height: 80px;
}
.btn {
  position: relative;
  left: 60px;
}
.demo-ruleForm {
  text-align: center;
}
.checkPass {
  padding-top: 10px;
}
.dialog-title {
  color: #409eff;
}
.dialog-title i {
  font-size: 20px;
  margin-right: 10px;
  position: relative;
  top: 2px;
}
.dialog-title span {
  letter-spacing: 1px;
  font-size: 15px;
}
.avatar {
  background-color: violet;
  position: relative;
  line-height: 80px;
}
.head {
  position: absolute;
  left: 30px;
  top: 50%;
  transform: translateY(50%);
}
.name {
  position: absolute;
  left: 80px;
  font-size: 14px;
  color: #fff;
}
.signout {
  position: absolute;
  left: 155px;
  top: 26px;
}
</style>
