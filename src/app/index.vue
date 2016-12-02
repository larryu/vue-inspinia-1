<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
  /* ============
   * Entry Point
   * ============
   *
   * The entry point of the application
   */

  import store from './store'
  import { router } from './../bootstrap'
  import { correctHeight, detectBody } from './utils/app.helper'

  export default {
    /**
     * The Vuex store
     */
    store,

    /**
     * The router
     */
    router,

    /**
     * Fires when the app has been mounted
     */
    mounted () {
      // If the user is authenticated,
      // fetch the data from the API
      /* if (this.$store.state.auth.authenticated) {
        accountService.find();
      } */

       // Run correctHeight function on load and resize window event
      $(window).bind('load resize', function () {
        correctHeight()
        detectBody()
      })

      // Correct height of wrapper after metisMenu animation.
      $('.metismenu a').click(() => {
        setTimeout(() => {
          correctHeight()
        }, 300)
      })
    }
  }
</script>
