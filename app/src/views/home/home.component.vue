<template>
  <v-app id="inspire">
    <c-header></c-header>
    <div class="cart-wrapper">
      <c-cart></c-cart>
    </div>
  </v-app>
</template>
 
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class HomeComponent extends Vue {}
</script>
 
<style scoped lang="css">
  .cart-wrapper {
    margin-top: 85px;
  }
</style>