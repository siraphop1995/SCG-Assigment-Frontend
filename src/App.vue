<template>
  <div id="app">
    <nav-bar />

    <router-view />

    <Footer class="footer" />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default {
  name: 'App',
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
  display: flex;
  min-height: 85vh;
  flex-direction: column;
}

.footer {
  margin-top: auto;
}
</style>
