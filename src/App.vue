<template>
  <div id="app">
    <NavBar />

    <router-view />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div> -->
    <Footer/>
    
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    NavBar,
    Footer
  }
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}

</style>
