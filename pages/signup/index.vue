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
            <v-btn @click="signup">新規登録</v-btn>
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
    signup(){
      let user = {
        email: this.email,
        password: this.password,
      }
      this.$store.dispatch('signUp', user)
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