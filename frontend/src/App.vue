<script setup lang="ts">
    import { RouterView } from 'vue-router';
    import Toast from './volt/Toast.vue';
    import SideBar from '@/components/SideBar.vue';

</script>

<template>
  <Toast />
  <main>
    <div class="flex flex-row w-screen h-screen dark:bg-zinc-900 dark:text-white">
      <SideBar />
      <RouterView />
    </div>
  </main>
</template>