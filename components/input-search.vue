<template>
  <div class="input-group input-group-alternative">
    <input
      class="form-control form-control-alternative"
      type="text"
      :placeholder="placeholder"
      @keyup="keyUpHandler($event)"
      :value="value"
      @input="$emit('input', $event.target.value)"
      v-app-input-focused
    />
    <div class="input-group-append" @click.prevent="search()">
      <span class="input-group-text">
        <i class="fa fa-search"></i>
      </span>
    </div>
  </div>
</template>

<script>
import { debounce } from "lodash";

const LIST_KEY_CONTROLS_NO_SPECTED = [37, 38, 39, 40, 18, 17, 9, 16];
const KEY_CODE_ENTER = 13;

export default {
  props: {
    placeholder: {
      type: String,
      default: "Buscar ..."
    },
    value: {
      default: ""
    }
  },
  methods: {
    keyUpHandler(e) {
      if (LIST_KEY_CONTROLS_NO_SPECTED.includes(e.keyCode)) {
        return;
      }
      if (e.keyCode == KEY_CODE_ENTER) {
        this.search(e.target.value);
        return;
      }
      this.asyncKeyUpHandler(e.target.value, this);
    },
    asyncKeyUpHandler: debounce((v, vm) => {
      vm.search(v);
    }, 350),
    search() {
      this.$emit("search", this.value);
    }
  }
};
</script>

<style></style>
