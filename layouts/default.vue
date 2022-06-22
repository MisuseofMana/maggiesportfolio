<template>
  <v-app dark>
    <v-container>
      <v-toolbar flat :extended="false">
        <v-row align="center">
          <v-col cols="4">
            <v-toolbar-title>Maggie Yager</v-toolbar-title>
          </v-col>
          <v-col cols="8">
            <v-tabs right>
              <v-tab>Something</v-tab>
              <v-tab>Something Else</v-tab>
            </v-tabs>
          </v-col>
        </v-row>
      </v-toolbar>
      <v-main>
        <Nuxt />
      </v-main>
      <v-footer color="white"> Footer </v-footer>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
