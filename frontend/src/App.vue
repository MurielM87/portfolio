<template>
  <div class="container">
    <NavBar />
    <router-view :key="$route.fullPath" />

    <FooterPage />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import FooterPage from "./components/FooterPage.vue";

export default {
  name: "App",
  components: {
    NavBar,
    FooterPage,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  width: 1394px;
  margin: 0px auto;
  color: #fff;
  background-color: #000;
  @media screen and (max-width: 992px) {
    width: 95%;
  }
}
#app {
  position: relative;
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: auto;
}

</style>