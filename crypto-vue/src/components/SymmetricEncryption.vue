<template>
  <v-container fluid>
    <div class="component-title">
      <h3> Symmetric Encryption </h3>
    </div>
    <v-select
        v-model="select"
        :items="items"
        :hint="'Select Algorithm'"
        label="Select"
        persistent-hint
        return-object
        single-line
    ></v-select>

    <br>

    <v-textarea
        id="hash-input"
        label="Input Text Here"
        rows="3"
        outlined
        counter=""
        v-model="inputValue"
        hint="Text Format"
        :persistent-counter="true"
        :persistent-hint="true"
    />

    <br>

    <v-textarea
        id="hash-passphrase-input"
        label="Input Passphrase Here"
        rows="1"
        outlined
        counter=""
        v-model="passphraseValue"
        hint="Text Format"
        :persistent-counter="true"
        :persistent-hint="true"
    />

    <br>

    <v-textarea
        id="hash-output"
        label="Output"
        outlined
        counter=""
        rows="2"
        v-model="outputValue"
        hint="Base64 Format"
        readonly
        :persistent-hint="true"
        :persistent-counter="true"
    />
  </v-container>
</template>

<script>
import CryptoJS from "@/plugins/crypto-js-4.1.1";

export default {
  name: "SymmetricEncryption",
  inject: ["SYM_ENC_FUNCTIONS"],
  data() {
    return {
      inputValue: "",
      passphraseValue: "",
      items: Object.keys(this.SYM_ENC_FUNCTIONS),
      select: Object.keys(this.SYM_ENC_FUNCTIONS)[0]
    }
  },
  computed: {
    outputValue: {
      get() {
        let encrypted = this.SYM_ENC_FUNCTIONS[this.select].func.encrypt(this.inputValue, this.passphraseValue)
        return encrypted.ciphertext.toString(CryptoJS.enc.Base64)
      }
    }, set(val) {
      return val
    }
  },
  methods: {
    test() {
      console.log();
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