<script setup lang="ts">
    import Button from '@/volt/Button.vue';
    import Divider from 'primevue/divider';
    import SideBarButton from './SideBarButton.vue';
    import ToggleSwitch from '@/volt/ToggleSwitch.vue';
    import { ref, watch } from 'vue';

    let isDark = ref(true);

    watch(isDark, (value) => {
        if(value){
            document.documentElement.classList.add("dark");
        }else{
            document.documentElement.classList.remove("dark");
        }
    });
</script>

<template>
    <div class="flex items-center flex-col w-18 h-full p-3 gap-4 bg-slate-100 dark:bg-zinc-950">
        <div class="flex w-full items-center flex-col">
            <Button icon="pi pi-user" class="w-full aspect-square" style="font-size: 1.5rem" />
        </div>
        <Divider type="solid" />
        <div class="flex w-full h-full gap-2 items-center flex-col">
            <SideBarButton icon="pi pi-home" path="/" />
            <SideBarButton icon="pi pi-chart-pie" path="/statistics" />
        </div>
        <Divider type="solid" />
        <div class="flex w-full items-center flex-col">
            <ToggleSwitch v-model="isDark" />
            <Button icon="pi pi-sign-out" variant="text" class="w-full aspect-square" style="font-size: 1.5rem" />
        </div>
    </div>
</template>