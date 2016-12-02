import authService from 'services/auth'

export default{
  data () {
    return {
      account: {
        username: 'thinkgem',
        password: '123',
        mobileLogin: true,
      }
    }
  },
  methods: {
    login () {
      authService.login(this.account)
    }
  },
  created () {
    $('body').addClass('gray-bg')
  }
}
