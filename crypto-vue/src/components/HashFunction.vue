<template>
  <v-container fluid>
    <div class="component-title">
      <h3> Hash Function </h3>
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
        outlined
        counter=""
        v-model="inputValue"
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
        :persistent-hint="true"
        :persistent-counter="true"
        readonly
    />
  </v-container>
</template>

<script>
export default {
  name: "HashFunction",
  inject: ["HASH_FUNCTIONS"],
  data() {
    return {
      inputValue: "",
      items: Object.keys(this.HASH_FUNCTIONS),
      select: Object.keys(this.HASH_FUNCTIONS)[0]
    }
  },
  computed: {
    outputValue: {
      get() {
        return this.HASH_FUNCTIONS[this.select](this.inputValue)
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