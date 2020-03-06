<template>
  <section>
    <v-app-bar
      app
      color="cyan"
      light
      elevate-on-scroll
    >
      
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="white--text">Pictweet</v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="toolbar-items-button">
            <v-card-actions v-if="isLoggedIn">
              <v-btn text @click="toPostTweet">新規投稿</v-btn>
              <v-btn text @click="logout">ログアウト</v-btn>
            </v-card-actions>
            <v-card-actions v-else>
              <v-btn text @click="toLogin">ログイン</v-btn>
              <v-btn text @click="toSignUp">新規登録</v-btn>
            </v-card-actions>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      left
    >
      <v-list dense>
        <v-list-item link @click="toRoot">
          
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link @click="toFavorite">
          <v-list-item-action>
            <v-icon>mdi-heart</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Favorite</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>
  </section>
</template>
<script>
export default {
  name: 'default',
  components:{

  },
  computed:{
    isLoggedIn(){
      return !!this.$store.getters.isLoggedIn
    }
  },
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
  }),
  methods:{
    toRoot(){
      this.$router.push("/");
    },
    toPostTweet(){
      this.$router.push("/tweet/post");
    },
    toLogin(){
      this.$router.push("/login");
    },
    toSignUp(){
      this.$router.push("/signup");
    },
    logout(){
      this.$store.dispatch('logout');
    },
    toFavorite(){
      this.$router.push("/favorite")
    }
  }
}
</script>