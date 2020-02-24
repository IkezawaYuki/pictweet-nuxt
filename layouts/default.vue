<template>
  <v-app id="inspire">
    <template>
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
            <v-card-actions>
              <v-btn text @click="toPostTweet">新規投稿</v-btn>
            </v-card-actions>
            <v-card-actions>
              <v-btn text>ログイン</v-btn>
            </v-card-actions>
            <v-card-actions>
              <v-btn text>ログアウト</v-btn>
            </v-card-actions>

      </v-toolbar-items>
    </v-app-bar>
</template>


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

        <v-list-item link>
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

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <nuxt />
        </v-row>
      </v-container>
    </v-content>

    <v-footer
      color="cyan"
      app
    >
      <v-spacer />

      <span class="white--text">&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: 'default',
    components:{

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
      }
    }
  }
</script>

<style scoped>


</style>