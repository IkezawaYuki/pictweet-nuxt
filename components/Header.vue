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
              <v-btn text>新規投稿</v-btn>
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

