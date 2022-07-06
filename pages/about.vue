<template>
  <div>
    <v-row>
      <v-spacer />
      <v-col cols="12" md="4" class="d-flex align-center">
        <v-img
          src="./assets/profile-image.jpg"
          class="round mr-10"
          contain
          alt="Maggie Yager"
        />
      </v-col>
      <v-col cols="12" md="6">
        <p class="text-h6">
          Maggie Yager is an illustrator and fine artist based in Indianapolis,
          IN whose work focuses on the magic found in childhood, our innate
          connection to nature, and all the unique individuals that make our
          world one of a kind. She has a heart for children’s books, a knack for
          creating playful patterns, and the ambition to create editorials that
          suit any subject. Maggie enjoys growing plants with her partner,
          petting her moody rabbit, and exploring local trails when she’s not at
          home creating art.
        </p>
      </v-col>
      <v-spacer />
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.round {
  border-radius: 50%;
}
</style>
