<template>
  <v-app dark>
    <v-container>
      <v-row align="center" justify="center" class="py-5" no-gutters>
        <v-col cols="12" lg="3">
          <v-img
            src="./assets/logo.png"
            contain
            alt="Maggie Yager written in curvy handwriting below a blue face"
            max-width="790px"
          />
        </v-col>
      </v-row>
      <v-row class="mb-5">
        <v-col cols="12" lg="4" class=" offset-lg-4 d-flex justify-space-between">
            <a href="https://maggiejyager.bigcartel.com" class="text-body-1 black--text text-decoration-none">Illustration & Design</a>
            <a href="https://maggiejyager.bigcartel.com" class="text-body-1 black--text text-decoration-none">Claywork</a>
            <a href="https://maggiejyager.bigcartel.com" class="text-body-1 black--text text-decoration-none">Store</a>
          </v-col>
      </v-row>
      <v-main class="mb-4">
        <Nuxt/>
      </v-main>
      <Mags-Footer/>
    </v-container>
  </v-app>
</template>