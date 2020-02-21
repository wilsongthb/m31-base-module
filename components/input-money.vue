<template>
  <div class="input-group">
    <div class="input-group-prepend">
      <app-select-currency
        style="border-radius: 0.25rem 0rem 0rem 0.25rem"
        ref="selectMoney"
        :disabled="disabled || disableSelectCurrency"
        :required="required"
        v-model="moneyCodeChild"
      ></app-select-currency>
    </div>

    <input
      type="number"
      class="form-control"
      v-model="quantityChild"
      :disabled="disabled"
      :required="required"
      ref="inNum"
      lang="en"
      step="0.01"
    />
  </div>
</template>

<script>
export default {
  props: {
    quantity: {},
    moneyCode: {},
    required: {
      default: false
    },
    disabled: {
      default: false
    },

    /**
     *
     * Desactivar seleccionar moneda
     *
     */
    disableSelectCurrency: {
      default: false
    }
  },
  methods: {
    parseFloat,
    setDefault() {
      this.$emit("update:quantity", 0);
      this.$refs.selectMoney.setDefault();
    },
    focusToQuantity() {
      this.$refs.inNum.focus();
    }
  },
  computed: {
    quantityChild: {
      get() {
        return this.quantity;
      },
      set(val) {
        this.$emit("update:quantity", val);
      }
    },
    moneyCodeChild: {
      get() {
        return this.moneyCode;
      },
      set(val) {
        this.$emit("update:moneyCode", val);
      }
    }
  }
};
</script>

<style></style>
