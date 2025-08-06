<script setup lang="ts">
    import { RouterView } from 'vue-router';
    import SideBar from '@/components/SideBar.vue';
</script>

<template>
  <main>
    <div class="flex w-screen h-screen">
      <SideBar />
      <RouterView />
    </div>
  </main>
</template>