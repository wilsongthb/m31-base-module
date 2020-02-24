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

let yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
const disableBeforeDates = {
  ranges: [
    {
      from: new Date(0, 1, 1),
      to: yesterday
    }
  ]
};

export default {
  components: {
    "v-datepicker": Datepicker
  },

  // directives
  // filters

  props: {
    value: {},
    disabled: {
      default: false
    },
    disableBeforeDates: {
      default: false
    },
    disabledDates: {
      type: Object,
      default: () => {}
    }
  },

  data: () => ({
    val: undefined,
    es: es
  }),

  computed: {
    valueChild: {
      get() {
        var time = this.$options.moment(this.value);
        return time.isValid() ? time.toDate() : null;
      },
      set(val) {
        this.$emit("input", this.$options.moment(val).format("YYYY-MM-DD"));
      }
    }
  },

  watch: {
    //
  },

  created() {
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

<style scoped></style>
