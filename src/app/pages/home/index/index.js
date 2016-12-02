export default{
  data () {
    return {
    }
  },
  components: {
    Navigation: require('components/navigation/index.vue'),
    TopNavbar: require('components/topnavbar/index.vue'),
    InspiniaFooter: require('components/footer/index.vue')
  },
  created () {
    $('body').removeClass('gray-bg')
  }
}
