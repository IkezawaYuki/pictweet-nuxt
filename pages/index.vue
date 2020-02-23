<template>
  <section>
    <div class="container">
      <div class="block">
        <div class="block tweet-block"  v-for="(tweet, index) in tweets" :key="index">
          <Tweet
              :tweet="tweet"
              :tweet-id="tweet.id"
          />
        </div>
      </div>
    </div>
    <div class="text-center" @click="getPage">
    <v-pagination
      v-model="page"
      :length="6"
    ></v-pagination>
  </div>
  </section>
</template>

<script>
import ROUTES from "~/routes/api";
import Tweet from "~/components/Tweet";

export default {
  components: {Tweet},
  data(){
    return {
      page: 1,
    }
  },
  computed:{
  tweets(){
      return this.$store.getters.getTweets
    },
  },
  methods:{
    getPage(){
      console.log(this.page)
      console.log("get!!!")
    }
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