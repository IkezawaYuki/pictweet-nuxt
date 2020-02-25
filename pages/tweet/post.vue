<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    class="input_area"
  >
    <v-text-field
      v-model="title"
      :counter="20"
      :rules="titleRules"
      label="タイトル"
      required
    ></v-text-field>

    <v-text-field
      v-model="url"
      :rules="urlRules"
      label="画像URL"
      required
    ></v-text-field>

    <v-textarea
      label="コメント"
      v-model="comment"
      required
      :rules="commentRules"
    ></v-textarea>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      投稿
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      フォームをリセット
    </v-btn>

  </v-form>
</template>

<script>
import ROUTES from "~/routes/api";

  export default {
    data: () => ({
      valid: true,
      title: '',
      titleRules: [
        v => !!v || 'タイトルを入力してください',
      ],
      url: '',
      urlRules: [
        v => !!v || '画像URLを入力してください',
      ],
      comment: '',
      commentRules: [
        v => !!v || 'コメントを入力してください',
      ],
    }),

    methods: {
      async validate ({store}) {
        if (this.$refs.form.validate()) {
          this.snackbar = true
          const payload = {
            uri: ROUTES.POST.TWEET.CREATE,
            params: {
              title: this.title,
              url: this.url,
              comment: this.comment
            }
          }
          var res = await this.$store.dispatch('postTweet', payload)
          console.log(res)
          this.$router.push("/");
        }
      },
      reset () {
        this.$refs.form.reset()
      },

    },
  }

</script>

<style scoped>
.input_area{
  width:600px;
}
</style>