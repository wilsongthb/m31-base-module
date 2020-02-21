<template>
  <v-datepicker
    v-model="valueChild"
    :language="es"
    :disabled="disabled"
    input-class="form-control"
    format="dd/MM/yyyy"
    :disabledDates="disabledDates"
    placeholder="Fecha"
  >
    
  </v-datepicker>
</template>

<script>
import { es } from "vuejs-datepicker/src/locale/index";
import Datepicker from "vuejs-datepicker";
import moment from "moment";
import Vue from "vue";

Vue.component("v-datepicker", Datepicker);
let yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
const disableBeforeDates = {
  ranges: [
    {
      // Disable dates in given ranges (exclusive).
      from: new Date(0, 1, 1),
      to: yesterday
    }
  ]
};

export default {
  props: {
    value: {},
    disabled: {
      default: false
    },
    disableBeforeDates: {
      default: false
    },
    sDisableDays: {
      default: "[]"
    }
  },
  data: () => ({
    val: undefined,
    es: es,
    disabledDates: {}
  }),
  created() {
    if (this.disableBeforeDates) {
      this.disabledDates = {
        ...this.disabledDates,
        ...disableBeforeDates
      };
    }

    this.disabledDates["days"] = JSON.parse(this.sDisableDays);
  },
  computed: {
    valueChild: {
      get() {
        var time = this.$options.moment(this.value);
        return time.isValid() ? time.toDate() : null;
      },
      set(val) {
        this.$emit("input", moment(val).format("YYYY-MM-DD"));
      }
    }
  },
  methods: {
    
  }
  // watch: {
  //   value(to) {
  //     if (to && !this.val) {
  //       this.val = moment(to).toDate();
  //       return;
  //     }
  //     if (to === undefined) {
  //       this.val = undefined;
  //     }
  //   },
  //   val(to) {
  //     if (to) {
  //       this.$emit("input", moment(to).format("YYYY-MM-DD"));
  //     }
  //   }
  // }
};
</script>

<style></style>
