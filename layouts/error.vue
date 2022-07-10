<template>
  <v-app dark>
    <div v-if="error.statusCode === 404">
      <v-row>
        <v-spacer />
        <v-col cols="8" class="text-center">
          <h1>
            {{ pageNotFound }}
          </h1>
          <NuxtLink to="/"> Back To Home Page </NuxtLink>
        </v-col>
        <v-spacer />
      </v-row>
      <v-row class="d-flex align-center justify-center">
        <v-img
          src="./assets/flowergirl.gif"
          contain
          alt="Maggie Yager
            written in curvy handwriting"
          max-width="500px"
        ></v-img>
      </v-row>
    </div>
    <h1 v-else>
      {{ otherError }}
    </h1>
  </v-app>
</template>

<script>
export default {
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: "404 Page Not Found",
      otherError: "An error occurred",
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
