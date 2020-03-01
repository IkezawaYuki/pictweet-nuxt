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
    commit('mutateTweets', res)
  },
  async showTweet({commit}, payload){
    const client = createRequestClient(this.$axios, this.$cookies, this)
    const res = await client.get(payload.uri, payload.params)
    commit('mutateTweetDetail', res)
  },
  async postTweet({commit}, payload){
    const client = createRequestClient(this.$axios, this.$cookies, this)
    const res = await client.post(payload.uri, payload.params)
    console.log(res)
    commit('mutatePostTweet', res)
  },
  async addComment({commit}, payload){
    const client = createRequestClient(this.$axios, this.$cookies, this)
    const res = await client.post(payload.uri, payload.params)
    return res
  },
  async login({commit}, payload){
    console.log(payload)
  }
}

export const mutations = {
  mutateTweets(state, payload){
    state.tweets = payload ? state.tweets.concat(payload) : []
  },
  mutateTweetDetail(state, payload){
    state.tweet = payload
  },
  mutatePostTweet(state, payload){
    state.tweets.push(payload)
  }
}

export const getters = {
  getTweets(state){
    return state.tweets
  },
  getTweetDetail(state){
    return state.tweet
  },

}