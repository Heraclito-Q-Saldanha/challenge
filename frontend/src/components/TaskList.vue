<script setup lang="ts">
    import Button from '@/volt/Button.vue';
    import NewTaskModal from './NewTaskModal.vue';
    import { ref } from 'vue';
    
    const newTask = ref(false);
    const tasks = ["foo", "bar", "jujuba"];
</script>
<template>
    <NewTaskModal v-if="newTask" :onClose="() => newTask = false" />
    <div class="w-full h-full rounded-2xl">
        <div class="flex flex-row w-full justify-between">
            <h1 class="font-semibold">Task Management</h1>
            <Button icon="pi pi-plus" v-on:click="newTask = !newTask" label="Add Task" variant="text" :pt="{root: 'flex gap-1 items-center hover:cursor-pointer',label: 'text-white dark:text-black'}"></Button>
        </div>
        <div v-for="task in tasks">
            {{ task }}
        </div>
    </div>
</template>