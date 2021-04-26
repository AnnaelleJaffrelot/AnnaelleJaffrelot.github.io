import Vue from 'vue'
import App from './App.vue'
import * as Keycloak from 'keycloak-js';
import store from './store'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vuex from 'vuex'
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapIconsPlugin);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuex)
Vue.config.productionTip = false


let initOptions = {
  url: 'http://localhost:8080/auth', realm: 'twilos', clientId: 'twilos', onLoad:'login-required'
}

let keycloak = Keycloak(initOptions);
Vue.prototype.$keycloak = keycloak;

console.log(keycloak)
keycloak.init({ onLoad: initOptions.onLoad }).success((auth) =>{

    
    if(!auth) {
      window.location.reload();
    } else {
      //console.log(keycloak.token)
      //Vue.$log.info("Authenticated");

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


      let payload = {
    idToken: keycloak.idToken,
    accessToken: keycloak.token,
    pseudo:keycloak.tokenParsed.preferred_username,
    nom:keycloak.tokenParsed.family_name,
    prenom:keycloak.tokenParsed.given_name,
  }
  if (keycloak.token && keycloak.idToken && keycloak.token != '' && keycloak.idToken != '') {
    store.commit("login", payload);
  }
  }
  

    localStorage.setItem("vue-token", keycloak.token);
    localStorage.setItem("vue-refresh-token", keycloak.refreshToken);

    setInterval(() =>{
      keycloak.updateToken(70).success((refreshed)=>{
        if (refreshed) {
          Vue.$log.debug('Token refreshed'+ refreshed);
        } else {
          Vue.$log.warn('Token not refreshed, valid for '
          + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
        }
      }).error(()=>{
          Vue.$log.error('Failed to refresh token');
      });


    }, 60000)

}).error(() =>{
  Vue.$log.error("Authenticated Failed");
});
