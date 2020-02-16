<template>
  <nuxt-link
  :to="`tweet/${tweetId}`"
  >
  <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-img
      :src= tweet.Image
      height="300px"
    ></v-img>

    <v-card-title>
      {{ tweet.Title }}
    </v-card-title>

    <v-card-subtitle>
      {{ tweet.userId }}
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
    tweetId:{
      type: Numberc
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