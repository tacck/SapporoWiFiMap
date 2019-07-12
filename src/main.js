import Vue from 'vue'
import App from './App.vue'
import Ads from 'vue-google-adsense'
 
Vue.use(require('vue-script2'))
 
Vue.use(Ads.Adsense)
Vue.use(Ads.InArticleAdsense)
Vue.use(Ads.InFeedAdsense)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
