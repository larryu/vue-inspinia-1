import {
  CHECK_AUTHENTICATION,
  LOGOUT,
  LOGIN
} from './../../types'
import * as Cookie from 'utils/cookie'

export default {
  [CHECK_AUTHENTICATION] (state) {
    state.authenticated = !!Cookie.getCookie('jeesite.session.id')
  },

  [LOGIN] (state, token) {
    Cookie.setCookie('jeesite.session.id', token.sessionid)
    state.authenticated = true
  },

  [LOGOUT] (state) {
    Cookie.deleteCookie('jeesite.session.id')
    state.authenticated = false
  }
}
