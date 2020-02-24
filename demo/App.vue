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
        <table class="table table-bordered">
          <app-tr-weekpicker ref="elWeek" :dayToBegin="1"></app-tr-weekpicker>
        </table>
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
    
    // this.$refs.elWeek.setDate("2019-04-01", "YYYY-DD-MM");

    // setTimeout(() => {
    //   this.$refs.elWeek.setDate("2021-04-01");
    // }, 3000);
  },

  methods: {
    //
  }
};
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
@import url("https://use.fontawesome.com/releases/v5.0.7/css/all.css");
</style>
