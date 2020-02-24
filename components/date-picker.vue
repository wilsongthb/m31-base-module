<template>
  <v-datepicker
    v-model="valueChild"
    :language="$options.lang"
    :disabled="disabled"
    input-class="form-control"
    :format="formatDate"
    :disabledDates="comDisabledDates"
    placeholder="Fecha"
  >
  </v-datepicker>
</template>
<script>
import Datepicker from "vuejs-datepicker";

let yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
const beforeDates = {
  from: new Date(0, 1, 1),
  to: yesterday
};

export default {
  components: {
    "v-datepicker": Datepicker
  },

  // directives
  // filters

  props: {
    formatDate: {
      default: "dd/MM/yyyy"
    },
    value: {},
    disabled: {
      default: false
    },
    disableBeforeDates: {
      default: false
    },
    disabledDates: {
      type: Array,
      default: () => []
    }
  },

  data: () => ({
    val: undefined,
    lang: null
  }),

  computed: {
    comDisabledDates() {
      return {
        ranges: [
          ...this.disabledDates,
          this.disableBeforeDates ? beforeDates : {}
        ]
      };
    },
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
