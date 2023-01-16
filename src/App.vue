<template>
  <v-app>
   <v-container>
      <!-- 검색바 -->
      <search-bar/>
      <movie-list />
      <!-- 영화목록 -->
   </v-container>
  </v-app>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
import MovieList from '@/components/MovieList.vue';

export default {
  name: 'App',

  components: {
    SearchBar,
    MovieList
  },

  data: () => ({
    //
  }),
  created(){
   
  }
};
</script>
