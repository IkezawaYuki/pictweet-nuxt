import { createRequestClient } from "./request-client";
import firebase from "~/plugins/firebase";

export const state = () => ({
  tweets:[],
  tweet: {},
  comments: [],
  comment: {},
  token: '',
  email: '',
  favorites: [],
})

export const actions = {
  async fetchTweets({commit}, payload){
    const client = createRequestClient(this.$axios, this.$cookies, this)
    const res = await client.get(payload.uri, payload.params)
    commit('mutateTweets', res)
  },
  async fetchFavorites({commit}, payload){
    console.log("fetch favorites")
  },
  async showTweet({commit}, payload){
    const client = createRequestClient(this.$axios, this.$cookies, this)
    const res = await client.get(payload.uri, payload.params)
    commit('mutateTweetDetail', res)
  },
  async postTweet({commit}, payload){
    const client = createRequestClient(this.$axios, this.$cookies, this)
    const res = await client.post(payload.uri, payload.params)
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
    commit('mutateEmail', payload.email)
    this.app.router.push('/')
  },
  async signUp({commit}, payload){
    await firebase.auth().createUserWithEmailAndPassword(payload.params.email, payload.params.password)
    const res = await firebase.auth().signInWithEmailAndPassword(payload.params.email, payload.params.password)
    const token = await res.user.getIdToken()
    const client = createRequestClient(this.$axios, this.$cookies, this)
    client.post(payload.uri, payload.params)
    commit('mutateToken', token)
    commit('mutateEmail', payload.email)
    this.app.router.push("/")
  },
  async logout({commit}, payload){
    await firebase.auth().signOut()
    commit('mutateToken', null)
    commit('mutateEmail', null)
    this.$cookies.remove('jwt_token')
    this.app.router.push("/")
  },
  async setToken({commit}, payload){
    this.$cookies.set('jwt_token', payload)
    commit('mutateToken', payload)
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
  mutateEmail(state, payload){
    state.email = payload
  },
  mutateFavorites(state, payload){
    state.favorites = payload ? state.tweets.concat(payload) : []
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
    return !!state.token
  },
  getFavorites(state){
    return state.favorites
  }
}
