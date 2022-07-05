<template>
  <v-app theme="dark">
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
        <a href="https://github.com/shuhanmirza/cryptography-online-tool">Github Repo</a>
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
    items: [
      {title: 'Home', icon: 'mdi-home-city'},
      {title: 'My Account', icon: 'mdi-account'},
      {title: 'Users', icon: 'mdi-account-group-outline'},
    ]
  }),
}
</script>

<style scoped>
.copyright-footer {
  margin-left: auto;
}
</style>
