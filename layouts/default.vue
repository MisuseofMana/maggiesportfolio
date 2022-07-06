<template>
  <v-app dark>
    <v-container>
      <v-row align="center" justify="between" class="py-5 mb-5" no-gutters>
        <v-col
          cols="12"
          lg="5"
          class="d-flex justify-lg-start justify-center mb-10 mb-lg-0"
        >
          <NuxtLink to="/">
            <v-img
              src="./assets/maggie-yager.png"
              contain
              alt="Maggie Yager written in curvy handwriting"
              max-width="520px"
              min-width="100px"
            />
          </NuxtLink>
        </v-col>
        <v-spacer />
        <v-col cols="12" lg="5" class="d-flex justify-center justify-lg-end">
          <NuxtLink to="/about">
            <v-img
              class="mr-10"
              src="./assets/about-navigation.png"
              contain
              alt="About"
              max-width="90px"
            />
          </NuxtLink>

          <NuxtLink to="/contact">
            <v-img
              src="./assets/contact-navigation.png"
              contain
              alt="Contact"
              max-width="120px"
            />
          </NuxtLink>
        </v-col>
      </v-row>
      <v-main class="mb-4">
        <Nuxt />
      </v-main>
    </v-container>
  </v-app>
</template>
