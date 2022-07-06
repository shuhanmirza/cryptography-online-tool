<template>
  <v-container fluid>
    <div class="component-title">
      <h3> keyed-Hash Message Authentication Code </h3>
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
        :persistent-counter="true"
    />

    <br>

    <v-textarea
        id="hash-passphrase-input"
        label="Input Passphrase Here"
        rows="1"
        outlined
        counter=""
        v-model="passphraseValue"
        :persistent-counter="true"
    />

    <br>

    <v-textarea
        id="hash-output"
        label="Output"
        outlined
        counter=""
        rows="2"
        v-model="outputValue"
        hint="Hexadecimal Format"
        readonly
        :persistent-hint="true"
        :persistent-counter="true"
    />
  </v-container>
</template>

<script>
export default {
  name: "HmacFunction",
  inject: ["HMAC_FUNCTIONS"],
  data() {
    return {
      inputValue: "",
      passphraseValue: "",
      items: Object.keys(this.HMAC_FUNCTIONS),
      select: Object.keys(this.HMAC_FUNCTIONS)[0]
    }
  },
  computed: {
    outputValue: {
      get() {
        return this.HMAC_FUNCTIONS[this.select](this.inputValue, this.passphraseValue)
      }
    }, set(val) {
      return val
    }
  },
  methods: {
    test() {
      console.log();
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