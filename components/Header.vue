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

        <v-btn
        text
        >
        <span>Login</span>
        </v-btn>

        <v-btn
        text
        >
        <span>Logout</span>
        </v-btn>

      </v-toolbar-items>
    </v-app-bar>
</template>

