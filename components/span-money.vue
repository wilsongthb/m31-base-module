<template>
  <span>
    <span>{{ format(moneyCodeChild, quantity) }}</span>
  </span>
</template>

<script>
import { format } from "money-formatter";

export default {
  props: {
    moneyCode: {
      required: true
    },
    quantity: {
      required: true
    }
    // convertToDefault: {
    //   default: true
    // }
  },
  computed: {
    moneyCodeChild() {
      // console.log(this.moneyCode);
      return this.$options.currencyList[
        this.moneyCode ? this.moneyCode : this.$options.defaultCurrency
      ].code;
      // return currencyList[this.moneyCode].code;
    }
  },
  methods: {
    format
  }
};
</script>
