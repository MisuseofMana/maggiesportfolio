<template>
  <v-div>
    <masonry
      :gutter="{ default: '16px', 700: '12px' }"
      :cols="{ default: 4, 1904: 3, 1264: 2, 960: 2, 600: 1 }"
      class="mb-10"
    >
      <v-hover v-for="item in items" :key="item.id">
        <template v-slot:default="{ hover }">
          <v-card class="mt-2 mb-6 mb-sm-4 mb-md-4" color="grey lighten-3" flat>
            <v-img :src="`./assets/${item}`"></v-img>
          </v-card>
        </template>
      </v-hover>
    </masonry>

    <div>
      <v-row class="d-flex align-center justify-center mb-md-5">
        <v-col cols="12" md="6">
          <v-img
            src="./assets/profile-image.jpg"
            class="round mr-md-10 mx-5"
            contain
            alt="Maggie Yager"
          />
        </v-col>

        <v-col cols="12" md="6">
          <v-row>
            <p class="text-body-1 mb-0 px-5 px-md-0">
              Maggie Yager is an illustrator and fine artist based in
              Indianapolis, IN whose work focuses on the magic found in
              childhood, our innate connection to nature, and all the unique
              individuals that make our world one of a kind. She has a heart for
              children’s books, a knack for creating playful patterns, and the
              ambition to create editorials that suit any subject. Maggie enjoys
              growing plants with her partner, petting her moody rabbit, and
              exploring local trails when she’s not at home creating art.
            </p>
          </v-row>
          <v-row>
            <v-col cols="12" class="text-center d-flex justify-center">
              <a
                href="https://www.instagram.com/maggie.yager/"
                target="_blank"
                class="mr-2"
              >
                <p class="text-body-1">@maggie.yager</p>
              </a>
              <p class="mr-2">|</p>
              <a href="mailto:contact@maggieyager.com">
                <p class="text-body-1">contact@maggieyager.com</p>
              </a>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </v-div>
</template>

<script>
export default {
  data() {
    return {
      items: [
          "pokey-friend.png",
          "pokey-friend2.png",
      ],
    };
  },
};
</script>

<style scoped>
.round {
  border-radius: 50%;
}

.v-application a {
  text-decoration: none;
}

.v-application a:hover {
  color: #fca103;
}
</style>
