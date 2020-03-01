import { createRequestClient } from "./request-client";
import firebase from "~/plugins/firebase";

export const state = () => ({
  tweets:[],
  tweet: {},
  comments: [],
  comment: {},
  token: '',
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
    const res = await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
    const token = await res.user.getIdToken()
    this.$cookies.set('jwt_token', token)
    commit('mutateToken', token)
    this.app.router.push('/')
  },
  async signUp({commit}, payload){
    await firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
    const res = await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
    const token = await res.user.getIdToken()
    commit('mutateToken', token)
    this.app.router.push("/")
  },
  async logout({commit}, payload){
    await firebase.auth().signOut()
    commit('mutateToken', null)
    this.$cookies.remove('jwt_token')
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
  },
  mutateToken(state, payload){
    state.token = payload
  },

}

export const getters = {
  getTweets(state){
    return state.tweets
  },
  getTweetDetail(state){
    return state.tweet
  },
  isLoggedIn(state){
    console.log(state.token)
    return !!state.token
  }
}