import { mapMutations } from 'vuex'
import * as types from 'store/types'

import authService from 'services/auth'

export default{
  data () {
    return {
    }
  },
  methods: {
    toggleNavigation () {
      this.sidebarCollapse()
    },
    logout () {
      authService.logout()
    },
    ...mapMutations({
      sidebarCollapse: types.SDIEBAR_COLLAPSE
    })
  }
}
