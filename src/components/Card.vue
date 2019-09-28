<template>
  <b-card>
    <b-card-title>
      <a href="#" @click.prevent="openMap(place.location)">{{place.name}}</a>
    </b-card-title>

    <b-card-text>{{place.formatted_address}}</b-card-text>

    <template v-slot:footer>
      <small class="text-muted">Rating {{place.rating}}</small>
    </template>
  </b-card>
</template>

<script>
export default {
  props: ['place'],
  methods: {
    openMap() {
      this.$emit('openMap', this.place.location);
    }
  }
};
</script>