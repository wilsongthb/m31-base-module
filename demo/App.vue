<template>
  <div class="container">
    <!-- Puedes usar los componentes aqui -->
    <div class="row">
      <div class="col">
        {{ 341 | money }}
      </div>
      <div class="col">
        <app-span-money :quantity="43" :moneyCode="1"></app-span-money>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <app-select-currency v-model="currency"></app-select-currency>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    //
  },

  // directives
  // filters

  props: {
    //
  },

  data: () => ({
    currency: 1
  }),

  computed: {
    //
  },

  watch: {
    //
  },

  mounted() {
    //
  },

  methods: {
    //
  }
};
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
</style>
