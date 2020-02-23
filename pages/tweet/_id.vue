<template>
  <section>
      <div>
        <h3>Title: {{tweet.title}}</h3>
      </div>
      <div>
        <v-img
        :src=tweet.image
        height="400px"
        max-width="900px"
        >
        </v-img>
      </div>
      <div>
        posted by {{tweet.author}}
      </div>
      <div>
        {{ tweet.text }} <v-spacer></v-spacer>{{ tweet.post_date }}
      </div>
      
      <div>
        
      </div>
      <br>

    <v-layout>
      <v-flex wrap>
        <v-card
          min-width=600
        >
          <v-toolbar
            color="light-blue"
            dark
          >
          <v-toolbar-title>コメント一覧</v-toolbar-title>
            <v-card-actions>
              <v-btn text>コメントを投稿</v-btn>
            </v-card-actions>
          </v-toolbar>
          <v-list two-line subheader>

            <div v-if="tweet.comments">
               <v-list-item
                v-for="(comment, index) in tweet.comments"
                :key="index"
              >
              <v-list-item-avatar>
                <v-img
                :src= comment.avatar
                alt="avatar"
              ></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-text="comment.text"></v-list-item-title>
                <v-list-item-subtitle v-text="comment.post_date"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            </div>
            <div v-else>
              <v-list-item-content>
                <v-list-item-title>コメントはまだありません</v-list-item-title>
              </v-list-item-content>
            </div>
           


          </v-list>
        </v-card>

      </v-flex>
    </v-layout>
  </section>
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
