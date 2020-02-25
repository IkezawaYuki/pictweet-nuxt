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
              <v-btn text
              @click="overlay = !overlay"
              >コメントを投稿</v-btn>
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
           
           <div class="text-center">
            <v-overlay :value="overlay">
              <v-card
                class="mx-auto"
                width="600"
              >
              <v-btn
                icon
                @click="overlay = false"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
                <div class="comment_area">
                  <v-textarea
                  label="コメント"
                  v-model="comment_text"
                  >
                  </v-textarea>
                  <v-col class="text-center" cols="12" sm="4">
                    <div class="my-2">
                      <v-btn large color="primary" @click="sendComment">送信</v-btn>
                    </div>
                  </v-col>
                </div>

              </v-card>
            </v-overlay>
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
  data: () => ({
      overlay: false,
      comment_text:'',
    }),
  computed:{
    tweet(){
      return this.$store.getters.getTweetDetail
    },
  },
  methods:{
    async sendComment(){
      const payload = {
        uri: ROUTES.POST.COMMENT.CREATE.replace(':id', this.$route.params.id),
        params: {
          tweet_id: this.$route.params.id,
          comment: this.comment_text,
          user_id: 1
        }
      }
      console.log(payload)
      var res = await this.$store.dispatch('addComment', payload)
      this.reload()
    },
    reload() {
        this.$router.go({path: this.$router.currentRoute.path, force: true});
    },
  },
  async fetch({store, route}){
    await store.dispatch('showTweet', {
      uri: ROUTES.GET.TWEET.SHOW.replace(':id', route.params.id),
    })
  }
}

</script>

<style scoped>
.comment_area{
  margin: 20px;
}
</style>
