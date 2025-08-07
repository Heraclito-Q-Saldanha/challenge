<script setup lang="ts">
    import InputText from '@/volt/InputText.vue';
    import Button from "@/volt/Button.vue";
    import { defineProps, computed } from 'vue';

    const props = defineProps<{
        onClose: () => void,
    }>();

</script>
<template>
    <div class="fixed top-0 left-0 z-10 flex w-screen h-screen items-center justify-center bg-current/20">
        <div class="flex flex-col w-2/3 h-2/3 bg-slate-100 rounded-lg p-6 gap-4">
            <div class="flex flex-row w-full justify-between">
                <h1 class="font-semibold">Create New Task</h1>
                <Button icon="pi pi-times" variant="text" :onclick="props.onClose" />
            </div>
            <form class="">
                <h2>Title</h2>
                <InputText placeholder="Task title" />
                <h2>Description</h2>
                <InputText placeholder="Task title" />
            </form>
        </div>
    </div>
</template>