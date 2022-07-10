<template>
  <v-app dark>
    <v-container>
      <v-row align="center" justify="between" class="py-5" no-gutters>
        <v-col cols="12" lg="5" class="d-flex justify-lg-start justify-center">
          <v-img
            src="./assets/maggie-yager.png"
            contain
            alt="Maggie Yager
            written in curvy handwriting"
            max-width="520px"
            min-width="100px"
          >
          </v-img>
        </v-col>
      </v-row>
      <v-main class="mb-4">
        <Nuxt />
      </v-main>
    </v-container>
  </v-app>
</template>
