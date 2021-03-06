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
    const client = createRequestClient(this.$axios, this.$cookies, this)
    const res = await client.post(payload.uri, payload.email)
    commit('mutateFavorites', res)
  },
  async showTweet({commit}, payload){
    const client = createRequestClient(this.$axios, this.$cookies, this)
    const res = await client.get(payload.uri, payload.params)
    commit('mutateTweetDetail', res)
  },
  async postTweet({commit}, payload){
    const client = createRequestClient(this.$axios, this.$cookies, this)
    const res = await client.post(payload.uri, payload.params)
    commit('mutatePostTweet', res.tweet)
  },
  async addComment({commit}, payload){
    const client = createRequestClient(this.$axios, this.$cookies, this)
    const res = await client.post(payload.uri, payload.params)
    commit('mutateAddComment', res.comment)
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
    state.tweets = payload ? state.tweets.concat(payload.tweets) : []
  },
  mutateTweetDetail(state, payload){
    state.tweet = payload.tweet
    state.comments = []
    state.comments = payload.comments ? state.comments.concat(payload.comments) : []
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
    state.favorites = payload ? state.favorites.concat(payload) : []
  },
  mutateAddComment(state, payload){
    state.comments.push(payload)
  },
}

export const getters = {
  getTweets(state){
    return state.tweets
  },
  getTweetDetail(state){
    return state.tweet
  },
  getComments(state){
    return state.comments
  },
  isLoggedIn(state){
    return !!state.token
  },
  getFavorites(state){
    return state.favorites
  },
  getEmail(state){
    return state.email
  }
}
