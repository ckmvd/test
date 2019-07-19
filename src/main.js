import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'

import axios from 'axios'
Vue.prototype.axios = axios;


Vue.filter('setWH',(url,arg)=>{
  return url.replace(/w\.h/,arg);

})

Vue.filter('classCard',(key)=>{
  var card = [
    { key : 'allowRefund' , value : 'bl' },
    { key : 'endorse' , value : 'bl' },
    { key : 'sell' , value : 'or' },
    { key : 'snack' , value : 'or'}
];
for(var i=0;i<card.length;i++){
    if(card[i].key === key){
        return card[i].value;
    }
}
return '';

})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
