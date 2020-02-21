<template>
  <div>
    <div v-if="member">
      <small
        class="form-text text-danger"
        v-for="(l, index) in member"
        :key="index"
      >
        {{ l }}
      </small>
      <!-- <div class="invalid-feedback" v-for="(l,index) in member" :key="index">{{l}}</div> -->
    </div>
  </div>
</template>

<script>
/** Sirve para mostrar un array de strings en mensajes pequeños y cortitos :D */

export default {
  props: {
    member: {}
  }
};
</script>

<style></style>
