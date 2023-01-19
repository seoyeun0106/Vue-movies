<template>
  <v-app>
    <v-container>
      <search-bar />
      <error-message />
      <movie-list />
      <!-- 영화목록 -->
    </v-container>
  </v-app>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import MovieList from "@/components/MovieList.vue";
import ErrorMessage from "./components/ErrorMessage.vue";
export default {
  name: "App",

  components: {
    SearchBar,
    MovieList,
    ErrorMessage,
  },

  data: () => ({
    //
  }),
  created() {},
};
</script>
