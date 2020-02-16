<template>
  <section>
    <div class="container">
      <div class="block">
        <div class="block tweet-block">
          <Tweet/>
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