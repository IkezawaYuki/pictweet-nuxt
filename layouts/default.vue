<template>
  <v-app id="inspire">
    <Header/>
    <Sidebar/>

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
import Header from "~/components/Header"
import Sidebar from "~/components/Sidebar"

  export default {
    name: 'default',
    components:{
      Header,
      Sidebar
    },
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    methods:{

    }
  }
</script>

<style scoped>


</style>