<template>
  <section>
    <div class="container">
      <div class="block">
        <div class="block tweet-block"  v-for="(tweet, index) in tweets" :key="index">
          <Tweet
              :tweet="tweet"
              :tweet-id="tweet.ID"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ROUTES from "~/routes/api";
import Tweet from "~/components/Tweet";

export default {
  components: {Tweet},
  computed:{
  tweets(){
      return this.$store.getters.getTweets
    },
  },
  methods:{

  },
  async fetch({store}){
    const payload = {
      uri: ROUTES.GET.INDEX
    }
    if(store.getters.getTweets && store.getters.getTweets.length > 0){
      return
    }
    await store.dispatch('fetchTweets', payload)
  }
}
</script>

<style scoped>
.block{
  text-decoration:none;
}
</style>