<template>
  <div id="app">
    <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Twillos</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
 
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        


        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>Votre compte</em>
          </template>
          <b-dropdown-item ><router-link to="/profil">Profil</router-link> </b-dropdown-item>
          <b-dropdown-item @click=logout>Se déconnecter</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

    <router-view></router-view>
     <b-navbar cols="12" fixed="bottom"  type="dark" variant="info">
    

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="flex-nav">
        <b-nav-item class="text-white"><router-link class="text-white" to="/"><HomeIcon size="1.5x" /></router-link></b-nav-item>
        <b-nav-item ><router-link class="text-white" to="/messages"><MailIcon size="1.5x" /></router-link></b-nav-item>
        <b-nav-item ><router-link class="text-white" to="/listprofils"><SearchIcon size="1.5x" /></router-link></b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
    
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </div>

</template>


<script src="https://unpkg.com/vue@3.0.6"></script>
<script src="https://unpkg.com/bootstrap-icons-vue@0.6.0"></script>
<script>
import { HomeIcon } from "@vue-hero-icons/outline"
import { MailIcon } from "@vue-hero-icons/outline"
import { SearchIcon } from "@vue-hero-icons/outline"
 export default {
    components: {
    HomeIcon,
    MailIcon,
    SearchIcon
  },
  methods: {
    logout() {
      this.$keycloak.logout()
    }
  }

}
</script>

<style>

.flex-nav{
  display: flex;
  justify-content: space-around;
  width: 100%;
}

body {
  background-color: #505a64;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.navbar-nav{
  flex-direction: row;
}
</style>
