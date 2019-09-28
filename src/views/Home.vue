<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div class="container-fluid mt-4">
      <b-spinner v-if="loading" variant="primary" label="Spinning"></b-spinner>

      <b-card-group deck>
        <b-card
          v-for="place in places"
          v-bind:key="place.id"
          class="mb-4"
          style="max-width: 400px; min-width:300px;"
        >
          <b-card-title>
            <a href="#" @click.prevent="openMap(place.location)">{{place.name}}</a>
          </b-card-title>

          <b-card-text>{{place.formatted_address}}</b-card-text>

          <template v-slot:footer>
            <small class="text-muted">Rating {{place.rating}}</small>
          </template>
        </b-card>
      </b-card-group>
    </div>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
  </div>
</template>

<script>
import axios from 'axios';
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data: () => ({
    places: [],
    loading: true,
    dataLoaded: false,
    dataMessage: 'Loading data'
  }),
  created() {
    this.initialize();
  },
  methods: {
    async initialize() {
      try {
        const response = await axios.get('/findPlace');
        this.places = response.data.results;
        this.dataLoaded = true;

        console.log(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        this.loading = false;
      }
    },

    openMap(location) {
      const { lat, lng } = location;
      const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
      window.open(url, '_blank');
    }
  }
};
</script>
