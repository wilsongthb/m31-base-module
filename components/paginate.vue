<template>
  <b-pagination
    :total-rows="total"
    :value="current_page"
    @change="
      current_page = $event;
      changePage($event);
    "
    :per-page="per_page"
    ref="paginate"
  ></b-pagination>
</template>

<script>
import { BPagination } from "bootstrap-vue";

export default {
  components: {
    BPagination
  },
  data: () => ({
    current_page: 1,
    total: 1,
    per_page: 1
  }),
  methods: {
    setPageOptions({ total, per_page, current_page }) {
      this.total = total;
      this.per_page = per_page;
      setTimeout(() => {
        this.current_page = current_page;
      }, 50);
    },
    changePage(event) {
      this.$emit("change", event);
    }
  }
};
</script>

<style></style>
