<template>
  <nuxt-link
  :to="`tweet/${tweetId}`"
  >
  <v-card
    class="mx-auto"
    width="500"
  >
  <v-list-item>
      <v-list-item-avatar color="grey">
      <v-img
        :src= tweet.avatar_url
        alt="avatar"
      ></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">{{tweet.title}}</v-list-item-title>
        <v-list-item-subtitle>by {{tweet.author}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-img
      :src= tweet.image_url
      height="300px"
    ></v-img>

    <v-card-title>
      {{ tweet.text }}
    </v-card-title>

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
      type: Number
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