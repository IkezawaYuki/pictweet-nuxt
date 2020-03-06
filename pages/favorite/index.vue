<template>
  <section>
    <div class="container">
      <div class="block">
        <div class="block tweet-block"  v-for="(tweet, index) in favorites" :key="index">
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
  computed: { Tweet },
    data(){
    return {
      page: 1,
    }
  },
  computed:{
    favorites(){
      return this.$store.getters.getFavorites
    }
  },
  methods:{
    getPage(){
      console.log(this.page)
    }
  },
  async fetch({store}){
    const payload = {
      uri: ROUTES.GET.FAVORITE
    }
    if(store.getters.getFavorites && store.getters.getFavorites.length > 0){
      return
    }
    await store.dispatch('fetchFavorites', payload)
  }
}
</script>

<style scoped>
.block{
  text-decoration:none;
}
</style>