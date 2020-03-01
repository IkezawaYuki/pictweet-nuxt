<template>
  <v-app id="inspire">
    <Frame/>
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
import ROUTES from '~/routes/api';
import Frame from "~/components/Frame";

  export default {
    name: 'default',
    components:{
       Frame,
    },
    props: {
      source: String,
    },
    methods:{

    }
  }
</script>

<style scoped>


</style>