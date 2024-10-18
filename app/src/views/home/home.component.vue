<template>
  <v-app id="inspire">
    <c-header></c-header>
    <div class="cart-wrapper">
      <c-cart></c-cart>
    </div>
    <footer><a href="https://doner.cloud" target="_blank">doner.cloud</a></footer>
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
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 5px 10px;
    a {
      color: black;
      text-decoration: none;
    }
  }
</style>