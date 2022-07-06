<template>
  <v-div>
    <masonry
      :gutter="{ default: '16px', 700: '12px' }"
      :cols="{ default: 4, 1904: 3, 1264: 2, 960: 2, 600: 1 }"
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
          overlay: "Apple Surface Design",
          img: "./assets/surface-design-apples.png",
        },
        {
          overlay: "Portrait Work 1",
          img: "./assets/portrait-work6.png",
        },
        { overlay: "Portrait Work 2", img: "./assets/portrait-work5.png" },
        { overlay: "Portrait Work 3", img: "./assets/portrait-work4.png" },
        { overlay: "Portrait Work 4", img: "./assets/portrait-work3.png" },
        { overlay: "Portrait Work 5", img: "./assets/portrait-work2.png" },
        {
          overlay: "Children's Book Illustration 6",
          img: "./assets/childrens-book-page.png",
        },
        { overlay: "Portrait Work 6", img: "./assets/portrait-work.png" },
        { overlay: "Moth Pattern Design", img: "./assets/moth-pattern.jpeg" },
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
          overlay: "Children's Book Illustration 2",
          img: "./assets/childrens-book-page5.png",
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
