
import { SDIEBAR_COLLAPSE } from './../../types'

export default {
  [SDIEBAR_COLLAPSE] (state) {
    state.collapse = !state.collapse
    if (state.collapse) {
      $('body').addClass('mini-navbar')
    } else {
      $('body').removeClass('mini-navbar')
    }

    if (!state.collapse || $('body').hasClass('body-small')) {
      // Hide menu in order to smoothly turn on when maximize menu
      $('#side-menu').hide()
      // For smoothly turn on menu
      setTimeout(
        function () {
          $('#side-menu').fadeIn(400)
        }, 200)
    } else if ($('body').hasClass('fixed-sidebar')) {
      $('#side-menu').hide()
      setTimeout(
        function () {
          $('#side-menu').fadeIn(400)
        }, 100)
    } else {
      // Remove all inline style from jquery fadeIn function to reset menu state
      $('#side-menu').removeAttr('style')
    }
  }
}

