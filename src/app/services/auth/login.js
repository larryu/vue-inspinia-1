import Vue from 'vue'
import store from 'store'

// When the request succeeds
const success = (token) => {
  if (token.data.sessionid) {
    store.dispatch('login', token.data)
    Vue.router.push({
      name: 'home.main'
    })
  } else {
    return token.data
  }
}

// When the request fails
const failed = () => {
}

export default (user) => {
  let params = new window.URLSearchParams()
  Object.keys(user).forEach(key => {
    params.append(key, user[key])
  })
  return Vue.$http.post('/login', params)
    .then((response) => {
      return success(response)
    })
    .catch((error) => {
      failed(error)
    })
  // if (!user.name || !user.password) {
  //   failed()
  // } else {
  //   success('RandomGeneratedToken')
  // }
}
