import authService from 'services/auth'

export default{
  data () {
    return {
    }
  },
  methods: {
    logout () {
      authService.logout()
    }
  },
  mounted () {
    $('#side-menu').metisMenu()
  }
}
