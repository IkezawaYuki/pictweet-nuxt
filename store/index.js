import { createRequestClient } from "./request-client";
import firebase from "~/plugins/firebase";

export const state = () => ({
  tweets:[],
  tweet: {},
  comments: [],
  comment: {},
})

export const actions = {
  async fetchTweets({commit}, payload){
    const client = createRequestClient(this.$axios, this.$cookies, this)
    const res = await client.get(payload.uri, payload.params)
    console.log(res.Tweets)
    commit('mutateTweets', res)
  },
}

export const mutations = {
  mutateTweets(state, payload){
    state.tweets = payload.Tweets ? state.tweets.concat(payload.Tweets) : []
  },
}

export const getters = {
  getTweets(state){
    console.log("get!")
    console.log(state.tweets)
    return state.tweets
  },

}