import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: colors.teal.accent4,
    secondary: colors.blue.base,
    primaryLight: colors.shades.white,
    primaryDark: colors.shades.black,
    secondaryLight: colors.grey.lighten3,
    secondaryDark: colors.grey.darken2,
    warning: colors.red.base
  }
})
