<template>
  <div class="container">
    <div class="row">
      <RightNav></RightNav>
    </div>
  </div>
  <div class = "content">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <br>
          <br>
          <br>
        </div>
        <div class="col-12">
          <br>
          <br>
          <br>
        </div>
      </div>
    </div>
  <router-view></router-view>
  </div>

</template>

<script lang="ts" setup>
import RightNav from "@/components/main/RightNav";

</script>

<style lang="scss" scoped>

</style>
