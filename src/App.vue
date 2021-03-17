<template>
  <div id="nav">
    <router-link to="/">Color Picker</router-link>
  </div>
  <router-view/>
</template>

<script>
export default {}
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #002073;
}

#nav {
  padding: 30px;
  background: #c8c8c8;

  a {
    font-weight: bold;
    color: #002073;

    &.router-link-exact-active {
      color: #6f003c;
    }
  }
}
</style>
