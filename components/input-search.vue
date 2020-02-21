<template>
  <div class="input-group input-group-alternative">
    <!-- 
      v-model="valueChild"
     -->
    <input
      class="form-control form-control-alternative"
      type="text"
      :placeholder="placeholder"
      @keyup="keyUpHandler($event)"
      :name="name"
      :value="value"
      @input="$emit('input', $event.target.value)"
      v-input-focused
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

export default {
  props: {
    name: {
      default: "app-input-search"
    },
    placeholder: {
      type: String,
      default: "Buscar ..."
    },
    value: {
      default: ""
    }
  },
  computed: {
    // valueChild: {
    //   get() {
    //     return this.value;
    //   },
    //   set(val) {
    //     this.$emit("input", val);
    //   }
    // }
  },
  methods: {
    keyUpHandler(e) {
      let listKeyControlsNoSpected = [37, 38, 39, 40, 18, 17, 9, 16];
      if (listKeyControlsNoSpected.includes(e.keyCode)) {
        return;
      }
      if (e.keyCode == 13) {
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
