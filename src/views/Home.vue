<template>
  <div id="app">
    <div class="container-fluid mt-4">
      <b-spinner v-if="loading" variant="primary" label="Spinning"></b-spinner>
      <h4 v-if="error">{{dataMessage}}</h4>
      <b-card-group deck>
        <Card
          v-for="place in places"
          v-bind:key="place.id"
          class="mb-4"
          style="max-width: 400px; min-width:300px;"
          :place="place"
          @openMap="openMap"
        ></Card>
      </b-card-group>
    </div>

    <div class="page">
      <h5 class="mb-2">Page {{page}}</h5>
      <span>
        <b-button
          :disabled="page==1"
          @click="prevPage()"
          class="mx-3 mb-3"
          style="width:80px;"
          variant="primary"
        >Previous</b-button>
        <b-button
          :disabled="page==3"
          @click="nextPage()"
          class="mx-3 mb-3"
          style="width:80px;"
          variant="primary"
        >Next</b-button>
      </span>
    </div>

    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
  </div>
</template>

<script>
import axios from 'axios';
import HelloWorld from '@/components/HelloWorld.vue';
import Card from '@/components/Card.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
    Card
  },

  data: () => ({
    places: [],
    allPlaces: [],
    loading: true,
    error: false,
    dataMessage: 'Loading data',
    page: 1,
    nextPageToken: undefined
  }),

  created() {
    this.initialize();
  },

  methods: {
    async initialize() {
      try {
        const response = await axios.get('/findPlace');
        this.places = response.data.results;
        this.nextPageToken = response.data.next_page_token;
        this.dataLoaded = true;
        this.allPlaces.push(this.places);
        console.log(this.allPlaces);
      } catch (err) {
        if (err.response.status === 403) {
          this.dataMessage = err.response.data.error_message;
          this.error = true;
        }
        console.error(err);
      } finally {
        this.loading = false;
      }
    },

    openMap(location) {
      const { lat, lng } = location;
      const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
      window.open(url, '_blank');
    },

    async nextPage() {
      this.error = false;
      if (this.page < this.allPlaces.length) {
        this.page++;
        return (this.places = this.allPlaces[this.page - 1]);
      }
      try {
        this.places = [];
        this.loading = true;
        this.page++;
        const response = await axios.get(`/nextPlace/${this.nextPageToken}`);
        this.places = response.data.results;
        this.nextPageToken = response.data.next_page_token;
        this.allPlaces.push(this.places);
        this.dataLoaded = true;
        console.log(this.allPlaces);
      } catch (err) {
        if (err.response.status === 403) {
          this.dataMessage = err.response.data.error_message;
          this.error = true;
        }
        console.error(err);
      } finally {
        this.loading = false;
      }
    },

    prevPage() {
      this.error = false;
      this.page--;
      this.places = this.allPlaces[this.page - 1];
    }
  }
};
</script>



<style>
.page {
  margin-top: auto;
}
</style>
