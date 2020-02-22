<template>
  <v-row justify="center">
      <v-subheader>Comment</v-subheader>

  </v-row>
</template>

<script>
import ROUTES from '~/routes/api';

export default {
  computed:{
    tweet(){
      return this.$store.getters.getTweetDetail
    },
  },
  methods:{

  },
  async fetch({store, route}){
    await store.dispatch('showTweet', {
      uri: ROUTES.GET.TWEET.SHOW.replace(':id', route.params.id),
    })
  }
}

</script>
