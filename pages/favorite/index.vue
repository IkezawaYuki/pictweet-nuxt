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
  components: { Tweet },
    data(){
    return {
      page: 1,
    }
  },
  computed:{
    favorites(){
      return this.$store.getters.getFavorites
    },
    loginUsesEmail(){
      return this.$store.getters.getEmail
    }
  },
  methods:{
    getPage(){
      console.log(this.page)
    }
  },
  async fetch({store}){
    const email = store.getters.getEmail
    console.log(email)
    const payload = {
      uri: ROUTES.POST.FAVORITE,
      email: email,
    }
    // if(store.getters.getFavorites && store.getters.getFavorites.length > 0){
    //   console.log("true")
    //   return
    // }
    await store.dispatch('fetchFavorites', payload)
  }
}
</script>

<style scoped>
.block{
  text-decoration:none;
}
</style>