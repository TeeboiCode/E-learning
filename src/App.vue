<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/appfooter">AppFooter</router-link> |
    <router-link to="/appnavbar">AppNavBar</router-link> |
    <router-link to="/card1">Card1</router-link> |
    <router-link to="/app-signup">AppSignUp</router-link> |
    <!-- <router-link to="/about">About</router-link> -->
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-family: "Poppins", serif;
}

nav {
  padding: 30px;
  background: gray;
  text-align: center;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
