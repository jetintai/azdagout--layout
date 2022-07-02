<template>
  <div class="container">
    <SimpleComponent @add-task="addTask" />
  </div>
</template>

<script lang="ts" setup>
import SimpleComponent from "@/components/SimpleComponent.vue";

</script>

<style lang = "scss" scoped>
.container {
  max-width: 650px;
  width: 100%;
  padding: 40px 16px;
  margin-inline: auto;
}

@media screen and (min-width: 525px) {
  .container {
    padding: 64px 32px;
  }
}
</style>
