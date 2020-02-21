<template>
  <tr>
    <td v-show="loading" :colspan="colspan" class="text-center">
      <i class="fas fa-spinner fa-spin"></i>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    colspan: {
      default: 1
    },
    debounce: { default: 1000 }
  },
  data: () => ({
    loading: false
  }),
  methods: {
    load(time = 1000) {
      // console.log(600);

      this.loading = true;
      setTimeout(
        () => {
          this.loading = false;
        },
        time ? time : this.time
      );
    },
    addLoading() {},
    state(loadingStatus) {
      this.loading = loadingStatus;
    }
  }
};
</script>

<style></style>
