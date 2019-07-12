import Vue from 'vue'
import App from './App.vue'
import Ads from 'vue-google-adsense'
import BootstrapVue from 'bootstrap-vue'
 
Vue.use(require('vue-script2'))
Vue.use(Ads.Adsense)
Vue.use(Ads.InArticleAdsense)
Vue.use(Ads.InFeedAdsense)

Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
