<template>
  <masonry
    :gutter="{ default: '16px', 700: '12px' }"
    :cols="{ default: 4, 1000: 3, 700: 1, 500: 1 }"
  >
    <v-card
      v-for="item in items"
      :key="item.id"
      class="mt-2 mb-md-4 mb-sm-3"
      color="grey lighten-3"
      flat
    >
      <v-img :src="item.img"></v-img>
    </v-card>
  </masonry>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Item 1", img: "https://picsum.photos/500/500" },
        { title: "Item 2", img: "https://picsum.photos/400/500" },
        { title: "Item 2", img: "https://picsum.photos/500/400" },
        { title: "Item 3", img: "https://picsum.photos/300/500" },
        { title: "Item 4", img: "https://picsum.photos/300/400" },
        { title: "Item 5", img: "https://picsum.photos/500/600" },
        { title: "Item 6", img: "https://picsum.photos/400/600" },
        { title: "Item 7", img: "https://picsum.photos/900/700" },
        { title: "Item 8", img: "https://picsum.photos/500/450" },
        { title: "Item 9", img: "https://picsum.photos/700/800" },
        { title: "Item 10", img: "https://picsum.photos/1000/1000" },
      ],
    };
  },
  methods: {
    randomNum() {
      return Math.floor(Math.random() * 500) + 100;
    },
  },
};
</script>
