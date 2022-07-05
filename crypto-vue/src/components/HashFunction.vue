<template>
  <v-container fluid>
    <div class="component-title">
      <h3>{{ algorithm }}</h3>
    </div>
    <v-textarea
        id="hash-input"
        label="Input Text Here"
        outlined
        counter=""
        v-model="inputValue"
    />
    <br>
    <v-textarea
        id="hash-output"
        label="Output"
        outlined
        counter=""
        rows="2"
        v-model="outputValue"
        readonly
    />
  </v-container>
</template>

<script>
export default {
  name: "HashFunction",
  props: {
    algorithm: String
  },
  inject: ["HASH_FUNCTIONS"],
  data() {
    return {
      inputValue: "",
    }
  },
  computed: {
    outputValue: {
      get() {
        return this.HASH_FUNCTIONS[this.algorithm](this.inputValue)
      }
    }, set(val) {
      return val
    }
  },
  methods: {
    test() {
      /*
      let aesKeyHex = CryptoJS.enc.Hex.parse(Buffer.from(this.aesKey, 'base64').toString('hex'));
      let ivHex = CryptoJS.enc.Hex.parse(Buffer.from(this.aesIv, 'base64').toString('hex'));
      let aesEncryptedPin = CryptoJS.AES.encrypt(plaintext,aesKeyHex,{
      iv: ivHex,
    });
    return aesEncryptedPin.ciphertext.toString(CryptoJS.enc.Base64)

 */
    }
  },
  created() {
    this.test()
  }
}
</script>

<style scoped>
.component-title {
  margin-bottom: 20px;
}

</style>