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
            <v-img :src="item.img"></v-img>
            <v-fade-transition>
              <v-overlay
                v-if="hover"
                class="px-5 text-center"
                absolute
                color="#fca103"
              >
                <h2>{{ item.overlay }}</h2>
              </v-overlay>
            </v-fade-transition>
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
        {
          overlay: "Wellness Health Editorial Illustration",
          img: "./assets/wellness-health-editorial.png",
        },
        {
          overlay: "Children's Book Illustration 4",
          img: "./assets/childrens-book-page3.png",
        },
        {
          overlay: "Cartoon Dog Surface Design",
          img: "./assets/surface-design-dogs.png",
        },
        {
          overlay: "Garden Editorial Illustration",
          img: "./assets/garden-editorial2.png",
        },
        {
          overlay: "Wellness Health Editorial Illustration 2",
          img: "./assets/editorial-mental-health.png",
        },
        {
          overlay: "Apple Surface Design",
          img: "./assets/surface-design-apples.png",
        },
        {
          overlay: "Garden Editorial Illustration",
          img: "./assets/garden-illustration.png",
        },
        {
          overlay: "Portrait Work 6",
          img: "./assets/portrait-work6.png",
        },
        { overlay: "Portrait Work 2", img: "./assets/portrait-work5.png" },
        { overlay: "Animated Illustration", img: "./assets/flowergirl.gif" },
        { overlay: "Portrait Work 3", img: "./assets/portrait-work4.png" },
        {
          overlay: "Lifestyle Editorial",
          img: "./assets/lifestyle-editorial.png",
        },
        { overlay: "Portrait Work 4", img: "./assets/portrait-work3.png" },
        { overlay: "Portrait Work 5", img: "./assets/portrait-work2.png" },
        {
          overlay: "Children's Book Illustration 6",
          img: "./assets/childrens-book-page.png",
        },
        { overlay: "Portrait Work 1", img: "./assets/portrait-work.png" },
        { overlay: "Moth Pattern Design", img: "./assets/moth-pattern.jpeg" },
        { overlay: "Portrait Work 7", img: "./assets/portrait-work7.png" },
        {
          overlay: "Meditation Editorial Illustration",
          img: "./assets/meditation-editorial.jpeg",
        },
        {
          overlay: "Garden Editorial Illustration 2",
          img: "./assets/garden-editorial.jpeg",
        },
        {
          overlay: "Children's Book Illustration 5",
          img: "./assets/childrens-book-page2.png",
        },
        {
          overlay: "Portrait Work 8",
          img: "./assets/portrait-work8.png",
        },
        {
          overlay: "Surface Design Shapes",
          img: "./assets/surface-design-shapes.png",
        },
        {
          overlay: "Fashion Illustration",
          img: "./assets/fashion-street-style2.jpeg",
        },
        {
          overlay: "Food Editorial Illustration",
          img: "./assets/editorial-food-lifestyle.png",
        },
        {
          overlay: "Children's Book Illustration",
          img: "./assets/childrens-book-page6.png",
        },
        {
          overlay: "Fashion Illustration 2",
          img: "./assets/fashion-street-style.jpeg",
        },
        {
          overlay: "Quote Editorial Illustration",
          img: "./assets/editorial-inspirational.png",
        },
        {
          overlay: "Children's Book Illustration 3",
          img: "./assets/childrens-book-page4.png",
        },
        {
          overlay: "Texas Inspired Surface Design",
          img: "./assets/surface-design-texas.png",
        },
        { overlay: "Card Design", img: "./assets/card-design2.png" },
        { overlay: "Card Design 2", img: "./assets/card-design.png" },
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
