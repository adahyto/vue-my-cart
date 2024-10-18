<template>
  <v-app id="inspire">
    <c-header></c-header>
    <div class="cart-wrapper">
      <c-cart></c-cart>
    </div>
    <footer><a href="https://doner.cloud">doner.cloud</a></footer>
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
    margin-top: 75px;
  }
  footer {
    background:black;
    a {
      color: white;
      text-decoration: none;
    }
  }
</style>