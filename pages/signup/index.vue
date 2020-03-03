<template>
  <div class="section">
        <div class="box">
          <div class="field">
              <v-text-field 
              label="名前"
              type="text"
              v-model="name"
              ></v-text-field>
          </div>

          <div class="field">
              <v-text-field 
              label="ID (e-mail)"
              type="email"
              v-model="email"
              ></v-text-field>
          </div>

          <div class="field">
              <v-text-field 
              label="ユーザー画像"
              type="text"
              v-model="avatar"
              ></v-text-field>
          </div>

          <div class="field">
              <v-text-field 
              type="password"
              label="パスワード"
              v-model="password"
              ></v-text-field>
          </div>

          <div class="field">
              <v-text-field 
              type="password"
              label="パスワード再入力"
              v-model="password_again"
              ></v-text-field>
          </div>

          <div class="field is-grouped">
            <v-btn @click="signup">新規登録</v-btn>
          </div>
        </div>
  </div>
</template>


<script>
export default{
  data(){
    return {
      name: "",
      email: "",
      avatar: "",
      password: "",
      password_again: "",
    }
  },
  methods:{
    signup(){
      const payload = {
        uri: ROUTES.POST.USER.CREATE,
        params: {
          name: this.name,
          email: this.email,
          avatar: this.avatar,
          password: this.password,
          password_again: this.password_again,
        }
      }
      if (this.validate(user)){
        this.$store.dispatch('signUp', params)
      }
    },
    validate(user){
      if(user.name == "" || user.email == ""){
        return false
      }
      if(user.password == user.password_again){
        return false
      }
      return true
    }
  }
}

</script>

<style scoped>
.box{
  width: 500px;
}

.is-info{
  width: 100%;
}
</style>