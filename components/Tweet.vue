<template>
  <nuxt-link
  :to="`tweet/${tweetID}`"
  >
  <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="300px"
    ></v-img>

    <v-card-title>
      景色が綺麗
    </v-card-title>

    <v-card-subtitle>
      posted by YUKI
    </v-card-subtitle>
  </v-card>
  </nuxt-link>
</template>

<script>
export default{
  props:{
    tweet:{
      type: Object
    },
    tweetID:{
      type: String
    },
  },
  filters:{
    omit: (value) => {
      if(!value){
        return '';
      }
      if(value.length > 20){
        return value.substr(0, 20) + "..."
      }
      return value
    }
  }
}

</script>


<style scoped>
a {
    text-decoration: none;
}

.mx-auto{
  margin-bottom: 30px;
}
</style>