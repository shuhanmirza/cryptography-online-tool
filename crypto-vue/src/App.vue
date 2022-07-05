<template>
  <v-app theme="dark">
    <v-navigation-drawer
        location="right"
        app>
      <!-- -->
    </v-navigation-drawer>

    <v-app-bar app>
      <v-spacer></v-spacer>
      <h3>Cryptography Online Tool</h3>
      <v-spacer></v-spacer>
    </v-app-bar>


    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <hash-function
            algorithm="SHA256"
        />
      </v-container>
    </v-main>

    <v-footer app>
      <v-container
          fluid
          class="copyright-footer"
      >
        Ⓒ <a href="https://shuhanmirza.com">Shuhan Mirza</a>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>

import HashFunction from "@/components/HashFunction";

export default {
  name: 'App',
  components: {HashFunction},

  data: () => ({
    //
  }),
}
</script>

<style scoped>
.copyright-footer {
  margin-left: auto;
}
</style>
