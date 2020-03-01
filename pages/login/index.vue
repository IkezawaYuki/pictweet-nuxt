<template>
  <div class="section">
        <div class="box">
          <div class="field">
              <v-text-field 
              label="ID (e-mail)"
              type="email"
              v-model="email"
              ></v-text-field>
          </div>

          <div class="field">
              <v-text-field 
              type="password"
              label="パスワード"
              v-model="password"
              ></v-text-field>
          </div>

          <div class="field is-grouped">
            <v-btn color="primary" @click="login">ログイン</v-btn>
          </div>
        </div>
  </div>
</template>


<script>
export default{
  data(){
    return {
      email: "",
      password: "",
    }
  },
  methods:{
    login(){
      let user = {
        email: this.email,
        password: this.password,
      }
      this.$store.dispatch('login', user)
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