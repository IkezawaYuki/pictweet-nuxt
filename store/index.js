export const state = () => ({
  tweets:[],
  tweet: {},
  comments: [],
  comment: {},
})

export const actions = {
  async fetchTweets({commit}, payload){
    // todo
  },
}

export const mutations = {
  mutateTweets(state, payload){
    state.tweets = payload.tweets ? state.tweets.concat(payload.tweets) : []
  },
}

export const getters = {
  getTweets(state){
    return state.tweets
  },

}