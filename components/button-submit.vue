<template>
  <button
    class="btn btn-primary"
    :disabled="disabled || loading"
    @click.prevent="handleClick($event)"
  >
    <i v-show="loading" class="fa fa-spinner fa-spin mr-1"></i>
    <slot>
      <i class="fa fa-save"></i>
      {{ text || "Guardar" }}
    </slot>
  </button>
</template>
<script>
export default {
  components: {
    //
  },

  // directives
  // filters

  props: {
    debounce: {
      default: 10000
    },
    disabled: {
      default: false
    },
    text: {
      default: ""
    }
  },

  data: () => ({
    loading: false,
    timeOutInstance: null
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
    cleanLoading() {
      this.loading = false;
      clearTimeout(this.timeOutInstance);
    },
    handleClick(e) {
      this.$emit("click", e);

      if (!this.loading) {
        this.$emit("oneClick", e);
        if (this.debounce > 0) {
          this.loading = true;
          this.timeOutInstance = setTimeout(() => {
            this.loading = false;
          }, this.debounce);
        }
      }
    }
  }
};
</script>

<style></style>
