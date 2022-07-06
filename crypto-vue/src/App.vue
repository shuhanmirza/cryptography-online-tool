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
        <v-card >
          <v-tabs
              show-arrows
              slider-color="orange-lighten-3"
              color="orange"
              v-model="tabValue"
          >
            <v-tab
                v-for="item in tabItems"
                :key="item.value"
                :value="item.value"
            >
              {{ item.title }}
            </v-tab>
          </v-tabs>
        </v-card>
      </v-container>

      <v-container fluid>
        <v-window v-model="tabValue">

          <v-window-item value="hash">
            <hash-function/>
          </v-window-item>

          <v-window-item value="hmac">
            <HmacFunction/>
          </v-window-item>

          <v-window-item value="sym-encrypt">
            <SymmetricEncryption/>
          </v-window-item>

        </v-window>
      </v-container>

    </v-main>

    <v-footer app>
      <v-container
          fluid
          class="repo-footer"
      >
        <a href="https://github.com/shuhanmirza/cryptography-online-tool">Github Repo</a>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>

import HashFunction from "@/components/HashFunction";
import SymmetricEncryption from "@/components/SymmetricEncryption";
import HmacFunction from "@/components/HmacFunction";

export default {
  name: 'App',
  components: {HmacFunction, SymmetricEncryption, HashFunction},

  data: () => ({
    tabValue: 'hmac',
    tabItems: [
      {title: 'Hash Function', value: 'hash'},
      {title: 'HMAC', value: 'hmac'},
      //{title: 'Symmetric Encryption', value: 'sym-encrypt'},
    ]
  }),
}
</script>

<style scoped>
.repo-footer {
  margin-left: auto;
}
</style>
