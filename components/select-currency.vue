<template>
  <select
    :disabled="disabled"
    class="custom-select"
    ref="select"
    v-model="valueChild"
    :required="required"
  >
    <option v-for="(l, i) in list" :key="i" :value="i">
      {{ verbose ? l.name : l.symbol }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    value: {
      default: undefined
    },
    verbose: {
      default: true
    },
    required: {
      default: false
    },
    disabled: {
      default: false
    }
  },
  methods: {
    setDefault() {
      this.$emit("input", this.$options.defaultCurrency);
    },
    getEl() {
      return this.$refs.select;
    }
  },
  computed: {
    // moneyCodeDef() {
    //   return this.$options.defaultCurrency;
    // },
    valueChild: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      }
    },
    list() {
      return this.$options.currencyList;
    }
  }
};
</script>
